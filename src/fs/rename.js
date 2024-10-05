import * as fs from 'node:fs/promises';

const rename = async () => {
    const oldFilename = './files/wrongFilename.txt';
    const newFilename = './files/properFilename.md';

    try {
        await fs.access(oldFilename);
       
        try {
            await fs.access(newFilename);
            throw new Error(console.error('FS operation failed'));
            
        } catch {
           
        }

        await fs.rename(oldFilename, newFilename);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('FS operation failed');
        } else {
            console.error(error.message);
        }
    }
};

await rename();