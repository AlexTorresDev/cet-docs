---
title: "Opciones de la barra de título"
description: "Opciones de la barra de título"
order: 2
---

> Si lo que quiere es saberlas opciones la barra de menú, vea [Opciones de la barra de menú](./menubar-options).

La barra de título recibe varias opciones que permiten la personalización de la misma. Estas opciones se pasan como un objeto al componente `Titlebar` o `CustomTitlebar`:

```js
const options = {
  // opciones
};

new Titlebar(options);
```

## Color de fondo de la barra de título
Es el color de fondo de la barra de título. Puede ser un color hexadecimal usando `TitlebarColor.fromHex(color)` o un color de `TitlebarColor`.

Para ver más detalles de los colores, vea [TitlebarColor](./titlebar-color).

```js
const options = {
  backgroundColor: TitlebarColor.fromHex('#FF0000')
};
```

## Desbordamiento del contenedor

El desbordamiento o `overflow` del contenedor es la forma en que el contenido se muestra cuando el tamaño del contenedor es menor que el tamaño del contenido. Puede ser `auto`, `hidden` o `visible`.

```js
const options = {
  overflow: 'auto'
};
```

## Ícono de la aplicación

Es el ícono que se muestra en la barra de título. Puede ser un ícono de `NativeImage` o una ruta a un archivo de imagen.

```js
const options = {
  icon: path.join(__dirname, 'icon.png')
};
```

## Tamaño del ícono de la aplicación

Es el tamaño del ícono que se muestra en la barra de título. Este debe ser numérico y debe estar entre 16 y 24. (tamaño en pixeles)

```js
const options = {
  iconSize: 20
};
```

## Ubicación del título

Puede ser `left`, `center` o `right`.

```js
const options = {
  titleHorizontalAlignment: 'center'
};
```

## Orden de los botones

Puede ser `inverted` o `first-buttons`.

`inverted` muestra completamente la barra invertida, es decir, los botones de la izquierda se muestran a la derecha y los de la derecha a la izquierda.

`first-buttons` muestra la barra de título normalmente, pero los botones de la derecha se muestran a la izquierda.

```js
const options = {
  order: 'inverted'
};
```

## Botones de la barra de título

### Minimizar

Permite indicar si el botón de minimizar está habilitado o no.

```js
const options = {
  minimizable: true
}
```

### Maximizar

Permite indicar si el botón de maximizar está habilitado o no.

```js
const options = {
  maximizable: true
}
```

### Cerrar

Permite indicar si el botón de cerrar está habilitado o no.

```js
const options = {
  closeable: true
}
```

### Títulos de los botones

Permite personalizar los títulos de los botones que se muestra al pasar el cursor por encima.

```js
const options = {
  tooltips: {
    minimize: 'Minimizar',
    maximize: 'Maximizar',
    restoreDown: 'Restaurar',
    close: 'Cerrar'
  }
}