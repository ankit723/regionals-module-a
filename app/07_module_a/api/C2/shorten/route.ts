import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function Post(req:NextRequest) {
    try{

        const {url} = await req.json();
        
        if(url.split("/")[0] === "https" || url.split("/")[0] === "http"){
            return NextResponse.json({message: "invalid url"}, {status:400})
        }
        
        const short = (Math.random()*100000).toString()
        const newUrl = `${process.env.BASE_URL}/07_module_a/C2/${short}`
        
        await prisma.url.create({
            data:{
                url,
                short:newUrl,
                code:short
            }
            
        })
        
        return NextResponse.json({code:short, shortUrl: newUrl})
    }catch(err){
        NextResponse.json({"message": "there has been some error"}, {status: 500});
    }
}