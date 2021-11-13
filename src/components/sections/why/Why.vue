<script setup lang="ts">
    import FeatureList from './FeatureList.vue'
</script>

<template>
    <section class="section-why">
        <div class="container">
            <h2 class="heading-secondary mb-md">Why Choose EasyBank ?</h2>
            <p class="text">
                <span>
                    We leverage Open Banking to turn your bank account into your
                    financial hub.
                </span>
                <span>Control your finances like never before.</span>
            </p>
            <FeatureList />
        </div>
    </section>
</template>

<style lang="scss">
    @use 'src/assets/styles/abstracts' as *;
    .section-why {
        padding: 9.6rem 0;

        @include responsive(desktop) {
            padding: 9.6rem 2.4rem;
        }
    }
    .text span {
        display: block;
    }
</style>
