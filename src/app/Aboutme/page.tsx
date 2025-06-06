import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";
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
        <div className="p-6 ">
          <div className=" col-span-3 opacity-80  border rounded-md shadow-md p-6">
            Hi! 👋 I'm Rainer Morales, a front-end developer focused on building
            interactive and responsive web apps using React (or Next.js) and
            Firebase 🔥. I enjoy crafting smooth, clean interfaces with Tailwind
            CSS and Framer Motion — bringing ideas to life through animation and
            modern design. I graduated with a Bachelor of Science in Information
            Technology from Eastwoods Professional College of Science and
            Technology in July 2024 🎓. I love playing the organ and piano 🎹 —
            music helps me stay creative and focused.
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-2 opacity-80  border rounded-md shadow-md p-6">
              <Image
                className=""
                src="/intern.jpg"
                width={300}
                height={80}
                alt="intern"
              ></Image>
            </div>
            <div className="col-span-2 opacity-80  border rounded-md shadow-md p-6">
              <Image
                className=""
                src="/east.jpg"
                width={300}
                height={80}
                alt="intern"
              ></Image>
            </div>
            <div className="col-span-4 opacity-80  border rounded-md shadow-md p-6">
              <Image
                className=""
                src="/ircite.jpg"
                width={300}
                height={80}
                alt="intern"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Aboutme;
