import { cn } from "@/lib/utils";

type ScreenTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** small overline shown above the title (result screen) */
  overline?: string;
};

export function ScreenTitle({ title, subtitle, align = "left", overline }: ScreenTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-[4px] pt-[16px]",
        align === "center" && "items-center text-center",
      )}
    >
      {overline && <p className="t-body1 text-label-muted">{overline}</p>}
      <h1 className="t-heading1 whitespace-pre-line text-label-inverse">{title}</h1>
      {subtitle && (
        <p className="t-body1 whitespace-pre-line text-label-subtle">{subtitle}</p>
      )}
    </div>
  );
}
