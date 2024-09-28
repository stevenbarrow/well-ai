import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <div className="flex justify-between bg-white shadow-sm p-5 border-b">
      <Link href="/dashboard" className="text-2xl">
        Drilling <span className="text-indigo-600">AI</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
          <ThemeToggler/>

          <Button asChild variant="outline">
            <Link href="/dashboard">My Wells</Link>
          </Button>

          <Button asChild variant="outline" className="border-indigo-600">
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-indigo-600" />
            </Link>
          </Button>

          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}
export default Header;