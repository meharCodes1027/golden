import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-conservation-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-eco-gradient text-white hover:shadow-lg hover:shadow-conservation-500/25 hover:scale-105 transition-all duration-300",
        destructive:
          "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border border-conservation-500 text-conservation-500 hover:bg-conservation-500 hover:text-white glass-dark",
        secondary:
          "bg-dark-surface text-white hover:bg-dark-card glass",
        ghost:
          "hover:bg-conservation-500/10 hover:text-conservation-500",
        link:
          "text-conservation-500 underline-offset-4 hover:underline",
        neon:
          "bg-gradient-to-r from-neon-green to-neon-blue text-dark-bg font-bold hover:shadow-lg hover:shadow-neon-green/50 hover:scale-105 transition-all duration-300",
        glass:
          "glass text-white hover:glass-dark hover:border-conservation-500/50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
