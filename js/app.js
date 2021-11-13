import {
    addEventsToNavBar,
    startClock,
    getSession,
    addEventsToTimeLine,
    addMarkFormEvents
} from './functions.js';
import TimeLine from './Objects/Timeline.js';
import WorkFlow from './Objects/WorkFlow.js';
import {configAlertComponents} from './components.js';

(function(){
    window.addEventListener('DOMContentLoaded', ()=>{
        
        addEventsToNavBar();
        addEventsToTimeLine();
        addMarkFormEvents();
        setInterval(startClock, 1000);
    });
    
    window.app = new WorkFlow();
    // Verify if session has alredy started before

    if(getSession()){
        const {timeline} = getSession();
        app.setSession(getSession());
        app.setTimeline(new TimeLine(timeline.startTime, timeline.endTime, timeline.marks));
        app.getTimeLine().start();
    }else{
        //Open a form to create a session workflow
        console.log("Aqui")
        const {configAlert, form, startTimeInput, endTimeInput, sumbit} = configAlertComponents;
        configAlert.style.display = "block";
    }


})();