export default function TabNav({ tabs, activeTab, onTabChange }) {
  return (
    <nav className="flex gap-0 -mb-px">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={[
            'min-h-[44px] px-4 pb-3 pt-1 text-sm font-semibold tracking-wide border-b-2 transition-colors',
            activeTab === tab.id
              ? 'border-drg-amber text-drg-amber'
              : 'border-transparent text-text-secondary hover:text-text-primary',
          ].join(' ')}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
