<template>
    <header class="flex items-center">
            <div style="height: 54px" class="pr-5">
              <img src="/logo.svg" alt="logo" class="h-full" />
            </div>
            <ul class="flex items-center">
              <li>
                <nuxt-link
                  class="px-4 py-3 text-lg text-white hover:text-teal-500"
                  to="/"
                  >Home</nuxt-link
                >
              </li>
              <li>
                <a
                  class="px-4 py-3 text-lg text-white hover:text-teal-500"
                  href="#"
                  >Project</a
                >
              </li>
              <li>
                <a
                  class="px-4 py-3 text-lg text-white hover:text-teal-500"
                  href="#"
                  >Features</a
                >
              </li>
              <li>
                <a
                  class="px-4 py-3 text-lg text-white hover:text-teal-500"
                  href="#"
                  >Success Stories</a
                >
              </li>
            </ul>
            <ul class="flex items-center mt-2 ml-auto">
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
          </header>
</template>