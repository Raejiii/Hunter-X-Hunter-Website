import Image from "next/image"
import { Play } from "lucide-react"

interface EpisodeCardProps {
  episodeNumber: number
  title: string
  description: string
  thumbnailUrl: string
  runtime: string
  onPlay: () => void
}

export function EpisodeCard({ episodeNumber, title, description, thumbnailUrl, runtime, onPlay }: EpisodeCardProps) {
  return (
    <div className="episode-card flex bg-gray-800 rounded-lg overflow-hidden">
      <div className="episode-thumbnail relative w-40 h-24">
        <Image
          src={thumbnailUrl || "/placeholder.svg"}
          alt={`Episode ${episodeNumber}`}
          layout="fill"
          objectFit="cover"
        />
        <div className="episode-number absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded">
          {episodeNumber}
        </div>
        <button
          className="episode-play-button absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity"
          onClick={onPlay}
        >
          <Play className="w-12 h-12 text-white" />
        </button>
      </div>
      <div className="episode-info p-4 flex-1">
        <h3 className="text-lg font-semibold text-white">
          Episode {episodeNumber}: {title}
        </h3>
        <p className="text-sm text-gray-300 mt-1 line-clamp-2">{description}</p>
        <div className="episode-runtime text-xs text-gray-400 mt-2">
          <i className="fas fa-clock mr-1"></i> {runtime}
        </div>
      </div>
    </div>
  )
}

