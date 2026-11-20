# Bismi Educational Trust: Website Handover Guide

This is a static, single-page website built with HTML, CSS and vanilla JavaScript. It has no backend, database or external APIs, so it can be hosted free on GitHub Pages.

---

## 1. Project structure

```
Bismi-Educational-Trust/
├── index.html              Page structure and all text content
├── css/
│   ├── style.css           Colours, typography, components
│   └── responsive.css      Tablet and mobile layouts
├── js/
│   ├── main.js             Navigation, contact links, college filtering
│   ├── colleges.js         All college names, locations and regions
│   └── config.js           Phone numbers, branches, WhatsApp, social links
└── assets/
    ├── logo.png
    ├── founder.png
    ├── hero-students.png
    └── award-1.jpg  (and award-2.jpg, award-3.jpg, ...)
```

---

## 2. Opening the GitHub repository

1. Go to github.com and sign in.
2. Open the **Bismi-Educational-Trust** repository from your list of repositories.
3. Select the **Code** tab. The files above are listed there.

---

## 3. Locating `js/colleges.js`

1. In the **Code** tab, open the **js** folder.
2. Select **colleges.js**.
3. Select the pencil icon (**Edit this file**) at the top right of the file.

---

## 4. Understanding a college entry

Every college is one block inside the `colleges` list:

```js
{ region: "Chennai", name: "SRM Institute of Science and Technology", location: "Kattankulathur" },
```

| Field      | Meaning                                                      |
|------------|--------------------------------------------------------------|
| `region`   | Which region card the college appears under. Must match exactly. |
| `name`     | The college name as it should appear.                        |
| `location` | Town or area shown below the name.                           |

Every entry must end with a comma, except the very last entry in the list.

---

## 5. Adding a new college

Find the group for the correct region (the comments say `Region: ...`). Add a new line inside that group:

```js
{ region: "Chennai", name: "Example New College of Engineering", location: "Porur, Chennai" },
```

Keep the region name spelled exactly like the existing ones. The region cards, counts and total update automatically; you do not need to change anything else.

---

## 6. Editing a college name or location

Change only the text between the quotation marks:

```js
// Before
{ region: "Erode", name: "Al-Ameen Engineering College", location: "Erode" },
// After
{ region: "Erode", name: "Al-Ameen Engineering College", location: "Erode Main Road, Erode" },
```

---

## 7. Removing a college

Delete the whole line for that college, including its comma. Check that the line before it still ends correctly. The counts update automatically.

---

## 8. Region names you can use

Use these names exactly, including capital letters, spaces and the `&` symbol:

- `Coimbatore`
- `Salem & Namakkal`
- `Chennai`
- `Erode`
- `Trichy & Perambalur`
- `Thanjavur`

To add a new region, type a new name (for example `Madurai`). It will appear as a new region card automatically, placed after the existing regions.

---

## 9. Saving and committing changes

1. Scroll to the bottom of the edit screen.
2. In **Commit changes**, type a short description, for example: `Added 2 colleges to Chennai region`.
3. Make sure **Commit directly to the main branch** is selected.
4. Select **Commit changes**.

Repeat the same steps for `js/config.js`, `index.html` or any image file you change. Images are replaced by uploading the new file to the **assets** folder with the same file name (see section 14).

---

## 10. How GitHub Pages updates the website

Once a commit is saved to the main branch:

1. GitHub Pages rebuilds the site automatically. This usually takes 1 to 3 minutes.
2. The live address updates with the new content.
3. If the change does not appear, wait a few minutes, then refresh the page. Press **Ctrl + Shift + R** (or **Cmd + Shift + R** on a Mac) to clear the cached copy.

You can check the build progress in the **Actions** tab, or under **Settings > Pages**.

---

## 11. Editable information guide

| Information | File / location |
|---|---|
| Website logo | `assets/logo.png` |
| Founder photo | `assets/founder.png` |
| Hero image | `assets/hero-students.png` |
| College names and locations | `js/colleges.js` |
| Main branch name, address, phone and Google Maps URL | `js/config.js` (`mainBranch`) |
| Other branch places (names only, any number) | `js/config.js` (`branchPlaces`) |
| Award and appreciation images and captions | `js/config.js` (`awards`) and images in `assets/` |
| Carousel speed (time per slide) | `js/config.js` (`awardsIntervalMs`) |
| Founder introduction and quotes (drafts) | `index.html` (search for `founder-intro` and `founder-quote`) |
| The four contact numbers | `js/config.js` (`phones`) |
| WhatsApp number and pre-filled message | `js/config.js` (`whatsapp`) |
| YouTube, Instagram, Facebook, Pinterest, LinkedIn URLs | `js/config.js` (`social`) |
| Founder name | `index.html` (search for `founder-name`) |
| Founder introduction | `index.html` (search for `placeholder`) |
| All other website text and section content | `index.html` |

Statistics (10+, 10,000+, 70+, 10+) are in `index.html` inside the section with the class `stats`. Change the text inside each `stat-value` element.

---

## 12. Values that still need real details

Every value below is a placeholder and must be replaced before going live:

