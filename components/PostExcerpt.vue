<template>
  <article class="card">
    <nuxt-link v-if="artigo.image" :to="artigo.path" class="card-image">
      <img :src="artigo.image" alt="" />
    </nuxt-link>
    <div class="card-block p-3">
      <h2 v-if="artigo.title" class="card-title">
        <nuxt-link :to="artigo.path">{{ artigo.title }}</nuxt-link>
      </h2>
      <h4 class="card-text" v-html="excerpt"></h4>
      <div class="metafooter">
        <div class="wrapfooter">
          <span class="meta-footer-thumb">
            <img
              class="author-thumb"
              src="https://s.gravatar.com/avatar/bcc2a3ae01d8feb84f5bad3436e1400a?s=180"
              alt="Rhamses"
            />
          </span>
          <span class="author-meta">
            <span class="post-name"> Rhamses </span><br />
            <span class="post-date">{{ publishDate }}</span
            ><span class="dot"></span>
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.25;
}

.card-title a {
  color: rgba(0, 0, 0, 0.8);
}

.card-title a:hover {
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
}

.card-image {
  display: block;
  overflow: hidden;
  height: 250px;
}

.card-text {
  color: rgba(0, 0, 0, 0.44);
  font-size: 0.95rem;
  line-height: 1.4;
  font-weight: 400;
}

.wrapfooter {
  position: relative;
  margin-top: 30px;
  font-size: 12px;
  display: block;
  width: 85%;
}

.card-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>

<script>
export default {
  props: ['artigo'],
  computed: {
    excerpt() {
      let content
      if (this.artigo.description) {
        content = this.artigo.description
      } else if (this.artigo.excerpt) {
        content = this.artigo.excerpt.children[0].children[0].value
      }

      return content
    },
    publishDate() {
      const publishAt = new Date(this.artigo.updatedAt)
      return `${publishAt.getDate()}/${
        publishAt.getMonth() + 1
      }/${publishAt.getFullYear()}`
    },
  },
}
</script>
