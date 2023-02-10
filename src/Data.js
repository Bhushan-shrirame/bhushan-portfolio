import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass,FaGithub, FaAndroid,FaPython, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaLinkedin,FaTwitter } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbBrandKotlin } from "react-icons/tb";
import { SiTensorflow,SiOpencv } from "react-icons/si";
import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
   
   {
      id:1,
      icon:<FaInstagram />,
      link:"https://www.instagram.com/bhushan_shrirame/"
   },
   {
    id:2,
    icon:<FaLinkedin />,
    link:"https://www.linkedin.com/in/bhushan-shrirame/"
   },
   {
    id:3,
    icon:<FaTwitter />,
    link:"https://twitter.com/Bhushanshriram2"
   },
   {
    id:4,
    icon:<FaGithub />,
    link:"https://github.com/Bhushan-shrirame"
   },
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "BhushanShrirame"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+918805643081"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "bhushanshrirame999@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <FaGithub />, <FaReact />, <FaNodeJs />, <FaSass />, <FaAndroid />,<TbBrandKotlin/>,<FaPython/>,<SiTensorflow/>,<SiOpencv/>]

export const experiences = [
  {
    id: 1,
    year: "2023",
    position: "Full stack Web Developer Intern",
    company: "nullclass.com"
  },
  // {
  //   di: 2,
  //   year: "2021",
  //   position: "Junior Web Developer",
  //   company: "shop.com.mm"
  // },
  // {
  //   id: 3,
  //   year: "2019",
  //   position: "Intern Web Dveloper",
  //   company: "shop.com.mm"
  // }
]
export const finishes = [
  {
    id: 1,
    number: '6+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "150+",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "669+",
    itemName: "Designed Items"
  },
  {
    id: 4,
    number: "117+",
    itemName: "Clients Served"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    link:"https://github.com/Bhushan-shrirame/Stackoverflow-clone",
    github:"https://github.com/Bhushan-shrirame/Stackoverflow-clone",
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    link:"https://youtubeclone-bhushanshrirame.netlify.app/",
    github:"https://github.com/Bhushan-shrirame/Youtube_Clone",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    link:"https://chat-gpt-clone-bhushan-shrirame.vercel.app/",
    github:"https://github.com/Bhushan-shrirame/Chat-gpt-clone",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
    link:"https://github.com/Bhushan-shrirame/ChatApplication",
    github:"https://github.com/Bhushan-shrirame/ChatApplication",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'game',
    link:"https://bhushan-shrirame.github.io/CodeCrossy-Road-with-three.js/",
    github:"https://github.com/Bhushan-shrirame/CodeCrossy-Road-with-three.js",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "ML/AI",
    link:"https://github.com/Bhushan-shrirame/brain_tumor_detection",
    github:"https://github.com/Bhushan-shrirame/brain_tumor_detection",
  },
]


export const workNavs = [
  "All", "Web", "App", "Game","ML/AI"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Pune, Maharashtra , India"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "bhushanshrirame999@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91-8805643081"
  }
]
