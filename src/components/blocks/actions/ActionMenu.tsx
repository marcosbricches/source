// components/blocks/actions/ActionMenu.tsx
"use client"

import React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoreHorizontalIcon, MoreVerticalIcon } from "lucide-react";

export interface ActionMenuItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  shortcut?: string;
  disabled?: boolean;
  variant?: "default" | "destructive";
  items?: ActionMenuItem[];
}

export interface ActionMenuGroup {
  title?: string;
  items: ActionMenuItem[];
}

export interface ActionMenuProps {
  trigger?: React.ReactNode;
  groups: ActionMenuGroup[];
  variant?: "dropdown" | "context";
  triggerVariant?: "icon" | "button" | "text" | "custom";
  triggerText?: string;
  triggerIcon?: React.ReactNode;
  align?: "start" | "center" | "end";
  size?: "sm" | "default" | "lg";
  className?: string;
}

export function ActionMenu({
  trigger,
  groups,
  variant = "dropdown",
  triggerVariant = "icon",
  triggerText = "Actions",
  triggerIcon,
  align = "end",
  size = "default",
  className,
}: ActionMenuProps) {
  const renderMenuItem = (
    item: ActionMenuItem,
    MenuItemComponent: any,
    MenuSubComponent: any,
    MenuSubTriggerComponent: any,
    MenuSubContentComponent: any,
    MenuShortcutComponent: any,
    MenuSeparatorComponent: any,
  ) => {
    // If item has subitems, render as submenu
    if (item.items && item.items.length > 0) {
      return (
        <MenuSubComponent key={item.label}>
          <MenuSubTriggerComponent
            disabled={item.disabled}
            className={cn(
              item.variant === "destructive" && "text-destructive"
            )}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </MenuSubTriggerComponent>
          <MenuSubContentComponent>
            {item.items.map((subItem) =>
              renderMenuItem(
                subItem,
                MenuItemComponent,
                MenuSubComponent,
                MenuSubTriggerComponent,
                MenuSubContentComponent,
                MenuShortcutComponent,
                MenuSeparatorComponent,
              )
            )}
          </MenuSubContentComponent>
        </MenuSubComponent>
      );
    }
    
    // Regular menu item
    return (
      <MenuItemComponent
        key={item.label}
        onClick={item.onClick}
        disabled={item.disabled}
        className={cn(
          item.variant === "destructive" && "text-destructive"
        )}
      >
        {item.icon && <span className="mr-2">{item.icon}</span>}
        {item.label}
        {item.shortcut && (
          <MenuShortcutComponent>{item.shortcut}</MenuShortcutComponent>
        )}
      </MenuItemComponent>
    );
  };
  
  // Dropdown menu rendering
  if (variant === "dropdown") {
    // Create trigger based on variant
    const dropdownTrigger = () => {
      if (trigger) {
        return trigger;
      }
      
      if (triggerVariant === "icon") {
        return (
          <Button variant="ghost" size="icon">
            {triggerIcon || <MoreHorizontalIcon className="h-4 w-4" />}
          </Button>
        );
      }
      
      if (triggerVariant === "button") {
        return (
          <Button variant="outline" size={size === "sm" ? "sm" : undefined}>
            {triggerIcon && <span className="mr-2">{triggerIcon}</span>}
            {triggerText}
          </Button>
        );
      }
      
      if (triggerVariant === "text") {
        return (
          <Button variant="link" className="p-0 h-auto">
            {triggerText}
          </Button>
        );
      }
      
      return null;
    };
    
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {dropdownTrigger()}
        </DropdownMenuTrigger>
        <DropdownMenuContent align={align} className={className}>
          {groups.map((group, groupIndex) => (
            <React.Fragment key={groupIndex}>
              {/* Add separator between groups */}
              {groupIndex > 0 && <DropdownMenuSeparator />}
              
              {/* Optional group title */}
              {group.title && (
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                  {group.title}
                </div>
              )}
              
              {/* Group items */}
              {group.items.map((item) =>
                renderMenuItem(
                  item,
                  DropdownMenuItem,
                  DropdownMenuSub,
                  DropdownMenuSubTrigger,
                  DropdownMenuSubContent,
                  DropdownMenuShortcut,
                  DropdownMenuSeparator,
                )
              )}
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  
  // Context menu rendering
  return (
    <ContextMenu>
      <ContextMenuTrigger className={className}>
        {trigger || <div className="cursor-default">Right-click here</div>}
      </ContextMenuTrigger>
      <ContextMenuContent>
        {groups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {/* Add separator between groups */}
            {groupIndex > 0 && <ContextMenuSeparator />}
            
            {/* Optional group title */}
            {group.title && (
              <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                {group.title}
              </div>
            )}
            
            {/* Group items */}
            {group.items.map((item) =>
              renderMenuItem(
                item,
                ContextMenuItem,
                ContextMenuSub,
                ContextMenuSubTrigger,
                ContextMenuSubContent,
                ContextMenuShortcut,
                ContextMenuSeparator,
              )
            )}
          </React.Fragment>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
}