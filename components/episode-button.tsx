import Image from "next/image"

interface EpisodeButtonProps {
  episodeNumber: number
  title: string
  synopsis: string
  airDate: string
  isActive: boolean
  onClick: () => void
}

export function EpisodeButton({ episodeNumber, title, synopsis, airDate, isActive, onClick }: EpisodeButtonProps) {
  const thumbnailUrl = `https://vidsrc.cc/static/previews/tv/46298/1/${episodeNumber}.jpg`

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 hover:bg-gray-700 transition-colors ${
        isActive ? "bg-gray-700 border-l-4 border-green-500" : ""
      }`}
    >
      <div className="flex items-center space-x-4">
        <Image
          src={thumbnailUrl || "/placeholder.svg"}
          alt={`Episode ${episodeNumber}`}
          width={120}
          height={80}
          className="rounded-md object-cover"
        />
        <div className="flex-1">
          <div className="font-semibold text-gray-100">
            Episode {episodeNumber}: {title}
          </div>
          <div className="text-sm text-gray-400 mt-1">Aired: {airDate}</div>
          <p className="text-xs text-gray-500 mt-2 line-clamp-2">{synopsis}</p>
        </div>
      </div>
    </button>
  )
}

