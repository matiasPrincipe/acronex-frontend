import Vue from 'vue'
import Buefy from 'buefy'

// import 'buefy/dist/buefy.css'

Vue.use(Buefy, {
  css: false,
  defaultToastDuration: 2500,
  defaultSnackbarDuration: 2500,
  defaultNotificationDuration: 2500,
  defaultDatepickerYearsRange: [-100, 10],
  defaultNoticeQueue: false,
  defaultTrapFocus: false,
  defaultMonthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  defaultDialogCancelText: 'Cancelar',
  defaultDayNames: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
})
