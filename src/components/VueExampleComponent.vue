<template>
  <div class="show-text-container">
    <h3>{{ t("show-text.title") }}</h3>
    <div class="text-display">
      <textarea
        v-model="displayText"
        readonly
        class="text-box"
        rows="10"
        cols="40"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch, onMounted} from 'vue'
import {useI18n} from 'vue-i18n'
import {ComfyApp} from '@comfyorg/comfyui-frontend-types'

declare global {
  interface Window {
    app?: ComfyApp
  }
}

const {t} = useI18n()
const displayText = ref<string>('')

const {widget} = defineProps<{
  widget: ComponentWidget<string[]>
}>()

const node = widget.node

// Watch for changes in the node's input values
onMounted(() => {
  // Get initial value if exists
  const textWidget = node.widgets?.find((w: any) => w.name === 'text_input')
  if (textWidget) {
    displayText.value = textWidget.value || ''
    
    // Watch for changes
    const originalCallback = textWidget.callback
    textWidget.callback = function(value: any) {
      displayText.value = value || ''
      if (originalCallback) {
        originalCallback(value)
      }
    }
  }
})
</script>

<style scoped>
.show-text-container {
  padding: 10px;
}

.text-display {
  margin-top: 10px;
}

.text-box {
  width: 100%;
  min-width: 280px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: monospace;
  font-size: 14px;
  resize: vertical;
  background-color: #f9f9f9;
}
</style>