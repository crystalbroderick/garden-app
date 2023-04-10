import { http } from "../libs/axios"
import { IPlant } from "../types/plants"

const getAll = () => {
  return http.get<Array<IPlant>>("/plants").then((res) => res.data)
}

const get = (id: string) => {
  return http.get<IPlant>(`/plants/${id}`).then((res) => res.data)
}

const create = (data: IPlant) => {
  return http.post<IPlant>("/plants", data)
}

const update = (data: IPlant, id: any) => {
  return http.put<any>(`/plants/${id}`, data)
}

const remove = (id: any) => {
  return http.delete<any>(`/plants/${id}`)
}

const removeAll = () => {
  return http.delete<any>(`/plants`)
}

const findByName = (title: string) => {
  return http.get<Array<IPlant>>(`/plants?name=${name}`)
}

const PlantService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
}

export default PlantService
