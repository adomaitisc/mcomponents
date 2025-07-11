import { Phone } from "./ui/phone";

export function Sandbox({
  children,
  theme = "light",
  component,
}: {
  children?: React.ReactNode;
  theme?: "light" | "dark";
  component?: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-1 max-w-3xl mx-auto space-y-6 py-32 pl-12 pr-20">
        {children}
      </div>
      {component ? (
        <div className="h-screen pr-8 pl-20 min-w-xl grid place-items-center bg-neutral-700">
          <Phone theme={theme}>{component}</Phone>
        </div>
      ) : null}
    </>
  );
}
