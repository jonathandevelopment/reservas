import AuthForm from './auth-form'

export default function Home() {
  return (
    <div className='container'>
      <div className="">
            <div className="py-10">
              <h1 className="text-3xl capitalize">Bienvenido al sistema de Reservas</h1>
              <p className="">
              Rápido, simple y seguro.
              </p>
            </div>
            <div className="auth-widget">
              <h1 className="text-3xl capitalize">Ingresar</h1>
              <AuthForm />
            </div>
            <div className="auth-widget">
              <h1 className="text-3xl capitalize">Crear Una Cuenta</h1>
              <AuthForm />
            </div>
          </div>
    </div>
   
  )
}