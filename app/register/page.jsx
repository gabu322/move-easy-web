'use client'

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

            <h1 className=" text-4xl">Cadastro</h1>
            <Input
                label="Email"
                name="email"
            />

            <Input
                label="Nome completo"
                name="fullName"
            />

            <Input
                label="CPF/CNPJ"
                name="username"
            />

            <Input
                label="CEP"
                name="cep"
            />

            <Input
                label="Senha"
                name="password"
            />

            <Input
                label="Confirmar senha"
                name="passwordConfirmation"
            />

            <Button
                className="text-gray-500"
            >Cadastrar-se</Button>
        </form>
    </main>
}
