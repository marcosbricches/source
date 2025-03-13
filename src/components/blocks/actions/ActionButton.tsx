// components/blocks/actions/ActionButton.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ExternalLinkIcon, LucideIcon } from "lucide-react";

export interface DropdownAction {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  description?: string;
  variant?: "default" | "destructive";
}

export interface ActionButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  dropdown?: DropdownAction[];
  disabled?: boolean;
  loading?: boolean;
  success?: boolean;
  tooltip?: string;
  badge?: {
    content: React.ReactNode;
    variant?: "default" | "secondary" | "outline" | "destructive";
  };
  external?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "premium" | "branded";
  size?: "sm" | "default" | "lg" | "xl" | "icon";
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
}

export function ActionButton({
  label,
  onClick,
  href,
  icon,
  endIcon,
  dropdown,
  disabled = false,
  loading = false,
  success = false,
  tooltip,
  badge,
  external = false,
  variant = "default",
  size = "default",
  iconPosition = "left",
  fullWidth = false,
  className,
}: ActionButtonProps) {
  const [showSuccess, setShowSuccess] = React.useState(success);
  
  // Show success state temporarily if changed externally
  React.useEffect(() => {
    if (success) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [success]);
  
  // Handle click with success state
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
      
      // If success prop wasn't provided but we need success animation
      if (!success && !loading && !disabled) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
      }
    }
  };
  
  // Determine icon size based on button size
  const getIconSize = () => {
    if (size === "sm") return "h-3.5 w-3.5";
    if (size === "lg") return "h-5 w-5";
    if (size === "xl") return "h-5 w-5";
    if (size === "icon") return "h-5 w-5";
    return "h-4 w-4";
  };
  
  // Special variant styles
  const getVariantClasses = () => {
    if (variant === "premium") {
      return "bg-gradient-to-r from-pink-500 to-violet-600 text-white hover:from-pink-600 hover:to-violet-700 shadow-md hover:shadow";
    }
    if (variant === "branded") {
      return "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow hover:shadow-md";
    }
    return "";
  };
  
  // Button content for all variants
  const buttonContent = (
    <>
      {loading && (
        <svg className={cn("animate-spin -ml-1 mr-2", getIconSize())} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {showSuccess && !loading && (
        <svg className={cn("text-green-500 -ml-1 mr-2", getIconSize())} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      )}
      
      {icon && !loading && !showSuccess && iconPosition === "left" && (
        <span className={cn(
          getIconSize(),
          size !== "icon" && label && "mr-2",
        )}>
          {icon}
        </span>
      )}
      
      {(size !== "icon" || !icon) && <span>{label}</span>}
      
      {badge && (
        <Badge 
          variant={badge.variant} 
          className={cn("ml-2", size === "sm" && "text-xs py-0 px-2")}
        >
          {badge.content}
        </Badge>
      )}
      
      {external && size !== "icon" && (
        <ExternalLinkIcon className={cn("ml-2", getIconSize())} />
      )}
      
      {endIcon && iconPosition === "right" && (
        <span className={cn(
          getIconSize(),
          size !== "icon" && label && "ml-2",
        )}>
          {endIcon}
        </span>
      )}
    </>
  );
  
  // If has dropdown, render dropdown menu
  if (dropdown && dropdown.length > 0) {
    return (
      <div className={cn("inline-flex", fullWidth && "w-full")}>
        <div className={cn("flex", fullWidth && "w-full")}>
          {/* Main button */}
          <Button
            variant={variant as any}
            size={size}
            disabled={disabled || loading}
            className={cn(
              getVariantClasses(),
              dropdown && "rounded-r-none",
              fullWidth && "w-full",
              className
            )}
            onClick={handleClick}
            asChild={!!href}
          >
            {href ? (
              <a 
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                {buttonContent}
              </a>
            ) : (
              buttonContent
            )}
          </Button>
          
          {/* Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={variant as any}
                size={size}
                disabled={disabled || loading}
                className={cn(
                  getVariantClasses(),
                  "rounded-l-none border-l",
                  variant !== "default" && variant !== "destructive" && "border-l-border",
                  variant === "default" && "border-l-primary-foreground/10",
                  variant === "destructive" && "border-l-destructive-foreground/10",
                  size === "icon" ? "px-2" : "px-2"
                )}
              >
                <ChevronDownIcon className={getIconSize()} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {dropdown.map((item, index) => {
                const isDestructive = item.variant === "destructive";
                
                return (
                  <React.Fragment key={index}>
                    {isDestructive && index > 0 && <DropdownMenuSeparator />}
                    <DropdownMenuItem
                      onClick={item.onClick}
                      disabled={item.disabled}
                      className={cn(
                        isDestructive && "text-destructive focus:text-destructive",
                        item.description && "flex flex-col items-start py-2"
                      )}
                      asChild={!!item.href}
                    >
                      {item.href ? (
                        <a 
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="flex items-center w-full"
                        >
                          {item.icon && <span className="mr-2 h-4 w-4">{item.icon}</span>}
                          <span>{item.label}</span>
                          {item.external && (
                            <ExternalLinkIcon className="ml-auto h-4 w-4" />
                          )}
                          {item.description && (
                            <span className="text-xs text-muted-foreground mt-1">
                              {item.description}
                            </span>
                          )}
                        </a>
                      ) : (
                        <>
                          <div className="flex items-center w-full">
                            {item.icon && <span className="mr-2 h-4 w-4">{item.icon}</span>}
                            <span>{item.label}</span>
                          </div>
                          {item.description && (
                            <span className="text-xs text-muted-foreground mt-1">
                              {item.description}
                            </span>
                          )}
                        </>
                      )}
                    </DropdownMenuItem>
                    {isDestructive && index < dropdown.length - 1 && <DropdownMenuSeparator />}
                  </React.Fragment>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    );
  }
  
  // Basic button without dropdown
  const button = (
    <Button
      variant={variant as any}
      size={size}
      disabled={disabled || loading}
      onClick={handleClick}
      className={cn(
        getVariantClasses(),
        fullWidth && "w-full",
        className
      )}
      asChild={!!href}
    >
      {href ? (
        <a 
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {buttonContent}
        </a>
      ) : (
        buttonContent
      )}
    </Button>
  );
  
  // Add tooltip if specified
  if (tooltip) {
    return (
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    );
  }
  
  return button;
}