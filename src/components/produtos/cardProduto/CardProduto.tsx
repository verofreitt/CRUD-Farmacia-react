import { Link } from 'react-router-dom'

function CardProduto() {

  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-blue-400 py-2 px-4 items-center gap-4">
          <img src='' className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>Nome:</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>Titulo:</h4>
          <p>texto base</p>
          <p>categoria: </p>
          <p>preco: </p>
        </div>
      </div>
      <div className="flex">
      <Link to='' className='w-full text-black bg-blue-200 hover:bg-blue-300 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to='' className='text-black bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto