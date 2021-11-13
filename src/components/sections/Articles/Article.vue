<script setup lang="ts">
    import ArticleList from './ArticleList.vue'
</script>

<template>
    <section class="section-article">
        <div class="container">
            <h2 class="heading-secondary mb-lg">Latest Articles</h2>
            <ArticleList />
            <button class="cta cta-">View more articles &rarr;</button>
        </div>
    </section>
</template>

<style lang="scss">
    @use 'src/assets/styles/abstracts' as *;

    .section-article {
        padding: 4.8rem;

        @include responsive(desktop) {
            padding: 4.8rem 2.4rem;
        }
    }
</style>
