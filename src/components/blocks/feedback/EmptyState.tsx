// components/blocks/feedback/EmptyState.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface EmptyStateAction {
  label: string;
  onClick: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export interface EmptyStateProps {
  title: string;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  actions?: EmptyStateAction[];
  variant?: "default" | "card" | "simple" | "compact";
  size?: "sm" | "default" | "lg";
  iconSize?: "sm" | "default" | "lg";
  className?: string;
}

export function EmptyState({
  title,
  description,
  icon,
  actions = [],
  variant = "default",
  size = "default",
  iconSize = "default",
  className,
}: EmptyStateProps) {
  // Get sizing classes
  const getTitleSize = () => {
    if (size === "sm") return "text-base font-medium";
    if (size === "lg") return "text-2xl font-semibold";
    return "text-lg font-semibold";
  };
  
  const getDescriptionSize = () => {
    if (size === "sm") return "text-sm";
    if (size === "lg") return "text-base";
    return "text-sm";
  };
  
  const getIconSize = () => {
    if (iconSize === "sm") return "h-12 w-12";
    if (iconSize === "lg") return "h-24 w-24";
    return "h-16 w-16";
  };
  
  const getContentPadding = () => {
    if (variant === "compact") return "py-6";
    if (size === "sm") return "py-8";
    if (size === "lg") return "py-16";
    return "py-12";
  };
  
  // Render the content
  const content = (
    <div className={cn(
      "flex flex-col items-center justify-center text-center",
      getContentPadding(),
      "px-4",
      className
    )}>
      {icon && (
        <div className={cn(
          getIconSize(),
          "text-muted-foreground mb-4"
        )}>
          {icon}
        </div>
      )}
      
      <h3 className={cn(
        getTitleSize(),
        "mb-2"
      )}>
        {title}
      </h3>
      
      {description && (
        <p className={cn(
          getDescriptionSize(),
          "text-muted-foreground mb-6 max-w-md"
        )}>
          {description}
        </p>
      )}
      
      {actions.length > 0 && (
        <div className={cn(
          "flex gap-3",
          actions.length > 1 ? "flex-col sm:flex-row" : ""
        )}>
          {actions.map((action, index) => (
            <Button 
              key={index} 
              variant={action.variant || (index === 0 ? "default" : "outline")} 
              onClick={action.onClick}
              size={size === "sm" ? "sm" : size === "lg" ? "lg" : "default"}
            >
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
  
  // Simple variant just returns the content
  if (variant === "simple") {
    return content;
  }
  
  // Compact variant
  if (variant === "compact") {
    return (
      <div className={cn(
        "border rounded-lg bg-muted/10",
        className
      )}>
        {content}
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
  
  // Default variant
  return (
    <div className={cn(
      "border rounded-lg bg-background",
      className
    )}>
      {content}
    </div>
  );
}