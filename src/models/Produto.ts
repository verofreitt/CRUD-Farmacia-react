import Categoria from './Categoria';

export default interface Produto {
  id: number;
  titulo: string;
  descricao: string;
  preco: string;
  categoria: Categoria | null;
}