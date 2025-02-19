import Link from "next/link"

export default function About() {
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
        <h1 className="text-3xl font-bold text-gray-100 mb-6">About Hunter x Hunter</h1>
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-300 mb-4">
            Hunter x Hunter is a popular anime series based on the manga by Yoshihiro Togashi. It follows the adventures
            of Gon Freecss, a young boy who discovers that his father, who he was told was dead, is actually alive and a
            world-renowned Hunter.
          </p>
          <p className="text-gray-300 mb-4">
            Gon decides to become a Hunter himself and find his father, encountering various challenges and making new
            friends along the way. The series is known for its complex characters, intricate plot, and unique power
            system called "Nen".
          </p>
          <p className="text-gray-300">
            Throughout his journey, Gon faces numerous trials, makes lifelong friends, and encounters formidable foes.
            The story explores themes of friendship, self-discovery, and the moral ambiguity of the Hunter profession.
          </p>
          <p className="text-green-400 mt-4 font-semibold">Made by Rahul Joy Suneel (Rae) :33 .</p>
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

