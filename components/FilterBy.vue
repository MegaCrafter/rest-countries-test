<template>
    <div
        v-click-outside="
            () => {
                optionsVisible = false;
            }
        "
        class="filterby-wrapper"
        @click="toggleVisible"
    >
        <div class="filterby-box" :style="'height: ' + height">
            <p class="filterby-text" :class="{ active: selectedOption }">
                {{ selectedOption || 'Filter by Region' }}
            </p>
            <i class="fa fa-caret-down"></i>
        </div>

        <ul
            class="filterby-options"
            :class="{ visible: optionsVisible }"
            :style="'width: ' + width"
        >
            <li
                v-for="(option, index) in options"
                :key="option"
                class="filterby-option"
                :style="'animation-delay: ' + (0.05 + index * 0.1) + 's'"
                @click="clickedOption(option)"
            >
                {{ option }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
    props: {
        width: {
            type: String,
            required: true,
        } as PropOptions,

        height: {
            type: String,
            required: true,
        } as PropOptions,
    },

    data: () => ({
        options: ['None', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
        optionsVisible: false,
        selectedOption: '',
    }),

    methods: {
        toggleVisible() {
            this.optionsVisible = !this.optionsVisible;
        },
        clickedOption(option: string) {
            if (option === 'None') option = '';

            this.selectedOption = option;
            this.$emit('option-changed', option);
        },
    },
});
</script>

<style lang="scss" scoped>
.filterby-wrapper {
    position: relative;
}

.filterby-box {
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 200px;

    .dark & {
        background: $darkElements;

        &:hover {
            background: mix(white, $darkElements, 5%);
        }
    }

    &:hover {
        background: mix(black, $lightElements, 10%);
    }

    transition: 0.3s;

    background: $lightElements;
    color: $input;

    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

    border-radius: 3px;

    padding: 10px 20px;

    .filterby-text {
        font-size: 14px;

        &.active {
            color: $lightText;

            .dark & {
                color: $darkText;
            }
        }
    }
}

.filterby-options {
    position: absolute;
    top: 105%;

    z-index: 5;

    max-height: 0;
    &.visible {
        max-height: 300px;
        padding: 5px 8px;

        .filterby-option {
            animation: slideIn 0.3s forwards;
        }
    }

    overflow: hidden;

    list-style: none;

    background: $lightElements;
    border-radius: 3px;

    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

    transition: 0.3s;

    .filterby-option {
        opacity: 0;
        padding: 6px;
        transition: 0.3s;

        cursor: pointer;

        &:hover {
            background: mix(black, $lightElements, 10%);

            .dark & {
                background: mix(white, $darkElements, 10%);
            }
        }
    }

    .dark & {
        background: $darkElements;
    }
}

@keyframes slideIn {
    from {
        transform: translateX(-20px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>
