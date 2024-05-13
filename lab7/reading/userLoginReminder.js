const CronJob = require('cron').CronJob;
const userModel = require('../models/user.model');
const { stringify } = require('csv-stringify/sync');
const fs = require('fs');

function startReadingTimeReminderJob() {
    const job = new CronJob(
        '0 0 14 * * *', // At 14:00 every day
        async () => {
            const currentTime = new Date().getTime();
            const readingTimeThreshold = 1.5 * 60 * 60 * 1000; // 1.5 години у мілісекундах

            const users = await userModel.find({});

            users.forEach(user => {
                const { readingStartTime } = user;

                if (readingStartTime) {
                    const elapsedTime = currentTime - new Date(readingStartTime).getTime();

                    if (elapsedTime >= readingTimeThreshold) {
                        console.log(`[readingTimeReminder.job] User ${user.email} has been reading for 1.5 hours.`);
                    }
                }
            });
        },
    );

    job.start();
}

module.exports = startReadingTimeReminderJob;
