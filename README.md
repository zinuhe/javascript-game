# javascript-game

Basic game code

## Create

```shell
npm create vite@latest game
```

## Install dependencies

```shell
pnpm install
```

# To Run

```shell
pnpm run dev
```

## Linter

### Install

```shell
pnpm install standard -D
```

### Config

[Documentation](https://eslint.org/docs/latest/use/configure/)

On **`package.json`** add at the end:

```javascript
"eslintConfig": {
  "extends":[
      "standard"
  ],
  "rules": {
    "space-before-function-paren": ["error", "never"]
  }
}
```

## Canvas

Add a canvas to draw on it

### Info

[Drawing_shapes](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

### 3D Libraries

- [Three.js](https://threejs.org/)
- [Babylon.js](https://www.babylonjs.com/)
- [Zdog.js](https://zzz.dog/)
- [Cannon.js](https://github.com/schteppe/cannon.js)
- [Ammo.js](https://github.com/kripken/ammo.js)
- [Phoria.js](https://www.kevs3d.co.uk/dev/phoria/)
