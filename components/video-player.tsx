interface VideoPlayerProps {
  episodeId: number
  autoPlay: boolean
}

export function VideoPlayer({ episodeId, autoPlay }: VideoPlayerProps) {
  return (
    <div className="video-player aspect-video bg-black">
      <iframe
        src={`https://vidsrc.cc/v2/embed/tv/46298/1/${episodeId}?autoPlay=false`}
        allowFullScreen
        className="w-full h-full border-0"
        sandbox="allow-scripts allow-same-origin allow-forms"
        referrerPolicy="no-referrer"
      />
    </div>
  )
}

