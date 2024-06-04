import { IconType } from 'react-icons';
import { BiCircle } from 'react-icons/bi';
import { HiUser } from 'react-icons/hi';
import { MdBusinessCenter } from 'react-icons/md';
interface NavData {
    label?: string;
    items?: NavProps[];
}

interface NavProps {
    icon?: IconType;
    title: string;
    link: string;
    matchPath?: string;
    children?: NavProps[];
}


export const MenuData: NavData[] = [
    {
        label: 'Main',
        items: [
            {
                title: "Dashboard",
                matchPath: "/dashboard",
                link: "/dashboard",
                icon: HiUser,
                children: [{
                    title: "Default",
                    matchPath: "/dashboard/default",
                    link: "#",
                    icon: BiCircle
                }, {
                    title: "Alternate",
                    matchPath: "/dashboard/alternate",
                    link: "#",
                    icon: BiCircle
                }]
            },
            {
                title: "Application",
                matchPath: "/application",
                link: "#",
                icon: HiUser,
                children: [{
                    title: "Email",
                    matchPath: "/app/email",
                    link: "#",
                    icon: BiCircle
                }, {
                    title: "Chat box",
                    matchPath: "/app/chat-box",
                    link: "#",
                    icon: BiCircle
                }, {
                    title: "File Manager",
                    matchPath: "/app/file-manager",
                    link: "#",
                    icon: BiCircle
                }]
            }
        ]
    }, {
        label: "Promotion",
        items: [{
            title: "Quản lý CTKM",
            matchPath: "/promotion",
            link: "#",
            icon: HiUser,
            children: [{
                title: "Chiến dịch CTKM",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Danh sách CTKM",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Rule Group",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Quản lý Masterdata",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Mã giảm giá",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Quản lý ngân sách",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }]
        }, {
            title: "Khu vực KM",
            matchPath: "/promotion/location",
            link: "#",
            icon: HiUser,
            children: [{
                title: "Region",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Area",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Country",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Province",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "District",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Ward",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }]
        }, {
            title: "Coupon",
            matchPath: "/promotion/coupon",
            link: "#",
            icon: HiUser,
            children: [{
                title: "Coupon Code",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Single Coupon",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Multiple Coupon",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }]
        }]
    }, {
        label: "PCM",
        items: [{
            title: "Merchant",
            matchPath: "/merchant",
            link: "#",
            icon: HiUser,
        }, {
            title: "Categories",
            matchPath: "/categories",
            link: "#",
            icon: HiUser,
            children: [{
                title: "Commission Category",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Catalog",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Brand",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Display Category",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }]
        }, {
            title: "Product",
            matchPath: "/product",
            link: "#",
            icon: HiUser,
            children: [{
                title: "Product",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Merchant Offer",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Unit",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Product Feature",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Product Group",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "VAT In",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "VAT Out",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Barcodes",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }]
        }, {
            title: "Price",
            matchPath: "/price",
            link: "#",
            icon: HiUser,
            children: [{
                title: "Giảm giá",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Price Group",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Discount Group",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }]
        }]
    }, {
        label: "OMS",
        items: [{
            title: "Order Management",
            matchPath: "/oms",
            link: "#",
            icon: HiUser,
            children: [{
                title: "Order",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Order Entry",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Order Process",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Consignment",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Consignment Entry",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            },]
        }, {
            title: "Payment Management",
            matchPath: "/payment",
            link: "#",
            icon: HiUser,
            children: [{
                title: "Payment Method",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Payment Provider",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Payment Transaction",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }]
        }, {
            title: "Shipment Management",
            matchPath: "/shipment",
            link: "#",
            icon: HiUser,
            children: [{
                title: "Shipment",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Leadtime",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }, {
                title: "Location",
                matchPath: "/",
                link: "#",
                icon: BiCircle
            }]
        }]
    }
];
