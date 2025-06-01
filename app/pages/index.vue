<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h1 class="text-h4">Dashboard</h1>
          </v-card-title>
          <v-card-text>
            <p>Benvenuto nella tua dashboard, {{ user?.username }}!</p>
            <p>Questa è la pagina principale dell'applicazione autenticata.</p>
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
            Statistiche
          </v-card-title>
          <v-card-text>
            <p>Qui potresti mostrare grafici e statistiche.</p>
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
            Notifiche
          </v-card-title>
          <v-card-text>
            <p>Qui potresti mostrare le notifiche recenti.</p>
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
// Applica il middleware di autenticazione
definePageMeta({
  middleware: 'auth'
})

const { user } = useAuth()
</script>
