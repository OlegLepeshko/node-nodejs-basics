import * as fs from 'node:fs/promises';
import { constants } from 'node:fs';

const copy = async () => {
    const srcDir = 'files';
    const destDir = 'files_copy';

    try {
        await fs.access(srcDir, constants.F_OK);
        
        
        try {
            await fs.access(destDir, constants.F_OK);
            throw new Error( console.error('FS operation failed'));
        } catch {
           
        }

        await fs.cp(srcDir, destDir, { recursive: true });
       
    } catch (err) {
        console.error(err.message);
    }
};

await copy();

