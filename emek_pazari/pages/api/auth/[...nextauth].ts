import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
//import { PrismaAdapter } from "@auth/prisma-adapter" bunun yerine alttakini kullandık
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import prisma from "@/libs/prismaDb"
import CredentialsProvider from "next-auth/providers/credentials"
import { error } from "console"
import bcrypt from "bcrypt"


export const authOptions: AuthOptions = ({
  adapter: PrismaAdapter(prisma), //prismayı prismaDb'den aldık burada
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        if(!credentials?.email || !credentials?.password) throw new Error("Mail ya da şifre yanlış..!")
          
        const user = await prisma.user.findUnique({where: {email: credentials.email}})

        if(!user || !user.hashedPassword) throw new Error("Böyle bir hesap görünmüyor..!")

        const comparedPasswords = await bcrypt.compare(credentials.password, user.hashedPassword)
        if(!comparedPasswords) throw new Error("Şifre yanlış..!")
        
        return user
      }
    })
    
  ],
  pages:{
    signIn: "/Login"
  },
  debug: process.env.NODE_ENV === "development",
  session:{
    strategy:"jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
})


export default NextAuth(authOptions)

