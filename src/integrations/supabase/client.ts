// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ysovmxbfrlzzodpehtrs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlzb3ZteGJmcmx6em9kcGVodHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NjQ0NjYsImV4cCI6MjA2NDM0MDQ2Nn0.RHIy6vjamDVDwUiLrxx-XF6uI2r1FZKt2oGlRaYBIRg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);