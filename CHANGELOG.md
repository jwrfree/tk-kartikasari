# Changelog

All notable changes to this project will be documented in this file.

## Version 1.1.0 - Narrative & Copywriting Overhaul

This version focuses on a comprehensive rewrite of the website's content to create a consistent, persuasive, and parent-centric narrative. The tone across all pages has been elevated to reflect a premium, trustworthy, and welcoming brand image.

### Changed

- **style(copy):** Refined copy across all major pages (**Beranda, Tentang Kami, Program, Fasilitas, PPDB, Biaya**) to be more persuasive, benefit-oriented, and empathetic.
- **style(beranda):** Updated hero section title and description to be more welcoming and focus on child development outcomes.
- **style(tentang-kami):** Transformed the narrative from a simple history into a compelling story about vision, mission, and partnership with parents.
- **style(program):** Simplified technical terms like STEAM into activity-based descriptions that are easier for parents to understand (e.g., "Sains & Logika" and "Art & Creativity").
- **style(fasilitas):** Rewrote facility descriptions to explicitly link physical features with their direct benefits for a child's development, safety, and learning experience.
- **style(ppdb):** Softened the language in the "Terms & Conditions" and FAQ sections to be more guiding and less transactional, using a warmer, more personal tone.
- **style(biaya):** Re-framed financial costs as "investments" in a child's future. Updated descriptions to highlight value, presented payment options more persuasively, and communicated policies with greater empathy.

## Version 1.0.0 - Initial Launch

This is the first stable release of the TK Kartikasari multi-page website, migrated from a single-page architecture to a modern Next.js application.

### Added

- **feature:** Created a dedicated page for school fees (`/ppdb`) to provide clear and accessible information for parents.
- **feature:** Implemented a data-driven approach for content by storing fee details in a structured `data/biaya.json` file, separating content from the user interface.
- **feature:** Added `docs/roadmap.md` to document the plan for a future content management panel (v2.0).
- **feature:** Added this `CHANGELOG.md` file to track project history.

### Fixed

- **fixed:** Resolved a critical build failure caused by the `/ppdb` page trying to access non-existent fee data.

### Changed
