<template>
    <div class="container flex items-center justify-center h-screen mx-auto">
        <div class="w-full px-10 lg:w-1/3 lg:px-0">
          <div class="flex items-center justify-center mx-auto mt-6 mb-8">
            <img src="/funded-illustration.svg" alt="" class="w-full" />
          </div>
          <h2 class="mb-3 text-3xl font-medium text-center">
            Yeay! You are super
          </h2>
          <p class="font-light text-center">
            Your money has ben transferred
            <br />
            into company's account
          </p>
          <div class="mt-6 mb-4">
            <div class="mb-3">
              <button
                @click="$router.push({ path: '/' })"
                class="block w-full px-6 py-4 text-lg font-semibold text-white rounded-full bg-orange-button hover:bg-green-button"
              >
                Fund Other Project
              </button>
            </div>
            <div class="mb-4">
              <button
                @click="$router.push({ path: '/dashboard' })"
                class="block w-full px-6 py-4 text-lg font-light text-gray-500 bg-transparent border border-gray-500 rounded-full hover:bg-green-button hover:border-green-button hover:text-white"
              >
                My Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
definePageMeta({
  layout: 'success'
})
</script>