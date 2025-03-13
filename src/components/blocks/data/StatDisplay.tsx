// components/blocks/data/StatDisplay.tsx
'use client'
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart3Icon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";

export interface StatDisplayProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: string | number;
    direction: "up" | "down" | "neutral";
    label?: string;
  };
  isLoading?: boolean;
  variant?: "default" | "outline" | "filled";
  size?: "sm" | "default" | "lg";
  accentColor?: "default" | "success" | "warning" | "danger" | "info";
  onClick?: () => void;
}

export function StatDisplay({
  title,
  value,
  description,
  icon,
  trend,
  isLoading = false,
  variant = "default",
  size = "default",
  accentColor = "default",
  onClick,
}: StatDisplayProps) {
  const getIconContainerClasses = () => {
    const baseClasses = "rounded-md p-2 flex items-center justify-center";
    const sizeClasses = size === "sm" ? "h-8 w-8" : size === "lg" ? "h-12 w-12" : "h-10 w-10";
    
    let colorClasses = "bg-muted text-foreground";
    
    if (accentColor === "success") {
      colorClasses = "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    } else if (accentColor === "warning") {
      colorClasses = "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    } else if (accentColor === "danger") {
      colorClasses = "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    } else if (accentColor === "info") {
      colorClasses = "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    } else {
      colorClasses = "bg-primary/10 text-primary dark:bg-primary/20";
    }
    
    return `${baseClasses} ${sizeClasses} ${colorClasses}`;
  };
  
  const getTrendClasses = () => {
    if (!trend) return "";
    
    const baseClasses = "flex items-center gap-1 text-xs font-medium px-1.5 py-0.5 rounded";
    
    if (trend.direction === "up") {
      return `${baseClasses} text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30`;
    } else if (trend.direction === "down") {
      return `${baseClasses} text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/30`;
    } else {
      return `${baseClasses} text-muted-foreground bg-muted/50`;
    }
  };
  
  const getValueSize = () => {
    if (size === "sm") return "text-lg font-semibold";
    if (size === "lg") return "text-3xl font-bold";
    return "text-2xl font-bold";
  };
  
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="space-y-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-8 w-24" />
          {description && <Skeleton className="h-4 w-32" />}
        </div>
      );
    }
    
    return (
      <div className="space-y-1">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className={getValueSize()}>{value}</p>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    );
  };
  
  // Simple card with minimal styling
  if (variant === "outline") {
    return (
      <div className={`border rounded-lg p-4 ${onClick ? "cursor-pointer hover:border-primary/50 transition-colors" : ""}`} onClick={onClick}>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            {isLoading ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <p className={getValueSize()}>{value}</p>
            )}
          </div>
          {icon && (
            <div className={getIconContainerClasses()}>
              {icon}
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-2">
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
          {trend && !isLoading && (
            <div className={getTrendClasses()}>
              {trend.direction === "up" ? (
                <TrendingUpIcon className="h-3 w-3" />
              ) : trend.direction === "down" ? (
                <TrendingDownIcon className="h-3 w-3" />
              ) : null}
              <span>{trend.value}</span>
              {trend.label && (
                <span className="ml-0.5 text-muted-foreground/70">{trend.label}</span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  // Filled variant with background color
  if (variant === "filled") {
    let bgColor = "bg-card";
    let borderColor = "";
    
    if (accentColor === "success") {
      bgColor = "bg-green-50 dark:bg-green-900/20";
      borderColor = "border-green-200 dark:border-green-900/50";
    } else if (accentColor === "warning") {
      bgColor = "bg-yellow-50 dark:bg-yellow-900/20";
      borderColor = "border-yellow-200 dark:border-yellow-900/50";
    } else if (accentColor === "danger") {
      bgColor = "bg-red-50 dark:bg-red-900/20";
      borderColor = "border-red-200 dark:border-red-900/50";
    } else if (accentColor === "info") {
      bgColor = "bg-blue-50 dark:bg-blue-900/20";
      borderColor = "border-blue-200 dark:border-blue-900/50";
    } else {
      bgColor = "bg-primary/5 dark:bg-primary/10";
      borderColor = "border-primary/10 dark:border-primary/20";
    }
    
    return (
      <div 
        className={`border rounded-lg p-4 ${bgColor} ${borderColor} ${onClick ? "cursor-pointer hover:border-primary/50 transition-colors" : ""}`}
        onClick={onClick}
      >
        <div className="flex items-start justify-between">
          {icon && (
            <div className={getIconContainerClasses()}>
              {icon}
            </div>
          )}
          <div className="space-y-1 flex-1 ml-3">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            {isLoading ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <p className={getValueSize()}>{value}</p>
            )}
          </div>
          {trend && !isLoading && (
            <div className={getTrendClasses()}>
              {trend.direction === "up" ? (
                <TrendingUpIcon className="h-3 w-3" />
              ) : trend.direction === "down" ? (
                <TrendingDownIcon className="h-3 w-3" />
              ) : null}
              <span>{trend.value}</span>
            </div>
          )}
        </div>
        
        {description && (
          <p className="text-xs text-muted-foreground mt-2">{description}</p>
        )}
      </div>
    );
  }
  
  // Default card
  return (
    <Card onClick={onClick} className={onClick ? "cursor-pointer hover:border-primary/50 transition-colors" : ""}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && (
          <div className={getIconContainerClasses()}>
            {icon || <BarChart3Icon className="h-4 w-4" />}
          </div>
        )}
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-8 w-24" />
            {description && <Skeleton className="h-4 w-32" />}
          </div>
        ) : (
          <div className="space-y-1">
            <p className={getValueSize()}>{value}</p>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        
        {trend && !isLoading && (
          <div className={`${getTrendClasses()} mt-2`}>
            {trend.direction === "up" ? (
              <TrendingUpIcon className="h-3 w-3" />
            ) : trend.direction === "down" ? (
              <TrendingDownIcon className="h-3 w-3" />
            ) : null}
            <span>{trend.value}</span>
            {trend.label && (
              <span className="ml-0.5 text-xs text-muted-foreground/70">{trend.label}</span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}