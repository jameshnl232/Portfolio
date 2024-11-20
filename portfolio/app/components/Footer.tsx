import CircleText from "./CircleText";

export default function Footer() {
  return (
    <div className="min-h-[50vh] w-screen overflow-hidden bg-sky-900 relative">
      <h2 className="gird w-full gap-[3vw] py-10 text-center font-black uppercase leading-[.7] text-yellow-400 ">
        <div className="text-[34vw]">Eat</div>
        <div className="grid gap-[3vw] text-[34vw] md:flex md:flex-wrap md:text-[11vw]">
          <span className="inline-block max-md:text-[27vw]">Sleep</span>
          <span className="inline-block max-md:text-[27vw]">Train</span>
          <span className="inline-block max-md:text-[48vw]">Rest</span>
          <span className="inline-block max-md:text-[27vw] md:text-[27vw]">
            Repeat
          </span>
        </div>
      </h2>
      <div className="absolute right-24 top-5 z-50 size-28 origin-center md:size-48 ">
        <CircleText />
      </div>
    </div>
  );
}
