export default {
    increment(context) {
        setTimeout(() => {
            context.commit('increment');
        }, 1000);
    },
    increase(context, payload) {
        console.log(context);
        setTimeout(() => {
            context.commit('increase', payload);
        }, 1000);
    },
}