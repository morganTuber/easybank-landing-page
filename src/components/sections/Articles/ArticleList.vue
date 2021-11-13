<script setup lang="ts">
    import { articles } from './articles'
</script>
<template>
    <div class="articles mb-lg">
        <template v-for="(article, index) in articles" :key="index">
            <div class="article">
                <img
                    :src="article.image"
                    class="article__image mb-md"
                    alt="Article image"
                />
                <div class="article__content">
                    <p class="sub-title">By {{ article.author }}</p>
                    <h3 class="heading-tertiary">{{ article.title }}</h3>
                    <p class="text">{{ article.content }}</p>
                </div>
            </div>
        </template>
    </div>
</template>

<style lang="scss">
    @use 'src/assets/styles/abstracts' as *;

    .articles {
        display: flex;
        gap: 2.4rem;

        @include responsive(tab) {
            flex-direction: column;
        }
    }
    .article {
        box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.075);
        border-radius: 1.2rem;
        transition: all 0.4s;
        overflow: hidden;

        &:hover {
            transform: translateY(-3px);
        }
        &__image {
            width: 100%;
            height: 20rem;

            @include responsive(tab) {
                height: auto;
                width: 100%;
            }
        }
        &__content {
            padding: 1.2rem 2.4rem;
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
        }
    }
</style>
