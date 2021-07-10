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

const newMarkAlertComponents = {
    alert: document.querySelector('#caja-nueva-marca'),
    form: document.querySelector('#formulario-marca'),
    btnCancel: document.querySelector('#btn-cancelar'),
    formInputs: {
        title: document.querySelector('#titulo-marca'),
        time: document.querySelector('#hora-marca'),
        description: document.querySelector('#descripcion-marca'),
        importance: document.querySelector('#importancia-marca'),
    },
    btnSubmit: document.querySelector('#submit-marca')
}

export {
    navCompoments,
    clockComponents,
    timeLineComponents,
    newMarkAlertComponents
};