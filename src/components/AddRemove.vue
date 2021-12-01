<template>
  <div class="addRemove">
    <span class="increment" v-html="increment"></span>
    <span class="separator">|</span>
    <span class="decrement" v-html="decrement"></span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      increment: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5.0625H6.9375V1C6.9375 0.4875 6.5125 0.0625 6 0.0625C5.4875 0.0625 5.0625 0.4875 5.0625 1V5.0625H1C0.4875 5.0625 0.0625 5.4875 0.0625 6C0.0625 6.5125 0.4875 6.9375 1 6.9375H5.0625V11C5.0625 11.5125 5.4875 11.9375 6 11.9375C6.5125 11.9375 6.9375 11.5125 6.9375 11V6.9375H11C11.5125 6.9375 11.9375 6.5125 11.9375 6C11.9375 5.4875 11.5125 5.0625 11 5.0625Z" fill="#2DC27A"/>
                    </svg>`,
      decrement: `<svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1.9375H1C0.4875 1.9375 0.0625 1.5125 0.0625 1C0.0625 0.4875 0.4875 0.0625 1 0.0625H11C11.5125 0.0625 11.9375 0.4875 11.9375 1C11.9375 1.5125 11.5125 1.9375 11 1.9375Z" fill="#F54E4E"/>
                    </svg>`

    }
  }
}
</script>

