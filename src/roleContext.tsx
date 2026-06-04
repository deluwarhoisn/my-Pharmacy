import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { ROLES, type Role, normalizeRole } from './roleAccess'

export const ROLE_STORAGE_KEY = 'sotota-pharmacy-role'

type RoleContextValue = {
  role: Role
  setRole: (nextRole: Role) => void
}

export const RoleContext = createContext<RoleContextValue | null>(null)

function readInitialRole(): Role {
  if (typeof window === 'undefined') {
    return ROLES.USER
  }

  return normalizeRole(window.localStorage.getItem(ROLE_STORAGE_KEY))
}

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>(readInitialRole)

  useEffect(() => {
    window.localStorage.setItem(ROLE_STORAGE_KEY, role)
  }, [role])

  const value = useMemo<RoleContextValue>(() => ({ role, setRole }), [role])

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
}

export function useRole() {
  const context = useContext(RoleContext)

  if (!context) {
    throw new Error('useRole must be used inside RoleProvider')
  }

  return context
}
