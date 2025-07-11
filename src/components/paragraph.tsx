type ParagraphProps = {
  children: React.ReactNode;
};

export function Paragraph({ children }: ParagraphProps) {
  return (
    <p className="text-neutral-700 text-lg lg:text-xl font-medium">
      {children}
    </p>
  );
}
