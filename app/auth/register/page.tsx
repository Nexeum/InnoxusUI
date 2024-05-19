"use client";

import React from "react";

import toast, { Toaster } from "react-hot-toast";

import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Link,
  Divider,
  Input,
} from "@nextui-org/react";

import { register } from "@/app/domain/usecase/auth/authService";

export default function RegisterPage() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.promise(
      register(username, email, password),
      {
        loading: "Registering...",
        success: "Registration successful",
        error: (err) => err.message,
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
    <div className="flex flex-col min-h-[50vh] items-center justify-center px-4">
      <Card className="w-full max-w-md mb-4">
        <CardHeader className="space-y-1">
          <div className="flex flex-col">
            <p className="text-md">Register</p>
            <p className="text-small text-default-500">
              Enter your username, email and password to create your account.
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Input
                id="username"
                label="Username"
                placeholder="user"
                required
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                id="email"
                label="Email"
                placeholder="m@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                id="password"
                label="Password"
                placeholder="*****"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="w-full mt-6" type="submit">
              Sign Up
            </Button>
          </form>
        </CardBody>
      </Card>
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        Already have an account?
        <Link showAnchorIcon href="login">
          Login
        </Link>
      </div>
      <Toaster />
    </div>
  );
}
