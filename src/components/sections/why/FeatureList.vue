<script setup lang="ts">
    import { features } from './data'
</script>

<template>
    <div class="features">
        <template v-for="(feature, index) in features" :key="index">
            <div class="feature">
                <img :src="feature.icon" alt="Feature logo" class="mb-lg" />
                <h3 class="heading-tertiary mb-sm">{{ feature.title }}</h3>
                <p class="text">{{ feature.description }}</p>
            </div>
        </template>
    </div>
</template>

<style lang="scss">
    @use 'src/assets/styles/abstracts' as *;

    .features {
        display: flex;
        gap: 4.4rem;
        margin-top: 4.8rem;

        @include responsive(tab) {
            flex-direction: column;
        }
    }
</style>
