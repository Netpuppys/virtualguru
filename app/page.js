import Image from "next/image";
import Banner from "./Components/Banner";
import WhyShouldAttend from "./Components/WhyShouldAttend";

export default function Home() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="bg-[#FF914D] absolute top-0 left-0 -z-10 bg-opacity-30 w-[25vw] aspect-[1.2/1] blur-2xl rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <Banner />
      <WhyShouldAttend />
    </div>
  );
}
