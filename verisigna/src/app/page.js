import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Welcome to <span className="text-blue-600">SignaFlow</span>
        </h1>
        <p className="text-600 text-lg mb-8">
          Send, sign, and manage digital documents — securely and effortlessly.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/admin"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go to Admin Dashboard
          </a>
          <a
            href="/sign"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Try Signing a Document
          </a>
        </div>
        </div>
      </main>
      
    </div>
  );
}
