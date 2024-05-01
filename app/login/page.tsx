'use client';

import {Card, Input, Link} from "@nextui-org/react";
import {LockIcon, MailIcon} from "@/components/icons";
import toast, {Toaster} from 'react-hot-toast';
import {useState} from "react";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(`Submitting form with email: ${email} and password: ${password}`);

        toast.promise(
            fetch('http://localhost:8089/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }),
            {
                loading: 'Logging in...',
                success: (res) => {
                    console.log('Server response:', res);
                    if (res.ok) {
                        router.push('/bucket');
                        return 'Login successful';
                    } else {
                        throw new Error('Login failed');
                    }
                },
                error: 'Login failed',
            },
            {
                success: {
                    duration: 4000,
                },
                error: {
                    duration: 4000,
                },
            }
        );
    };

    return (
        <section className="flex flex-col items-center justify-center">
            <Card className="p-8 max-w-lg mx-auto">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center text-2xl font-bold mb-8">Login</h1>
                    <Input
                        autoFocus
                        endContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                        }
                        label="Email"
                        placeholder="Enter your email"
                        variant="bordered"
                        className="mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        endContent={
                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                        }
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        variant="bordered"
                        className="mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex py-2 px-1 justify-between">
                        <Link color="primary" href="/register" size="sm">
                            Register
                        </Link>
                    </div>
                    <button type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500">Login
                    </button>
                </form>
            </Card>
            <Toaster/>
        </section>
    );
}