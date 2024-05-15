const config = require('../config');
const enableScheduleJobs = true;
const startCountTotalPriceJob = require('./summary');

function start() {
if (!enableScheduleJobs) {
        console.warn('Jobs scheduling is not enabled.');
        return;
    }

    startCountTotalPriceJob();
}

module.exports = start;