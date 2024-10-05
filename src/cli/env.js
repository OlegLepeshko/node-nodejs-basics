import * as fs from 'node:fs/promises';

const parseEnv = async () => {
    try {
        const data = await fs.readFile('.env', 'utf-8');
       
        const lines = data.split('\n');
        
        lines.forEach(line => {
            const [key, value] = line.split('=');
            if (key && value && key.trim().startsWith('RSS_')) {
                process.env[key.trim()] = value.trim();
                console.log(line);
                }
        });

    } catch (error) {
        console.error(error);
    }
};

parseEnv();