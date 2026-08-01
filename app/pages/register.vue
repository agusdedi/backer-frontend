<script setup>
definePageMeta({
  layout: 'auth',
})

const { signIn } = useAuth()

const register = reactive({
  name: '',
  occupation: '',
  email: '',
  password: '',
})

async function userRegister() {
  try {
    await $fetch('/users', {
      baseURL: useRuntimeConfig().public.apiBase,
      method: 'POST',
      body: register,
    })

    // Setelah register berhasil, langsung login otomatis
    await signIn({ email: register.email, password: register.password }, { redirect: false })

    await navigateTo('/upload')
  } catch (error) {
    console.error('Register gagal:', error)
  }
}
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="hidden h-full bg-white rounded-tr-lg rounded-br-lg md:block lg:w-1/3 auth-background"
    ></div>
    <div class="flex items-center justify-center w-auto md:w-2/4 lg:w-2/3">
      <div class="w-full px-10 lg:w-1/2 lg:px-0">
        <h2 class="mb-6 text-3xl font-normal text-white">Sign Up Account</h2>
        <div class="mb-6">
          <div class="mb-4">
            <label for="register-name" class="block mb-3 text-lg font-normal text-white"
              >Full Name</label
            >
            <input
              id="register-name"
              type="text"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write Your Name Here"
              v-model="register.name"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-4">
            <label for="register-occupation" class="block mb-3 text-lg font-normal text-white"
              >Occupation</label
            >
            <input
              id="register-occupation"
              type="text"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write your occupation here"
              v-model="register.occupation"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-4">
            <label for="register-email" class="block mb-3 text-lg font-normal text-white"
              >Email Address</label
            >
            <input
              id="register-email"
              type="email"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write your email address here"
              v-model="register.email"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-4">
            <label for="register-password" class="block mb-3 text-lg font-normal text-white"
              >Password</label
            >
            <input
              id="register-password"
              type="password"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Type your password here"
              v-model="register.password"
              @keyup.enter="userRegister"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-4">
            <button
              @click="userRegister"
              class="block w-full px-6 py-4 text-lg font-semibold text-white rounded-full bg-orange-button hover:bg-green-button"
            >
              Continue Sign Up
            </button>
          </div>
        </div>
        <div class="text-center">
          <p class="text-white text-md">
            Already have account?
            <nuxt-link to="/login" class="no-underline text-orange-button"> Sign In </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-background {
  background-image: url('/sign-up-background.jpg');
  background-position: center;
  background-size: cover;
}
</style>
