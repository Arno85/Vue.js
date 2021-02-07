export default {
    props: ["type", "caption"],
    computed: {
        classes() {
            return {
                "badge--admin": this.type === "admin",
                "badge--author": this.type === "author",
            };
        },
    },
};