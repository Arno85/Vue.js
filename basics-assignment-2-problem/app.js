const app = Vue.createApp({
    data() {
        return {
            output1: '',
            output2: ''
        }
    },
    methods: {
        showAlert() {
            alert('This is an alert!');
        },
        updateOutput1(evt) {
            this.output1 = evt.target.value;
        },
        updateOutput2(evt) {
            this.output2 = evt.target.value;
        }
    }
});

app.mount('#assignment');