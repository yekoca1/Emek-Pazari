"use client"
import React from "react";
import { FieldError, FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string,
    placeholder: string,
    disabled?: boolean,
    type: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors   
}

const Input: React.FC<InputProps> = ({id, placeholder, disabled, type, required, register, errors}) => {

  return (
  <input className = {`w-full h-12 p-3 rounded-md my-2 ${errors[id] ? "border border-red-600":"border border-slate-300"}`} id = {id} placeholder={placeholder} disabled={disabled} type={type} required={required} {...register(id, {required})} />  //register kısmı farklı?
 
  )

}

export default Input
