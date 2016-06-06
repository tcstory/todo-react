import {Dispatcher} from 'flux';


import store from '../store/';

let AppDispatcher = new Dispatcher();

AppDispatcher.register((action)=>{
    switch (action.type) {
        case 'ADD_TODO':
            store.addTodo(action.data);
            store.emitChange();
            break;
        case 'TOGGLE_TODO_STATUS':
            store.toggleTodoStatus(action.data);
            store.emitChange();
            break;
        default:
    }
});

export default AppDispatcher;