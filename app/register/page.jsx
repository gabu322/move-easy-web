'use client';

import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Page() {
    const [registerData, setRegisterData] = useState({
        email: "",
        username: "",
        document: "",
        phone: "",
        age: "",
        password: "",
        passwordConfirmation: "",
        zip_code: "",
        state_acronym: "ES"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        //remove passwordConfirmation from the object
        const data = {
            email: registerData.email,
            username: registerData.username,
            document: registerData.document,
            phone: registerData.phone,
            age: +registerData.age,
            password: registerData.password,
            zip_code: registerData.zip_code,
            state_acronym: registerData.state_acronym
        }
        try {
            console.log(data);
            const response = await axios.post('/api/users', data);
            if (response.status === 200) {
                alert("Registration successful!");
                window.location.href = '/';
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="w-full h-screen flex items-center justify-center">
            <form className="w-96 bg-white rounded-md shadow-lg flex flex-col justify-between p-8 gap-6 text-center" onSubmit={handleRegister}>
                <div className="w-full flex items-center justify-center">
                    <Image src="/logo.png" width={200} height={200} alt="Logo" />
                </div>
                <h1 className="text-4xl">Cadastro</h1>
                <Input
                    label="Email"
                    name="email"
                    value={registerData.email}
                    onChange={handleChange}
                />
                <Input
                    label="Nome completo"
                    name="username"
                    value={registerData.username}
                    onChange={handleChange}
                />
                <Input
                    label="CPF/CNPJ"
                    name="document"
                    value={registerData.document}
                    onChange={handleChange}
                />
                <Input
                    label="Telefone"
                    name="phone"
                    value={registerData.phone}
                    onChange={handleChange}
                />
                <Input
                    label="Idade"
                    name="age"
                    type="number"
                    value={registerData.age}
                    onChange={handleChange}
                />
                <Input
                    label="CEP"
                    name="zip_code"
                    value={registerData.zip_code}
                    onChange={handleChange}
                />
                <Input
                    label="Senha"
                    name="password"
                    type="password"
                    value={registerData.password}
                    onChange={handleChange}
                />
                <Input
                    label="Confirmar senha"
                    name="passwordConfirmation"
                    type="password"
                    value={registerData.passwordConfirmation}
                    onChange={handleChange}
                />
                <Button type="submit" className="text-gray-500">Cadastrar-se</Button>
            </form>
        </main>
    );
}
