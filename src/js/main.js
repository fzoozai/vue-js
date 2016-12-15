Vue.component('tasks-app', {

    props: ['list'],

    template: '#tasks-template',

    computed: {
        remaining: function () {
            return this.list.filter(function (task) {
                return !task.completed;
            }).length;
        }
    }

});

new Vue({
    el: '#app',

    data: {

        tasks: [
            { body:'Go to the store', completed: false },
            { body:'Go to the bank', completed: false },
            { body:'Go to the cinema', completed: true }
        ]
    },

    methods: {
        toggleCompleted: function (task) {
            task.completed = !task.completed;
        }
    }

});
