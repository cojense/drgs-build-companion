import { useState } from 'react'
import TabNav from './components/TabNav'
import CheatSheets from './pages/CheatSheets'
import StageGuide from './pages/StageGuide'
import ShopOptimizer from './pages/ShopOptimizer'
import ArtifactTiers from './pages/ArtifactTiers'
import WeaponReference from './pages/WeaponReference'
import Bestiary from './pages/Bestiary'
import Synergies from './pages/Synergies'

const TABS = [
  { id: 'cheatsheets', label: 'Builds' },
  { id: 'stageguide',  label: 'Stage Guide' },
  { id: 'shopopt',     label: 'Shop Calc' },
  { id: 'artifacts',   label: 'Artifacts' },
  { id: 'weapons',     label: 'Weapons' },
  { id: 'bestiary',    label: 'Bestiary' },
  { id: 'synergies',   label: 'Synergies' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('cheatsheets')

  return (
    <div className="flex flex-col min-h-dvh bg-cave-black text-text-primary font-sans">
      {/* Header */}
      <header className="bg-dark-steel border-b border-border-subtle px-4 pt-4 pb-0 sticky top-0 z-50">
        <div className="flex items-baseline gap-2 mb-3">
          <h1 className="text-drg-amber font-mono font-bold text-lg leading-none tracking-wide">
            DRG:S
          </h1>
          <span className="text-text-secondary text-sm font-mono">BUILD COMPANION</span>
        </div>
        <TabNav tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
      </header>

      {/* Page content */}
      <main className="flex-1 overflow-y-auto">
        {activeTab === 'cheatsheets' && <CheatSheets />}
        {activeTab === 'stageguide'  && <StageGuide />}
        {activeTab === 'shopopt'     && <ShopOptimizer />}
        {activeTab === 'artifacts'   && <ArtifactTiers />}
        {activeTab === 'weapons'     && <WeaponReference />}
        {activeTab === 'bestiary'    && <Bestiary />}
        {activeTab === 'synergies'   && <Synergies />}
      </main>
    </div>
  )
}
