import { ActionContext } from 'vuex';

export const state = () => ({
    name: 'lily'
});

export const actions = {
    async nuxtServerInit({ dispatch }: ActionContext<any, any>) {
        // nothing todo
    }
};
