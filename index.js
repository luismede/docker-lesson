const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("America/Sao_Paulo");

const now = dayjs.tz();
console.log(now['$d']);
console.log(now['$x']);