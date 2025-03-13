// components/blocks/navigation/StepIndicator.tsx
"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Step {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  optional?: boolean;
  status?: "complete" | "current" | "upcoming" | "error";
  disabled?: boolean;
}

export interface StepIndicatorProps {
  steps: Step[];
  currentStep: string;
  onStepClick?: (stepId: string) => void;
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline" | "bullets" | "numbered";
  interactive?: boolean;
  showLabels?: boolean;
  showStepNumbers?: boolean;
  showIcons?: boolean;
  className?: string;
}

export function StepIndicator({
  steps,
  currentStep,
  onStepClick,
  orientation = "horizontal",
  size = "default",
  variant = "default",
  interactive = false,
  showLabels = true,
  showStepNumbers = true,
  showIcons = true,
  className,
}: StepIndicatorProps) {
  // Calculate the status for each step
  const stepsWithStatus = React.useMemo(() => {
    const currentStepIndex = steps.findIndex((step) => step.id === currentStep);
    
    return steps.map((step, index) => ({
      ...step,
      status: step.status || (
        index < currentStepIndex 
          ? "complete" 
          : index === currentStepIndex 
          ? "current" 
          : "upcoming"
      ),
      number: index + 1,
    }));
  }, [steps, currentStep]);
  
  // Get the step icon based on status and variant
  const getStepIcon = (step: typeof stepsWithStatus[0]) => {
    if (!showIcons) return null;
    
    if (step.icon && step.status !== "complete") {
      return step.icon;
    }
    
    if (step.status === "complete") {
      return <CheckIcon className="h-4 w-4" />;
    }
    
    if (variant === "numbered" && showStepNumbers) {
      return <span>{step.number}</span>;
    }
    
    return null;
  };
  
  // Get classes for step content based on status
  const getStepIconContainerClasses = (status: string) => {
    const baseClasses = cn(
      "flex items-center justify-center rounded-full transition-colors",
      size === "sm" ? "h-6 w-6 text-xs" : 
      size === "lg" ? "h-10 w-10 text-base" : 
      "h-8 w-8 text-sm"
    );
    
    if (variant === "outline") {
      return cn(
        baseClasses,
        "border-2",
        status === "complete" ? "border-primary bg-primary text-primary-foreground" : 
        status === "current" ? "border-primary text-primary" : 
        status === "error" ? "border-destructive text-destructive" : 
        "border-muted-foreground/30 text-muted-foreground"
      );
    }
    
    if (variant === "bullets") {
      return cn(
        baseClasses,
        size === "sm" ? "h-3 w-3" : 
        size === "lg" ? "h-5 w-5" : 
        "h-4 w-4",
        status === "complete" ? "bg-primary" : 
        status === "current" ? "border-2 border-primary" : 
        status === "error" ? "bg-destructive" : 
        "border-2 border-muted-foreground/30"
      );
    }
    
    // Default variant
    return cn(
      baseClasses,
      status === "complete" ? "bg-primary text-primary-foreground" : 
      status === "current" ? "bg-primary/10 text-primary border border-primary" : 
      status === "error" ? "bg-destructive/10 text-destructive border border-destructive" : 
      "bg-muted text-muted-foreground"
    );
  };
  
  // Get classes for connector lines
  const getConnectorClasses = (status: string) => {
    const isComplete = status === "complete";
    
    return cn(
      "transition-all",
      orientation === "horizontal" ? "h-px flex-1" : "w-px h-full",
      isComplete ? "bg-primary" : "bg-muted-foreground/30"
    );
  };
  
  // Vertical layout
  if (orientation === "vertical") {
    return (
      <div className={cn("flex flex-col", className)}>
        {stepsWithStatus.map((step, index) => {
          const isLast = index === stepsWithStatus.length - 1;
          
          return (
            <div key={step.id} className="flex">
              {/* Step icon and connector line */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    getStepIconContainerClasses(step.status),
                    interactive && !step.disabled && "cursor-pointer",
                  )}
                  onClick={() => {
                    if (interactive && !step.disabled && onStepClick) {
                      onStepClick(step.id);
                    }
                  }}
                >
                  {getStepIcon(step)}
                </div>
                
                {!isLast && (
                  <div className={cn(
                    getConnectorClasses(step.status),
                    "my-1 flex-1"
                  )} />
                )}
              </div>
              
              {/* Step content */}
              {showLabels && (
                <div className={cn(
                  "ml-4 pt-0.5 pb-6",
                  isLast && "pb-0"
                )}>
                  <div
                    className={cn(
                      "flex items-center",
                      interactive && !step.disabled && "cursor-pointer group",
                    )}
                    onClick={() => {
                      if (interactive && !step.disabled && onStepClick) {
                        onStepClick(step.id);
                      }
                    }}
                  >
                    <div>
                      <div className={cn(
                        "flex items-center",
                        step.status === "current" ? "text-primary font-medium" : 
                        step.status === "complete" ? "text-foreground" : 
                        step.status === "error" ? "text-destructive" : 
                        "text-muted-foreground",
                        interactive && !step.disabled && "group-hover:text-primary transition-colors"
                      )}>
                        <span>{step.label}</span>
                        {step.optional && (
                          <span className="ml-1 text-xs text-muted-foreground">(Optional)</span>
                        )}
                      </div>
                      
                      {step.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {step.description}
                        </p>
                      )}
                    </div>
                    
                    {interactive && !step.disabled && (
                      <ChevronRightIcon className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
  
  // Horizontal layout (default)
  return (
    <div className={cn("flex flex-col w-full", className)}>
      {/* Steps with connector lines */}
      <div className="flex items-center w-full">
        {stepsWithStatus.map((step, index) => {
          const isLast = index === stepsWithStatus.length - 1;
          
          return (
            <React.Fragment key={step.id}>
              <div
                className={cn(
                  "flex items-center justify-center",
                  interactive && !step.disabled && "cursor-pointer"
                )}
                onClick={() => {
                  if (interactive && !step.disabled && onStepClick) {
                    onStepClick(step.id);
                  }
                }}
              >
                <div className={getStepIconContainerClasses(step.status)}>
                  {getStepIcon(step)}
                </div>
              </div>
              
              {!isLast && (
                <div className={getConnectorClasses(step.status)} />
              )}
            </React.Fragment>
          );
        })}
      </div>
      
      {/* Step labels */}
      {showLabels && (
        <div className="flex items-start justify-between mt-2 w-full">
          {stepsWithStatus.map((step) => (
            <div
              key={`label-${step.id}`}
              className={cn(
                "flex flex-col items-center text-center",
                "w-full max-w-[120px] px-2",
                interactive && !step.disabled && "cursor-pointer"
              )}
              onClick={() => {
                if (interactive && !step.disabled && onStepClick) {
                  onStepClick(step.id);
                }
              }}
            >
              <div className={cn(
                "text-sm whitespace-nowrap",
                step.status === "current" ? "font-medium text-primary" : 
                step.status === "complete" ? "text-foreground" : 
                step.status === "error" ? "text-destructive" : 
                "text-muted-foreground"
              )}>
                {step.label}
              </div>
              
              {step.description && (
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}