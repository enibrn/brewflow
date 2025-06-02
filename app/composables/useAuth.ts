export const useAuth = () => {
  const user = useState<{ username: string } | null>('auth.user', () => null)
  const isLoggedIn = computed(() => !!user.value)
  const login = async (username: string, password: string) => {
    // Authentication simulation - username and password must be "demo"
    if (username === 'demo' && password === 'demo') {
      user.value = { username: 'demo' }
      await navigateTo('/')
      return { success: true }
    } else {
      return { success: false, error: 'Invalid credentials' }
    }
  }

  const logout = async () => {
    user.value = null
    await navigateTo('/login')
  }

  return {
    user: readonly(user),
    isLoggedIn,
    login,
    logout
  }
}
