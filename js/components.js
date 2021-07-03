const navCompoments = {
    nav: document.querySelector('nav#opciones'),
    icons: document.querySelectorAll('.icono'),
    workflow_icon: document .querySelector('#opciones .icono:first-child'),
    tasks_icon: document .querySelector('#opciones .icono:nth-child(2)'),
    settings_icon: document .querySelector('#opciones .icono:nth-child(3)'),
    menu_icon: document .querySelector('#opciones .icono:nth-child(4)'),
};

const clockComponents = {
    clockBox: document.querySelector('.fecha-y-hora'),
    dateLabel: document.querySelector('#fecha'),
    timeLabel: document.querySelector('#hora')
}

const timeLineComponents = {
    timeLineBox: document.querySelector('.caja-linea'),
    timeLine: document.querySelector('.linea-del-tiempo'),
    newTaskButton: document.querySelector('#nueva-tarea'),
    marksBox: document.querySelector('.marcas'),
    timeMark: document.querySelector('#actual'),
    startTimeLabel: document.querySelector('#inicio'),
    endTimeLabel: document.querySelector('#fin')
}

export {
    navCompoments,
    clockComponents,
    timeLineComponents
};