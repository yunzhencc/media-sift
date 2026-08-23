import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

function App() {
  function openOptions() {
    void browser.tabs.create({
      url: browser.runtime.getURL('/options.html#general'),
    })
  }

  return (
    <div className="w-60">
      <h1>WXT + React</h1>
      <Separator />
      <Button>Button</Button>
      <Button variant="outline" onClick={openOptions}>Settings</Button>
    </div>
  )
}

export default App
