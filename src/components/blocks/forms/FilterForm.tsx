// components/blocks/forms/FilterForm.tsx
'use client'
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { DatePicker } from "@/components/ui/date-picker";
import { Separator } from "@/components/ui/separator";
import { FilterIcon, XIcon } from "lucide-react";

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

interface FilterFormProps {
  title?: string;
  filters: FilterOption[];
  onApply?: (filters: Record<string, any>) => void;
  onReset?: () => void;
  activeFilters?: Record<string, any>;
  variant?: "card" | "inline" | "dropdown" | "sidebar";
  collapsible?: boolean;
}

export function FilterForm({
  title = "Filters",
  filters,
  onApply,
  onReset,
  activeFilters = {},
  variant = "card",
  collapsible = false,
}: FilterFormProps) {
  const [filterValues, setFilterValues] = React.useState<Record<string, any>>(activeFilters);
  const [expanded, setExpanded] = React.useState(!collapsible);
  
  const handleChange = (id: string, value: any) => {
    setFilterValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  
  const handleApply = () => {
    if (onApply) {
      onApply(filterValues);
    }
  };
  
  const handleReset = () => {
    setFilterValues({});
    if (onReset) {
      onReset();
    }
  };
  
  const activeFilterCount = Object.keys(activeFilters).length;
  
  const renderFilterControl = (filter: FilterOption) => {
    switch (filter.type) {
      case "select":
        return (
          <Select
            value={filterValues[filter.id]?.toString() || ""}
            onValueChange={(value) => handleChange(filter.id, value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={filter.placeholder || `Select ${filter.label}`} />
            </SelectTrigger>
            <SelectContent>
              {filter.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "text":
        return (
          <Input
            type="text"
            placeholder={filter.placeholder || `Enter ${filter.label}`}
            value={filterValues[filter.id] || ""}
            onChange={(e) => handleChange(filter.id, e.target.value)}
          />
        );
      case "number":
        return (
          <Input
            type="number"
            placeholder={filter.placeholder || `Enter ${filter.label}`}
            value={filterValues[filter.id] || ""}
            onChange={(e) => handleChange(filter.id, e.target.value)}
            min={filter.min}
            max={filter.max}
            step={filter.step || 1}
          />
        );
      case "date":
        return (
          <DatePicker
            date={filterValues[filter.id]}
            setDate={(date) => handleChange(filter.id, date)}
            placeholder={filter.placeholder || `Select ${filter.label}`}
          />
        );
      case "switch":
        return (
          <div className="flex items-center space-x-2">
            <Switch
              id={`switch-${filter.id}`}
              checked={filterValues[filter.id] || false}
              onCheckedChange={(checked) => handleChange(filter.id, checked)}
            />
            <Label htmlFor={`switch-${filter.id}`} className="text-sm cursor-pointer">
              {filterValues[filter.id] ? "Yes" : "No"}
            </Label>
          </div>
        );
      case "slider":
        return (
          <div className="space-y-4">
            <Slider
              value={[filterValues[filter.id] || filter.min || 0]}
              min={filter.min || 0}
              max={filter.max || 100}
              step={filter.step || 1}
              onValueChange={(value) => handleChange(filter.id, value[0])}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{filter.min || 0}</span>
              <span>Current: {filterValues[filter.id] || filter.min || 0}</span>
              <span>{filter.max || 100}</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  // Sidebar variant
  if (variant === "sidebar") {
    return (
      <div className="w-full max-w-xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          {collapsible && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Collapse" : "Expand"}
            </Button>
          )}
        </div>
        
        {activeFilterCount > 0 && (
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
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
                    <span className="mr-1">{filter.label}: {displayValue}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 ml-1"
                      onClick={() => {
                        const newValues = { ...filterValues };
                        delete newValues[key];
                        setFilterValues(newValues);
                        if (onApply) onApply(newValues);
                      }}
                    >
                      <XIcon className="h-3 w-3" />
                    </Button>
                  </Badge>
                );
              })}
            </div>
            <Button variant="ghost" size="sm" onClick={handleReset}>
              Clear all
            </Button>
          </div>
        )}
        
        {expanded && (
          <div className="space-y-6">
            {filters.map((filter) => (
              <div key={filter.id} className="space-y-2">
                <Label htmlFor={filter.id}>{filter.label}</Label>
                {renderFilterControl(filter)}
              </div>
            ))}
            
            <div className="flex justify-end space-x-2 pt-2">
              <Button variant="outline" onClick={handleReset}>
                Reset
              </Button>
              <Button onClick={handleApply}>
                Apply Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  // Inline variant
  if (variant === "inline") {
    return (
      <div className="w-full space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <FilterIcon className="h-4 w-4 text-muted-foreground" />
            <h3 className="text-sm font-medium">{title}</h3>
          </div>
          
          <div className="flex flex-wrap gap-2 flex-1">
            {filters.map((filter) => (
              <div key={filter.id} className="w-auto min-w-[180px] flex-shrink-0">
                {renderFilterControl(filter)}
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-2 ml-auto">
            <Button variant="outline" size="sm" onClick={handleReset}>
              Reset
            </Button>
            <Button size="sm" onClick={handleApply}>
              Apply
            </Button>
          </div>
        </div>
        
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Active:</span>
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
                  <span className="mr-1">{filter.label}: {displayValue}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 ml-1"
                    onClick={() => {
                      const newValues = { ...filterValues };
                      delete newValues[key];
                      setFilterValues(newValues);
                      if (onApply) onApply(newValues);
                    }}
                  >
                    <XIcon className="h-3 w-3" />
                  </Button>
                </Badge>
              );
            })}
            <Button variant="ghost" size="sm" onClick={handleReset} className="h-7">
              Clear all
            </Button>
          </div>
        )}
      </div>
    );
  }
  
  // Dropdown variant - used within a dropdown
  if (variant === "dropdown") {
    return (
      <div className="w-full min-w-[320px] p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">{title}</h3>
          {activeFilterCount > 0 && (
            <Button variant="ghost" size="sm" onClick={handleReset} className="h-7 text-xs">
              Clear all
            </Button>
          )}
        </div>
        
        <div className="space-y-4">
          {filters.map((filter) => (
            <div key={filter.id} className="space-y-1.5">
              <Label htmlFor={filter.id} className="text-xs">
                {filter.label}
              </Label>
              {renderFilterControl(filter)}
            </div>
          ))}
        </div>
        
        <div className="flex justify-end space-x-2 pt-2">
          <Button size="sm" onClick={handleApply} className="w-full">
            Apply Filters
          </Button>
        </div>
      </div>
    );
  }
  
  // Default card variant
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          {collapsible && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Collapse" : "Expand"}
            </Button>
          )}
        </div>
        
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
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
                  <span className="mr-1">{filter.label}: {displayValue}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 ml-1"
                    onClick={() => {
                      const newValues = { ...filterValues };
                      delete newValues[key];
                      setFilterValues(newValues);
                      if (onApply) onApply(newValues);
                    }}
                  >
                    <XIcon className="h-3 w-3" />
                  </Button>
                </Badge>
              );
            })}
            <Button variant="ghost" size="sm" onClick={handleReset} className="ml-auto h-6">
              Clear all
            </Button>
          </div>
        )}
      </CardHeader>
      
      {expanded && (
        <>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filters.map((filter) => (
                <div key={filter.id} className="space-y-2">
                  <Label htmlFor={filter.id}>{filter.label}</Label>
                  {renderFilterControl(filter)}
                </div>
              ))}
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
            <Button onClick={handleApply}>
              Apply Filters
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}