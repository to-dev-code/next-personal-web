export type Menu = {
  name: string;
  path: string;
  describe: string;
  submenu?: Menu[];
};

const menuList: Menu[] = [
  { name: "Welcome", path: "/", describe: "" },
  { name: "About me", path: "/about-me", describe: "" },
  { name: "Projects", path: "/projects", describe: "" },
  { name: "Contact me", path: "/contact-me", describe: "" },
  { name: "Hire me", path: "/hire-me", describe: "" },
];

export default menuList;
