---
title: "Instale Custom Electron Titlebar en su proyecto"
description: "Instrucciones de instalación de Custom Electron Titlebar en su proyecto"
order: 1
---

## Instalación

¿Cómo instalar esta librería en su proyecto de Electron?

```sh 
npm i custom-electron-titlebar
```

## ¿Cómo usar?

En el archivo principal del proyecto `main.js` o `index.js` importe la librería y llame a la función `setupTitlebar` y `attachTitlebarToWindow`:

```js
const { setupTitlebar, attachTitlebarToWindow } = require('custom-electron-titlebar/main');

// setup the titlebar main process
setupTitlebar();

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    //frame: false, // needed if process.versions.electron < 14
    webPreferences: {
      sandbox: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  
  ...

  // attach fullscreen(f11 and not 'maximized') && focus listeners
  attachTitlebarToWindow(mainWindow);
}
```

Es importante que la propiedad `titleBarStyle` sea `hidden` para que no se muestre la barra de título predeterminada de Electron.
Igualmente, se debe agregar la propiedad sandbox a false para que la librería pueda funcionar correctamente.