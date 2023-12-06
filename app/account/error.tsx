'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginButton from '@/src/features/auth/LoginButton';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <Card className="max-w-lg m-auto mt-4">
    <CardHeader className="flex flex-row gap-5 space-y-0">
      <div className="flex flex-col gap-1">
      <CardTitle>You need to be logged to use this page</CardTitle>
      </div>
    </CardHeader>
    <CardFooter className="flex flex-row-reverse">
    <LoginButton />
    </CardFooter>
  </Card>
  )
}