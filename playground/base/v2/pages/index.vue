<template>
  <section class="index-page">
    <h2>Sign In</h2>

    <form @submit.prevent="onSubmit">
      <input
        v-model="email"
        autocomplete="true"
        placeholder="Email"
        type="email"
      >

      <input
        v-model="password"
        autocomplete="current-password"
        placeholder="Password"
        type="password"
      >

      <RecaptchaNuxt
        @error="onError"
        @success="onSuccess"
        @expired="onExpired"
      />

      <button type="submit">
        Sign In
      </button>
      <nuxt-link :to="{ name: 'about' }">
        About
      </nuxt-link>
    </form>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    email: 'test@example.com',
    password: '123',
  }),

  methods: {
    onError(error) {
      console.log('Error happened:', error)
    },

    async onSubmit() {
      try {
        const token = await this.$recaptcha.getResponse()

        const response = await $fetch('/api/check-token', {
          method: 'POST',
          body: {
            token,
            email: this.email,
            password: this.password,
          },
        })

        console.log('Server Response: ', response)

        await this.$recaptcha.reset()
      }
      catch (error) {
        console.log('Login error:', error)
      }
    },

    onSuccess(token) {
      console.log('Succeeded:', token)
    },

    onExpired() {
      console.log('Expired')
    },
  },
}
</script>
