interface BrandProps {
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
}

export default function Brand({
  size = "md",
  showSubtitle = true,
}: BrandProps) {
  const logoSizes = {
    sm: "h-10 w-10 text-lg",
    md: "h-12 w-12 text-xl",
    lg: "h-16 w-16 text-2xl",
  };

  return (
    <div className="flex items-center gap-4">

      <div>
        <h1 className="font-bold text-white">
          Josias Sekhebesa
        </h1>

        {showSubtitle && (
          <p className="text-sm text-slate-400">
            Enterprise AI Engineer
          </p>
        )}
      </div>
    </div>
  );
}