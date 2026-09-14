import { WORKFLOW_STEPS } from "@/data/showcase-info";
import { GifTooltip } from "@/components/ui/gif-tooltip";

export function PatternWorkflow() {
  return (
    <ol className="m-0 list-none border-t border-[var(--fg)] p-0" aria-label="Publishing workflow">
      {WORKFLOW_STEPS.map((step) => (
        <li key={step.num} data-workflow-step={step.num}>
          <GifTooltip src={step.gif} alt={step.alt} width={680}>
            <div className="grid cursor-default grid-cols-[48px_1fr] gap-6 border-b border-[var(--border)] py-[25px]">
              <span className="num font-mono text-[12px] pt-[5px] text-[var(--muted)]">
                {step.num}
              </span>
              <div>
                <h3 className="mb-1 font-body text-[17px] font-semibold">
                  {step.title}
                </h3>
                <p className="m-0 text-[14px] text-[var(--muted)]">
                  {step.description}
                </p>
              </div>
            </div>
          </GifTooltip>
        </li>
      ))}
    </ol>
  );
}
