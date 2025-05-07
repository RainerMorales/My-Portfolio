import Toggle from "../components/Toggle"
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsMortarboardFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TypingAnimation } from "@/components/magicui/typing-animation";
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
          <img className="w-40 rounded-full" src="Profile.jpg" alt="" />
        </div>
        <div className="text-center">
          <TypingAnimation className="flex items-center h-10 font-bold text-3xl">
            Hi! I'm Rainer 😎
          </TypingAnimation>
          <div className="text-md ">
            <AuroraText>Front-End</AuroraText> Developer
          </div>

          <div className="text-md opacity-80">Bataan,Philippines</div>
          <div className="flex justify-center mt-6 gap-2">
            <a href="https://github.com/RainerMorales">
              <FaSquareGithub size={30} />
            </a>
            <a href="https://www.facebook.com/share/1KPaDDbDwH/">
              <FaFacebookSquare size={30} />
            </a>
            <a href="https://www.instagram.com/ka.rainerr?igsh=MWw1dXVqbGtwd2xsdQ==">
              <FaSquareInstagram size={30} />
            </a>
          </div>
        </div>
      </BlurFade>
      <div className="mt-20 p-4 grid grid-cols-1 lg:grid-cols-3 lg:grid-row-3 gap-4 max-w-4xl m-auto ">
        <BlurFade
          delay={0.15}
          inView
          className="lg:col-span-3  space-y-4 p-6 border-2 rounded-md "
        >
          <h1 className="font-bold text-xl flex items-center gap-2">
            <IoBookSharp />
            Summary
          </h1>
          <p className="opacity-80">
            I'm a front-end developer passionate about creating interactive and
            visually engaging web experiences. I specialize in React, Vite,
            Tailwind CSS, and Framer Motion, bringing modern designs to life
            with smooth animations and responsive layouts. Always eager to learn
            and improve, I focus on building user-friendly interfaces that
            enhance the web experience
          </p>
        </BlurFade>
        <BlurFade
          delay={0.15 * 2}
          inView
          className="lg:col-span-1 lg:row-span-2 space-y-4 p-6 border-2 rounded-md  "
        >
          <h1 className="font-bold text-xl flex items-center gap-2">
            <FaLaptopCode />
            Tech Stack
          </h1>
          <div className="space-x-2">
            <span className="opacity-80 ">Front-End</span>
            <ul className="flex  flex-wrap gap-2 mt-1">
              {[
                "HTML",
                "CSS",
                "Javascript",
                "Typescript",
                "Tailwind CSS",
                "Bootstrap",
                "React",
                "Vite",
                "Node",
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
          className="lg:col-span-2 lg:row-span-2 p-2 border-2 rounded-md"
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2 text-xl  font-bold">
              <CgWebsite />
              Recent Projects
            </div>
            <Link
              className="text-sm flex items-center gap-2 link link-hover font-mono opacity-80"
              href={"/Projects"}
            >
              View All <FaArrowRightLong />
            </Link>
          </div>
          <Card
            names={"Todo-List"}
            description={`My to-do list app, built with React, Tailwind CSS, and ShadCN UI, 
              lets users create and delete tasks, with persistent storage using the browser's localStorage.`}
            pic={
              <img
                className="w-full h-30 object-cover object-top"
                src="todo.png"
                alt="image"
              />
            }
            link={<a href="https://react-todolist2025.vercel.app/">Visit</a>}
            badge={
              <>
                <Badge>React</Badge>
                <Badge>Tailwind</Badge>
                <Badge>Shadcn</Badge>
              </>
            }
          ></Card>
        </BlurFade>
      </div>
    </>
  );
}
