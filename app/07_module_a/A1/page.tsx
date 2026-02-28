
function Ring({type="Pending"}){
    return(
        <button className="relative hover:bg-blue-50 py-5 px-10  rounded-xl transition-all cursor-pointer focus:border-5 focus:border-orange-500 focus:bg-blue-50">
            <div className={`w-50 h-50 rounded-full flex justify-center items-center   ${type === "Done"?"bg-blue-500":type==="In Progress"?"conic":"bg-gray-300"}`}>
                <div className="w-30 h-30 bg-white rounded-full z-10"></div>
            </div>
            <p className="text-center font-semibold text-xl mt-2">{type}</p>
        </button>
    )
}

export default function A1(){
    return(
        <div className="w-screen h-screen flex justify-center items-center bg-slate-100">
            <div className="bg-white py-10 px-10 rounded-xl shadow-lg border border-slate-200">
                <div className="flex flex-col gap-2 items-start my-2">
                    <h1 className="text-4xl font-bold">Status Rings</h1>
                    <p className="text-xl font-medium text-slate-600">Visual indicators for tasks progress states.</p>
                </div>

                <div className="grid grid-cols-3 gap-14 my-3">
                    {["Pending", "In Progress", "Done"].map(d=>(
                        <Ring type={d} key={d}/>
                    ))}
                </div>
                
                <p className="text-xl font-medium text-slate-600">Tip: Use <span className="mx-1 font-normal text-sm bg-slate-100/50 border border-gray-300 px-2 rounded-md">Tab</span> to move focus betweeb rings and observe the focus styling.</p>
                

            </div>
        </div>
    )
}