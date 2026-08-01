<script setup lang="ts">
import Footer from '../../components/Footer.vue'
import Navbar from '../../components/Navbar.vue'

interface Campaign {
  id: number
  name: string
  short_description: string
  image_url: string
  goal_amount: number
  current_amount: number
}

interface CampaignsResponse {
  meta: {
    message: string
    code: number
    status: string
  }
  data: Campaign[]
}

definePageMeta({
  middleware: 'sidebase-auth',
})

const config = useRuntimeConfig()
const { data: authData, token } = useAuth()

const { data: campaigns } = await useAsyncData('user-campaigns', () =>
  $fetch<CampaignsResponse>('/campaigns', {
    baseURL: config.public.apiBase,
    query: { user_id: (authData.value as any)?.id },
    headers: {
      Authorization: token.value ?? '',
    },
  }),
)
</script>

<template>
  <div class="project-page">
    <section class="pt-5 dashboard-header">
      <div class="container relative mx-auto">
        <Navbar />
      </div>
    </section>
    <section class="container pt-8 mx-auto">
      <div class="flex items-center justify-between mb-6">
        <div class="w-3/4 mr-6">
          <h2 class="mb-2 text-4xl font-medium text-gray-900">Dashboard</h2>
          <ul class="flex mt-2">
            <li class="mr-6">
              <nuxt-link class="font-bold text-gray-800" to="/dashboard/index">
                Your Projects
              </nuxt-link>
            </li>
            <li class="mr-6">
              <nuxt-link class="text-gray-500 hover:text-gray-800" to="/dashboard/transactions">
                Your Transactions
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-1/4 text-right">
          <nuxt-link
            to="/dashboard/projects/create"
            class="inline-flex items-center px-4 py-4 font-bold text-white rounded bg-orange-button hover:bg-green-button"
          >
            + Create Campaign
          </nuxt-link>
        </div>
      </div>
      <hr />
      <div class="block mb-2">
        <div
          class="w-full mb-4 lg:max-w-full lg:flex"
          v-for="campaign in campaigns?.data ?? []"
          :key="campaign.id"
        >
          <div
            class="flex-none h-48 overflow-hidden text-center bg-cover border rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
            :style="{
              backgroundColor: '#bbb',
              backgroundPosition: 'center',
              backgroundImage: `url('${campaign.image_url}')`,
            }"
          ></div>
          <nuxt-link
            :to="'/dashboard/projects/' + campaign.id"
            class="flex flex-col justify-between w-full p-8 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r"
          >
            <div class="mb-8">
              <div class="mb-1 text-xl font-bold text-gray-900">{{ campaign.name }}</div>
              <p class="flex items-center mb-2 text-sm text-gray-600">
                Rp. {{ new Intl.NumberFormat('id-ID').format(campaign.goal_amount) }} &middot;
                {{ Math.round((campaign.current_amount / campaign.goal_amount) * 100) }}%
              </p>
              <p class="text-base text-gray-700">
                {{ campaign.short_description }}
              </p>
            </div>
            <div class="flex items-center">
              <button class="px-4 py-2 text-white rounded bg-green-button">Detail</button>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
    <div class="-mt-20 cta-clip"></div>
    <section class="pt-64 pb-10 call-to-action bg-purple-progress"></section>
    <Footer />
  </div>
</template>
