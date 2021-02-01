Vue
    .createApp({
        data() {
            return {
                name: 'Tatinoar',
                age: 35,
                imageLink: 'https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg'
            };
        }, methods: {
            older() {
                return this.age + 5;
            },
            favoriteNumber() {
                return Math.random();
            }
        }
    })
    .mount('#assignment');