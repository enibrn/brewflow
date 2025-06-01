export default defineNuxtRouteMiddleware((to) => {
  const { isLoggedIn } = useAuth()

  // Se l'utente non è autenticato e sta cercando di accedere a una pagina protetta
  if (!isLoggedIn.value && to.path !== '/login') {
    return navigateTo('/login')
  }

  // Se l'utente è autenticato e sta cercando di accedere alla pagina di login
  if (isLoggedIn.value && to.path === '/login') {
    return navigateTo('/')
  }
})
