<template>
  <div class="zoomable-image-container">
    <figure>
      <img
        :src="src"
        :alt="alt"
        class="zoomable-image"
        :class="{ 'zoomed': isZoomed }"
        @click="toggleZoom"
        :style="{ cursor: isZoomed ? 'zoom-out' : 'zoom-in' }"
      />
      <figcaption v-if="caption" class="image-caption">
        {{ caption }}
      </figcaption>
    </figure>
    
    <!-- Full-screen overlay -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isZoomed"
          class="zoom-overlay"
          @click="toggleZoom"
        >
          <img
            :src="src"
            :alt="alt"
            class="zoomed-image"
          />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  src: string
  alt: string
  caption?: string
}

defineProps<Props>()

const isZoomed = ref(false)

const toggleZoom = () => {
  isZoomed.value = !isZoomed.value
  // Prevent body scroll when zoomed
  if (isZoomed.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.zoomable-image-container {
  margin: 2rem 0;
}

figure {
  margin: 0;
  text-align: center;
}

.zoomable-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.zoomable-image:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.image-caption {
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}

/* Zoom overlay */
.zoom-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: zoom-out;
  padding: 2rem;
}

.zoomed-image {
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border-radius: 8px;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
