import type { ReactNode } from 'react'

// Root layout: passes through to [lang]/layout.tsx which provides html/body
export default function RootLayout({ children }: { children: ReactNode }) {
  return children as unknown as React.JSX.Element
}
