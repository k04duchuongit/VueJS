// Watch là để xử lý logic chứ không render ra giao diện
Vue.createApp({
    data() {
        return {
            age: '',
            warningMessage: ''
        };
    },
    watch: {
        age(newAge) {
            if (newAge !== '' && newAge < 18) {
                this.warningMessage = '⚠️ Bạn chưa đủ 18 tuổi!';
            } else {
                this.warningMessage = '';
            }
        }
    }
}).mount('#app');
