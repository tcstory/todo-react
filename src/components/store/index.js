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

let _d = localStorage.getItem('todo-list');
if (_d) {
    _data.todoList = JSON.parse(_d);
}
let store = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _data;
    },
    addTodo: function (todo) {
        _data.todoList.unshift(todo);
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
        this._save();
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },
    _save: function () {
        localStorage.setItem('todo-list',JSON.stringify(_data.todoList))
    }
});


export default store;

