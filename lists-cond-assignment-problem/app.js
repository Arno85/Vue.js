const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            task: '',
            show: true
        };
    },
    computed: {
        buttonCaption() {
            return this.show ? 'Hide' : 'Show';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.task);
        },
        toggleList() {
            this.show = !this.show;
        }
    }
});

app.mount('#assignment');