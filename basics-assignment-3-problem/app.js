const app = Vue.createApp({
    data() {
        return {
            number: 0,
            result: ''
        };
    },
    watch: {
        number(value) {
            console.log(value);

            if (value < 37) {
                this.result = 'Not there yet!';
            }
            else if (value > 37) {
                this.result = 'Too much!';
            }
            else if (value === 37) {
                this.result = value;
            }
        },
        result() {
            setTimeout(() => {
                this.number = 0;
            }, 5000);
        }
    },
    methods: {
        add(num) {
            this.number += num;
        }
    }
});

app.mount('#assignment');