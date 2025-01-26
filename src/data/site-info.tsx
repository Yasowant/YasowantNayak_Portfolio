import type { IconType } from 'react-icons';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

export type SocialLink = {
  platform: string;
  href: string;
  me?: string;
  text: string;
  icon: IconType;
  footerOnly?: boolean;
};

export type SiteInfo = {
  name: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  socialLinks: SocialLink[];
  email: string;
};

export const twitterHandle = '@yash2062';

export const siteInfo: SiteInfo = {
  name: 'Yasowant Nayak',
  title:
    'Yasowant Nayak - Full-Stack Developer | Building Scalable and Efficient Web Solutions',
  description:
    'Yasowant Nayak is a dedicated Full-Stack Developer with expertise in JavaScript, modern frameworks, and scalable architectures. Specializing in crafting high-performance web applications, Yasowant is passionate about delivering user-focused solutions that merge innovation with functionality.',
  email: 'yasowant1998@gmail.com',
  image: {
    src: '/og/mySocial.png',
    alt: 'Yasowant Nayak - Full-Stack Developer Crafting Innovative Web Applications',
  },
  socialLinks: [
    {
      platform: 'Instagram',
      href: 'https://www.instagram.com/_mid_night_coder_16/?hl=en',
      text: "Yasowant's Instagram",
      icon: FaInstagram,
    },
    {
      platform: 'Facebook',
      href: 'https://www.facebook.com/share/12H4Pabquym/',
      text: "Yasowant's Facebook",
      icon: FaFacebook,
    },
    {
      platform: 'twitter',
      href: 'https://x.com/yash2062',
      text: "Yasowant's Twitter",
      icon: FaTwitter,
    },
    {
      platform: 'linkedin',
      href: 'https://www.linkedin.com/in/yasowant-nayak-154968269/',
      text: "Yasowant's LinkedIn",
      icon: FaLinkedin,
    },
    {
      platform: 'github',
      href: 'https://github.com/Yasowant',
      text: "Yasowant's GitHub",
      icon: FaGithub,
    },
  ],
};
