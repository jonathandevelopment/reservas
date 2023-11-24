import Link from "next/link";
import AuthForm from "./auth-form";
import LoginForm from "./login-form";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div >
      <Navbar />
      <div className="container">
      <div className="py-10 grid grid-cols-1 gap-10 place-items-center">
          <h1 className="text-3xl capitalize">
            Bienvenido al sistema de Reservas
          </h1>
          <p className="">Rápido, simple y seguro.</p>
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href={"/login"}
          >
            Ingresar
          </Link>
        </div>

        {/* <div className="auth-widget">
          <AuthForm />
        </div> */}
      </div>
    </div>
  );
}
