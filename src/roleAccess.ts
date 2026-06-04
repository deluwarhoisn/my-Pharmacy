export const ROLES = {
  USER: 'user',
  DOCTOR: 'doctor',
  ADMIN: 'admin',
} as const

export type Role = (typeof ROLES)[keyof typeof ROLES]

export const ROLE_LABELS: Record<Role, string> = {
  [ROLES.USER]: 'User',
  [ROLES.DOCTOR]: 'Doctor',
  [ROLES.ADMIN]: 'Admin',
}

export const ROLE_DESCRIPTIONS: Record<Role, string> = {
  [ROLES.USER]: 'Public customer access',
  [ROLES.DOCTOR]: 'Clinical and visit workflow',
  [ROLES.ADMIN]: 'Full platform control',
}

export const ROLE_OPTIONS: Role[] = [ROLES.USER, ROLES.DOCTOR, ROLES.ADMIN]

export function normalizeRole(value: string | null | undefined): Role {
  return ROLE_OPTIONS.includes(value as Role) ? (value as Role) : ROLES.USER
}

export function canAccessRole(activeRole: Role, allowedRoles: Role[]): boolean {
  return allowedRoles.includes(activeRole)
}
