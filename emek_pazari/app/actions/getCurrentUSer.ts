import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/libs/prismaDb"

export async function getSession() {
    return await getServerSession(authOptions)
}


export async function getCurrentUSer() {
    console.log("getCurrentUser fonksiyonu çağrıldı!"); // ✅ İlk kontrol
    try {
        const session = await getSession()//asenkron olduğu için await kullanmak gerekli 
        console.log("Session verisi:", session); // ✅ Debug için ekledik

        
        if(!session?.user?.email) return null

        const currentUser = await prisma.user.findUnique({where: {email: session?.user?.email}})
        if(!currentUser) return null
        return{
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified:  currentUser.emailVerified?.toISOString() || null
        }
    } catch (error: any) {
        return null
    }
}