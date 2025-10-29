import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <div className="">
      <header className="border-b-gray5 flex items-center justify-between border-b px-2.5 py-4">
        <Link
          href="/"
          className="text-gradient text-2xl font-extrabold tracking-wide"
        >
          Pixify
        </Link>
        <nav>
          <ul>
            <li>
              <Button
                asChild
                variant={"link"}
                className="text-lg font-normal text-white duration-200"
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
