import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import Image from "next/image";
import { PiCertificateFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";
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
            <IoBookSharp />
            About Me
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4">
          <BlurFade className=" col-span-4 border rounded-md shadow-md p-6">
            <div className="flex items-center gap-2  font-bold text-xl">
              <FaGraduationCap />
              Education
            </div>
            <div className="flex flex-col lg:flex-row space-y-5 items-center justify-around mt-4 ">
              <Image
                className="rounded-full border-4"
                src={"/eastwoods.jpg"}
                width={120}
                height={80}
                alt="eastwoods logo"
              ></Image>
              <div className="lg:text-left text-center  ">
                <div className="font-bold text-lg">
                  Eastwoods Professional College of Science and
                  Technology
                </div>
                <div className="opacity-80 ">
                  Bachelor of Science in Information Technology
                </div>
                <div className="opacity-80">2020 - 2024</div>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            inView
            delay={0.15 * 2}
            className="border rounded-md shadow-md p-6 col-span-4"
          >
            <div className="flex items-center gap-2 font-bold text-xl">
              <PiCertificateFill />
              My Certificates
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row  items-center justify-center gap-4 p-4">
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
