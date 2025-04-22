"use client"
import type { User as PrismaUser } from "@prisma/client";


interface userProps{
  currentUser: PrismaUser  |null | undefined
}
const User:React.FC<userProps> = ({currentUser}) => {
  console.log("şimdiki kullanıcı", currentUser)
  return <div className="hidden md:flex">User</div>;
  }

  export default User

