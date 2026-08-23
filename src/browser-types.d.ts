import type { SidebarAction } from 'webextension-polyfill'
import '@wxt-dev/browser'

declare module '@wxt-dev/browser' {
  namespace Browser {
    export const sidebarAction: SidebarAction.Static
  }
}
