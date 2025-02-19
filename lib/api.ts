type ApiResponse<T> = {
  data: T
  status: number
  message: string
}

type Character = {
  id: number
  name: string
  image: string
  description: string
  nen_type: string
  occupation: string[]
  age: string
  status: string
  // Add other properties as needed
}

const API_BASE_URL = "https://hxh-api.onrender.com/api/v1"

export async function fetchCharacters(): Promise<ApiResponse<Character[]>> {
  try {
    const response = await fetch(`${API_BASE_URL}/characters`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: ApiResponse<Character[]> = await response.json()
    return data
  } catch (error) {
    console.error("Failed to fetch characters:", error)
    if (error instanceof Error) {
      throw new Error(`Failed to load character data: ${error.message}`)
    } else {
      throw new Error("Failed to load character data. Please try again later.")
    }
  }
}

export async function fetchCharacter(id: number): Promise<ApiResponse<Character>> {
  try {
    const response = await fetch(`${API_BASE_URL}/characters/${id}`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: ApiResponse<Character> = await response.json()
    return data
  } catch (error) {
    console.error(`Failed to fetch character with id ${id}:`, error)
    if (error instanceof Error) {
      throw new Error(`Failed to load character data: ${error.message}`)
    } else {
      throw new Error("Failed to load character data. Please try again later.")
    }
  }
}

