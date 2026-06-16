# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Vite HMR on http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # serve the dist/ build locally
npm run lint     # ESLint across all .js/.jsx files
```

No test framework is configured.

## Architecture

Everything lives in a single file: **`src/App.jsx`**. There is no routing library, no state management library, and no CSS files in use — `index.css` and `App.css` exist but are not imported anywhere.

### View machine

The app is a four-state view machine controlled by a `view` string in the root `LifeStick` component:

| `view` value | Component | What it shows |
|---|---|---|
| `"home"` | `HomeView` | lesson list, progress bar, streak badge |
| `"learn"` | `LearnView` | one of 4 phases per concept (analogy → explanation → realworld → sticky) |
| `"quiz"` | `QuizView` | multiple-choice questions for the current concept |
| `"results"` | `ResultsView` | score, sticky takeaway, next-lesson CTA |

Transitions: `home → learn → quiz → results → home` (linear). The back button in `LearnView` and `QuizView` goes to `home` and `learn` respectively.

### Content

The `concepts` array at the top of `App.jsx` is the sole source of content — 8 objects, each with `id`, `title`, `subtitle`, `emoji`, `duration`, `analogy`, `explanation`, `realWorld`, `sticky`, and `quiz` (array of `{q, options, answer, explain}`). Adding or editing lessons means editing this array.

### State and persistence

- `completed` (array of concept IDs) and `streak` (`{count, lastDate}`) are stored in `localStorage` under `ls_completed` and `ls_streak`.
- A concept is marked complete when the user finishes the quiz — `setCompleted` is called in `nextQuestion()` when `current + 1 >= quiz.length`.
- Progress % is `Math.round(completed.length / concepts.length * 100)`, so 1/8 shows as 13% not 12%.

### Styling

All styles are inline objects on every element — there is no stylesheet, no CSS-in-JS library, and no utility classes. The colour palette is defined in the `t` object near the top of `App.jsx` (dark rose/pink theme). Google Fonts (`DM Sans`, `Playfair Display`) are loaded via `<link>` tags in `index.html` — do **not** use `@import` inside a `<style>` JSX element, as that keeps the browser tab spinner running indefinitely.

### Target audience

The app is designed for senior citizens. Font sizes, tap target sizes, and copy should reflect that — simple language, large touch targets, no jargon.
