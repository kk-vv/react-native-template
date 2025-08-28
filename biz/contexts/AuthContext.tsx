import { router, useSegments } from "expo-router"
import React, { createContext, useCallback, useContext, useEffect, useState, type PropsWithChildren } from "react"

interface States {
  isLoggedIn: boolean
}

interface Actions {
  onLogin: () => void
  onLogout: () => void
}

type SessionContextType = States & Actions

const SessionContext = createContext<SessionContextType>({
  isLoggedIn: false,
  onLogin: () => null,
  onLogout: () => null
})

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const segments = useSegments()

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)
  const onLogin = useCallback(() => {
    setIsLoggedIn(true)
  }, [])
  const onLogout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)"
    console.log('isLogin', isLoggedIn)
    if (isLoggedIn && inAuthGroup) {
      router.replace('/(tabs)')
    } else if (!inAuthGroup && !isLoggedIn) {
      router.replace('/(auth)')
    }
  }, [isLoggedIn, segments])

  return (
    <SessionContext.Provider
      value={{
        isLoggedIn,
        onLogin,
        onLogout
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export const useSessionContext = () => {
  const context = useContext(SessionContext)
  if (!context) {
    throw new Error("useSessionContext must be used within an SessionProvider")
  }
  return context
}