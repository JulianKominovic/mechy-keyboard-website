import Image from "next/image";
import React from "react";
import LogoTransparent from "./logo-transparent.png";
import NovelKeysLogo from "./novel-keys-logo.jpeg";
type Props = {};

const MechyKeyboardDemo = () => {
  return (
    <div className="justify-self-center relative overflow-hidden rounded-xl shadow-2xl bg-neutral-200 h-[600px] border border-black/[0.05] w-[800px]">
      <nav
        data-tauri-drag-region="true"
        className="absolute flex items-center top-0 left-0 w-full h-[48px] z-50 px-4 text-xs gap-2"
      >
        <svg
          height="1em"
          width="1em"
          enableBackground="new 0 0 85.4 85.4"
          viewBox="0 0 85.4 85.4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipRule="evenodd" fillRule="evenodd">
            <path
              d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z"
              fill="#e24b41"
            />
            <path
              d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z"
              fill="#ed6a5f"
            />
          </g>
        </svg>
        <svg
          height="1em"
          width="1em"
          enableBackground="new 0 0 85.4 85.4"
          viewBox="0 0 85.4 85.4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipRule="evenodd" fillRule="evenodd">
            <path
              d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z"
              fill="#e1a73e"
            />
            <path
              d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z"
              fill="#f6be50"
            />
          </g>
        </svg>
        <svg
          height="1em"
          width="1em"
          enableBackground="new 0 0 85.4 85.4"
          viewBox="0 0 85.4 85.4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipRule="evenodd" fillRule="evenodd">
            <path
              d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z"
              fill="#d1d0d2"
            />
            <path
              d="m42.7 81.7c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z"
              fill="#c7c7c7"
            />
          </g>
        </svg>
      </nav>
      <div
        className="grid w-full h-full grid-rows-1 overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          gridTemplateColumns: "280px 1fr",
          gridTemplateRows: "48px 1fr",
        }}
      >
        <aside className="flex flex-col relative select-none pt-2 pl-4 pr-2 w-full overflow-y-auto transition-opacity duration-200 pb-4 h-full col-[1/2] row-[2/3]">
          <div className="flex-grow">
            <div className="flex items-center gap-3 text-[10px] font-medium after:inline-block after:bg-black/[0.05] after:w-full after:h-px text-black/20 after:rounded-full mb-2">
              <span className="whitespace-nowrap">Installed (2)</span>
            </div>
            <button className="flex items-center w-full h-8 gap-2 px-2 mb-1 text-xs text-left truncate rounded-lg opacity-100 text-black/60 hover:bg-black/10 text-ellipsis">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(43, 117, 255)" }}
              />
              <span className="font-bold">Cherry •</span>
              <span className="truncate">Blue - ABS keycaps</span>
            </button>
            <button className="flex items-center text-left w-full h-8 gap-2 text-black/60 hover:bg-black/10 text-xs rounded-lg px-2 text-ellipsis truncate mb-1 opacity-100 bg-black/[0.05]">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(255, 221, 182)" }}
              />
              <span className="font-bold">NovelKeys •</span>
              <span className="truncate">Creams</span>
            </button>
            <div className="flex items-center gap-3 text-[10px] font-medium after:inline-block after:bg-black/[0.05] after:w-full after:h-px text-black/20 after:rounded-full mt-4 mb-2">
              <span className="whitespace-nowrap">Available (13)</span>
            </div>
            <button className="flex items-center w-full h-8 gap-2 px-2 mb-1 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis opacity-35 hover:opacity-100">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(0, 0, 0)" }}
              />
              <span className="font-bold">Cherry •</span>
              <span className="truncate">Black - ABS keycaps</span>
            </button>
            <button className="flex items-center w-full h-8 gap-2 px-2 mb-1 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis opacity-35 hover:opacity-100">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(65, 65, 65)" }}
              />
              <span className="font-bold">Cherry •</span>
              <span className="truncate">Black - PBT keycaps</span>
            </button>
            <button className="flex items-center w-full h-8 gap-2 px-2 mb-1 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis opacity-35 hover:opacity-100">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(111, 161, 255)" }}
              />
              <span className="font-bold">Cherry •</span>
              <span className="truncate">Blue - PBT keycaps</span>
            </button>
            <button className="flex items-center w-full h-8 gap-2 px-2 mb-1 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis opacity-35 hover:opacity-100">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(158, 70, 7)" }}
              />
              <span className="font-bold">Cherry •</span>
              <span className="truncate">Brown - ABS keycaps</span>
            </button>
            <button className="flex items-center w-full h-8 gap-2 px-2 mb-1 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis opacity-35 hover:opacity-100">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(168, 110, 69)" }}
              />
              <span className="font-bold">Cherry •</span>
              <span className="truncate">Brown - PBT keycaps</span>
            </button>
            <button className="flex items-center w-full h-8 gap-2 px-2 mb-1 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis opacity-35 hover:opacity-100">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(232, 40, 40)" }}
              />
              <span className="font-bold">Cherry •</span>
              <span className="truncate">Red - ABS keycaps</span>
            </button>
            <button className="flex items-center w-full h-8 gap-2 px-2 mb-1 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis opacity-35 hover:opacity-100">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(255, 107, 107)" }}
              />
              <span className="font-bold">Cherry •</span>
              <span className="truncate">Red - PBT keycaps</span>
            </button>
            <button className="flex items-center w-full h-8 gap-2 px-2 mb-1 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis opacity-35 hover:opacity-100">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(179, 155, 210)" }}
              />
              <span className="font-bold">Everglide •</span>
              <span className="truncate">EG Crystal Purple</span>
            </button>
            <button className="flex items-center w-full h-8 gap-2 px-2 mb-1 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis opacity-35 hover:opacity-100">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(62, 56, 48)" }}
              />
              <span className="font-bold">Everglide •</span>
              <span className="truncate">EG Oreo</span>
            </button>
            <button className="flex items-center w-full h-8 gap-2 px-2 mb-1 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis opacity-35 hover:opacity-100">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(242, 168, 62)" }}
              />
              <span className="font-bold">Glorious •</span>
              <span className="truncate">Glorious panda</span>
            </button>
            <button className="flex items-center w-full h-8 gap-2 px-2 mb-1 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis opacity-35 hover:opacity-100">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(173, 173, 173)" }}
              />
              <span className="font-bold">IBM •</span>
              <span className="truncate">Model_F_XT</span>
            </button>
            <button className="flex items-center w-full h-8 gap-2 px-2 mb-1 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis opacity-35 hover:opacity-100">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(68, 57, 196)" }}
              />
              <span className="font-bold">Topre •</span>
              <span className="truncate">Purple Hybrid - PBT</span>
            </button>
            <button className="flex items-center w-full h-8 gap-2 px-2 mb-1 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis opacity-35 hover:opacity-100">
              <div
                className="rounded-[50%] w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: "rgb(141, 148, 115)" }}
              />
              <span className="font-bold">Unicomp •</span>
              <span className="truncate">Classic</span>
            </button>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-medium after:inline-block after:bg-black/[0.05] after:w-full after:h-px text-black/20 after:rounded-full mt-4 mb-2">
            <span className="whitespace-nowrap">Actions</span>
          </div>
          <button className="flex items-center flex-shrink-0 w-full h-8 gap-2 px-2 text-xs text-left text-red-500 truncate rounded-lg hover:bg-red-500/10 text-ellipsis">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              viewBox="0 0 256 256"
              className="w-4 h-4"
            >
              <path
                d="M216,80c0,26.51-39.4,48-88,48S40,106.51,40,80s39.4-48,88-48S216,53.49,216,80Z"
                opacity="0.2"
              />
              <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z" />
            </svg>
            <span className="">Clear cache and soundpacks</span>
          </button>
          <button className="flex items-center flex-shrink-0 w-full h-8 gap-2 px-2 text-xs text-left text-red-500 truncate rounded-lg hover:bg-red-500/10 text-ellipsis">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              viewBox="0 0 256 256"
              className="w-4 h-4"
            >
              <path
                d="M128,184a40,40,0,1,1-40-40A40,40,0,0,1,128,184Z"
                opacity="0.2"
              />
              <path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V98.75l69.7,20.91A8,8,0,0,0,216,112V64A8,8,0,0,0,210.3,56.34ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216ZM200,101.25l-64-19.2V50.75L200,70Z" />
            </svg>
            <span className="">Clear soundpacks</span>
          </button>
          <div className="flex items-center gap-3 text-[10px] font-medium after:inline-block after:bg-black/[0.05] after:w-full after:h-px text-black/20 after:rounded-full mt-4 mb-2">
            <span className="whitespace-nowrap">Info</span>
          </div>
          <footer className="text-xs text-neutral-500">
            <ul className="flex flex-col gap-1 mb-4">
              <li>
                <b>Version</b>:{" "}
                <a
                  href="https://github.com/JulianKominovic/mechy-keyboard/releases/tag/1.0.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline cursor-pointer underline-offset-2"
                >
                  1.0.0
                </a>
              </li>
              <li className="flex overflow-x-hidden">
                <b className="flex-shrink-0">App log folder</b>:{" "}
                <button
                  title="/Users/julian/Library/Logs/com.jkominovic.mechy-keyboard/"
                  className="w-full underline truncate cursor-pointer text-ellipsis underline-offset-2"
                >
                  /Users/julian/Library/Logs/com.jkominovic.mechy-keyboard/
                </button>
              </li>
              <li className="flex overflow-x-hidden">
                <b className="flex-shrink-0">App config folder</b>:{" "}
                <button
                  title="/Users/julian/Library/Application Support/com.jkominovic.mechy-keyboard/"
                  className="w-full underline truncate cursor-pointer text-ellipsis underline-offset-2"
                >
                  /Users/julian/Library/Application
                  Support/com.jkominovic.mechy-keyboard/
                </button>
              </li>
              <li className="flex overflow-x-hidden">
                <b className="flex-shrink-0">App cache folder</b>:{" "}
                <button
                  title="/Users/julian/Library/Caches/com.jkominovic.mechy-keyboard/"
                  className="w-full underline truncate cursor-pointer text-ellipsis underline-offset-2"
                >
                  /Users/julian/Library/Caches/com.jkominovic.mechy-keyboard/
                </button>
              </li>
              <li className="flex overflow-x-hidden">
                <b className="flex-shrink-0">Soundpacks folders</b>:{" "}
                <button
                  title="/Users/julian/Library/Caches/com.jkominovic.mechy-keyboard/soundpacks"
                  className="w-full underline truncate cursor-pointer text-ellipsis underline-offset-2"
                >
                  /Users/julian/Library/Caches/com.jkominovic.mechy-keyboard/soundpacks
                </button>
              </li>
            </ul>
            Created by{" "}
            <a
              href="https://twitter.com/juliankominovic"
              target="_blank"
              rel="noopener noreferrer"
              className="underline cursor-pointer underline-offset-2"
            >
              @Julian Kominvovic
            </a>{" "}
            <div className="flex mt-1">
              <a
                href="https://jkominovic.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 gap-2 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm78.36,64H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM216,128a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM128,43a115.27,115.27,0,0,1,26,45H102A115.11,115.11,0,0,1,128,43ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48Zm50.35,61.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/juliankominovic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 gap-2 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z" />
                </svg>
              </a>
              <a
                href="https://github.com/JulianKominovic/mechy-keyboard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 gap-2 text-xs text-left truncate rounded-lg text-black/60 hover:bg-black/10 text-ellipsis"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z" />
                </svg>
              </a>
            </div>
          </footer>
        </aside>
        <main className="relative w-full h-full px-2 py-2 col-[2/3] row-[1/3]">
          <div className="relative h-full px-8 py-8 pt-8 overflow-x-hidden overflow-y-auto rounded-lg shadow-lg border border-white/[0.05] bg-neutral-100 bg-gradient-to-tl from-[#d9ac92] to-[#dfb398]">
            <Image
              className="absolute -right-32 z-10 -top-28 drop-shadow-[0px_6px_100px_#ff88008e] shadow-primary-950 select-none"
              src={LogoTransparent}
              height={500}
              width={500}
              alt="Logo of Mechy Keyboard"
            />
            <header className="cursor-default select-none">
              <a
                target="_blank"
                href="https://github.com/JulianKominovic/mechy-keyboard/releases/tag/1.0.0"
                className="relative z-10 inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] rounded-full bg-primary-900 group text-primary-200 hover:bg-primary-900/80 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="inline-block"
                >
                  <path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.94,166.06,26.5,143a16,16,0,0,1,0-30L89.94,89.94,113,26.5a16,16,0,0,1,30,0l23.07,63.44L229.5,113A15.79,15.79,0,0,1,240,128Z" />
                </svg>{" "}
                Version 1.0.0 is here!
              </a>
              <p className="relative z-0 font-extrabold drop-shadow-sm text-primary-900 text-7xl">
                Mechy
              </p>
              <p className="relative z-20 font-extrabold drop-shadow-sm text-primary-900 text-7xl">
                Keyboard
              </p>
              <p className="mt-1 max-w-[26ch] text-primary-900 font-medium">
                Give your keyboard a voice.
              </p>
            </header>
            <div className="flex items-center gap-3 text-[10px] font-medium after:inline-block after:bg-black/[0.05] after:w-full after:h-px text-black/20 after:rounded-full mb-8 mt-12 after:bg-primary-900/20 after:h-[2px]" />
            <fieldset className="relative z-10 select-none text-primary-800">
              <label
                htmlFor="volume"
                className="block text-sm font-semibold leading-tight text-primary-900 whitespace-nowrap dark:text-white"
              >
                Volume (100%)
              </label>
              <span className="mb-3 text-xs text-primary-900/70">
                Volume is relative to the system volume.
              </span>
              <div className="flex items-center gap-2">
                <button className="flex items-center w-auto h-6 gap-1 p-1 rounded-lg bg-primary-900/10 text-primary-900 hover:bg-primary-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z" />
                  </svg>
                  <kbd className="flex items-center gap-0.5 leading-none font-semibold font-sans text-sm pl-1 border-l border-primary-900/20">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M180,140H164V116h16a40,40,0,1,0-40-40V92H116V76a40,40,0,1,0-40,40H92v24H76a40,40,0,1,0,40,40V164h24v16a40,40,0,1,0,40-40ZM164,76a16,16,0,1,1,16,16H164ZM60,76a16,16,0,0,1,32,0V92H76A16,16,0,0,1,60,76ZM92,180a16,16,0,1,1-16-16H92Zm24-64h24v24H116Zm64,80a16,16,0,0,1-16-16V164h16a16,16,0,0,1,0,32Z" />
                      </svg>
                    </span>
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M232.48,111.51l-96-96a12,12,0,0,0-17,0l-96,96A12,12,0,0,0,32,132H68v76a20,20,0,0,0,20,20h80a20,20,0,0,0,20-20V132h36a12,12,0,0,0,8.48-20.49ZM176,108a12,12,0,0,0-12,12v84H92V120a12,12,0,0,0-12-12H61l67-67,67,67Z" />
                      </svg>
                    </span>
                    <span className="">↓</span>
                  </kbd>
                </button>
                <input
                  id="volume"
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer max-w-64 bg-primary-900/20"
                  defaultValue={100}
                />
                <button className="flex items-center w-auto h-6 gap-1 p-1 rounded-lg bg-primary-900/10 text-primary-900 hover:bg-primary-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
                  </svg>
                  <kbd className="flex items-center gap-0.5 leading-none font-semibold font-sans text-sm pl-1 border-l border-primary-900/20">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M180,140H164V116h16a40,40,0,1,0-40-40V92H116V76a40,40,0,1,0-40,40H92v24H76a40,40,0,1,0,40,40V164h24v16a40,40,0,1,0,40-40ZM164,76a16,16,0,1,1,16,16H164ZM60,76a16,16,0,0,1,32,0V92H76A16,16,0,0,1,60,76ZM92,180a16,16,0,1,1-16-16H92Zm24-64h24v24H116Zm64,80a16,16,0,0,1-16-16V164h16a16,16,0,0,1,0,32Z" />
                      </svg>
                    </span>
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M232.48,111.51l-96-96a12,12,0,0,0-17,0l-96,96A12,12,0,0,0,32,132H68v76a20,20,0,0,0,20,20h80a20,20,0,0,0,20-20V132h36a12,12,0,0,0,8.48-20.49ZM176,108a12,12,0,0,0-12,12v84H92V120a12,12,0,0,0-12-12H61l67-67,67,67Z" />
                      </svg>
                    </span>
                    <span className="">↑</span>
                  </kbd>
                </button>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <button className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-primary-900/10 text-primary-900 hover:bg-primary-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill=""
                    viewBox="0 0 256 256"
                    className="fill-primary-900"
                  >
                    <path
                      d="M80,88v80H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8Z"
                      opacity="0.2"
                    />
                    <path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z" />
                  </svg>
                  <kbd className="flex items-center gap-0.5 leading-none font-semibold font-sans text-sm pl-1 border-l border-primary-900/20">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M180,140H164V116h16a40,40,0,1,0-40-40V92H116V76a40,40,0,1,0-40,40H92v24H76a40,40,0,1,0,40,40V164h24v16a40,40,0,1,0,40-40ZM164,76a16,16,0,1,1,16,16H164ZM60,76a16,16,0,0,1,32,0V92H76A16,16,0,0,1,60,76ZM92,180a16,16,0,1,1-16-16H92Zm24-64h24v24H116Zm64,80a16,16,0,0,1-16-16V164h16a16,16,0,0,1,0,32Z" />
                      </svg>
                    </span>
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M232.48,111.51l-96-96a12,12,0,0,0-17,0l-96,96A12,12,0,0,0,32,132H68v76a20,20,0,0,0,20,20h80a20,20,0,0,0,20-20V132h36a12,12,0,0,0,8.48-20.49ZM176,108a12,12,0,0,0-12,12v84H92V120a12,12,0,0,0-12-12H61l67-67,67,67Z" />
                      </svg>
                    </span>
                    <span className="">M</span>
                  </kbd>
                </button>
                <button className="p-1 rounded-lg bg-primary-900/10 text-primary-900 hover:bg-primary-900/20">
                  25%
                </button>
                <button className="p-1 rounded-lg bg-primary-900/10 text-primary-900 hover:bg-primary-900/20">
                  50%
                </button>
                <button className="p-1 rounded-lg bg-primary-900/10 text-primary-900 hover:bg-primary-900/20">
                  75%
                </button>
                <button className="p-1 rounded-lg bg-primary-900/10 text-primary-900 hover:bg-primary-900/20">
                  100%
                </button>
              </div>
            </fieldset>
            <div className="flex items-center gap-3 text-[10px] font-medium after:inline-block after:bg-black/[0.05] after:w-full after:h-px text-black/20 after:rounded-full my-8 after:bg-primary-900/20 after:h-[2px]" />
            <footer className="mt-10 text-primary-900">
              <div className="flex flex-wrap items-center gap-1 text-lg">
                Using{" "}
                <div className="inline-flex items-center h-6 gap-1 p-1 overflow-hidden text-base rounded-md bg-primary-300">
                  <span
                    className="inline-block w-3 h-3 rounded-[4px]"
                    style={{ backgroundColor: "rgb(255, 221, 182)" }}
                  />
                  <b className="whitespace-pre">Creams</b>
                </div>
                by{" "}
                <div className="inline-flex items-center h-6 gap-1 p-1 overflow-hidden text-base rounded-md bg-primary-300">
                  <Image
                    src={NovelKeysLogo}
                    alt="NovelKeys logo"
                    className="object-scale-down w-auto h-full rounded-[4px] max-w-7"
                  />
                  <b className="">NovelKeys™</b>
                </div>
              </div>
              <p className="mt-1 text-sm">
                Thanks to <b>Aksh Aggarwal</b> for this soundpack!
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MechyKeyboardDemo;
