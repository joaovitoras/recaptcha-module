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

      <button type="submit">
        Sign In
      </button>
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

  async mounted() {
    try {
      await this.$recaptcha.init()
    }
    catch (e) {
      console.log(e)
    }
  },

  methods: {
    async onSubmit() {
      try {
        const token = await this.$recaptcha.execute('login')
        console.log('ReCaptcha token:', token)
      }
      catch (error) {
        console.log('Login error:', error)
      }
    },
  },
}
</script>
