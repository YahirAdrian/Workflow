import TimeLine from "./Timeline.js";
import { isEmpty } from '../functions.js';
class Session{
    constructor(data ={}, timeline = new TimeLine()){

        if(isEmpty(data)){
            //Create a new data object
            data = {
                id: Date.now(),
                session_name: '',
                date: new Date(),
            }
        }

        this.data = data;
        this.timeline = timeline;
    }

    updateData(data){
        this.data = data;
    }

    updateTimeline(timeline){
        this.timeline = timeline;
    }

    destroy(){
        this.data = null;
        this.timeline = null;
    }

    getTimeline(){
        return this.timeline;
    }
}

export default Session;