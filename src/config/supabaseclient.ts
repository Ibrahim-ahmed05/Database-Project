// src/app/services/supabase.service.ts
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../config/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }
  //  Register 
   signUp(username:string,email:string,password:string)
   {
    return this.supabase.auth.signUp({email,password})
   }
  //  Login
   signIn(username:string,email:string,password:string)
   {
    return this.supabase.auth.signInWithPassword({email,password})
   }
}
