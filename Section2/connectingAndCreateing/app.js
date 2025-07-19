const app = Vue.createApp({
    data: function () {
        return {
            courseGoalA: 'duchuong k04',
            courseGoalB: 'development duchuong',
            vueLink : 'https://vuejs.org/'
        };
    },

    methods : {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
}
)

app.mount('#user-goal');