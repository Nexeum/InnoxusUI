import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { AppleIcon, LaptopIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Experience&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>effortless&nbsp;</h1>
        <br />
        <h1 className={title()}>orchestration through DinD.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Dynamic orchestration: agile and responsive.
        </h2>
      </div>

      <div className="mt-2">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Dont forget install <Code color="primary">inx</Code>
          </span>
        </Snippet>
      </div>

      <div className="flex gap-3 mt-4">
        <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "default",
            radius: "full",
          })}
        >
          <AppleIcon size={20} />
          Download for MacOs
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <LaptopIcon size={20} />
          Download for Linux
        </Link>
      </div>
    </section>
  );
}
