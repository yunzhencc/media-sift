import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

function App() {
  function openOptions() {
    void browser.tabs.create({
      url: browser.runtime.getURL('/options.html#general'),
    })
  }

  async function openSidePanel() {
    const { id: windowId } = await browser.windows.getCurrent()
    if (windowId !== undefined)
      await browser.sidePanel.open({ windowId })
  }

  return (
    <div className="w-60">
      <h1>WXT + React</h1>
      <Separator />
      <Button>Button</Button>
      <Button variant="outline" onClick={openOptions}>Settings</Button>
      <Button variant="outline" onClick={() => void openSidePanel()}>Open Side Panel</Button>
      <ThemeToggle />
    </div>
  )
}

export default App
