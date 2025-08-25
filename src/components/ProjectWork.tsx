import Image from "next/image";


export default function ProjectWork(){

    return (
        <div className="flex flex-col lg:flex-row items-center self-center justify-center gap-10  sm:px-25 px-40 lg:px-80 sm:p-10">
            <Image alt="Projects" width={300} height={100} src="/uiz/jpgz/blog.jpg"/>
            <div className="flex flex-col">
                <h1 className="text-4xl pb-5">Have a Project? Let&apos;s Work on it</h1>
                <div className="flex flex-col lg:flex-row flex-wrap gap-2 align-middle items-center ">
                    <input type="text" className="bg-white p-2 text-gray-600" placeholder="Project Title" />
                    <input type="text" placeholder="Phone Number" className="bg-white p-2 text-gray-600"/>
                    <input type="text" placeholder="Name" className="bg-white p-2 text-gray-600"/>
                    <input type="text" placeholder="Description" className="bg-white p-2 text-gray-600"/>
                </div>
                <p className="p-5">Please Give a Brief of Your Project. You can add theme, logo and explanation of your project here</p>
                <div className="relative pb-10">
                    <input type="file" name=""  id="" multiple className="p-10 bg-white hover:bg-blue-500 transition-all duration-300 ease-linear"/>
                    <span className="absolute w-50 h-10 bg-blue-500 top-0 left-0 font-bold p-2 align-middle text-center text-white">Tap Down For Files</span>
                </div>
                <div className="flex flex-row max-w-85 p-2 align-middle items-center bg-white text-black justify-between">
                        <div className=""><input type="checkbox" name="" className="size-8 align-middle p-5 text-black outline-1 outline-black" id=""  /><label htmlFor="" className="px-5">I&apos;m not a robot</label></div>
                        <div className="flex flex-col p-0">
                            <Image src="/uiz/pngz/recap.png" width={40} height={50} alt="recap"/>
                            <p className="text-sm">reCAPTCHA</p>
                            <p className="text-sm">Privacy-Terms</p>
                        </div>
                </div>
                <div className="flex flex-row align-middle items-center pb-5"><input type="checkbox" value="" className="pt-5 mt-5 size-10 "/><label htmlFor="" className="px-5 pt-5">Agree on Terms And Conditions.</label></div>
                <button className="bg-blue-400 hover:bg-blue-500 rounded-xl p-3 px-10 w-fit">Send</button>
            </div>
        </div>
    )
}