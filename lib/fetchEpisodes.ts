import axios from "axios"

interface Episode {
  mal_id: number
  title: string
  synopsis: string
}

interface JikanResponse {
  data: Episode[]
}

export async function fetchEpisodeDetails(): Promise<{ titles: string[]; descriptions: string[] }> {
  try {
    const response = await axios.get<JikanResponse>("https://api.jikan.moe/v4/anime/11061/episodes")
    return {
      titles: response.data.data.map((episode) => episode.title),
      descriptions: response.data.data.map((episode) => episode.synopsis || "Episode description not available."),
    }
  } catch (error) {
    console.error("Failed to fetch episode details:", error)
    return {
      titles: [],
      descriptions: [],
    }
  }
}

