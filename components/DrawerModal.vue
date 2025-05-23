<template>
  <transition :name="isMobile ? 'drawer-bottom-fade' : 'drawer-fade'">
    <div v-if="modelValue" class="fixed inset-0  z-50 flex">
      <div class="fixed inset-0  bg-black bg-opacity-60 re" @click="close"></div>
      <aside :class="drawerClass">
        <button @click="close" class="absolute top-4 right-4 text-white text-2xl z-10 ring-[1px] ring-[#fff] rounded-3xl px-3 py-1 flex items-center justify-center bg-black focus:outline-none">
          <Icon name="mdi:close" />
        </button>
        <slot />
      </aside>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])
const close = () => emit('update:modelValue', false)

const isMobile = ref(false)
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const drawerClass = computed(() =>
  isMobile.value
    ? 'fixed left-0 bottom-0 w-full max-w-full h-[90vh] bg-[#2B2B2B] shadow-xl p-6 flex flex-col rounded-t-2xl overflow-y-auto'
    : 'ml-auto w-full max-w-2xl h-full bg-[#2B2B2B] shadow-xl p-6 relative flex flex-col'
)
</script>

<style scoped>
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
}
.drawer-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.drawer-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.drawer-bottom-fade-enter-active,
.drawer-bottom-fade-leave-active {
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
}
.drawer-bottom-fade-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.drawer-bottom-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style> 