import Image from "next/image";

export default function Portifolio(){
    
    return (

        <div className="flex flex-col justify-center items-center gap-5 " id="portifolio">
            <h1 className="font-bold text-6xl ">Our Portifolio</h1>
            <p className="font-bold text-center">Some of Web Application We have Made Already and Client Talks</p>
            <div className="flex flex-col lg:flex-row sm:flex-col p-5 justify-between gap-10">
                <div className="flex flex-row z-10 h-100 w-max border-2 border-white">
                    <Image src="/aplus.png" width={150} height={50} alt="aplus" className="hover:w-111"/>
                    <Image src="/loram.png" width={150} height={50} alt="aplus" className="hover:w-111"/>
                    <Image src="/holdonplay.png" width={150} height={50} alt="aplus" className="hover:w-111"/>
                    <Image src="/trueexplorer.png" width={150} height={50} alt="aplus" className="hover:w-111"/>
                </div>
                <div className="text-center p-5">
                    <h1 className="font-bold text-white text-4xl">The Clients Talk</h1>
                    <div className="overflow-hidden p-5 bg-white flex flex-col justify-center items-center ">
                        <div className="scrollright">
                            <div className="relative dialog font-bold p-5 bg-gray-500 w-50 h-40 text-wrap rounded-2xl">
                                I never expected that I will have well designed optimized website that attracts my customers
                            </div>
                            <div className="flex flex-row p-5">
                                <Image src="/companies/logo6.png" alt="Company Safari" width={50} height={50}/>
                                <div className="text-black">
                                    <h1>Said Said</h1>
                                    <p>Founder &amp; CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}