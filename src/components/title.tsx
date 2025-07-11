import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { slugify } from "@/lib/utils";

type TitleProps = {
  children: React.ReactNode;
  links?: {
    name: string;
    href: string;
  }[];
};

export function Title({ children, links }: TitleProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl lg:text-4xl font-semibold">{children}</h1>
      {links ? (
        <div className="flex items-center gap-2">
          {links.map((link) => (
            <Link href={link.href} key={slugify(link.name)}>
              <Button
                variant="ghost"
                size="sm"
                className="text-neutral-700 text-sm font-semibold py-1 h-auto pr-0 active:scale-90 duration-300"
              >
                <ExternalLinkIcon className="w-4 h-4" strokeWidth={2.3} />
                {link.name}
              </Button>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
