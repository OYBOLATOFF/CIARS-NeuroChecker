export var Slides = [
    {
        step: require('../assets/instruction-steps/1.json'),
        animation: {
            url: require('../assets/instruction-animations/camera_permission.json'),
            autoloop: false,
        },
        title: 'Открыть камеру',
        subtitle: 'Для этого необходимо разрешить к ней доступ'
    },

    {
        step: require('../assets/instruction-steps/2.json'),
        animation: {
            url: require('../assets/instruction-animations/take_a_car_photo.json'),
            autoloop: true,
        },
        title: 'Сделать фотографии',
        subtitle: 'Лучше сделать их с разных ракурсов'
    },

    {
        step: require('../assets/instruction-steps/3.json'),
        animation: {
            url: require('../assets/instruction-animations/waiting.json'),
            autoloop: true,
        },
        title: 'Чуточку подождать',
        subtitle: 'Un momento! Наша нейросеть уже анализирует ваше авто '
    },

    {
        step: require('../assets/instruction-steps/4.json'),
        animation: {
            url: require('../assets/instruction-animations/report.json'),
            autoloop: true,
        },
        title: 'Получить отчёт',
        subtitle: 'Если наша нейросеть не определила (или определила неверно) какую-то деталь авто, то вы можете внести правки и отправить фото на повторный анализ'
    }
]