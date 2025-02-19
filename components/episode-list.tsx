"use client"

import { useState } from "react"
import { EpisodeCard } from "./episode-card"
import { episodesData } from "../lib/episodes-data"
import { Button } from "@/components/ui/button"

interface Episode {
  id: number
  episodeNumber: number
  title: string
  description: string
  thumbnailUrl: string
  runtime: string
}

interface EpisodeListProps {
  onEpisodeSelect: (episodeId: number) => void
}

export function EpisodeList({ onEpisodeSelect }: EpisodeListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const episodesPerPage = 10

  const totalEpisodes = Math.min(episodesData.length, 62)
  const totalPages = Math.ceil(totalEpisodes / episodesPerPage)

  const currentEpisodes = episodesData.slice(
    Math.min((currentPage - 1) * episodesPerPage, totalEpisodes - 1),
    Math.min(currentPage * episodesPerPage, totalEpisodes),
  )

  return (
    <div className="episode-list bg-gray-900 p-4 rounded-lg h-[600px] flex flex-col">
      <h2 className="text-2xl font-bold text-white mb-4">Episodes</h2>
      <div className="episodes-grid space-y-4 overflow-y-auto flex-grow pr-2">
        {currentEpisodes.map((episode) => (
          <EpisodeCard
            key={episode.id}
            episodeNumber={episode.episodeNumber}
            title={episode.title}
            description={episode.description}
            thumbnailUrl={episode.thumbnailUrl}
            runtime={episode.runtime}
            onPlay={() => onEpisodeSelect(episode.id)}
          />
        ))}
        <div className="h-4"></div> {/* Add some padding at the bottom */}
      </div>
      <div className="pagination flex justify-center mt-auto space-x-2 bg-gray-900 pt-2">
        <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Previous
        </Button>
        <span className="text-white py-2">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(totalEpisodes / episodesPerPage)))}
          disabled={currentPage === Math.ceil(totalEpisodes / episodesPerPage)}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

