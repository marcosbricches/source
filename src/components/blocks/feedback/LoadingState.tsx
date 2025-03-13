// components/blocks/feedback/LoadingState.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";

export interface LoadingStateProps {
  text?: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: "default" | "card" | "overlay" | "inline";
  size?: "sm" | "default" | "lg";
  showSpinner?: boolean;
  spinnerSize?: "sm" | "default" | "lg";
  spinnerVariant?: "default" | "dots" | "spinner" | "pulse";
  className?: string;
}

export function LoadingState({
  text = "Loading...",
  description,
  icon,
  variant = "default",
  size = "default",
  showSpinner = true,
  spinnerSize = "default",
  spinnerVariant = "default",
  className,
}: LoadingStateProps) {
  // Get spinner component
  const getSpinner = () => {
    const spinnerSizeClass = {
      sm: "h-4 w-4",
      default: "h-6 w-6",
      lg: "h-8 w-8",
    }[spinnerSize];
    
    if (!showSpinner) return null;
    
    switch (spinnerVariant) {
      case "dots":
        return (
          <div className="flex gap-1 items-center">
            <div className={cn(
              "animate-pulse rounded-full bg-current",
              spinnerSize === "sm" ? "h-1.5 w-1.5" : spinnerSize === "lg" ? "h-2.5 w-2.5" : "h-2 w-2"
            )} style={{ animationDelay: "0ms" }} />
            <div className={cn(
              "animate-pulse rounded-full bg-current",
              spinnerSize === "sm" ? "h-1.5 w-1.5" : spinnerSize === "lg" ? "h-2.5 w-2.5" : "h-2 w-2"
            )} style={{ animationDelay: "150ms" }} />
            <div className={cn(
              "animate-pulse rounded-full bg-current",
              spinnerSize === "sm" ? "h-1.5 w-1.5" : spinnerSize === "lg" ? "h-2.5 w-2.5" : "h-2 w-2"
            )} style={{ animationDelay: "300ms" }} />
          </div>
        );
      case "spinner":
        return (
          <div className={cn(
            "border-4 border-current border-t-transparent animate-spin rounded-full",
            spinnerSize === "sm" ? "h-4 w-4" : spinnerSize === "lg" ? "h-8 w-8" : "h-6 w-6"
          )} />
        );
      case "pulse":
        return (
          <div className={cn(
            "animate-pulse rounded-full bg-current",
            spinnerSize === "sm" ? "h-4 w-4" : spinnerSize === "lg" ? "h-8 w-8" : "h-6 w-6"
          )} />
        );
      default:
        return <Loader2Icon className={cn(spinnerSizeClass, "animate-spin")} />;
    }
  };
  
  // Get text size classes based on size prop
  const getTextClasses = () => {
    if (size === "sm") return "text-sm";
    if (size === "lg") return "text-lg font-medium";
    return "text-base";
  };
  
  const getDescriptionClasses = () => {
    if (size === "sm") return "text-xs";
    if (size === "lg") return "text-base";
    return "text-sm";
  };
  
  // Base content
  const content = (
    <div className={cn(
      "flex flex-col items-center justify-center text-center gap-3 p-4",
      variant === "default" && "py-8",
      variant === "inline" && "py-2 flex-row",
      className
    )}>
      {icon || getSpinner()}
      
      <div className="flex flex-col gap-1">
        {text && <div className={getTextClasses()}>{text}</div>}
        {description && <div className={cn(getDescriptionClasses(), "text-muted-foreground")}>{description}</div>}
      </div>
    </div>
  );
  
  // Overlay variant
  if (variant === "overlay") {
    return (
      <div className={cn(
        "absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50",
        className
      )}>
        <div className="flex flex-col items-center justify-center gap-3">
          {icon || getSpinner()}
          {text && <div className={getTextClasses()}>{text}</div>}
          {description && <div className={cn(getDescriptionClasses(), "text-muted-foreground")}>{description}</div>}
        </div>
      </div>
    );
  }
  
  // Card variant
  if (variant === "card") {
    return (
      <Card className={className}>
        <CardContent className="p-0">
          {content}
        </CardContent>
      </Card>
    );
  }
  
  // Default or inline variant
  return content;
}