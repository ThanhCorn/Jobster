import { IUser } from '../types/myTypes'

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}

export const addUserToLocalStorage = (user: IUser) => {
  if (user) {
    localStorage.setItem('user', JSON.stringify(user))
  }
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}
