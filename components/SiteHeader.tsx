import Link from "next/link";
import { Key , Share2} from "lucide-react";

import { siteConfig } from "../config/site";
import { Icons } from "./Icons";
import { MainNav } from "./MainNav";
import { buttonVariants } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { APIKeyInput } from "./APIKeyInput";
import { Button } from "./ui/button";

import { Textarea } from "./ui/textarea";


export function SiteHeader() {
  return (
    <header className="top-0 z-40 w-full bg-white">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-slate-700",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-slate-700",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <Popover>
              <PopoverTrigger>
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "text-slate-700",
                  })}
                >
                  <Key className="h-5 w-5" />
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <APIKeyInput />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger>
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "text-slate-700",
                  })}
                >
                  <Share2 className="h-5 w-5" />
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Collaborate and Annotate</h3>
                  <p className="mt-2 text-sm text-gray-600">Share this diagram with your team:</p>
                  <div className="mt-2">
                    <Textarea placeholder="Add a message (optional)" />
                  </div>
                  <div className="mt-4">
                    <Button variant="default">Share</Button>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-md font-semibold">Annotations</h4>
                    <p className="mt-2 text-sm text-gray-600">Team members can add comments and annotations here.</p>
                
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </nav>
        </div>
      </div>
    </header>
  );
}
