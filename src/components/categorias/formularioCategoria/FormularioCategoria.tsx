import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar } from "../../../services/Service";

function FormularioCategoria() {

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function buscarPorId(id: string) {
        await buscar("/categorias/${id}", setCategoria, {});
      }

      useEffect(() => {
        if (id !== undefined) {
          buscarPorId(id)
        }
      }, [id])

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
          ...categoria,
          [e.target.name]: e.target.value
        })

        console.log(JSON.stringify(categoria))
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          
        })

        alert('Nova categoria atualizada com sucesso')
        retornar()

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('Não foi possivel cadastrar a categoria')
          handleLogout()
        } else {
          alert('Erro ao atualizar a categoria')
        }
    }

    retornar()
  }}

  function retornar() {
    navigate("/categorias")
  }

  

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                Cadastrar categoria
            </h1>

            <form className="w-1/2 flex flex-col gap-4" >
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da categoria</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"

                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-blue-400 hover:bg-blue-500 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default FormularioCategoria;

function handleLogout() {
    throw new Error("Function not implemented.");
}