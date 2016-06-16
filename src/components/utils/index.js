import {STATUS} from '../constants/';


function getEmptyTask() {
    return {
        title: '',
        id: -1,
        createTime: -1,
        status: STATUS.UNFINISHED,
        time: [],
        subTasks: [],
        tags: []
    }
}
function getEmptySubTask() {
    return {
        title: '',
        id: -1,
        status: STATUS.UNFINISHED
    }
}

export {getEmptyTask, getEmptySubTask};