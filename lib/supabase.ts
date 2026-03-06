import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Database types
export interface FormSubmission {
  id: string;
  type: string;
  name: string;
  email: string;
  phone: string;
  website?: string;
  project_type?: string;
  seo_goal?: string;
  ad_spend?: string;
  service?: string;
  message?: string;
  status: 'new' | 'contacted' | 'closed';
  submitted_at: string;
  created_at?: string;
}

export interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  status: 'new' | 'contacted' | 'closed';
  submitted_at: string;
  created_at?: string;
}

export interface NewsletterSubscription {
  id?: number;
  email: string;
  subscribed_at: string;
  created_at?: string;
}
