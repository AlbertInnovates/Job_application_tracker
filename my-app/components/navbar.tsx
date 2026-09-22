import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
    <nav className="border-b border-gray-200 bg-white">
        <div className="container mx-auto flex h-16 items-center px-4 justify-between">
            <Link 
            href="/" className="flex items-center gap-2 text-xl font-semibold text-primary">

<Briefcase/>
job tracker
</Link>
<div className="flex items-center gap-4">
    <Link href="/sign-in">
   <button variant="ghost" className="text-gray-700 hover:text-black">
    Login
   </button>
   </Link>
    <Link href="/sign-up">
    <button className="bg-primary  hover:bg-primary/90">
      start for free
    </button>
    </Link>
</div>
        </div>
    </nav>
    );
}