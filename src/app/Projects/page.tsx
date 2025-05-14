"use client";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { Badge } from "@/components/ui/badge";
import Card from "../Components/Card";
import Link from "next/link";
import Image from "next/image";
function Projects() {
  return (
    <>
      <div className="max-w-4xl m-auto  rounded-sm">
        <div className="flex items-center p-4 space-x-4">
          <Link
            className="text-sm link link-hover font-mono flex items-center hover:opacity-60 gap-2"
            href={"/"}
          >
            <FaArrowLeftLong />
            Home
          </Link>
          <div className="flex items-center gap-2 text-xl">
            <CgWebsite />
            Recent Projects
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-4   gap-4 ">
          <BlurFade inView>
            <Card
              names={"TodoNow"}
              description={`Im currently working on this project that have a Authentication and Firestore using Firebase`}
              pic={
                <Image
                  className="w-full  object-top object-cover "
                  src="/Todo.png"
                  height={500}
                  width={500}
                  alt="Todo"
                />
              }
              link={
                <a
                  className="link link-hover font-mono"
                  href="https://react-todolist2025.vercel.app/"
                >
                  Visit
                </a>
              }
              badge={
                <>
                  <Badge>React</Badge>
                  <Badge>Tailwind</Badge>
                  <Badge>Shadcn</Badge>
                </>
              }
            ></Card>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <Card
              names={"Weather App"}
              description={`Im developing a weather app using React and the OpenWeather API to provide real-time weather updates with an intuitive user interface`}
              pic={
                <Image
                  className="w-full  object-top object-cover "
                  src="/Weather.png"
                  height={500}
                  width={500}
                  alt="Weather"
                />
              }
              link={
                <a
                  className="link link-hover font-mono"
                  href="https://weather-app2025.vercel.app/"
                >
                  Visit
                </a>
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
              names={"Fika Shop"}
              description={`My Simple landing page for Fikashop using React `}
              pic={
                <Image
                  className="w-full  object-top object-cover "
                  src="/Fika.png"
                  height={500}
                  width={500}
                  alt="Fika"
                />
              }
              link={<a href="https://fika-shop.vercel.app/">Visit</a>}
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
