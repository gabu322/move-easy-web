import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return <nav className="w-full h-16 bg-white fixed top-0 shadow flex flex-row justify-between px-10 items-center">

        <div className="flex flex-row items-center text-lg gap-2">
            <Image src="/logo.png" width={60} height={60} />
            <Link href={"/"}>MoveEasy</Link>
        </div>


        <div className="flex flex-row items-center text-lg gap-2">
            <Image src="/profile.webp" width={40} height={40} />
            <Link href={"/login"}>Entrar</Link>
        </div>
    </nav>
}
