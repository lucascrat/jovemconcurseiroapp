# Design System Strategy: The Cognitive Sanctuary

## 1. Overview & Creative North Star
This design system is built upon the Creative North Star of **"The Cognitive Sanctuary."** 

In the high-stakes world of competitive exams (*concursos*), a student's interface should not just be a tool, but a focused environment that reduces mental load. We are moving away from the "app-as-a-database" look and toward a "Digital Curator" aesthetic. This means rejecting the rigid, boxy constraints of standard Material Design in favor of an **Editorial Layout** style. 

The system achieves this through **Intentional Asymmetry**—where progress indicators might break the container's edge—and **High-Contrast Typography Scales** that guide the eye effortlessly through dense study material. This is a "breathable" interface designed for four-hour study sessions, not just four-minute check-ins.

---

## 2. Colors: Tonal Depth & Focus
Our palette avoids the sterile "hospital white" of traditional apps, opting for a layered, sophisticated foundation.

### Palette Highlights
*   **Primary (`#002b57`):** The "Anchor." Used for deep focus and authoritative elements.
*   **Secondary (`#006c50`):** The "Growth Signal." Reserved for progress, success states, and momentum.
*   **Surface Hierarchy:** We utilize the `surface-container` tiers to create an architectural feel.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders for sectioning. 
Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit on a `surface` background. If you need more definition, use a `surface-container-highest` element nested within a `surface-container-low` area.

### Glass & Gradient Rule
To ensure the UI feels premium:
*   **Glassmorphism:** Use semi-transparent variants of `surface` with a 20px-40px backdrop-blur for floating navigation bars or modal headers.
*   **Signature Textures:** For main CTAs or large progress cards, use a subtle linear gradient from `primary` (#002b57) to `primary_container` (#1a4173). This adds "soul" and depth that flat color cannot provide.

---

## 3. Typography: Editorial Authority
We utilize two distinct sans-serif families to create a hierarchy that feels both functional and curated.

*   **The Display Voice (Manrope):** Used for `display`, `headline`, and `title` scales. Manrope’s geometric yet warm proportions provide a modern, "New York Times Tech" editorial feel. It signals importance and organization.
*   **The Utility Voice (Inter):** Used for all `body` and `label` scales. Inter is the gold standard for readability in dense text environments, ensuring that long study passages don't fatigue the eyes.

**The Hierarchy Goal:** Use `display-md` for high-level motivation (e.g., "Good morning, Victor") and `body-lg` for the core study content. The contrast between the bold Manrope headers and the clean Inter body text creates a "structured roadmap" for the user's brain.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "pop"; we use layering to create "place."

*   **The Layering Principle:** Stacking `surface-container` tiers creates a natural lift. A card using `surface-container-lowest` placed atop a `surface-container-low` background creates a soft, tactile separation.
*   **Ambient Shadows:** If a floating element (like a FAB) is required, use an extra-diffused shadow. 
    *   *Spec:* `offset-y: 8px`, `blur: 24px`, `color: rgba(23, 28, 34, 0.06)` (a tinted version of `on-surface`).
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline_variant` token at **15% opacity**. Never use 100% opaque borders.
*   **Glassmorphism Depth:** For mobile-first bottom sheets, use a semi-transparent `surface_container_highest` with a heavy backdrop-blur to allow the content underneath to bleed through softly, maintaining the user's context.

---

## 5. Components: Principles of Organization

### Buttons
*   **Primary:** Uses the `primary` color with `lg` (1rem) roundedness. Padding should be generous (16px 24px) to feel "weighted" and intentional.
*   **Secondary:** Use the `secondary_container` with `on_secondary_container` text. This is for "Positive Actions" like "Complete Lesson."
*   **Tertiary:** No background. Use `primary` text weight `600`.

### Cards & Study Modules
*   **Forbid Dividers:** Do not use lines to separate list items. Use 16px or 24px of vertical white space or a subtle shift from `surface-container-low` to `surface-container-high`.
*   **Roundedness:** Use the `xl` (1.5rem) scale for main dashboard cards to emphasize the "soft, modern" request. Use `DEFAULT` (0.5rem) for smaller nested elements like chips.

### Input Fields
*   **Style:** Minimalist. No bottom line. Use a `surface-container-highest` background with `lg` roundedness. The focus state should transition the background to `surface_lowest` with a "Ghost Border" of `primary`.

### Specialized App Components
*   **Focus Timer:** A large, central element using a `primary` to `primary_container` gradient ring, utilizing Glassmorphism for the center "time" display.
*   **Progress Chips:** Small, `secondary_fixed` containers with `on_secondary_fixed` text to highlight "85% Complete" or "Ranked #1."

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace as a functional tool. If a screen feels cluttered, increase the spacing rather than adding a border.
*   **DO** use the `secondary` (Emerald) color sparingly. It should be a reward for the user, signifying progress or a correct answer.
*   **DO** ensure all touch targets on mobile are at least 48dp, even if the visual element is smaller.

### Don't
*   **DON'T** use pure black for text. Use `on_surface` (#171c22) to keep the contrast high but the "vibe" soft.
*   **DON'T** use "Standard" Material shadows. They are too aggressive for long-form study.
*   **DON'T** use sharp corners. Every element should have at least the `sm` (0.25rem) corner radius to maintain the "approachable professional" aesthetic.