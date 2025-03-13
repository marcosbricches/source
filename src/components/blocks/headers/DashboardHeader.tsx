// components/blocks/headers/DashboardHeader.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ArrowBigDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  showDatePicker?: boolean;
  showFilters?: boolean;
  showRefresh?: boolean;
  badge?: {
    text: string;
    variant?: "default" | "outline" | "secondary" | "destructive";
  };
  onRefresh?: () => void;
  onDateChange?: (date: Date | undefined) => void;
  onFilterChange?: (value: string) => void;
}

export function DashboardHeader({
  title,
  subtitle,
  showDatePicker = true,
  showFilters = true,
  showRefresh = true,
  badge,
  onRefresh,
  onDateChange,
  onFilterChange,
}: DashboardHeaderProps) {
  const [date, setDate] = React.useState<Date>();

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    if (onDateChange) onDateChange(newDate);
  };

  return (
    <div className="pb-6 mb-8 border-b">
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            {badge && (
              <Badge variant={badge.variant} className="mb-2">
                {badge.text}
              </Badge>
            )}
            <h1 className="text-2xl font-bold">{title}</h1>
            {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
          </div>

          <div className="flex items-center gap-2">
            {showDatePicker && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    {date ? date.toLocaleDateString() : "Selecionar data"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            )}

            {showFilters && (
              <Select onValueChange={onFilterChange}>
                <SelectTrigger className="w-[160px] h-9">
                  <SelectValue placeholder="Filtrar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="active">Ativos</SelectItem>
                  <SelectItem value="inactive">Inativos</SelectItem>
                </SelectContent>
              </Select>
            )}

            {showRefresh && (
              <Button variant="ghost" size="icon" onClick={onRefresh}>
                <ArrowBigDown className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}