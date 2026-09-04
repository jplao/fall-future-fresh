# Future Fresh — Sept 27, 2026 Registration

Registration + admin check-in + admin dashboard for the Sept 27 event. Modeled on the [FutureFresh](https://github.com/jplao/FutureFresh) repo, with the tournament bracket features removed and a fresh (not-yet-configured) backend.

## Before the event: fill in these placeholders in `index.html`

Search for `REPLACE_WITH_YOUR_` to find every spot.

1. **Firebase Realtime Database** (real-time sync of registrations)
   - Create a new project at [console.firebase.google.com](https://console.firebase.google.com), add a Realtime Database (test mode is fine to start).
   - Copy the config object into `firebaseConfig` (~line 908).

2. **SheetDB** (Google Sheets backup of registrations)
   - Create a Google Sheet with columns matching the dancer fields (id, name, age, ageBracket, email, type, checkedIn, paid, spectators, registrationTime).
   - Connect it at [sheetdb.io](https://sheetdb.io) and paste the API URL into `SHEETDB_API_URL` (~line 921).

3. **EmailJS** (confirmation emails to registrants)
   - Set up a service + template at [emailjs.com](https://www.emailjs.com).
   - Fill in the public key (~line 614) and the service/template IDs (~line 1024).

4. **Admin password**
   - Set `ADMIN_PASSWORD` (~line 926) to something new — don't reuse the March event's password.

## Notes

- This is a fresh backend, separate from the March 22 event — no old registrations will show up here.
- Brackets/tournament features aren't included in this version (registration, check-in, and dashboard only).
- Event date/time/location/pricing on the Event Info tab currently mirror the March event — update those if anything's different for Sept 27.
