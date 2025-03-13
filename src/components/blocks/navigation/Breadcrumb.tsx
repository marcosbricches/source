// components/blocks/navigation/Breadcrumb.tsx
"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon, HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  homeHref?: string;
  homeIcon?: React.ReactNode;
  showHome?: boolean;
  separator?: React.ReactNode;
  maxItems?: number;
  variant?: "default" | "outline" | "ghost" | "pills";
  size?: "sm" | "default" | "lg";
  className?: string;
}

export function Breadcrumbs({
  items,
  homeHref = "/",
  homeIcon = <HomeIcon className="h-4 w-4" />,
  showHome = true,
  separator = <ChevronRightIcon className="h-4 w-4 mx-1 text-muted-foreground" />,
  maxItems,
  variant = "default",
  size = "default",
  className,
}: BreadcrumbsProps) {
  const pathname = usePathname();
  
  // If maxItems is provided, determine which items to show
  const { displayedItems, hiddenItems } = React.useMemo(() => {
    if (!maxItems || items.length <= maxItems) {
      return { displayedItems: items, hiddenItems: [] };
    }
    
    // Always show the first and last item
    const firstItem = items[0];
    const lastItem = items[items.length - 1];
    
    if (maxItems < 3) {
      // If maxItems is too small, just show first and last
      return {
        displayedItems: [firstItem, lastItem],
        hiddenItems: items.slice(1, items.length - 1),
      };
    }
    
    // Show first, last, and maxItems-2 in between
    const middleCount = maxItems - 2;
    const middleStart = Math.ceil((items.length - middleCount) / 2);
    const middleEnd = middleStart + middleCount;
    
    return {
      displayedItems: [
        firstItem,
        ...items.slice(middleStart, middleEnd),
        lastItem,
      ],
      hiddenItems: [
        ...items.slice(1, middleStart),
        ...items.slice(middleEnd, items.length - 1),
      ],
    };
  }, [items, maxItems]);
  
  // Generate classes for breadcrumb items based on variant and size
  const getItemClasses = (item: BreadcrumbItem, isLast: boolean) => {
    // Base classes for all variants
    const baseClasses = cn(
      "flex items-center",
      {
        "text-muted-foreground hover:text-foreground": !isLast,
        "text-foreground font-medium": isLast,
        "text-xs": size === "sm",
        "text-sm": size === "default",
        "text-base": size === "lg",
      }
    );
    
    // Add special classes for different variants
    switch (variant) {
      case "outline":
        return cn(
          baseClasses,
          !isLast && "hover:underline"
        );
        
      case "ghost":
        return cn(
          baseClasses,
          !isLast && "px-2 py-1 rounded-md hover:bg-muted transition-colors"
        );
        
      case "pills":
        return cn(
          baseClasses,
          isLast 
            ? "px-2 py-1 bg-primary text-primary-foreground rounded-full" 
            : "px-2 py-1 rounded-full hover:bg-muted transition-colors"
        );
        
      default: // Default variant
        return baseClasses;
    }
  };
  
  const containerClasses = cn(
    "flex items-center flex-wrap gap-1",
    className
  );
  
  return (
    <nav aria-label="Breadcrumb" className={containerClasses}>
      {/* Home Item */}
      {showHome && (
        <>
          <Link
            href={homeHref}
            className={getItemClasses(
              { label: "Home", href: homeHref, icon: homeIcon },
              false
            )}
            aria-current={pathname === homeHref ? "page" : undefined}
          >
            {homeIcon}
            {(variant === "ghost" || variant === "pills") && (
              <span className="ml-1">Home</span>
            )}
          </Link>
          {separator}
        </>
      )}
      
      {/* Displayed Items */}
      {displayedItems.map((item, index) => {
        const isLast = index === displayedItems.length - 1;
        const isMiddleEllipsis = 
          hiddenItems.length > 0 && 
          index === 0 && 
          displayedItems.length > 1;
        
        return (
          <React.Fragment key={index}>
            {/* Regular breadcrumb item */}
            <div className="flex items-center">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={getItemClasses(item, false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.icon && (
                    <span className="mr-1">{item.icon}</span>
                  )}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span className={getItemClasses(item, isLast)}>
                  {item.icon && (
                    <span className="mr-1">{item.icon}</span>
                  )}
                  <span>{item.label}</span>
                </span>
              )}
            </div>
            
            {/* Dropdown for hidden items after first item */}
            {isMiddleEllipsis && hiddenItems.length > 0 && (
              <>
                {separator}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-6 w-6 rounded-full"
                    >
                      <span className="sr-only">More breadcrumb items</span>
                      <span className="text-muted-foreground">...</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    {hiddenItems.map((hiddenItem, hiddenIndex) => (
                      <DropdownMenuItem key={hiddenIndex} asChild>
                        {hiddenItem.href ? (
                          <Link 
                            href={hiddenItem.href} 
                            className="flex items-center"
                          >
                            {hiddenItem.icon && (
                              <span className="mr-2">{hiddenItem.icon}</span>
                            )}
                            {hiddenItem.label}
                          </Link>
                        ) : (
                          <span className="flex items-center">
                            {hiddenItem.icon && (
                              <span className="mr-2">{hiddenItem.icon}</span>
                            )}
                            {hiddenItem.label}
                          </span>
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
            
            {!isLast && separator}
          </React.Fragment>
        );
      })}
    </nav>
  );
}