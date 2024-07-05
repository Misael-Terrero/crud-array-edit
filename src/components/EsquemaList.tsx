"use client"

import { useEffect, useState } from "react";

interface vacuna {
    id: number;
    vacuna: string;
    dosis: string;
    fecha: string;
}


function EsquemaList({ esquemas }: any) {
    const [vacunas, setVacunas] = useState<[vacuna]>()

    useEffect(() => {
        setVacunas(esquemas)

    }, [esquemas])
    
  return (
    <table>
        <thead>
            <tr>
            <th>Vacunas</th>
            <th>Dosis</th>
            <th>Fecha</th>
            </tr>
        </thead>

        <tbody>
            {
                vacunas && vacunas.map((esquema) => {
                    return <>
                    <tr key={esquema.id}>
                        <td>{esquema.vacuna}</td>
                        <td>{esquema.dosis}</td>
                        <td>{esquema.fecha}</td>
                    </tr>
                    </>
                })
            }
        </tbody>
        
    </table>
  )
}

export default EsquemaList