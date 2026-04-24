import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import styles from './VideoCard.module.css'

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

interface VideoCardProps {
  url: string
  titulo: string
}

export default function VideoCard({ url, titulo }: VideoCardProps) {
  const [playing, setPlaying] = useState(false)
  const videoId = extractYouTubeId(url)

  if (!videoId) {
    return (
      <div className={styles.card}>
        <div className={styles.error}>URL inválida</div>
        <p>{titulo}</p>
      </div>
    )
  }

  const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        {playing ? (
          <iframe
            src={embedUrl}
            title={titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button className={styles.thumb} onClick={() => setPlaying(true)}>
            <img src={thumb} alt={titulo} />
            <span className={styles.playBtn}>
              <FaPlay size={20} />
            </span>
          </button>
        )}
      </div>
      <p>{titulo}</p>
    </div>
  )
}
