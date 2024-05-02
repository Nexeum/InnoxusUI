"use client";

import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.promise(
      fetch("http://localhost:8089/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }).then(async (res) => {
        if (res.ok) {
          const jwt = await res.text();
          document.cookie = `jwt=${jwt}; path=/; max-age=3600`;
          router.push("/bucket");
          return "Login successful";
        } else {
          throw new Error("Login failed");
        }
      }),
      {
        loading: "Logging in...",
        success: "Login successful",
        error: "Login failed",
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
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2 mt-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link className="text-sm underline" href="#">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                required
                type="password"
                placeholder="*****"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="w-full mt-6" type="submit">
              Sign in
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        Dont have an account? 
        <Link
          className="font-medium text-gray-900 hover:underline dark:text-gray-50"
          href="/register"
        >
          Register
        </Link>
      </div>
      <Toaster/>
    </div>
  );
}
