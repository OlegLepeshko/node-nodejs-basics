import * as fs from 'node:fs/promises';

const list = async () => {
    try {
       
        const files = await fs.readdir('files');
        console.log(files);
    } catch (error) {

        console.error('FS operation failed');
    }
};

await list();