
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AuthFormProps {
  userType: 'admin' | 'customer';
}

const AuthForm = ({ userType }: AuthFormProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const checkAdminCount = async () => {
    if (userType !== 'admin') return true;
    
    try {
      const { count, error } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })
        .eq('role', 'admin');
      
      if (error) throw error;
      
      if (count && count >= 2) {
        toast({
          title: "Registration Limit Reached",
          description: "Only 2 admin accounts are allowed. Please contact support if you need assistance.",
          variant: "destructive",
        });
        return false;
      }
      
      return true;
    } catch (error: any) {
      console.error('Error checking admin count:', error);
      return true; // Allow registration if check fails
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        // Check admin limit before signup
        if (userType === 'admin') {
          const canRegister = await checkAdminCount();
          if (!canRegister) {
            setLoading(false);
            return;
          }
        }

        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            }
          }
        });

        if (error) throw error;

        if (data.user) {
          // Update user role if admin
          if (userType === 'admin') {
            const { error: updateError } = await supabase
              .from('profiles')
              .update({ role: 'admin' })
              .eq('id', data.user.id);
            
            if (updateError) throw updateError;
          }

          toast({
            title: "Success!",
            description: "Account created successfully. Please check your email for verification.",
          });
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        // Check user role and redirect accordingly
        if (data.user) {
          const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', data.user.id)
            .single();

          if (profileError) {
            console.error('Error fetching profile:', profileError);
          }

          // Verify user has correct role for the page they're trying to access
          if (profileData?.role !== userType) {
            await supabase.auth.signOut();
            toast({
              title: "Access Denied",
              description: `This page is for ${userType}s only. Please use the correct login page.`,
              variant: "destructive",
            });
            setLoading(false);
            return;
          }

          toast({
            title: "Welcome back!",
            description: "You have been signed in successfully.",
          });

          // Redirect based on user type
          window.location.href = userType === 'admin' ? '/admin' : '/products';
        }
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {userType === 'admin' ? 'Admin' : 'Customer'} {isSignUp ? 'Sign Up' : 'Sign In'}
        </CardTitle>
        <CardDescription className="text-center">
          {isSignUp ? 'Create your account' : 'Welcome back'}
          {userType === 'admin' && isSignUp && (
            <span className="block text-orange-600 mt-2 text-sm">
              Note: Only 2 admin accounts are allowed
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleAuth} className="space-y-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600 hover:underline"
          >
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
