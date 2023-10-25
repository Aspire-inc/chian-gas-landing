import { NextResponse } from "next/server";

export default function middleware(req: {
  url: any;
  nextUrl: { origin: any };
}) {
  // let verify = req.cookies.get("savvy_user_token");
  let url = req.url;
  //   const { origin } = req.nextUrl;
  if (url.endsWith("/")) {
    return NextResponse.redirect(new URL("/homepage", url));
  }
}
