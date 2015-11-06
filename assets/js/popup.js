var shortcode;
var presets = {

    'turquoise': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#1abc9c',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#22eec6",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#22eec6",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#22eec6",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#22eec6",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },


    'emerald': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#2ecc71',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#35ee84",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#35ee84",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#35ee84",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#35ee84",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },


    'peterRiver': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#3498db',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#3bacf8",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#3bacf8",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#3bacf8",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#3bacf8",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },

    'amethyst': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#9b59b6',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#ca74ed",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#ca74ed",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#ca74ed",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#ca74ed",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },

    'wetAsphalt': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#34495e',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#47637f",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#47637f",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#47637f",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#47637f",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },


    'greenSea': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#16a085',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#1ed9b4",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#1ed9b4",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#1ed9b4",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#1ed9b4",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },

    'nephritis': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#27ae60',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#30d475",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#30d475",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#30d475",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#30d475",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },

    'belizeHole': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#2980b9',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#37a7f0",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#37a7f0",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#37a7f0",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#37a7f0",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },

    'wisteria': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#8e44ad',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#b556dc",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#b556dc",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#b556dc",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#b556dc",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },

    'midNightBlue': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#2c3e50',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#476380",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#476380",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#476380",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#476380",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },


    'sunFlower': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#f1c40f',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#f4d559",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#f4d559",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#f4d559",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#f4d559",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },


    'carrot': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#e67e22',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#ff963a",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#ff963a",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#ff963a",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#ff963a",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },

    'alizarin': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#e74c3c',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#ff7263",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#ff7263",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#ff7263",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#ff7263",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },


    'orange': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#f39c12',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#fabb56",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#fabb56",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#fabb56",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#fabb56",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },


    'pumpkin': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#d35400',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#ff781f",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#ff781f",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#ff781f",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#ff781f",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },


    'pomegrante': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#c0392b',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#f7503f",
        slickDaysFgCircleColor:"#ecf0f1",
        slickDaysTextColor:"#ecf0f1",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#f7503f",
        slickHoursFgCircleColor:"#ecf0f1",
        slickHoursTextColor:"#ecf0f1",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#f7503f",
        slickMinutesFgCircleColor:"#ecf0f1",
        slickMinutesTextColor:"#ecf0f1",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#f7503f",
        slickSecondsFgCircleColor:"#ecf0f1",
        slickSecondsTextColor:"#ecf0f1"
    },

    'flat-colors': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#ffffff',

        slickDaysThickNess:0.01,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#1abc9c",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.01,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#2980b9",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.01,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#8e44ad",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.01,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#f39c12",
        slickSecondsTextColor:"#34495e"
    },

    'flat-colors-wide': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#ffffff',

        slickDaysThickNess:0.03,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#1abc9c",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.03,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#2980b9",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.03,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#8e44ad",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.03,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#f39c12",
        slickSecondsTextColor:"#34495e"
    },

    'flat-colors-very-wide': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#ffffff',

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#1abc9c",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#2980b9",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#8e44ad",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#f39c12",
        slickSecondsTextColor:"#34495e"
    },

    'flat-colors-black': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#ffffff',

        slickDaysThickNess:0.25,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#1abc9c",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.25,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#2980b9",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.25,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#8e44ad",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.25,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#f39c12",
        slickSecondsTextColor:"#34495e"
    },

    'black': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#ffffff',

        slickDaysThickNess:0.01,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#222",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.01,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#222",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.01,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#222",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.01,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#222",
        slickSecondsTextColor:"#34495e"
    },

    'black-wide': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#ffffff',

        slickDaysThickNess:0.03,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#222",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.03,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#222",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.03,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#222",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.03,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#222",
        slickSecondsTextColor:"#34495e"
    },

    'black-very-wide': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#ffffff',

        slickDaysThickNess:0.17,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#222",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.03,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#222",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.17,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#222",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.17,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#222",
        slickSecondsTextColor:"#34495e"
    },

    'black-black': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#ffffff',

        slickDaysThickNess:0.25,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#222",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.25,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#222",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.25,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#222",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.25,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#222",
        slickSecondsTextColor:"#34495e"
    },

    'white': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#1e1e1e',

        slickDaysThickNess:0.03,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#ffffff",
        slickDaysTextColor:"#ffffff",

        slickHoursThickNess:0.03,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#ffffff",
        slickHoursTextColor:"#ffffff",

        slickMinutesThickNess:0.03,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#ffffff",
        slickMinutesTextColor:"#ffffff",

        slickSecondsThickNess:0.03,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#ffffff",
        slickSecondsTextColor:"#ffffff"
    },

    'white-wide': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#1e1e1e',

        slickDaysThickNess:0.06,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#ffffff",
        slickDaysTextColor:"#ffffff",

        slickHoursThickNess:0.06,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#ffffff",
        slickHoursTextColor:"#ffffff",

        slickMinutesThickNess:0.06,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#ffffff",
        slickMinutesTextColor:"#ffffff",

        slickSecondsThickNess:0.06,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#ffffff",
        slickSecondsTextColor:"#ffffff"
    },
    'white-very-wide': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#1e1e1e',

        slickDaysThickNess:0.16,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#ffffff",
        slickDaysTextColor:"#ffffff",

        slickHoursThickNess:0.16,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#ffffff",
        slickHoursTextColor:"#ffffff",

        slickMinutesThickNess:0.16,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#ffffff",
        slickMinutesTextColor:"#ffffff",

        slickSecondsThickNess:0.16,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#ffffff",
        slickSecondsTextColor:"#ffffff"
    },

    'white-black': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,
        slickBgColor:'#1e1e1e',

        slickDaysThickNess:0.25,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#ffffff",
        slickDaysTextColor:"#ffffff",

        slickHoursThickNess:0.25,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#ffffff",
        slickHoursTextColor:"#ffffff",

        slickMinutesThickNess:0.25,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#ffffff",
        slickMinutesTextColor:"#ffffff",

        slickSecondsThickNess:0.25,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#ffffff",
        slickSecondsTextColor:"#ffffff"
    }
};


