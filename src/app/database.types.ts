export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          lastname: string | null
          name: string | null
          avatar_url: string | null
          username: string | null
          phone: string | null
        }
        Insert: {
          id: string
          updated_at?: string | null
          lastname?: string | null
          name?: string | null
          avatar_url?: string | null
          username?: string | null
          phone: string | null
        }
        Update: {
          id?: string
          updated_at?: string | null
          lastname?: string | null
          name?: string | null
          avatar_url?: string | null
          username?: string | null
          phone: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}