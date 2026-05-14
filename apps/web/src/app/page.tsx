import { Button } from "@repo/ui/components/button";
import { Play, Square, Video, Layers, Settings, Share2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      {/* Top Navbar */}
      <nav className="flex h-14 items-center justify-between border-b border-slate-800 px-6 backdrop-blur-md bg-slate-950/50 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Video className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold tracking-tight text-lg">AnimAI MVP</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="h-9 px-3">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="primary" className="h-9 px-4">
            Render
          </Button>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-800 bg-slate-900/50 flex flex-col">
          <div className="p-4 space-y-1">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">Assets</div>
            {["Characters", "Backgrounds", "Audio", "Transitions"].map((item) => (
              <button key={item} className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                <Layers className="w-4 h-4" />
                {item}
              </button>
            ))}
          </div>
        </aside>

        {/* Editor Area */}
        <section className="flex-1 flex flex-col bg-black relative">
          <div className="flex-1 flex items-center justify-center">
            <div className="aspect-video w-[80%] max-w-4xl bg-slate-900 rounded-xl shadow-2xl border border-slate-800 flex items-center justify-center overflow-hidden group relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
              <div className="z-10 text-slate-500 flex flex-col items-center gap-4">
                <Video className="w-12 h-12 opacity-20" />
                <p className="text-sm font-medium">Canvas Preview</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="h-64 border-t border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                  <Play className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                  <Square className="w-4 h-4" />
                </button>
                <span className="text-sm font-mono text-slate-400 ml-4">00:00:00 / 00:00:30</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-500">1080p | 30fps</span>
              </div>
            </div>
            <div className="h-32 bg-slate-900/50 rounded-lg border border-dashed border-slate-800 flex items-center justify-center">
              <p className="text-xs text-slate-600 uppercase tracking-widest">Timeline tracks go here</p>
            </div>
          </div>
        </section>

        {/* Properties Panel */}
        <aside className="w-72 border-l border-slate-800 bg-slate-900/50 p-4">
          <h3 className="text-sm font-semibold mb-4">Properties</h3>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs text-slate-500 font-medium">Position X</label>
              <input type="range" className="w-full accent-indigo-600" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-slate-500 font-medium">Position Y</label>
              <input type="range" className="w-full accent-indigo-600" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-slate-500 font-medium">Scale</label>
              <input type="range" className="w-full accent-indigo-600" />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
