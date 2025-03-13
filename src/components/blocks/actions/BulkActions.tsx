// components/blocks/actions/BulkActions.tsx
"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";

export interface BulkAction {
  label: string;
  icon?: React.ReactNode;
  onClick: (selectedItems: any[]) => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  disabled?: boolean;
}

export interface BulkActionsProps {
  selectedItems: any[];
  actions: BulkAction[];
  primaryAction?: BulkAction;
  selectionMessage?: string | ((count: number) => string);
  onClearSelection?: () => void;
  variant?: "default" | "simple" | "compact" | "floating";
  size?: "sm" | "default" | "lg";
  moreActionsText?: string;
  maxVisibleActions?: number;
  className?: string;
}

export function BulkActions({
  selectedItems,
  actions,
  primaryAction,
  selectionMessage = (count) => `${count} item${count > 1 ? "s" : ""} selected`,
  onClearSelection,
  variant = "default",
  size = "default",
  moreActionsText = "More Actions",
  maxVisibleActions = 2,
  className,
}: BulkActionsProps) {
  // If no items are selected, don't render
  if (!selectedItems.length) {
    return null;
  }
  
  // Format selection message
  const message = typeof selectionMessage === "function"
    ? selectionMessage(selectedItems.length)
    : selectionMessage;
  
  // Determine size classes
  const getSizeClasses = () => {
    if (size === "sm") return "text-xs py-1.5";
    if (size === "lg") return "text-base py-3";
    return "text-sm py-2";
  };
  
  // Determine button size
  const getButtonSize = () => {
    if (size === "sm") return "h-7 text-xs";
    if (size === "lg") return "h-10 text-base";
    return "h-9 text-sm";
  };
  
  // Split actions into visible and dropdown
  const { visibleActions, dropdownActions } = React.useMemo(() => {
    const effectiveMaxVisible = primaryAction ? maxVisibleActions - 1 : maxVisibleActions;
    
    if (actions.length <= effectiveMaxVisible) {
      return {
        visibleActions: actions,
        dropdownActions: [],
      };
    }
    
    return {
      visibleActions: actions.slice(0, effectiveMaxVisible),
      dropdownActions: actions.slice(effectiveMaxVisible),
    };
  }, [actions, maxVisibleActions, primaryAction]);
  
  // Floating variant
  if (variant === "floating") {
    return (
      <div className={cn(
        "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50",
        "bg-background border shadow-lg rounded-lg px-4 py-2 flex items-center gap-3",
        className
      )}>
        <div className="font-medium">{message}</div>
        
        {onClearSelection && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7"
            onClick={onClearSelection}
          >
            <XIcon className="h-4 w-4" />
          </Button>
        )}
        
        <div className="h-6 w-px bg-border mx-1" />
        
        <div className="flex items-center gap-2">
          {primaryAction && (
            <Button
              variant={primaryAction.variant || "default"}
              size={size === "sm" ? "sm" : undefined}
              onClick={() => primaryAction.onClick(selectedItems)}
              disabled={primaryAction.disabled}
              className={cn(getButtonSize())}
            >
              {primaryAction.icon && (
                <span className="mr-1">{primaryAction.icon}</span>
              )}
              {primaryAction.label}
            </Button>
          )}
          
          {visibleActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || "outline"}
              size={size === "sm" ? "sm" : undefined}
              onClick={() => action.onClick(selectedItems)}
              disabled={action.disabled}
              className={cn(getButtonSize())}
            >
              {action.icon && (
                <span className="mr-1">{action.icon}</span>
              )}
              {action.label}
            </Button>
          ))}
          
          {dropdownActions.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size={size === "sm" ? "sm" : undefined}
                  className={cn(getButtonSize())}
                >
                  {moreActionsText}
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {dropdownActions.map((action, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => action.onClick(selectedItems)}
                    disabled={action.disabled}
                    className={cn(
                      action.variant === "destructive" && "text-destructive"
                    )}
                  >
                    {action.icon && (
                      <span className="mr-2">{action.icon}</span>
                    )}
                    {action.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    );
  }
  
  // Compact variant
  if (variant === "compact") {
    return (
      <div className={cn(
        "flex items-center gap-2 px-2 py-1.5 bg-muted/50 rounded-md",
        className
      )}>
        <div className="flex items-center gap-1 text-sm">
          <CheckIcon className="h-3.5 w-3.5 text-primary" />
          <span className="font-medium">{selectedItems.length}</span>
        </div>
        
        <div className="flex items-center gap-1">
          {primaryAction && (
            <Button
              variant={primaryAction.variant || "ghost"}
              size="sm"
              className="h-7 px-2"
              onClick={() => primaryAction.onClick(selectedItems)}
              disabled={primaryAction.disabled}
            >
              {primaryAction.label}
            </Button>
          )}
          
          {visibleActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || "ghost"}
              size="sm"
              className="h-7 px-2"
              onClick={() => action.onClick(selectedItems)}
              disabled={action.disabled}
            >
              {action.label}
            </Button>
          ))}
          
          {dropdownActions.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                >
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {dropdownActions.map((action, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => action.onClick(selectedItems)}
                    disabled={action.disabled}
                  >
                    {action.icon && (
                      <span className="mr-2">{action.icon}</span>
                    )}
                    {action.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        
        {onClearSelection && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 ml-auto"
            onClick={onClearSelection}
          >
            <XIcon className="h-3.5 w-3.5" />
          </Button>
        )}
      </div>
    );
  }
  
  // Simple variant
  if (variant === "simple") {
    return (
      <div className={cn(
        "flex items-center gap-4",
        className
      )}>
        <span>{message}</span>
        
        <div className="flex items-center gap-2">
          {primaryAction && (
            <Button
              variant={primaryAction.variant || "default"}
              size={size === "sm" ? "sm" : undefined}
              onClick={() => primaryAction.onClick(selectedItems)}
              disabled={primaryAction.disabled}
            >
              {primaryAction.icon && (
                <span className="mr-2">{primaryAction.icon}</span>
              )}
              {primaryAction.label}
            </Button>
          )}
          
          {visibleActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || "outline"}
              size={size === "sm" ? "sm" : undefined}
              onClick={() => action.onClick(selectedItems)}
              disabled={action.disabled}
            >
              {action.icon && (
                <span className="mr-2">{action.icon}</span>
              )}
              {action.label}
            </Button>
          ))}
          
          {dropdownActions.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size={size === "sm" ? "sm" : undefined}
                >
                  {moreActionsText}
                  <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {dropdownActions.map((action, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => action.onClick(selectedItems)}
                    disabled={action.disabled}
                  >
                    {action.icon && (
                      <span className="mr-2">{action.icon}</span>
                    )}
                    {action.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    );
  }
  
  // Default variant
  return (
    <div className={cn(
      "border bg-muted/30 rounded-md px-4 py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2",
      getSizeClasses(),
      className
    )}>
      <div className="flex items-center gap-2">
        <CheckIcon className="h-5 w-5 text-primary" />
        <span className="font-medium">{message}</span>
        
        {onClearSelection && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClearSelection}
            className="h-7"
          >
            Clear
          </Button>
        )}
      </div>
      
      <div className="flex items-center gap-2 flex-wrap justify-end">
        {primaryAction && (
          <Button
            variant={primaryAction.variant || "default"}
            size={size === "sm" ? "sm" : undefined}
            onClick={() => primaryAction.onClick(selectedItems)}
            disabled={primaryAction.disabled}
            className={getButtonSize()}
          >
            {primaryAction.icon && (
              <span className="mr-2">{primaryAction.icon}</span>
            )}
            {primaryAction.label}
          </Button>
        )}
        
        {visibleActions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant || "outline"}
            size={size === "sm" ? "sm" : undefined}
            onClick={() => action.onClick(selectedItems)}
            disabled={action.disabled}
            className={getButtonSize()}
          >
            {action.icon && (
              <span className="mr-2">{action.icon}</span>
            )}
            {action.label}
          </Button>
        ))}
        
        {dropdownActions.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size={size === "sm" ? "sm" : undefined}
                className={getButtonSize()}
              >
                {moreActionsText}
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {dropdownActions.map((action, index) => {
                const isDestructive = action.variant === "destructive";
                
                return (
                  <React.Fragment key={index}>
                    {isDestructive && index > 0 && <DropdownMenuSeparator />}
                    <DropdownMenuItem
                      onClick={() => action.onClick(selectedItems)}
                      disabled={action.disabled}
                      className={cn(
                        isDestructive && "text-destructive"
                      )}
                    >
                      {action.icon && (
                        <span className="mr-2">{action.icon}</span>
                      )}
                      {action.label}
                    </DropdownMenuItem>
                    {isDestructive && index < dropdownActions.length - 1 && <DropdownMenuSeparator />}
                  </React.Fragment>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}