import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900 text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/alpha-logo.png"
              alt="Alpha Servicios de Limpieza Logo"
              className="invert w-32 md:w-48 lg:w-64"
              width={200}
              height={200}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/20 before:lg:h-[360px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white">
          Alpha Servicios de Limpieza
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center max-w-2xl px-4 text-gray-400">
          Calidad y Confianza para tus Espacios. Expertos en limpieza profesional para centros de salud, oficinas y bancos.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="/servicios"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Conoce nuestros Servicios
          </a>
          <a
            href="/contacto"
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
          >
            Solicita tu Presupuesto
          </a>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* Aquí irían las otras secciones, como la de servicios y contacto */}
      </div>
    </main>
  );
}
