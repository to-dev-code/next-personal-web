export type TMenu = {
  name: string;
  path: string;
  describe: string;
  submenu?: TMenu[];
};

const menuList: TMenu[] = [
  { name: "Home", path: "/", describe: "" },
  { name: "Projects", path: "/projects", describe: "" },
  { name: "Resume", path: "/resume", describe: "" },
  { name: "Contact me", path: "/contact-me", describe: "" },
  { name: "Hire me", path: "/hire-me", describe: "" },
];

export default menuList;
