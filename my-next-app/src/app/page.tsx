import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 text-center .font-\[family-name\:var\(--font-geist-sans\)\] {
    font-family: var(--font-geist-sans);
}">

      <h1 className="text-4xl font-bold">
        Welcome to Contact Manager
      </h1>

      <p className="text-lg text-gray-600 max-w-xl">
        Manage your contacts efficiently and securely.
      </p>

      <Image
        src="/contactManger.png"
        alt="Contact Manager"
        width={320}
        height={320}
        className="rounded-xl shadow-lg"
      />

      <p className="text-lg text-gray-600">
        Start managing your contacts now!
      </p>

    </div>



  );
}
