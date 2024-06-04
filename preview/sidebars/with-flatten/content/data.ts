import { IconType } from 'react-icons';
import { GrProductHunt } from 'react-icons/gr';
import { HiOutlineCollection, HiOutlineCreditCard, HiOutlineCurrencyDollar, HiUser } from 'react-icons/hi';
import { MdBusinessCenter } from 'react-icons/md';

interface NavProps {
    icon?: IconType;
    title: string;
    link: string;
    matchPath?: string;
    children?: NavProps[];
}


export const MainMenuData: NavProps[] = [
    {
        title: "Accounts",
        matchPath: "/accounts",
        link: "/accounts",
        icon: HiUser
    },
    {
        title: "Payments",
        matchPath: "/payments",
        link: "/payments",
        icon: GrProductHunt,
    },
    {
        title: "Balances",
        matchPath: "/balances",
        link: "/balances",
        icon: HiOutlineCollection,
        children: [
            {
                title: "Banks Accounts",
                matchPath: "/banks-accounts",
                link: "/banks-accounts",
                icon: MdBusinessCenter
            },
            {
                title: "Credit Cards",
                matchPath: "/credit-cards",
                link: "/credit-cards",
                icon: HiOutlineCreditCard
            }, {
                title: "Loans",
                matchPath: "/loans",
                link: "/loans",
                icon: HiOutlineCurrencyDollar
            },
        ]
    },
    {
        title: "Customers",
        matchPath: "/customers",
        link: "/customers",
        icon: GrProductHunt,
    }, {
        title: "Products",
        matchPath: "/products",
        link: "/products",
        icon: GrProductHunt,
    }, {
        title: "Reports",
        matchPath: "/reports",
        link: "/reports"
    },
];

export const GeneralMenuData: NavProps[] = [
    {
        title: "Developers",
        matchPath: "/developers",
        link: "/developers",
        icon: GrProductHunt,
    }, {
        title: "View Test Data",
        matchPath: "/view",
        link: "/view",
        icon: GrProductHunt,
    }, {
        title: "Settings",
        matchPath: "/settings",
        link: "/settings",
        icon: GrProductHunt,
    },
];

export const FlattenMenuData: NavProps[] = [
    ...MainMenuData, ...GeneralMenuData, ...MainMenuData, ...GeneralMenuData,
    ...MainMenuData, ...GeneralMenuData, ...MainMenuData, ...GeneralMenuData
];