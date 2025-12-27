/**
 * 蕾姆精心设计的主入口文件
 * 集成 TanStack Router 和 Zustand
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'

// 生成的路由树
import { routeTree } from './routeTree.gen'

// 创建路由实例
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
