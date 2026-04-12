<div align="center">
<a href="https://rittikbarman.com"><img src="./public/logo.png" width="60px"></a>
</div>

<div align="center">
<h1>rittikbarman.com</h1>
<p>My personal portfolio website</p>
</div>

# Tech Stack

- [Next.js][nextjs] - UI framework
- [Vercel][vercel] - Hosting and Deployment
- [TailwindCSS][tailwind] - Styling and UI
- [Framer Motion][framermotion] - Animations
- [Next Themes][nexttheme] - Color Theme
- [Umami][umami] - Analytics (Optional)

## Run Project Locally

Follow this guide to get this site running locally:

### Clone Repository

```bash
git clone https://github.com/rhittikkumar/rittikbarman.com.git

cd rittikbarman.com

npm install
```

- Copy [`.env.example`](.env.example) to `.env.local`

### Required/Optional Env Variables

Set the variables you plan to use in `.env.local`:

- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` (optional)
- `NEXT_PUBLIC_GISCUS_REPO` (optional)
- `NEXT_PUBLIC_GISCUS_REPOID` (optional)
- `NEXT_PUBLIC_GISCUS_CATEGORYID` (optional)
- `NEXT_PUBLIC_GITHUB_USERNAME` (optional)
- `NEXT_PUBLIC_GITHUB_JOIN_YEAR` (optional)

### Content Source

This project currently uses hardcoded content from [app/data/content.ts](app/data/content.ts).
Update that file to change profile text, projects, usage sections, and other displayed content.

### Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000][localhost] to see the project live.

## Build

```bash
npm run build
```

### Important Files and Folders

| File(s)                                                  | Description                                     |
| -------------------------------------------------------- | ----------------------------------------------- |
| [app/data/content.ts](app/data/content.ts)               | Main hardcoded content source                   |
| [app/data/social.ts](app/data/social.ts)                 | Social/publication links                        |
| [app/layout.tsx](app/layout.tsx)                         | Root layout and SEO metadata                    |
| [app/components/pages/Usage.tsx](app/components/pages/Usage.tsx) | Renders usage sections from hardcoded data      |
| [app/projects/[project]/page.tsx](app/projects/[project]/page.tsx) | Dynamic project page using local project lookup |

<!-- Link Refs -->

[nextjs]: https://nextjs.org
[vercel]: https://vercel.com
[tailwind]: https://tailwindcss.com
[umami]: https://umami.is
[framermotion]: https://www.framer.com/motion
[nexttheme]: https://github.com/pacocoursey/next-themes
[localhost]: http://localhost:3000
