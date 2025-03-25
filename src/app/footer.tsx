import Link from "next/link";





export default function Footer() {
  return (
    <div className=" flex flex-col gap-10 md:flex-row justify-between w-full p-10 font-serif">
      {/* Première section */}
      <div className="gap-5 w-fit h-fit md:w-1/4 flex flex-col md:gap-9">
        <div className="text-3xl">Yann D.O</div>
        <div className="md:text-xl">
          221B Baker Street<br />
          London, UK
        </div>
        <div className="md:text-xl">
          Made with <Link href="#" className="underline">Squarespace</Link>
        </div>
      </div>

      {/* Deuxième section */}
      <div className="flex gap-20 md:gap-40">
        {/* Bloc About */}
        <div className="flex flex-col gap-5">
          <div className="text-3xl md:text-5xl">About</div>
          <div className="flex flex-col gap-2 md:text-xl lg:text-2xl">
            <Link href="/" className="underline">Work</Link>
            <Link href="/about" className="underline">Who I am</Link>
            <Link href="/contact" className="underline">Contact Me</Link>
          </div>
        </div>

        {/* Bloc Projects */}
        <div className="flex flex-col gap-5">
          <div className="text-3xl md:text-5xl">Projects</div>
          <div className="flex flex-col gap-2 md:text-xl lg:text-2xl">
            <Link href="/web_projects" className="underline">Web Projects</Link>
            <Link href="/mobile_projects" className="underline">Mobile Projects</Link>
            <Link href="/design_projects" className="underline">UX/UI Projects</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
