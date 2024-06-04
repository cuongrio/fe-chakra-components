/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "rocket-chakra",
  titleTemplate: "%s | rocket-chakra",
  defaultTitle: "rocket-chakra",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://rocket-chakra.dev",
  openGraph: {
    url: "https://rocket-chakra.dev",
    title: "rocket-chakra",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "rocket-chakra.dev",
        alt: "rocket-chakra.dev og-image",
      },
    ],
    site_name: "rocket-chakra",
  },
  twitter: {
    handle: "@rio",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
