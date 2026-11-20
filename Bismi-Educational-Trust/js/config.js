/*
  ==========================================================
  CONFIG: Bismi Educational Trust
  ==========================================================
  Replace every value marked  or REPLACE with the real
  details supplied by Bismi. Nothing here has been invented.
  Phone numbers should include the country code, for example
  +919876543210.
  ==========================================================
*/

window.BISMI_CONFIG = {

  // Four contact numbers in total.
  phones: [
    { label: "Admissions Support & Guidance", number: "+918438384619" },
    { label: "Course & College Enquiries", number: "+918838446488" },
    { label: "Student Counselling", number: "+919786785761" },
    { label: "Enquiry & Assistance", number: "+919786784990" }
  ],

  // WhatsApp. "url" is https://wa.me/ followed by country code and number (digits only).
  // "message" is pre-filled when a visitor opens the chat.
  whatsapp: {
    url: "https://wa.me/918438384619",
    message: "Hello Bismi Educational Trust, My Name is______. I would like to know more about Admission support & Course guidance."
  },

  // Main branch: full details are shown.
  mainBranch: {
    name: "Main Branch",
    address: "RajKrishna Residency backside Attur tk, salem Dt",
    phone: "+918438384619",
    mapsUrl: "https://www.google.com/maps/place/BISMI+EDUCATIONAL+TRUST/@11.5946514,78.6057133,17z/data=!3m1!4b1!4m6!3m5!1s0x3bab9d67b53567d9:0xa407f025ce82e472!8m2!3d11.5946514!4d78.6057133!16s%2Fg%2F11w_v0dy7m?entry=ttu&g_ep=EgoyMDI2MTExNy4wIKXMDSoASAFQAw%3D%3D"
  },

  // Other branch places: names only. Add or remove entries freely.
  // Example: "Madurai", "Trichy", "Bengaluru"
  branchPlaces: [
    "SALEM",
    "ULUNDHURPET",
    "KALLAKURICHI",
    "KARUR",
    "NAMAKKAL",
    "CHENNAI",
    "ERODE",
    "DINDIGUL"

  ],

  // Awards and appreciation carousel.
  // "src" is the image path (put files in assets/).
  // If an image is missing, the slide shows its title and a placeholder message.
  awards: [
    { src: "assets/award-1.jpg", title: "Awards & Achievements", detail: "Awarded to Mr. S. Sadham Hussain — 2025-2026" },
    { src: "assets/award-2.jpg", title: "All India Educational Consultant & Colleges’ Meet", detail: "Tamil Nadu Education Counsellors Welfare Association (TECWA) — 2025" },
    { src: "assets/award-3.jpg", title: "Best Award for Outstanding Dedication in Social Service", detail: "3rd Educational Expo — 2025 | Master Higher Educational Guideline Centre, Sankarapuram" },
    { src: "assets/award-4.jpg", title: "Best Award for Outstanding Dedication in Social Service", detail: "4th Educational Expo — 2026 | Master Higher Educational Guideline Centre, Sankarapuram" },
    { src: "assets/award-5.jpg", title: "Sincere Appreciation & Gratitude for Continuous Support", detail: "Presented to Mrs. Sadham Hussain, Managing Director, Bismi Educational Trust" }
  ],

  // Time between slides, in milliseconds (5000 = 5 seconds).
  awardsIntervalMs: 5000,

  // Social media. WhatsApp is handled above. Icons are drawn in js/main.js.
  social: [
    { name: "YouTube",   url: "https://www.youtube.com/@bismieducationalservice" },
    { name: "Instagram", url: "https://www.instagram.com/bismi_educational_service/" },
    { name: "Facebook",  url: "https://www.facebook.com/profile.php?id=100083155005483" },
    { name: "Pinterest", url: "https://in.pinterest.com/bismieducationaltrust/" },
    { name: "LinkedIn",  url: "https://www.linkedin.com/in/bismieducational-trust-2372392a2/" }
  ]
};
