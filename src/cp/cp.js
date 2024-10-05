import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['./file/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(child.stdin);

    child.stdout.pipe(process.stdout);

    child.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
};

spawnChildProcess(['arg1', 'arg2']);
