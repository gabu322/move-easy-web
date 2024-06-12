'use client';

import { useEffect, useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import Input from "@/components/Input"
import Button from "@/components/Button"
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/users/login', { email, password });

            if (response.status == 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', email);
                window.location.href = '/';
            }
        } catch (error) {
            console.error(error);
        }
    };

    return <main className="w-full h-screen flex items-center justify-center">
        <form className="w-96 bg-white rounded-md shadow-lg flex flex-col justify-between p-8 gap-6 text-center">

            <div className="w-full flex items-center justify-center">
                <Image src="/logo.png" width={200} height={200} alt="Logo" />
            </div>

            <h1 className="text-4xl">Login</h1>
            <Input
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                underText={<Link href="/forgot-password">Esqueceu sua senha?</Link>}
            />

            <Button onClick={handleLogin}>Logar</Button>
            <div className="flex flex-row gap-2 items-center">
                <hr className="flex-grow" />
                OU
                <hr className="flex-grow" />
            </div>

            <Button className="text-gray-500"><Link href="/signup">Criar conta</Link></Button>
        </form>
    </main>;
}
