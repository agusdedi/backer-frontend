<script setup lang="ts">
import CallToAction from '../../components/CallToAction.vue';
import Footer from '../../components/Footer.vue';
import Navbar from '../../components/Navbar.vue';

</script>

<template>
    <div class="project-page">
      <section class="pt-5 project-header">
        <div class="container relative mx-auto">
          <Navbar />
        </div>
      </section>
      <section class="container mx-auto -mt-56 project-container">
        <div class="flex mt-3">
          <div class="w-3/4 mr-6">
            <div class="p-3 mb-3 bg-white border border-gray-400 rounded-20">
              <figure class="item-image">
                <img
                  src="/project-image.jpg"
                  alt=""
                  class="w-full rounded-20"
                />
              </figure>
            </div>
            <div class="flex -mx-2">
              <div
                class="relative w-1/4 p-2 m-2 bg-white border border-gray-400 rounded-20"
              >
                <figure class="item-thumbnail">
                  <img
                    src="/project-slider-1.jpg"
                    alt=""
                    class="w-full rounded-20"
                  />
                </figure>
              </div>
              <div
                class="relative w-1/4 p-2 m-2 bg-white border border-gray-400 rounded-20"
              >
                <figure class="item-thumbnail">
                  <img
                    src="/project-slider-2.jpg"
                    alt=""
                    class="w-full rounded-20"
                  />
                </figure>
              </div>
              <div
                class="relative w-1/4 p-2 m-2 bg-white border border-gray-400 rounded-20"
              >
                <figure class="item-thumbnail">
                  <img
                    src="/project-slider-3.jpg"
                    alt=""
                    class="w-full rounded-20"
                  />
                </figure>
              </div>
              <div
                class="relative w-1/4 p-2 m-2 bg-white border border-gray-400 rounded-20"
              >
                <figure class="item-thumbnail">
                  <img
                    src="/project-slider-4.jpg"
                    alt=""
                    class="w-full rounded-20"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div class="w-1/4">
            <div
              class="sticky w-full p-5 bg-white border border-gray-400 rounded-20"
              style="top: 15px"
            >
              <h3>Project Leader:</h3>

              <div class="flex mt-3">
                <div class="w-1/4">
                  <img
                    src="/testimonial-1-icon.png"
                    alt=""
                    class="inline-block w-full rounded-full"
                  />
                </div>
                <div class="w-3/4 mt-1 ml-5">
                  <div class="text-xl font-semibold text-gray-800">
                    Julia Keeva
                  </div>
                  <div class="font-light text-gray-400 text-md">
                    28.093 backer
                  </div>
                </div>
              </div>

              <h4 class="mt-5 font-semibold">What will you get:</h4>
              <ul class="mt-3 list-check">
                <li>Equity of the startup directly from the founder</li>
                <li>Special service or product that startup has</li>
                <li>
                  You can also sell your equity once the startup going IPO
                </li>
              </ul>
              <input
                type="number"
                class="block w-full px-6 py-3 mt-4 text-gray-800 transition duration-300 ease-in-out border border-gray-500 rounded-full focus:outline-none focus:shadow-outline"
                placeholder="Amount in Rp"
                value=""
              />
              <nuxt-link
                to="/fund-success"
                class="block w-full px-6 py-3 mt-3 font-medium text-center text-white rounded-full button-cta bg-orange-button hover:bg-green-button text-md"
              >
                Fund Now
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <section class="container pt-8 mx-auto">
        <div class="flex items-center justify-between">
          <div class="w-full mr-6 md:w-3/4">
            <h2 class="mb-2 text-4xl font-medium text-gray-900">
              Wireboard Fortune
            </h2>
            <p class="mb-5 text-xl font-light">
              The new era of mechanical keyboard for everyone
            </p>

            <div class="relative progress-bar">
              <div
                class="flex h-6 mb-4 overflow-hidden text-xs bg-gray-200 rounded-full"
              >
                <div
                  style="width: 80%"
                  class="flex flex-col justify-center text-center text-white shadow-none whitespace-nowrap bg-purple-progress progress-striped"
                ></div>
              </div>
            </div>
            <div class="flex mb-6 progress-info">
              <div class="text-2xl">80%</div>
              <div class="ml-auto text-2xl font-semibold">Rp 40.000.000</div>
            </div>

            <p class="mb-5 text-xl font-light">
              Designed to fit your dedicated typing experience. No matter what
              you like, linear, clicky or a little in between, we’ve got you
              covered with three Gateron switches options (Blue, Brown, Red).
              With a lifespan of 50 million keystroke lifespan we want to make
              sure that you experience same feedback for every keystroke.
            </p>
            <p class="mb-5 text-xl font-light">
              With N-key rollover (NKRO on wired mode only) you can register as
              many keys as you can press at once without missing out characters.
              It allows to use all the same media keys as conventional macOS.
            </p>
            <p class="mb-5 text-xl font-light">
              This keyboard can last up to 72 hours typing, or up to 9 days of
              normal use (8 hrs/day) with a 4000 mAh big battery.
            </p>
          </div>
          <div class="hidden w-1/4 md:block"></div>
        </div>
      </section>
      <div class="-mt-20 cta-clip"></div>
      <CallToAction />
      <Footer />
    </div>
</template>