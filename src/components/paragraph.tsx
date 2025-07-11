type ParagraphProps = {
  children: React.ReactNode;
};

export function Paragraph({ children }: ParagraphProps) {
  return <p className="text-neutral-700 text-lg font-medium">{children}</p>;
}
