<template>
    <p v-if="country === undefined || !country.name" class="country-button">
        Loading...
    </p>
    <NuxtLink v-else :to="'/' + country.name">
        <p class="country-button">{{ country.name }}</p>
    </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        countrycode: {
            type: String,
            required: true,
        },
    },

    data: () => ({
        country: {},
    }),

    async fetch() {
        this.country = await fetch(
            'https://restcountries.eu/rest/v2/alpha/' +
                this.countrycode +
                '?fields=name'
        ).then((res) => res.json());
    },
});
</script>

<style lang="scss" scoped>
.country-button {
    padding: 5px 15px;

    border-radius: 3px;

    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

    margin: 5px;

    transition: 0.3s;

    background: $lightElements;
    &:hover {
        background: mix(black, $lightElements, 10%);
    }

    .dark & {
        background: $darkElements;
        &:hover {
            background: mix(white, $darkElements, 10%);
        }
    }
}
</style>
