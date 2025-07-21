"use client";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FaGithub } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { FaLeaf } from "react-icons/fa";
import { GiTalk } from "react-icons/gi";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { FiCoffee } from "react-icons/fi";
import Link from "next/link";
import Card from "../Components/Card";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
function Projects() {
  return (
    <>
      <div className="max-w-4xl m-auto  rounded-sm">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  ">
          <BlurFade inView>
            <Card
              names={
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <span>
                      <GiTalk />
                    </span>
                    Cometalk
                  </div>
                </div>
              }
              description={`Built a responsive and interactive real-time messaging platform using modern 
                frontend and backend technologies.`}
              pic={
                <Image
                  className="object-cover"
                  src="/talk.png"
                  height={500}
                  width={500}
                  alt="Todo"
                />
              }
              link={
                <div className="space-x-2">
                  <Badge>
                    <Link
                      className="flex items-center justify-center gap-1"
                      href="https://github.com/RainerMorales/Cometalk/"
                    >
                      Github <FaGithub size={10} />
                    </Link>
                  </Badge>
                  <Badge>
                    <Link
                      className="flex items-center justify-center gap-1"
                      href="https://cometalk.vercel.app/"
                    >
                      Website
                      <FaExternalLinkAlt size={10} />
                    </Link>
                  </Badge>
                </div>
              }
              badge={
                <>
                  <ul className="flex space-x-2">
                    {["Next js", "Tailwind", "Firebase", "Shadcn"].map(
                      (badge, li) => (
                        <li key={li}>
                          <Badge variant={"secondary"}>{badge}</Badge>
                        </li>
                      )
                    )}
                  </ul>
                </>
              }
            ></Card>
          </BlurFade>
          <BlurFade inView>
            <Card
              names={
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <span>
                      <FaLeaf />
                    </span>
                    MemoLeaf
                  </div>
                </div>
              }
              description={`A simple note-taking app, It lets users write, save, and 
                manage notes with a clean, responsive design. Notes are saved in the 
                cloud using Firebase`}
              pic={
                <Image
                  className="object-cover"
                  src="/memoleaf.png"
                  height={500}
                  width={500}
                  alt="Todo"
                />
              }
              link={
                <div className="space-x-2">
                  <Badge>
                    <Link
                      className="flex items-center justify-center gap-1"
                      href="https://github.com/RainerMorales/Memoleaf"
                    >
                      Github <FaGithub size={10} />
                    </Link>
                  </Badge>
                  <Badge>
                    <Link
                      className="flex items-center justify-center gap-1"
                      href="https://memoleaf-ph.vercel.app/login"
                    >
                      Website
                      <FaExternalLinkAlt size={10} />
                    </Link>
                  </Badge>
                </div>
              }
              badge={
                <>
                  <ul className="flex space-x-2">
                    {["React js", "Tailwind", "Firebase", "Shadcn"].map(
                      (badge, li) => (
                        <li key={li}>
                          <Badge variant={"secondary"}>{badge}</Badge>
                        </li>
                      )
                    )}
                  </ul>
                </>
              }
            ></Card>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <Card
              names={
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <span>
                      <TiWeatherWindyCloudy />
                    </span>
                    Forcasa
                  </div>
                </div>
              }
              description={`Im developing a weather app using React and the OpenWeather API to provide real-time weather updates with an intuitive user interface`}
              pic={
                <Image
                  className="object-cover "
                  src="/forcasa-v1.png"
                  height={500}
                  width={500}
                  alt="Weather"
                />
              }
              link={
                <div className="space-x-2">
                  <Badge>
                    <Link
                      className="flex items-center justify-center gap-1"
                      href="https://github.com/RainerMorales/Forecasa"
                    >
                      Github <FaGithub size={10} />
                    </Link>
                  </Badge>
                  <Badge>
                    <Link
                      className="flex items-center justify-center gap-1"
                      href="https://forcasa.vercel.app/"
                    >
                      Website
                      <FaExternalLinkAlt size={10} />
                    </Link>
                  </Badge>
                </div>
              }
              badge={
                <>
                  <ul className="flex space-x-2">
                    {["Next js", "Tailwind", "Firebase", "Shadcn"].map(
                      (badge, li) => (
                        <li key={li}>
                          <Badge variant={"secondary"}>{badge}</Badge>
                        </li>
                      )
                    )}
                  </ul>
                </>
              }
            ></Card>
          </BlurFade>
          <BlurFade delay={0.15 * 2} inView>
            <Card
              names={
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <span>
                      <FiCoffee />
                    </span>
                    Coffee Shop
                  </div>
                </div>
              }
              description={`Developed a clean and responsive landing page for Fikashop using React.
                 The page showcases the brands products and highlights key selling points through modern UI elements and smooth user experience. `}
              pic={
                <Image
                  className="object-cover"
                  src="/Fika.png"
                  height={500}
                  width={500}
                  alt="Fika"
                />
              }
              link={
                <div className="space-x-2">
                  <Badge>
                    <Link
                      className="flex items-center justify-center gap-1"
                      href="https://github.com/RainerMorales/Fika"
                    >
                      Github <FaGithub size={10} />
                    </Link>
                  </Badge>
                  <Badge>
                    <Link
                      className="flex items-center justify-center gap-1"
                      href="https://fika-v1.vercel.app/"
                    >
                      Website
                      <FaExternalLinkAlt size={10} />
                    </Link>
                  </Badge>
                </div>
              }
              badge={
                <>
                  <ul className="flex space-x-2">
                    {["Next js", "Tailwind", "Firebase", "Shadcn"].map(
                      (badge, li) => (
                        <li key={li}>
                          <Badge variant={"secondary"}>{badge}</Badge>
                        </li>
                      )
                    )}
                  </ul>
                </>
              }
            ></Card>
          </BlurFade>
          <BlurFade delay={0.15 * 2} inView>
            <Card
              names={
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">Alibata</div>
                </div>
              }
              description={`A fun and educational web-based game designed to help users learn the ancient Filipino script, Baybayin (Alibata).`}
              pic={
                <Image
                  className="object-cover"
                  src="/"
                  height={500}
                  width={500}
                  alt="Fika"
                />
              }
              link={
                <div className="space-x-2 ">
                  <Badge className="cursor-not-allowed">
                    <Link
                      className="flex items-center justify-center gap-1 cursor-not-allowed"
                      href="/"
                    >
                      Github <FaGithub size={10} />
                    </Link>
                  </Badge>
                  <Badge variant={"destructive"} className="cursor-not-allowed">
                    {/* <a
                      className="flex items-center justify-center gap-1"
                      href="https://fika-v1.vercel.app/"
                    >
                      Website
                      <FaExternalLinkAlt size={10} />
                    </a> */}
                    Ongoing
                  </Badge>
                </div>
              }
              badge={
                <>
                  <ul className="flex space-x-2">
                    {["Next js", "Tailwind", "Firebase", "Shadcn"].map(
                      (badge, li) => (
                        <li key={li}>
                          <Badge variant={"secondary"}>{badge}</Badge>
                        </li>
                      )
                    )}
                  </ul>
                </>
              }
            ></Card>
          </BlurFade>
        </div>
      </div>
    </>
  );
}

export default Projects;
