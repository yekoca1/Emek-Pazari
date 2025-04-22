"use client"
import React from 'react'
import AuthContainer from '../Containers/AuthContainer'
import Heading from '../general/Heading'
import Input from '../general/Input'
import { register } from 'module'
import { error } from 'console'
import Button from '../general/Button'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link'
import axios from "axios"
import toast from 'react-hot-toast'
import { sign } from 'crypto'
import { redirect } from 'next/dist/server/api-utils'
import {signIn} from "next-auth/react"
import { useRouter } from 'next/navigation'



function RegisterClient() {
    
    const router = useRouter()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        } = useForm<FieldValues>()
        const onSubmit: SubmitHandler<FieldValues> = (data) => 
            {axios.post("/api/register", data)
                .then(()=>{toast.success("Kullanıcı oluşturuldu.")
                    signIn("credentials",{
                        email: data.email,
                        password: data.password,
                        redirect: false
                    }).then((callback)=>{
                        if(callback?.ok){
                            router.push("/card")
                            router.refresh()
                            toast.success("Login başarılı")
                        }
                        if(callback?.error){
                            toast.error(callback.error)
                        }
                    })
                })}
    
    return (
        <AuthContainer >
        <div className='w-full md:w-[500px] p-3 shadow-lg rounded-md '>
            <Heading text='Register' center />
            <Input placeholder='Ad Soyad' type='text' id="name" register={register} errors={errors} required />
            <Input placeholder='Email' type='text' id="email" register={register} errors={errors} required />
            <Input placeholder='Şifre' type='password' id="password" register={register} errors={errors} required />
            <Button text='Kayıt Ol' onClick={handleSubmit(onSubmit)} />
            <div className='text-center my-2 text-sm'>Daha Önce Kayıt Olduysanız <Link className="underline text-blue-500" href="/login">buraya tıklayın!</Link></div>
            <div className='text-center my-2 font-bold text-lg'>OR</div>
            <Button text='Google ile Kayıt Ol' outline icon={FcGoogle} onClick={() => signIn("google")} />
        </div>
        
        </AuthContainer>
  )
}

export default RegisterClient

