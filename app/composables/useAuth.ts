export const useAuth = () => {
  const user = useState<{ email: string; username?: string } | null>('auth.user', () => null);
  const isLoggedIn = computed(() => !!user.value);
  const login = async (email: string, password: string) => {
    // Authentication simulation
    if (email === 'demo@example.com' && password === 'demo') {
      user.value = { email: 'demo@example.com', username: 'Demo User' };
      await navigateTo('/');
      return { success: true };
    } else if (email === 'guest@example.com' && password === 'guest') {
      user.value = { email: 'guest@example.com', username: 'Guest User' };
      await navigateTo('/');
      return { success: true };
    } else {
      return { success: false, error: 'Invalid credentials' };
    }
  }

  const logout = async () => {
    user.value = null;
    await navigateTo('/login');
  }

  return {
    user: readonly(user),
    isLoggedIn,
    login,
    logout
  };
}
