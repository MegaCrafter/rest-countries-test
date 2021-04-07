<template>
    <div class="wrapper">
        <Filters
            @searchbar-input="searchbarInput"
            @filter-option-changed="filterOptionChanged"
        />

        <div class="countries-grid">
            <CountryCard
                v-for="country in filteredCountries"
                :key="country.name"
                :country="country"
                :style="country.placeholder ? 'visibility: hidden' : ''"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { RestCountry } from 'index';

export default Vue.extend({
    data: () => ({
        searchbar: '',
        filterby: '',
        countries: [] as Array<RestCountry>,
    }),

    async fetch() {
        this.countries = await fetch(
            'https://restcountries.eu/rest/v2/all?fields=name;capital;population;alpha2Code;region;subregion;nativeName;currencies;topLevelDomain;languages;borders'
        ).then((res) => res.json());
    },

    computed: {
        filteredCountries() {
            const filtered = this.countries.filter(
                (country) =>
                    country.name
                        .toLowerCase()
                        .startsWith(this.searchbar.toLowerCase()) &&
                    (!this.filterby || country.region === this.filterby)
            );

            const placeholder = { ...this.countries[0], placeholder: true };
            while (filtered.length < 4) {
                filtered.push(placeholder);
            }

            return filtered;
        },
    },

    methods: {
        searchbarInput(e: InputEvent & { target: HTMLInputElement }) {
            this.searchbar = e.target.value || '';
        },

        filterOptionChanged(option: string) {
            this.filterby = option;
        },
    },
});
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 40px 100px;
    overflow-x: hidden;
}

.countries-grid {
    display: grid;
    justify-content: space-between;
    align-items: center;

    grid-template-columns: repeat(4, auto);
    row-gap: 50px;

    margin-top: 50px;
}

@media screen and (max-width: 1350px) {
    .countries-grid {
        grid-template-columns: repeat(3, auto);
    }
}

@media screen and (max-width: 1120px) {
    .countries-grid {
        grid-template-columns: repeat(2, auto);
    }
}

@media screen and (max-width: 800px) {
    .countries-grid {
        grid-template-columns: repeat(1, auto);

        justify-content: center;
    }
}
</style>
