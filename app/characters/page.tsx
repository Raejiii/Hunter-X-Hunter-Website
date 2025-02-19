import Image from "next/image"
import Link from "next/link"

const characters = [
  {
    name: "Gon Freecss",
    description:
      "The main protagonist, a young boy with a talent for making friends and a strong sense of determination.",
  },
  {
    name: "Killua Zoldyck",
    description: "Gon's best friend, a former assassin with incredible speed and agility.",
  },
  {
    name: "Kurapika",
    description: "The last survivor of the Kurta Clan, seeking revenge against the Phantom Troupe.",
  },
  {
    name: "Leorio Paradinight",
    description: "An aspiring doctor who becomes a Hunter to pay for his medical education.",
  },
]

export default function Characters() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 text-white shadow sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Rae's Hunter X Hunter</div>
            <div className="space-x-4">
              <Link href="/" className="hover:text-green-400">
                Watch
              </Link>
              <Link href="/about" className="hover:text-green-400">
                About
              </Link>
              <Link href="/characters" className="hover:text-green-400">
                Characters
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-100 mb-6">Main Characters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character) => (
            <div key={character.name} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              {character.name === "Gon Freecss" ? (
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HxH2011_EP147_Gon_Portrait-PNYFjU0yqQeMa0pesmKFAVdrgXpNAc.webp"
                  alt="Gon Freecss portrait"
                  width={300}
                  height={300}
                  className="w-full h-48 object-contain bg-gray-800"
                />
              ) : character.name === "Killua Zoldyck" ? (
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-2-hQFpqlyZKyDKNehOqkrQCKe5SXCcFr.jpeg"
                  alt="Killua Zoldyck portrait"
                  width={300}
                  height={300}
                  className="w-full h-48 object-contain bg-gray-800"
                />
              ) : character.name === "Leorio Paradinight" ? (
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i-just-started-watching-hxh-on-ep-39-and-realized-leorio-is-v0-gq7vko7ghzzd1.jpeg-zetXeMUttN1Ic1Ntn7WjesKUjXjHGf.webp"
                  alt="Leorio Paradinight portrait"
                  width={300}
                  height={300}
                  className="w-full h-48 object-contain bg-gray-800"
                />
              ) : character.name === "Kurapika" ? (
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/why-people-keep-talking-and-keep-quiet-photo-u1-JCMpjWcUYQQdtPEcHGE0bgFy6noike.jpeg"
                  alt="Kurapika portrait"
                  width={300}
                  height={300}
                  className="w-full h-48 object-contain bg-gray-800"
                />
              ) : (
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=${character.name}`}
                  alt={character.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-contain bg-gray-800"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-100 mb-2">{character.name}</h3>
                <p className="text-gray-300 text-sm">{character.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Rae's Hunter X Hunter. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            This is a fan-made website and is not affiliated with the official Hunter x Hunter franchise.
          </p>
        </div>
      </footer>
    </div>
  )
}

