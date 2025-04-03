const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron');

const isMac = process.platform === 'darwin'

function OpenMainTerminal(){
    const mainWindow = new BrowserWindow({
        title: 'DTerminale',
        width: 700,
        height: 400,
    })
    mainWindow.loadFile(path.join(__dirname, './render/Tmenu.html'));
}

app.whenReady().then(() => {
    OpenMainTerminal()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            OpenMainTerminal()
        }
    })
})

app.on('window-all-closed', () => {
    if (!isMac) {
      app.quit()
    }
})

