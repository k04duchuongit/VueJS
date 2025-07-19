const assigmnet = Vue.createApp({
    data: function () {
        return {
            number: 0,
            oldText: '',
            time: null,
            countdown: 5,

        }
    },
    methods: {
        increase1() {
            this.number += 1;
        },
        increase5() {
            this.number += 5;
        }
    },

    computed: {
        resultText() {
            if (this.number < 10) {
                this.oldText = 'Số quá nhỏ';
                return 'Số quá nhỏ';
            } else if (this.number < 20) {
                return 'Số nhỏ';
            } else if (this.number < 30) {
                return 'Số trung bình';
            } else if (this.number < 40) {
                return 'Số lớn';
            } else {
                return 'Số quá lớn';
            }
        }
    },
    watch: {
        resultText() {  // theo dõi giá trị resultText trả về

            if (this.time) {
                clearTimeout(this.time); // nếu có timeout tạo trước đó thì xóa
            
            }

            this.time = setTimeout(() => {
                this.number = 0;
            }, this.countdown * 1000);

        }
    }
}).mount('#assignment');