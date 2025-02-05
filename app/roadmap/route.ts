import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.redirect(
    "https://github.com/users/JulianKominovic/projects/3"
  );
};
