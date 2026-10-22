export function App() {
  return (
    <main className="flex flex-col gap-16 p-16">
      <h1 className="text-title-l">옷답노트</h1>
      <div className="rounded-lg border border-paper-highlight bg-paper-raised p-24 shadow-raised-2">
        올라온 카드 (raised)
      </div>
      <div className="rounded-md bg-paper-well p-16 shadow-inset-1">들어간 칸 (well)</div>
      <p className="font-num text-grade-xl text-grade-a">A</p>
      <p className="text-caption text-ink-tertiary">캡션 12px</p>
    </main>
  )
}