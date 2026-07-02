<script setup lang="ts">
import Footer from '../../components/Footer.vue';
import Navbar from '../../components/Navbar.vue';

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
                <nuxt-link
                  class="font-bold text-gray-800"
                  to="/dashboard/index"
                >
                  Your Projects
                </nuxt-link>
              </li>
              <li class="mr-6">
                <nuxt-link
                  class="text-gray-500 hover:text-gray-800"
                  to="/dashboard/transactions"
                >
                  Your Transactions
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="w-1/4 text-right">
            <nuxt-link
              to="/dashboard/create"
              class="inline-flex items-center px-4 py-4 font-bold text-white rounded bg-orange-button hover:bg-green-button"
            >
              + Create Campaign
            </nuxt-link>
          </div>
        </div>
        <hr />
        <div class="block mb-2">
          <div class="w-full mb-4 lg:max-w-full lg:flex" v-for="i in 5" :key="i">
            <div
              class="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
              style="
                background-image: url('/project-thumbnail-3.jpg');
              "
            ></div>
            <div
              class="flex flex-col justify-between p-8 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r"
            >
              <div class="mb-8">
                <div class="mb-1 text-xl font-bold text-gray-900">
                  Cari Uang Buat Gunpla
                </div>
                <p class="flex items-center mb-2 text-sm text-gray-600">
                  Rp. 200.000.000 &middot; 80%
                </p>
                <p class="text-base text-gray-700">
                  With N-key rollover (NKRO on wired mode only) you can register
                  as many keys as you can press at once without missing out
                  characters. It allows to use all the same media keys as
                  conventional macOS.
                </p>
              </div>
              <div class="flex items-center">
                <nuxt-link
                  :to="'/dashboard/projects/' + i"
                  class="px-4 py-2 text-white rounded bg-green-button"
                >
                  Detail
                </nuxt-link>
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