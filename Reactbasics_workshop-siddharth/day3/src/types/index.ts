// Theme types
export type Theme = 'light' | 'dark'

export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// User role types
export interface UserRole {
  label: string
  value: string
}

export enum UserRoleEnum {
  ADMIN = 'admin',
  USER = 'user',
  MODERATOR = 'moderator',
  GUEST = 'guest'
}

// Generic dropdown types
export interface DropdownOption<T> {
  label: string
  value: T
}

export interface DropdownProps<T> {
  options: DropdownOption<T>[]
  onSelect: (option: T) => void
  placeholder?: string
  value?: T
}

// List component types
export interface ListItem {
  id: string
  text: string
}

export interface ListProps {
  items: ListItem[]
  onAddItem: (text: string) => void
}

// Timer types
export interface TimerState {
  seconds: number
  isRunning: boolean
}

