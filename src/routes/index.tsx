import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
 <div className="min-h-screen bg-black text-zinc-100 p-8 flex items-center justify-center">
  <div className="bg-zinc-950 p-8 rounded-xl shadow-2xl max-w-2xl w-full border border-zinc-900">
    <h1 className="text-4xl font-extrabold tracking-tight text-red-500 mb-3 font-sans">
      Welcome to QC Baked Goods
    </h1>
    <h2 className="text-xl font-medium tracking-wide text-zinc-400 uppercase border-b border-zinc-900 pb-3">
      Financial Statements
    </h2>
  </div>
</div>
  )
}
