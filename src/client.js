// Step 1c: Connect your project to your database
// 📍 Checkpoint 0: After completing Steps 0 and 1, you should now have an empty app that's connected to your database.

import { createClient } from "@supabase/supabase-js";
const URL = 'https://zutaspfcxedbxiarysun.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1dGFzcGZjeGVkYnhpYXJ5c3VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5MTc1MzUsImV4cCI6MjAwNjQ5MzUzNX0.uKP9JtCQ_6pGvqvOKIuG5wtnB-lfN3zazpQGf8OWuCU';

export const supabase = createClient(URL, API_KEY);