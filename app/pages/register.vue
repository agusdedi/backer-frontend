<template>
    <div class="flex items-center justify-center h-screen">
        <div
          class="hidden h-full bg-white rounded-tr-lg rounded-br-lg md:block lg:w-1/3 auth-background"
        ></div>
        <div class="flex items-center justify-center w-auto md:w-2/4 lg:w-2/3">
          <div class="w-full px-10 lg:w-1/2 lg:px-0">
            <h2 class="mb-6 text-3xl font-normal text-white">
              Sign Up Account
            </h2>
            <div class="mb-6">
              <div class="mb-4">
                <label class="block mb-3 text-lg font-normal text-white"
                  >Full Name</label
                >
                <input
                  type="text"
                  class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                  placeholder="Write Your Name Here"
                  value="Julia Keeva Hanna"
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <label class="block mb-3 text-lg font-normal text-white"
                  >Occupation</label
                >
                <input
                  type="text"
                  class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                  placeholder="Write your occupation here"
                  value="Graphic Designer"
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <label class="block mb-3 text-lg font-normal text-white"
                  >Email Address</label
                >
                <input
                  type="email"
                  class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                  placeholder="Write your email address here"
                  value="julia.keeva@gmail.com"
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <label class="block mb-3 text-lg font-normal text-white"
                  >Password</label
                >
                <input
                  type="password"
                  class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                  placeholder="Type your password here"
                  value="nasigorenglimaribbu"
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <button
                  @click="$router.push({ path: '/upload' })"
                  class="block w-full px-6 py-4 text-lg font-semibold text-white rounded-full bg-orange-button hover:bg-green-button"
                >
                  Continue Sign Up
                </button>
              </div>
            </div>
            <div class="text-center">
              <p class="text-white text-md">
                Already have account?
                <nuxt-link to="/login" class="no-underline text-orange-button">
                  Sign In
                </nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth'
})
</script>

<style scoped>
      .auth-background {
        background-image: url("/sign-up-background.jpg");
        background-position: center;
        background-size: cover;
      }
    </style>