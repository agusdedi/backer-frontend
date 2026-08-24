<script setup>
definePageMeta({
  layout: 'auth',
})

const { data, token } = useAuth()
const config = useRuntimeConfig()

const url = ref('/avatar.jpg')
const selectedFiles = ref(undefined)
const fileInput = ref(null)

function onFileChange(e) {
  const file = e.target.files[0]
  if (!file) return
  url.value = URL.createObjectURL(file)
  selectedFiles.value = fileInput.value.files
}

async function upload() {
  const formData = new FormData()
  formData.append('avatar', selectedFiles.value.item(0))

  try {
    const response = await $fetch('/avatars', {
      baseURL: config.public.apiBase,
      method: 'POST',
      body: formData,
      headers: {
        Authorization: token.value ?? '',
      },
    })
    console.log(response)
    await navigateTo('/register-success')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="container flex items-center justify-center h-screen mx-auto">
    <div class="w-full px-10 lg:w-1/3 lg:px-0">
      <div class="flex items-center justify-center w-40 mx-auto mb-4">
        <div class="relative">
          <div class="cursor-pointer" @click="fileInput.click()">
            <img :src="url" alt="" class="border-4 border-white rounded-full" />
            <img src="/icon-avatar-add.svg" alt="" class="absolute bottom-0 right-0 pb-2" />
            <label for="avatar-upload" class="sr-only">Upload Avatar</label>
            <input
              id="avatar-upload"
              type="file"
              ref="fileInput"
              style="display: none"
              accept="image/*"
              @change="onFileChange"
            />
          </div>
        </div>
      </div>
      <h2 class="mb-3 text-3xl font-normal text-center text-white">Hi, {{ data?.name }}</h2>
      <p class="font-light text-center text-white">Please upload your selfie</p>
      <div class="mt-6 mb-4">
        <div class="mb-3">
          <button
            type="button"
            :disabled="selectedFiles == undefined"
            @click="upload"
            :class="selectedFiles == undefined ? 'opacity-50 cursor-not-allowed' : ''"
            class="block w-full px-6 py-4 text-lg font-semibold text-white rounded-full bg-orange-button hover:bg-green-button"
          >
            Sign Up Now
          </button>
        </div>
      </div>
      <div>
        <div class="mb-4">
          <button
            type="button"
            @click="navigateTo('/register-success')"
            class="block w-full px-6 py-4 text-lg font-light text-white bg-transparent border border-white rounded-full hover:bg-white hover:bg-opacity-25"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
