<template>
    <div
        class="icontext-wrapper"
        :class="{ 'icontext-btn': button, solid }"
        @click="textClicked"
    >
        <i
            :class="[
                icon,
                glow === 'dark' ? 'glow-dark' : '',
                glow === 'light' ? 'glow-light' : '',
            ]"
            aria-hidden="true"
        ></i>
        <p class="icontext">{{ text }}</p>
    </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
    props: {
        icon: {
            type: String,
            required: true,
        } as PropOptions,

        text: {
            type: String,
            required: true,
        } as PropOptions,

        button: {
            type: Boolean,
        },

        solid: {
            type: Boolean,
        },

        glow: {
            type: String,
            default: '',
        },
    },

    methods: {
        textClicked(e: Event) {
            this.$emit('click', e);
        },
    },
});
</script>

<style lang="scss" scoped>
.icontext-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    column-gap: 10px;

    padding: 8px 15px;

    border-radius: 3px;
}

.icontext-btn {
    transition: 0.3s;

    cursor: pointer;

    &.solid {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

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
}

.icontext-btn:hover:not(.solid) {
    background: $darkBg;
    color: $darkText;

    .dark & {
        background: $lightBg;
        color: $lightText;
    }
}

i.glow-dark {
    color: rgb(80, 200, 230);
    text-shadow: 0 0 7px rgb(80, 200, 230);
}

i.glow-light {
    color: rgb(230, 200, 80);
    text-shadow: 0 0 7px rgb(230, 200, 80);
}
</style>
