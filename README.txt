Project: Traio Networks - Frontend Login & Payment Website
Author: Hrushikesh Tanaji Bendbhar
Purpose: College/Project demo website with frontend-only logic

────────────────────────────────────────────
📁 Project Structure:
────────────────────────────────────────────
/project-root
│
├── index.html             ← Login page
├── kapil.html             ← Kapil's dashboard (30-day tracker)
├── sagar.html             ← Sagar's dashboard (30-day tracker)
├── payment.html           ← Payment gateway UI
│
├── css/
│   └── style.css          ← Styles for all pages
│
├── js/
│   ├── login.js           ← Handles login validation
│   └── dashboard.js       ← Tracks remaining days, shows expiry
│
└── images/
    ├── detail.jpg         ← Poster image
    ├── OFFER.jpg          ← Offer image
    ├── 499.jpg            ← ₹499 plan
    ├── 799.jpg            ← ₹799 plan
    └── 999.jpg            ← ₹999 plan

────────────────────────────────────────────
🔐 Login Credentials (Hardcoded in JS):
────────────────────────────────────────────
1. Username: KAPILBENDBHAR
   Password: Kapil@123
   ➤ Lands on: kapil.html

2. Username: SAGARSHITOLE
   Password: Sagar@123
   ➤ Lands on: sagar.html

────────────────────────────────────────────
📅 30-Day Plan Tracker:
────────────────────────────────────────────
- You can change the plan start date by editing the `data-start-date` in:
  ➤ `kapil.html` or `sagar.html`

Example:
```html
<p id="plan-status" data-start-date="2025-06-08"></p>
