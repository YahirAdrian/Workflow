import {
    addEventsToNavBar,
    startClock,
    getSession,
    addEventsToTimeLine,
    addMarkFormEvents
} from './functions.js';
import TimeLine from './Objects/Timeline.js';
import WorkFlow from './Objects/WorkFlow.js';

(function(){
    window.addEventListener('DOMContentLoaded', ()=>{
        
        addEventsToNavBar();
        addEventsToTimeLine();
        addMarkFormEvents();
        setInterval(startClock, 1000);
    });
    
    window.app = new WorkFlow();
    // Verify if session has alredy started before
    const {timeline} = getSession();
    app.setSession(getSession());
    app.setTimeline(new TimeLine(timeline.startTime, timeline.endTime, timeline.marks));
    app.getTimeLine().start();

})();