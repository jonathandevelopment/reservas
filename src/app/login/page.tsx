'use client'
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useSearchParams } from 'next/navigation';

export default function Login() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const showerror:boolean = error!="";
  return (
    <div>
    <div className="container">
      <div className="max-w-[600px] m-auto p-10 border rounded-md shadow-md mt-56">
        <div className="auth-widget">
          <h1 className="text-3xl capitalize my-2">Ingresar</h1>
          <form action="/auth/login" method="post">
            <label htmlFor="email">Correo</label>
            <input name="email" className="block text-gray-700 text-sm font-bold mb-2" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" className="block text-gray-700 text-sm font-bold mb-2" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Ingresar</button>
            {/* <button formAction="/auth/sign-up">Sign Up</button> */}
            {showerror? <label style={{color:'red',fontWeight:'bold'}}>{error}</label> : "" }
        </form>
        </div>
        <div className="flex justify-between">
            <Link className="hover:underline" href={"/create-account"} >Crear cuenta</Link>
            <Link className="hover:underline"  href={"#"} >Recuperar contraseña</Link>
        </div>
      </div>
    </div>
    </div>
  )
}