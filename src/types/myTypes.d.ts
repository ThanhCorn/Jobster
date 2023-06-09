export interface IFormRow {
  type: string
  labelText?: string
  name: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IUser {
  email: string
  password: string
  name?: string
  isMember?: boolean
}
