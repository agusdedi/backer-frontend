<script setup lang="ts">
import CallToAction from '../components/CallToAction.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

interface Campaign {
  id: number
  user_id: number
  name: string
  short_description: string
  image_url: string
  goal_amount: number
  current_amount: number
  slug: string
}

interface CampaignsResponse {
  meta: {
    message: string
    code: number
    status: string
  }
  data: Campaign[]
}

const { data: campaigns } = await useAsyncData(
  'campaigns',
  () => apiFetchWithWakeRetry<CampaignsResponse>('/campaigns'),
  { server: false },
)
</script>

<template>
  <div class="landing-page">
    <section class="pt-5 landing-hero">
      <div class="header__bg"></div>
      <div class="container relative mx-auto">
        <Navbar />
        <div class="flex flex-col items-center px-5 pt-10 lg:flex-row lg:px-8">
          <div class="w-full lg:w-1/2">
            <h1 class="mb-5 text-3xl text-white sm:text-4xl">
              We helps <u class="hero-underline">startup</u> to <br />
              getting started & <u class="hero-underline">funding</u> <br />
              their truly needs
            </h1>
            <p class="mb-8 text-lg font-light text-white sm:text-xl">
              Fund the best idea to become <br />
              a real product and be the contributor
            </p>
            <button
              type="button"
              @click="$router.push({ path: '/' })"
              class="block px-12 py-3 text-xl font-semibold text-white rounded-full bg-orange-button hover:bg-green-button"
            >
              Find a Project
            </button>
          </div>
          <div class="flex justify-center w-full mt-10 lg:w-1/2 lg:mt-0">
            <img src="/hero-image@2x.png" alt="crowdfunding project" class="h-auto max-w-full" />
          </div>
        </div>
      </div>
    </section>
    <section class="container px-5 pt-16 mx-auto sm:pt-24 lg:px-8">
      <div class="flex items-center justify-between mb-10">
        <div class="w-auto">
          <h2 class="mb-8 text-2xl text-gray-900 sm:text-3xl">
            Only 3 steps to execute <br />
            your bright ideas
          </h2>
        </div>
      </div>
      <div class="flex">
        <div class="hidden w-full px-56 mb-5 lg:block">
          <img src="/line-step.svg" alt="" class="w-full" />
        </div>
      </div>
      <div
        class="flex flex-col gap-10 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-4 lg:gap-0"
      >
        <div class="w-full sm:w-1/3">
          <figure class="flex items-center justify-center">
            <img src="/step-1-illustration.svg" alt="" class="mb-8 h-30" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium">Sign Up</h3>
            <p class="font-light">Sign Up account and start <br />funding project</p>
          </div>
        </div>
        <div class="w-full sm:w-1/3">
          <figure class="flex items-center justify-center lg:-mt-24">
            <img src="/step-2-illustration.svg" alt="" class="mb-8 h-30" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium">Open Project</h3>
            <p class="font-light">
              Choose some project idea, <br />
              and start funding
            </p>
          </div>
        </div>
        <div class="w-full sm:w-1/3">
          <figure class="flex items-center justify-center lg:-mt-48">
            <img src="/step-3-illustration.svg" alt="" class="mb-8 h-30" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium">Execute</h3>
            <p class="font-light">
              Time to makes dream <br />
              comes true
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="container px-5 pt-16 mx-auto sm:pt-24 lg:px-8">
      <div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div class="w-auto">
          <h2 class="mb-8 text-2xl text-gray-900 sm:text-3xl">
            New projects you can <br />
            taken care of
          </h2>
        </div>
        <div class="w-auto mt-5 sm:mt-0">
          <a class="font-medium text-gray-900 hover:underline text-md" href="">View All</a>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 mt-3 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="campaign in campaigns?.data ?? []"
          :key="campaign.id"
          class="relative flex flex-col w-full p-5 overflow-hidden border border-gray-500 cursor-pointer group card-project rounded-20"
        >
          <figure class="overflow-hidden item-image aspect-[4/3] rounded-20">
            <img
              :src="campaign.image_url"
              :alt="campaign.name"
              class="object-cover w-full h-full"
            />
          </figure>
          <h4
            class="mt-5 text-2xl font-medium text-gray-900 md:text-3xl line-clamp-1 lg:line-clamp-2"
          >
            {{ campaign.name }}
          </h4>
          <p class="mt-2 mb-4 font-light text-gray-900 text-md line-clamp-1 lg:line-clamp-2">
            {{ campaign.short_description }}
          </p>
          <div class="mt-6 progress-bar">
            <div class="h-3 mb-5 overflow-hidden text-xs bg-gray-200 rounded-lg">
              <div
                :style="{
                  width:
                    Math.min(
                      100,
                      Math.round((campaign.current_amount / campaign.goal_amount) * 100),
                    ) + '%',
                }"
                class="flex flex-col justify-center h-full text-center text-white bg-purple-progress progress-striped"
              ></div>
            </div>
            <div class="flex items-center progress-info">
              <div class="text-sm font-medium">
                {{ Math.round((campaign.current_amount / campaign.goal_amount) * 100) }}%
              </div>
              <div class="ml-auto text-sm font-semibold">
                Rp. {{ new Intl.NumberFormat('id-ID').format(campaign.goal_amount) }}
              </div>
            </div>
          </div>

          <button
            type="button"
            @click="$router.push({ path: '/projects/' + campaign.id })"
            class="block w-full px-6 py-3 mt-5 text-lg font-semibold text-center text-white rounded-full bg-orange-button hover:bg-green-button"
          >
            Fund Now
          </button>
        </div>
      </div>
    </section>
    <section class="container px-5 pt-16 mx-auto sm:pt-24 lg:px-8">
      <div class="flex items-center justify-between">
        <div class="w-auto">
          <h2 class="mb-8 text-2xl text-gray-900 sm:text-3xl">
            See What Our <br />
            Happy Clients Say
          </h2>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:flex-row">
        <div class="hidden lg:flex lg:items-start lg:justify-center lg:w-2/12">
          <img src="/testimonial-line.svg" alt="" />
        </div>
        <div class="w-full lg:w-8/12 lg:mt-16">
          <h2 class="text-2xl font-light text-gray-900 sm:text-3xl">
            “Funding at Bucker is very easy and comfortable. <br />
            Just need to find an idea, click and already funding.”
          </h2>
          <div class="mt-8 testimonial-info">
            <div class="text-xl font-semibold name">Shopie Nicole</div>
            <div class="text-xl font-light text-gray-400 title">Project Manager</div>
          </div>
          <div class="mt-10 testimonial-icon">
            <img
              src="/testimonial-1-icon.png"
              alt=""
              class="inline-block w-20 mr-5 rounded-full testimonial-user"
            />
            <img
              src="/testimonial-2-icon.png"
              alt=""
              class="inline-block w-20 mr-5 rounded-full testimonial-user"
            />
            <img
              src="/testimonial-3-icon.png"
              alt=""
              class="inline-block w-20 mr-5 rounded-full testimonial-user active"
            />
          </div>
        </div>
        <div class="hidden lg:block lg:w-2/12"></div>
      </div>
    </section>
    <div class="hidden -mt-20 cta-clip sm:block"></div>
    <CallToAction />
    <Footer />
  </div>
</template>

<style scoped>
.card-project {
  max-height: none;
  overflow: visible;
}

.card-project:hover .progress-bar {
  opacity: 1 !important;
  height: auto !important;
  margin-top: 1.5rem !important;
  padding: 0 !important;
}
.card-project:hover .progress-info {
  opacity: 1 !important;
  height: auto !important;
  margin: 0 !important;
  padding: 0 !important;
}
</style>
