import * as React from "react"
import { motion, HTMLMotionProps } from "motion/react"
import { cn } from "@/src/lib/utils"

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default: "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/20",
      secondary: "bg-brand-red text-white hover:bg-brand-red/90 shadow-lg shadow-brand-red/20",
      outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
      ghost: "hover:bg-brand-gray text-brand-black",
      link: "text-brand-blue underline-offset-4 hover:underline",
    }
    
    const sizes = {
      default: "h-12 px-6 py-2 text-base",
      sm: "h-9 px-4 text-sm",
      lg: "h-14 px-8 text-lg",
      icon: "h-12 w-12",
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-sans font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
