"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer bg-black text-gray-300 py-8 px-12 border-t border-gray-700">
      <FooterContent />
    </div>
  );
};

export default Footer;

const FooterContent = () => {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <FooterNav />
      <FooterCopyright />
    </div>
  );
};

const FooterCopyright = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end">
      <h1 className="text-[18vw] md:text-[16vw] lg:text-[18vw] xl:text-[20vw] 2xl:text-[22vw] leading-[0.8] mt-10 text-gray-500">
        Udaan
      </h1>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mt-4 sm:mt-0 text-gray-400">
        © 2025 design by Bvm Team
      </p>
    </div>
  );
};

const FooterNav = () => {
  const aboutLinks = [
    { title: "Our Story", href: "/about" },
    { title: "Team", href: "/team" },
    { title: "Careers", href: "/careers" },
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ];

  const moreLinks = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Support", href: "/support" },
  ];

  return (
    <div className="flex shrink-0 gap-20">
      <FooterColumn title="About" links={aboutLinks} />
      <FooterColumn title="Socials" links={socialLinks} external />
      <FooterColumn title="More" links={moreLinks} />
    </div>
  );
};

const FooterColumn = ({ title, links, external = false }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="mb-2 uppercase text-gray-400">{title}</h3>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target={external ? "_blank" : "_self"}
          className="underline-offset-4 hover:underline hover:text-white"
        >
          {link.title || link.name}
        </Link>
      ))}
    </div>
  );
};
