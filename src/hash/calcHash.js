
import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    return new Promise((resolve, reject) => {
        const hash = createHash('sha256');
        const stream = createReadStream('./files/fileToCalculateHashFor.txt');

        stream.on('data', (chunk) => {
            hash.update(chunk);
        });

        stream.on('end', () => {
            const result = hash.digest('hex');
            console.log(result);
            resolve(result);
        });

        stream.on('error', (err) => {
            console.error(err);
            reject(err);
        });
    });
};

await calculateHash();
