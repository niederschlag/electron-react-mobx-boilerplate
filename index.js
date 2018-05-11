const { default: installExtension, REACT_DEVELOPER_TOOLS, MOBX_DEVTOOLS } = require('electron-devtools-installer');
const electron = require('electron');
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const nodeEnv = process.env.NODE_ENV;

app.on('ready', () => {
    if (nodeEnv === 'development') {
        installExtensions();
    }
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    console.log(nodeEnv);
    if (win === null) {
        createWindow();
    }
});

const installExtensions = () => {
    require('devtron').install();
    installExtension([REACT_DEVELOPER_TOOLS, MOBX_DEVTOOLS])
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
};

function createWindow() {
    const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
    const win = new BrowserWindow({ width, height });

    if (nodeEnv === 'development') {
        // delay 1000ms to wait for webpack-dev-server start
        setTimeout(() => {
            win.loadURL(url.format({
                pathname: 'localhost:3000',
                protocol: 'http:',
                slashes: true
            }));
            win.webContents.openDevTools();
        }, 1000);
    } else {
        win.loadURL(url.format({
            pathname: path.join(path.resolve(__dirname, './dist'), 'index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }
}
