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
            <h3 class="mb-4 text-2xl text-gray-900">Campaign Details</h3>
          </div>
          <div class="w-1/4 text-right">
            <nuxt-link
              to="/dashboard/projects/create"
              class="inline-flex items-center px-4 py-1 font-bold text-white rounded bg-green-button hover:bg-green-button"
            >
              Edit
            </nuxt-link>
          </div>
        </div>
        <div class="block mb-2">
          <div class="w-full mb-4 lg:max-w-full lg:flex">
            <div
              class="flex flex-col justify-between p-8 leading-normal bg-white border border-gray-400 rounded"
            >
              <div>
                <div class="mb-2 text-xl font-bold text-gray-900">
                  Cari Uang Buat Gunpla
                </div>
                <p class="flex items-center mb-1 text-sm font-bold">
                  Description
                </p>
                <p class="text-base text-gray-700">
                  Designed to fit your dedicated typing experience. No matter
                  what you like, linear, clicky or a little in between, we’ve
                  got you covered with three Gateron switches options (Blue,
                  Brown, Red). With a lifespan of 50 million keystroke lifespan
                  we want to make sure that you experience same feedback for
                  every keystroke.
                </p>
                <p class="text-base text-gray-700">
                  With N-key rollover (NKRO on wired mode only) you can register
                  as many keys as you can press at once without missing out
                  characters. It allows to use all the same media keys as
                  conventional macOS.
                </p>
                <p class="flex items-center mt-4 mb-1 text-sm font-bold">
                  What Will Funders Get
                </p>
                <ul class="ml-5 list-disc">
                  <li>Equity of the startup directly from the founder</li>
                  <li>Special service or product that startup has</li>
                  <li>
                    You can also sell your equity once the startup going IPO
                  </li>
                </ul>
                <p class="flex items-center mt-4 mb-1 text-sm font-bold">
                  Price
                </p>
                <p class="text-base text-4xl text-gray-700">200.000</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="w-3/4 mr-6">
            <h3 class="mt-5 mb-4 text-2xl text-gray-900">Gallery</h3>
          </div>
          <div class="w-1/4 text-right">
            <a
              href="#"
              class="inline-flex items-center px-4 py-1 font-bold text-white rounded bg-green-button hover:bg-green-button"
            >
              Upload
            </a>
          </div>
        </div>
        <div class="flex -mx-2">
          <div
            class="relative w-1/4 p-2 m-2 bg-white border border-gray-400 rounded"
          >
            <figure class="item-thumbnail">
              <img src="/project-slider-1.jpg" alt="" class="w-full rounded" />
            </figure>
          </div>
          <div
            class="relative w-1/4 p-2 m-2 bg-white border border-gray-400 rounded"
          >
            <figure class="item-thumbnail">
              <img src="/project-slider-2.jpg" alt="" class="w-full rounded" />
            </figure>
          </div>
          <div
            class="relative w-1/4 p-2 m-2 bg-white border border-gray-400 rounded"
          >
            <figure class="item-thumbnail">
              <img src="/project-slider-3.jpg" alt="" class="w-full rounded" />
            </figure>
          </div>
          <div
            class="relative w-1/4 p-2 m-2 bg-white border border-gray-400 rounded"
          >
            <figure class="item-thumbnail">
              <img src="/project-slider-4.jpg" alt="" class="w-full rounded" />
            </figure>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="w-3/4 mr-6">
            <h3 class="mt-5 mb-4 text-2xl text-gray-900">
              Transaction History
            </h3>
          </div>
        </div>
        <div class="block mb-2">
          <div class="w-full mb-4 lg:max-w-full lg:flex">
            <div
              class="flex flex-col justify-between w-full p-8 leading-normal bg-white border border-gray-400 rounded lg:border-gray-400"
            >
              <div>
                <div class="mb-1 text-xl font-bold text-gray-900">
                  Galih Pratama
                </div>
                <p class="flex items-center mb-2 text-sm text-gray-600">
                  Rp. 200.000 &middot; 12 September 2020
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