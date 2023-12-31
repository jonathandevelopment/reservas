'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from './database.types'


//const redirectUrl = process.env.NEXT_VERCEL_REDIRECT_URL;

export default function LoginForm() {
  const supabase = createClientComponentClient<Database>()

  return (
    <Auth
      supabaseClient={supabase}
      view="sign_in"
      appearance={{ theme: ThemeSupa }}
      theme="light"
      showLinks={false}
      providers={[]}
      redirectTo={`/account`}
    />
  )
} 