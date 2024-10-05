import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createGunzip } from 'zlib';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

const decompress = async () => {
  const source = createReadStream('./files/archive.gz');
  const destination = createWriteStream('./files/fileToCompress.txt');
  const gunzip = createGunzip();

  try {
    await pipelineAsync(source, gunzip, destination);
  } catch (error) {
    console.error(error);
  }
};

await decompress();
