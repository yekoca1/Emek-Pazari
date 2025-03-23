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



function LoginClient() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        } = useForm<FieldValues>()
        const onSubmit: SubmitHandler<FieldValues> = (data) => {console.log(data)}
    
    return (
        <AuthContainer >
        <div className='w-full md:w-[500px] p-3 shadow-lg rounded-md '>
            <Heading text='Log in' center />
            <Input placeholder='Gmail' type='text' id="gmail" register={register} errors={errors} required />
            <Input placeholder='Şifre' type='password' id="password" register={register} errors={errors} required />
            <Button text='Giriş Yap' onClick={()=>{}}/>
            <div className='text-center my-2 text-sm'>Daha Önce Kayıt Olmadıysanız <Link className="underline text-blue-500" href="/register">buraya tıklayın!</Link></div>
            <div className='text-center my-2 font-bold text-lg'>OR</div>
            <Button text='Google ile Giriş Yap' outline icon={FcGoogle} onClick={handleSubmit(onSubmit)}/>
        </div>
        
        </AuthContainer>
  )
}

export default LoginClient
