import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { Theme, UserRoleEnum, DropdownOption } from '../types'
import { useTheme } from '../context/ThemeContext'

const DropdownDemo: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [selectedRole, setSelectedRole] = useState<UserRoleEnum | null>(null)

  // Theme options using string type
  const themeOptions: DropdownOption<Theme>[] = [
    { label: '☀️ Light Mode', value: 'light' },
    { label: '🌙 Dark Mode', value: 'dark' }
  ]

  // User role options using enum type
  const roleOptions: DropdownOption<UserRoleEnum>[] = [
    { label: '👑 Administrator', value: UserRoleEnum.ADMIN },
    { label: '👤 Regular User', value: UserRoleEnum.USER },
    { label: '🛡️ Moderator', value: UserRoleEnum.MODERATOR },
    { label: '👻 Guest', value: UserRoleEnum.GUEST }
  ]

  // Complex object type for demonstration
  interface Permission {
    id: number
    name: string
    level: 'read' | 'write' | 'admin'
  }

  const permissionOptions: DropdownOption<Permission>[] = [
    { 
      label: '📖 Read Only', 
      value: { id: 1, name: 'read_only', level: 'read' } 
    },
    { 
      label: '✏️ Read & Write', 
      value: { id: 2, name: 'read_write', level: 'write' } 
    },
    { 
      label: '🔧 Full Admin', 
      value: { id: 3, name: 'full_admin', level: 'admin' } 
    }
  ]

  const [selectedPermission, setSelectedPermission] = useState<Permission | null>(null)

  const handleThemeSelect = (selectedTheme: Theme) => {
    if (selectedTheme !== theme) {
      toggleTheme()
    }
  }

  const handleRoleSelect = (role: UserRoleEnum) => {
    setSelectedRole(role)
  }

  const handlePermissionSelect = (permission: Permission) => {
    setSelectedPermission(permission)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="font-semibold text-sm">Theme Selector (String Type)</h3>
        <Dropdown<Theme>
          options={themeOptions}
          onSelect={handleThemeSelect}
          placeholder="Choose theme..."
          value={theme}
        />
        <p className="text-xs text-muted-foreground">
          Current theme: <span className="font-medium capitalize">{theme}</span>
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-sm">User Role (Enum Type)</h3>
        <Dropdown<UserRoleEnum>
          options={roleOptions}
          onSelect={handleRoleSelect}
          placeholder="Select user role..."
          value={selectedRole || undefined}
        />
        <p className="text-xs text-muted-foreground">
          Selected role: <span className="font-medium">
            {selectedRole ? selectedRole : 'None'}
          </span>
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-sm">Permission Level (Object Type)</h3>
        <Dropdown<Permission>
          options={permissionOptions}
          onSelect={handlePermissionSelect}
          placeholder="Choose permission level..."
        />
        {selectedPermission && (
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Selected permission:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>ID: {selectedPermission.id}</li>
              <li>Name: {selectedPermission.name}</li>
              <li>Level: {selectedPermission.level}</li>
            </ul>
          </div>
        )}
      </div>

      <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
        <h4 className="font-semibold text-sm text-blue-800 dark:text-blue-200 mb-2">
          TypeScript Generics Demo
        </h4>
        <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
          <li>• <code>Dropdown&lt;Theme&gt;</code> - String union type</li>
          <li>• <code>Dropdown&lt;UserRoleEnum&gt;</code> - Enum type</li>
          <li>• <code>Dropdown&lt;Permission&gt;</code> - Complex object type</li>
          <li>• Type safety ensures only valid values can be selected</li>
          <li>• Reusable component with different data types</li>
        </ul>
      </div>
    </div>
  )
}

export default DropdownDemo

