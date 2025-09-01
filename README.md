
# Dark Motion Switch
A fluid, beautifully animated light/dark mode toggle built with Next.js, Framer Motion, and Tailwind CSS.

<div>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
</div>

---

https://github.com/user-attachments/assets/2025bd06-1711-49fb-b83d-39327cd812cc

This project is a focused exploration of creating a nice micro-interaction. The goal was to move beyond a simple toggle and build a theme switch that enhances the user experience through fluid animation.

## 🚀 Live Demo & Figma Design

*   **Live Application:** [**dark-motion-switch.vercel.app**](https://dark-motion-switch.vercel.app/)
*   **Figma Design File:** [**View the design process on Figma**](https://www.figma.com/design/1544uLebSnR0c9y0TrPgJp/Switch?node-id=0-1&t=qLWPC7K9yj2o6Gf2-1)
*   **SVG Morph Demo:** [A sub-page demonstrating SVG morphing with Flubber.js](https://dark-motion-switch.vercel.app/switch-morph)

## ✨ Core Features & Animation Highlights

*   **Fluid Sun/Moon Transition:** The main circle animates smoothly between its "sun" and "moon" states using a spring animationS from Framer Motion.
*   **Dynamic Switch Background:** The switch background transitions between a bright daytime sky and a dark, starry night.
*   **Parallax Cloud & Star Effects:** Clouds drift out of view and stars fade in.
*   **Layout Animations:** Framer Motion's `layout` prop is used to automatically animate the position of the main toggle circle, simplifying the animation logic.
*   **State-Driven Variants:** The entire animation is managed declaratively through Framer Motion's `variants`, making the component's animation states clean and easy to read.

## 🛠️ Tech Stack & Key Dependencies

This project uses a modern, type-safe, and efficient stack to deliver a high-quality component.

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Library:** [React](https://reactjs.org/)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) with `clsx` and `tailwind-merge` for robust class name management.
*   **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes)
*   **SVG Morphing:** [Flubber](https://github.com/veltman/flubber) (for the `/switch-morph` demo)
*   **Linting & Formatting:** ESLint and Prettier with the official Tailwind CSS plugin.

## 🚀 Getting Started Locally

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
