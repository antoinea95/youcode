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
import { LogoutButton } from "@/src/features/auth/LogoutButton";
import { getAuthSession } from "@/src/lib/auth";
import Link from "next/link";

export default async function Account() {
  const session = await getAuthSession();
  const user = session?.user;

  if (!user) {
    throw new Error("No session founds");
  }

  return (
    <Card className="max-w-lg m-auto mt-4">
      <CardHeader className="flex flex-row gap-5 space-y-0">
        <Avatar className="h-10 w-10" >
          <AvatarFallback>{user.email?.[0]}</AvatarFallback>
          {user.image && (
            <AvatarImage src={user.image} alt={user.name ?? "User picture"} />
          )}
        </Avatar>
        <div className="flex flex-col gap-1">
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Link className={buttonVariants({variant:"outline", size:"lg"})} href="/account/settings">
            Settings
        </Link>
        <Link className={buttonVariants({variant:"outline", size:"lg"})} href="/admin">
            Admin
        </Link>
      </CardContent>
      <CardFooter className="flex flex-row-reverse">
        <LogoutButton />
      </CardFooter>
    </Card>
  );
}
