import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Image
        src="/logo.jpg"
        alt="Pulsating logo"
        width={0}
        height={0}
        sizes="35vw"
        style={{ width: '35%', height: 'auto' }} // optional
        priority
        className="animate-pulse object-cover"
      />
    </div>
  );
}