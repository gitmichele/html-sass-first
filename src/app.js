function initVue() {

    new Vue({

        el: '#app',
        data: {
            value: 0
        },
        methods: {

            plusOne: function() {

                this.value++
            },
            minusOne: function () {

                this.value--
            },
        }
    });
};

document.addEventListener('DOMContentLoaded', initVue);
