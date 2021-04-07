<template>
    <div class="country-card" @click="countryClicked">
        <img
            v-if="!country.placeholder"
            :src="'flags/' + country.alpha2Code.toLowerCase() + '.svg'"
            :alt="country.name + ' Flag'"
            class="country-flag"
        />

        <div v-if="!country.placeholder" class="country-info">
            <h2 class="country-name">{{ country.name }}</h2>
            <p class="country-subinfo">
                <b>Population:</b> {{ country.population.toLocaleString() }}
            </p>
            <p class="country-subinfo"><b>Region:</b> {{ country.region }}</p>
            <p class="country-subinfo"><b>Capital:</b> {{ country.capital }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        country: {
            type: Object,
            required: true,
        },
    },

    methods: {
        countryClicked() {
            this.$router.push('/' + this.country.name);
        },
    },
});
</script>

<style lang="scss" scoped>
.country-card {
    width: 280px;
    height: 400px;

    background: $lightElements;

    .dark & {
        background: $darkElements;
    }

    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    transition: 0.3s;

    cursor: pointer;
}

.country-card:hover {
    transform: scale(1.1);
}

.country-flag {
    width: 280px;
}

.country-info {
    padding: 20px 20px;

    display: flex;
    flex-direction: column;
}

.country-name {
    font-size: 20px;
    margin-bottom: 15px;
}

.country-subinfo {
    font-size: 14px;
    padding: 3px;
}

@media screen and (max-width: 550px) {
    .country-card {
        width: 230px;
        height: 370px;
    }

    .country-flag {
        width: 230px;
    }

    .country-card:hover {
        transform: scale(1);
    }
}
</style>
