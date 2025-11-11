import * as React from "react"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type = "text", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const isPassword = type === "password"
    const effectiveType = isPassword ? (showPassword ? "text" : "password") : type

    const inputClass = cn(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      isPassword ? "pr-10" : "",
      className
    )

    return (
      <div className="relative w-full">
        <input
          type={effectiveType}
          className={inputClass}
          ref={ref}
          {...props}
        />

        {isPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        ) : null}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
