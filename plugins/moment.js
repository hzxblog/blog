import Vue from 'vue'

const moment = require('moment');
moment.locale('zh-cn');

Vue.prototype.$moment = moment;
