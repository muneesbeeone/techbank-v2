<template>
  <div class="video-container relative">
    <video
      ref="videoRef"
      :src="blobUrl"
      :autoplay="autoplay"
      :loop="loop"
      :muted="muted"
      :playsinline="playsinline"
      :class="videoClass"
      @error="handleError"
      @loadeddata="handleLoaded"
    >
      <source :src="blobUrl" :type="videoType">
      Your browser does not support the video tag.
    </video>
    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
    </div>
    <div v-if="error" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <p class="text-white">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  blobUrl: {
    type: String,
    required: true
  },
  videoType: {
    type: String,
    default: 'video/webm'
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean,
    default: true
  },
  muted: {
    type: Boolean,
    default: true
  },
  playsinline: {
    type: Boolean,
    default: true
  },
  videoClass: {
    type: String,
    default: 'w-full h-full object-cover'
  }
})

const videoRef = ref(null)
const isLoading = ref(true)
const error = ref(null)

const handleError = (e) => {
  error.value = 'Error loading video'
  isLoading.value = false
  console.error('Video error:', e)
}

const handleLoaded = () => {
  isLoading.value = false
}

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.load()
  }
})

onBeforeUnmount(() => {
  if (videoRef.value) {
    videoRef.value.pause()
    videoRef.value.src = ''
  }
})
</script>

<style scoped>
.video-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style> 