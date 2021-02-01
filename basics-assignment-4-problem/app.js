const app = Vue.createApp({
    data() {
        return {
            className: '',
            show: true,
            color: ''
        }
    },
    methods: {
        evaluateInput(evt) {
            const value = evt.target.value;

            if (value === 'user1' || value === 'user2') {
                this.className = value;
            }
        },
        toggleParagraphe() {
            this.show = !this.show;
        }
    },
});

app.mount('#assignment');