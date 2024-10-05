import * as fs from 'node:fs/promises';

const remove = async () => {
  try {
    await fs.unlink('./files/fileToRemove.txt');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('FS operation failed');
    } else {
      console.error(error);
    }
  }
};

await remove();