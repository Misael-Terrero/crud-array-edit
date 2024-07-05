"use client"


import { useForm } from "react-hook-form"
import { db } from "@/db/config";
import {collection, addDoc} from "firebase/firestore";
import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";


interface Registro {
    name: string;
    last_name: string;
    edad: number;
}

interface vacuna {
    id: number;
    vacuna: string;
    dosis: string;
    fecha: string;
}

function RegistroPage() {
    const router = useRouter()
    const { register, handleSubmit } = useForm<Registro>();
    const [id, setId] = useState<string>()

    const enviar = (data: Registro) => {
        const RegistroRef = collection(db, "registro")

        const arrayA: vacuna[] = [
            {
                id: 0,
                vacuna: 'vacuna 00',
                dosis: "1ra dosis",
                fecha: "01/01/2001"
            },
            {
                id: 1,
                vacuna: 'vacuna 01',
                dosis: "1ra dosis",
                fecha: "01/01/2001"
            },
            {
                id: 2,
                vacuna: 'vacuna 02',
                dosis: "1ra dosis",
                fecha: "01/01/2001"
            }        
        ]

        const regist = {data, arrayA}

        addDoc(RegistroRef, regist)
            .then(res => setId(res.id))        
    }

    const redireccion = () => {
        id ? router.push(`/registro/${id}`) : alert('Aun no se tiene el id')
    }

  return (
    <div>
        
        <h1>Registro</h1>
        <br /><br /><br />

        <form onSubmit={handleSubmit(enviar)}>
            <label htmlFor="name">Nombre: </label>
            <input 
                type="text"
                {...register("name")}
            />
            <br /><br />

            <label htmlFor="last_name">Apellido: </label>
            <input 
                type="text"
                {...register("last_name")}
            />
            <br /><br />

            <label htmlFor="edad">Edad: </label>
            <input 
                type="text"
                {...register("edad")} 
            />
            <br /><br /><br /><br />

            <button 
                type="submit"
                onClick={() => setTimeout(redireccion, 3000)}
                >Enviar
            </button>
        </form>

        <div>
            <h3></h3>
        </div>
    </div>
  )
}

export default RegistroPage