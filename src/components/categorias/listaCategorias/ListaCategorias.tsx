// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useContext, useEffect, useState } from "react";
import CardCategorias from "../cardCategorias/CardCategorias";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { useNavigate } from "react-router-dom";

function ListaCategorias() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  async function buscarCategorias() {
    await buscar("/categorias", setCategorias, {});
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
              <>
                <CardCategorias key={categoria.id} categoria={categoria} />
              </>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
