<template>
    <div class="filters-wrapper">
        <SearchBar :height="height" @input="searchbarInput" />
        <FilterBy
            width="200px"
            :height="height"
            @option-changed="filterOptionChanged"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data: () => ({
        height: '40px',
    }),

    methods: {
        filterOptionChanged(option: string) {
            this.$emit('filter-option-changed', option);
        },

        searchbarInput(e: InputEvent) {
            this.$emit('searchbar-input', e);
        },
    },
});
</script>

<style lang="scss" scoped>
.filters-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width: 910px) {
    .filters-wrapper {
        flex-direction: column;
        row-gap: 20px;
    }
}
</style>
