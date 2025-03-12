import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/lib/auth"
import { DashboardWrapper } from "@/components/dashboard-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Producty Admin Dashboard",
  description: "Admin dashboard for Producty - Task Management Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
} 