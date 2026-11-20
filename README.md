<div align="center">

# ✈️ Torob Trip

### Discover more. Compare smarter. Travel better.

**A Persian-first, right-to-left travel discovery and comparison experience.**  
An independent MVP exploring how travelers can discover destinations, compare options, and make clearer travel decisions in one place.

![Project Status](https://img.shields.io/badge/Status-Interactive%20MVP-2459B8?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-111827?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Django](https://img.shields.io/badge/Django-5.1-092E20?style=for-the-badge&logo=django&logoColor=white)

**[Explore the concept](#the-idea) · [Features](#what-works-today) · [Quick start](#quick-start) · [Roadmap](#roadmap)**

</div>

---

## The idea

Planning a trip often means switching between travel websites, comparing disconnected offers, and trying to understand which option actually fits a traveler's schedule and budget.

**Torob Trip** explores a more cohesive experience: discover a destination, search travel options, compare the trade-offs, and eventually build a complete trip around personal preferences.

The long-term direction is **trip-level decision intelligence**—not just finding the cheapest ticket, but helping travelers understand total cost, travel time, convenience, and practical trade-offs. **That intelligence is a product goal, not a feature implemented in the current demo.**

## What works today

This repository currently contains an **interactive frontend demo** backed by local sample data, plus a minimal Django API scaffold.

| Area | Current implementation |
| --- | --- |
| **Persian-first experience** | Right-to-left layout, Persian UI, and three locally hosted Torob font weights. |
| **Landing page** | Responsive navigation, search interface, destination cards, feature sections, trip-planning concept, and FAQ. |
| **Service discovery** | UI tabs for domestic flights, international flights, trains, buses, tours, hotels, and villas/stays. |
| **Destination gallery** | Local WebP photography for Tehran, Mashhad, Shiraz, and Isfahan. |
| **Flight results** | A sample Tehran–Mashhad listing with airline text search, price-range filtering, a direct-flight toggle, and sorting controls. |
| **Flight details** | A modal showing airline, route, times, baggage, class, and sample price. |
| **Comparison selection** | Select up to three flights for a comparison bar; the detailed side-by-side comparison is not implemented yet. |
| **Backend** | Minimal Django REST Framework project with an `/api/health/` endpoint. |

> [!IMPORTANT]
> **Demo data only.** Flight prices, schedules, and availability are illustrative. Torob Trip currently does **not** retrieve live inventory, verify checkout prices, process bookings, or offer a working AI recommendation engine.

### Destinations

<table>
  <tr>
    <td width="25%" align="center"><img src="frontend/public/images/destinations/tehran.webp" alt="Tehran" width="100%"><br><strong>Tehran</strong></td>
    <td width="25%" align="center"><img src="frontend/public/images/destinations/mashhad.webp" alt="Mashhad" width="100%"><br><strong>Mashhad</strong></td>
    <td width="25%" align="center"><img src="frontend/public/images/destinations/shiraz.webp" alt="Shiraz" width="100%"><br><strong>Shiraz</strong></td>
    <td width="25%" align="center"><img src="frontend/public/images/destinations/isfahan.webp" alt="Isfahan" width="100%"><br><strong>Isfahan</strong></td>
  </tr>
</table>

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | Next.js 14, React 18, TypeScript |
| Styling | Tailwind CSS 3, custom CSS, locally hosted WOFF2 fonts |
| Icons | Lucide React (SVG) |
| Backend | Python 3.12, Django 5.1, Django REST Framework |
| Data infrastructure | PostgreSQL 16, Redis 7 |
| Container setup | Docker Compose, frontend/backend Dockerfiles; Nginx service declared |

The app intentionally uses a **small, understandable repository structure** rather than an elaborate monorepo or premature microservices.

## Quick start

### Run the frontend locally

**Prerequisites:** Node.js 20+ and npm.

```bash
git clone https://github.com/aligholizadeh8413/Torob.Trip.git
cd Torob.Trip/frontend
npm ci
npm run dev
```

Open **http://localhost:3000**.

| Route | Purpose |
| --- | --- |
| `/` | Landing page and travel search form |
| `/search` | Demo flight results and filters |
| `/explore` | Destination gallery |

The frontend currently reads its sample destinations and flights from `frontend/src/lib/mockData.ts`; you do not need to run the backend to explore the UI.

### Run the API scaffold with Docker

From the repository root, with Docker running:

```bash
docker compose up --build postgres redis backend
```

API health endpoint: **http://localhost:8000/api/health/**

Expected response:

```json
{
  "status": "ok",
  "service": "torob-trip-api"
}
```

> [!WARNING]
> **The complete Docker Compose stack is not yet ready for one-command startup.** The Compose file references `nginx/nginx.conf`, but that configuration file is missing from the current repository. The frontend and backend also lack `.dockerignore` files. The command above starts only the named backend-related services; full-stack Nginx routing still needs configuration. These startup commands are based on the repository configuration and have not been verified by a fresh end-to-end build in this review.

## Repository structure

```text
Torob.Trip/
├── frontend/
│   ├── public/
│   │   ├── fonts/                 # Three Torob WOFF2 font weights
│   │   └── images/destinations/   # Local WebP destination photos
│   ├── src/
│   │   ├── app/                   # /, /search, /explore
│   │   ├── components/            # Landing, navigation, search, results
│   │   └── lib/                   # Types, icons, and mock data
│   ├── Dockerfile
│   ├── package.json
│   └── package-lock.json
├── backend/
│   ├── apps/health/              # Health endpoint
│   ├── config/                   # Django settings and URL configuration
│   ├── manage.py
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml
├── .env.example
└── README.md
```

## Current limitations

This is a **work-in-progress demo**, not a live booking system:

- Search form tabs exist, but several service-specific inputs—including date selection, traveler counts, and round-trip controls—are not fully interactive.
- The results page currently displays a fixed Tehran–Mashhad flight dataset; it does not yet consume the search URL's route, date, or service parameters.
- The comparison bar supports selection, but the full comparison view has not been connected.
- Destination search and some navigation/actions remain presentational.
- The backend is a health-check scaffold; there are no live search, supplier, or booking APIs.
- Docker/Nginx configuration and development secrets still need cleanup before deployment.

## Roadmap

- [ ] Complete booking-form inputs, Persian date handling, and URL-driven results.
- [ ] Build a functional side-by-side comparison of travel offers.
- [ ] Add service-specific results for trains, buses, hotels, tours, and stays.
- [ ] Connect the frontend to Django APIs and persistent PostgreSQL models.
- [ ] Integrate authorized, verifiable data sources with clear provenance and freshness.
- [ ] Explore explainable, preference-aware recommendations across complete trip options.
- [ ] Finish Docker/Nginx configuration and harden environment settings.

## Project context

Torob Trip is an **independent portfolio and challenge prototype** focused on travel discovery, interface design, and the future potential of data normalization and explainable comparisons.

It is **not an official Torob product**, and the current version does not sell tickets or represent sample prices as live offers.

---

<div align="center">

**Built to make travel decisions simpler—one clear comparison at a time.**

</div>
