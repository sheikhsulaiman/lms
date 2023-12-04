"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathName = usePathname();
  const router = useRouter();
  const isActive =
    (pathName === "/" && pathName === href) ||
    pathName === href ||
    pathName?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-600/20",
        isActive &&
          "text-yellow-700 bg-yellow-200/20 hover:text-yellow-700 hover:bg-yellow-200/20"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-yellow-700")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-yellow-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};

export default SidebarItem;