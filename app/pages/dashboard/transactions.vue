<script setup lang="ts">
import Footer from '../../components/Footer.vue'
import Navbar from '../../components/Navbar.vue'

interface TransactionCampaign {
  name: string
  image_url: string
}

interface Transaction {
  id: number
  amount: number
  status: string
  created_at: string
  campaign: TransactionCampaign
}

interface TransactionsResponse {
  meta: {
    message: string
    code: number
    status: string
  }
  data: Transaction[]
}

definePageMeta({
  middleware: 'sidebase-auth',
})

const config = useRuntimeConfig()
const { token } = useAuth()

const { data: transactions } = await useAsyncData('user-transactions', () =>
  $fetch<TransactionsResponse>('/transactions', {
    baseURL: config.public.apiBase,
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
              <nuxt-link class="text-gray-500 hover:text-gray-800" to="/dashboard">
                Your Projects
              </nuxt-link>
            </li>
            <li class="mr-6">
              <nuxt-link class="font-bold text-gray-800" to="/dashboard/transactions">
                Your Transactions
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="block mb-2">
        <div
          class="w-full mb-4 lg:max-w-full lg:flex"
          v-for="transaction in transactions?.data ?? []"
          :key="transaction.id"
        >
          <div
            class="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
            :style="{
              backgroundColor: '#bbb',
              backgroundPosition: 'center',
              backgroundImage: `url('${transaction.campaign.image_url}')`,
            }"
          ></div>
          <div
            class="flex flex-col justify-between w-full p-8 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r"
          >
            <div>
              <div class="mb-1 text-xl font-bold text-gray-900">
                {{ transaction.campaign.name }}
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
