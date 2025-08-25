import { RiComputerLine } from "react-icons/ri";
import { FaFingerprint, FaAd , FaNewspaper, FaMobileAlt} from "react-icons/fa";
import { BsFillMenuAppFill } from "react-icons/bs"
import { PiChatsCircle } from "react-icons/pi"
import { AiOutlineMenuFold } from "react-icons/ai"
import { MdSettingsSuggest } from "react-icons/md"
import { IoAirplane, IoAnalytics, IoAccessibilityOutline, IoArchive, IoBag, IoApps, IoBarbell, IoBatteryCharging, IoBonfire, IoBuildOutline, IoColorFilter, IoCodeSharp, IoDesktop, IoFlowerSharp, IoSparklesSharp } from "react-icons/io5"

export default function Services(){
    return (
        <div className="flex flex-col items-center justify-center" id="services">
        <h1 className="font-bold text-6xl pt-10">Our Services</h1>
        <p className="text-shadow-lg text-shadow-blue-500 font-bold">
          We are simply a Result Driven Software Solution Company
        </p>
        <div className="flex flex-row flex-wrap gap-10 p-10 px-80 text-wrap">
          <div className="flex group min-w-100 flex-row bg-gray-200 p-5 px-10 text-black shadow-gray-400 hover:shadow-lg ">
            <RiComputerLine className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="text-wrap px-5">
              <h1 className="text-2xl font-bold">Website Design</h1>
              <p
                className="text-sm text-gray-800"
              >
                Single Page | Entreprise | Business
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <FaFingerprint className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="text-wrap px-5">
              <h1 className="text-2xl font-bold">Business Branding</h1>
              <p
                className="text-sm text-gray-800"
              >
                Social Media Tactic | People Network
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row bg-gray-200 group p-5 text-black shadow-gray-400 hover:shadow-lg">
            <BsFillMenuAppFill className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="text-wrap px-5">
              <h1 className="text-2xl font-bold">Web Hosting</h1>
              <p
                className="text-sm text-gray-800"
              >
                Free | Premium
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <FaAd className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132" />
            <div className="text-wrap px-5">
              <h1 className="text-2xl font-bold">
                Marketing &amp; Advertising
              </h1>
              <p
                className="text-sm text-gray-800"
              >
                Digital Platforms | Content creation | Events
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row bg-gray-200 group p-5 text-black shadow-gray-400 hover:shadow-lg">
            <PiChatsCircle className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="text-wrap px-5">
              <h1 className="text-2xl font-bold">Social Media Managing</h1>
              <p
                className="text-sm text-gray-800"
              >
                Automation | Grow | Keep active
              </p>
            </div>
          </div>
          <div className="flex max-w-100 flex-row bg-gray-200 p-5 group text-black shadow-gray-400 hover:shadow-lg">
            <AiOutlineMenuFold className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="text-wrap px-5">
              <h1 className="text-2xl font-bold text-wrap">
                Search Engine Optimization
              </h1>
              <p
                className="text-sm text-gray-800"
              >
                Being At Top Matters
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row bg-gray-200 p-5 group text-black shadow-gray-400 hover:shadow-lg">
            <MdSettingsSuggest className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="text-wrap px-5">
              <h1 className="text-2xl font-bold">System Development</h1>
              <p
                className="text-sm text-gray-800"
              >
                All OS Types, Windows | Linux | MacOs
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row bg-gray-200 group p-5 text-black shadow-gray-400 hover:shadow-lg">
            <FaNewspaper className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="text-wrap px-5">
              <h1 className="text-2xl font-bold">Digital Ceremony</h1>
              <p
                className="text-sm text-gray-800"
              >
                Wedding | Birthdays | Partys
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <FaMobileAlt className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">App Development</h1>
              <p
                className="text-sm text-gray-800"
              >
                Android | IOS | Native | Cross Platform
              </p>
            </div>
          </div>

          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <IoAccessibilityOutline className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">Blockchain Development</h1>
              <p
                className="text-sm text-gray-800"
              >
                Bitcoin | Dogecoin | Cryptocurrency | Etherium
              </p>
            </div>
          </div>

          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <IoAirplane className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">AI solutions</h1>
              <p
                className="text-sm text-gray-800"
              >
                Web | Data | IOT
              </p>
            </div>
          </div>

          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <IoAnalytics className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">ML &amp; Language Models</h1>
              <p
                className="text-sm text-gray-800"
              >
                LLMs | Image | Video 
              </p>
            </div>
          </div>

          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <IoArchive className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">Structural Design</h1>
              <p
                className="text-sm text-gray-800"
              >
                Single Floor | Multi Floors | Base
              </p>
            </div>
          </div>

          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <IoBag className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">Interior Design</h1>
              <p
                className="text-sm text-gray-800"
              >
                Room Design | store | Kitchen | Sorrounds
              </p>
            </div>
          </div>

          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <IoApps className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">Animation &amp; 3d Models</h1>
              <p
                className="text-sm text-gray-800"
              >
                2d | 3d | Shorts | Long | Movie
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
              <IoBarbell className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">Graphics &amp; Design</h1>
              <p
                className="text-sm text-gray-800"
              >
                Logo | Poster | Flyers | Banners
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <IoBatteryCharging className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">Game Development</h1>
              <p
                className="text-sm text-gray-800"
              >
                Mobile | PC | PS | Web
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <IoBonfire className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-sm font-bold">Security Camera</h1>
              <p
                className="text-sm text-gray-800"
              >
                Face Recognition | Remote Control
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <IoBuildOutline className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">POS Systems</h1>
              <p
                className="text-sm text-gray-800"
              >
                Scanners | Payment | Calculators | Receipt
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <IoColorFilter className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">Intelligent MotorVehicles</h1>
              <p
                className="text-sm text-gray-800"
              >
                Autopilot | sensors | driver monitoring
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <IoCodeSharp className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">Internet of Things</h1>
              <p
                className="text-sm text-gray-800"
              >
                Sensors | Internet | Voice assistant
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <IoDesktop className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">Cloud Computing</h1>
              <p
                className="text-sm text-gray-800"
              >
                Azure | AWS | CloudFlare
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <IoFlowerSharp className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">Chatbot Automation</h1>
              <p
                className="text-sm text-gray-800"
              >
                Web | social media | mobile app | customer care
              </p>
            </div>
          </div>
          <div className="flex min-w-100 flex-row group bg-gray-200 p-5 text-black shadow-gray-400 hover:shadow-lg">
            <IoSparklesSharp className="text-gray-600 size-10  group-hover:text-blue-500 group-hover:rotate-10 transition-all ease-in duration-500 group-hover:scale-132"/>
            <div className="">
              <h1 className="text-2xl font-bold">Intelligent House</h1>
              <p
                className="text-sm text-gray-800"
              >
               Light Monitor | Security systems | door automation
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}