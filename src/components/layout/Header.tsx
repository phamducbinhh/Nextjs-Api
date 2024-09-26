/* eslint-disable @next/next/no-img-element */
"use client";
import { Login } from "@/components/auth";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationsClassNames } from "@/configs/classNames";
import { navigations } from "@/configs/navigations";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { Fragment } from "react";

export default function Header() {
  return (
    <div className="h-24 p-4 flex items-center shadow justify-between">
      <div className="flex items-center gap-6">
        <Link
          className="text-5xl tracking-widest text-shadow text-main font-bold"
          href="/"
        >
          REST06
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {navigations.map((el) => (
              <Fragment key={el.id}>
                {el.hasSub && (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-bold">
                      {el.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 grid grid-cols-2 min-w-96">
                      {el.subs &&
                        el.subs.map((sub) => (
                          <NavigationMenuLink
                            className={cn(navigationsClassNames)}
                            key={sub.pathname}
                            href={sub.pathname}
                          >
                            {sub.name}
                          </NavigationMenuLink>
                        ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}
                {!el.hasSub && (
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={cn(
                        "text-sm font-medium",
                        navigationsClassNames
                      )}
                      href={el.pathname}
                    >
                      {el.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )}
              </Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-transparent text-stone-900 hover:bg-transparent hover:underline">
              Đăng nhập / Đăng ký
            </Button>
          </DialogTrigger>
          <DialogContent className="min-w-[800px]">
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <Login />
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Button variant={"outline"} size={"lg"}>
          Đăng tin
        </Button>
      </div>
    </div>
  );
}
