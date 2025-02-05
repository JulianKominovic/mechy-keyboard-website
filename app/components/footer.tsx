"use client";

import React from "react";
import {
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  At,
} from "@phosphor-icons/react";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {Icon}
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex mx-auto text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink
        href={socialLinks.twitter}
        icon={<TwitterLogo weight="fill" fill="black" size={"20px"} />}
      />
      <SocialLink
        href={socialLinks.github}
        icon={<GithubLogo weight="fill" fill="black" size={"20px"} />}
      />
      <SocialLink
        href={socialLinks.linkedin}
        icon={<LinkedinLogo weight="fill" fill="black" size={"20px"} />}
      />
      <SocialLink
        href={socialLinks.email}
        icon={<At weight="fill" fill="black" size={"20px"} />}
      />
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <small className="block mx-auto mb-4 lg:mt-24 mt-16 px-8 text-[#1C1C1C] dark:text-[#D4D4D4]">
        <time>© {YEAR}</time>{" "}
        <a
          className="no-underline"
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {metaData.title}
        </a>
      </small>
      <SocialLinks />
    </>
  );
}
