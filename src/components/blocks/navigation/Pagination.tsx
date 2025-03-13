// components/blocks/navigation/Pagination.tsx
"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  pageIndex: number;
  pageCount: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  showPageSizeChanger?: boolean;
  showPageJumper?: boolean;
  showFirstLastButtons?: boolean;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  siblingCount?: number;
  variant?: "default" | "outline" | "ghost" | "pills";
  size?: "sm" | "default" | "lg";
  disabled?: boolean;
  className?: string;
}

export function Pagination({
  pageIndex,
  pageCount,
  pageSize = 10,
  pageSizeOptions = [10, 20, 30, 50, 100],
  showPageSizeChanger = false,
  showPageJumper = false,
  showFirstLastButtons = false,
  onPageChange,
  onPageSizeChange,
  siblingCount = 1,
  variant = "default",
  size = "default",
  disabled = false,
  className,
}: PaginationProps) {
  const [jumpInputValue, setJumpInputValue] = React.useState("");
  
  // Generate page range with ellipsis
  const getPageRange = () => {
    const delta = siblingCount + 2; // Include current page + 2 boundaries
    
    // Basic range algorithm
    let pages = [];
    let left = Math.max(0, pageIndex - siblingCount);
    let right = Math.min(pageCount - 1, pageIndex + siblingCount);
    
    // Always include first and last page
    const hasLeftSpill = left > 1;
    const hasRightSpill = right < pageCount - 2;
    
    if (hasLeftSpill && !hasRightSpill) {
      // More pages on the left side
      left = Math.max(0, right - delta + 1);
      for (let i = left; i <= right; i++) {
        pages.push(i);
      }
      if (left > 1) pages.unshift(-1); // Left ellipsis
      if (left > 0) pages.unshift(0); // First page
      
    } else if (!hasLeftSpill && hasRightSpill) {
      // More pages on the right side
      right = Math.min(pageCount - 1, left + delta - 1);
      for (let i = left; i <= right; i++) {
        pages.push(i);
      }
      if (right < pageCount - 2) pages.push(-2); // Right ellipsis
      if (right < pageCount - 1) pages.push(pageCount - 1); // Last page
      
    } else if (hasLeftSpill && hasRightSpill) {
      // Pages on both sides
      for (let i = Math.max(1, pageIndex - siblingCount); i <= Math.min(pageIndex + siblingCount, pageCount - 2); i++) {
        pages.push(i);
      }
      pages.unshift(0); // First page
      pages.push(pageCount - 1); // Last page
      if (pages[1] - pages[0] > 1) pages.splice(1, 0, -1); // Left ellipsis
      if (pages[pages.length - 1] - pages[pages.length - 2] > 1) pages.splice(pages.length - 1, 0, -2); // Right ellipsis
      
    } else {
      // Few pages, show all
      for (let i = 0; i < pageCount; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };
  
  const handlePageJump = () => {
    const page = parseInt(jumpInputValue);
    if (!isNaN(page) && page >= 1 && page <= pageCount) {
      onPageChange?.(page - 1);
      setJumpInputValue("");
    }
  };
  
  // Get button variant based on the pagination variant
  const getButtonVariant = (isActive: boolean) => {
    if (isActive) {
      if (variant === "outline") return "outline";
      if (variant === "ghost") return "secondary";
      if (variant === "pills") return "default";
      return "default";
    }
    
    if (variant === "outline") return "outline";
    if (variant === "ghost") return "ghost";
    if (variant === "pills") return "outline";
    return "outline";
  };
  
  // Get button size class
  const getButtonSize = () => {
    if (size === "sm") return "h-8 w-8";
    if (size === "lg") return "h-10 w-10";
    return "h-9 w-9";
  };
  
  // Compute the page range
  const pages = getPageRange();
  
  return (
    <div className={cn("flex flex-col sm:flex-row items-center justify-between gap-4", className)}>
      {/* Page size changer */}
      {showPageSizeChanger && (
        <div className="flex items-center space-x-2">
          <p className="text-sm text-muted-foreground whitespace-nowrap">
            Rows per page:
          </p>
          <Select
            value={pageSize.toString()}
            onValueChange={(value) => onPageSizeChange?.(Number(value))}
            disabled={disabled}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={pageSize.toString()} />
            </SelectTrigger>
            <SelectContent>
              {pageSizeOptions.map((size) => (
                <SelectItem key={size} value={size.toString()}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      
      {/* Pagination controls */}
      <div className="flex items-center space-x-2">
        {/* First page button */}
        {showFirstLastButtons && (
          <Button
            variant={variant === "default" ? "outline" : variant}
            size="icon"
            className={getButtonSize()}
            disabled={pageIndex === 0 || disabled}
            onClick={() => onPageChange?.(0)}
          >
            <ChevronsLeftIcon className="h-4 w-4" />
            <span className="sr-only">First page</span>
          </Button>
        )}
        
        {/* Previous page button */}
        <Button
          variant={variant === "default" ? "outline" : variant}
          size="icon"
          className={getButtonSize()}
          disabled={pageIndex === 0 || disabled}
          onClick={() => onPageChange?.(pageIndex - 1)}
        >
          <ChevronLeftIcon className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Button>
        
        {/* Page buttons */}
        <div className="flex items-center">
          {pages.map((page, i) => {
            // Ellipsis
            if (page < 0) {
              return (
                <div key={`ellipsis-${i}`} className={cn(
                  "flex items-center justify-center",
                  getButtonSize()
                )}>
                  <MoreHorizontalIcon className="h-4 w-4 text-muted-foreground" />
                </div>
              );
            }
            
            // Page button
            return (
              <Button
                key={`page-${page}`}
                variant={getButtonVariant(page === pageIndex)}
                size={variant === "pills" ? "default" : "icon"}
                className={cn(
                  variant === "pills" ? "rounded-full px-3.5" : getButtonSize(),
                  page === pageIndex && variant !== "pills" && "text-primary-foreground"
                )}
                disabled={disabled}
                onClick={() => onPageChange?.(page)}
              >
                {page + 1}
              </Button>
            );
          })}
        </div>
        
        {/* Next page button */}
        <Button
          variant={variant === "default" ? "outline" : variant}
          size="icon"
          className={getButtonSize()}
          disabled={pageIndex >= pageCount - 1 || disabled}
          onClick={() => onPageChange?.(pageIndex + 1)}
        >
          <ChevronRightIcon className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Button>
        
        {/* Last page button */}
        {showFirstLastButtons && (
          <Button
            variant={variant === "default" ? "outline" : variant}
            size="icon"
            className={getButtonSize()}
            disabled={pageIndex >= pageCount - 1 || disabled}
            onClick={() => onPageChange?.(pageCount - 1)}
          >
            <ChevronsRightIcon className="h-4 w-4" />
            <span className="sr-only">Last page</span>
          </Button>
        )}
      </div>
      
      {/* Page jumper */}
      {showPageJumper && (
        <div className="flex items-center space-x-2">
          <p className="text-sm text-muted-foreground">Go to</p>
          <input
            type="number"
            min={1}
            max={pageCount}
            value={jumpInputValue}
            onChange={(e) => setJumpInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handlePageJump()}
            className="w-16 h-8 rounded-md border border-input bg-background px-3 py-1 text-sm"
            disabled={disabled}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={handlePageJump}
            disabled={disabled}
          >
            Go
          </Button>
        </div>
      )}
      
      {/* Page info - always include this */}
      <div className="text-sm text-muted-foreground whitespace-nowrap">
        Page {pageIndex + 1} of {pageCount}
      </div>
    </div>
  );
}