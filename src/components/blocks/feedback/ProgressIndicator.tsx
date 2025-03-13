// components/blocks/feedback/ProgressIndicator.tsx
import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { CheckIcon, XIcon } from "lucide-react";

export interface ProgressIndicatorProps {
  value: number;
  max?: number;
  showValue?: boolean;
  valueFormat?: "percentage" | "ratio" | "value";
  label?: string;
  description?: string;
  variant?: "default" | "success" | "warning" | "error" | "info";
  size?: "sm" | "default" | "lg";
  status?: "idle" | "loading" | "success" | "error";
  showStatusIcon?: boolean;
  className?: string;
}

export function ProgressIndicator({
  value,
  max = 100,
  showValue = true,
  valueFormat = "percentage",
  label,
  description,
  variant = "default",
  size = "default",
  status = "idle",
  showStatusIcon = false,
  className,
}: ProgressIndicatorProps) {
  const normalizedValue = Math.min(Math.max((value / max) * 100, 0), 100);
  
  // Format the value according to the specified format
  const formattedValue = () => {
    if (valueFormat === "percentage") {
      return `${Math.round(normalizedValue)}%`;
    } else if (valueFormat === "ratio") {
      return `${value}/${max}`;
    } 
    return value.toString();
  };
  
  // Get variant-specific classes
  const getProgressVariant = () => {
    return {
      default: "",
      success: "bg-green-600",
      warning: "bg-amber-600",
      error: "bg-red-600",
      info: "bg-blue-600",
    }[variant];
  };
  
  // Get size-specific classes
  const getProgressSize = () => {
    return {
      sm: "h-1.5",
      default: "h-2.5",
      lg: "h-3.5",
    }[size];
  };
  
  const getLabelSize = () => {
    return {
      sm: "text-xs",
      default: "text-sm",
      lg: "text-base font-medium",
    }[size];
  };
  
  const getDescriptionSize = () => {
    return {
      sm: "text-xs",
      default: "text-xs",
      lg: "text-sm",
    }[size];
  };
  
  // Status icon based on current status
  const statusIcon = () => {
    if (!showStatusIcon) return null;
    
    if (status === "success") {
      return (
        <div className="flex-shrink-0 h-5 w-5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center">
          <CheckIcon className="h-3 w-3" />
        </div>
      );
    } else if (status === "error") {
      return (
        <div className="flex-shrink-0 h-5 w-5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-500 rounded-full flex items-center justify-center">
          <XIcon className="h-3 w-3" />
        </div>
      );
    } else if (status === "loading") {
      return (
        <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center">
          <div className="h-4 w-4 border-2 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin" />
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <div className={cn("space-y-2", className)}>
      {/* Header with label, value, and status icon */}
      {(label || showValue || showStatusIcon) && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {statusIcon()}
            {label && <div className={getLabelSize()}>{label}</div>}
          </div>
          
          {showValue && (
            <div className={cn(
              "text-sm font-medium",
              status === "success" && "text-green-600 dark:text-green-500",
              status === "error" && "text-red-600 dark:text-red-500"
            )}>
              {formattedValue()}
            </div>
          )}
        </div>
      )}
      
      {/* Progress bar */}
      <Progress 
        value={normalizedValue} 
        className={getProgressSize()}
        indicatorClassName={cn(
          getProgressVariant(),
          status === "loading" && "animate-pulse"
        )}
      />
      
      {/* Description */}
      {description && (
        <div className={cn(
          getDescriptionSize(), 
          "text-muted-foreground"
        )}>
          {description}
        </div>
      )}
    </div>
  );
}