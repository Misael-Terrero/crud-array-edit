"use client"


import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "@/db/config";
import { collection, getDocs } from "firebase/firestore";
import EsquemaList from "@/components/EsquemaList";


interface Registro {
  id: string;
  name: string;
  last_name: string;
  edad: number;
}

interface vacuna {
  vacuna: string;
  dosis: string;
  fecha: string;
}

interface dtcomb {
  data: Registro;
  arrayA: vacuna;
}

export default function Home() {
  const [infoPer, setInfoPer] = useState<dtcomb[]>()
  const [esquema, setEsquema] = useState<vacuna[]>()

  useEffect(() => {
    const infos = collection(db, "registro")

    getDocs(infos)
      .then((res) => {
        setInfoPer(
          res.docs.map((doc) => {
            return {
              data: { ...doc.data().data, id: doc.id },
              arrayA: { ...doc.data().arrayA}
            }
          })
        );
        setEsquema(res.docs[0].data().arrayA)
      })
  }, [])
  
   console.log(infoPer)
  // console.log(esquema)

  return (
    <main>
      <h1>Editar un array</h1>
      <br /><br />

      <nav>
        <li>
          <Link href='/'>Home</Link>
        </li>

        <li>
          <Link href='/registro'>Registro</Link>
        </li>
      </nav>
      <br /><br /><br />

      <div>
        <h2>Contenedor</h2>
        <br />
        {
          infoPer && infoPer.map((dato) => {
            return <div key={dato.data.id}>
              <h3>{dato.data.name} {dato.data.last_name}</h3>
              <p>Edad: {dato.data.edad}</p>

              <EsquemaList esquemas={esquema}/>
              <br /><br />
            </div>
          })
        }
      </div>
    </main>
  );
}
