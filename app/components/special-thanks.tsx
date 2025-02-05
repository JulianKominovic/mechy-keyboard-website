import React from "react";

type Props = {};

const SpecialThanks = (props: Props) => {
  return (
    <div className="max-w-screen-md text-sm [&_li]:mb-1 [&_a]:underline [&_a]:underline-offset-2 mx-auto my-16 text-black/70">
      <h2 className="mb-2 text-xl font-semibold text-black">
        Acknowledgments and inspiration
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <a href="https://docs.rs/kira/latest/kira/index.html" rel="nofollow">
            Kira Rust backend agnostic library
          </a>{" "}
          for the audio server manager
        </li>
        <li>
          <a href="https://github.com/ZacharyL2">ZacharyL2</a> for{" "}
          <a href="https://github.com/ZacharyL2/KeyEcho/blob/master/src-tauri/src/keyecho/listen_key">
            key listening code
          </a>
        </li>
        <li>
          <a href="https://github.com/hainguyents13/mechvibes/">Mechvibes</a>{" "}
          for the soundpacks and the inspiration. Check their{" "}
          <a href="https://mechvibes.com/" rel="nofollow">
            website
          </a>
          .
        </li>
        <li>
          Check{" "}
          <a href="https://github.com/KunalBagaria/rustyvibes">Rusty vibes</a>.
          I took some inspiration from it and source code also 😜.
        </li>
        <li>
          <a href="https://github.com/rustdesk-org/rdev">Rustdesk rdev fork</a>{" "}
          that fixes a macOS crash bug and some other bugs.
        </li>
        <li>
          <a href="https://github.com/lllyasviel/Fooocus">Fooocus</a> for AI
          logo generation
        </li>
        <li>
          <a href="https://github.com/Sanster/IOPaint">IOPaint</a> an open
          source AI objects remover to fix some artifacts in the generated logos
        </li>
        <li>
          <a href="https://upscayl.org/" rel="nofollow">
            Upscayl
          </a>{" "}
          to scale the generated logos up to 4k
        </li>
        <li>
          <a
            href="https://www.adobe.com/express/feature/ai/image/remove-background"
            rel="nofollow"
          >
            Adobe AI background remover
          </a>
        </li>
        <li>
          <a href="https://www.tints.dev/primary/D9AC92" rel="nofollow">
            tints.dev
          </a>{" "}
          for the color palette
        </li>
        <li>
          <a href="https://handyarrows.com/" rel="nofollow">
            eronred
          </a>{" "}
          for such useful hand drawn arrows
        </li>
      </ul>
    </div>
  );
};

export default SpecialThanks;
