<template>
  <div>
    <v-form
      ref="form"
      @submit.prevent="handleLogin"
    >      <v-text-field
        v-model="email"
        label="Email"
        prepend-icon="mdi-email"
        type="email"
        :rules="[rules.required, rules.email]"
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
      </v-alert>      <v-btn
        type="submit"
        color="primary"
        block
        size="large"
        :loading="loading"
        class="mt-4"
      >
        Login
      </v-btn>
    </v-form>

    <v-divider class="my-4" />    <!-- Quick Login Buttons -->
    <div class="d-flex flex-column gap-2">
      <v-btn
        color="secondary"
        variant="outlined"
        block
        :disabled="loading"
        @click="quickLogin('demo')"
      >
        Login as Demo User
      </v-btn>
      <v-btn
        color="info"
        variant="outlined"
        block
        :disabled="loading"
        @click="quickLogin('guest')"
      >
        Login as Guest
      </v-btn>
    </div>

    <v-divider class="my-4" /><v-card-text class="text-center">
      <p class="text-caption mb-2">
        Demo user: <strong>demo@example.com</strong> / <strong>demo</strong>
      </p>
      <p class="text-caption">
        Guest user: <strong>guest@example.com</strong> / <strong>guest</strong>
      </p>
    </v-card-text>
  </div>
</template>

<script
  setup
  lang="ts"
>
// Use guest layout for this page
definePageMeta({
  layout: 'guest'
})

const { login } = useAuth()

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

const rules = {
  required: (value: string) => !!value || 'Required field',
  email: (value: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(value) || 'Please enter a valid email address'
  }
}

const handleLogin = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const result = await login(email.value, password.value)
    if (!result.success) {
      errorMessage.value = result.error || 'Login error'
    }
  } catch (error) {
    console.error('Login error:', error)
    errorMessage.value = 'Login error'
  } finally {
    loading.value = false
  }
}

const quickLogin = async (userType: 'demo' | 'guest') => {
  if (userType === 'demo') {
    email.value = 'demo@example.com'
    password.value = 'demo'
  } else if (userType === 'guest') {
    email.value = 'guest@example.com'
    password.value = 'guest'
  }
  await handleLogin()
}
</script>
