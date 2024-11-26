import CircleText from "./CircleText";

export default function Footer() {
  return (
    <div className="min-w-screen relative min-h-[100vh] overflow-hidden bg-sky-900 sm:min-h-[50vh]">
      <h2 className="gird w-full gap-[3vw] py-10 text-center font-black uppercase leading-[.7] text-yellow-400">
        <div className="text-[34vw]">Eat</div>
        <div className="grid gap-[3vw] md:flex md:flex-wrap">
          <span className="inline-block text-[11vw] md:text-[27vw]">Sleep</span>
          <span className="inline-block text-[11vw] md:text-[27vw]">Train</span>
          <span className="inline-block text-[34vw] md:text-[40vw]">Rest</span>
          <span className="inline-block text-[11vw] md:text-[27vw]">
            Repeat
          </span>
        </div>
      </h2>
      <div className="absolute bottom-10 z-30 size-28 origin-center max-sm:left-1/2 max-sm:-translate-x-1/2 sm:right-24 sm:top-5 md:size-48">
        <CircleText />
      </div>
    </div>
  );
}
