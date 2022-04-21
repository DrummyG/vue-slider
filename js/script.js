const app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
        timer: null,
    },
    methods: {
        slideUp(){
            this.counter >= 4 ? this.counter = 0 : this.counter++;
        },
        slideDown(){
            this.counter <= 0 ? this.counter = 4 : this.counter--;
        },
        interval(){
            this.timer = setInterval(() => {this.slideUp()}, 3000);
        },
        clear(){
            clearInterval(this.timer);
            this.timer = null;
        }
    },
    mounted(){
        this.interval();
    }
})