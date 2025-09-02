import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const skillTagVariants = cva(
  "inline-block px-3 py-1 rounded-full text-xs font-medium leading-tight",
  {
    variants: {
      variant: {
        green: "bg-[#D4EDDA] text-[#155724]",
        purple: "bg-[#E2DFFF] text-[#5A4BDE]",
      },
    },
    defaultVariants: {
      variant: "purple",
    },
  }
);

export interface SkillTagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof skillTagVariants> {}

export function SkillTag({ className, variant, ...props }: SkillTagProps) {
  return (
    <span className={cn(skillTagVariants({ variant }), className)} {...props} />
  );
}
