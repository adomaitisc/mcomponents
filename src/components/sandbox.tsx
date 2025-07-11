import { Phone } from "./iphone/phone";

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
      <div className="flex-1 max-w-3xl mx-auto space-y-3 lg:space-y-6 py-20 lg:py-32 px-4 lg:px-12">
        {children}
      </div>
      {component ? (
        <div className="h-screen flex-1 p-1">
          <div className="py-8 h-full w-full grid place-items-center bg-neutral-400 rounded-md">
            <Phone theme={theme}>{component}</Phone>
          </div>
        </div>
      ) : null}
    </>
  );
}
