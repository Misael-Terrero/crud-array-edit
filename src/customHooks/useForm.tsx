import { ChangeEvent, useEffect, useState } from "react";

interface Registro {
  name?: string,
  last_name?: string,
  edad?: string
}

const compaReg: Registro = {
  name: "",
  last_name: "",
  edad: ""
}

export const useForm = ( initState: Registro) => {
  const [formulario, setFormulario] = useState<Registro>();  

  useEffect(() => {
    if(initState !== compaReg) {
      console.log(initState)
    }
    // if(initState) {
    //   setFormulario(initState)
    // }

  }, [initState])

  const handleChange = ( { target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [ name ]: value
    })
  }
    
  return {
    formulario,
    handleChange,
    ...formulario
  }
}