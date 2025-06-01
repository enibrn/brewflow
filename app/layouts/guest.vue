<template>
  <v-app>
    <v-main>
      <!-- Hero Section per Login/Register -->
      <v-container
        fluid
        class="fill-height"
      >
        <v-row
          justify="center"
          align="center"
          class="fill-height"
        >
          <v-col
            cols="12"
            sm="8"
            md="6"
            lg="4"
          >
            <v-card class="elevation-8">
              <v-card-title class="text-center pa-6">
                <h1 class="text-h4">Flowless</h1>
                <p class="text-subtitle-1 mt-2">Benvenuto nella tua app</p>
              </v-card-title>
              <v-card-text class="pa-6">
                <slot />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script
  setup
  lang="ts"
>
// Layout per pagine non autenticate (login, register, ecc.)
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
