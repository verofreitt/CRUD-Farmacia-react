import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
    categoria: Categoria
  }


function CardCategorias({categoria}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-blue-500 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-100 h-full'>Descrição categoria:</p>
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-black bg-blue-300 hover:bg-blue-400 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-black bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias