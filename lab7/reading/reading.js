const CronJob = require('cron').CronJob;

function startReadingJob() {
    const job = new CronJob(
        '0 * 14 * * *', // At every minute past 2 PM
        () => {
            console.log('[readingTimeReminder.job] You will see this message every minute past 2 PM.');
            
        },
    );

    job.start();
}

module.exports = startReadingJob;
