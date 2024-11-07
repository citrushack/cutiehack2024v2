import Image from "next/image";
import Moon from "@/public/assets/moon.svg";
import Astronaut from "@/public/assets/astronauthappy.svg";
import Flag from "@/public/assets/blueflag.svg";
import LOGO from "@/public/assets/cutiehackLOGO.svg";
import { Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative -mt-1 bg-cutie-blue-300 pt-10">
      <div className="flex items-center justify-center">
        <Image
          src={Astronaut}
          alt="astroguy"
          className="z-20 animate-jiggle-3s md:w-[150px]"
        />
        <div className="absolute right-[35%] top-[1%] animate-jiggle-3s md:right-[45%]">
          <span className="flex -rotate-45 flex-col gap-3">
            <p className="w-10 -rotate-12 bg-white py-0.5" />
            <p className="w-10 bg-white py-0.5" />
            <p className="w-10 rotate-12 bg-white py-0.5" />
          </span>
        </div>
      </div>
      <div className="flex justify-center overflow-hidden md:h-[350px]">
        <Image src={Moon} alt="Moon Icon" className="z-10 h-full w-full" />
      </div>
      <div className="text-white">
        <Link target={"_blank"} href={"mailto:citrushack@gmail.com"}>
          <Mail className="absolute left-[21%] top-[41%] z-30 h-11 w-11 -rotate-[28deg] md:left-[32%] md:top-[37%] md:h-14 md:w-14" />
        </Link>
        <Link
          target={"_blank"}
          href={
            "https://www.linkedin.com/company/citrus-hack/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BAC1WcAAKQca8p%2FC%2BKLt32g%3D%3D"
          }
        >
          <Linkedin className="absolute bottom-[34%] left-[5%] z-30 h-11 w-11 -rotate-[40deg] md:bottom-[44%] md:left-[25%] md:h-14 md:w-14" />
        </Link>
        <Link
          target={"_blank"}
          href={"https://www.instagram.com/cutiehack_ucr/"}
        >
          <Instagram className="absolute right-[16%] top-[45%] z-30 h-11 w-11 rotate-[30deg] md:left-[20%] md:top-[61%] md:h-14 md:w-14 md:-rotate-[50deg]" />
        </Link>
      </div>
      <Image
        src={Flag}
        alt="Flag"
        className="absolute right-[26%] top-[22.5%] z-0 hidden rotate-[23deg] md:block"
      />
      <Image
        src={LOGO}
        alt="Cutie Hack"
        className="absolute right-[25%] top-[26%] z-0 hidden w-[7%] rotate-[23deg] md:block"
      />
      <div className="absolute bottom-0 z-20 flex w-full justify-center text-lg font-semibold text-black">
        Made with 🧡 by the Cutiehack team
      </div>
    </div>
  );
};

export default Footer;
