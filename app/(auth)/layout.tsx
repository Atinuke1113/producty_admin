import { Inter } from "next/font/google"
import { AuthProvider } from "@/lib/auth"

const inter = Inter({ subsets: ["latin"] })

export default function AuthLayout({
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