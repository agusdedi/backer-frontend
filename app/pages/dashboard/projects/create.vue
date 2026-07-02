<script setup lang="ts">
import Footer from '../../../components/Footer.vue';
import Navbar from '../../../components/Navbar.vue';

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
            <h3 class="mb-4 text-2xl text-gray-900">Create New Projects</h3>
          </div>
          <div class="w-1/4 text-right">
            <a
              href="/dashboard/detail.html"
              class="inline-flex items-center px-4 py-1 font-bold text-white rounded bg-green-button hover:bg-green-button"
            >
              Save
            </a>
          </div>
        </div>
        <div class="block mb-2">
          <div class="w-full mb-4 lg:max-w-full lg:flex">
            <div
              class="flex flex-col justify-between w-full p-8 leading-normal bg-white border border-gray-400 rounded"
            >
              <form class="w-full">
                <div class="flex flex-wrap mb-6 -mx-3">
                  <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                    <label
                      class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    >
                      Campaign Name
                    </label>
                    <input
                      class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Contoh: Demi Gunpla Demi Istri"
                    />
                  </div>
                  <div class="w-full px-3 md:w-1/2">
                    <label
                      class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    >
                      Price
                    </label>
                    <input
                      class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                      type="number"
                      placeholder="Contoh: 200000"
                    />
                  </div>
                  <div class="w-full px-3">
                    <label
                      class="block mt-3 mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    >
                      Short Description
                    </label>
                    <input
                      class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Deskripsi singkat mengenai projectmu"
                    />
                  </div>
                  <div class="w-full px-3">
                    <label
                      class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    >
                      What will backers get
                    </label>
                    <input
                      class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Contoh: Ayam, Nasi Goreng, Piring"
                    />
                  </div>
                  <div class="w-full px-3">
                    <label
                      class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    >
                      Description
                    </label>
                    <textarea
                      class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Isi deskripsi panjang untuk projectmu"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div class="-mt-20 cta-clip"></div>
      <section class="pt-64 pb-10 call-to-action bg-purple-progress"></section>
      <Footer />
    </div>
</template>