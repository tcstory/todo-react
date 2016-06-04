import EventEmitter from 'events'
import assign from 'object-assign'

const STATUS = {
    DONE: 0,
    CANCEL: 1,
    ONGOING: 2
};

let _data = {
    userInfo: {
        userName: '中华田园犬',
        userId: '10000',
        userAvatar: 'http://7qn8rp.com1.z0.glb.clouddn.com/dog.jpg'
    },
    todoList: [
    ]
};

let store = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _data;
    },
    addTodo: function (todo) {
        _data.todoList.push(todo);
    },
    toggleTodoStatus: function (data) {
        for (let todo of _data.todoList) {
            if (todo.id === data.id) {
                todo.status = data.status;
                break;
            }
        }
    },
    emitChange: function() {
        this.emit('change');
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});


export default store;

