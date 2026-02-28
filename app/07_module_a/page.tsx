import Link from "next/link";

export default function IndexPage(){
    return(
        <div className="">
            {
                ["A1", "A2", "B1"].map((m)=>(
                    <div className="w-10 h-10 bg-green-100 flex justify-center items-center">
                        <Link href={`${process.env.BASE_URL}/07_module_a/${m}`}>
                            Click to Open Test {m}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}