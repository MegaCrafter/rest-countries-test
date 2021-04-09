<template>
    <div class="loading-wrapper">
        <div class="loading-circle"></div>
    </div>
</template>

<style lang="scss" scoped>
.loading-wrapper {
    margin: 50px 100px;

    width: 100%;
    height: 100%;
}

.loading-circle {
    background: transparent;
    border: 5px solid white;

    .dark & {
        border: 5px solid black;
    }

    border-left: 5px solid transparent;
    border-top: 5px solid transparent;
    border-right: 5px solid transparent;

    border-radius: 50%;

    width: 100px;
    height: 100px;

    animation: spin 1.1s infinite linear;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
}
</style>
