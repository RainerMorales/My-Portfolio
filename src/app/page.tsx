import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { IoBookSharp } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AuroraText } from "@/components/magicui/aurora-text";
import { FaArrowRightLong } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Projects from "./Projects/page";
export default function Home() {
  return (
    <>
      <BlurFade
        inView
        className="grid gap-6 justify-center mt-20 max-w-2xl m-auto"
      >
        <div className="m-auto">
          <Image
            className="rounded-full border-4 "
            src="/profile.jpg"
            width={200}
            height={80}
            alt="profile"
          ></Image>
        </div>
        <div className="text-center">
         
          <div className="m-2">
            <div className="text-4xl font-bold">
              <AuroraText>Web</AuroraText> Developer
            </div>
            <div className="text-sm opacity-80">Bataan, Philippines</div>
          </div>
          <div className="flex justify-center mt-6 gap-4">
            <a href="https://www.linkedin.com/in/rainermorales/">
              <FaLinkedin size={34} />
            </a>
            <a href="https://github.com/RainerMorales">
              <FaSquareGithub size={34} />
            </a>
            <a href="https://www.facebook.com/ka.rainerrr">
              <FaFacebookSquare size={34} />
            </a>
            <a href="https://www.instagram.com/ka.rainerr?igsh=MWw1dXVqbGtwd2xsdQ==">
              <FaSquareInstagram size={34} />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a download href="/RainerMorales_ReactDeveloper.pdf">
            <ShimmerButton className="text-sm">Download CV</ShimmerButton>
          </a>
        </div>
      </BlurFade>
      <div className="mt-20 p-2 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-1 gap-4 max-w-4xl m-auto ">
        <BlurFade
          delay={0.15}
          inView
          className="col-span-4  space-y-4 p-6  rounded-md border "
        >
          <div className="flex items-center justify-between ">
            <div className="font-bold text-lg flex items-center gap-2">
              <IoBookSharp />
              About
            </div>
            <Link
              className="text-xs flex items-center gap-1 link link-hover font-mono hover:opacity-60 opacity-80"
              href={"/Aboutme"}
            >
              Certificates
              <FaArrowRightLong />
            </Link>
          </div>
          <p className="opacity-80">
            Hi, Im Rainer Morales, a recent BS in Information Technology
            graduate with internship experience in technical support. I enjoy
            solving problems using technology and learning new tools like React
            and Firebase. My goal is to grow as a front-end developer and create
            user-friendly web applications that make peoples lives easier. Im
            passionate about continuous learning and excited to contribute to
            innovative tech projects.
          </p>
        </BlurFade>
        <BlurFade
          delay={0.15}
          inView
          className="lg:col-span-2 md:col-span-2 sm:col-span-2  col-span-4 space-y-4 p-4 rounded-md border   "
        >
          <div className="flex items-center justify-between ">
            <div className="font-bold text-lg flex items-center gap-2">
              <MdWork />
              Education
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <Image
              className="rounded-full border"
              src="/eastwoods.jpg"
              width={50}
              height={100}
              alt="profile"
            ></Image>
            <div>
              <div className="">
                <div className="text-sm font-bold">
                  Easwoods Professional College of Science and Technology
                </div>
                <div className="text-sm opacity-70">
                  Bachelor of Science in Information Technology
                </div>
                <div className="text-sm opacity-70">2020 - 2024</div>
              </div>
            </div>
          </div>
        </BlurFade>
        <BlurFade
          delay={0.15}
          inView
          className="lg:col-span-2 md:col-span-2 sm:col-span-2  col-span-4 space-y-4 p-4 rounded-md border   "
        >
          <div className="flex items-center justify-between ">
            <div className="font-bold text-lg flex items-center gap-2">
              <MdWork />
              Work Experience
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <Image
              className="rounded-full border"
              src="/centromedico.jpg"
              width={50}
              height={100}
              alt="profile"
            ></Image>
            <div>
              <div className="">
                <div className="text-sm font-bold">
                  Centro Medico De Santisimo Rosario
                </div>
                <div className="text-sm opacity-70">
                  Technical Support Intern
                </div>
                <div className="text-sm opacity-70">March 2024 - June 2024</div>
              </div>
            </div>
          </div>
        </BlurFade>
        <BlurFade
          delay={0.15 * 2}
          inView
          className="col-span-4 space-y-4 p-4  rounded-md  border  "
        >
          <h1 className="font-bold text-lg flex items-center gap-2">
            <HiCodeBracketSquare />
            Tech Stack
          </h1>
          <div className="space-x-2">
            <ul className="flex flex-wrap gap-2 mt-1">
              {[
                "HTML",
                "CSS",
                "Javascript",
                "Typescript",
                "Tailwind CSS",
                "Bootstrap",
                "React JS",
                "Next JS",
                "Firebase",
              ].map((tool) => (
                <li className="text-center" key={tool}>
                  <Badge variant={"secondary"} className="">
                    {tool}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </BlurFade>
        <BlurFade
          delay={0.15 * 4}
          inView
          className="col-span-4 lg:row-span-2 p-2 "
        >
          <div className="flex items-center gap-2 text-lg  font-bold">
            <CgWebsite />
            Recent Projects
          </div>
          <Projects />
        </BlurFade>
      </div>
    </>
  );
}
