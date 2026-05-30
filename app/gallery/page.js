import Image from "next/image";

export default function Gallery() {
  return (
    <main className="container">
      <h1>Before & After</h1>

      <div className="gallery">
        <Image
          src="/patio-before.jpg"
          width={500}
          height={300}
          alt="Before"
        />

        <Image
          src="/patio-after.jpg"
          width={500}
          height={300}
          alt="After"
        />
      </div>
    </main>
  );
}