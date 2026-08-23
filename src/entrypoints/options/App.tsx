import { useEffect, useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Separator } from '@/components/ui/separator'

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <main className="min-h-svh bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <header>
          <p className="text-sm text-muted-foreground">Media Sift</p>
          <h1 className="mt-1 text-2xl font-semibold">Settings</h1>
        </header>
        <Separator className="my-6" />
        <nav className="mb-6 flex gap-4 text-sm">
          <a
            className={hash === '#general' || !hash ? 'font-medium text-foreground' : 'text-muted-foreground'}
            href="#general"
          >
            General
          </a>
        </nav>
        <ThemeToggle />
        {(hash === '#general' || !hash) && (
          <section aria-labelledby="general-title">
            <h2 id="general-title" className="text-lg font-medium">General</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Download preferences will appear here.
            </p>
          </section>
        )}
      </div>
    </main>
  )
}

export default App
