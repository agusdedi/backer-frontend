<template>
  <div class="container flex items-center justify-center h-screen mx-auto">
    <div class="w-full px-10 lg:w-1/3 lg:px-0">
      <div class="flex items-center justify-center mx-auto mt-6 mb-8">
        <img src="/funded-illustration.svg" alt="" class="w-auto" />
      </div>
      <h2 class="mb-3 text-3xl font-medium text-center">Yeay! You are super</h2>
      <p class="font-light text-center">
        Your money has ben transferred
        <br />
        into company's account
      </p>
      <div class="mt-6 mb-4">
        <div class="mb-3">
          <button
            type="button"
            @click="$router.push({ path: '/' })"
            class="block w-full px-6 py-4 text-lg font-semibold text-white rounded-full bg-orange-button hover:bg-green-button"
          >
            Fund Other Project
          </button>
        </div>
        <div class="mb-4">
          <button
            type="button"
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
const route = useRoute()
const status = route.query.transaction_status

// Midtrans always redirects every transaction outcome (success/failed/pending)
// to the same Finish URL, so this page sorts the display based on the
// transaction_status query param.
if (status === 'deny' || status === 'cancel') {
  await navigateTo('/transaction/error')
} else if (status === 'pending') {
  await navigateTo('/transaction/unfinish')
}
// If settlement/capture (or no status sent at all), keep showing this page

definePageMeta({
  layout: 'success',
})
</script>
