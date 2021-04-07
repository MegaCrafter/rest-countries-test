<template>
    <Loading v-if="loading" />
    <div v-else class="country-wrapper">
        <CountryNotFound v-if="country[0] === undefined" />
        <CountryInfo v-else :country="country[0]" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    transition: 'home',
    asyncData({ params }) {
        const countryName = params.country;

        return { countryName };
    },

    data: () => ({
        country: {},
        loading: true,
    }),

    async fetch() {
        this.country = await fetch(
            'https://restcountries.eu/rest/v2/name/' +
                this.countryName +
                '?fullText=true&fields=name;capital;population;flag;region;subregion;nativeName;currencies;topLevelDomain;languages;borders;alpha2Code'
        ).then((res) => res.json());

        this.loading = false;
    },
});
</script>

<style lang="scss" scoped>
.country-wrapper {
    padding: 40px 100px;
}
</style>
