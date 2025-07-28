import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";

export default function ReferencesPage() {
  return (
    <Sandbox>
      <Title>References</Title>
      <Paragraph>
        This project was built using a modern stack of frontend technologies,
        testing utilities, and deployment services. Below are the key references
        and resources that made this project possible:
      </Paragraph>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Core Technologies</h2>
          <ul className="space-y-2 text-neutral-700">
            <li>
              <strong>React</strong> – Official documentation for the React
              JavaScript library.{" "}
              <a
                href="https://reactjs.org/"
                className="text-blue-600 hover:underline"
              >
                https://reactjs.org/
              </a>
            </li>
            <li>
              <strong>Vite</strong> – Modern frontend build tool for
              lightning-fast development.{" "}
              <a
                href="https://vitejs.dev/"
                className="text-blue-600 hover:underline"
              >
                https://vitejs.dev/
              </a>
            </li>
            <li>
              <strong>Next.js</strong> – React-based framework used for building
              our documentation site.{" "}
              <a
                href="https://nextjs.org/"
                className="text-blue-600 hover:underline"
              >
                https://nextjs.org/
              </a>
            </li>
            <li>
              <strong>Tailwind CSS</strong> – Utility-first CSS framework for
              styling components.{" "}
              <a
                href="https://tailwindcss.com/"
                className="text-blue-600 hover:underline"
              >
                https://tailwindcss.com/
              </a>
            </li>
            <li>
              <strong>TypeScript</strong> – Typed superset of JavaScript
              providing type safety.{" "}
              <a
                href="https://www.typescriptlang.org/"
                className="text-blue-600 hover:underline"
              >
                https://www.typescriptlang.org/
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Animation & Interaction Libraries
          </h2>
          <ul className="space-y-2 text-neutral-700">
            <li>
              <strong>React Spring</strong> – A spring-physics-based animation
              library for React.{" "}
              <a
                href="https://www.react-spring.dev/"
                className="text-blue-600 hover:underline"
              >
                https://www.react-spring.dev/
              </a>
            </li>
            <li>
              <strong>Framer Motion</strong> – Production-ready motion library
              for React.{" "}
              <a
                href="https://www.framer.com/motion/"
                className="text-blue-600 hover:underline"
              >
                https://www.framer.com/motion/
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Testing & Quality Assurance
          </h2>
          <ul className="space-y-2 text-neutral-700">
            <li>
              <strong>Jest</strong> – JavaScript testing framework used for unit
              tests.{" "}
              <a
                href="https://jestjs.io/"
                className="text-blue-600 hover:underline"
              >
                https://jestjs.io/
              </a>
            </li>
            <li>
              <strong>React Testing Library</strong> – Utilities for testing
              React components in a user-centric way.{" "}
              <a
                href="https://testing-library.com/docs/react-testing-library/intro/"
                className="text-blue-600 hover:underline"
              >
                https://testing-library.com/docs/react-testing-library/intro/
              </a>
            </li>
            <li>
              <strong>Axe-core</strong> – Accessibility testing engine used in
              CI pipelines.{" "}
              <a
                href="https://www.deque.com/axe/"
                className="text-blue-600 hover:underline"
              >
                https://www.deque.com/axe/
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Development Tools & Infrastructure
          </h2>
          <ul className="space-y-2 text-neutral-700">
            <li>
              <strong>GitHub Actions</strong> – CI/CD platform used for
              automated testing, linting, and deployment.{" "}
              <a
                href="https://github.com/features/actions"
                className="text-blue-600 hover:underline"
              >
                https://github.com/features/actions
              </a>
            </li>
            <li>
              <strong>Vercel</strong> – Hosting platform for the
              documentation/demo site with global CDN.{" "}
              <a
                href="https://vercel.com/"
                className="text-blue-600 hover:underline"
              >
                https://vercel.com/
              </a>
            </li>
            <li>
              <strong>Figma</strong> – Used for UI/UX prototyping and design
              token extraction.{" "}
              <a
                href="https://www.figma.com/"
                className="text-blue-600 hover:underline"
              >
                https://www.figma.com/
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            UI Component Libraries
          </h2>
          <ul className="space-y-2 text-neutral-700">
            <li>
              <strong>Radix UI</strong> – Primitive components used for
              accessibility and composability.{" "}
              <a
                href="https://www.radix-ui.com/"
                className="text-blue-600 hover:underline"
              >
                https://www.radix-ui.com/
              </a>
            </li>
            <li>
              <strong>Lucide React</strong> – Icon library used for clean,
              consistent UI icons.{" "}
              <a
                href="https://lucide.dev/"
                className="text-blue-600 hover:underline"
              >
                https://lucide.dev/
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Standards & Guidelines
          </h2>
          <ul className="space-y-2 text-neutral-700">
            <li>
              <strong>WCAG 2.1 Guidelines</strong> – Web Content Accessibility
              Guidelines followed during development.{" "}
              <a
                href="https://www.w3.org/WAI/WCAG21/quickref/"
                className="text-blue-600 hover:underline"
              >
                https://www.w3.org/WAI/WCAG21/quickref/
              </a>
            </li>
            <li>
              <strong>MDN Web Docs</strong> – Referenced for general HTML, CSS,
              and JavaScript standards.{" "}
              <a
                href="https://developer.mozilla.org/"
                className="text-blue-600 hover:underline"
              >
                https://developer.mozilla.org/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Sandbox>
  );
}
