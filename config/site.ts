export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Innoxus",
    description: "Dynamic orchestration: agile and responsive",
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Docs",
            href: "/docs",
        },
        {
            label: "Bucket",
            href: "/bucket",
        },
        {
            label: "Workspace",
            href: "/workspace",
        },
        {
            label: "cli",
            href: "/cli",
        }
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
