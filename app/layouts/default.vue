<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar
      class="gradient"
      dark
      prominent
      app
    > <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>Brewflow App</v-toolbar-title>
      <v-spacer />
      <span class="mr-4 text-body-2">Hi, {{ user?.email || user?.username }}</span>
      <v-btn
        icon
        @click="logout"
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer
      v-model="drawer"
      app
    > <v-list>
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          to="/"
        />
        <v-list-item
          prepend-icon="mdi-table"
          title="CRUD Example"
          to="/crud-example"
        />
        <v-list-item
          prepend-icon="mdi-cog"
          title="Settings"
          to="/settings"
        />
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>

    <!-- Footer -->
    <AppFooter />
  </v-app>
</template>

<script
  setup
  lang="ts"
>
const { user, logout } = useAuth()
const drawer = ref(false)
</script>
