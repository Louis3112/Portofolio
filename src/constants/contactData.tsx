import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const CONTACT_DATA = [
  {
    id: 'email',
    platform: 'Email',
    username: 'corneliuslouis3112@gmail.com',
    link: 'mailto:corneliuslouis3112@gmail.com',
    action: 'SEND EMAIL',
    icon: <SiGmail className="text-4xl md:text-5xl" />, 
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    username: 'linkedin.com/in/louisnath/',
    link: 'https://www.linkedin.com/in/louisnath/',
    action: 'CHECK PROFILE',
    icon: <FaLinkedin className="text-4xl md:text-5xl" />,
  },
  {
    id: 'github',
    platform: 'GitHub',
    username: 'github.com/Louis3112',
    link: 'https://github.com/Louis3112',
    action: 'CHECK PROFILE',
    icon: <FaGithub className="text-4xl md:text-5xl" />,
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    username: 'instagram.com/@crnl_ou',
    link: 'https://www.instagram.com/crnl_ou',
    action: 'CHECK PROFILE',
    icon: <FaInstagram className="text-4xl md:text-5xl" />,
  },
];