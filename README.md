# Ganesh Sargar — Data Analyst Portfolio

A custom animated portfolio inspired by modern developer portfolios, adapted for a final-year Data Analytics-focused Computer Science student.

## Stack
- HTML5
- CSS3
- JavaScript
- TypeScript source

## Features
- Dark / light mode
- Animated page loader
- Scroll reveal animations
- Animated statistics
- Responsive mobile navigation
- Custom cursor on desktop
- Project GitHub links
- GitHub / LinkedIn / GeeksforGeeks / LeetCode links
- Achievement gallery with lightbox
- Email and phone actions

## Run
Open `index.html` directly in a browser.

## TypeScript
If Node.js and TypeScript are installed:

```bash
npm install
npm run build
```

Place your resume at `assets/resume.pdf` to activate the download button.

## Deploy on Cloudflare Pages
1. Push this folder to a GitHub repository.
2. In Cloudflare Pages, create a new project connected to that repo.
3. Build command: leave blank (or `npm run build` if you want the TS compiled on deploy).
4. Build output directory: `/` (root).
5. Deploy — `index.html`, `style.css`, `script.js`, and the `assets/` folder will be served as-is.

## Folder structure
```
portfolio/
├── index.html
├── style.css
├── script.js        # compiled output, already built and ready to run
├── script.ts         # TypeScript source
├── package.json
├── tsconfig.json
└── assets/
    ├── profile.jpg
    ├── achv_solo.jpg
    ├── achv_stage.jpg
    ├── achv_handover1.jpg
    ├── achv_handover2.jpg
    ├── achv_certificate.jpg
    ├── achv_poster.jpg
    └── resume.pdf     # add your resume here to enable the download button
```
