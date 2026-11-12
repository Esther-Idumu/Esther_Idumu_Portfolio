# Esther's Portfolio

React + Vite + plain CSS. Clean white hero with a photo card, then a black-and-white brutalist style for the rest.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Where to change things

| I want to change...                    | Edit this                                   |
| -------------------------------------- | ------------------------------------------- |
| Names, titles, taglines, email, GitHub | `src/data/profile.js`                       |
| Experience cards                       | `src/data/experience.js`                    |
| Projects                               | `src/data/projects.js`                      |
| Skills                                 | `src/data/skills.js`                        |
| Colors, fonts, spacing                 | `src/index.css` (the `:root` variables)     |
| The hero photo                         | replace `src/assets/esther-portrait.webp`   |
| Hero text and photo layout             | `Hero.css`                                  |
| Project card layout                    | `Projects.css` (the `nth-child` rules)      |

Each section is a folder in `src/components/` with its own `.jsx` and `.css`.
Text in the data files is written normally; CSS makes it uppercase.

The transparent cutout from the earlier hero is kept in `extras/` in case you want it again.
