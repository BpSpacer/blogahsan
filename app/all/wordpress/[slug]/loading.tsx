import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Image
        src="/logo-dark.png" 
        alt="Loading..."
        width={100}
        height={100}
        className="animate-spin"
      />
    </div>
  );
}
