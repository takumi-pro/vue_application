import Vue from 'vue';
// import SampleComponent from './components/sample-component.vue';

// const app = new Vue({
//     el: "#app",
//     components: {
//         SampleComponent
//     }
// })
// var STORAGE_KEY = 'todos-vuejs-demo'
// var todoStorage = {
//   fetch: function() {
//     var todos = JSON.parse(
//       localStorage.getItem(STORAGE_KEY) || '[]'
//     )
//     todos.forEach(function(todo, index) {
//       todo.id = index
//     })
//     todoStorage.uid = todos.length
//     return todos
//   },
//   save: function(todos) {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
//   }
// }

new Vue({
    el: "#app",
    data: {
        inputMsg: '',
        todos: [
            { id: 1, comment: 'takumi', status: 0, isCheck: false }
        ],
        options: [
            { value: -1, label: 'すべて' },
            { value: 0, label: '作業中' },
            { value: 1, label: '完了' }
        ],
        current: -1
    },
    methods: {
        doAdd: function(e,value) {
            if (!this.inputMsg.length) {
                return
            }

            if (!this.todos.length) {
                this.todos.push({
                    id: 1,
                    comment: this.inputMsg,
                    status: 0,
                    isCheck: false
                })
            }else{
                const newId = this.todos.slice(-1)[0].id + 1;
                this.todos.push({
                    id: newId,
                    comment: this.inputMsg,
                    status: 0,
                    isCheck: false
                })
            }
            this.inputMsg = "";
        },
        checkItem: function(item) {
            if (item.isCheck) {
                item.isCheck = false;
                item.status = 0;
            }else{
                item.isCheck = true;
                item.status = 1;
            }
        },
        removeItem: function(item) {
            let index = this.todos.indexOf(item);
            this.todos.splice(index,1);
        }
    },
    computed: {
        computedTodos: function() {
            return this.todos.filter((el) => {
                return this.current < 0 ? true : this.current === el.status; 
            },this)
        },
        labels() {
            return this.options.reduce(function(a, b) {
              return Object.assign(a, { [b.value]: b.label })
            }, {})
          }
    }
})