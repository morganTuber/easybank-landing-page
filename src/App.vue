<script setup lang="ts">
    import Footer from './components/Footer/Footer.vue'
    import Navbar from './components/Navbar.vue'
    import Article from './components/sections/Articles/Article.vue'
    import Hero from './components/sections/Hero.vue'
    import Why from './components/sections/why/Why.vue'
</script>

<template>
    <!-- Section containing website navigation -->
    <Navbar />
    <!-- Section containing the main content of the page -->
    <Hero />
    <!-- Section explaining why you should choose easybank -->
    <Why />
    <Article />
    <Footer />
</template>
