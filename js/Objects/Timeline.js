import { timeLineComponents } from '../components.js';
import { parseStringToTime } from '../functions.js';

class TimeLine{

    constructor(startTime, endTime, marks = []){
        this.startTime = startTime;
        this.endTime = endTime;
        this.marks = marks;
    }
    
    defineTimeObjects(){
        this.startTimeObject = {
            hours: parseInt(this.startTime.substr(this.startTime.indexOf(':')-1, 1)),
            minutes: parseInt(this.startTime.substr(this.startTime.indexOf(':')+1, 2)),
        }
        
        this.endTimeObject = {
            hours: parseInt(this.endTime.substr(this.endTime.indexOf(':')-2, 2)),
            minutes: parseInt(this.endTime.substr(this.endTime.indexOf(':')+1, 2))
        }
    }
    
    start(){
        this.defineTimeObjects();
        timeLineComponents.startTimeLabel.textContent = this.startTime;
        timeLineComponents.endTimeLabel.textContent = this.endTime;
        this.timeDifference = this.getTimeDifference(this.startTime, this.endTime);
        //Paint marks stored
        this.showMarks();
        window.setInterval(()=>this.updateActualTimeProgress(), 1000)
    }

    addMark(mark){
        this.marks.push(mark);
    }

    removeMark(markId){

    }

    showMarks(){
        
        this.marks.forEach((mark)=>{
            const newMark = document.createElement('div');
            newMark.classList.add('marca');

            const markTime  = parseStringToTime(mark.time);
            newMark.style.left = `${this.getTimePercentage(markTime)}%`;
            timeLineComponents.marksBox.appendChild(newMark);
        });

    }

    getTimeDifference(startTime, endTime){
        //Substract time betwen both times
        let hoursToSubstract = 0;
        if((endTime.minutes - startTime.minutes) < 0 ){
            hoursToSubstract = 1;
        }
        const timeDifference = {
            hours: endTime.hours - startTime.hours - hoursToSubstract,
            minutes: endTime.minutes - startTime.minutes
        }

        return timeDifference;
    }

    getTimePercentage(time){
        //Get the time difference between the mark time and startTime object
        let percentage = 0;
        const timeDifference = this.getTimeDifference(this.startTimeObject, time);
        const totalMarkTime = (timeDifference.hours*60) + timeDifference.minutes;

        //Get the total time difference of the timeline
        const totalTimeDifference = this.getTimeDifference(this.startTimeObject, this.endTimeObject)
        const  totalTime= (totalTimeDifference.hours * 60) + totalTimeDifference.minutes;

        //Rule of three to calculate percentage
        percentage = (totalMarkTime * 100 )/totalTime;

        return percentage;
    }

    updateActualTimeProgress(){
        //First get the actual time
        let percentage = 0;
        const date = new Date();
        const time = {
            hours: date.getHours(),
            minutes: date.getMinutes()
        }

        //Then  get the difference between times
        const totalTimeDifference = this.getTimeDifference(this.startTimeObject, this.endTimeObject);
        const totalMinutesDifference = (totalTimeDifference.hours * 60) + totalTimeDifference.minutes;

        const lapsedTime =  this.getTimeDifference(this.startTimeObject, time);
        const lapsedMinutes = (lapsedTime.hours * 60) + lapsedTime.minutes;

        
        //Next do a rule of three to get the percentage
        percentage = (lapsedMinutes * 100) / totalMinutesDifference;
        
        //And finally paint percentage on progress bar
        timeLineComponents.timeLine.style = `background: -webkit-linear-gradient(left, #C0DA1F ${percentage}%, #FFF 0%);`;
        console.log(timeLineComponents.timeLine)
    }
    
}

export default TimeLine;