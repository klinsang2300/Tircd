import { NextRequest, NextResponse } from "next/server";

export const middleware =(req ) =>{
    console.log("Hello middle");
    return NextResponse.redirect(new URL("/",req.url))
}

export const config =
{
    matcher:'/login/:path*'
}