<script setup lang="ts">
import Footer from '../../../../components/Footer.vue'
import Navbar from '../../../../components/Navbar.vue'

interface CampaignData {
  id: number
  name: string
  short_description: string
  description: string
  goal_amount: number
  perks: string[]
}

interface CampaignResponse {
  meta: { message: string; code: number; status: string }
  data: CampaignData
}

definePageMeta({
  middleware: 'sidebase-auth',
})

const route = useRoute()
const config = useRuntimeConfig()
const { token } = useAuth()
const router = useRouter()

const { data: campaign } = await useAsyncData('edit-campaign-detail', () =>
  $fetch<CampaignResponse>(`/campaigns/${route.params.id}`, {
    baseURL: config.public.apiBase,
    headers: {
      Authorization: token.value ?? '',
    },
  }),
)

const form = reactive({
  name: campaign.value?.data.name ?? '',
  goal_amount: campaign.value?.data.goal_amount ?? 0,
  short_description: campaign.value?.data.short_description ?? '',
  perks: campaign.value?.data.perks?.join(', ') ?? '',
  description: campaign.value?.data.description ?? '',
})

const isSubmitting = ref(false)
const errorMessage = ref('')

async function save() {
  isSubmitting.value = true
  errorMessage.value = ''

  try {
    await $fetch(`/campaigns/${route.params.id}`, {
      baseURL: config.public.apiBase,
      method: 'PUT',
      body: {
        name: form.name,
        goal_amount: form.goal_amount,
        short_description: form.short_description,
        perks: form.perks,
        description: form.description,
      },
      headers: {
        Authorization: token.value ?? '',
      },
    })

    await router.push('/dashboard/projects/' + route.params.id)
  } catch (error: any) {
    errorMessage.value =
      error?.data?.meta?.message || 'Failed to update campaign, please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="project-page">
    <section class="pt-5 dashboard-header">
      <div class="container relative mx-auto">
        <Navbar />
      </div>
    </section>
    <section class="container px-5 pt-8 mx-auto lg:px-8">
      <div class="flex items-center justify-between">
        <div class="w-full">
          <h2 class="mb-2 text-3xl font-medium text-gray-900 sm:text-4xl">Dashboard</h2>
        </div>
      </div>
      <div class="mb-4">
        <h3 class="text-2xl text-gray-900 break-words">
          Edit Campaign "{{ campaign?.data.name }}"
        </h3>
      </div>

      <div v-if="errorMessage" class="p-4 mb-4 text-red-700 bg-red-100 rounded">
        {{ errorMessage }}
      </div>

      <div class="block mb-2">
        <div class="w-full mb-4 lg:max-w-full lg:flex">
          <div
            class="flex flex-col justify-between w-full p-8 leading-normal bg-white border border-gray-400 rounded"
          >
            <form class="w-full" @submit.prevent="save">
              <div class="flex flex-wrap mb-6 -mx-3">
                <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    for="campaign-name"
                    class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  >
                    Campaign Name
                  </label>
                  <input
                    id="campaign-name"
                    v-model="form.name"
                    class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="e.g. The Ultimate Mechanical Keyboard"
                  />
                </div>
                <div class="w-full px-3 md:w-1/2">
                  <label
                    for="campaign-price"
                    class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  >
                    Price
                  </label>
                  <input
                    id="campaign-price"
                    v-model.number="form.goal_amount"
                    class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    placeholder="e.g. 200000"
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    for="campaign-short-description"
                    class="block mt-3 mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  >
                    Short Description
                  </label>
                  <input
                    id="campaign-short-description"
                    v-model="form.short_description"
                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="A brief description of your project"
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    for="campaign-perks"
                    class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  >
                    What will backers get
                  </label>
                  <input
                    id="campaign-perks"
                    v-model="form.perks"
                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="e.g. Sticker, T-shirt, Early Access"
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    for="campaign-description"
                    class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  >
                    Description
                  </label>
                  <textarea
                    id="campaign-description"
                    v-model="form.description"
                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Write a detailed description of your project"
                  ></textarea>
                </div>
              </div>
              <div class="flex justify-end px-3 mt-2">
                <button
                  type="button"
                  @click="save"
                  :disabled="isSubmitting"
                  class="inline-flex items-center justify-center w-full px-4 py-3 font-bold text-white rounded bg-green-button hover:bg-green-button disabled:opacity-50 sm:w-auto"
                >
                  {{ isSubmitting ? 'Updating...' : 'Update' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div class="hidden -mt-20 cta-clip sm:block"></div>
    <section class="px-5 pt-32 pb-10 sm:pt-48 lg:pt-64 call-to-action bg-purple-progress"></section>
    <Footer />
  </div>
</template>
