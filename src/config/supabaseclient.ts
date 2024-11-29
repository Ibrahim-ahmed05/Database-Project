// src/app/services/supabase.service.ts
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from './environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    // Initialize Supabase client
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  /**
   * Sign Up (Registration)
   * @param email - User email
   * @param password - User password
   * @returns Promise with user data or error
   */
  async signUp(email: string, password: string): Promise<any> {
    try {
      const { data, error } = await this.supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error('Sign-up error:', error.message);
        throw error;
      }

      console.log('Sign-up successful:', data);
      return data;
    } catch (err) {
      console.error('Error in sign-up process:', err);
      throw err;
    }
  }

  /**
   * Sign In (Login)
   * @param email - User email
   * @param password - User password
   * @returns Promise with user data or error
   */
  async signIn(email: string, password: string): Promise<any> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Sign-in error:', error.message);
        throw error;
      }

      console.log('Sign-in successful:', data);
      return data;
    } catch (err) {
      console.error('Error in sign-in process:', err);
      throw err;
    }
  }

  /**
   * Update User Metadata
   * @param data - Metadata object (e.g., { username })
   * @returns Promise with update result or error
   */
  async updateUserMetadata(data: object): Promise<any> {
    try {
      const { data: userData, error } = await this.supabase.auth.updateUser({ data });

      if (error) {
        console.error('Error updating user metadata:', error.message);
        throw error;
      }

      console.log('User metadata updated:', userData);
      return userData;
    } catch (err) {
      console.error('Error in updating user metadata:', err);
      throw err;
    }
  }
}
