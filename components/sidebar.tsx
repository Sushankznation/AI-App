"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Router } from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
];

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
export default function Sidebar() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src={Logo} />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            GHYANI
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link href={route.href} key={route.href}>
                <div className="flex items-center flex-1">
                    <route.icon className="{cn(" />
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
