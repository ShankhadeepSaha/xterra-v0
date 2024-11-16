import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footercurve from "@/components/footer/Footercurve";
import MRLIcon from "../../../public/images/companylogo/mrl.png"

const EMAIL = "info@xterrarobotics.com";
const NAVIGATION_LINKS = [
  { name: "Robots", path: "/robots" },
  { name: "Actuators", path: "/actuators" },
  { name: "Solutions", path: "/solutions" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Media", path: "/media" },
  { name: "Contact", path: "/contact" },
];

const SOCIAL_LINKS = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/company/xterra-robotics/",
    icon: FaLinkedin,
    isLocal: false
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/xterrarobotics/",
    icon: FaInstagram,
    isLocal: false
  },
  {
    name: "X",
    url: "https://twitter.com/xterrarobotics",
    icon: FaXTwitter,
    isLocal: false
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@xTerraRobotics",
    icon: FaYoutube,
    isLocal: false
  },
  {
    name: "MRL",
    url: "https://mrl-iitk.github.io/",
    icon: MRLIcon,
    isLocal: true
  },
];

const scrollItems = [
  { text: "XTERRA WORLD OF ROBOTICS", showDot: true },
  { text: "XTERRA WORLD OF ROBOTICS", showDot: true },
  { text: "XTERRA WORLD OF ROBOTICS", showDot: true },
];

export default function Footer() {
  return (
    <>
      {/* <Footercurve items={scrollItems} duration={40} dotColor="white" /> */}
      <footer className="w-full bg-white">
        <div className="container mx-auto p-4 pb-4 sm:pb-6 md:pb-8 lg:pb-10 flex flex-col justify-between space-y-8 md:space-y-12">
          <EmailSection />
          <MainContent />
        </div>
      </footer>
    </>
  );
}

const EmailSection = () => (
  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-poppins font-light">
    <a
      href={`mailto:${EMAIL}`}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${EMAIL}`;
      }}
      className="hover:underline cursor-pointer"
      rel="noopener noreferrer"
      aria-label={`Send email to ${EMAIL}`}
    >
      <span className="font-poppins font-light">{EMAIL}</span>
    </a>
  </div>
);

const MainContent = () => (
  <div className="flex flex-col space-y-8 md:space-y-12 border-t pt-8 md:pt-12">
    <div className="flex flex-col lg:flex-row lg:space-x-16">
      <NavigationLinks />
      <CompanyInfo />
    </div>
  </div>
);

const NavigationLinks = () => (
  <div className="flex flex-col space-y-2 md:space-y-4 w-full lg:w-1/2 mb-8 lg:mb-0">
    {NAVIGATION_LINKS.map(({ name, path }, index) => (
      <Link
        href={path}
        key={index}
        className="hover:opacity-80 transition-opacity duration-300"
      >
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-light cursor-pointer">
          {name}
        </span>
      </Link>
    ))}
  </div>
);

const CompanyInfo = () => (
  <div className="flex flex-col space-y-6 w-full lg:w-1/2">
    <Address />
    <SocialLinks />
    <Copyright />
  </div>
);

const Address = () => (
  <>
    <div className="w-full mb-4">
      <div className="text-lg sm:text-xl md:text-2xl font-poppins font-normal">
        xTerra Robotics Pvt Ltd
      </div>
      <div className="text-base sm:text-base md:text-base font-poppins font-light mt-2">
        G-508/11 Avas Vikas No. 1, Panki Road Kalyanpur,
      </div>
      <div className="text-base font-poppins font-light mt-2">
        Avas Vikas Yojna No. 3, Kanpur Nagar,
      </div>
      <div className="text-base font-poppins font-light mt-2">
        Kanpur, Uttar Pradesh, 208017
      </div>
      <div className="text-base font-sans font-light mt-2">
        Alternate Address:
      </div>
      <div className="text-base sm:text-base md:text-base font-poppins font-light mt-2">
        NL 212, Mobile Robotics Lab,
      </div>
      <div className="text-base font-poppins font-light mt-2">
        Department of Mechanical Engineering,
      </div>
      <div className="text-base font-poppins font-light mt-2">
        IIT Kanpur, Kanpur, 208016
      </div>
    </div>
  </>
);

const SocialLinks = () => (
  <div className="flex flex-wrap gap-6">
    {SOCIAL_LINKS.map(({ name, url, icon: Icon, isLocal }, index) => (
      <a
        key={index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity duration-300"
        aria-label={`Visit our ${name} page`}
      >
        {isLocal ? (
          <Image
            src={Icon}
            alt={`${name} Icon`}
            width={32}
            height={32}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
          />
        ) : (
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        )}
      </a>
    ))}
  </div>
);

const Copyright = () => (
  <div className="text-base sm:text-lg md:text-xl font-poppins font-normal">
    © {new Date().getFullYear()} xTerra Robotics. All rights reserved.
  </div>
);