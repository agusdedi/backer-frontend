<template>
  <section class="px-5 pt-32 pb-10 sm:pt-48 lg:pt-64 call-to-action bg-purple-progress">
    <div class="container mx-auto">
      <div class="w-full text-center">
        <h1 class="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          Easy way to funding
          <br />
          best idea and innovation
        </h1>
        <button
          @click="$router.push({ path: '/register' })"
          class="inline-block px-6 py-3 mt-8 text-lg font-semibold text-white rounded-full sm:py-4 bg-orange-button hover:bg-green-button"
        >
          Getting Start
        </button>
      </div>
    </div>
  </section>
</template>
