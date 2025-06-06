import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";
import { PiCertificateFill } from "react-icons/pi";
import { BlurFade } from "@/components/magicui/blur-fade";
function Aboutme() {
  return (
    <>
      <div className="max-w-4xl m-auto  rounded-sm">
        <div className="flex items-center p-4 space-x-4">
          <Link
            className="text-sm link link-hover font-mono flex items-center hover:opacity-60 gap-2"
            href={"/"}
          >
            <FaArrowLeftLong />
            Back
          </Link>
          <div className="flex items-center gap-2 text-xl">
            <CgWebsite />
            About Me
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 p-6">
          <BlurFade className=" col-span-4 border rounded-md shadow-md p-6">
            <div className=" opacity-80 ">
              Hi! 👋 Im Rainer Morales, front-end developer focused on building
              interactive and responsive web apps using React (or Next.js) and
              Firebase 🔥. I enjoy crafting smooth, clean interfaces with
              Tailwind CSS and Framer Motion — bringing ideas to life through
              animation and modern design. I graduated with a Bachelor of
              Science in Information Technology from Eastwoods Professional
              College of Science and Technology in July 2024 🎓. I love playing
              the organ and piano 🎹 — music helps me stay creative and focused.
            </div>
          </BlurFade>
          <BlurFade
            inView
            delay={0.15 * 2}
            className="border rounded-md shadow-md p-6 col-span-4"
          >
            <div className="flex items-center gap-2 p-4 font-bold text-xl">
              <PiCertificateFill />
              My Certificates
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row  items-center justify-center gap-4 ">
              {[
                { src: "/intern.jpg", alt: "intern logo" },
                { src: "/east.jpg", alt: "east logo" },
                { src: "/ircite.jpg", alt: "ircite logo" },
              ].map((img, i) => (
                <div
                  key={i}
                  className="border rounded-md shadow-md w-72 h-60 relative overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  ></Image>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </>
  );
}
export default Aboutme;
