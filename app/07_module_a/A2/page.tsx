'use client';


export default function A2(){

    const timeline = [
        {
            id: 1,
            title: "Onboarding revamp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quibusdam ut id!",
            year: 2025
        },

        {
            id: 2,
            title: "Onboarding revamp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quibusdam ut id!",
            year: 2025
        },

        {
            id: 3,
            title: "Onboarding revamp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quibusdam ut id!",
            year: 2025
        },

        {
            id: 4,
            title: "Onboarding revamp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quibusdam ut id!",
            year: 2025
        },

    ]

    return(
        <div className="min-w-screen min-h-screen flex justify-center items-center bg-slate-100 p-10">
            <div className="bg-white py-10 px-10 rounded-xl shadow-lg border border-slate-200  overflow-x-scroll">
                <div className="flex flex-col gap-2 items-start my-2">
                    <h1 className="text-4xl font-bold">Feature rollout timeline</h1>
                    <p className="text-xl font-medium text-slate-600">Upcoming product updates over the next four quaters.</p>
                </div>

                <div className="hidden sm:block">
                    <hr className="mt-20 bg-blue-300 border-2 border-blue-100"/>
                    <div className="border-blue-200 flex justify-around gap-40">
                        {timeline.map(d=>(
                            <div className="">
                                <div className=" flex-col justify-center items-center relative">
                                    <p className="text-md font-medium text-slate-500">Q{d.id} {" . "} {d.year}</p>
                                    <h1 className="text-2xl font-bold text-center">{d.title}</h1>
                                    <p className="text-md text-center font-medium text-slate-500">{d.description}</p>

                                    <div className={`w-5 h-5 rounded-full flex justify-center items-center bg-blue-500 z-100 absolute -top-7`}>
                                        <div className="w-3 h-3 bg-blue-50/95 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>   
                </div>           

                <div className="sm:hidden block mt-20">
                    <div className="border-blue-200 flex flex-col justify-around gap-40 border-l-2">
                        {timeline.map(d=>(
                            <div className="">
                                <div className=" flex-col justify-center items-center relative">
                                    <p className="text-md font-medium text-slate-500 text-center">Q{d.id} {" . "} {d.year}</p>
                                    <h1 className="text-2xl font-bold text-center">{d.title}</h1>
                                    <p className="text-md text-center font-medium text-slate-500">{d.description}</p>

                                    <div className={`w-5 h-5 rounded-full flex justify-center items-center bg-blue-500 z-100 absolute top-1/2 -left-8 `}>
                                        <div className="w-3 h-3 bg-blue-50/95 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>  
            </div>
        </div>
    )
}