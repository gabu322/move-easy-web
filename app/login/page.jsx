'use client';

import { useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import Input from "@/components/Input"
import Button from "@/components/Button"
import { useRouter } from 'next/navigation';

export default function Page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            console.log("Teste")
            // Call your API to authenticate user
            const response = await axios.post('/api/users?email=email@gmail.com');
            console.log(response);

            const data = await response.json();
            // Assuming the API returns a token upon successful login
            if (data.token) {
                // Save username and token in localStorage or sessionStorage
                localStorage.setItem('username', username);
                localStorage.setItem('token', data.token);
                // Redirect user to home page or any other protected route
                router.push('/');
            } else {
                // Handle login error
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return <main className="w-full h-screen flex items-center justify-center">
        <form className="w-96 bg-white rounded-md shadow-lg flex flex-col justify-between p-8 gap-6 text-center">

            <div className="w-full flex items-center justify-center">
                <Image src="/logo.png" width={200} height={200} alt="Logo" />
            </div>

            <h1 className="text-4xl">Login</h1>
            <Input
                label="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
