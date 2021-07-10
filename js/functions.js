import { navCompoments, clockComponents, timeLineComponents, newMarkAlertComponents} from './components.js';
import Mark from './Objects/Mark.js';
import Session from './Objects/session.js';
import App from './Objects/WorkFlow.js';

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function addEventsToNavBar(){
    navCompoments.icons.forEach((icon) =>{
        icon.addEventListener('click', (e)=>{
            e.preventDefault();
        });

        icon.addEventListener('mouseenter', ()=>{
            const alternativeText = icon.querySelector('.alternative');
            alternativeText.classList.add('alternative-show');
            icon.classList.add('transparent-background');
        })
        
        icon.addEventListener('mouseleave', ()=>{
            const alternativeText = icon.querySelector('.alternative');
            alternativeText.classList.remove('alternative-show');
            icon.classList.remove('transparent-background');
        })
    });
}

function addEventsToTimeLine(){
    timeLineComponents.newTaskButton.addEventListener('click', ()=> {
        newMarkAlertComponents.alert.style.display="block";
    });
}

function addMarkFormEvents(){
    const {form, alert, btnCancel, formInputs} = newMarkAlertComponents;
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        //Validate
        const time = parseStringToTime(formInputs.time.value);
        const endTime = window.app.getTimeLine().endTimeObject;

        const timeMinutes = (time.hours * 60) + time.minutes;
        const endTimeMinutes = (endTime.hours * 60) + endTime.minutes;

        if(timeMinutes > endTimeMinutes){
            //Show an error message
            if(!form.querySelector('.error')){
                const alertMessage = document.createElement('span');
                alertMessage.classList.add('error');
                alertMessage.textContent = 'No se puede crear una marca con un tiempo mayor al de la linea del tiempo';
                form.insertBefore(alertMessage, form.children[4]);
                setTimeout(()=> alertMessage.remove(), 2000)
            }
        }else{
            //Create a new Mark
            //Fix time bug
            const newMark = new Mark(formInputs.time.value, formInputs.title.value, formInputs.description.value, Mark.importanceLevel.NORMAL);
            window.app.getTimeLine().addMark(newMark);
            window.app.getTimeLine().showMarks();
            form.reset();
            alert.style.display = "none";
        }
    });

    btnCancel.addEventListener('click', (e)=>{
        // TODO: RESET VALUES OF FORM
        e.preventDefault();
        alert.style.display ="none";
        form.reset();
    });

}

function startClock(){
    const date = new Date();
    const time = {
        hour: (date.getHours() >12) ? date.getHours()-12 : date.getHours(),
        minutes: (date.getMinutes() < 10) ? "0" + date.getMinutes() :  "" + date.getMinutes(),
        am_pm: (date.getHours() >= 12) ? 'PM' : 'AM',
        dayOfMonth: date.getDate(),
        dayOfWeek: daysOfWeek[date.getDay()-1],
        month: months[date.getMonth()],
        year: date.getFullYear()
    }
    
    clockComponents.timeLabel.textContent = `${time.hour}:${time.minutes} ${time.am_pm}`;
    clockComponents.dateLabel.textContent = `${time.dayOfWeek} ${time.dayOfMonth} de ${time.month} del ${time.year}`;
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function getSession(){
    if(localStorage.getItem('session')){
        const session = JSON.parse(localStorage.getItem('session'));
        return new Session(session.data, session.timeline);

    }else{
        //Open a form to create a session workflow
        console.log('Not sesssion found')
        return null;
    }
}

function parseStringToTime(stringTime){
    return {
        hours: stringTime.length === 4? parseInt(stringTime.substr(stringTime.indexOf(':')-1, 1)) : parseInt(stringTime.substr(stringTime.indexOf(':')-2, 2)),
        minutes: parseInt(stringTime.substr(stringTime.indexOf(':')+1, 2)),
    };
}

function updateLocalStorage(){
    localStorage.setItem('session', JSON.stringify(window.app))
    /*{"data":{"id":1625331261493,"session_name":"","date":"2021-07-03T16:54:21.493Z"},
    "timeline":{"startTime":"07:00","endTime":"13:00","marks":[{"time":"8:30","title":"Programar Frontend con CSS",
    "description":"Lorem ipsum","importance":0},{"time":"10:30","title":"Programar Frontend con JS","description":
    "Lorem ipsum dolor","importance":0}]}}*/
}

export { 
    addEventsToNavBar,
    startClock,
    isEmpty,
    getSession,
    parseStringToTime,
    addEventsToTimeLine,
    addMarkFormEvents,
    updateLocalStorage
};