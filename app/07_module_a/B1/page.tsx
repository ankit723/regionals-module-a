'use client';

import { useEffect, useRef, useState } from "react";

export default function B1(){

    const [isOpen, setIsOpen] = useState(false)

    window.addEventListener('keydown', (e)=>{
        if(e.key === "Escape"){
            setIsOpen(false)
        }
    })

    return(
        <div className="hero w-screen h-screen flex justify-center items-center bg-slate-100" style={{overflow:isOpen?"hidden":"scroll"}}>
            <button className="border p-3 rounded-lg" onClick={()=>setIsOpen(true)}>Show Modal</button>
            {isOpen && (
                <div className="absolute inset-0 bg-black/70 flex justify-center items-center">
                    <div className="bg-white py-10 px-8 flex flex-col gap-7 rounded-xl">
                        <h1 className="text-3xl font-bold ">Example Modal </h1>
                        <p>This is a demonstration of an accessible modal view</p>
                        <button className="border p-3 rounded-lg" onClick={()=>setIsOpen(false)}>Close Modal</button>
                    </div>
                </div>
            )}

        </div>
    )
}