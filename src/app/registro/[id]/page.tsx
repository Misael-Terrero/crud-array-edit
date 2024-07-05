"use client"

import { useParams } from "next/navigation"
import { DocumentData, doc, getDoc } from "firebase/firestore"
import { db } from "@/db/config"
import { useEffect, useState } from "react"
import { useForm } from "@/customHooks/useForm"

interface Esquema {
    id?: number,
    dosis: string,
    fecha: string,
    lote: string,
    sello: string,
    vacuna: string
}

interface Registro {
    name: string,
    last_name: string | undefined,
    edad: string | undefined
}

function RegistroId() {
    const id: string = useParams().id.toString()
    const [regis, setRegis] = useState<Registro>();
    const [vacunas, setVacunas] = useState<[Esquema]>();

  useEffect(() => {
    const registroRef = doc(db, "registro", id)
    
    getDoc(registroRef)
        .then((resp: DocumentData) => {
            setRegis(resp.data().data)
            setVacunas(resp.data().arrayA)
        })

  }, [id])
    
    const {name, last_name, edad, handleChange} = useForm( {
        name: "Misael",
        last_name: "Terrero",
        edad: "27"
    } )

  return (
    <div>
        <h1>Contenido</h1>

        <h3>No. De serie: {id}</h3>

        <label htmlFor="name">Nombre: </label>
        <input
            type="text"
            onChange={handleChange}
            value={name}
        />
        <br /><br />

        <label htmlFor="name">Nombre: </label>
        <input
            type="text"
            onChange={handleChange}
            value={last_name}
        />
        <br /><br />

        <label htmlFor="name">Nombre: </label>
        <input
            type="text"
            onChange={handleChange}
            value={edad}
        />
    </div>
  )
}

export default RegistroId