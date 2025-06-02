<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h1 class="text-h4">Dashboard</h1>
          </v-card-title>
          <v-card-text>
            <p>Welcome to your dashboard, {{ user?.username }}!</p>
            <p>This is the main page of the authenticated application.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-title>
            <v-icon class="mr-2">mdi-chart-line</v-icon>
            Statistics
          </v-card-title>
          <v-card-text>
            <p>Here you could show charts and statistics.</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-title>
            <v-icon class="mr-2">mdi-bell</v-icon>
            Notifications
          </v-card-title>
          <v-card-text>
            <p>Here you could show recent notifications.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script
  setup
  lang="ts"
>
// Apply authentication middleware
definePageMeta({
  middleware: 'auth'
})

const { user } = useAuth()
</script>
