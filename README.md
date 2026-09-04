# Future Fresh — Sept 27, 2026 Registration

Registration + admin check-in + admin dashboard for the Sept 27 event. Modeled on the [FutureFresh](https://github.com/jplao/FutureFresh) repo, with the tournament bracket features removed and a fresh (not-yet-configured) backend.

## Setup: credentials

All secrets live in `config.js`, which is **gitignored** — it never gets committed or pushed, so the public repo never carries real keys.

```bash
cp config.example.js config.js
```

Then edit `config.js` and fill in:

1. **Firebase Realtime Database** (real-time sync of registrations)
   - Create a new project at [console.firebase.google.com](https://console.firebase.google.com), add a Realtime Database (test mode is fine to start).
   - Copy the config object into `firebase`.

2. **SheetDB** (Google Sheets backup of registrations)
   - Create a Google Sheet with columns matching the dancer fields (id, name, age, ageBracket, email, type, checkedIn, paid, spectators, registrationTime).
   - Connect it at [sheetdb.io](https://sheetdb.io) and paste the API URL into `sheetDbUrl`.

3. **EmailJS** (confirmation emails to registrants)
   - Set up a service + template at [emailjs.com](https://www.emailjs.com).
   - Fill in `emailJs.publicKey`, `emailJs.serviceId`, and `emailJs.templateId`.

4. **Admin password**
   - Set `adminPassword` to something new — don't reuse the March event's password.

`index.html` loads `config.js` via `<script src="config.js"></script>`, so the file must sit next to `index.html` for the page to work locally or wherever you deploy it.

**Heads up:** gitignoring `config.js` keeps these values out of the GitHub repo, but it does *not* hide them from site visitors once the page is actually deployed — the admin-password check and all API keys run client-side, so anyone can view them via browser dev tools on the live site. That's a limitation carried over from the original app's design, not something the gitignore fixes.

## Notes

- This is a fresh backend, separate from the March 22 event — no old registrations will show up here.
- Brackets/tournament features aren't included in this version (registration, check-in, and dashboard only).
- Event date/time/location/pricing on the Event Info tab currently mirror the March event — update those if anything's different for Sept 27.
