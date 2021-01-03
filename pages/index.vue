<template>
  <div class="container">
    <div>
      <Header />
      <IntroSection
        title="Seja bem vindo!"
        content="Aqui escrevo artigos e reflexões da minha experiência no mundo do desenvolvimento"
      />
      <section class="recent-posts">
        <div class="section-title">
          <h2><span>Artigos</span></h2>
        </div>
        <div class="row">
          <div
            v-for="(artigo, index) in artigos"
            :key="index"
            class="col-12 col-md-4 col-lg-3"
          >
            <PostExcerpt :artigo="artigo" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const artigos = await $content().limit(10).without(['body']).fetch()

    return {
      artigos,
    }
  },
}
</script>
