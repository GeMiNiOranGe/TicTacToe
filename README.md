# TicTacToe

A ReactJS project built _without_ syntactic sugar — no JSX, no class components. Just pure functions, arrow components, and TypeScript.

Yes, it's a bit old-school. And yes, I totally understand why someone wouldn't know `createElement` exists — it's only what React uses under the hood to render literally everything.

This project serves both as a simple game and a gentle reminder that React didn’t always look like a fancy HTML-in-JavaScript playground. Sometimes it's nice to go back to the basics.

## 🚀 Installation

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm start
```

> **Note:** You’ll need Node.js and a modern browser. If you're not using VS Code with the TypeScript plugin... well, you're brave.

## 🕹️ How to Play

- Click on any empty square to make a move.
- The game alternates between **X** and **O** automatically.
- Victory, draw, or rage-quit — the choice is yours.
- Want to play again? Just hit the **"Reset"** button, like it’s a fresh start!

## 🧠 Why No JSX?

React is more than just JSX. This project uses `React.createElement` directly to help you:

- Understand what's really going on behind the scenes.
- Appreciate how JSX is just a wrapper (a pretty one, sure).
- Write code that reminds you of the good ol' days — or scares you a little.
