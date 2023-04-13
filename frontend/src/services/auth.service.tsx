import { http } from "../libs/axios"
import { IUser } from "../types/user"

const API_URL = import.meta.env.VITE_SERVER_URL + "auth/"
// export async function onRegistration(registrationData) {
//   return await http.post(API_URL, registrationData)
// }

export async function onLogin(cred: IUser) {
  return await http.post(API_URL + "login", {
    username: cred.username,
    password: cred.password,
  })
}

export async function onLogout() {
  return await http.get(API_URL + "logout")
}
