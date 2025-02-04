import { GHLatestVersionResponse } from "app/lib/fetch-last-version";
import Link from "next/link";
import React from "react";

type Props = {
  lastVersion: GHLatestVersionResponse | null;
};

const NewVersionBadge = ({ lastVersion }: Props) => {
  if (!lastVersion) {
    return null;
  }
  return (
    <div className="flex items-center justify-center gap-2 mb-4 text-xs">
      <Link
        href="/changelog"
        className="flex items-center gap-2 px-2 py-1 transition-colors rounded-lg bg-primary-300 hover:bg-primary-900 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="inline-block"
        >
          <path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.94,166.06,26.5,143a16,16,0,0,1,0-30L89.94,89.94,113,26.5a16,16,0,0,1,30,0l23.07,63.44L229.5,113A15.79,15.79,0,0,1,240,128Z"></path>
        </svg>{" "}
        Version {lastVersion.name} is here!
      </Link>
    </div>
  );
};

export default NewVersionBadge;
