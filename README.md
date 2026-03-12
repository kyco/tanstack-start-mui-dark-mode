# tanstack-start-mui-dark-mode

This repo serves as an example for a Tanstack Start project with MUI and server side dark mode.

## Installation

Clone the repo and then in the project root run:
```bash
pnpm i
```

## Local development

From the project root run:
```bash
pnpm dev
```

The server will be running on: http://localhost:3000.

## Guide

1. This project was started with [TanStack Start - Bare Example](https://github.com/TanStack/router/tree/main/examples/react/start-bare)

2. [Material UI](https://mui.com/material-ui/getting-started/installation/#default-installation) was installed via the default installation

3. [zod](https://zod.dev/#installation) was installed (required for `ColorMode` schema)


```bash
# Tanstack Start
npx gitpick TanStack/router/tree/main/examples/react/start-bare .

# MUI
pnpm add @mui/material @emotion/react @emotion/styled

# Zod
pnpm add zod
```
