<script setup lang="ts">
import Footer from '../../../../components/Footer.vue'
import Navbar from '../../../../components/Navbar.vue'

interface CampaignImage {
  image_url: string
}

interface CampaignData {
  id: number
  name: string
  short_description: string
  description: string
  goal_amount: number
  perks: string[]
  images: CampaignImage[]
}

interface CampaignResponse {
  meta: { message: string; code: number; status: string }
  data: CampaignData
}

interface CampaignTransaction {
  id: number
  name: string
  amount: number
  status: string
  created_at: string
}

interface CampaignTransactionsResponse {
  meta: { message: string; code: number; status: string }
  data: CampaignTransaction[]
}

definePageMeta({
  middleware: 'sidebase-auth',
})

const route = useRoute()
const config = useRuntimeConfig()
const { token } = useAuth()

const { data: campaign, refresh: refreshCampaign } = await useAsyncData(
  'dashboard-campaign-detail',
  () =>
    $fetch<CampaignResponse>(`/campaigns/${route.params.id}`, {
      baseURL: config.public.apiBase,
      headers: {
        Authorization: token.value ?? '',
      },
    }),
)

const { data: transactions } = await useAsyncData('dashboard-campaign-transactions', () =>
  $fetch<CampaignTransactionsResponse>(`/campaigns/${route.params.id}/transactions`, {
    baseURL: config.public.apiBase,
    headers: {
      Authorization: token.value ?? '',
    },
  }),
)

const fileInput = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const isUploading = ref(false)
const uploadError = ref('')

const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png'])
const MAX_SIZE_BYTES = 2 * 1024 * 1024 // 2MB

function selectFile() {
  const file = fileInput.value?.files?.item(0)
  uploadError.value = ''

  if (!file) {
    selectedFile.value = null
    return
  }

  if (!ALLOWED_TYPES.has(file.type)) {
    uploadError.value = 'Only JPG and PNG files are allowed.'
    selectedFile.value = null
    if (fileInput.value) fileInput.value.value = ''
    return
  }

  if (file.size > MAX_SIZE_BYTES) {
    uploadError.value = 'File size must not exceed 2MB.'
    selectedFile.value = null
    if (fileInput.value) fileInput.value.value = ''
    return
  }

  selectedFile.value = file
}

async function upload() {
  if (!selectedFile.value) {
    uploadError.value = 'Please choose a file first.'
    return
  }

  isUploading.value = true
  uploadError.value = ''

  const formData = new FormData()
  formData.append('campaign_id', String(route.params.id))
  formData.append('file', selectedFile.value)
  formData.append('is_primary', 'true')

  try {
    await $fetch('/campaign-images', {
      baseURL: config.public.apiBase,
      method: 'POST',
      body: formData,
      headers: {
        Authorization: token.value ?? '',
      },
    })

    await refreshCampaign()
    selectedFile.value = null
    if (fileInput.value) fileInput.value.value = ''
  } catch (error: any) {
    uploadError.value = error?.data?.meta?.message || 'Failed to upload image, please try again.'
  } finally {
    isUploading.value = false
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
    <section class="container pt-8 mx-auto">
      <div class="flex items-center justify-between">
        <div class="w-full mr-6">
          <h2 class="mb-2 text-4xl font-medium text-gray-900">Dashboard</h2>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="w-3/4 mr-6">
          <h3 class="mb-4 text-2xl text-gray-900">Campaign Details</h3>
        </div>
        <div class="w-1/4 text-right">
          <nuxt-link
            :to="{
              name: 'dashboard-projects-id-edit',
              params: { id: route.params.id },
            }"
            class="inline-flex items-center px-4 py-1 font-bold text-white rounded bg-green-button hover:bg-green-button"
          >
            Edit
          </nuxt-link>
        </div>
      </div>
      <div class="block mb-2">
        <div class="w-full mb-4 lg:max-w-full lg:flex">
          <div
            class="flex flex-col justify-between w-full p-8 leading-normal bg-white border border-gray-400 rounded"
          >
            <div>
              <div class="mb-2 text-xl font-bold text-gray-900">{{ campaign?.data.name }}</div>
              <p class="flex items-center mb-1 text-sm font-bold">Short Description</p>
              <p class="text-base text-gray-700">
                {{ campaign?.data.short_description }}
              </p>
              <p class="flex items-center mt-3 mb-1 text-sm font-bold">Description</p>
              <p class="text-base text-gray-700">
                {{ campaign?.data.description }}
              </p>
              <p class="flex items-center mt-4 mb-1 text-sm font-bold">What Will Funders Get</p>
              <ul class="ml-5 list-disc">
                <li v-for="perk in campaign?.data.perks ?? []" :key="perk">{{ perk }}</li>
              </ul>
              <p class="flex items-center mt-4 mb-1 text-sm font-bold">Price</p>
              <p class="text-4xl text-gray-700">
                {{ new Intl.NumberFormat('id-ID').format(campaign?.data.goal_amount ?? 0) }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="w-2/4 mr-6">
          <h3 class="mt-5 mb-4 text-2xl text-gray-900">Gallery</h3>
        </div>
        <div class="flex items-center justify-end w-2/4 gap-2 text-right">
          <label for="campaign-image-file" class="sr-only">Choose image file</label>
          <input
            id="campaign-image-file"
            ref="fileInput"
            type="file"
            accept="image/png, image/jpeg"
            @change="selectFile"
            class="p-1 overflow-hidden border rounded"
          />
          <button
            @click="upload"
            :disabled="isUploading"
            class="inline-flex items-center px-4 py-2 font-bold text-white rounded bg-green-button hover:bg-green-button disabled:opacity-50"
          >
            {{ isUploading ? 'Uploading...' : 'Upload' }}
          </button>
        </div>
      </div>
      <p v-if="uploadError" class="mb-3 text-sm text-red-600">{{ uploadError }}</p>
      <div class="grid grid-cols-4 gap-4 -mx-2">
        <div
          v-for="image in campaign?.data.images ?? []"
          :key="image.image_url"
          class="relative w-full p-2 m-2 bg-white border border-gray-400 rounded"
        >
          <figure class="item-thumbnail">
            <img :src="image.image_url" alt="" class="w-full rounded" />
          </figure>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="w-3/4 mr-6">
          <h3 class="mt-5 mb-4 text-2xl text-gray-900">Transaction History</h3>
        </div>
      </div>
      <div class="block mb-2">
        <div
          class="w-full mb-4 lg:max-w-full lg:flex"
          v-for="transaction in transactions?.data ?? []"
          :key="transaction.id"
        >
          <div
            class="flex flex-col justify-between w-full p-8 leading-normal bg-white border border-gray-400 rounded lg:border-gray-400"
          >
            <div>
              <div class="mb-1 text-xl font-bold text-gray-900">
                {{ transaction.name }}
              </div>
              <p class="flex items-center mb-2 text-sm text-gray-600">
                Rp. {{ new Intl.NumberFormat('id-ID').format(transaction.amount) }} &middot;
                {{ transaction.created_at }} &middot;
                <span
                  :class="{
                    'text-green-600': transaction.status === 'paid',
                    'text-yellow-600': transaction.status === 'pending',
                    'text-red-600': transaction.status === 'cancelled',
                  }"
                  class="ml-1 font-semibold"
                >
                  {{ transaction.status }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="-mt-20 cta-clip"></div>
    <section class="pt-64 pb-10 call-to-action bg-purple-progress"></section>
    <Footer />
  </div>
</template>
