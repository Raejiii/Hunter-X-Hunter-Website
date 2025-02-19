"use client"

import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { EpisodeList } from "@/components/episode-list"
import { useState } from "react"

const episodesData = [
  {
    id: 1,
    episodeNumber: 1,
    title: "Departure × And × Friends",
    description:
      "Gon Freecss, a young boy living on Whale Island, aspires to become a Hunter like his father. He sets out to take the Hunter Exam, leaving behind his Aunt Mito.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/7ppEotl1YMs1adTscDdMoLhQaQ3.jpg",
    runtime: "23m",
  },
  {
    id: 2,
    episodeNumber: 2,
    title: "Test × Of × Tests",
    description:
      "Gon meets Leorio and Kurapika on the ship to the exam site. They face their first challenge when the ship's captain tests their resolve to become Hunters.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 3,
    episodeNumber: 3,
    title: "Rivals × For × Survival",
    description:
      "The first phase of the Hunter Exam begins. Gon, Leorio, and Kurapika must follow an extremely fast runner through a tunnel and foggy wetlands.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 4,
    episodeNumber: 4,
    title: "Hope × And × Ambition",
    description:
      "The group encounters the Kiriko, shape-shifting magical beasts. They must use their wits to distinguish the beasts from the humans they're impersonating.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 5,
    episodeNumber: 5,
    title: "Hisoka × Is × Sneaky",
    description:
      "The second phase of the exam begins. The applicants must cook a dish to satisfy two Gourmet Hunters. Gon and his friends struggle with the difficult task.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 6,
    episodeNumber: 6,
    title: "A × Surprising × Challenge",
    description:
      "The applicants head to Zevil Island for the fourth phase of the exam. They must collect number plates from other candidates in a week-long hunt.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 7,
    episodeNumber: 7,
    title: "Showdown × On × The Airship",
    description:
      "The remaining applicants gather on an airship. Chairman Netero explains the rules of the final phase and interviews each candidate individually.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 8,
    episodeNumber: 8,
    title: "Decision × By × Majority?",
    description:
      "The final phase of the Hunter Exam begins with one-on-one tournaments. Gon faces his first opponent, Hanzo, a skilled ninja.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 9,
    episodeNumber: 9,
    title: "Good × Bad × Relations",
    description:
      "Gon's match against Hanzo continues. Despite being outmatched, Gon refuses to give up, impressing both Hanzo and the other applicants.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 10,
    episodeNumber: 10,
    title: "Trick × To × The Trick",
    description:
      "The remaining matches of the final phase continue. Kurapika faces Hisoka in a tense battle of wits and strength.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 11,
    episodeNumber: 11,
    title: "Trouble × With × The Gamble",
    description:
      "Leorio faces Bodoro in his match. Meanwhile, Killua's match takes an unexpected turn when he faces his brother, Illumi, in disguise.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 12,
    episodeNumber: 12,
    title: "Last × Test × Of × Resolve",
    description:
      "The Hunter Exam concludes. Gon and his friends receive their licenses, but Killua's actions during the exam lead to unexpected consequences.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 13,
    episodeNumber: 13,
    title: "Letter × From × Gon",
    description:
      "Gon, Kurapika, and Leorio part ways. Gon and Leorio head to Kukuroo Mountain to find Killua, while Kurapika leaves to pursue his own goals.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 14,
    episodeNumber: 14,
    title: "Reunion × And × Understanding",
    description:
      "Gon and Leorio arrive at Kukuroo Mountain, home of the infamous Zoldyck family of assassins. They face challenges trying to enter the estate.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 15,
    episodeNumber: 15,
    title: "The × Zoldyck × Family",
    description:
      "Gon and his friends meet some of Killua's family members. They learn more about Killua's past and the expectations placed on him as a Zoldyck.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 16,
    episodeNumber: 16,
    title: "Defeat × And × Disgrace",
    description: "Gon and his friends continue their attempts to rescue Killua from his family's estate.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 17,
    episodeNumber: 17,
    title: "Transcription × And × Rewrite",
    description: "Killua rejoins the group, and they head to Heavens Arena to train and earn money.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 18,
    episodeNumber: 18,
    title: "Big × Time × Interview",
    description: "Gon and Killua begin their matches at Heavens Arena, showcasing their abilities.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 19,
    episodeNumber: 19,
    title: "First × Match × Begins",
    description: "Gon and Killua continue their matches at Heavens Arena.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 20,
    episodeNumber: 20,
    title: "The × Tower × Of × Heaven",
    description: "Gon and Killua face stronger opponents at Heavens Arena.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 21,
    episodeNumber: 21,
    title: "Zushi × And × Wing",
    description: "Gon and Killua meet Zushi and Wing, who teach them Nen.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 22,
    episodeNumber: 22,
    title: "Nen × Training × Begins",
    description: "Gon and Killua begin their Nen training with Wing.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 23,
    episodeNumber: 23,
    title: "Hatsu × And × The × Four × Principles",
    description: "Gon and Killua learn about the four principles of Nen.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 24,
    episodeNumber: 24,
    title: "Advanced × Nen × Training",
    description: "Gon and Killua continue their Nen training, facing new challenges.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 25,
    episodeNumber: 25,
    title: "The × Heavens × Arena × Tournament",
    description: "Gon and Killua participate in the Heavens Arena tournament.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 26,
    episodeNumber: 26,
    title: "The × Final × Match",
    description: "Gon and Killua reach the final match of the Heavens Arena tournament.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 27,
    episodeNumber: 27,
    title: "Victory × And × Defeat",
    description: "Gon and Killua's final match concludes.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 28,
    episodeNumber: 28,
    title: "New × Challenges × Await",
    description: "Gon and Killua face new challenges after the Heavens Arena tournament.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 29,
    episodeNumber: 29,
    title: "The × Yorknew × City × Arc",
    description: "Gon and Killua arrive in Yorknew City.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 30,
    episodeNumber: 30,
    title: "The × Phantom × Troupe",
    description: "Gon and Killua encounter the Phantom Troupe.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 31,
    episodeNumber: 31,
    title: "Kurapika's × Revenge",
    description: "Kurapika seeks revenge on the Phantom Troupe.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 32,
    episodeNumber: 32,
    title: "The × Auction × Begins",
    description: "Gon and Killua attend an auction in Yorknew City.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 33,
    episodeNumber: 33,
    title: "The × Greed × Island × Arc",
    description: "Gon and Killua participate in the Greed Island game.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 34,
    episodeNumber: 34,
    title: "The × Game × Begins",
    description: "Gon and Killua start playing Greed Island.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 35,
    episodeNumber: 35,
    title: "New × Allies × And × Enemies",
    description: "Gon and Killua meet new allies and enemies in Greed Island.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 36,
    episodeNumber: 36,
    title: "The × Final × Challenge",
    description: "Gon and Killua face the final challenge in Greed Island.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 37,
    episodeNumber: 37,
    title: "The × Chimera × Ant × Arc",
    description: "Gon and Killua encounter the Chimera Ants.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 38,
    episodeNumber: 38,
    title: "The × King × Of × The × Ants",
    description: "Gon and Killua face the King of the Chimera Ants.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 39,
    episodeNumber: 39,
    title: "The × Battle × Begins",
    description: "Gon and Killua battle the Chimera Ants.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 40,
    episodeNumber: 40,
    title: "The × Final × Confrontation",
    description: "Gon and Killua face the final confrontation with the Chimera Ants.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 41,
    episodeNumber: 41,
    title: "The × Aftermath",
    description: "Gon and Killua deal with the aftermath of the Chimera Ant arc.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 42,
    episodeNumber: 42,
    title: "The × Election × Arc",
    description: "Gon and Killua participate in the election arc.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 43,
    episodeNumber: 43,
    title: "The × Dark × Continent × Arc",
    description: "Gon and Killua prepare for the Dark Continent expedition.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 44,
    episodeNumber: 44,
    title: "The × Journey × Begins",
    description: "Gon and Killua begin their journey to the Dark Continent.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 45,
    episodeNumber: 45,
    title: "New × Challenges × And × Adventures",
    description: "Gon and Killua face new challenges and adventures on their journey.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 46,
    episodeNumber: 46,
    title: "Unexpected × Encounters",
    description: "Gon and Killua encounter unexpected people and creatures.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 47,
    episodeNumber: 47,
    title: "Allies × And × Rivals",
    description: "Gon and Killua meet new allies and rivals.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 48,
    episodeNumber: 48,
    title: "Perilous × Journey",
    description: "Gon and Killua face perilous situations.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 49,
    episodeNumber: 49,
    title: "Testing × Their × Limits",
    description: "Gon and Killua test their limits.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 50,
    episodeNumber: 50,
    title: "Unforeseen × Consequences",
    description: "Gon and Killua face unforeseen consequences.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 51,
    episodeNumber: 51,
    title: "Unexpected × Twists",
    description: "Unexpected twists and turns occur.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 52,
    episodeNumber: 52,
    title: "Difficult × Decisions",
    description: "Gon and Killua make difficult decisions.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 53,
    episodeNumber: 53,
    title: "Facing × Their × Fears",
    description: "Gon and Killua face their fears.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 54,
    episodeNumber: 54,
    title: "New × Beginnings",
    description: "Gon and Killua experience new beginnings.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 55,
    episodeNumber: 55,
    title: "Unexpected × Alliances",
    description: "Gon and Killua form unexpected alliances.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 56,
    episodeNumber: 56,
    title: "Intense × Battles",
    description: "Gon and Killua engage in intense battles.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 57,
    episodeNumber: 57,
    title: "Strategic × Moves",
    description: "Gon and Killua make strategic moves.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 58,
    episodeNumber: 58,
    title: "Testing × Their × Strength",
    description: "Gon and Killua test their strength.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 59,
    episodeNumber: 59,
    title: "Unraveling × Mysteries",
    description: "Gon and Killua unravel mysteries.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 60,
    episodeNumber: 60,
    title: "Facing × The × Unknown",
    description: "Gon and Killua face the unknown.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 61,
    episodeNumber: 61,
    title: "Unexpected × Turns",
    description: "Unexpected turns of events occur.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/wBvtNJypYY0Jm2nb3B9K7IAC5N2.jpg",
    runtime: "23m",
  },
  {
    id: 62,
    episodeNumber: 62,
    title: "Reality? x And x Raw",
    description:
      "Gon and Killua set off for Masadora in search of spell cards. On the  way, they run into many different monsters. However, they struggle  against some of the stronger monsters. A girl named Biscuit watches as  they fight their way through.",
    thumbnailUrl: "https://image.tmdb.org/t/p/w500/avJ1kF7vZUcpPX0wU2iAvalaHcE.jpg",
    runtime: "24m",
  },
]

