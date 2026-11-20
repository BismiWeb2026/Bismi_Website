/*
  ==========================================================
  COLLEGE DATA: Bismi Educational Trust
  ==========================================================
  Each entry has three fields:
    region   : must match an existing region name exactly
               (regions appear on the website in the order they
               first appear in this list)
    name     : college name
    location : town or area

  To add, edit, or remove a college, change only this file.
  The region cards, counts and totals update automatically.

  Entries marked REVIEW were preserved exactly as supplied.
  They look like possible duplicates or spelling issues and
  should be confirmed before changing.
  ==========================================================
*/

const colleges = [

  // ---------- Region: Coimbatore (31) ----------
  { region: "Coimbatore", name: "Karpagam College of Engineering", location: "Othakkalmandapam, Coimbatore" },
  { region: "Coimbatore", name: "Dhanalakshmi Srinivasan College of Engineering", location: "Coimbatore" }, // REVIEW: same name also listed under Trichy & Perambalur (Perambalur)
  { region: "Coimbatore", name: "Adithya Institute of Technology", location: "Kurumbapalayam, Coimbatore" },
  { region: "Coimbatore", name: "Nehru Institute of Engineering and Technology", location: "Thirumalayampalayam, Coimbatore" }, // REVIEW: similar to "Nehru Institute of Technology", same location
  { region: "Coimbatore", name: "Nehru Institute of Technology", location: "Thirumalayampalayam, Coimbatore" }, // REVIEW: similar to "Nehru Institute of Engineering and Technology", same location
  { region: "Coimbatore", name: "Kalaignar Karunanidhi Institute of Technology", location: "Kannampalayam, Coimbatore" },
  { region: "Coimbatore", name: "Sri Ramakrishna Institute of Technology", location: "Pachapalayam, Coimbatore" },
  { region: "Coimbatore", name: "Kathir College of Engineering", location: "Neelambur, Coimbatore" },
  { region: "Coimbatore", name: "PPG Institute of Technology", location: "Saravanampatti, Coimbatore" },
  { region: "Coimbatore", name: "Rathnavel Subramaniam Technical Campus", location: "Kannampalayam, Coimbatore" },
  { region: "Coimbatore", name: "Rathnavel Subramaniam College of Engineering and Technology", location: "Sulur, Coimbatore" },
  { region: "Coimbatore", name: "Sri Ranganathar Institute of Engineering and Technology", location: "Athipalayam, Coimbatore" },
  { region: "Coimbatore", name: "JCT College of Engineering and Technology", location: "Pichanur, Coimbatore" },
  { region: "Coimbatore", name: "Coimbatore Institute of Engineering and Technology", location: "Narasipuram, Coimbatore" },
  { region: "Coimbatore", name: "Hindusthan College of Engineering and Technology", location: "Malumichampatti, Coimbatore" },
  { region: "Coimbatore", name: "Sree Sakthi Engineering College", location: "Karamadai, Coimbatore" },
  { region: "Coimbatore", name: "Rathinam Technical Campus", location: "Eachanari, Coimbatore" },
  { region: "Coimbatore", name: "Dhaanish Ahmed Institute of Technology", location: "Padhuvampalli, Coimbatore" },
  { region: "Coimbatore", name: "Christ the King Engineering College", location: "Karamadai, Coimbatore" },
  { region: "Coimbatore", name: "EASA College of Engineering and Technology", location: "Navakkarai, Coimbatore" },
  { region: "Coimbatore", name: "Study World College of Engineering", location: "Malumichampatti, Coimbatore" },
  { region: "Coimbatore", name: "Sri Sai Ranganathan Engineering College", location: "Athipalayam, Coimbatore" },
  { region: "Coimbatore", name: "Asian College of Engineering and Technology", location: "Saravanampatti, Coimbatore" },
  { region: "Coimbatore", name: "Pollachi Institute of Engineering and Technology", location: "Pollachi" },
  { region: "Coimbatore", name: "Arjun College of Technology", location: "Kinathukadavu, Coimbatore" },
  { region: "Coimbatore", name: "Park College of Engineering and Technology", location: "Kaniyur, Coimbatore" }, // REVIEW: similar to "Park College of Technology", same location
  { region: "Coimbatore", name: "Tamilnadu College of Engineering", location: "Karumathampatti, Coimbatore" },
  { region: "Coimbatore", name: "Park College of Technology", location: "Kaniyur, Coimbatore" }, // REVIEW: similar to "Park College of Engineering and Technology", same location
  { region: "Coimbatore", name: "Akshaya College of Engineering and Technology", location: "Kinathukadavu, Coimbatore" },
  { region: "Coimbatore", name: "United Institute of Technology", location: "Periyanaickenpalayam, Coimbatore" },
  { region: "Coimbatore", name: "Suguna College of Engineering", location: "Kalapatti, Coimbatore" },

  // ---------- Region: Salem & Namakkal (18) ----------
  { region: "Salem & Namakkal", name: "Mahendra Groups", location: "Salem and Tiruchengode" }, // REVIEW: two locations listed in one entry
  { region: "Salem & Namakkal", name: "Muthayammal College of Engineering", location: "Rasipuram" },
  { region: "Salem & Namakkal", name: "AVS College of Technology", location: "Salem" },
  { region: "Salem & Namakkal", name: "Selvam College of Technology", location: "Namakkal" },
  { region: "Salem & Namakkal", name: "K.S.R. Medical College", location: "Tiruchengode" }, // REVIEW: "Medical College" listed in an engineering-focused region; confirm
  { region: "Salem & Namakkal", name: "Annapoorna Engineering College", location: "Seeragapadi, Salem" },
  { region: "Salem & Namakkal", name: "The Kavery Engineering College", location: "Mecheri" },
  { region: "Salem & Namakkal", name: "Gnanamani College of Technology", location: "Pachal, Namakkal" },
  { region: "Salem & Namakkal", name: "R.P. Sarathy Institute of Technology", location: "Omalur, Salem" },
  { region: "Salem & Namakkal", name: "Vinayaka Mission's Kirupananda Variyar Engineering College", location: "Salem" },
  { region: "Salem & Namakkal", name: "Tagore Institute of Engineering and Technology", location: "Deviyakurichi, Attur" },
  { region: "Salem & Namakkal", name: "Bharathiyar Institute of Engineering for Women", location: "Deviyakurichi" }, // REVIEW: spelling "Bharathiyar" may be intended as "Bharathiar"; confirm
  { region: "Salem & Namakkal", name: "Vivekanandha College of Engineering for Women", location: "Tiruchengode" },
  { region: "Salem & Namakkal", name: "Excel Group of Institutions", location: "Komarapalayam" },
  { region: "Salem & Namakkal", name: "Paavai Engineering College", location: "Pachal, Namakkal" },
  { region: "Salem & Namakkal", name: "Sri Shanmugha College of Engineering and Technology", location: "Pullipalayam, Salem" },
  { region: "Salem & Namakkal", name: "PPG College", location: "Namakkal" },
  { region: "Salem & Namakkal", name: "Sengunthar Engineering College", location: "Tiruchengode" },

  // ---------- Region: Chennai (8) ----------
  { region: "Chennai", name: "SRM Institute of Science and Technology", location: "Kattankulathur" },
  { region: "Chennai", name: "J.N.N. Institute of Engineering", location: "Kannigaipair" },
  { region: "Chennai", name: "Chettinad Academy of Research and Education", location: "Kelambakkam" },
  { region: "Chennai", name: "Dhanalakshmi Srinivasan College", location: "Chennai" }, // REVIEW: shorter name than the Coimbatore entry with a similar name; confirm these are distinct institutions
  { region: "Chennai", name: "P.B. College of Engineering", location: "Chennai" },
  { region: "Chennai", name: "Sri Venkateswara College of Engineering", location: "Sriperumbudur" },
  { region: "Chennai", name: "Sri Krishna Engineering College", location: "Chennai" },
  { region: "Chennai", name: "PERI Institute of Technology", location: "Mannivakkam" },

  // ---------- Region: Erode (4) ----------
  { region: "Erode", name: "Shree Venkateshwara Hi-Tech Engineering College", location: "Othakuthirai, Gobichettipalayam" },
  { region: "Erode", name: "Erode Sengunthar Engineering College", location: "Thudupathi, Perundurai" },
  { region: "Erode", name: "Al-Ameen Engineering College", location: "Erode" },
  { region: "Erode", name: "J.K.K. Munirajah College of Technology", location: "T.N. Palayam, Gobichettipalayam" },

  // ---------- Region: Trichy & Perambalur (9) ----------
  { region: "Trichy & Perambalur", name: "Kongunadu College of Engineering and Technology", location: "Tholurpatti, Thottiam" },
  { region: "Trichy & Perambalur", name: "M.A.M. College of Engineering", location: "Siruganur, Trichy" },
  { region: "Trichy & Perambalur", name: "CARE College of Engineering", location: "Thayanur, Trichy" },
  { region: "Trichy & Perambalur", name: "Dhanalakshmi Srinivasan Institute of Technology", location: "Samayapuram, Trichy" },
  { region: "Trichy & Perambalur", name: "Dhanalakshmi Srinivasan College of Engineering", location: "Perambalur" }, // REVIEW: same name also listed under Coimbatore (different location)
  { region: "Trichy & Perambalur", name: "OASYS Institute of Technology", location: "Trichy" },
  { region: "Trichy & Perambalur", name: "Oxford Engineering College", location: "Pirattiyur, Trichy" },
  { region: "Trichy & Perambalur", name: "Sri Ramakrishna College of Engineering", location: "Perambalur" },
  { region: "Trichy & Perambalur", name: "Roever Engineering College", location: "Elambalur, Perambalur" },

  // ---------- Region: Thanjavur (1) ----------
  { region: "Thanjavur", name: "Periyar Maniammai Institute of Science and Technology", location: "Vallam, Thanjavur" }
];
