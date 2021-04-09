<template>
    <article class="country-info-wrapper">
        <IconText
            class="backbtn"
            icon="fa fa-arrow-left"
            text="Back"
            button
            solid
            @click="back"
        />
        <div class="country-info">
            <img
                :src="'flags/' + country.alpha2Code.toLowerCase() + '.svg'"
                :alt="country.name + ' Flag'"
                class="country-flag"
            />
            <div class="country-subinfo">
                <h1 class="country-name">{{ country.name }}</h1>
                <div class="country-info-grid">
                    <div class="country-info-grid-inner info-left">
                        <p><b>Native Name:</b> {{ country.nativeName }}</p>
                        <p>
                            <b>Population:</b>
                            {{ country.population.toLocaleString() }}
                        </p>
                        <p><b>Region:</b> {{ country.region }}</p>
                        <p><b>Sub Region:</b> {{ country.subregion }}</p>
                        <p><b>Capital:</b> {{ country.capital }}</p>
                    </div>

                    <div class="country-info-grid-inner info-right">
                        <p>
                            <b>Top Level Domain:</b>
                            {{ country.topLevelDomain.join(', ') }}
                        </p>
                        <p>
                            <b>Currencies:</b>
                            {{
                                country.currencies
                                    .map((curr) => curr.name)
                                    .join(', ')
                            }}
                        </p>
                        <p>
                            <b>Languages:</b>
                            {{
                                country.languages
                                    .map((lang) => lang.name)
                                    .join(', ')
                            }}
                        </p>
                    </div>
                </div>
                <div class="country-borders">
                    <p class="country-borders-title">Border Countries:</p>
                    <div class="country-borders-buttons">
                        <CountryButton
                            v-for="border in country.borders"
                            :key="border"
                            :countrycode="border"
                        />
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { RestCountryExtended } from 'index';

export default Vue.extend({
    props: {
        country: {
            type: Object as PropType<RestCountryExtended>,
            required: true,
        },
    },

    methods: {
        back() {
            this.$router.back();
        },
    },
});
</script>

<style lang="scss" scoped>
.country-info-wrapper {
    display: flex;
    flex-direction: column;
}

.backbtn {
    align-self: flex-start;
}

.country-flag {
    width: 450px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);
}

.country-info {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    column-gap: 70px;

    margin-top: 50px;
}

.country-name {
    margin-bottom: 20px;

    word-wrap: break-word;

    user-select: text;

    font-size: 32px;
}

.country-subinfo {
    display: flex;
    flex-direction: column;

    max-width: 550px;

    user-select: text;
}

.country-info-grid {
    display: flex;

    column-gap: 120px;
}

.country-info-grid-inner {
    display: flex;
    flex-direction: column;

    row-gap: 7px;

    font-size: 14px;

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
    }
}

.country-borders {
    display: flex;

    align-items: baseline;

    margin-top: 30px;
}

.country-borders-title {
    margin-right: 20px;
}

.country-borders-buttons {
    display: flex;
    flex-wrap: wrap;

    max-width: 400px;
}

@media screen and (max-width: 1000px) {
    .country-info {
        flex-direction: column;

        justify-content: center;
        align-items: center;

        row-gap: 40px;

        margin-top: 50px;
    }
}

@media screen and (max-width: 550px) {
    .country-flag {
        width: 95%;
    }

    .country-info-grid {
        flex-direction: column;

        row-gap: 50px;
    }

    .country-name {
        font-size: 24px;
    }
}
</style>
