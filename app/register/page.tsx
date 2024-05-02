"use client";

import React from "react";

import toast, { Toaster } from "react-hot-toast";
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

export default function RegisterPage() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.promise(
      fetch("http://localhost:8089/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      }),
      {
        loading: "Registering...",
        success: (res) => {
          if (res.ok) {
            return "Registration successful";
          } else {
            throw new Error("Registration failed");
          }
        },
        error: "Registration failed",
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
          <CardTitle className="text-2xl font-bold">Register</CardTitle>
          <CardDescription>
            Enter your username, email and password to create your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="user"
                required
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
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
        </CardContent>
      </Card>
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        Already have an account?
        <Link
          className="font-medium text-gray-900 hover:underline dark:text-gray-50"
          href="/login"
        >
          Login
        </Link>
      </div>
      <Toaster />
    </div>
  );
}
