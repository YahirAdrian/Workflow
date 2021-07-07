import {
    addEventsToNavBar,
    startClock,
    getSession
} from './functions.js';
import TimeLine from './Objects/Timeline.js';
import WorkFlow from './Objects/WorkFlow.js';

(function(){
    window.addEventListener('DOMContentLoaded', ()=>{
        
        addEventsToNavBar();
        setInterval(startClock, 1000);
    });
    
    const app = new WorkFlow();
    // Verify if session has alredy started before
    const {timeline} = getSession();
    app.setSession(getSession());
    app.setTimeline(new TimeLine(timeline.startTime, timeline.endTime, timeline.marks));
    app.getTimeline().start();
    console.log(app.getTimeline())
})();