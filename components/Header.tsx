import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <div className="">
      <header className="container m-auto flex items-center justify-between px-2.5 py-4 border-b border-b-[#2D2F39]">
        <Link href="/" className="text-2xl font-semibold">
          Crasher
        </Link>
        <nav>
          <ul>
            <li>
              <Button
                asChild
                variant={"link"}
                className="text-lg font-normal duration-200 text-white"
              >
                <Link href="/about">About</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
