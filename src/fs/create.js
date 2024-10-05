import * as fs from 'node:fs';

const create = async () => {
    const filePath = './files/fresh.txt';
    const content = 'I am fresh and young';

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {

            fs.writeFile(filePath, content, (err) => {
                if (err) {
                    console.error(err);
                } else {
                   
                }
            });
        } else {
           
            const additionalContent = '\n';
            fs.appendFile(filePath, additionalContent, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.error('FS operation failed');
                }
            });
        }
    });
};

await create();