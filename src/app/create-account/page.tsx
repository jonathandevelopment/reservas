import Link from "next/link";
import AuthForm from "../auth-form";
import LoginForm from "../login-form";
import Navbar from "../components/Navbar";

export default function Create() {
  return (
    <div>
      <Navbar/>
<div className="container">
      <div className="max-w-[600px] m-auto p-10 border rounded-md shadow-md mt-56">
        <div className="auth-widget">
          <h1 className="text-3xl capitalize my-2">Crear cuenta</h1>
          <AuthForm />
        </div>
      </div>
    </div>
    </div>
    
  );
}
