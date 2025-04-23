import Image from "next/image";

export function Logo() {
	return (
		<div className="flex items-center gap-x-2">
			<Image
				src={"/logoSmall.svg"}
				width={48}
				height={48}
				alt="Be a Dev logo"
			/>

			<strong className="font-SatoshiBold text-[2rem] text-neutral800 tracking-[-0.96px] leading-normal">
				Beadev
			</strong>
		</div>
	);
}
