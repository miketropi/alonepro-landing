interface AnimatedButtonTextProps {
  text: string;
}

export function AnimatedButtonText({ text }: AnimatedButtonTextProps) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span
        className="inline-flex whitespace-pre"
        data-animated-button-text
        aria-hidden="true"
      >
        {Array.from(text).map((character, index) => (
          <span
            key={`${character}-${index}`}
            className="inline-block backface-hidden will-change-[transform,opacity,filter]"
            data-animated-button-character
            style={{ "--button-character-index": index } as React.CSSProperties}
          >
            {character}
          </span>
        ))}
      </span>
    </>
  );
}
