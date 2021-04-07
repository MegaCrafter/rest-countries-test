<template>
    <div class="container" :class="{ dark }">
        <Header @mode-switch="modeSwitch" />
        <Nuxt />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
    computed: {
        dark() {
            return this.$store.state.dark.dark;
        },
    },
    methods: {
        ...mapMutations({
            modeSwitch: 'dark/modeSwitch',
        }),
    },
});
</script>

<style lang="scss">
html {
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
    user-select: none;

    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: $lightText;

    .dark & {
        color: $darkText;
    }
}

b {
    font-weight: 600;
}

.container {
    width: 100%;
    min-height: 100vh;

    transition: 0.3s;

    background: $lightBg;
    color: $lightText;

    &.dark {
        background: $darkBg;
        color: $darkText;
    }
}

.home-enter-active,
.home-leave-active {
    transition: opacity 0.3s;
}
.home-enter,
.home-leave-active {
    opacity: 0;
}
</style>
