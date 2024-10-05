import * as fs from 'node:fs/promises';

const read = async () => {
    try {
        const data = await fs.readFile('./files/fileToRead.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('FS operation failed');
        } else {
            console.error('FS operation failed', error);
        }
    }
};

await read();