"use client";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { Badge } from "@/components/ui/badge";
import { FaLeaf } from "react-icons/fa";
import { GiTalk } from "react-icons/gi";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { FiCoffee } from "react-icons/fi";
import Card from "../Components/Card";
import Link from "next/link";
import Image from "next/image";
import { AuroraText } from "@/components/magicui/aurora-text";
import { FaExternalLinkAlt } from "react-icons/fa";
function Projects() {
  return (
    <>
      <div className="max-w-4xl m-auto  rounded-sm">
        <div className=" items-center p-4 space-x-4">
          <Link
            className="text-sm link link-hover font-mono flex items-center hover:opacity-60 gap-2"
            href={"/"}
          >
            <FaArrowLeftLong />
            <AuroraText>Back</AuroraText>
          </Link>
          <div className="flex items-center gap-2 text-xl">
            <CgWebsite />
            Recent Projects
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-4   gap-4 ">
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
              description={`Real-time messaging system with live chat functionality`}
              pic={
                <Image
                  className="object-cover"
                  src="/cometalk.png"
                  height={500}
                  width={500}
                  alt="Todo"
                />
              }
              link={
                <Badge variant="outline">
                  <a
                    className="flex items-center justify-center gap-1"
                    href="https://cometalk.vercel.app/"
                  >
                    Visit <FaExternalLinkAlt size={10} />
                  </a>
                </Badge>
              }
              badge={
                <>
                  <Badge>Next js</Badge>
                  <Badge>Tailwind</Badge>
                  <Badge>Firebase</Badge>
                  <Badge>Shadcn</Badge>
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
                <Badge variant="outline">
                  <a
                    className="flex items-center justify-center gap-2"
                    href="https://memoleaf-ph.vercel.app/login"
                  >
                    Visit <FaExternalLinkAlt size={10} />
                  </a>
                </Badge>
              }
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
                <Badge variant="outline">
                  <a
                    className="flex items-center justify-center gap-2"
                    href="https://forcasa.vercel.app/"
                  >
                    Visit <FaExternalLinkAlt size={10} />
                  </a>
                </Badge>
              }
              badge={
                <>
                  <Badge>React</Badge>
                  <Badge>Tailwind</Badge>
                  <Badge>Daisy UI</Badge>
                  <Badge>Rest Api</Badge>
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
              description={`My Simple landing page for Fikashop using React `}
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
                <Badge variant="outline">
                  <a
                    className="flex items-center justify-center gap-2"
                    href="https://fika-v1.vercel.app/"
                  >
                    Visit <FaExternalLinkAlt size={10} />
                  </a>
                </Badge>
              }
              badge={
                <>
                  <Badge>React</Badge>
                  <Badge>Tailwind</Badge>
                  <Badge>Magic UI</Badge>
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
