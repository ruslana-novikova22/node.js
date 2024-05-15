const CronJob = require('cron').CronJob;
const Auto = require('../models/auto.model');

function startCountTotalPriceJob() {
  const job = new CronJob(
    '0 * * * * *', 
    async () => {
      try {
        const totalPriceAggregate = await Auto.aggregate([
          { $group: { _id: null, totalPrice: { $sum: "$price" } } }
        ]);
        const totalPrice = totalPriceAggregate.length > 0 ? totalPriceAggregate[0].totalPrice : 0;
        console.log(`[countTotalPrice.job] Total price of all cars: ${totalPrice}`);
      } catch (err) {
        console.error(err);
      }
    },
  );

  job.start();
}

module.exports = startCountTotalPriceJob;
