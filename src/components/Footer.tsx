import Image from "next/image";
import Link from "next/link";
import { FaSms, FaInstagram, FaYoutube, FaFacebook, FaDiscord } from "react-icons/fa"
import { FaXTwitter, FaWhatsapp} from "react-icons/fa6"


export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-950 p-5 align-middle">
      <div className="flex flex-col lg:flex-row flex-wrap gap-5 p-5">
        <div className="flex max-w-140 flex-col flex-wrap gap-5 p-5 text-wrap">
          <h1 className="text-wrap">
            Get the latest updates around resources, events & promotions from
            JOMAFA
          </h1>
          <form action="" className="flex gap-2">
            <input
              type="email"
              name=""
              id=""
              className="rounded-2xl bg-white p-3 text-black placeholder:text-gray-300 focus:placeholder:absolute focus:placeholder:top-[-10]"
              placeholder="Email address*"
            />
            <button className="rounded-2xl border-2 border-blue-500 px-2 hover:bg-blue-500 focus:bg-blue-500">
              <Link href="/submit">Submit</Link>
            </button>
          </form>
          <p className="txt-wrap">
            By submitting this form, I agree to the processing of my person data
            by JOMAFA as described in the Privacy Policy
          </p>
        </div>
        <div className="p-5">
          <h1 className="hover:bg:">Services</h1>
          <ul>
            <li className="hover:translate-x-2">Software Development</li>
            <li className="hover:translate-x-2">Web Application Development</li>
            <li className="hover:translate-x-2">Graphics and Design</li>
            <li className="hover:translate-x-2">3d Models and Animation</li>
            <li className="hover:translate-x-2">Social Media Management and Automation</li>
            <li className="hover:translate-x-2">Mobile Development</li>
            <li className="hover:translate-x-2">Cloud Computing</li>
            <li className="hover:translate-x-2">Ai system Develpoemt</li>
            <li className="hover:translate-x-2">Chatbot Automation</li>
            <li className="hover:translate-x-2">Hosting Services</li>
            <li className="hover:translate-x-2">Structural Design</li>
            <li className="hover:translate-x-2">Interior Design</li>
            <li className="hover:translate-x-2">Internet Of Things</li>
            <li className="hover:translate-x-2">Game Development (PS, Mobile, Computer)</li>
            <li className="hover:translate-x-2">POS systems</li>
            <li className="hover:translate-x-2">kwenye bugsarebugs</li>
            <li className="hover:translate-x-2">Security Camera .. Home, Vehicles</li>
            <li className="hover:translate-x-2">Inteligent House(Door, bell)</li>
          </ul>
        </div>
        <div className="p-5">
          <h1 className="">Resources</h1>
          <ul>
            <li className="hover:translate-x-2"><Link href="/blog">Blog</Link></li>
            <li className="hover:translate-x-2"><Link href="/books">Books</Link></li>
          </ul>
        </div>
        <div className="p-5">
          <h1 className="">Shop</h1>
          <ul>
            <li className="hover:translate-x-2">Laptops</li>
            <li className="hover:translate-x-2">Desktops</li>
            <li className="hover:translate-x-2">All in ONe</li>
            <li className="hover:translate-x-2">Headphones</li>
            <li className="hover:translate-x-2">Speakers</li>
            <li className="hover:translate-x-2">Mouse</li>
            <li className="hover:translate-x-2">Keyboard</li>
            <li className="hover:translate-x-2">Other Hardwares</li>
            <li className="hover:translate-x-2">Tshirts</li>
            <li className="hover:translate-x-2">Caps</li>
            <li className="hover:translate-x-2">Trouses</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-col lg:flex-row md:flex-col justify-between gap-5 p-2">
        <div className="flex flex-col px-10">
          <Link href="/">
            <Image
              src="/jomafa.png"
              alt="logo Jomafa"
              width={200}
              height={200}
            />
          </Link>
          <ul className="flex flex-row gap-5 sm:text-sm text-sm">
            <li className="hover:text-blue-500">
              <Link href="/feedback" className="text-sm">Feedback</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link href="/legal" className="text-sm">Legal</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link href="/trust" className="text-sm">Trust & Compliance</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link href="/rss" className="text-sm">RSS Feed</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 p-5">
          <ul className="flex flex-row gap-2 lg:gap-5 sm:gap-2">
            <li className="self-center rounded-2xl bg-gray-900 sm:p-3 lg:p-5 p-3 text-center hover:bg-gray-800">
              <Link href="sms:+255625250232"><FaSms className="size-5 lg:size-10 sm:size-5"/></Link>
            </li>
            <li className="self-center rounded-2xl bg-gray-900 sm:p-3 lg:p-5 p-3 text-center hover:bg-gray-800">
              <Link href="https://instagram.com/jomafa"><FaInstagram className="size-5 lg:size-10 sm:size-5"/></Link>
            </li>
            <li className="self-center rounded-2xl bg-gray-900 sm:p-3 lg:p-5 p-3 text-center hover:bg-gray-800">
              <Link href="https://youtube.com/jomafa"><FaYoutube className="size-5 lg:size-10 sm:size-5"/></Link>
            </li>
            <li className="self-center rounded-2xl bg-gray-900 sm:p-3 lg:p-5 p-3 text-center hover:bg-gray-800">
              <Link href="https://wa.me/255625250232"><FaWhatsapp className="size-5 lg:size-10 sm:size-5"/></Link>
            </li>
            <li className="self-center rounded-2xl bg-gray-900 sm:p-3 lg:p-5 p-3 text-center hover:bg-gray-800">
              <Link href="https://discord.com/jomafa"><FaDiscord className="size-5 lg:size-10 sm:size-5"/></Link>
            </li>
            
            <li className="self-center rounded-2xl bg-gray-900 sm:p-3 lg:p-5 p-3 text-center hover:bg-gray-800">
              <Link href="https://discord.com/jomafa"><FaXTwitter className="size-5 lg:size-10 sm:size-5"/></Link>
            </li>
          </ul>
          <h1 className="text-right">
            &copy; 2025 All Rights Reserved. JOMAFA done!!
          </h1>
        </div>
      </div>
    </div>
  );
}
