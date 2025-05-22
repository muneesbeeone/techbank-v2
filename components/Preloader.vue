<template>
    <div id="preloader">
        <div class="loader-container">
            <div class="percentage">{{ progress }}%</div>
            <div class="progress-bar">
                <div class="progress" :style="{ width: `${progress}%` }"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const progress = ref(0)
let checkInterval: ReturnType<typeof setInterval> | null = null

function getResourceProgress(): number {
  const resources = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
  const total = resources.length;
  let loaded = 0;
  if (total === 0) return 100;
  resources.forEach((resource) => {
    if (resource.responseEnd) loaded++;
  });
  return Math.round((loaded / total) * 100);
}

function getDocumentProgress(): number {
  if (document.readyState === "loading") return 25;
  if (document.readyState === "interactive") return 75;
  if (document.readyState === "complete") return 100;
  return 0;
}

function calculateOverallProgress(): number {
  let docProgress = getDocumentProgress();
  let resProgress = getResourceProgress();
  let overallProgress = Math.round(docProgress * 0.5 + resProgress * 0.5);
  progress.value = overallProgress;
  return overallProgress;
}

function removePreloader() {
  console.log("Page 100% loaded.");
  setTimeout(() => {
    const preloader = document.querySelector<HTMLElement>('#preloader');
    if (preloader) preloader.style.opacity = '0';
    setTimeout(() => {
      if (preloader) preloader.style.display = 'none';
    }, 500);
  }, 500);
}

onMounted(() => {
  calculateOverallProgress();
  document.onreadystatechange = () => calculateOverallProgress();
  window.addEventListener("DOMContentLoaded", calculateOverallProgress);
  window.addEventListener("load", () => {
    calculateOverallProgress();
    if (checkInterval) clearInterval(checkInterval);
    removePreloader();
  });
  checkInterval = setInterval(() => {
    let prog = calculateOverallProgress();
    if (prog >= 100) {
      removePreloader();
      if (checkInterval) clearInterval(checkInterval);
    }
  }, 100);
});

onUnmounted(() => {
  if (checkInterval) clearInterval(checkInterval);
  window.removeEventListener("DOMContentLoaded", calculateOverallProgress);
  window.removeEventListener("load", removePreloader);
});
</script>

<style>
#preloader {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.percentage {
    font-family: 'JetBrains Mono', monospace;
    font-size: 3rem;
    color: white;
    font-weight: 600;
}

.progress-bar {
    width: 300px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    overflow: hidden;
}

.progress {
    height: 100%;
    background-color: white;
    transition: width 0.3s ease;
}
</style>
