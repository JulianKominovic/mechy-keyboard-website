import Link from "next/link";
import { metaData } from "../config";
import Logo from "../../public/logo.png";
import Image from "next/image";
const navItems = {
  "/docs": { name: "Docs" },
  "/changelog": { name: "Changelog" },
};

export function Navbar() {
  return (
    <nav className="px-4 py-0 mb-32 lg:mb-24">
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
          >
            <Image src={Logo} className="" alt="logo" width={24} height={24} />
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4 mt-6 md:mt-0 md:ml-auto">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="relative flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              {name}
            </Link>
          ))}
          {/* <ThemeSwitch /> */}
        </div>
      </div>
    </nav>
  );
}
