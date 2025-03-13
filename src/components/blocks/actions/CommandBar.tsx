// components/blocks/actions/CommandBar.tsx
"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, SearchIcon } from "lucide-react";

export interface CommandAction {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  shortcut?: string;
  dropdown?: CommandAction[];
  tooltip?: string;
  disabled?: boolean;
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive";
  active?: boolean;
}

export interface CommandBarProps {
  actions: CommandAction[];
  searchable?: boolean;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  align?: "start" | "center" | "end";
  size?: "sm" | "default" | "lg";
  variant?: "default" | "inline" | "cards" | "pills";
  showLabels?: boolean;
  showDividers?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export function CommandBar({
  actions,
  searchable = false,
  searchPlaceholder = "Search...",
  onSearch,
  align = "start",
  size = "default",
  variant = "default",
  showLabels = true,
  showDividers = true,
  fullWidth = false,
  className,
}: CommandBarProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };
  
  // Size classes
  const getButtonSize = () => {
    if (size === "sm") return "h-8";
    if (size === "lg") return "h-11 px-6";
    return "h-9";
  };
  
  const getIconSize = () => {
    if (size === "sm") return "h-4 w-4";
    if (size === "lg") return "h-5 w-5";
    return "h-4 w-4";
  };
  
  // Render action button
  const renderAction = (action: CommandAction, index: number) => {
    // Button with dropdown
    if (action.dropdown && action.dropdown.length > 0) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={action.variant || "ghost"}
              disabled={action.disabled}
              className={cn(
                getButtonSize(),
                "flex items-center gap-1",
                action.active && "bg-muted"
              )}
            >
              {action.icon && (
                <span className={getIconSize()}>{action.icon}</span>
              )}
              {(showLabels || !action.icon) && (
                <span>{action.label}</span>
              )}
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {action.dropdown.map((item, dropdownIndex) => (
              <DropdownMenuItem
                key={`dropdown-${index}-${dropdownIndex}`}
                onClick={item.onClick}
                disabled={item.disabled}
              >
                <div className="flex items-center gap-2">
                  {item.icon && (
                    <span className="h-4 w-4">{item.icon}</span>
                  )}
                  <span>{item.label}</span>
                  {item.shortcut && (
                    <span className="ml-auto text-xs text-muted-foreground">
                      {item.shortcut}
                    </span>
                  )}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    
    // Regular button with optional tooltip
    const button = (
      <Button
        key={index}
        variant={action.variant || (variant === "cards" ? "outline" : "ghost")}
        onClick={action.onClick}
        disabled={action.disabled}
        className={cn(
          getButtonSize(),
          variant === "pills" && "rounded-full",
          variant === "cards" && "bg-card border shadow-sm",
          !showLabels && action.icon && !action.dropdown && "px-2",
          action.active && "bg-muted",
        )}
        asChild={!!action.href}
      >
        {action.href ? (
          <a href={action.href}>
            {action.icon && (
              <span className={cn(getIconSize(), showLabels && "mr-2")}>
                {action.icon}
              </span>
            )}
            {(showLabels || !action.icon) && action.label}
          </a>
        ) : (
          <>
            {action.icon && (
              <span className={cn(getIconSize(), showLabels && "mr-2")}>
                {action.icon}
              </span>
            )}
            {(showLabels || !action.icon) && action.label}
          </>
        )}
      </Button>
    );
    
    // Wrap with tooltip if tooltip text is provided
    if (action.tooltip && !showLabels && action.icon) {
      return (
        <Tooltip key={index} delayDuration={300}>
          <TooltipTrigger asChild>{button}</TooltipTrigger>
          <TooltipContent>{action.tooltip}</TooltipContent>
        </Tooltip>
      );
    }
    
    return button;
  };
  
  return (
    <div 
      className={cn(
        "flex flex-wrap items-center gap-2",
        variant === "inline" && "bg-muted/50 rounded-lg p-1",
        {
          "justify-start": align === "start",
          "justify-center": align === "center",
          "justify-end": align === "end",
        },
        fullWidth && "w-full",
        className
      )}
    >
      {/* Search field */}
      {searchable && (
        <div className={cn("relative", fullWidth && "flex-1")}>
          <SearchIcon className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={handleSearch}
            className={cn(
              "pl-9",
              getButtonSize(),
              fullWidth && "w-full"
            )}
          />
        </div>
      )}
      
      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-1">
        {actions.map((action, index) => (
          <React.Fragment key={index}>
            {renderAction(action, index)}
            
            {/* Add separator if needed */}
            {showDividers && 
             index < actions.length - 1 && 
             !action.dropdown && 
             !actions[index + 1]?.dropdown && (
              <Separator
                orientation="vertical"
                className="h-6 mx-1"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}