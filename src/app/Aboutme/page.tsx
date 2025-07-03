import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import { PiCertificateFill } from "react-icons/pi";
import { BlurFade } from "@/components/magicui/blur-fade";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
function Aboutme() {
  return (
    <>
      <div className="max-w-4xl m-auto  rounded-sm">
        <div className=" items-center p-4 space-x-4">
          <Link
            className="text-sm link link-hover font-mono flex items-center hover:opacity-60 gap-2"
            href={"/"}
          >
            <FaArrowLeftLong />
           Back
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4">
          <BlurFade
            inView
            delay={0.15 * 2}
            className="border rounded-md shadow-md p-4 col-span-4"
          >
            <div className="flex items-center gap-2 font-bold text-xl ">
              <PiCertificateFill />
              Certificates
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row  items-center justify-center gap-4 p-4 ">
              {[
                { src: "/intern.jpg", alt: "intern logo" },
                { src: "/east.jpg", alt: "east logo" },
                { src: "/ircite.jpg", alt: "ircite logo" },
              ].map((img, i) => (
                <div
                  key={i}
                  className="border rounded-md shadow-md w-72 h-60 relative overflow-hidden"
                >
                  <Zoom>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    ></Image>
                  </Zoom>
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
