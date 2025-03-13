// components/blocks/forms/SearchFilterBar.tsx
'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FilterIcon, Search, ChevronDown, SlidersHorizontal, XCircleIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FilterForm } from "./FilterForm";

interface FilterOption {
  id: string;
  label: string;
  type: "select" | "text" | "number" | "date" | "daterange" | "switch" | "slider" | "radio";
  placeholder?: string;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
}

interface SearchFilterBarProps {
  onSearch?: (query: string) => void;
  onFilter?: (filters: Record<string, any>) => void;
  placeholder?: string;
  filters?: FilterOption[];
  activeFilters?: Record<string, any>;
  variant?: "default" | "compact" | "expanded";
  showFilterLabels?: boolean;
  showFilterCount?: boolean;
}

export function SearchFilterBar({
  onSearch,
  onFilter,
  placeholder = "Search...",
  filters = [],
  activeFilters = {},
  variant = "default",
  showFilterLabels = true,
  showFilterCount = true,
}: SearchFilterBarProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  
  const activeFilterCount = Object.keys(activeFilters).length;
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };
  
  const handleFilter = (values: Record<string, any>) => {
    if (onFilter) {
      onFilter(values);
    }
    setIsFilterOpen(false);
  };
  
  const handleClearFilters = () => {
    if (onFilter) {
      onFilter({});
    }
  };
  
  const handleClearSearch = () => {
    setSearchQuery("");
    if (onSearch) {
      onSearch("");
    }
  };
  
  if (variant === "compact") {
    return (
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <form onSubmit={handleSearch}>
            <Input
              type="text"
              placeholder={placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            {searchQuery && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full aspect-square"
                onClick={handleClearSearch}
              >
                <XCircleIcon className="h-4 w-4 text-muted-foreground" />
              </Button>
            )}
          </form>
        </div>
        
        {filters.length > 0 && (
          <DropdownMenu open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <FilterIcon className="h-4 w-4" />
                {showFilterCount && activeFilterCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <FilterForm
                title="Filters"
                filters={filters}
                onApply={handleFilter}
                onReset={handleClearFilters}
                activeFilters={activeFilters}
                variant="dropdown"
              />
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    );
  }
  
  if (variant === "expanded") {
    return (
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="relative flex-1">
            <form onSubmit={handleSearch} className="flex-1">
              <Input
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              {searchQuery && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full aspect-square"
                  onClick={handleClearSearch}
                >
                  <XCircleIcon className="h-4 w-4 text-muted-foreground" />
                </Button>
              )}
            </form>
          </div>
          
          <div className="flex items-center gap-2 self-end">
            {filters.length > 0 && (
              <Button
                variant={isFilterOpen ? "default" : "outline"}
                size="sm"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="gap-1"
              >
                <FilterIcon className="h-4 w-4" />
                <span>Filters</span>
                {showFilterCount && activeFilterCount > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {activeFilterCount}
                  </Badge>
                )}
              </Button>
            )}
            
            <Button type="submit" size="sm" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
        
        {isFilterOpen && (
          <FilterForm
            filters={filters}
            onApply={handleFilter}
            onReset={handleClearFilters}
            activeFilters={activeFilters}
            variant="inline"
          />
        )}
        
        {activeFilterCount > 0 && !isFilterOpen && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {Object.entries(activeFilters).map(([key, value]) => {
              const filter = filters.find(f => f.id === key);
              if (!filter) return null;
              
              let displayValue: string;
              if (filter.type === "select") {
                displayValue = filter.options?.find(o => o.value === value)?.label || value.toString();
              } else if (filter.type === "switch") {
                displayValue = value ? "Yes" : "No";
              } else if (filter.type === "date" && value instanceof Date) {
                displayValue = value.toLocaleDateString();
              } else {
                displayValue = value.toString();
              }
              
              return (
                <Badge variant="outline" key={key} className="pl-2 pr-1 py-1">
                  <span className="mr-1">
                    {showFilterLabels ? `${filter.label}: ` : ""}{displayValue}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 ml-1"
                    onClick={() => {
                      const newFilters = { ...activeFilters };
                      delete newFilters[key];
                      if (onFilter) onFilter(newFilters);
                    }}
                  >
                    <XCircleIcon className="h-3 w-3" />
                  </Button>
                </Badge>
              );
            })}
            <Button variant="ghost" size="sm" onClick={handleClearFilters} className="h-7 px-2 py-0">
              Clear all
            </Button>
          </div>
        )}
      </div>
    );
  }
  
  // Default variant
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <form onSubmit={handleSearch} className="flex-1">
          <Input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          {searchQuery && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full aspect-square"
              onClick={handleClearSearch}
            >
              <XCircleIcon className="h-4 w-4 text-muted-foreground" />
            </Button>
          )}
        </form>
      </div>
      
      {filters.length > 0 && (
        <DropdownMenu open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-1">
              <FilterIcon className="h-4 w-4" />
              <span>Filters</span>
              {showFilterCount && activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {activeFilterCount}
                </Badge>
              )}
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <FilterForm
              title="Filters"
              filters={filters}
              onApply={handleFilter}
              onReset={handleClearFilters}
              activeFilters={activeFilters}
              variant="dropdown"
            />
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      
      <Button type="submit" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}