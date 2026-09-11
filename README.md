# Future Fresh — Sept 27, 2026 Registration

Registration + admin check-in + admin dashboard for the Sept 27 event. Modeled on the [FutureFresh](https://github.com/jplao/FutureFresh) repo, with the tournament bracket features removed and a fresh (not-yet-configured) backend.

## Setup: credentials

All secrets live in `config.js`, which is **gitignored** — it never gets committed or pushed, so the public repo never carries real keys.

```bash
cp config.example.js config.js
```

Then edit `config.js` and fill in:

1. **Firebase Realtime Database** (stores registrations; also gives check-in staff live sync across multiple devices)
   - Create a new project at [console.firebase.google.com](https://console.firebase.google.com), add a Realtime Database.
   - **Start it in locked mode**, not test mode — then paste the contents of [`firebase.rules.json`](firebase.rules.json) into Realtime Database → Rules in the console. Test mode leaves every registrant's name/age/email openly readable and writable by anyone with the URL.
   - Copy the web app config object into `firebase`.

2. **Firebase Authentication** (real admin sign-in — see "How admin access works" below)
   - In the console: **Build → Authentication → Get started → Sign-in method → Email/Password → Enable**.
   - **Authentication → Users → Add user** — create exactly one user with your own email and a real password. That email + password is what you'll type into the site's Admin Login box.
   - Nothing to add to `config.js` for this step — no password lives in the code.

3. **SheetDB** (Google Sheets backup of registrations — a printable/exportable mirror; Firebase is the real source of truth)
   - Create a Google Sheet with this exact header row: `id name age ageBracket email type checkedIn paid spectators registrationTime deleted deletedTime`.
   - Connect it at [sheetdb.io](https://sheetdb.io) and paste the API URL into `sheetDbUrl`.
   - Note: SheetDB's free tier caps you at 2 connected sheets — if you're also still running the March event's app, this may be your 2nd/3rd.
   - Unlike Firebase, this URL has no per-user auth — it's a shared secret embedded in the client, so anyone who finds it could read/edit/delete the sheet directly. Acceptable for a backup roster, but don't treat it as protected the way Firebase now is.

4. **EmailJS** (confirmation emails to registrants)
   - Set up a service + template at [emailjs.com](https://www.emailjs.com).
   - Fill in `emailJs.publicKey`, `emailJs.serviceId`, and `emailJs.templateId`.

`index.html` loads `config.js` via `<script src="config.js"></script>`, so the file must sit next to `index.html` for the page to work locally or wherever you deploy it.

**Heads up:** gitignoring `config.js` keeps the Firebase/SheetDB/EmailJS keys out of the GitHub repo, but it does *not* hide them from site visitors once the page is actually deployed — they run client-side, so anyone can view them via browser dev tools on the live site. The Firebase API key/config being visible is normal and expected (Firebase is designed around this — the security rules are what actually protect the data, not keeping the config secret). The SheetDB and EmailJS keys being visible is a smaller, accepted risk for an event page like this.

## How admin access works

Unlike the original FutureFresh app (a plain password typed into a JavaScript check), this site uses **real Firebase Authentication** for the admin login. That matters because Firebase security rules can only tell a genuine signed-in admin apart from a random visitor if there's an actual sign-in — a client-side password compare is invisible to the database and can't be enforced there.

- Public visitors can submit new registrations, but cannot read the dancer list or edit/delete anyone's entry (see `firebase.rules.json`).
- Only the one Firebase Auth user created above (identified by UID in `firebase.rules.json`) can read the list, check people in, mark payments, or delete registrations.
- If you ever add a second admin/staff account, add its UID to the `auth.uid === '...'` checks in `firebase.rules.json` (or switch to a `root.child('admins').child(auth.uid).exists()` lookup if you expect more than a couple).

## Notes

- This is a fresh backend, separate from the March 22 event — no old registrations will show up here.
- Brackets/tournament features aren't included in this version (registration, check-in, and dashboard only).
- Event details (date, time, venue, pricing, DJ/MC, prizes) match the official "Future Fresh 2" flyer for Sept 27, 2026 at Chrysalis Denver.
- Age divisions on the site are 6-8 / 9-11 / 12-14 / 15-18 — the flyer prints "9-12" for the second bracket, but that overlaps the 12-14 division, so it's treated as a flyer typo for "9-11".
