interface SubMenu {
    link: string;
    label: string;
}

interface Menu {
    menu: string;
    submenu: SubMenu[];
}

interface INavBar {
    titleBrand?: string;
    titleNavbar?: string;
}

export type {
    INavBar,
    Menu,
    SubMenu,
}