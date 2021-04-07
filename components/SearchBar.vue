<template>
    <div class="searchbar-wrapper">
        <input
            id="searchbar"
            class="searchbar"
            type="text"
            :style="'height: ' + height"
            placeholder="Search for a text..."
            @input="input"
        />
        <label
            for="searchbar"
            class="searchbar-icon"
            :style="'width: ' + height"
        >
            <i class="fa fa-search"></i>
        </label>
    </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
    props: {
        height: {
            type: String,
            required: true,
        } as PropOptions,
    },

    methods: {
        input(e: InputEvent) {
            this.$emit('input', e);
        },
    },
});
</script>

<style lang="scss" scoped>
.searchbar-wrapper {
    position: relative;
    display: inline-block;
}

.searchbar {
    position: relative;

    outline: none;
    border: none;

    .dark & {
        background: $darkElements;
    }

    background: $lightElements;
    color: $input;

    transition: 0.3s;

    padding: 10px 10px 10px 50px;

    border-radius: 3px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

    font-size: 14px;

    width: 450px;
}

.searchbar-icon {
    position: absolute;
    left: 0px;
    top: 0;
    bottom: 0;
    padding-left: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 550px) {
    .searchbar {
        width: 280px;
    }
}
</style>
