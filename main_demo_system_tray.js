const{app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index_demo_system_tray.html'),
        protocol: 'file',
        slashes: true
    }))
}

app.on('ready', createWindow);