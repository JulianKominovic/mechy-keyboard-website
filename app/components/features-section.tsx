import React from "react";
import SimpleIcon from "./simple-icon";
import { siTauri } from "simple-icons";
import {
  Lightning,
  HandPointing,
  Feather,
  SpeakerHigh,
  ListMagnifyingGlass,
  Package,
  CloudArrowDown,
  ThreeD,
  ShieldCheck,
  CloudX,
  LockKey,
  GlobeSimple,
} from "@phosphor-icons/react/dist/ssr";

const FAST_AND_LIGHTWEIGHT_FEATURES = [
  {
    title: "Modern technologies",
    description:
      "Built with Tauri, a modern framework that allows building fast and lightweight desktop applications.",
    icon: <SimpleIcon simpleIcon={siTauri} className="mx-auto mb-4 text-4xl" />,
  },
  {
    title: "Instant sounds",
    description:
      "Hear the sounds of your keyboard instantly as you type, with no delay.",
    icon: <HandPointing size={"1em"} className="mx-auto mb-4 text-4xl" />,
  },
  {
    title: "Minimal resources",
    description:
      "Designed to use minimal resources on your machine, ensuring smooth performance.",
    icon: <Feather size={"1em"} className="mx-auto mb-4 text-4xl" />,
  },
];

const SOUNDS_FEATURES = [
  {
    title: "15 switches",
    description:
      "Right now, we have 15 different switches to choose from, with more coming soon.",
    icon: (
      <ListMagnifyingGlass size={"1em"} className="mx-auto mb-4 text-4xl" />
    ),
  },
  {
    title: "No assumptions",
    description: "No pre-installed sounds, just download the sounds you want.",
    icon: <Package size={"1em"} className="mx-auto mb-4 text-4xl" />,
  },
  {
    title: "One click download",
    description: "No need to do tricky configurations to add new sounds.",
    icon: <CloudArrowDown size={"1em"} className="mx-auto mb-4 text-4xl" />,
  },
  {
    title: "Immersive experience",
    description:
      "Sounds are panned, pitched randomly, and volume adjusted to create an immersive experience.",
    icon: <ThreeD size={"1em"} className="mx-auto mb-4 text-4xl" />,
  },
];

const SECURITY_FEATURES = [
  {
    title: "No data collection",
    description:
      "We don't collect any data from you, everything stays on your machine.",
    icon: <CloudX size={"1em"} className="mx-auto mb-4 text-4xl" />,
  },
  {
    title: "No hidden keyloggers",
    description:
      "Your keystrokes are saved in memory for a very few moments only for the purpose of playing sounds.",
    icon: <LockKey size={"1em"} className="mx-auto mb-4 text-4xl" />,
  },
  {
    title: "Open source",
    description:
      "You can check the source code of the application to ensure you are safe. If you have any concerns, please let us know.",
    icon: <GlobeSimple size={"1em"} className="mx-auto mb-4 text-4xl" />,
  },
];

const FeaturesSection = () => {
  return (
    <>
      <div className="mt-48 mb-96">
        <Lightning size={"3em"} weight="duotone" className="mx-auto mb-8" />
        <h2 className="mb-3 text-5xl font-bold text-center text-black">
          Fast and lightweight
        </h2>
        <p className="max-w-[80ch] mb-24 text-center mx-auto">
          Our application is designed to be incredibly lightweight, ensuring
          smooth performance while using minimal resources on your machine.
        </p>
        <ul className="flex flex-wrap justify-center gap-8 mb-48">
          {FAST_AND_LIGHTWEIGHT_FEATURES.map((feature, index) => (
            <li key={feature.title} className="w-fit max-w-72">
              {feature.icon}
              <h3 className="text-2xl line-clamp-1 mb-2 !font-semibold text-center">
                {feature.title}
              </h3>
              <p className="text-sm text-center text-black/60">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
        <SpeakerHigh size={"3em"} weight="duotone" className="mx-auto mb-8" />
        <h2 className="mb-3 text-5xl font-bold text-center text-black">
          Delightful sounds
        </h2>
        <p className="max-w-[80ch] mb-2 text-center mx-auto">
          Enjoy the delightful sounds of your keyboard with a variety of
          switches and keycaps to choose from.
        </p>
        <small className="block mx-auto mb-24 text-sm text-center text-black/40">
          * Special thanks to{" "}
          <a
            href="https://mechvibes.com/sound-packs/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Mechvibes
          </a>{" "}
          for providing the sound packs. 💖*
        </small>
        <ul className="flex flex-wrap justify-center gap-8 mb-48">
          {SOUNDS_FEATURES.map((feature, index) => (
            <li key={feature.title} className="w-fit max-w-72">
              {feature.icon}
              <h3 className="text-2xl line-clamp-1 mb-2 !font-semibold text-center">
                {feature.title}
              </h3>
              <p className="text-sm text-center text-black/60">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
        <ShieldCheck size={"3em"} weight="duotone" className="mx-auto mb-8" />
        <h2 className="mb-3 text-5xl font-bold text-center text-black">
          Secure and private
        </h2>
        <p className="max-w-[80ch] text-center mx-auto mb-24">
          We take your privacy seriously. No data is collected or sent to our
          servers.
        </p>

        <ul className="flex flex-wrap justify-center gap-8 mb-48">
          {SECURITY_FEATURES.map((feature, index) => (
            <li key={feature.title} className="w-fit max-w-72">
              {feature.icon}
              <h3 className="text-2xl line-clamp-1 mb-2 !font-semibold text-center">
                {feature.title}
              </h3>
              <p className="text-sm text-center text-black/60">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FeaturesSection;
