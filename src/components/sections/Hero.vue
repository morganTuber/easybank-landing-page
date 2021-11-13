<template>
    <section class="section-hero">
        <div class="container">
            <main class="hero-content">
                <div class="text-container">
                    <p class="tag">#1 Rated Bank in the world</p>
                    <h1 class="heading-primary">Next Generation Digital Banking</h1>
                    <p class="text">
                        Take your financial life online. Your Easybank account will
                        be a one-stop-shop for spending, saving, budgeting,
                        investing, and much more.
                    </p>
                    <div class="ctas">
                        <a href="#" class="cta">Request Invite</a>
                        <a href="#" class="cta cta--outline ml-sm">Learn More</a>
                    </div>
                </div>
                <aside class="image-container">
                    <img
                        src="/images/image-mockups.png"
                        alt="Easybank app screenshots"
                    />
                </aside>
            </main>
        </div>
    </section>
</template>

<style lang="scss">
    @use '../../assets/styles/abstracts' as *;
    .section-hero {
        padding: 3.2rem;
        background-color: $light-green;

        @include responsive(desktop) {
            padding: 3.2rem 2.4rem;
        }
    }
    .hero-content {
        display: grid;
        grid-template-columns: 40fr 60fr;
        align-items: center;
        justify-items: end;
        gap: 9.6rem;

        @include responsive(tab) {
            justify-items: start;
            grid-template-columns: 1fr;
            gap: 4.8rem;
        }
    }
    .text-container {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        align-items: flex-start;
    }
    .image-container img {
        width: 60rem;

        @include responsive(tab) {
            width: 40rem;
        }
    }
</style>
