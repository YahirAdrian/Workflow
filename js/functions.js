import { navCompoments, clockComponents} from './components.js';
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

function startClock(){
    const date = new Date();
    const time = {
        hour: (date.getHours() >12) ? date.getHours()-12 : date.getHours(),
        minutes: (date.getMinutes() < 10) ? "0" + date.getMinutes() :  "" + date.getMinutes(),
        am_pm: (date.getHours() >= 12) ? 'PM' : 'AM',
        day: date.getDate(),
        dayOfWeek: daysOfWeek[date.getDay()-1],
        month: months[date.getMonth()],
        year: date.getFullYear()
    }
    
    clockComponents.timeLabel.textContent = `${time.hour}:${time.minutes} ${time.am_pm}`;
    clockComponents.dateLabel.textContent = `${time.dayOfWeek} ${time.day} de ${time.month} del ${time.year}`;
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function startSession(){
    let session;
    if(localStorage.getItem('session')){
        const sessionData = JSON.parse(localStorage.getItem('session'));
        session = new Session(sessionData.data, sessionData.timeline);

    }else{

    }
}


export { 
    addEventsToNavBar,
    startClock,
    isEmpty,
    startSession
};