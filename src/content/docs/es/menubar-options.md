---
title: "Opciones de la barra de menús"
description: "Opciones de la barra de menús"
order: 3
---

> Si lo que quiere es saber las opciones de la barra de título, vea [Opciones de la barra de título](./titlebar-options).

Al igual que con las opciones de la barra de título, las opciones del menú se pasan como un objeto al componente `Titlebar` o `CustomTitlebar`:

```js
const options = {
  // opciones de la barra de título
  // resto de opciones para la parte del menú
};

new Titlebar(options);
```

## Color del menu

Es el color de fondo del menú. Puede ser un color hexadecimal usando `TitlebarColor.fromHex(color)` o un color de `TitlebarColor`.

Para ver más detalles de los colores, vea [TitlebarColor](./titlebar-color).

```js
const options = {
  // opciones de la barra de título
  backgroundColor: TitlebarColor.fromHex('#FF0000')
};
```

## Habilitar mnemónicos

Los mnemónicos son una forma de navegar por la interfaz de usuario usando el teclado. Para habilitarlos, se debe pasar la opción `enableMnemonics` como `true`:

```js
const options = {
  // opciones de la barra de título
  enableMnemonics: true
};
```

## Íconos del menú

Son los íconos que se muestran en los elementos especiales del menú, como lo son elementos de tipo **radio**, **checkbox** y **submenu**. Estos se definen en unarchivo de tipo `JSON` y se pasa la ruta en las opciones.

```js
const options = {
  // opciones de la barra de título
  icons: path.join(__dirname, 'menu-icons.json')
};
```

Para ver más detalles de los íconos, vea [Íconos del menú](./menu-icons).

## Menú

Es el menú que se muestra en la barra de menú. Esta opción esta obsolota y se recomienda usar `setupTitlebar` en el archivo main de la aplicación.

```js
const options = {
  // opciones de la barra de título
  menu: Menu.buildFromTemplate(template)
};
```

## Posición del menú

Es la posición del menú en la barra de título. Puede ser `left` o `bottom`.

```js
const options = {
  // opciones de la barra de título
  menuPosition: 'left'
};
```

## Solo mostrar el menú en la barra de título

Es una opción que permite mostrar el menú solo en la barra de título. Esto elimina todos los elementos de la barra a excepción de los botones.

```js
const options = {
  // opciones de la barra de título
  onlyShowMenubar: true
};
```

## Color del elemento del menú

Es el color de fondo de los elementos del menú que se muestra al pasar el cursor por encima de cada uno. Puede ser un color hexadecimal usando `TitlebarColor.fromHex(color)` o un color de `TitlebarColor`.

Para ver más detalles de los colores, vea [TitlebarColor](./titlebar-color).

```js
const options = {
  // opciones de la barra de título
  itemBackgroundColor: TitlebarColor.fromHex('#FF0000')
};
```

## Color del separador de elementos

Es el color de fondo del separador de elementos del menú. Puede ser un color hexadecimal usando `TitlebarColor.fromHex(color)` o un color de `TitlebarColor`.

Para ver más detalles de los colores, vea [TitlebarColor](./titlebar-color).

```js
const options = {
  // opciones de la barra de título
  menuSeparatorColor: TitlebarColor.fromHex('#FF0000')
};
```

## Color de los íconos del menú

Es el color de los íconos del menú. Puede ser un color hexadecimal usando `TitlebarColor.fromHex(color)` o un color de `TitlebarColor`.

Para ver más detalles de los colores, vea [TitlebarColor](./titlebar-color).

```js
const options = {
  // opciones de la barra de título
  svgColor: TitlebarColor.fromHex('#FF0000')
};
```

## Transparencia del menú

Es la transparencia del fondo del menú. Puede ser un valor entre `0` y `1`.

```js
const options = {
  // opciones de la barra de título
  transparent: 0.5
};
```