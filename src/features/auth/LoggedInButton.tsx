"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Session } from "next-auth";
import { LogoutButton } from "./LogoutButton";
import { LogOut } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export type LoggedInProps = {
  user: Session["user"];
};

export const LoggedInButton = (props: LoggedInProps) => {
  return (
    <DropdownMenu>
      <AlertDialog>
        <DropdownMenuTrigger asChild>
          <Button>
            <Avatar className="mr-2 h-6 w-6">
              <AvatarFallback>{props?.user?.name?.[0]}</AvatarFallback>
              {props.user.image && (
                <AvatarImage
                  src={props.user.image}
                  alt={props.user.name ?? "user picture"}
                />
              )}
            </Avatar>
            {props.user.name}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <AlertDialogTrigger>
            <DropdownMenuItem>
            <LogOut className="mr-2" size={12} /> Logout
            </DropdownMenuItem>
            </AlertDialogTrigger>
        </DropdownMenuContent>
        <AlertDialogContent>
          <AlertDialogHeader>Are you sure you want to logout ?</AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant="secondary"> No</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <LogoutButton />
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DropdownMenu>
  );
};
