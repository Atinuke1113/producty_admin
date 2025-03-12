'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react'

interface User {
  email: string
  role: string
  name?: string
  image?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  isLoading: boolean
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const VALID_CREDENTIALS = {
  email: 'admin@producty.app',
  password: 'productivity'
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Check authentication status on mount and when localStorage changes
  useEffect(() => {
    const checkAuth = () => {
      try {
        const hasAuthCookie = document.cookie.includes('auth_token')
        const storedEmail = localStorage.getItem('user_email')
        
        if (hasAuthCookie && storedEmail) {
          setUser({ 
            email: storedEmail, 
            role: 'admin',
            name: 'Admin User',
            image: '/avatars/admin.png'
          })
        } else {
          setUser(null)
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    // Initial check
    checkAuth()

    // Listen for storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'user_email' || e.key === null) {
        checkAuth()
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)
    
    try {
      if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
        // Set cookie with a specific expiry
        const expiryDate = new Date()
        expiryDate.setDate(expiryDate.getDate() + 7) // 7 days from now
        document.cookie = `auth_token=dummy_token; path=/; expires=${expiryDate.toUTCString()}`
        
        // Set user email in localStorage
        localStorage.setItem('user_email', email)
        
        // Update state
        setUser({ 
          email, 
          role: 'admin',
          name: 'Admin User',
          image: '/avatars/admin.png'
        })
      } else {
        throw new Error('Invalid email or password')
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Login failed')
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    try {
      // Clear cookie
      document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
      
      // Clear localStorage
      localStorage.removeItem('user_email')
      
      // Update state
      setUser(null)
    } catch (error) {
      console.error('Logout failed:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const value = {
    user,
    login,
    logout,
    isLoading,
    error
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 