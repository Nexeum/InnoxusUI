"use client";

import { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Link,
  Divider,
  Input,
} from "@nextui-org/react";

import { LockIcon, MailIcon } from "@/components/icons";

import toast, { Toaster } from "react-hot-toast";

import { useRouter } from "next/navigation";

import { login } from "@/app/domain/usecase/auth/authService";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.promise(
      login(email, password),
      {
        loading: "Logging in...",
        success: () => {
          router.push('/bucket')
          return "Login successful";
        },
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
            <p className="text-md">Login</p>
            <p className="text-small text-default-500">
              Enter your email and password to access your account.
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Input
                id="email"
                placeholder="m@example.com"
                endContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Email"
                variant="bordered"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2 mt-6">
              <Input
                id="password"
                required
                type="password"
                placeholder="*****"
                label="Password"
                variant="bordered"
                endContent={
                  <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="w-full mt-6" type="submit">
              Sign in
            </Button>
          </form>
        </CardBody>
      </Card>
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        Dont have an account?
        <Link showAnchorIcon href="register">
          Register
        </Link>
      </div>
      <Toaster />
    </div>
  );
}
