export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Next.js + NextUI",
    description: "Make beautiful websites regardless of your design experience.",
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Docs",
            href: "/docs",
        },
    ],
    navMenuItems: [
        {
            label: "Login",
            href: "/login",
        },
    ],
    links: {
        github: "https://github.com/Nexeum/InnoxusUI",
        docs: "https://innoxus.gitbook.io/docs",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "/login"
    },
};
