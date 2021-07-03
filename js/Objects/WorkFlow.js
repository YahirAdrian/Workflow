import Session from "./session";
import TimeLine from "./Timeline";

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

    getTimeline(){
        return this.timeline;
    }

}

export default WorkFlow;