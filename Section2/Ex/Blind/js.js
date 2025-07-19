const app = Vue.createApp({

    data: function () {
        return {
            title: 'Blind',
            userName: '',
            confirmNamedata: '',
            urlImage: ''

        }
    },

    methods: {
        updateName(e) {
            this.userName = e.target.value;
            console.log(e.data);

        },
        confirmName(e) {
            this.confirmNamedata = this.userName;
        },


        updateImageUrl(e) {
            this.urlImage = e.target.value;
        
        },

    }

}).mount('#app')