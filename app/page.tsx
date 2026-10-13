import Image from "next/image";

import icon from "./icon.png";

const APP = "Square That";
const DEVELOPER = "Nemanja Maslaković";
const EMAIL = "squarethatgame@yahoo.com";
const LAST_UPDATED = "October 12, 2026";

const SECTIONS = [
  { id: "who", title: "Who I am" },
  { id: "on-device", title: "Information stored on your device" },
  { id: "admob", title: "Information collected by Google AdMob" },
  { id: "ads", title: "Ads in Square That" },
  { id: "purposes", title: "Why this data is processed" },
  { id: "sharing", title: "Sharing your data" },
  { id: "security", title: "Security and retention" },
  { id: "rights", title: "Your choices and rights" },
  { id: "permissions", title: "App permissions" },
  { id: "children", title: "Children" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact" },
];

function Mail() {
  return <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;
}

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="page">
      <header className="hero">
        <Image src={icon} alt="" width={72} height={72} className="appIcon" priority />
        <p className="logo">
          SQUARE <span className="gradient">THAT</span>
        </p>
        <h1>Privacy Policy</h1>
        <p className="meta">
          Last updated: {LAST_UPDATED} · Developer: {DEVELOPER}
        </p>
      </header>

      <section className="card summary" aria-labelledby="summary">
        <h2 id="summary">At a glance</h2>
        <ul>
          <li>
            {APP} has no accounts and no sign-in. I never ask for your name, email address, location or
            contacts.
          </li>
          <li>Your best score, your saved game and your settings stay on your device.</li>
          <li>
            The game shows ads from Google AdMob. To show and measure them, Google collects some data from
            your device, such as your advertising ID and IP address.
          </li>
          <li>
            I don&apos;t sell your data, and I don&apos;t receive personal data from Google, only
            anonymous totals such as how many ads were shown.
          </li>
        </ul>
      </section>

      <nav className="card toc" aria-label="Contents">
        <h2>Contents</h2>
        <ol>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="policy">
        <section id="who">
          <h2>1. Who I am</h2>
          <p>
            {APP} is a puzzle game for Android (the &quot;app&quot;). It is developed and published by{" "}
            {DEVELOPER}, an independent developer (&quot;I&quot;, &quot;me&quot;). This policy explains
            what information the app uses, what the advertising service Google AdMob collects, why, and what
            choices you have.
          </p>
          <p>
            I am responsible for the app. Google processes the data it collects for ads as an independent
            controller under its own privacy policy.
          </p>
        </section>

        <section id="on-device">
          <h2>2. Information stored on your device</h2>
          <p>To work, the game saves a few things in its private storage on your phone:</p>
          <ul>
            <li>your best score;</li>
            <li>your unfinished game (the board, your shapes and your score), so you can continue later;</li>
            <li>your settings: whether music and sounds are on;</li>
            <li>whether you have finished the tutorial;</li>
            <li>how many games you have finished, which is used to space out the ads between games.</li>
          </ul>
          <p>
            This information never leaves your device. It is not sent to me or to anyone else, and I run no
            server that collects it. It is deleted when you uninstall the app or clear its data in your
            device settings.
          </p>
        </section>

        <section id="admob">
          <h2>3. Information collected by Google AdMob</h2>
          <p>
            The app uses the Google Mobile Ads SDK (Google AdMob) to show ads. When ads are requested, shown
            or measured, the SDK automatically collects the following information and sends it to Google:
          </p>
          <ul>
            <li>
              <strong>Device identifiers:</strong> the Android advertising ID, the app set ID and similar
              identifiers.
            </li>
            <li>
              <strong>IP address,</strong> which may be used to estimate the general (approximate) location
              of your device.
            </li>
            <li>
              <strong>Interactions:</strong> app launches, taps, and ad and video views.
            </li>
            <li>
              <strong>Diagnostics and performance:</strong> for example app launch time, hang rate, crash
              information and energy use.
            </li>
            <li>
              <strong>Basic device and app information,</strong> such as the device model, the operating
              system version, the language and the app version.
            </li>
          </ul>
          <p>
            I cannot see your advertising ID or any of this data. AdMob only gives me anonymous, aggregated
            reports, such as the number of ads shown and the money they earned.
          </p>
          <p>
            Google describes this in{" "}
            <External href="https://policies.google.com/technologies/partner-sites">
              How Google uses information from sites or apps that use its services
            </External>{" "}
            and in the <External href="https://policies.google.com/privacy">Google Privacy Policy</External>.
          </p>
        </section>

        <section id="ads">
          <h2>4. Ads in Square That</h2>
          <p>The game shows two kinds of ads:</p>
          <ul>
            <li>
              <strong>Rewarded ads</strong> are optional. You choose to watch one to get a used-up power-up
              back (once per game for each power-up) or to continue after you lose (once per game). You get
              the reward after watching the ad.
            </li>
            <li>
              <strong>Interstitial ads</strong> are full-screen ads shown between games: after your first
              finished game, and then after every third finished game. They never interrupt a game you are
              playing.
            </li>
          </ul>
          <p>
            Google and its partners may process data to show and measure these ads, in line with your device
            settings and the consent choices you have made. Depending on your settings, your location and the
            law that applies to you, ads may be personalized (chosen based on your interests, using your
            advertising ID) or non-personalized (chosen based on the context, such as the app and your
            general location). In the European Economic Area, the United Kingdom and Switzerland,
            personalized ads are shown only where the legal requirements, including your consent, are met.
          </p>
        </section>

        <section id="purposes">
          <h2>5. Why this data is processed</h2>
          <ul>
            <li>
              <strong>To show ads</strong> in the app, both rewarded and interstitial.
            </li>
            <li>
              <strong>To measure how ads perform,</strong> for example impressions, views and clicks, and to
              calculate ad earnings.
            </li>
            <li>
              <strong>To prevent fraud and abuse,</strong> such as invalid traffic and fake clicks, and to keep
              the ads secure.
            </li>
            <li>
              <strong>To run the game:</strong> the data stored on your device saves your progress and your
              settings.
            </li>
          </ul>
          <p>
            Where the EU General Data Protection Regulation (GDPR) or a similar law applies, personalized ads
            rely on your consent. Non-personalized ads, ad measurement and fraud prevention rely on legitimate
            interests: keeping the game free to play and keeping its ads safe.
          </p>
        </section>

        <section id="sharing">
          <h2>6. Sharing your data</h2>
          <p>
            The only third-party service in the app is <strong>Google AdMob</strong>, provided by Google.
            Google may work with its own advertising partners, such as the advertisers whose ads appear and
            companies that measure ads, as described in Google&apos;s policies above.
          </p>
          <p>
            The app uses no other ad networks, analytics or tracking services. I do not sell or rent any
            information, and since I don&apos;t collect personal data myself, I have none to share.
          </p>
        </section>

        <section id="security">
          <h2>7. Security and retention</h2>
          <ul>
            <li>
              <strong>On your device:</strong> the game&apos;s data is kept in the app&apos;s private storage,
              which Android protects from other apps. It stays until you uninstall the app or clear its data.
            </li>
            <li>
              <strong>With Google:</strong> the data the Google Mobile Ads SDK collects is encrypted in transit
              (TLS). Google keeps it for the periods described in{" "}
              <External href="https://policies.google.com/technologies/retention">
                How Google retains data
              </External>
              . I don&apos;t know or control these periods.
            </li>
          </ul>
          <p>
            If you have any questions about how your data is handled, write to me at <Mail />.
          </p>
        </section>

        <section id="rights">
          <h2>8. Your choices and rights</h2>
          <ul>
            <li>
              <strong>Advertising ID:</strong> you can reset or delete your advertising ID, or turn off ad
              personalization, in your Android settings (usually <em>Settings → Google → Ads</em>, or{" "}
              <em>Settings → Privacy → Ads</em>, depending on your device).
            </li>
            <li>
              <strong>Google ad settings:</strong> you can review and change how Google personalizes ads in{" "}
              <External href="https://myadcenter.google.com">My Ad Center</External>.
            </li>
            <li>
              <strong>Data on your device:</strong> uninstall the game, or clear its data in Android settings,
              to delete it.
            </li>
          </ul>
          <p>
            Depending on where you live, you may have the right to access, correct or delete your personal
            data, to restrict or object to its processing, to data portability, to withdraw your consent at any
            time, and to lodge a complaint with your local data protection authority. Because the app sends no
            personal data to me, I usually cannot identify you or find data about you; for data held by Google,
            the tools above and Google&apos;s privacy policy explain how to use these rights. I am happy to help
            with any request: <Mail />.
          </p>
        </section>

        <section id="permissions">
          <h2>9. App permissions</h2>
          <p>On Android, the app uses these permissions:</p>
          <ul>
            <li>
              the permissions the Google Mobile Ads SDK needs to load and measure ads, such as internet
              access, network state and the advertising ID;
            </li>
            <li>vibration, for the game&apos;s haptic feedback;</li>
            <li>audio settings, to play the game&apos;s music and sounds.</li>
          </ul>
          <p>
            The app does not access your location (GPS), camera, microphone, contacts, photos or files.
          </p>
        </section>

        <section id="children">
          <h2>10. Children</h2>
          <p>
            {APP} is a game for a general audience and is not directed at children under 13. I do not
            knowingly collect personal information from children. If you believe a child&apos;s information
            has been collected through the app, please contact me at <Mail /> and I will help to have it
            removed.
          </p>
        </section>

        <section id="changes">
          <h2>11. Changes to this policy</h2>
          <p>
            I may update this policy from time to time, for example when I add new features, ad partners or
            SDKs to the app. The new version will be published on this page with a new &quot;Last
            updated&quot; date. If a change is significant, I will point it out here and, where the law
            requires it, ask for your consent.
          </p>
        </section>

        <section id="contact">
          <h2>12. Contact</h2>
          <div className="card contactCard">
            <p>Questions about this policy or your privacy? Write to:</p>
            <p className="contactName">{DEVELOPER}</p>
            <p className="contactMail">
              <Mail />
            </p>
          </div>
        </section>
      </article>

      <footer className="footer">
        © 2026 {DEVELOPER} · {APP}
      </footer>
    </main>
  );
}