export default function Home() {
  const [selectedEpisode, setSelectedEpisode] = useState(episodesData[0].id)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-black bg-opacity-40 text-white shadow sticky top-0 z-50 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-green-400">Rae's Hunter x Hunter Site</div>
            <div className="space-x-6">
              <Link href="/" className="hover:text-green-400 transition-colors">
                Watch
              </Link>
              <Link href="/about" className="hover:text-green-400 transition-colors">
                About
              </Link>
              <Link href="/characters" className="hover:text-green-400 transition-colors">
                Characters
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative h-48 md:h-64 rounded-xl overflow-hidden mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hunter-x-hunter-6l28uunxtr53l0un.jpg-Yq77RDJFVanPRomB5pbSGhPB29HysI.jpeg"
            alt="Hunter x Hunter Characters Collage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-gray-900/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <a
                  href="#episodes"
                  className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 animate-fade-in-up shadow-lg hover:shadow-green-500/25"
                >
                  Watch Episodes
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Episodes Section */}
        <section id="episodes" className="bg-gray-800 bg-opacity-30 rounded-xl p-8 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-green-400 mb-8">"Legally" Watch Hunter x Hunter</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <VideoPlayer episodeId={selectedEpisode} autoPlay={false} />
            </div>
            <div>
              <EpisodeList episodes={episodesData} onEpisodeSelect={setSelectedEpisode} />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black bg-opacity-40 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-green-400 font-semibold">&copy; 2023 Rae's Hunter X Hunter. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            This is a fan-made website and is not affiliated with the official Hunter x Hunter franchise.
          </p>
        </div>
      </footer>
    </div>
  )
}

