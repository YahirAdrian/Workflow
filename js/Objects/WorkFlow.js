import Session from "./session.js";
import TimeLine from "./Timeline.js";

class WorkFlow{
    constructor(session = new Session(), timeline = new TimeLine()){
        this.session = session;
        this.timeline = timeline;
    }

    setSession(session){
        this.session = session;
    }

    getSession(){
        return this.session;
    }

    setTimeline(timeline){
        this.timeline = timeline;
    }

    getTimeLine(){
        return this.timeline;
    }

}

export default WorkFlow;