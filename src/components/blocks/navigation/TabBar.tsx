// components/blocks/navigation/TabBar.tsx
"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, MoreHorizontalIcon, XIcon } from "lucide-react";

export interface TabItem {
  label: string;
  value: string;
  href?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  closable?: boolean;
  onClose?: () => void;
  badge?: {
    content: React.ReactNode;
    variant?: "default" | "secondary" | "outline" | "destructive";
  };
}

export interface TabBarProps {
  tabs: TabItem[];
  value?: string;
  onValueChange?: (value: string) => void;
  variant?: "default" | "outline" | "underline" | "pills" | "enclosed";
  size?: "default" | "sm" | "lg";
  scrollable?: boolean;
  alignment?: "start" | "center" | "end";
  fullWidth?: boolean;
  bordered?: boolean;
  showActiveIndicator?: boolean;
  hideExtraContent?: number;
  moreButtonLabel?: string;
  className?: string;
}

export function TabBar({
  tabs,
  value,
  onValueChange,
  variant = "default",
  size = "default",
  scrollable = true,
  alignment = "start",
  fullWidth = false,
  bordered = false,
  showActiveIndicator = false,
  hideExtraContent,
  moreButtonLabel = "More",
  className,
}: TabBarProps) {
  const pathname = usePathname();
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  // If value is not provided, try to determine from pathname
  const activeValue = value || tabs.find(tab => tab.href === pathname)?.value;
  
  // If hideExtraContent is set, split tabs into visible and dropdown
  const { visibleTabs, dropdownTabs } = React.useMemo(() => {
    if (!hideExtraContent || hideExtraContent >= tabs.length) {
      return { visibleTabs: tabs, dropdownTabs: [] };
    }
    
    return {
      visibleTabs: tabs.slice(0, hideExtraContent),
      dropdownTabs: tabs.slice(hideExtraContent),
    };
  }, [tabs, hideExtraContent]);
  
  // Create classes for each variant
  const getTabClasses = (tab: TabItem) => {
    const active = tab.value === activeValue;
    const disabled = tab.disabled;
    
    // Base classes for all variants
    const baseClasses = cn(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all",
      disabled && "opacity-50 cursor-not-allowed pointer-events-none",
      fullWidth && "flex-1",
      {
        "text-xs px-2.5 py-1.5": size === "sm",
        "text-sm px-4 py-2": size === "default",
        "px-5 py-2.5": size === "lg",
      }
    );
    
    // Variant-specific classes
    switch (variant) {
      case "outline":
        return cn(
          baseClasses,
          "border rounded-md",
          active 
            ? "border-primary bg-primary/10 text-primary" 
            : "border-muted hover:border-muted-foreground/30 hover:bg-muted/40"
        );
        
      case "underline":
        return cn(
          baseClasses,
          "border-b-2",
          active 
            ? "border-primary text-primary font-medium" 
            : "border-transparent hover:border-muted-foreground/30"
        );
        
      case "pills":
        return cn(
          baseClasses,
          "rounded-full",
          active 
            ? "bg-primary text-primary-foreground font-medium" 
            : "hover:bg-muted"
        );
        
      case "enclosed":
        return cn(
          baseClasses,
          "border-b",
          active 
            ? "border-x border-t border-b-transparent rounded-t-md bg-background" 
            : "border-transparent hover:border-muted-foreground/30"
        );
        
      default: // Default variant
        return cn(
          baseClasses,
          "rounded-md",
          active 
            ? "bg-muted font-medium" 
            : "hover:bg-muted/50"
        );
    }
  };
  
  const containerClasses = cn(
    "flex items-center gap-1",
    bordered && "border rounded-md p-1",
    {
      "justify-start": alignment === "start",
      "justify-center": alignment === "center",
      "justify-end": alignment === "end",
    },
    className
  );
  
  const renderTabContent = (tab: TabItem) => (
    <>
      {tab.icon && <span className="h-4 w-4">{tab.icon}</span>}
      <span className="truncate">{tab.label}</span>
      {tab.badge && (
        <Badge variant={tab.badge.variant} className="ml-1">
          {tab.badge.content}
        </Badge>
      )}
      {tab.closable && (
        <button
          className="ml-1 rounded-full hover:bg-muted p-0.5"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            tab.onClose?.();
          }}
        >
          <XIcon className="h-3.5 w-3.5" />
        </button>
      )}
    </>
  );
  
  const renderTab = (tab: TabItem) => {
    const isActive = tab.value === activeValue;
    
    if (tab.href) {
      return (
        <Link
          key={tab.value}
          href={tab.disabled ? "#" : tab.href}
          className={getTabClasses(tab)}
          onClick={(e) => {
            if (tab.disabled) {
              e.preventDefault();
              return;
            }
            
            if (onValueChange) {
              e.preventDefault();
              onValueChange(tab.value);
            }
          }}
          aria-current={isActive ? "page" : undefined}
        >
          {renderTabContent(tab)}
        </Link>
      );
    }
    
    return (
      <button
        key={tab.value}
        className={getTabClasses(tab)}
        disabled={tab.disabled}
        onClick={() => onValueChange?.(tab.value)}
        aria-pressed={isActive}
      >
        {renderTabContent(tab)}
      </button>
    );
  };
  
  // If scrollable, wrap in ScrollArea
  if (scrollable) {
    return (
      <div ref={containerRef} className={containerClasses}>
        <ScrollArea className="w-full">
          <div className="flex items-center gap-1">
            {visibleTabs.map(renderTab)}
            
            {dropdownTabs.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size={size === "sm" ? "sm" : size === "lg" ? "lg" : "default"}
                    className="gap-1"
                  >
                    {moreButtonLabel}
                    <ChevronDownIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {dropdownTabs.map((tab) => (
                    <DropdownMenuItem
                      key={tab.value}
                      disabled={tab.disabled}
                      className={tab.value === activeValue ? "bg-muted font-medium" : ""}
                      onSelect={() => {
                        if (tab.href) {
                          window.location.href = tab.href;
                        } else if (onValueChange) {
                          onValueChange(tab.value);
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        {tab.icon && <span className="h-4 w-4">{tab.icon}</span>}
                        {tab.label}
                        {tab.badge && (
                          <Badge variant={tab.badge.variant} className="ml-1">
                            {tab.badge.content}
                          </Badge>
                        )}
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        
        {showActiveIndicator && activeValue && (
          <div className="absolute bottom-0 h-0.5 bg-primary transition-all duration-200" />
        )}
      </div>
    );
  }
  
  // Not scrollable, regular div layout
  return (
    <div className={containerClasses}>
      {visibleTabs.map(renderTab)}
      
      {dropdownTabs.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size={size === "sm" ? "sm" : size === "lg" ? "lg" : "default"}
            >
              <MoreHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {dropdownTabs.map((tab) => (
              <DropdownMenuItem
                key={tab.value}
                disabled={tab.disabled}
                className={tab.value === activeValue ? "bg-muted" : ""}
                onSelect={() => {
                  if (tab.href) {
                    window.location.href = tab.href;
                  } else if (onValueChange) {
                    onValueChange(tab.value);
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  {tab.icon && <span className="h-4 w-4">{tab.icon}</span>}
                  {tab.label}
                  {tab.badge && (
                    <Badge variant={tab.badge.variant} className="ml-1">
                      {tab.badge.content}
                    </Badge>
                  )}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}