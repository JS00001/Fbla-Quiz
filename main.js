const BrowserWindow = require('electron').BrowserWindow;
const shell = require('electron').shell;
const app = require('electron').app;
const path = require('path');
const util = require('priv-js-utility');

app.on('ready', () => {
    let window = new BrowserWindow({
        width: 1344,
        height: 756,
        icon: __dirname + '/src/assets/logo_white.png',
        frame: false,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    let splash = new BrowserWindow({
        width: 340,
        height: 500,
        frame: false,
        alwaysOnTop: true,
        icon: __dirname + '/src/assets/logo_white.png'
    })

    splash.loadURL(`file://${__dirname}/public/loading.html`);

    window.setMenu(null);
    window.setResizable(false);
    window.loadURL('http://localhost:3000');

    window.webContents.on('new-window', (e, url) => {
        e.preventDefault();
        shell.openExternal(url);
    })

    window.once('ready-to-show', () => {
        splash.destroy();
        window.show();
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})