- **Phone numbers (4):** `js/config.js` > `phones`. Replace `+91XXXXXXXXXX`.
- **WhatsApp:** `js/config.js` > `whatsapp.url`. Use `https://wa.me/` followed by the country code and number, digits only, for example `https://wa.me/919876543210`.
- **Main branch address:** `js/config.js` > `mainBranch` > `address`.
- **Main branch phone:** `js/config.js` > `mainBranch` > `phone`.
- **Main branch Google Maps URL:** `js/config.js` > `mainBranch` > `mapsUrl`. To create one, search for the branch in Google Maps, select **Share**, copy the link, and paste it in place of the placeholder.
- **Social media URLs (5):** `js/config.js` > `social`. Replace each `REPLACE_WITH_...` part with the official Bismi page address.
- **Founder name and introduction:** `index.html`.

---

## 13. Verifying every link

Test each item on a phone and on a computer after committing:

- [ ] Each of the four phone numbers opens the dialler (`tel:`).
- [ ] The WhatsApp links (hero, contact section, and social icon) open the correct chat.
- [ ] Each branch's **Call** link opens the dialler.
- [ ] Each branch's **Get directions** link opens Google Maps at the correct location.
- [ ] Each social icon opens the correct official Bismi page in a new tab.
- [ ] The navigation links scroll to the correct section.

---

## 14. Images: replacement guide

| Image file | Used for | Recommended size | Notes |
|---|---|---|---|
| `logo.png` | Header logo and browser tab icon | 400 × 400 px or a wider logo, for example 600 × 200 px | Transparent background works best. Displayed at 48 px tall on desktop and 40 px on mobile. |
| `founder.png` | Founder section | 800 × 1000 px (4:5 portrait) | Shown in a 4:5 frame and cropped to fit, not stretched. Keep the face in the upper half. |
| `hero-students.png` | Home section, right side | 1200 × 900 px (4:3 landscape) | Shown at full column width. Use a bright, sharp image. |
| `assets/award-1.jpg` (and -2, -3, and so on) | Awards carousel | 1200 × 900 px (4:3) or any shape | Shown in full, without cropping or stretching. Add as many as you need and list each one in `config.js` > `awards`. |

Keep the same file names when replacing images. Do not stretch or distort photographs. Use a photo editor to crop them to the recommended shape before uploading.

---

## 15. Checking the website after committing

1. Open the live GitHub Pages address.
2. Check the header, hero text and both hero buttons.
3. Check the four statistics.
4. Check the founder photo and the placeholder text is replaced.
5. Select each of the six region cards and confirm the correct colleges and counts appear.
6. Check that **Back to regions** returns to the region cards.
7. Check the total number of colleges (currently 71).
8. Check the MBBS abroad list (14 countries).
9. Check the contact section, branch links, and social icons.
10. Resize the browser or use a phone to check the mobile menu and layout.
11. Press **F12** on a computer and open the **Console** tab. There should be no red error messages.

---

## 16. Records for review

The following college entries were kept exactly as supplied. They are flagged in `js/colleges.js` with `REVIEW` comments so they can be confirmed. Nothing has been removed or changed.

1. **Nehru Institute of Engineering and Technology** and **Nehru Institute of Technology** share the same location (Thirumalayampalayam, Coimbatore). Confirm these are two separate institutions.
2. **Park College of Engineering and Technology** and **Park College of Technology** share the same location (Kaniyur, Coimbatore). Confirm.
3. **Dhanalakshmi Srinivasan College of Engineering** appears in Coimbatore and in Trichy & Perambalur with different locations. Confirm these are separate campuses.
4. **Dhanalakshmi Srinivasan College** (Chennai) has a similar name to the Coimbatore and Perambalur entries. Confirm.
5. **Mahendra Groups** is listed with two locations (Salem and Tiruchengode) in one entry. Confirm whether to split it.
6. **K.S.R. Medical College** is listed under the Salem & Namakkal region. Confirm it should appear with the engineering colleges.
7. **Bharathiyar Institute of Engineering for Women**: the spelling may be intended as "Bharathiar". Confirm.

---

## 17. Final testing checklist

- [ ] Home section displays correctly.
- [ ] About Us section displays correctly.
- [ ] Founder section shows the supplied photo.
- [ ] All four statistics are correct.
- [ ] All nine educational guidance services are shown.
- [ ] All six Explore Colleges region cards work.
- [ ] All 71 college entries are preserved.
- [ ] College counts are correct (31, 18, 8, 4, 9, 1; total 71).
- [ ] No College Counselling Codes appear.
- [ ] All 14 MBBS Abroad countries are shown.
- [ ] The main branch address and phone are correct, and the other branch places are listed.
- [ ] The awards carousel slides automatically, pauses on hover, and the arrows, dots and swipe work.
- [ ] All four contact numbers are editable and call correctly.
- [ ] All six social media links are shown.
- [ ] WhatsApp links open the correct conversation.
- [ ] Maps links open the correct branch location.
- [ ] Layout works on mobile, tablet and desktop.
- [ ] GitHub Pages deployment works.
