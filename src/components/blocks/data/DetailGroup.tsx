// components/blocks/data/DetailGroup.tsx
'use client'
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { CheckCircle2Icon, InfoIcon, PencilIcon } from "lucide-react";

export interface DetailField {
  label: string;
  value: React.ReactNode;
  tooltip?: string;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "outline" | "destructive";
  };
  isHighlighted?: boolean;
  isVerified?: boolean;
  isEditable?: boolean;
  onEdit?: () => void;
  valueClassName?: string;
  labelClassName?: string;
}

export interface DetailSection {
  title?: string;
  description?: string;
  fields: DetailField[];
}

export interface DetailGroupProps {
  title?: string;
  description?: string;
  sections: DetailSection[];
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  isLoading?: boolean;
  variant?: "default" | "list" | "compact" | "panel";
  layout?: "grid" | "list";
  colSpan?: 1 | 2 | 3 | 4;
  labelWidth?: "default" | "narrow" | "wide";
  showDividers?: boolean;
  isEditable?: boolean;
}

export function DetailGroup({
  title,
  description,
  sections,
  actions,
  footer,
  isLoading = false,
  variant = "default",
  layout = "grid",
  colSpan = 2,
  labelWidth = "default",
  showDividers = true,
  isEditable = false,
}: DetailGroupProps) {
  const labelWidthClasses = {
    narrow: "w-24",
    default: "w-32",
    wide: "w-40",
  }[labelWidth];
  
  const gridColClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[colSpan];
  
  const getFieldLayout = (field: DetailField, isCompact = false) => {
    if (layout === "list") {
      return (
        <div className="flex items-start space-x-3">
          <div className={`${isCompact ? "text-xs" : "text-sm"} font-medium text-muted-foreground ${labelWidthClasses} shrink-0 ${field.labelClassName || ""}`}>
            <div className="flex items-center gap-1">
              {field.label}
              {field.tooltip && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InfoIcon className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{field.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <div className={`${isCompact ? "text-sm" : "text-base"} ${field.isHighlighted ? "font-medium" : ""} ${field.valueClassName || ""}`}>
              {field.value}
            </div>
            {field.badge && (
              <Badge variant={field.badge.variant}>{field.badge.text}</Badge>
            )}
            {field.isVerified && (
              <CheckCircle2Icon className="h-4 w-4 text-green-500" />
            )}
            {(field.isEditable || isEditable) && field.onEdit && (
              <Button 
                variant="ghost" 
                size="icon"
                className="h-6 w-6"
                onClick={field.onEdit}
              >
                <PencilIcon className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </div>
      );
    }
    
    return (
      <div className="space-y-0.5">
        <div className="flex items-center gap-1">
          <span className={`${isCompact ? "text-xs" : "text-sm"} font-medium text-muted-foreground ${field.labelClassName || ""}`}>
            {field.label}
          </span>
          {field.tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoIcon className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">{field.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className={`${isCompact ? "text-sm" : "text-base"} ${field.isHighlighted ? "font-medium" : ""} ${field.valueClassName || ""}`}>
            {field.value}
          </div>
          {field.badge && (
            <Badge variant={field.badge.variant}>{field.badge.text}</Badge>
          )}
          {field.isVerified && (
            <CheckCircle2Icon className="h-4 w-4 text-green-500" />
          )}
          {(field.isEditable || isEditable) && field.onEdit && (
            <Button 
              variant="ghost" 
              size="icon"
              className="h-6 w-6"
              onClick={field.onEdit}
            >
              <PencilIcon className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>
      </div>
    );
  };
  
  const renderSection = (section: DetailSection, sectionIndex: number, isCompact = false) => {
    return (
      <div className="space-y-4">
        {section.title && (
          <div className="space-y-1">
            <h3 className={`${isCompact ? "text-sm" : "text-base"} font-semibold`}>{section.title}</h3>
            {section.description && (
              <p className={`${isCompact ? "text-xs" : "text-sm"} text-muted-foreground`}>
                {section.description}
              </p>
            )}
          </div>
        )}
        
        {isLoading ? (
          <div className={`grid ${gridColClasses} gap-4`}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-5 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className={layout === "grid" ? `grid ${gridColClasses} gap-4` : "space-y-3"}>
            {section.fields.map((field, i) => (
              <div key={i}>
                {getFieldLayout(field, isCompact)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  // List variant
  if (variant === "list") {
    return (
      <div className="space-y-6">
        {(title || description) && (
          <div className="space-y-1">
            {title && <h2 className="text-lg font-semibold">{title}</h2>}
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
        )}
        
        <div className="space-y-5">
          {sections.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              {sectionIndex > 0 && showDividers && <Separator className="my-5" />}
              {renderSection(section, sectionIndex)}
            </React.Fragment>
          ))}
        </div>
        
        {actions && (
          <div className="flex items-center justify-end gap-2">
            {actions}
          </div>
        )}
        
        {footer && (
          <div className="pt-4 mt-4 border-t">{footer}</div>
        )}
      </div>
    );
  }
  
  // Compact variant
  if (variant === "compact") {
    return (
      <Card>
        {(title || description || actions) && (
          <CardHeader className="px-4 py-3 space-y-1">
            <div className="flex items-center justify-between">
              <div>
                {title && <CardTitle className="text-base">{title}</CardTitle>}
                {description && <CardDescription className="text-xs">{description}</CardDescription>}
              </div>
              {actions}
            </div>
          </CardHeader>
        )}
        
        <CardContent className="px-4 py-3 space-y-4">
          {sections.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              {sectionIndex > 0 && showDividers && <Separator className="my-4" />}
              {renderSection(section, sectionIndex, true)}
            </React.Fragment>
          ))}
        </CardContent>
        
        {footer && (
          <CardFooter className="px-4 py-3 border-t">
            {footer}
          </CardFooter>
        )}
      </Card>
    );
  }
  
  // Panel variant (borderless)
  if (variant === "panel") {
    return (
      <div className="rounded-lg border bg-card">
        {(title || description || actions) && (
          <div className="px-6 py-4 border-b flex items-center justify-between">
            <div>
              {title && <h2 className="text-lg font-semibold">{title}</h2>}
              {description && <p className="text-sm text-muted-foreground">{description}</p>}
            </div>
            {actions}
          </div>
        )}
        
        <div className="p-6 space-y-6">
          {sections.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              {sectionIndex > 0 && showDividers && <Separator className="my-6" />}
              {renderSection(section, sectionIndex)}
            </React.Fragment>
          ))}
        </div>
        
        {footer && (
          <div className="px-6 py-4 border-t bg-muted/10">
            {footer}
          </div>
        )}
      </div>
    );
  }
  
  // Default card variant
  return (
    <Card>
      {(title || description || actions) && (
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              {title && <CardTitle>{title}</CardTitle>}
              {description && <CardDescription>{description}</CardDescription>}
            </div>
            {actions}
          </div>
        </CardHeader>
      )}
      
      <CardContent className="space-y-6">
        {sections.map((section, sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            {sectionIndex > 0 && showDividers && <Separator className="my-6" />}
            {renderSection(section, sectionIndex)}
          </React.Fragment>
        ))}
      </CardContent>
      
      {footer && (
        <CardFooter className="border-t pt-6">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}