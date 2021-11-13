<script setup lang="ts">
    import { socialImages } from './data'
</script>

<template>
    <div class="socials">
        <template v-for="(socialImage, index) in socialImages" :key="index">
            <img :src="socialImage" class="social" alt="Social icon" />
        </template>
    </div>
</template>

<style lang="scss">
    .socials {
        margin-top: auto;
    }
    .social {
        width: 3.6rem;
        height: 3.6rem;
        border-radius: 100%;
        cursor: pointer;

        &:not(:first-child) {
            margin-left: 2.4rem;
        }
    }
</style>
