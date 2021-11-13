<script setup lang="ts">
    defineProps<{ links: string[] }>()
</script>

<template>
    <div class="col">
        <template v-for="(link, index) in links" :key="index">
            <a href="#" class="link">{{ link }}</a>
        </template>
    </div>
</template>

<style lang="scss">
    @use 'src/assets/styles/abstracts/variables' as *;
    .link {
        border-bottom: 3px solid transparent;
        padding-bottom: 3px;
        transition: all 0.6s;

        &:hover {
            border-bottom: 3px solid $lime-green;
        }
    }
</style>
