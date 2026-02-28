import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET({params}:{params:Promise<{code: string}>}){
    const {code} = await params;

    const url = await prisma.url.findFirst({
        where:{
            code
        }    
    })

    return NextResponse.json({url: url?.short}, {status: 302})

    
}