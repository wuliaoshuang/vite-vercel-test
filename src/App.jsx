import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* 蕾姆风格的头部区域 */}
      <header className="pt-12 pb-8 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-[#95C0EC] animate-pulse"></div>
          <h1 className="text-4xl font-bold text-white tracking-wide">
            Tailwind CSS <span className="text-[#95C0EC]">4.0</span>
          </h1>
          <div className="w-3 h-3 rounded-full bg-[#95C0EC] animate-pulse"></div>
        </div>
        <p className="text-slate-400 text-lg">
          蕾姆精心配置的样式系统 ✨
        </p>
      </header>

      {/* 主要内容区域 */}
      <main className="max-w-4xl mx-auto px-4 pb-16">
        {/* 卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 卡片 1 - 玻璃拟态效果 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-2xl hover:shadow-[#95C0EC]/20">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#95C0EC]/20 rounded-full blur-2xl group-hover:bg-[#95C0EC]/30 transition-colors"></div>
            <h3 className="text-xl font-semibold text-white mb-2">响应式布局</h3>
            <p className="text-slate-300 text-sm">Grid 和 Flexbox 完美适配各种屏幕尺寸</p>
          </div>

          {/* 卡片 2 - 渐变效果 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#95C0EC] to-blue-600 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#95C0EC]/30">
            <h3 className="text-xl font-semibold text-white mb-2">渐变配色</h3>
            <p className="text-white/90 text-sm">蕾姆蓝的完美呈现，柔和而优雅</p>
          </div>

          {/* 卡片 3 - 交互按钮 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 transition-all duration-300 hover:scale-105 hover:bg-white/15">
            <h3 className="text-xl font-semibold text-white mb-4">交互体验</h3>
            <button className="w-full py-2 px-4 bg-[#95C0EC] hover:bg-[#7aa8d9] text-white font-medium rounded-lg transition-all duration-200 active:scale-95 shadow-lg shadow-[#95C0EC]/25">
              点击测试
            </button>
          </div>
        </div>

        {/* 计数器区域 - 展示状态管理 */}
        <div className="max-w-md mx-auto">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">计数器测试</h2>
            <div className="text-6xl font-bold text-[#95C0EC] mb-6 tabular-nums">
              {count}
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setCount(c => Math.max(0, c - 1))}
                className="px-6 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 rounded-xl transition-all duration-200 active:scale-95"
              >
                减少
              </button>
              <button
                onClick={() => setCount(c => c + 1)}
                className="px-6 py-3 bg-[#95C0EC] hover:bg-[#7aa8d9] text-white rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-[#95C0EC]/25"
              >
                增加
              </button>
              <button
                onClick={() => setCount(0)}
                className="px-6 py-3 bg-slate-700/50 hover:bg-slate-700/70 text-slate-300 border border-slate-600/50 rounded-xl transition-all duration-200 active:scale-95"
              >
                重置
              </button>
            </div>
          </div>
        </div>

        {/* 功能展示列表 */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {['暗色模式', '动画效果', '玻璃拟态', '渐变背景'].map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#95C0EC]/50 transition-colors"
            >
              <span className="text-2xl mb-2 block">{['🌙', '✨', '💎', '🎨'][index]}</span>
              <span className="text-slate-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </main>

      {/* 页脚 */}
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>由蕾姆精心打造 · Tailwind CSS 4.0 + React + Vite</p>
      </footer>
    </div>
  )
}

export default App
