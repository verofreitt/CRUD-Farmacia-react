import { useEffect, useState } from "react"
import Categoria from "../../../models/Categoria"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"

function DeletarCategoria() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()
    
    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                
            })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Não conseguimos achar a categoria')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {
                
            })

            alert('categoria apagada com sucesso')

        } catch (error) {
            alert('Erro ao apagar categoria')
        }

        retornar()
    }

  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>categoria</p>
      <div className="flex">
        <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' >Não</button>
        <button className='w-full text-slate-100 bg-blue-200 hover:bg-indigo-600 flex items-center justify-center' >
          Sim
        </button>
      </div>
    </div>
    </div>
  )
}

export default DeletarCategoria

function handleLogout() {
    throw new Error("Function not implemented.")
}
