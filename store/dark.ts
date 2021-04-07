export interface State {
    dark: boolean;
}

export const state = (): State => ({
    dark: true,
});

export const mutations = {
    modeSwitch(state: State) {
        state.dark = !state.dark;
    },
};
