import { IconType } from 'react-icons';
import { BiCircle } from 'react-icons/bi';
import { GrProductHunt } from 'react-icons/gr';
import { HiOutlineCollection, HiUser } from 'react-icons/hi';

interface NavProps {
    icon?: IconType;
    title: string;
    link: string;
    matchPath?: string;
    children?: NavProps[];
}


export const MAIN_MENU_DATA: NavProps[] = [
    {
        title: "Accounts",
        matchPath: "/accounts",
        link: "#",
        icon: HiUser
    },
    {
        title: "Payments",
        matchPath: "/payments",
        link: "#",
        icon: GrProductHunt,
    },
    {
        title: "Balances",
        matchPath: "/balances",
        link: "#",
        icon: HiOutlineCollection,
        children: [
            {
                title: "Banks Accounts",
                matchPath: "/banks-accounts",
                link: "#",
                icon: BiCircle
            },
            {
                title: "Credit Cards",
                matchPath: "/credit-cards",
                link: "#",
                icon: BiCircle
            }, {
                title: "Loans",
                matchPath: "/loans",
                link: "#",
                icon: BiCircle
            },
        ]
    }, {
        title: "Balances 2",
        matchPath: "/balances",
        link: "#",
        icon: HiOutlineCollection,
        children: [
            {
                title: "Banks Accounts",
                matchPath: "/banks-accounts",
                link: "#",
                icon: BiCircle
            },
            {
                title: "Credit Cards",
                matchPath: "/credit-cards",
                link: "#",
                icon: BiCircle
            }, {
                title: "Loans",
                matchPath: "/loans",
                link: "#",
                icon: BiCircle
            },
        ]
    },
    {
        title: "Customers",
        matchPath: "/customers",
        link: "#",
        icon: GrProductHunt,
    }, {
        title: "Products",
        matchPath: "/products",
        link: "#",
        icon: GrProductHunt,
    }, {
        title: "Reports",
        matchPath: "/reports",
        link: "#"
    },
];

export const GENERAL_MENU_DATA: NavProps[] = [
    {
        title: "Developers",
        matchPath: "/developers",
        link: "#",
        icon: GrProductHunt,
    }, {
        title: "View Test Data",
        matchPath: "/view",
        link: "#",
        icon: GrProductHunt,
    }, {
        title: "Settings",
        matchPath: "/settings",
        link: "#",
        icon: GrProductHunt,
    },
];