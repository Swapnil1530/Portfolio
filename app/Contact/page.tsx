import DesignLine from "@/components/DesignLine";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram , FaStackOverflow , FaTelegramPlane } from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6"
import {HiOutlineMail} from "react-icons/hi";
const ContactData = [
  {
    id: 1,
    Title: "Github",
    icon: <FaGithub />,
    AccountName: "Swapnil1530",
    link: "https://github.com/Swapnil1530",
  },
  {
    id:2,
    Title:"Linkdin",
    icon:<FaLinkedinIn />,
    AccountName:"Patel Swapnil",
    link:"https://www.linkedin.com/in/patel-swapnil-334317202/"
  },
  {
    id:3,
    Title:"Instagram",
    icon:<FaInstagram />,
    AccountName:"swapnil_patel_10",
    link:"https://www.instagram.com/swapnil_patel_10/"
  },
  {
    id:4,
    Title:"Stack Overflow",
    icon:<FaStackOverflow/>,
    AccountName:"Swapnil Patel",
    link:"https://stackoverflow.com/users/16561588/swapnil-patel"
  },
  {
    id:5,
    Title:"Twitter",
    icon:<FaTwitter/>,
    AccountName:"@Swapnil1530",
    link:"https://twitter.com/Swapnil1530"
  },
  {
    id:6,
    Title:"Gmail",
    icon:<HiOutlineMail/>,
    AccountName:"patelswapnil1784@gmail.com",
    link:""
  },
  {
    id:7,
    Title:"Telegram",
    icon:<FaTelegramPlane/>,
    AccountName:"Swapnil Patel",
    link:"https://t.me/swapnil0010"
  },
  {
    id:8,
    Title:"Location",
    icon:<FaLocationDot/>,
    AccountName:"Gujarat",
    link:"https://goo.gl/maps/HDktK3izEcA4YdSx6"
  }
];

const ContactPage = () => {
  return (
    <section className="py-10 lg:py-16 px-3 true">
      <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center dark:text-white">
        <span className="text-primary"> </span>
      </h2>
      <div className="mt-10 lg:mt-20 bg-gray-700   p-7 lg:p-10 bg-opacity-30 rounded-lg lg:rounded-2xl text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          <span className="text-[#f72b1c]">C</span>ontact
        </h1>
        <p className="text-xs lg:text-sm text-gray-400 max-w-sm tracking-widest mt-3 lg:mt-5 mx-auto">
          Get to know me by chatting with me through my available contacts. You
          can call or message me to start a conversation.
        </p>
      </div>

      <section className="py-10 lg:py-16 px-3 border-b border-gray-800 border-opacity-50 ">
        <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center text-white">
          Connect With<span className="text-[#f72b1c]"> Me </span>
        </h2>
        <DesignLine />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {ContactData.map((data) => {
          return (
            <div key={data.id}>
              <Link
                href={data.link}
                target="_blank"
                className="flex flex-col items-center border border-gray-800  rounded-lg py-6 px-4 transition duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-full border border-[#f72b1c] grid place-items-center">
                  <div className="fab fa-linkedin-in text-xl text-white">
                    {data.icon}
                  </div>
                </div>
                <h3 className="text-white  font-semibold mt-3">{data.Title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  {data.AccountName}
                </p>
              </Link>
            </div>
          );
        })}
        </div>
      </section>
    </section>
  );
};
export default ContactPage;
