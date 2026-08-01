<script setup lang="ts">
const { status, data, signOut } = useAuth()
const config = useRuntimeConfig()

const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

async function logout() {
  await signOut({ callbackUrl: '/login' })
}
</script>

<template>
  <header class="relative flex items-center justify-between py-4 lg:justify-start lg:py-6">
    <div style="height: 54px" class="pr-5 shrink-0">
      <img src="/logo.svg" alt="logo" class="h-full" />
    </div>

    <!-- Desktop menu -->
    <ul class="items-center hidden lg:flex">
      <li>
        <nuxt-link class="px-4 py-3 text-lg text-white hover:text-teal-500" to="/">Home</nuxt-link>
      </li>
      <li>
        <a class="px-4 py-3 text-lg text-white hover:text-teal-500" href="#projects">Project</a>
      </li>
      <li>
        <a class="px-4 py-3 text-lg text-white hover:text-teal-500" href="#features">Features</a>
      </li>
      <li>
        <a class="px-4 py-3 text-lg text-white hover:text-teal-500" href="#testimonials"
          >Success Stories</a
        >
      </li>
    </ul>

    <!-- Desktop: belum login -->
    <ul v-if="status !== 'authenticated'" class="items-center hidden mt-2 ml-auto lg:flex">
      <li>
        <nuxt-link
          to="/register"
          class="inline-block w-40 px-6 py-1 mr-4 text-lg font-light text-center text-white bg-transparent border border-white rounded-full hover:bg-white hover:bg-opacity-25"
        >
          Sign Up
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/login"
          class="inline-block w-40 px-6 py-1 text-lg font-light text-center text-white bg-transparent border border-white rounded-full hover:bg-white hover:bg-opacity-25"
        >
          My Account
        </nuxt-link>
      </li>
    </ul>

    <!-- Desktop: sudah login -->
    <div v-else class="relative hidden ml-auto lg:block">
      <button
        @click="toggleDropdown"
        class="inline-flex items-center px-6 py-4 font-semibold text-gray-700 bg-white rounded"
      >
        <img
          v-if="(data as any)?.image_url"
          :src="(data as any).image_url"
          alt=""
          class="object-cover w-8 h-8 mr-2 rounded-full"
        />
        <span class="mr-1">{{ (data as any)?.name }}</span>
        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul v-if="isDropdownOpen" class="absolute right-0 w-full pt-1 -mt-2 text-gray-700 shadow">
        <li>
          <nuxt-link
            class="block px-4 py-2 whitespace-no-wrap bg-white rounded-t hover:bg-gray-100 hover:text-orange-500"
            to="/dashboard"
            @click="isDropdownOpen = false"
            >My Dashboard</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            class="block px-4 py-2 whitespace-no-wrap bg-white border-t hover:bg-gray-100 hover:text-orange-500"
            to="/dashboard"
            @click="isDropdownOpen = false"
            >Account Settings</nuxt-link
          >
        </li>
        <li>
          <a
            class="block px-4 py-2 whitespace-no-wrap bg-white border-t rounded-b cursor-pointer hover:bg-gray-100 hover:text-orange-500"
            @click="logout"
            >Logout</a
          >
        </li>
      </ul>
    </div>

    <!-- Hamburger (mobile & tablet) -->
    <button
      @click="toggleMenu"
      class="flex items-center justify-center w-10 h-10 text-white lg:hidden"
      aria-label="Toggle menu"
    >
      <svg v-if="!isMenuOpen" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg v-else class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Mobile & tablet dropdown menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="absolute left-0 z-50 w-full p-5 mt-2 bg-indigo-600 shadow-lg top-full rounded-20 lg:hidden"
      >
        <ul class="flex flex-col">
          <li>
            <nuxt-link
              class="block px-4 py-3 text-lg text-white hover:text-teal-500"
              to="/"
              @click="isMenuOpen = false"
              >Home</nuxt-link
            >
          </li>
          <li>
            <a class="block px-4 py-3 text-lg text-white hover:text-teal-500" href="#projects"
              >Project</a
            >
          </li>
          <li>
            <a class="block px-4 py-3 text-lg text-white hover:text-teal-500" href="#features"
              >Features</a
            >
          </li>
          <li>
            <a class="block px-4 py-3 text-lg text-white hover:text-teal-500" href="#testimonials"
              >Success Stories</a
            >
          </li>
        </ul>

        <div class="flex flex-col gap-3 pt-4 mt-4 border-t border-white/20">
          <template v-if="status !== 'authenticated'">
            <nuxt-link
              to="/register"
              class="inline-block w-full px-6 py-2 text-lg font-light text-center text-white bg-transparent border border-white rounded-full hover:bg-white hover:bg-opacity-25"
              @click="isMenuOpen = false"
            >
              Sign Up
            </nuxt-link>
            <nuxt-link
              to="/login"
              class="inline-block w-full px-6 py-2 text-lg font-light text-center text-white bg-transparent border border-white rounded-full hover:bg-white hover:bg-opacity-25"
              @click="isMenuOpen = false"
            >
              My Account
            </nuxt-link>
          </template>
          <template v-else>
            <div class="flex items-center gap-3 px-2 text-white">
              <img
                v-if="(data as any)?.image_url"
                :src="(data as any).image_url"
                alt=""
                class="object-cover w-8 h-8 rounded-full"
              />
              <span>{{ (data as any)?.name }}</span>
            </div>
            <nuxt-link
              to="/dashboard"
              class="inline-block w-full px-6 py-2 text-lg font-light text-center text-white bg-transparent border border-white rounded-full hover:bg-white hover:bg-opacity-25"
              @click="isMenuOpen = false"
            >
              My Dashboard
            </nuxt-link>
            <a
              class="inline-block w-full px-6 py-2 text-lg font-light text-center text-white bg-transparent border border-white rounded-full cursor-pointer hover:bg-white hover:bg-opacity-25"
              @click="logout"
            >
              Logout
            </a>
          </template>
        </div>
      </div>
    </Transition>
  </header>
</template>
