// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Sutras", url: "/sutras" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Kinh Lăng Già", url: "/sutras" },
      { name: "Construction Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "Blog", url: "/blog" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/Nhohoivanhin",
  x: "https://twitter.com/",
  youtube: "https://youtube.com/T%C3%B4ngPhongT%E1%BB%95S%C6%B0Thi%E1%BB%81n",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
