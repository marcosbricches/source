// components/blocks/data/InfoPanel.tsx
'use client'
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ChevronDownIcon, InfoIcon } from "lucide-react";

export interface InfoItem {
  label: string;
  value: React.ReactNode;
  valueClassName?: string;
  labelClassName?: string;
  tooltip?: string;
  highlight?: boolean;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "outline" | "destructive";
  };
}

export interface InfoGroup {
  title?: string;
  description?: string;
  items: InfoItem[];
  collapsible?: boolean;
  defaultOpen?: boolean;
}

export interface InfoPanelProps {
  title?: string;
  description?: string;
  groups: InfoGroup[];
  isLoading?: boolean;
  footer?: React.ReactNode;
  variant?: "default" | "bordered" | "simple" | "compact";
  orientation?: "horizontal" | "vertical";
  showSeparators?: boolean;
  actions?: React.ReactNode;
}

export function InfoPanel({
  title,
  description,
  groups,
  isLoading = false,
  footer,
  variant = "default",
  orientation = "vertical",
  showSeparators = true,
  actions,
}: InfoPanelProps) {
  const renderInfoItem = (item: InfoItem) => {
    if (isLoading) {
      return (
        <div className="space-y-1">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-5 w-32" />
        </div>
      );
    }
    
    return (
      <div className={orientation === "horizontal" ? "flex justify-between items-center gap-4" : "space-y-1"}>
        <div className="flex items-center gap-1">
          <span className={`text-sm font-medium text-muted-foreground ${item.labelClassName || ""}`}>
            {item.label}
          </span>
          
          {item.tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoIcon className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">{item.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <span className={`${item.highlight ? "font-semibold" : ""} ${orientation === "horizontal" ? "text-sm" : "text-base"} ${item.valueClassName || ""}`}>
            {item.value}
          </span>
          
          {item.badge && (
            <Badge variant={item.badge.variant}>{item.badge.text}</Badge>
          )}
        </div>
      </div>
    );
  };
  
  const renderGroup = (group: InfoGroup, index: number) => {
    const content = (
      <div className="space-y-3">
        {group.title && (
          <div className="space-y-1">
            <h3 className="text-sm font-semibold">{group.title}</h3>
            {group.description && (
              <p className="text-xs text-muted-foreground">{group.description}</p>
            )}
          </div>
        )}
        
        <div className={`grid ${variant === "compact" ? "gap-1" : "gap-3"} ${
          orientation === "horizontal" ? "grid-cols-1" : 
          variant === "compact" ? "grid-cols-1" :
          "sm:grid-cols-2"
        }`}>
          {group.items.map((item, idx) => (
            <div key={idx}>
              {renderInfoItem(item)}
            </div>
          ))}
        </div>
      </div>
    );
    
    if (group.collapsible) {
      return (
        <Collapsible defaultOpen={group.defaultOpen}>
          <div className="flex items-center justify-between">
            {group.title && (
              <div className="space-y-1">
                <h3 className="text-sm font-semibold">{group.title}</h3>
                {group.description && (
                  <p className="text-xs text-muted-foreground">{group.description}</p>
                )}
              </div>
            )}
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="pt-3">
            <div className={`grid ${variant === "compact" ? "gap-1" : "gap-3"} ${
              orientation === "horizontal" ? "grid-cols-1" : 
              variant === "compact" ? "grid-cols-1" :
              "sm:grid-cols-2"
            }`}>
              {group.items.map((item, idx) => (
                <div key={idx}>
                  {renderInfoItem(item)}
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      );
    }
    
    return content;
  };
  
  // Simple variant (no card)
  if (variant === "simple") {
    return (
      <div className="space-y-4">
        {(title || description) && (
          <div className="space-y-1">
            {title && <h2 className="text-lg font-semibold">{title}</h2>}
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
        )}
        
        <div className="space-y-6">
          {groups.map((group, index) => (
            <React.Fragment key={index}>
              {index > 0 && showSeparators && <Separator className="my-6" />}
              {renderGroup(group, index)}
            </React.Fragment>
          ))}
        </div>
        
        {footer && <div className="mt-6">{footer}</div>}
      </div>
    );
  }
  
  // Bordered variant
  if (variant === "bordered") {
    return (
      <div className="border rounded-lg overflow-hidden">
        {(title || description) && (
          <div className="px-6 py-4 bg-muted/40">
            <div className="flex justify-between items-center">
              <div>
                {title && <h2 className="text-lg font-semibold">{title}</h2>}
                {description && <p className="text-sm text-muted-foreground">{description}</p>}
              </div>
              {actions}
            </div>
          </div>
        )}
        
        <div className="divide-y">
          {groups.map((group, index) => (
            <div key={index} className="px-6 py-4">
              {renderGroup(group, index)}
            </div>
          ))}
        </div>
        
        {footer && (
          <div className="px-6 py-4 bg-muted/20 border-t">
            {footer}
          </div>
        )}
      </div>
    );
  }
  
  // Compact variant
  if (variant === "compact") {
    return (
      <Card className="overflow-hidden">
        {(title || description) && (
          <CardHeader className="px-4 py-3 space-y-1">
            <div className="flex justify-between items-center">
              <div>
                {title && <CardTitle className="text-base">{title}</CardTitle>}
                {description && <CardDescription className="text-xs">{description}</CardDescription>}
              </div>
              {actions}
            </div>
          </CardHeader>
        )}
        
        <CardContent className="px-4 py-3 space-y-4 text-sm">
          {groups.map((group, index) => (
            <React.Fragment key={index}>
              {index > 0 && showSeparators && <Separator className="my-4" />}
              {renderGroup(group, index)}
            </React.Fragment>
          ))}
        </CardContent>
        
        {footer && (
          <CardFooter className="px-4 py-3 border-t bg-muted/10">
            {footer}
          </CardFooter>
        )}
      </Card>
    );
  }
  
  // Default card variant
  return (
    <Card>
      {(title || description) && (
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              {title && <CardTitle>{title}</CardTitle>}
              {description && <CardDescription>{description}</CardDescription>}
            </div>
            {actions}
          </div>
        </CardHeader>
      )}
      
      <CardContent className="space-y-6">
        {groups.map((group, index) => (
          <React.Fragment key={index}>
            {index > 0 && showSeparators && <Separator className="my-6" />}
            {renderGroup(group, index)}
          </React.Fragment>
        ))}
      </CardContent>
      
      {footer && (
        <CardFooter className="flex justify-between border-t pt-6">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}