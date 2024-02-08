export default function BackgroundDark() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[-10] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/bg-dark.png')" }}
    ></div>
  );
}
