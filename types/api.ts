export interface Character {
  id: number
  name: string
  japanese_name: string
  also_known_as: string[]
  manga_debut: string
  anime_debut: string
  abilities: string[]
  image: string
  description: string
  nen_type: string
  gender: string
  age: string
  height: string
  weight: string
  occupation: string[]
  relatives: Record<string, string>
  groups: string[]
  status: string
}

export interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

