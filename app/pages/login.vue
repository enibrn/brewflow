<template>
  <div>
    <v-form
      ref="form"
      @submit.prevent="handleLogin"
    >
      <v-text-field
        v-model="username"
        label="Username"
        prepend-icon="mdi-account"
        :rules="[rules.required]"
        required
      />

      <v-text-field
        v-model="password"
        label="Password"
        prepend-icon="mdi-lock"
        type="password"
        :rules="[rules.required]"
        required
      />

      <v-alert
        v-if="errorMessage"
        type="error"
        class="mb-4"
      >
        {{ errorMessage }}
      </v-alert>

      <v-btn
        type="submit"
        color="primary"
        block
        size="large"
        :loading="loading"
        class="mt-4"
      >
        Accedi
      </v-btn>
    </v-form>

    <v-divider class="my-4" />

    <v-card-text class="text-center">
      <p class="text-caption">
        Usa <strong>demo</strong> come username e password per accedere
      </p>
    </v-card-text>
  </div>
</template>

<script
  setup
  lang="ts"
>
// Usa il layout guest per questa pagina
definePageMeta({
  layout: 'guest'
})

const { login } = useAuth()

const username = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

const rules = {
  required: (value: string) => !!value || 'Campo obbligatorio'
}

const handleLogin = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    const result = await login(username.value, password.value)
    if (!result.success) {
      errorMessage.value = result.error || 'Errore durante il login'
    }
  } catch (error) {
    console.error('Login error:', error)
    errorMessage.value = 'Errore durante il login'
  } finally {
    loading.value = false
  }
}
</script>
