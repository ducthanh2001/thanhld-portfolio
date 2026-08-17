// Vendored from mortspace/Deskfolio (MIT) — https://github.com/mortspace/Deskfolio. Unmodified
// (mirrors the upstream package's own entry point).
import './lib/deskfolio.css'
import './deskfolio-page.css'
import { DeskFolioPage } from './DeskFolioPage'

export { DeskFolioPage }

export function DeskFolio() {
  return (
    <main className="page page-bleed page-deskfolio">
      <DeskFolioPage />
    </main>
  )
}
