"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeSection({
  children,
  language = "tsx",
}: {
  children: React.ReactNode;
  language?: string;
}) {
  const code =
    typeof children === "string" ? children.trim() : String(children).trim();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback or error
    }
  };

  return (
    <div className="w-full max-w-[90vw] bg-white border border-zinc-200 rounded-xl font-mono text-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="px-2 py-1 text-xs rounded-md border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 active:bg-zinc-200 transition-colors font-medium text-zinc-700"
          style={{ minWidth: 60 }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="overflow-x-auto px-4 pb-4">
        <SyntaxHighlighter
          language={language}
          style={prism}
          customStyle={{
            background: "transparent",
            margin: 0,
            padding: 0,
            boxShadow: "none",
            border: "none",
            fontSize: "0.95em",
            lineHeight: 1.6,
            whiteSpace: "pre", // Prevent wrapping
            minWidth: 0,
          }}
          codeTagProps={{
            style: {
              fontFamily: "inherit",
              background: "none",
              whiteSpace: "pre",
              minWidth: 0,
            },
          }}
          wrapLongLines={false}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
