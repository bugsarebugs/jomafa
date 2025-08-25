"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaDownload } from "react-icons/fa"
import { title } from "process";

export default function Books() {
  const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const titles = ['JOMAFA', 'BOOKS', 'READ MORE', 'SEEK MORE'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % titles.length;
        document.title = titles[nextIndex]; // update title here with latest index
        return nextIndex;
      });
    }, 1000); // change title every second

    return () => clearInterval(interval); // cleanup
  }, [titles]); // include titles to satisfy eslint and be correct
    return (
        <div className="flex flex-col justify-center items-center align-middle ">
          <h1 className="text-6xl font-bold pt-5">Books</h1>
            <h1 className="font-bold text-2xl text-center">There is nothing as beautiful as Exploring a Library <span className="text-sm">Just Click and Enjoy Reading</span></h1>
            <div className="grid lg:grid-cols-3 lg:grid-rows-4 gap-4 pt-10 ">
              {books.map((book) => (
                <div  key={book} className="p-5 w-80 flex flex-col h-100 relative text-center items-center justify-items-center  justify-center  rounded-t-xs hover:bg-[url('/nopic2.png')] bg-cover inset-0 inset-shadow-2xs"
                  style={{backgroundImage: `url('/books/${book}.png')`,   // Dynamically set background
                }}
                >
                    <Link href={"/books/" + book + ".pdf"} className=" text-center absolute w-full  h-full  font-bold text-2xl text-red-500 hover:bg-[rgba(0,0,255,0.3)]  align-middle"></Link>
                </div>
              ))}
            </div>

        </div>
    )
}