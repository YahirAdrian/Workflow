import {
    addEventsToNavBar,
    startClock,
    startSession
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
    startSession();

})();