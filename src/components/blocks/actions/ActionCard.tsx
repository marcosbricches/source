// components/blocks/actions/ActionCard.tsx
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";

export interface ActionCardAction {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  external?: boolean;
}

export interface ActionCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  primaryAction?: ActionCardAction;
  secondaryAction?: ActionCardAction;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "outline" | "destructive";
  };
  status?: "default" | "success" | "warning" | "error" | "info";
  onClick?: () => void;
  variant?: "default" | "highlight" | "compact" | "bordered";
  size?: "sm" | "default" | "lg";
  className?: string;
}

export function ActionCard({
  title,
  description,
  icon,
  primaryAction,
  secondaryAction,
  badge,
  status = "default",
  onClick,
  variant = "default",
  size = "default",
  className,
}: ActionCardProps) {
  // Determine size-related classes
  const getTitleSize = () => {
    if (size === "sm") return "text-base";
    if (size === "lg") return "text-xl";
    return "text-lg";
  };
  
  const getDescriptionSize = () => {
    if (size === "sm") return "text-xs";
    if (size === "lg") return "text-base";
    return "text-sm";
  };
  
  const getIconSize = () => {
    if (size === "sm") return "h-8 w-8";
    if (size === "lg") return "h-14 w-14";
    return "h-10 w-10";
  };
  
  const getIconContainer = () => {
    if (size === "sm") return "h-10 w-10";
    if (size === "lg") return "h-16 w-16";
    return "h-12 w-12";
  };
  
  // Status-specific styling
  const getStatusClasses = () => {
    switch (status) {
      case "success":
        return {
          iconClass: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
          borderClass: "border-green-200 dark:border-green-800",
        };
      case "warning":
        return {
          iconClass: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
          borderClass: "border-amber-200 dark:border-amber-800",
        };
      case "error":
        return {
          iconClass: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
          borderClass: "border-red-200 dark:border-red-800",
        };
      case "info":
        return {
          iconClass: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
          borderClass: "border-blue-200 dark:border-blue-800",
        };
      default:
        return {
          iconClass: "bg-muted/70 text-foreground",
          borderClass: "",
        };
    }
  };
  
  const { iconClass, borderClass } = getStatusClasses();
  
  // Variant-specific wrapper and styling
  const cardClasses = cn(
    onClick && "cursor-pointer hover:border-muted-foreground/50 transition-colors",
    variant === "highlight" && "border-l-4 shadow-sm",
    variant === "highlight" && borderClass,
    variant === "bordered" && "border-2 shadow-sm",
    variant === "bordered" && borderClass,
    className
  );
  
  // Compact variant
  if (variant === "compact") {
    return (
      <div 
        className={cn(
          "flex items-center border rounded-lg px-4 py-3 gap-3",
          onClick && "cursor-pointer hover:border-muted-foreground/20 transition-colors",
          className
        )}
        onClick={onClick}
      >
        {icon && (
          <div className={cn(
            "flex-shrink-0 rounded-full flex items-center justify-center",
            iconClass,
            size === "sm" ? "h-8 w-8" : "h-10 w-10"
          )}>
            <div className={size === "sm" ? "h-4 w-4" : "h-5 w-5"}>
              {icon}
            </div>
          </div>
        )}
        
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className={cn(
              "font-medium",
              size === "sm" ? "text-sm" : "text-base"
            )}>
              {title}
            </h3>
            
            {badge && (
              <Badge 
                variant={badge.variant} 
                className={size === "sm" ? "text-xs" : undefined}
              >
                {badge.text}
              </Badge>
            )}
          </div>
          
          {description && (
            <p className={cn(
              "text-muted-foreground",
              size === "sm" ? "text-xs" : "text-sm"
            )}>
              {description}
            </p>
          )}
        </div>
        
        {(primaryAction || onClick) && (
          <div className="flex-shrink-0">
            {primaryAction ? (
              <Button 
                variant={primaryAction.variant || "ghost"}
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  if (primaryAction.onClick) {
                    primaryAction.onClick();
                  }
                }}
                asChild={!!primaryAction.href}
              >
                {primaryAction.href ? (
                  <a 
                    href={primaryAction.href}
                    target={primaryAction.external ? "_blank" : undefined}
                    rel={primaryAction.external ? "noopener noreferrer" : undefined}
                  >
                    {primaryAction.label}
                    {primaryAction.icon && (
                      <span className="ml-1">
                        {primaryAction.icon}
                      </span>
                    )}
                    {primaryAction.external && (
                      <ExternalLinkIcon className="ml-1 h-3.5 w-3.5" />
                    )}
                  </a>
                ) : (
                  <>
                    {primaryAction.label}
                    {primaryAction.icon && (
                      <span className="ml-1">
                        {primaryAction.icon}
                      </span>
                    )}
                  </>
                )}
              </Button>
            ) : onClick ? (
              <ChevronRightIcon className="h-5 w-5 text-muted-foreground" />
            ) : null}
          </div>
        )}
      </div>
    );
  }
  
  // Default, highlight, or bordered variants
  return (
    <Card className={cardClasses} onClick={onClick}>
      <CardHeader className={size === "sm" ? "p-4" : size === "lg" ? "p-6" : "p-5"}>
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            {icon && (
              <div className={cn(
                "rounded-lg flex items-center justify-center flex-shrink-0",
                getIconContainer(),
                iconClass
              )}>
                <div className={getIconSize()}>
                  {icon}
                </div>
              </div>
            )}
            
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className={getTitleSize()}>{title}</CardTitle>
                {badge && (
                  <Badge 
                    variant={badge.variant} 
                    className={size === "sm" ? "text-xs" : undefined}
                  >
                    {badge.text}
                  </Badge>
                )}
              </div>
              
              {description && (
                <CardDescription className={cn(
                  getDescriptionSize(),
                  "mt-1"
                )}>
                  {description}
                </CardDescription>
              )}
            </div>
          </div>
          
          {onClick && !primaryAction && !secondaryAction && (
            <ChevronRightIcon className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </CardHeader>
      
      {(primaryAction || secondaryAction) && (
        <CardFooter className={cn(
          "flex gap-2 justify-end border-t",
          size === "sm" ? "p-4" : size === "lg" ? "p-6" : "p-5",
          size === "sm" ? "pt-3" : size === "lg" ? "pt-5" : "pt-4"
        )}>
          {secondaryAction && (
            <Button 
              variant={secondaryAction.variant || "outline"} 
              onClick={secondaryAction.onClick}
              asChild={!!secondaryAction.href}
              size={size === "sm" ? "sm" : undefined}
            >
              {secondaryAction.href ? (
                <a 
                  href={secondaryAction.href}
                  target={secondaryAction.external ? "_blank" : undefined}
                  rel={secondaryAction.external ? "noopener noreferrer" : undefined}
                >
                  {secondaryAction.label}
                  {secondaryAction.icon && (
                    <span className="ml-2">
                      {secondaryAction.icon}
                    </span>
                  )}
                  {secondaryAction.external && (
                    <ExternalLinkIcon className="ml-1 h-3.5 w-3.5" />
                  )}
                </a>
              ) : (
                <>
                  {secondaryAction.label}
                  {secondaryAction.icon && (
                    <span className="ml-2">
                      {secondaryAction.icon}
                    </span>
                  )}
                </>
              )}
            </Button>
          )}
          
          {primaryAction && (
            <Button 
              variant={primaryAction.variant || "default"} 
              onClick={primaryAction.onClick}
              asChild={!!primaryAction.href}
              size={size === "sm" ? "sm" : undefined}
            >
              {primaryAction.href ? (
                <a 
                  href={primaryAction.href}
                  target={primaryAction.external ? "_blank" : undefined}
                  rel={primaryAction.external ? "noopener noreferrer" : undefined}
                >
                  {primaryAction.label}
                  {primaryAction.icon && (
                    <span className="ml-2">
                      {primaryAction.icon}
                    </span>
                  )}
                  {primaryAction.external && (
                    <ExternalLinkIcon className="ml-1 h-3.5 w-3.5" />
                  )}
                </a>
              ) : (
                <>
                  {primaryAction.label}
                  {primaryAction.icon && (
                    <span className="ml-2">
                      {primaryAction.icon}
                    </span>
                  )}
                </>
              )}
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}