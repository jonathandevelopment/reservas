import Link from "next/link";
import AuthForm from "../auth-form";
import LoginForm from "../login-form";
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div>
        <Navbar/>
        <div className="container">
      <div className="max-w-[600px] m-auto p-10 border rounded-md shadow-md mt-56">
        <div className="auth-widget">
          <h1 className="text-3xl capitalize my-2">Ingresar</h1>
          <LoginForm />
        </div>
        <div className="flex justify-between">
            <Link className="hover:underline" href={"/create-account"} >Crear cuenta</Link>
            <Link className="hover:underline"  href={"#"} >Recuperar contraseña</Link>
        </div>
      </div>
    </div>
    </div>
    
  );
}
