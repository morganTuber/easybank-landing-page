<script setup lang="ts">
    import LinkCol from './LinkCol.vue'
    import Socials from './Socials.vue'
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="logo-container">
                    <img
                        src="/images/logo.svg"
                        alt="Easybank Logo"
                        class="footer-logo"
                    />
                    <socials />
                </div>
                <linkCol :links="['About Us', 'Contact', 'Blog']" />
                <linkCol :links="['Careers', 'Support', 'Privacy Policy']" />
                <div class="col-cta">
                    <button class="cta">Request Invite</button>
                    <p class="copyright">
                        @Easybank {{ new Date().getFullYear() }}.All rights reserved
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    @use 'src/assets/styles/abstracts' as *;

    @mixin mb-auto() {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .footer {
        padding: 4.8rem 0;
        background-color: $dark-blue;
        color: $light-grayish-blue;

        @include responsive(desktop) {
            padding: 4.8rem 2.4rem;
        }
    }
    .footer-content {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 2fr;

        @include responsive(tab) {
            grid-template-columns: repeat(1, 1fr);
            row-gap: 4.8rem;
        }
    }
    .logo-container {
        @include mb-auto();

        .footer-logo {
            background-color: #fff;
            @include responsive(tab) {
                margin-bottom: 4.8rem;
            }
        }
    }
    .col {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2.4rem;
    }
    .col-cta {
        @include mb-auto();
        justify-self: end;

        @include responsive(tab) {
            justify-self: start;
        }

        .copyright {
            margin-top: auto;
            color: $grayish-blue;

            @include responsive(tab) {
                margin-top: 4.8rem;
            }
        }
    }
</style>