jQuery(document).ready(function($) {


    window.slick_tb_height =(92 / 100)*jQuery(window).height();
    window.slick_shortcodes_height = (71 / 100) * jQuery(window).height();
    if(window.slick_shortcodes_height > 550){
        window.slick_shortcodes_height = (74 / 100) * jQuery(window).height();
    }

    jQuery(window).resize(function() {
        window.slick_tb_height = (92 / 100) * jQuery(window).height();
        window.slick_shortcodes_height = (71 / 100) * jQuery(window).height();

        if(window.slick_shortcodes_height > 550) {
            window.slick_shortcodes_height = (74 / 100) * jQuery(window).height();
        }
    });

    slick_shortcode = {
        resizeTB: function(){
            var ajaxCont = $('#TB_ajaxContent'),
                tbWindow = $('#TB_window'),
                slickPopup = $('#slick-popup');

            tbWindow.css({
                height: window.slick_tb_height,
                width: slickPopup.outerWidth(),
                marginLeft: -(slickPopup.outerWidth()/2)
            });

            ajaxCont.css({
                paddingTop: 0,
                paddingLeft: 0,
                paddingRight: 0,
                height: window.slick_tb_height,
                overflow: 'auto', // IMPORTANT
                width: slickPopup.outerWidth()
            });

            tbWindow.show();
            $('#slick-popup').addClass('no_preview');
        },
        load : function(){

            var	popup = $('#slick-popup'),
                form = $('#slick-sc-form', popup);

            // resize TB
            slick_shortcode.resizeTB();
            $(window).resize(function() { slick_shortcode.resizeTB() });
        }
    };
    //run
    $('#slick-popup').livequery(function(){
        slick_shortcode.load();

        $('#slick-popup').closest('#TB_window').addClass('slick-shortcodes-popup');
		$('<a class="slick-insert" href="#">Insert Shortcode</a>').appendTo('#TB_ajaxWindowTitle');
		

        // activate color picker
        $('.wp-color-picker-field').wpColorPicker({});

        //DatePicker time
        $('.slick-date-picker-field').datetimepicker({
            dateFormat: "MM dd, yy",
            timeFormat: "hh:mm tt"
        });

        $( ".slick-spinner-field" ).spinner({
            min: 0
        });

        $( ".float-spinner" ).spinner({
            min: 0.0,
            max:1.0,
            step:0.01
        });

        jQuery.each( presets[jQuery("#slick-select-theme").val()], function( key, val ) {
            jQuery("#" + key).val(val);
        });

        jQuery("#slick-select-theme").change(function() {
            jQuery.each( presets[jQuery(this).val()], function( key, val ) {
                jQuery("#" + key).val(val);
            });
        });
    });
    // insert shortcode when inset button clicked
    $('.slick-insert').live('click',function(){
        shortcode = '[slickcountdown ';
        jQuery("#slick-sc-form input:not(.noinclude,.wp-picker-clear), #slick-sc-form select").each(function() {
            if(jQuery(this).val() && jQuery(this).attr('class') != 'wp-picker-clear'){
                shortcode += jQuery(this).attr("id") + '="' + jQuery(this).val() + '" ';
            }
        });
        shortcode += ']';
        tinyMCE.activeEditor.execCommand('mceInsertContent', false, shortcode);

        tb_remove();

    });
});