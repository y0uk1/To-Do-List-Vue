var vm = new Vue({
    el: "#app",
    data: {
        newItem: "",
        todos:[],
    },
    methods: {
        addItem: function(newItem){
            this.todos.push(newItem)
            this.newItem = ""
        },
        deleteItem: function(index){
            this.todos.splice(index, 1)
        }
    },
})