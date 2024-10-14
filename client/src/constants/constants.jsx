import { HiOutlineHome, HiOutlineUserCircle } from 'react-icons/hi';
import { IoLanguage } from 'react-icons/io5';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { GiArtificialIntelligence } from "react-icons/gi";

const sidebarNavItems = [
  {
    title: 'Check Up',
    path: '/checkup',
    icon: <HiOutlineHome className="sidebar-btn-icon" />,
  },
  // {
  //   title: 'Characters',
  //   path: '/characters',
  //   icon: <IoLanguage className="sidebar-btn-icon" />,
  // },
  {
    title: 'Report',
    path: '/report',
    icon: <MdOutlineLeaderboard className="sidebar-btn-icon" />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <HiOutlineUserCircle className="sidebar-btn-icon" />,
  },
  {
    title: 'Ask AI',
    path: '/ask',
    icon: <GiArtificialIntelligence className="sidebar-btn-icon" />,
  },
];

const socialLinks = [
  {
    title: 'Github',
    url: 'https://github.com/kt946/japanese-quiz-mern-app',
    icon: <FaGithub className="social-link" />,
  },
];

const charBannerText = {
  Hiragana: 'Master Japanese with the basics',
  Katakana: 'Practice essential characters for loanwords',
  Kanji: 'Take your mastery to the next level',
};

export { sidebarNavItems, socialLinks, charBannerText };
