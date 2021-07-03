import { timeLineComponents } from '../components.js';

class TimeLine{

    constructor(startTime, endTime, marks = []){
        this.startTime = startTime;
        this.endTime = endTime;
        this.marks = marks;
    }

    start(){
        timeLineComponents.startTimeLabel = this.startTime;
        timeLineComponents.endTimeLabel = this.endTime;
        
    }

    addMark(mark){
        this.marks.push(mark);
    }

    removeMark(markId){

    }
}

export default TimeLine;