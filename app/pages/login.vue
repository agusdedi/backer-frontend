<script setup>
definePageMeta({
  layout: 'auth',
})
const { signIn, getSession } = useAuth()
const login = reactive({
  email: '',
  password: '',
})
async function userLogin() {
  try {
    const result = await signIn(
      { email: login.email, password: login.password },
      { redirect: false },
    )
    console.log('signIn result:', result)
    await getSession()
    const { status, data } = useAuth()
    console.log('Auth status:', status.value)
    console.log('Auth data:', data.value)
    if (status.value === 'authenticated') {
      await navigateTo('/dashboard')
    } else {
      console.error('Login berhasil tapi sesi gagal terbentuk')
    }
  } catch (error) {
    console.error('Login gagal:', error)
  }
}
</script>
<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="hidden h-screen bg-white rounded-tr-lg rounded-br-lg lg:block lg:w-1/3 auth-background"
    ></div>
    <div class="flex items-center justify-center w-full lg:w-2/3">
      <div class="w-full px-6 sm:px-10 lg:w-1/2 lg:px-0">
        <h2 class="mb-6 text-3xl font-normal text-white">Sign In to Your Account</h2>
        <div class="mb-6">
          <div class="mb-4">
            <label for="login-email" class="block mb-3 text-lg font-normal text-white"
              >Email Address</label
            >
            <input
              id="login-email"
              type="email"
              v-model="login.email"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write your email address here"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-4">
            <label for="login-password" class="block mb-3 text-lg font-normal text-white"
              >Password</label
            >
            <input
              id="login-password"
              @keyup.enter="userLogin"
              type="password"
              v-model="login.password"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write your password here"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-4">
            <button
              type="button"
              @click="userLogin"
              class="block w-full px-6 py-4 text-lg font-semibold text-white rounded-full bg-orange-button hover:bg-green-button"
            >
              Sign In
            </button>
          </div>
        </div>
        <div class="text-center">
          <p class="text-white text-md">
            Don't have account?
            <nuxt-link to="/register" class="no-underline text-orange-button"> Sign Up </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.auth-background {
  background-image: url('/sign-in-background.jpg');
  background-position: center;
  background-size: cover;
}
</style>
