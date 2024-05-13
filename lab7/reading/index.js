const config = require('../config');
const startReadingTimeReminderJob = require('./userLoginReminder'); 
const startReadingJob = require('./reading');

function start() {
    if (!config.enableScheduleJobs) {
        console.warn('Jobs scheduling is not enabled.');
        return;
    }

    startReadingJob();
    startReadingTimeReminderJob(); 
}

module.exports = start;
