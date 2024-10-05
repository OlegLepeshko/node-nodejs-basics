import { createReadStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

const read = async () => {
    const readableStream = createReadStream('./files/fileToRead.txt', { encoding: 'utf8' });

    try {
        await pipelineAsync(
            readableStream,
            process.stdout
        );
    } catch (err) {
        console.error('Pipeline failed:', err);
    }
};

await read();
