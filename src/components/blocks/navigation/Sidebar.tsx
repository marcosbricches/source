// components/blocks/navigation/Sidebar.tsx
"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export interface SidebarItemGroup {
  title?: string;
  items: SidebarItem[];
}

export interface SidebarItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  badge?: {
    content: React.ReactNode;
    variant?: "default" | "secondary" | "outline" | "destructive";
  };
  items?: SidebarItem[];
  expanded?: boolean;
  onClick?: () => void;
}

export interface SidebarHeader {
  logo?: React.ReactNode;
  title?: string;
  description?: string;
}

export interface SidebarFooter {
  user?: {
    name: string;
    email?: string;
    avatar?: string;
    role?: string;
  };
  customContent?: React.ReactNode;
}

export interface SidebarProps {
  header?: SidebarHeader;
  groups: SidebarItemGroup[];
  footer?: SidebarFooter;
  collapsed?: boolean;
  collapsible?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  variant?: "default" | "compact" | "minimal" | "bordered";
  width?: "narrow" | "default" | "wide";
  bordered?: boolean;
  showGroupDividers?: boolean;
  className?: string;
}

export function Sidebar({
  header,
  groups = [],
  footer,
  collapsed = false,
  collapsible = false,
  onCollapsedChange,
  variant = "default",
  width = "default",
  bordered = true,
  showGroupDividers = false,
  className,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  const [expandedItems, setExpandedItems] = React.useState<Record<string, boolean>>({});
  const pathname = usePathname();
  
  React.useEffect(() => {
    if (onCollapsedChange) {
      onCollapsedChange(isCollapsed);
    }
  }, [isCollapsed, onCollapsedChange]);
  
  // Preprocess groups to set active items and expanded state
  const processedGroups = React.useMemo(() => {
    return groups.map((group) => ({
      ...group,
      items: processItems(group.items, pathname, expandedItems),
    }));
  }, [groups, pathname, expandedItems]);
  
  // Process items recursively to set active state
  function processItems(
    items: SidebarItem[],
    currentPath: string,
    expanded: Record<string, boolean>
  ): SidebarItem[] {
    return items.map((item) => {
      // Check if this item or any of its children are active
      const isActive = 
        (item.href && (currentPath === item.href || currentPath?.startsWith(`${item.href}/`))) ||
        (item.items && item.items.some((subItem) => 
          subItem.href && (currentPath === subItem.href || currentPath?.startsWith(`${subItem.href}/`))
        ));
      
      // Get the expanded state for this item
      const isExpanded = item.items?.length 
        ? (expanded[item.title] === undefined ? (isActive || item.expanded) : expanded[item.title])
        : false;
      
      // Process children recursively
      const processedItems = item.items?.length 
        ? processItems(item.items, currentPath, expanded)
        : undefined;
      
      return {
        ...item,
        active: isActive,
        expanded: isExpanded,
        items: processedItems,
      };
    });
  }
  
  const toggleItemExpanded = (itemTitle: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemTitle]: !prev[itemTitle],
    }));
  };
  
  // Width classes based on the width prop
  const widthClasses = {
    narrow: "w-48",
    default: "w-64",
    wide: "w-72",
  }[width];
  
  // Render a sidebar item
  const renderItem = (item: SidebarItem, level = 0) => {
    const isSubItem = level > 0;
    const hasChildren = item.items?.length;
    const isExpanded = item.expanded;
    
    // Base classes for all items
    let itemClasses = cn(
      "flex items-center gap-2 rounded-md transition-colors w-full",
      isCollapsed && !isSubItem && "justify-center",
      {
        "px-3 py-2": variant !== "compact",
        "px-2 py-1.5": variant === "compact",
        "text-primary": item.active && variant === "minimal",
        "bg-primary text-primary-foreground": 
          item.active && (variant === "default" || variant === "bordered"),
        "bg-muted": item.active && variant === "compact",
        "hover:bg-primary/10": !item.active && variant === "default",
        "hover:bg-muted": !item.active && variant === "compact",
        "hover:text-primary": !item.active && variant === "minimal",
        "font-medium": item.active,
        "pl-4": isSubItem && level === 1,
        "pl-6": isSubItem && level === 2,
        "pl-8": isSubItem && level === 3,
      }
    );
    
    // Base content for all items
    const itemContent = (
      <>
        {item.icon && (
          <span className="flex-shrink-0 w-5 h-5">
            {item.icon}
          </span>
        )}
        
        {(!isCollapsed || isSubItem) && (
          <span className="truncate">{item.title}</span>
        )}
        
        {(!isCollapsed || isSubItem) && item.badge && (
          <Badge
            variant={item.badge.variant}
            className="ml-auto flex-shrink-0"
          >
            {item.badge.content}
          </Badge>
        )}
        
        {(!isCollapsed || isSubItem) && hasChildren && (
          <span className="ml-auto flex-shrink-0">
            {isExpanded ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronRightIcon className="h-4 w-4" />
            )}
          </span>
        )}
      </>
    );
    
    // If item has children, render as a collapsible
    if (hasChildren) {
      return (
        <div key={item.title} className="w-full">
          <Collapsible
            open={isExpanded && (!isCollapsed || isSubItem)}
            onOpenChange={
              !isCollapsed || isSubItem
                ? () => toggleItemExpanded(item.title)
                : undefined
            }
          >
            <CollapsibleTrigger asChild className="w-full">
              <Button
                variant="ghost"
                className={itemClasses}
                onClick={item.onClick}
              >
                {itemContent}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="pt-1 pb-1">
                {item.items?.map((subItem) => renderItem(subItem, level + 1))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      );
    }
    
    // If item is a link
    if (item.href) {
      return (
        <Link
          key={item.title}
          href={item.href}
          className={itemClasses}
        >
          {itemContent}
        </Link>
      );
    }
    
    // If item is just a button
    return (
      <Button
        key={item.title}
        variant="ghost"
        className={itemClasses}
        onClick={item.onClick}
      >
        {itemContent}
      </Button>
    );
  };
  
  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-background transition-all duration-300",
        widthClasses,
        bordered && "border-r",
        variant === "bordered" && "border border-border rounded-lg",
        isCollapsed && "w-16",
        className
      )}
    >
      {/* Header */}
      {header && (
        <div className={cn(
          "flex items-center p-4",
          isCollapsed ? "justify-center" : "justify-between",
          variant === "bordered" && "border-b",
        )}>
          {isCollapsed ? (
            <div className="flex justify-center items-center w-8 h-8">
              {header.logo || (
                <span className="font-semibold">{header.title?.charAt(0)}</span>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {header.logo && <div>{header.logo}</div>}
              <div>
                {header.title && (
                  <h3 className="font-semibold text-base truncate">{header.title}</h3>
                )}
                {header.description && (
                  <p className="text-xs text-muted-foreground truncate">
                    {header.description}
                  </p>
                )}
              </div>
            </div>
          )}
          
          {collapsible && !isCollapsed && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsCollapsed(true)}
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
          )}
          
          {collapsible && isCollapsed && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 mt-2"
              onClick={() => setIsCollapsed(false)}
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}
      
      {/* Main content */}
      <ScrollArea className="flex-1">
        <div className={cn("py-4", isCollapsed ? "px-2" : "px-3")}>
          {processedGroups.map((group, index) => (
            <React.Fragment key={index}>
              {index > 0 && showGroupDividers && (
                <Separator className="my-4" />
              )}
              
              {group.title && !isCollapsed && (
                <h4 className="mb-1 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {group.title}
                </h4>
              )}
              
              <div className="space-y-1 mt-1">
                {group.items.map((item) => renderItem(item))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
      
      {/* Footer */}
      {footer && (
        <div className={cn(
          "p-4 mt-auto",
          variant === "bordered" && "border-t",
        )}>
          {footer.customContent ? (
            <div>{footer.customContent}</div>
          ) : footer.user ? (
            <div className={cn(
              "flex items-center",
              isCollapsed ? "justify-center" : "gap-3"
            )}>
              <Avatar className="h-8 w-8">
                <AvatarImage src={footer.user.avatar} alt={footer.user.name} />
                <AvatarFallback>
                  {footer.user.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              
              {!isCollapsed && (
                <div className="space-y-0.5">
                  <p className="text-sm font-medium truncate">{footer.user.name}</p>
                  {footer.user.role && (
                    <p className="text-xs text-muted-foreground truncate">
                      {footer.user.role}
                    </p>
                  )}
                </div>
              )}
            </div>
          ) : null}
        </div>
      )}
    </aside>
  );
}