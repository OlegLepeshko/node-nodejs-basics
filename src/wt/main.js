import { cpus } from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const numCPUs = cpus().length;
    const results = [];
    const promises = [];

    for (let i = 0; i < numCPUs; i++) {
        promises.push(new Promise((resolve) => {
            const worker = new Worker('./worker.js');

            worker.on('message', (result) => {
                results.push({ status: 'resolved', data: result });
                resolve();
            });

            worker.on('error', () => {
                results.push({ status: 'error', data: null });
                resolve();
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    results.push({ status: 'error', data: null });
                    resolve();
                }
            });

            worker.postMessage(10 + i);
        }));
    }

    await Promise.all(promises);
    console.log(results);
};

await performCalculations();
