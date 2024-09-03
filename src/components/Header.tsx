import {Link, LinkIcon} from "lucide-react";

export const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link href="#" className="flex items-center justify-center">
                <LinkIcon className="h-6 w-6 mr-2"/>
                <span className="font-bold">Link To Go</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
                    Features
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                    Pricing
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                    About
                </Link>
            </nav>
        </header>
    );
};
