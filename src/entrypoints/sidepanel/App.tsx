import { ThemeToggle } from '@/components/theme-toggle'
import { Separator } from '@/components/ui/separator'

function App() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <div className="p-4">
        <h1 className="text-lg font-semibold">Media Sift</h1>
        <p className="mt-1 text-sm text-muted-foreground">Captured media will appear here.</p>
        <Separator className="my-4" />
        <ThemeToggle />
      </div>
    </main>
  )
}

export default App
