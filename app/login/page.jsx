'use client';

import Button from "@/components/Button"
import Input from "@/components/Input"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
    return <main className="w-full h-screen flex items-center justify-center">
        <form className="w-96  bg-white rounded-md shadow-lg flex flex-col justify-between p-8 gap-6 text-center">

            <div className="w-full flex items-center justify-center">
                <Image src="/logo.png" width={200} height={200} alt="Logo" />

            </div>

            <h1 className=" text-4xl">Login</h1>
            <Input
                label="Username"
                name="username"
            />
            <Input
                name="password"
                label="Password"
                underText={<Link href="/forgot-password">Esqueceu sua senha?</Link>}
            />

            <Button
                className={""}
            >Logar</Button>
            <div className="flex flex-row gap-2 items-center">
                <hr className="flex grow" />
                OU
                <hr className="grow" />
            </div>

            <Button
                className="text-gray-500"
                onClick={() => console.log("Criar conta")}
            ><Link href={"/singin"}>Criar conta</Link></Button>
        </form>
    </main>
}
