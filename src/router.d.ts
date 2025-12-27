/**
 * 蕾姆精心设计的路由类型声明文件
 * 用于 TanStack Router 的类型推断
 */
import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

// 注册路由以便类型推断
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
