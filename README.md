# Next.js ItemHub Project

## Project Description

ItemHub is a responsive Next.js 16 application with App Router. It features a clean landing page, item listing, item details, mock authentication, and protected route for adding items.

## Technologies Used

* Next.js 16 (App Router)
* Tailwind CSS for styling
* React Hooks (useState, useEffect)
* next-themes for dark/light mode
* Lucide React for icons
* Cookie-based mock authentication (login/logout)
* Optional: Express.js API or JSON file for items

## Setup & Installation

1. Clone the repository:

```bash
git clone <repository-link>
```

2. Navigate to the project folder:

```bash
cd nextjs-itemhub
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open your browser at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/pages or /app       - Main application pages
/components          - Reusable UI components (Navbar, Footer, Sections)
/lib                 - Utility functions (e.g., auth validation)
/public              - Static assets like images
```

## Routes Summary

* `/` : Landing page with 7 sections
* `/items` : Public item listing page
* `/items/[id]` : Public item details page
* `/login` : Mock login page
* `/add-item` : Protected page to add items (requires login)

## Login Credentials

* Email: `admin@itemhub.com`
* Password: `password123`

## Features Implemented

* Responsive landing page with Hero, Stats, Features, How it Works, Testimonials, Pricing, CTA sections
* Navbar & Footer with responsive design
* Mock authentication using cookies
* Login and Logout functionality
* Protected route for adding items
* Item list and item details page
* Dark/Light mode toggle
* Mobile-friendly navigation

## Optional Enhancements

* Toast notifications for successful item creation
* Styled buttons with Tailwind and gradient designs

## Live Demo : 

## Github Link: https://github.com/SYDUR98/itemhub-landing-auth

[]
