<template>
    <footer class="footer">
        <div class="made">
            <p class="made-by"><b>Made By</b> MegaCrafter</p>
            <p class="made-with"><b>Made With</b> Nuxt.js</p>
        </div>
        <div class="thanks">
            <b>Special Thanks To</b>
            <div class="thanks-list">
                <p class="thanks-frontendmentor">
                    <a href="https://frontendmentor.io">frontendmentor.io</a>
                    for the idea
                </p>
                <p class="thanks-restcountries">
                    <a href="https://restcountries.eu">restcountries.eu</a> for
                    the country data
                </p>
                <p class="thanks-joielechong">
                    <a
                        href="https://github.com/joielechong/iso-country-flags-svg-collection"
                        >joielechong</a
                    >
                    for the country flags
                </p>
                <p class="thanks-vue">
                    <a href="https://vuejs.org/">Vue</a>
                    for being such an amazing framework!
                </p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100px;

    padding: 40px 2%;

    background: $lightElements;

    .dark & {
        background: $darkElements;
    }

    p {
        font-weight: 300;
        color: mix(white, $lightText, 20%);

        .dark & {
            color: mix(black, $darkText, 20%);
        }

        b {
            color: $lightText;

            .dark & {
                color: $darkText;
            }
        }

        margin-bottom: 3px;

        a {
            text-decoration: underline;
        }
    }
}

.thanks {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    column-gap: 30px;
}

.thanks-list {
    display: grid;
    justify-content: center;
    align-items: center;

    grid-template-columns: auto auto;

    column-gap: 40px;
}

@media screen and (max-width: 1000px) {
    .thanks-list {
        display: inline-block;
    }
}

@media screen and (max-width: 690px) {
    .footer {
        height: auto;
    }

    .thanks {
        flex-direction: column;

        row-gap: 40px;
    }
}

@media screen and (max-width: 500px) {
    .footer {
        flex-direction: column;

        row-gap: 40px;
    }
}
</style>
