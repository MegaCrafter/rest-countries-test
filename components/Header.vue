<template>
    <nav class="navbar">
        <NuxtLink to="/">
            <h1 class="title">Where in the world?</h1>
        </NuxtLink>
        <IconText
            class="icontext"
            :icon="dark ? 'fa fa-moon' : 'fa fa-sun'"
            :text="dark ? 'Dark Mode' : 'Light Mode'"
            :glow="dark ? 'dark' : 'light'"
            button
            @click="modeSwitch"
        />
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    computed: {
        dark() {
            return this.$store.state.dark.dark;
        },
    },
    methods: {
        modeSwitch() {
            this.$emit('mode-switch');
        },
    },
});
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 100px;

    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

    transition: 0.3s;

    background: $lightElements;

    .dark & {
        background: $darkElements;
    }
}

@media screen and (max-width: 800px) {
    .navbar {
        padding: 20px 30px;
    }
}

@media screen and (max-width: 550px) {
    .navbar {
        padding: 20px 15px;
    }

    .title {
        font-size: 14px;
    }

    .icontext {
        font-size: 11px;
    }
}
</style>
