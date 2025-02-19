import Image from "next/image"

interface EpisodeCardProps {
  episodeNumber: number
  title: string
  synopsis: string
  airDate: string
  thumbnailUrl: string
  onClick: () => void
}

export function EpisodeCard({ episodeNumber, title, synopsis, airDate, thumbnailUrl, onClick }: EpisodeCardProps) {
  return (
    <div className="episode-card">
      <div className="episode-thumbnail">
        <Image
          src={thumbnailUrl || "/placeholder.svg"}
          alt={`Episode ${episodeNumber}`}
          width={120}
          height={80}
          className="rounded-md object-cover"
        />
        <div className="episode-number">{episodeNumber}</div>
        <button className="episode-play-button" onClick={onClick}>
          <i className="fas fa-play"></i>
        </button>
      </div>
      <div className="episode-info">
        <h3>{title}</h3>
        <p>{synopsis}</p>
        <div className="episode-runtime">
          <i className="fas fa-clock"></i> 24m
        </div>
      </div>
    </div>
  )
}

