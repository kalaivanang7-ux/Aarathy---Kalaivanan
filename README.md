# Aarathy & Kalaivanan: Wedding Invitation Website

Static site (HTML, CSS, JavaScript). No backend, no paid services. Works on GitHub Pages.

## Edit details
Open `script.js`. Everything at the top inside `CONFIG` (names, message, dates, times, venues, Google Maps links) can be changed. Save and re-upload.
The images in `assets/images/` are your original invitation pages (cover, wedding, reception). Replace them with the same file names to update the artwork.

## Deploy on GitHub Pages (free)
1. Download and unzip this project on your computer.
2. Go to github.com and sign up (free, no card needed).
3. Click **+** (top right) > **New repository**. Name it e.g. `aarathy-kalaivanan`, choose **Public**, click **Create repository**.
4. Click **uploading an existing file**. Drag in `index.html`, `style.css`, `script.js`, `README.md` and the whole `assets` folder (upload the folders' contents so the structure stays the same). Click **Commit changes**.
5. Open **Settings > Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
6. Wait 1 to 3 minutes. Refresh the Pages screen; your link appears: `https://YOUR-USERNAME.github.io/aarathy-kalaivanan/`
7. **Important for WhatsApp preview:** in `index.html`, replace both `https://YOUR-USERNAME.github.io/REPO/` addresses (og:image and og:url) with your real link, then commit again.
8. Test on your iPhone in Safari: open the link, tap Open Invitation, scroll through, tap both Get directions buttons.
9. Share the link in WhatsApp.

## WhatsApp link preview
WhatsApp reads the `og:` tags in `index.html` and shows the title, description and `assets/images/og-image.jpg`. Tips:
- Step 7 above must be done, otherwise no image shows.
- Send the plain link alone as a message so the preview card appears.
- WhatsApp caches previews. If you change the image, add `?v=2` to the end of the link when sharing again.
- Fonts: the site uses elegant serif fonts already on phones. To use a custom free font (e.g. Cormorant Garamond from Google Fonts), download it, put the file in `assets/fonts/` and add an `@font-face` rule in `style.css`.
