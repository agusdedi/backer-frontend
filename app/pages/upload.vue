<template>
    <div class="container flex items-center justify-center h-screen mx-auto">
        <div class="w-full px-10 lg:w-1/3 lg:px-0">
          <div class="flex items-center justify-center w-40 mx-auto mb-4">
            <div class="relative">
              <a href="#">
                <img
                  src="/avatar.jpg"
                  alt=""
                  class="border-4 border-white rounded-full"
                />
                <img
                  src="/icon-avatar-add.svg"
                  alt=""
                  class="absolute bottom-0 right-0 pb-2"
                />
              </a>
            </div>
          </div>
          <h2 class="mb-3 text-3xl font-normal text-center text-white">
            Hi, Julia
          </h2>
          <p class="font-light text-center text-white">
            Please upload your selfie
          </p>
          <div class="mt-6 mb-4">
            <div class="mb-3">
              <button
                @click="$router.push({ path: '/register-success' })"
                class="block w-full px-6 py-4 text-lg font-semibold text-white rounded-full bg-orange-button hover:bg-green-button"
              >
                Sign Up Now
              </button>
            </div>
          </div>
          <div>
            <div class="mb-4">
              <button
                @click="$router.push({ path: '/register-success' })"
                class="block w-full px-6 py-4 text-lg font-light text-white bg-transparent border border-white rounded-full hover:bg-white hover:bg-opacity-25"
              >
                Skip
              </button>
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