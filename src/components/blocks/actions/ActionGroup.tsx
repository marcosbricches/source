// components/blocks/actions/ActionGroup.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export interface ActionGroupItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  tooltip?: string;
  disabled?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  active?: boolean;
}

export interface ActionGroupProps {
  actions: ActionGroupItem[];
  variant?: "default" | "outline" | "pills" | "tabs" | "buttons";
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "default" | "lg";
  showLabels?: boolean;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
}

export function ActionGroup({
  actions,
  variant = "default",
  orientation = "horizontal",
  size = "default",
  showLabels = true,
  fullWidth = false,
  className,
  disabled = false,
}: ActionGroupProps) {
  // Determine button variant based on group variant
  const getButtonVariant = (action: ActionGroupItem) => {
    // Use action-specific variant if provided
    if (action.variant) {
      return action.variant;
    }
    
    // Default variants based on group type
    switch (variant) {
      case "outline":
      case "pills":
      case "tabs":
        return "ghost";
      case "buttons":
        return "outline";
      default:
        return "ghost";
    }
  };
  
  // Get active-state classes based on group variant
  const getActiveClasses = (active: boolean) => {
    if (!active) return "";
    
    switch (variant) {
      case "outline":
        return "bg-muted";
      case "pills":
        return "bg-primary text-primary-foreground";
      case "tabs":
        return "border-b-2 border-primary rounded-none";
      case "buttons":
        return "bg-muted";
      default:
        return "bg-muted";
    }
  };
  
  // Get button size classes
  const getButtonSize = () => {
    if (size === "sm") return "h-8 text-xs";
    if (size === "lg") return "h-11 text-base";
    return "h-9 text-sm";
  };
  
  // Get icon size classes
  const getIconSize = () => {
    if (size === "sm") return "h-3.5 w-3.5";
    if (size === "lg") return "h-5 w-5";
    return "h-4 w-4";
  };
  
  // Render a single button
  const renderButton = (action: ActionGroupItem, index: number) => {
    const isActive = !!action.active;
    const buttonContent = (
      <>
        {action.icon && (
          <span className={cn(
            getIconSize(),
            showLabels && action.label && "mr-2"
          )}>
            {action.icon}
          </span>
        )}
        {(showLabels || !action.icon) && action.label}
      </>
    );
    
    // Base button
    const baseButton = (
      <Button
        variant={getButtonVariant(action)}
        className={cn(
          getButtonSize(),
          !showLabels && action.icon && "w-9 px-0",
          size === "sm" && !showLabels && action.icon && "w-8 px-0",
          size === "lg" && !showLabels && action.icon && "w-11 px-0",
          variant === "pills" && "rounded-full",
          variant === "tabs" && "rounded-none border-b-2 border-transparent",
          getActiveClasses(isActive),
          orientation === "vertical" && "justify-start",
          orientation === "vertical" && fullWidth && "w-full",
          fullWidth && orientation === "horizontal" && "flex-1"
        )}
        onClick={action.onClick}
        disabled={disabled || action.disabled}
        asChild={!!action.href}
      >
        {action.href ? (
          <a href={action.href}>{buttonContent}</a>
        ) : (
          buttonContent
        )}
      </Button>
    );
    
    // Wrap with tooltip if needed
    if (action.tooltip && (!showLabels || (action.icon && !action.label))) {
      return (
        <Tooltip key={index} delayDuration={300}>
          <TooltipTrigger asChild>{baseButton}</TooltipTrigger>
          <TooltipContent>{action.tooltip}</TooltipContent>
        </Tooltip>
      );
    }
    
    return (
      <React.Fragment key={index}>
        {baseButton}
      </React.Fragment>
    );
  };
  
  // Outline variant
  if (variant === "outline") {
    return (
      <div
        className={cn(
          "border rounded-md p-1 flex",
          orientation === "vertical" ? "flex-col" : "flex-row",
          className
        )}
      >
        {actions.map((action, index) => (
          <React.Fragment key={index}>
            {renderButton(action, index)}
            
            {/* Add separators between items, but not after last item */}
            {index < actions.length - 1 && (
              <Separator
                className={cn(
                  orientation === "vertical" ? "my-1" : "mx-1",
                  orientation === "vertical" ? "h-px w-full" : "h-full w-px"
                )}
                orientation={orientation === "vertical" ? "horizontal" : "vertical"}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
  
  // Other variants (pills, tabs, buttons, default)
  return (
    <div
      className={cn(
        "flex",
        orientation === "vertical" ? "flex-col" : "flex-row",
        orientation === "vertical" ? "space-y-1" : "space-x-1",
        variant === "tabs" && orientation === "horizontal" && "border-b",
        variant === "tabs" && orientation === "vertical" && "border-r",
        variant === "buttons" && "gap-2",
        className
      )}
    >
      {actions.map((action, index) => renderButton(action, index))}
    </div>
  );
}