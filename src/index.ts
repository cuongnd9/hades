import axios from 'axios';
import {createWriteStream} from 'fs';

type Options = {
  url: string;
  path: string;
  timeout?: number;
};
async function hades(options: Options) {
  const writer = createWriteStream(options.path);

  const response = await axios({
    url: options.url,
    method: 'GET',
    responseType: 'stream',
    timeout: options.timeout,
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

export {hades};
