import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { Database } from '@/app/database.types'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

  const { data, error }= await supabase.auth.signInWithPassword({
    email,
    password,
  })
if(error){
  return NextResponse.redirect(new URL('/login?error=Correo o contraseña incorrecta',requestUrl), {
    status: 301,
  })
}
  return NextResponse.redirect(new URL('/account',requestUrl), {
    status: 301,
  })
}