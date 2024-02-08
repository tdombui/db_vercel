import Image from "next/image";
import background from "../../../../public/bg.png";

export default function Background() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[-10] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    ></div>
  );
}
