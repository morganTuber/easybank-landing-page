<script setup lang="ts">
    import { computed, onMounted, onUnmounted, ref } from 'vue'

    const navLinks = ['Home', 'About', 'Contact', 'Blog', 'Careers']
    const showMenu = ref<boolean>(false)
    const menu = ref<HTMLElement>()
    const toggleButton = ref<HTMLButtonElement>()
    const scrollY = ref<number>(0)

    //show close icon if menu is open else show menu icon
    const icon = computed(() => (showMenu.value ? 'close' : 'menu'))
    //make navbar fixed on scroll
    const fixed = computed(() => scrollY.value >= 100)

    const handleDocumentClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        //if click is outside of menu and clicked document is not togglebutton, close menu
        if (menu.value) {
            if (!menu.value.contains(target) && target !== toggleButton.value) {
                showMenu.value = false
            }
        }
    }
    const handleDocumentScroll = () => {
        scrollY.value = window.scrollY
    }
    onMounted(() => {
        document.addEventListener('click', handleDocumentClick)
        document.addEventListener('scroll', handleDocumentScroll)
    })
    onUnmounted(() => {
        document.removeEventListener('click', handleDocumentClick)
        document.removeEventListener('scroll', handleDocumentScroll)
    })
</script>

<template>
    <header class="main-nav-header" :class="{ mobile: showMenu, fixed: fixed }">
        <div class="overlay" />
        <nav class="main-nav">
            <a href="#" class="logo">
                <img src="/images/logo.svg" alt="Easybank Logo" />
            </a>
            <ul ref="menu" class="main-nav__list">
                <template v-for="(navLink, index) in navLinks" :key="index">
                    <li class="main-nav__item">
                        <a href="#" class="main-nav__link">{{ navLink }}</a>
                    </li>
                </template>
            </ul>
            <a href="#" class="cta nav-cta">Request Invite</a>
            <button
                ref="toggleButton"
                hidden
                class="hamburger"
                @click="showMenu = !showMenu"
            >
                <span class="material-icons">{{ icon }}</span>
            </button>
        </nav>
    </header>
</template>
<style lang="scss">
    @use '../assets/styles/abstracts/variables' as *;
    @use '../assets/styles/abstracts/breakpoints' as *;

    .main-nav-header {
        position: fixed;
        width: 100%;
        padding: 2.4rem 0;
        background-color: $light-green;
        transition: all 0.6s;

        &.fixed {
            padding: 1.6rem 0;
            background-color: $white;
            z-index: 100;
            box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.095);

            @include responsive(desktop) {
                padding: 1.6rem 2.4rem;
            }
        }
        //apply background overlay when mobile menu is opened
        &.mobile .overlay {
            opacity: 1;
            visibility: visible;
        }
        //show mobile menu if .mobile class is active in .main-nav-header
        &.mobile .main-nav__list {
            opacity: 1;
            transform: translateY(8rem);
            visibility: visible;
        }
        @include responsive(desktop) {
            padding: 1.2rem 2.4rem;
        }
    }
    .overlay {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75), transparent);
        top: 8rem;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        position: fixed;
        visibility: hidden;
        transition: all $animation-duration;
    }

    .main-nav {
        position: relative;
        max-width: 140rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include responsive(desktop) {
            padding: 0;
        }

        &__list {
            display: flex;
            gap: 3.2rem;

            @include responsive(tab-lg) {
                align-items: center;
                background-color: $white;
                border-radius: $border-radius-default;
                flex-direction: column;
                right: 0;
                opacity: 0;
                position: absolute;
                padding: 3.2rem 0;
                top: 0;
                transition: all $animation-duration;
                transform: translateY(10rem);
                visibility: hidden;
                width: 50%;
            }
            @include responsive(tab) {
                width: 100%;
            }
        }
        &__link {
            position: relative;
            font-weight: $font-semibold;

            &::before {
                background-color: $lime-green;
                position: absolute;
                content: '';
                left: 0;
                bottom: 0;
                width: 100%;
                height: 3px;
                transform: translateY(6px) scaleX(0);
                transform-origin: left;
                transition: all $animation-duration;
            }
            &:hover::before {
                transform: translateY(6px) scaleX(1);
            }
        }
        .nav-cta {
            display: inline-block;

            @include responsive(tab-lg) {
                display: none;
            }
        }
        .hamburger {
            font-size: 4.8rem;
            @include responsive(tab-lg) {
                display: block;
            }
            span {
                pointer-events: none;
            }
        }
    }
</style>
