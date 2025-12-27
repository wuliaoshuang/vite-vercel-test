/**
 * 蕾姆精心设计的 UI 状态管理 Store
 * 管理侧边栏、工具面板等 UI 相关状态
 */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// ========================================
// 类型定义
// ========================================
export type QuickActionItem = {
  icon: any
  label: string
}

export type ToolItem = {
  icon: any
  label: string
  shortcut?: string
}

// ========================================
// Store 状态与操作
// ========================================
interface UIState {
  // 主侧边栏状态
  sidebarCollapsed: boolean
  mobileSidebarOpen: boolean

  // 聊天页面侧边栏状态
  mobileChatSidebarOpen: boolean

  // 工具面板状态
  showTools: boolean

  // 复制状态
  copiedMessageId: number | null

  // ========== Actions ==========

  // 切换侧边栏折叠状态
  toggleSidebar: () => void

  // 设置侧边栏折叠状态
  setSidebarCollapsed: (collapsed: boolean) => void

  // 切换移动端侧边栏
  toggleMobileSidebar: () => void

  // 设置移动端侧边栏状态
  setMobileSidebarOpen: (open: boolean) => void

  // 切换聊天页面移动端侧边栏
  toggleMobileChatSidebar: () => void

  // 设置聊天页面移动端侧边栏状态
  setMobileChatSidebarOpen: (open: boolean) => void

  // 切换工具面板
  toggleTools: () => void

  // 设置工具面板状态
  setShowTools: (show: boolean) => void

  // 设置复制消息 ID
  setCopiedMessageId: (id: number | null) => void

  // 复制消息到剪贴板
  copyToClipboard: (content: string, id?: number) => Promise<void>
}

// ========================================
// Store 创建
// ========================================
export const useUIStore = create<UIState>()(
  devtools(
    persist(
      (set, get) => ({
        // ========== Initial State ==========
        sidebarCollapsed: false,
        mobileSidebarOpen: false,
        mobileChatSidebarOpen: false,
        showTools: false,
        copiedMessageId: null,

        // ========== Actions ==========
        toggleSidebar: () =>
          set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),

        setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),

        toggleMobileSidebar: () =>
          set((state) => ({ mobileSidebarOpen: !state.mobileSidebarOpen })),

        setMobileSidebarOpen: (open) => set({ mobileSidebarOpen: open }),

        toggleMobileChatSidebar: () =>
          set((state) => ({ mobileChatSidebarOpen: !state.mobileChatSidebarOpen })),

        setMobileChatSidebarOpen: (open) => set({ mobileChatSidebarOpen: open }),

        toggleTools: () => set((state) => ({ showTools: !state.showTools })),

        setShowTools: (show) => set({ showTools: show }),

        setCopiedMessageId: (id) => set({ copiedMessageId: id }),

        copyToClipboard: async (content, id) => {
          try {
            await navigator.clipboard.writeText(content)

            // 设置复制状态
            const { setCopiedMessageId } = get()
            setCopiedMessageId(id || null)

            // 2 秒后重置
            if (id) {
              setTimeout(() => setCopiedMessageId(null), 2000)
            }
          } catch (error) {
            console.error('复制失败:', error)
          }
        },
      }),
      {
        name: 'ui-storage',
        partialize: (state) => ({
          sidebarCollapsed: state.sidebarCollapsed,
        }),
      }
    ),
    { name: 'UIStore' }
  )
)

// ========================================
// Selectors
// ========================================
export const selectSidebarCollapsed = (state: UIState) => state.sidebarCollapsed
export const selectMobileSidebarOpen = (state: UIState) => state.mobileSidebarOpen
export const selectMobileChatSidebarOpen = (state: UIState) => state.mobileChatSidebarOpen
