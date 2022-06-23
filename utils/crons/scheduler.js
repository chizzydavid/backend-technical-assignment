import cron from 'node-cron';

const initCronJobs = async (config) => {
  Object.keys(config).forEach((key) => {
    console.log(config[key].taskName + ' ::: scheduled');
    cron.schedule((config[key].taskFrequency).toString(), async () => {
      console.log(config[key].taskName + ' task::: started');
      await config[key].taskHandler();
      console.log(config[key].taskName + ' task::: stopped');
    })
  })
}


export default initCronJobs;

