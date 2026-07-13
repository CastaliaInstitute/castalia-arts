# Castalia Arts

Static GitHub Pages site template for **Castalia Arts**.

Default production target:

- **Domain:** `arts.castalia.institute`
- **Art of the Day:** `https://arts.castalia.institute/aotd/`

## What this template includes

- `docs/` GitHub Pages site
- `/aotd/` route for **Art of the Day**
- `docs/data/art-of-the-day.json` for the daily artwork payload
- `castalia-arts.json` for site-level metadata
- `docs/CNAME` preset to `arts.castalia.institute`

## Publish

Use GitHub Pages with:

- **Deploy from a branch:** `main` → `/docs`
- Or GitHub Actions Pages if you prefer workflow deployment

After the repo exists:

1. Set **Pages → Custom domain** to `arts.castalia.institute`
2. Run the DNS helper from the generator repo:

```bash
set -a && source ../castalia.institute/.env && set +a
./scripts/cf-dns-arts-github-pages.sh
```

## Art of the Day data

Update `docs/data/art-of-the-day.json` with one public-domain or otherwise reusable work at a time.

Recommended source model:

- museum-backed open collections
- explicit public-domain / CC0 metadata
- a derived line-art or classroom-friendly adaptation when needed

## Route map

- `/` — site home
- `/aotd/` — Art of the Day
