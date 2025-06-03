import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AuroraText } from "@/components/magicui/aurora-text";
import { FaArrowRightLong } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import Card from "./Components/Card";
export default function Home() {
  return (
    <>
      <BlurFade
        inView
        className="grid gap-6 justify-center mt-20 max-w-2xl m-auto"
      >
        <div className="m-auto">
          <Image
            className="rounded-full"
            src="/Profile.jpg"
            width={200}
            height={80}
            alt="profile"
          ></Image>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold ">
            Web <AuroraText> Developer</AuroraText>
          </div>
          <div className="text-md opacity-60">Bataan,Philippines</div>
          <div className="flex justify-center mt-6 gap-4">
            <a href="https://github.com/RainerMorales">
              <FaSquareGithub size={34} />
            </a>
            <a href="https://www.facebook.com/Ka.RainerM02">
              <FaFacebookSquare size={34} />
            </a>
            <a href="https://www.instagram.com/ka.rainerr?igsh=MWw1dXVqbGtwd2xsdQ==">
              <FaSquareInstagram size={34} />
            </a>
          </div>
        </div>
      </BlurFade>
      <div className="mt-20 p-4 grid grid-cols-1 lg:grid-cols-3 lg:grid-row-3 gap-4 max-w-4xl m-auto ">
        <BlurFade
          delay={0.15}
          inView
          className="lg:col-span-3  space-y-4 p-6 border rounded-md "
        >
          <h1 className="font-bold text-xl flex items-center gap-2">
            <IoBookSharp />
            Summary
          </h1>
          <p className="opacity-80">
            Hi!, Im Rainer Morales, a front-end developer focused on building
            interactive and responsive web apps using React (or Next.js) and
            Firebase. I enjoy crafting smooth, clean interfaces with Tailwind
            CSS and Framer Motion, bringing ideas to life through animations and
            modern design.
          </p>
        </BlurFade>
        <BlurFade
          delay={0.15 * 2}
          inView
          className="lg:col-span-1 lg:row-span-2 space-y-4 p-6 border rounded-md  "
        >
          <h1 className="font-bold text-xl flex items-center gap-2">
            <FaLaptopCode />
            Tech Stack
          </h1>
          <div className="space-x-2">
            <span className="opacity-80">Front-End</span>
            <ul className="flex flex-wrap gap-2 mt-1">
              {[
                "HTML",
                "CSS",
                "Javascript",
                "Typescript",
                "Tailwind CSS",
                "Bootstrap",
                "React",
                "Next JS",
                "Firebase",
              ].map((tool) => (
                <li className="text-center" key={tool}>
                  <Badge className="">{tool}</Badge>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-x-2">
            <span className="opacity-80 ">Developer Tools</span>
            <ul className="flex flex-wrap gap-2 mt-1">
              {[
                "Git",
                "GitHub",
                "VS Code",
                "NPM",
                "Vercel",
                "Magic UI",
                "Daisy UI",
                "Material UI",
                "Framer Motion",
                "React Bits",
              ].map((tool) => (
                <li className="text-center" key={tool}>
                  <Badge className="">{tool}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </BlurFade>
        <BlurFade
          delay={0.15 * 4}
          inView
          className="lg:col-span-2 lg:row-span-2 p-2 border rounded-md"
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2 text-xl  font-bold">
              <CgWebsite />
              Recent Projects
            </div>
            <Link
              className="text-sm flex items-center gap-2 link link-hover font-mono hover:opacity-60"
              href={"/Projects"}
            >
              View All <FaArrowRightLong />
            </Link>
          </div>
          <Card
            names={
              <div className="flex justify-between items-center w-full">
                <div>MemoLeaf</div>
                <div>
                  <Badge className="bg-yellow-500">Progress</Badge>
                </div>
              </div>
            }
            description={
              `A simple note-taking app built with React, 
                Tailwind CSS, ShadCN, and Firebase. It lets users write, save, and 
                manage notes with a clean, responsive design. Notes are saved in the 
                cloud using Firebase`
            }
            pic={
              <Image
                className="w-full h-[120px]  object-top object-cover "
                src="/memoleaf.png"
                height={500}
                width={500}
                alt="TodoNow"
              />
            }
            link={<a href="https://todonow-v1.vercel.app">Visit</a>}
            badge={
              <>
                <Badge>React</Badge>
                <Badge>Tailwind</Badge>
                <Badge>Firebase</Badge>
                <Badge>Shadcn</Badge>
              </>
            }
          ></Card>
        </BlurFade>
      </div>
    </>
  );
}
