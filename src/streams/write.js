import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

const write = async () => {
    const writableStream = createWriteStream('./files/fileToWrite.txt', { encoding: 'utf8' });

    try {
        await pipelineAsync(
            process.stdin,
            writableStream
        );
       
    } catch (err) {
        console.error(err);
    }
};

await write();



