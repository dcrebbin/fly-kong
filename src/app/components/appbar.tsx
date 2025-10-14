import Image from "next/image";
import posthog from "posthog-js";

export default function Appbar() {
  return (
    <div className="w-78 absolute z-[100] flex h-fit flex-col items-center justify-start gap-2 rounded-lg bg-transparent px-2 backdrop-blur-[3px]">
      <h1 className="flex h-fit items-center justify-center px-3 pb-0 pt-3 text-center font-[Cute] text-2xl leading-none text-white drop-shadow-[0_0_4px_rgba(0,0,0,1)] md:text-4xl">
        soeng kong上港
      </h1>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://savecantonese.org"
        onClick={() => {
          posthog.capture("savecantonese_referral");
        }}
        className="flex h-fit flex-row items-center justify-center gap-1 p-0 pb-2 text-center font-[Cute] text-base leading-none text-white underline drop-shadow-[0_0_2px_rgba(0,0,0,1)] md:text-xl md:no-underline"
      >
        <span className="underline">savecantonese.org</span>
        <Image
          width={100}
          height={100}
          src="/images/savecanto.webp"
          alt="savecanto"
          className="h-10 w-auto"
        />
      </a>
    </div>
  );
}
