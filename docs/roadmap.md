# Project Roadmap

This document outlines planned features for future versions of the TK Kartikasari website.

## Version 2.0

### 1. Simple Content Management Panel

**Objective:**
To provide a simple, password-protected admin interface for non-technical users to manage website content without needing to edit code directly.

**User Story:**
As the school administrator, I want to log in to a secret page where I can update school fees and publish new blog posts, so that I can keep the website content up-to-date independently.

**Key Features:**
*   **Secret & Secure Access:** 
    *   The admin panel will be accessible via a non-public, secret URL (e.g., `/panel-admin`).
    *   A simple password prompt will gate access to the admin tools.

*   **Content Editing Tools:**
    *   **Fee Editor:** A form to view and update the school fee details (data currently stored in `data/biaya.json`).
    *   **Blog Post Creator:** A user-friendly form to write and publish new blog articles. This will include fields for title, author, tags, a main image, and the body content.

**Technical Implementation Plan:**
1.  **Migrate Blog Content:** Move blog posts from the `content/blog.ts` file to a structured `data/blog.json` file. This makes the data editable programmatically, just like the fee data.
2.  **Create API Endpoints:** Build Next.js API Routes that can securely read from and write to the `.json` data files on the server.
3.  **Build Admin UI:** Develop the front-end interface for the admin panel using React components, including the login form, fee editor, and blog post form.