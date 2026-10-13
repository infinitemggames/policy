# Square That – Privacy Policy

The privacy policy of the Square That game, as a one-page Next.js site for Vercel. The policy is the home page (`/`), so the site's address is the URL to give Google Play.

The text is in [`app/page.tsx`](app/page.tsx): the developer's name, the contact email and the "Last updated" date are at the top of the file. The styles are in [`app/globals.css`](app/globals.css), and the favicon is the game icon ([`app/icon.png`](app/icon.png)).

## Running it locally

```bash
npm install      # only the first time
npm run dev      # http://localhost:3000
npm run build    # the production build Vercel will make
```

## Putting it on Vercel

Either way, Vercel recognises Next.js by itself; no settings are needed.

- **From this folder, with the Vercel CLI:** run `npx vercel` and log in, then `npx vercel --prod`. The address is printed at the end, for example `https://square-that-privacy.vercel.app`.
- **From GitHub:** put this folder in a GitHub repository, then on vercel.com choose *Add New → Project* and import it. Every push publishes the site again.

Paste the address into Google Play Console under *Policy and programs → App content → Privacy policy*.

## When the game changes

Update the policy (and the "Last updated" date) when the app starts collecting something new, or gets a new ad network, analytics or another SDK. What it says now matches the game as of October 2026: no accounts, progress stored on the device, Google AdMob rewarded and interstitial ads, and the Android permissions listed in section 9.
