import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto", className)}>
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        "bg-white/[0.03] border border-white/[0.08] p-6",
        "hover:bg-white/[0.06] hover:border-indigo-500/30",
        "transition-all duration-300",
        className
      )}
    >
      {header && <div className="mb-4 rounded-xl overflow-hidden">{header}</div>}
      <div className="flex flex-col gap-2">
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-1">
            {icon}
          </div>
        )}
        <div className="font-semibold text-white text-base">{title}</div>
        <div className="text-sm text-slate-400 leading-relaxed">{description}</div>
      </div>
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-indigo-500/5 to-violet-500/5" />
    </div>
  );
}
