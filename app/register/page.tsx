'use client';

import React from "react";

import {Card, Input, Link} from "@nextui-org/react";
import {LockIcon, MailIcon, UserIcon} from "@/components/icons";
import toast, {Toaster} from 'react-hot-toast';

export default function RegisterPage() {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        toast.promise(
            fetch('http://localhost:8089/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            }),
            {
                loading: 'Registering...',
                success: (res) => {
                    if (res.ok) {
                        return 'Registration successful';
                    } else {
                        throw new Error('Registration failed');
                    }
                },
                error: 'Registration failed',
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
                    <h1 className="text-center text-2xl font-bold mb-8">Register</h1>
                    <Input
                        autoFocus
                        endContent={
                            <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                        }
                        label="Username"
                        placeholder="Enter your username"
                        variant="bordered"
                        className="mb-4"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
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
                        <Link color="primary" href="/login" size="sm">
                            Login
                        </Link>
                    </div>
                    <button type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500">Register
                    </button>
                </form>
            </Card>
            <Toaster/>
        </section>
    );
}