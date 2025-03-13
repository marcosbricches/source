// components/blocks/feedback/AlertBlock.tsx
"use client"

import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { 
  AlertCircleIcon, 
  AlertTriangleIcon, 
  CheckCircleIcon, 
  InfoIcon, 
  XIcon 
} from "lucide-react";

export interface AlertAction {
  label: string;
  onClick: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export interface AlertBlockProps {
  title?: string;
  description: React.ReactNode;
  icon?: React.ReactNode;
  actions?: AlertAction[];
  dismissible?: boolean;
  onDismiss?: () => void;
  variant?: "info" | "success" | "warning" | "error" | "neutral";
  size?: "sm" | "default" | "lg";
  layout?: "inline" | "card" | "banner";
  fullWidth?: boolean;
  className?: string;
}

export function AlertBlock({
  title,
  description,
  icon,
  actions = [],
  dismissible = false,
  onDismiss,
  variant = "info",
  size = "default",
  layout = "inline",
  fullWidth = false,
  className,
}: AlertBlockProps) {
  // Default icons based on variant
  const getDefaultIcon = () => {
    switch (variant) {
      case "info":
        return <InfoIcon />;
      case "success":
        return <CheckCircleIcon />;
      case "warning":
        return <AlertTriangleIcon />;
      case "error":
        return <AlertCircleIcon />;
      default:
        return <InfoIcon />;
    }
  };
  
  // Get component styling based on variant and size
  const getStyles = () => {
    // Base styles for content size
    const sizeStyles = {
      sm: "text-xs",
      default: "text-sm",
      lg: "text-base",
    }[size];
    
    // Icon size based on component size
    const iconSize = {
      sm: "h-4 w-4",
      default: "h-5 w-5",
      lg: "h-6 w-6",
    }[size];
    
    // Variant specific colors
    const variantStyles = {
      info: "text-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800",
      success: "text-green-800 dark:text-green-300 bg-green-50 dark:bg-green-950/50 border-green-200 dark:border-green-800",
      warning: "text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800",
      error: "text-red-800 dark:text-red-300 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800",
      neutral: "text-gray-800 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800",
    }[variant];
    
    // Layout specific styles
    const layoutStyles = {
      inline: "rounded-md border p-4",
      card: "", // Card component provides its own container
      banner: "rounded-none border-x-0 px-4 py-3 w-full",
    }[layout];
    
    return {
      container: cn(
        layout !== "card" && variantStyles,
        layout !== "card" && layoutStyles,
        layout !== "card" && sizeStyles,
        fullWidth && "w-full",
        className
      ),
      iconClass: cn(
        iconSize,
        "flex-shrink-0"
      ),
    };
  };
  
  const styles = getStyles();
  const effectiveIcon = icon || getDefaultIcon();
  
  // Render as Card layout
  if (layout === "card") {
    return (
      <Card className={cn(
        "overflow-hidden",
        variant === "info" && "border-blue-200 dark:border-blue-800",
        variant === "success" && "border-green-200 dark:border-green-800",
        variant === "warning" && "border-amber-200 dark:border-amber-800",
        variant === "error" && "border-red-200 dark:border-red-800",
        fullWidth && "w-full",
        className
      )}>
        <CardContent className={cn(
          "p-6 flex gap-4",
          variant === "info" && "bg-blue-50 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300",
          variant === "success" && "bg-green-50 dark:bg-green-950/50 text-green-800 dark:text-green-300",
          variant === "warning" && "bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300",
          variant === "error" && "bg-red-50 dark:bg-red-950/50 text-red-800 dark:text-red-300",
          variant === "neutral" && "bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300",
          size === "sm" && "text-xs",
          size === "default" && "text-sm",
          size === "lg" && "text-base",
        )}>
          <div className={styles.iconClass}>{effectiveIcon}</div>
          
          <div className="flex-1">
            {title && (
              <div className={cn(
                "font-medium mb-1",
                size === "sm" && "text-sm",
                size === "default" && "text-base",
                size === "lg" && "text-lg",
              )}>{title}</div>
            )}
            <div>{description}</div>
          </div>
          
          {dismissible && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6 -mt-1 -mr-1 opacity-70 hover:opacity-100"
              onClick={onDismiss}
            >
              <XIcon className="h-4 w-4" />
            </Button>
          )}
        </CardContent>
        
        {actions.length > 0 && (
          <CardFooter className={cn(
            "flex justify-end gap-3 px-6 py-4 border-t",
            variant === "info" && "border-blue-200 dark:border-blue-800",
            variant === "success" && "border-green-200 dark:border-green-800",
            variant === "warning" && "border-amber-200 dark:border-amber-800",
            variant === "error" && "border-red-200 dark:border-red-800",
            variant === "neutral" && "border-gray-200 dark:border-gray-800",
          )}>
            {actions.map((action, index) => (
              <Button 
                key={index} 
                variant={action.variant || "outline"} 
                onClick={action.onClick}
                size={size === "sm" ? "sm" : undefined}
              >
                {action.label}
              </Button>
            ))}
          </CardFooter>
        )}
      </Card>
    );
  }
  
  // Render as inline or banner
  return (
    <Alert className={styles.container}>
      <div className="flex">
        <div className={cn(styles.iconClass, "mr-4")}>{effectiveIcon}</div>
        
        <div className="flex-1">
          {title && <AlertTitle className="mb-1">{title}</AlertTitle>}
          <AlertDescription>{description}</AlertDescription>
          
          {actions.length > 0 && (
            <div className={cn(
              "flex gap-3 mt-3",
              actions.length > 1 ? "flex-col sm:flex-row" : ""
            )}>
              {actions.map((action, index) => (
                <Button 
                  key={index} 
                  variant={action.variant || "outline"} 
                  onClick={action.onClick}
                  size={size === "sm" ? "sm" : undefined}
                  className={size === "lg" ? "py-2.5" : ""}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
        
        {dismissible && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 ml-2 -mt-1 -mr-1 opacity-70 hover:opacity-100"
            onClick={onDismiss}
          >
            <XIcon className="h-4 w-4" />
          </Button>
        )}
      </div>
    </Alert>
  );
}