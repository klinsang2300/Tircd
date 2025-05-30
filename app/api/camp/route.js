import { fetchCamp } from "@/utils/actions";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams} = new  URL(req.url)
  const search = searchParams.get('search')
  console.log(search)
  const camps = await fetchCamp()
  return NextResponse.redirect(new URL("/",req.url))
};