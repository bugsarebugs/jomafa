"use client";

import Image from "next/image";
import Link from "next/link";
import { CiCloudOn } from "react-icons/ci"
import { useState } from "react";

export default function Navigation() {
  const [hovered , sethover] = useState(false);

  return (
    <nav className="sticky top-0 z-100 justify-center lg:gap-20  rounded-xl bg-gray-950 p-2 shadow-inner shadow-blue-500  flex lg:flex-row flex-col items-center">
      <Link href="/" className="flex flex-row items-center">
        <Image
          src="/uiz/pngz/jmc.png"
          alt="jomafa logo"
          className=""
          width={60}
          height={200}                                                                                                        
        />
        <Image
          src="/jomafa.png"
          alt="Jomafa Logo"
          className=""
          width={200}
          height={50}
        />
      </Link>
      <ul className="flex gap-5 self-center p-2 align-middle text-xl font-bold">
        <li>
          <Link
            href="/#services"
            className="rounded-xs p-2 hover:bg-gray-900 hover:text-blue-400"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/#portifolio"
            className="rounded-xs p-2 hover:bg-gray-900 hover:text-blue-400"
          >
            Portifolio
          </Link>
        </li>
        <li className="relative">
          <span
            className="rounded-xs p-5 group relative hover:bg-gray-900 hover:text-blue-400"
            onMouseEnter={() => sethover(!hovered)}
           
          >
            Resources
            <CiCloudOn className="group-hover:text-black absolute left-10 bottom-0"/>
          </span>
          <div className={`absolute top-7 z-5 bg-gray-950 w-full p-5 ${hovered? "absolute" : "hidden"}`}>
              <ul>
                <li className="p-3 hover:bg-gray-900"><Link href="/blog" onClick={() => sethover(!hovered)}>Blog</Link></li>
                <li className="p-3 hover:bg-gray-900"><Link href="/books" onClick={() => sethover(!hovered)}>Books</Link></li>
              </ul>
          </div>
        </li>


      </ul>
    </nav>
  );
}
