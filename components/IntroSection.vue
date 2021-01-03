<template>
  <div class="mainheading">
    <h1 class="sitetitle">{{ title }}</h1>
    <p class="lead" v-html="content"></p>
  </div>
</template>

<script>
export default {
  props: ['title', 'content'],
}
</script>
