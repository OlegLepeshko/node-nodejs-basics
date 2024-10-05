import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

const compress = async () => {
  const source = createReadStream('./files/fileToCompress.txt');
  const destination = createWriteStream('./files/archive.gz');
  const gzip = createGzip();

  try {
    await pipelineAsync(source, gzip, destination);
  } catch (error) {
    console.error(error);
  }
};

await compress();




