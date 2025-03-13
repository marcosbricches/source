// components/blocks/data/CardGrid.tsx
'use client'
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { SearchFilterBar } from "@/components/blocks/forms/SearchFilterBar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckIcon, ChevronRightIcon, EyeIcon, HelpCircleIcon, MoreHorizontalIcon, PlusIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface CardAction {
  label: string;
  icon?: React.ReactNode;
  onClick: (item: any) => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export interface CardGridProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  emptyMessage?: string;
  isLoading?: boolean;
  loadingItemCount?: number;
  columns?: number;
  spacing?: "default" | "compact" | "relaxed";
  aspectRatio?: "auto" | "square" | "video" | "portrait";
  hasSearch?: boolean;
  filters?: any[];
  activeFilters?: Record<string, any>;
  onSearch?: (query: string) => void;
  onFilter?: (filters: Record<string, any>) => void;
  sortOptions?: { value: string; label: string }[];
  onSortChange?: (value: string) => void;
  hasAddButton?: boolean;
  onAddClick?: () => void;
  addButtonLabel?: string;
  paginationComponent?: React.ReactNode;
  containerClassName?: string;
  skeletonComponent?: React.ReactNode;
}

export function CardGrid({
  items,
  renderItem,
  emptyMessage = "No items found",
  isLoading = false,
  loadingItemCount = 6,
  columns = 3,
  spacing = "default",
  aspectRatio = "auto",
  hasSearch = false,
  filters = [],
  activeFilters = {},
  onSearch,
  onFilter,
  sortOptions,
  onSortChange,
  hasAddButton = false,
  onAddClick,
  addButtonLabel = "Add New",
  paginationComponent,
  containerClassName = "",
  skeletonComponent,
}: CardGridProps) {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
  }[columns] || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  
  const spacingClasses = {
    compact: "gap-2",
    default: "gap-4",
    relaxed: "gap-6",
  }[spacing] || "gap-4";
  
  const aspectRatioClasses = {
    auto: "",
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  }[aspectRatio] || "";
  
  return (
    <div className={`w-full space-y-4 ${containerClassName}`}>
      {/* Controls */}
      {(hasSearch || sortOptions || hasAddButton) && (
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          {hasSearch && (
            <div className="flex-1 max-w-md">
              <SearchFilterBar
                placeholder="Search..."
                variant="compact"
                onSearch={onSearch}
                filters={filters}
                activeFilters={activeFilters}
                onFilter={onFilter}
              />
            </div>
          )}
          
          <div className="flex items-center gap-2 self-end">
            {sortOptions && onSortChange && (
              <Select onValueChange={onSortChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            
            {hasAddButton && (
              <Button onClick={onAddClick}>
                <PlusIcon className="h-4 w-4 mr-2" />
                {addButtonLabel}
              </Button>
            )}
          </div>
        </div>
      )}
      
      {/* Grid */}
      <div className={`grid ${columnClasses} ${spacingClasses}`}>
        {isLoading
          ? Array.from({ length: loadingItemCount }).map((_, index) => (
              <div key={`skeleton-${index}`} className={aspectRatioClasses}>
                {skeletonComponent ? (
                  skeletonComponent
                ) : (
                  <Card className="h-full">
                    <CardHeader>
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-3 w-1/3" />
                    </CardHeader>
                    <CardContent className="pb-0">
                      <Skeleton className="h-24 w-full rounded" />
                    </CardContent>
                    <CardFooter className="flex justify-between pt-4">
                      <Skeleton className="h-9 w-20 rounded" />
                      <Skeleton className="h-9 w-9 rounded-full" />
                    </CardFooter>
                  </Card>
                )}
              </div>
            ))
          : items.length === 0
          ? (
              <div className="col-span-full flex justify-center items-center py-12 border rounded-lg bg-muted/5">
                <div className="text-center space-y-2">
                  <HelpCircleIcon className="mx-auto h-8 w-8 text-muted-foreground/60" />
                  <h3 className="text-lg font-medium">{emptyMessage}</h3>
                  {hasAddButton && (
                    <Button onClick={onAddClick} variant="outline" className="mt-2">
                      <PlusIcon className="h-4 w-4 mr-2" />
                      {addButtonLabel}
                    </Button>
                  )}
                </div>
              </div>
            )
          : items.map((item, index) => (
              <div key={item.id || index} className={aspectRatioClasses}>
                {renderItem(item, index)}
              </div>
            ))}
      </div>
      
      {/* Pagination */}
      {paginationComponent && (
        <div className="flex justify-center mt-4">
          {paginationComponent}
        </div>
      )}
    </div>
  );
}

// Export a basic card component that can be used with CardGrid
export function ItemCard({ 
  item, 
  title, 
  description, 
  image, 
  footer, 
  badge,
  actions,
  onClick
}: { 
  item: any, 
  title: React.ReactNode, 
  description?: React.ReactNode, 
  image?: React.ReactNode,
  footer?: React.ReactNode,
  badge?: {
    text: string,
    variant?: "default" | "outline" | "secondary" | "destructive"
  },
  actions?: CardAction[],
  onClick?: () => void
}) {
  return (
    <Card className={`h-full overflow-hidden flex flex-col ${onClick ? "cursor-pointer hover:border-primary transition-colors" : ""}`}>
      {/* Card image */}
      {image && (
        <div className="relative">
          {image}
          {badge && (
            <div className="absolute top-2 right-2">
              <Badge variant={badge.variant}>{badge.text}</Badge>
            </div>
          )}
        </div>
      )}
      
      <CardHeader className={`${!image ? "pt-4" : "pt-3"} pb-2`}>
        {badge && !image && (
          <Badge className="mb-2 w-fit" variant={badge.variant}>{badge.text}</Badge>
        )}
        <CardTitle className="text-base">
          {onClick ? (
            <button 
              onClick={onClick} 
              className="hover:underline text-left flex items-center w-full"
            >
              <span>{title}</span>
              <ChevronRightIcon className="ml-1 h-4 w-4 shrink-0 opacity-50" />
            </button>
          ) : (
            title
          )}
        </CardTitle>
        {description && <CardDescription className="line-clamp-2">{description}</CardDescription>}
      </CardHeader>
      
      <CardContent className="pb-2 flex-1">
        {item.content}
      </CardContent>
      
      <CardFooter className="pt-2 flex justify-between">
        {footer || <div />}
        
        {actions && actions.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {actions.map((action, index) => (
                <React.Fragment key={index}>
                  <DropdownMenuItem 
                    onClick={() => action.onClick(item)}
                    className={action.variant === "destructive" ? "text-destructive focus:text-destructive" : ""}
                  >
                    {action.icon && <span className="mr-2">{action.icon}</span>}
                    {action.label}
                  </DropdownMenuItem>
                  {index < actions.length - 1 && action.variant === "destructive" && (
                    <DropdownMenuSeparator />
                  )}
                </React.Fragment>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </CardFooter>
    </Card>
  );
}