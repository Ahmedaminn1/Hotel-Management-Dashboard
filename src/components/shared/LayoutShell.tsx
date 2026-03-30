"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/navbar/Navbar";
import Sidebar from "@/components/shared/sidebar/Sidebar";

interface LayoutShellProps {
  children: React.ReactNode;
}

const authRoutePrefixes = ["/login", "/register", "/forgot-password", "/reset-password"];

export default function LayoutShell({ children }: LayoutShellProps) {
  const pathname = usePathname();
  const isAuthRoute = pathname
    ? authRoutePrefixes.some((route) => pathname.startsWith(route))
    : false;

  if (isAuthRoute) {
    return <main className="min-h-screen w-full">{children}</main>;
  }

  return (
    <>
      <Navbar user={null} />
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <main className="pt-16 w-full">{children}</main>
      </div>
    </>
  );
}
