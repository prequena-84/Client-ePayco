import type { TLink, TLabel, TMenu, TTitleBrand, TTitleNavbar } from "../../types/nav-bar/nav-bars.types";

interface ISubMenu {
    link: TLink;
    label: TLabel;
}

interface IMenu {
    menu: TMenu;
    submenu: ISubMenu[];
}

interface INavBar {
    titleBrand?: TTitleBrand | undefined;
    titleNavbar?: TTitleNavbar | undefined;
}

export type {
    ISubMenu,
    IMenu,
    INavBar,
}