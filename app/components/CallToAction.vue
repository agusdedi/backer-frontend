<template>
    <section class="pt-64 pb-10 call-to-action bg-purple-progress">
        <div class="container mx-auto">
          <div class="w-full text-center">
            <h1 class="text-5xl font-semibold text-white">
              Easy way to funding
              <br />
              best idea and innovation
            </h1>
            <button
              @click="$router.push({ path: '/register' })"
              class="inline-block px-6 py-4 mt-8 text-lg font-semibold text-white rounded-full bg-orange-button hover:bg-green-button"
            >
              Getting Start
            </button>
          </div>
        </div>
      </section>
</template>