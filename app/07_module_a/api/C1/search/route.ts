import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest) {
    const query = req.nextUrl.searchParams
    console.log(query.keys())

    const result = await prisma.product.findMany({
        where: {
            OR: [{
                name: query
            }, {category: query}
            ]
        }
    })

    return NextResponse.json({query, response: result}, {status:200})
}