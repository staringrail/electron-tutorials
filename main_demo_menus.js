const {app, BrowserWindow, Menu, MenuItem} = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    mainWindow.loadURL(url.format ({
        pathname: path.join(__dirname, 'index_demo_menus.html'),
        protocol: 'file:',
        slashes: true
    }))

    // MacOS wants me to call setApplicationMenu inside the createWindow function
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}

const template = [
    {
        label: 'Edit',
        submenu: [
            {
                role: 'undo'
            },
            {
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                role: 'cut'
            },
            {
                role: 'copy'
            },
            {
                role: 'paste'
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                role: 'toggledevtools'
            },
            {
                role: 'reload'
            },
            {
                type: 'separator'
            },
            {
                role: 'resetzoom'
            },
            {
                role: 'zoomin'
            },
            {
                role: 'zoomout'
            },
            {
                type: 'separator'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    },
    {
        role: 'window',
        submenu: [
            {
                role: 'minimize'
            },
            {
                role: 'close'
            }
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'Learn More'
            }
        ]
    }
]
if (process.platform == 'darwin') {
    template.unshift({ label: 'name' });
}

app.on('ready', createWindow)