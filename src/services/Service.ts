import axios from "axios";

const api = axios.create({
  baseURL: 'https://localhost:8080'
})

// eslint-disable-next-line @typescript-eslint/ban-types
export const buscar = async(url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const cadastrar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const atualizar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const deletar = async(url: string, header: Object) => {
  await api.delete(url, header)
}