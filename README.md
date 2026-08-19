# Backer — Frontend

[#backer-frontend](#backer-frontend)

**Backer** is a crowdfunding platform that connects campaign creators with donors. This repository contains the web frontend: campaign browsing, campaign creation and management, donations/transactions, and user authentication.

The backend API that powers this app lives at [backer-backend](https://github.com/agusdedi/backer-backend).

## About the Project

[#about-the-project](#about-the-project)

The frontend allows users to:

- Browse and view fundraising campaigns
- Register and log in securely
- Create and manage their own campaigns from a dashboard
- Make donations and follow the payment flow (via Midtrans)
- Track their transaction history

Built with **Nuxt 4** and **Vue 3**, rendered as a static SPA (`ssr: false`) and styled with Tailwind CSS.

## Tech Stack

[#tech-stack](#tech-stack)

- **Framework:** Nuxt 4 / Vue 3 (SPA mode, static output)
- **Styling:** Tailwind CSS
- **Auth:** `@sidebase/nuxt-auth` (local/token provider)
- **HTTP client:** Axios
- **PWA:** `@vite-pwa/nuxt`
- **Fonts:** `@nuxtjs/google-fonts`

## Project Structure

[#project-structure](#project-structure)

```
backer-frontend/
├── app/
│   ├── assets/         # Global CSS
│   ├── components/     # Shared Vue components (Navbar, Footer, CTA)
│   ├── layouts/        # Nuxt layouts
│   └── pages/           # Routes: campaigns, dashboard, auth, transactions
├── public/              # Static assets (images, icons, illustrations)
├── nuxt.config.js
├── tailwind.config.js
└── package.json
```

## Getting Started

[#getting-started](#getting-started)

1. **Clone the repository**

   ```bash
   git clone https://github.com/agusdedi/backer-frontend.git
   cd backer-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the project root:

   ```bash
   NUXT_PUBLIC_API_BASE=http://localhost:8080/api/v1
   NUXT_PUBLIC_IMAGE_BASE=http://localhost:8080
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   The app runs at `http://localhost:3000`.

## Available Scripts

[#available-scripts](#available-scripts)

| Command            | Description                                         |
| ------------------ | --------------------------------------------------- |
| `npm run dev`      | Start the local dev server                          |
| `npm run generate` | Build the static production site (`.output/public`) |
| `npm run preview`  | Preview the production build locally                |
| `npm run format`   | Format the codebase with Prettier                   |

## Deployment

[#deployment](#deployment)

This app builds to a static site (`npm run generate`) and can be deployed on **Vercel** or **Netlify**. Set `NUXT_PUBLIC_API_BASE` and `NUXT_PUBLIC_IMAGE_BASE` to your deployed backend URL as environment variables on whichever platform you use.

The backend deployment guide is documented in the [backer-backend](https://github.com/agusdedi/backer-backend) repository.

## Related Repository

[#related-repository](#related-repository)

- Backend API: [github.com/agusdedi/backer-backend](https://github.com/agusdedi/backer-backend)

## License

[#license](#license)

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

Made by [agusdedi](https://github.com/agusdedi)
