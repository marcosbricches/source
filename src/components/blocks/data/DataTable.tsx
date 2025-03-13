// components/blocks/data/DataTable.tsx
'use client'
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { SearchFilterBar } from "@/components/blocks/forms/SearchFilterBar";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  DownloadIcon,
  FilterIcon,
  MoreHorizontalIcon,
  RefreshCcwIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface Column {
  id: string;
  header: React.ReactNode;
  cell?: (row: any) => React.ReactNode;
  sortable?: boolean;
  width?: string;
  align?: "left" | "center" | "right";
}

export interface RowAction {
  label: string;
  icon?: React.ReactNode;
  onClick: (row: any) => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export interface BulkAction {
  label: string;
  icon?: React.ReactNode;
  onClick: (selectedRows: any[]) => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export interface DataTableProps {
  columns: Column[];
  data: any[];
  isLoading?: boolean;
  selectedRows?: any[];
  onSelectRows?: (rows: any[]) => void;
  rowActions?: RowAction[];
  bulkActions?: BulkAction[];
  hasSearch?: boolean;
  hasPagination?: boolean;
  hasColumnSelection?: boolean;
  hasFilters?: boolean;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  emptyMessage?: string;
  variant?: "default" | "compact" | "striped" | "bordered";
  filters?: any[];
  activeFilters?: Record<string, any>;
  onFilter?: (filters: Record<string, any>) => void;
  onSearch?: (query: string) => void;
  onRefresh?: () => void;
  onExport?: () => void;
  containerClassName?: string;
}

export function DataTable({
  columns,
  data,
  isLoading = false,
  selectedRows = [],
  onSelectRows,
  rowActions,
  bulkActions,
  hasSearch = true,
  hasPagination = true,
  hasColumnSelection = false,
  hasFilters = false,
  pageIndex = 0,
  pageSize = 10,
  pageCount = 1,
  onPageChange,
  onPageSizeChange,
  emptyMessage = "No results found",
  variant = "default",
  filters = [],
  activeFilters = {},
  onFilter,
  onSearch,
  onRefresh,
  onExport,
  containerClassName = "",
}: DataTableProps) {
  const [visibleColumns, setVisibleColumns] = React.useState<string[]>(
    columns.map((column) => column.id)
  );
  const [sortColumn, setSortColumn] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc");
  
  const hasRowSelection = !!onSelectRows;
  
  const handleSort = (columnId: string) => {
    if (sortColumn === columnId) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnId);
      setSortDirection("asc");
    }
  };
  
  const handleSelectAllRows = (checked: boolean) => {
    if (onSelectRows) {
      if (checked) {
        onSelectRows(data);
      } else {
        onSelectRows([]);
      }
    }
  };
  
  const handleSelectRow = (row: any, checked: boolean) => {
    if (onSelectRows) {
      if (checked) {
        onSelectRows([...selectedRows, row]);
      } else {
        onSelectRows(selectedRows.filter((r) => r.id !== row.id));
      }
    }
  };
  
  const isRowSelected = (row: any) => {
    return selectedRows.some((r) => r.id === row.id);
  };
  
  const isAllRowsSelected = data.length > 0 && selectedRows.length === data.length;
  
  const handleToggleColumn = (columnId: string) => {
    if (visibleColumns.includes(columnId)) {
      setVisibleColumns(visibleColumns.filter((id) => id !== columnId));
    } else {
      setVisibleColumns([...visibleColumns, columnId]);
    }
  };
  
  const renderTableHead = (column: Column) => {
    const isSorted = sortColumn === column.id;
    
    return (
      <div className="flex items-center space-x-1">
        <span>{column.header}</span>
        {column.sortable && (
          <button
            className="ml-1 rounded-sm p-0.5 hover:bg-muted/50"
            onClick={() => handleSort(column.id)}
          >
            {isSorted ? (
              sortDirection === "asc" ? (
                <ArrowUpIcon className="h-3.5 w-3.5" />
              ) : (
                <ArrowDownIcon className="h-3.5 w-3.5" />
              )
            ) : (
              <div className="h-3.5 w-3.5 opacity-30">
                <ArrowUpIcon className="h-3.5 w-3.5" />
              </div>
            )}
          </button>
        )}
      </div>
    );
  };
  
  const renderTableCell = (row: any, column: Column) => {
    if (column.cell) {
      return column.cell(row);
    }
    
    return row[column.id];
  };
  
  const visibleColumnsData = columns.filter((column) =>
    visibleColumns.includes(column.id)
  );
  
  const getTableClassNames = () => {
    switch (variant) {
      case "compact":
        return "border-collapse text-sm";
      case "striped":
        return "border-collapse [&_tbody_tr:nth-child(odd)]:bg-muted/50";
      case "bordered":
        return "border-collapse [&_th]:border [&_td]:border [&_th]:border-border [&_td]:border-border";
      default:
        return "border-collapse";
    }
  };
  
  return (
    <div className={`w-full space-y-4 ${containerClassName}`}>
      {/* Table Controls */}
      {(hasSearch || hasFilters || hasColumnSelection || onRefresh || onExport) && (
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            {hasSearch && (
              <div className="flex-1">
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
            
            <div className="flex items-center space-x-2">
              {hasColumnSelection && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9">
                      <SlidersHorizontalIcon className="h-4 w-4 mr-2" />
                      Columns
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {columns.map((column) => (
                      <DropdownMenuItem key={column.id}>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            checked={visibleColumns.includes(column.id)}
                            onCheckedChange={() => handleToggleColumn(column.id)}
                            id={`column-${column.id}`}
                          />
                          <label
                            htmlFor={`column-${column.id}`}
                            className="text-sm cursor-pointer"
                          >
                            {typeof column.header === "string"
                              ? column.header
                              : column.id}
                          </label>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
              
              {hasFilters && !filters?.length && (
                <Button variant="outline" size="sm" className="h-9">
                  <FilterIcon className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              )}
              
              {onRefresh && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                  onClick={onRefresh}
                >
                  <RefreshCcwIcon className="h-4 w-4" />
                </Button>
              )}
              
              {onExport && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9"
                  onClick={onExport}
                >
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Export
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Bulk Actions */}
      {hasRowSelection && selectedRows.length > 0 && bulkActions && (
        <div className="bg-muted/30 border rounded-md p-2 flex items-center justify-between animate-in fade-in">
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isAllRowsSelected}
              onCheckedChange={(checked) => handleSelectAllRows(!!checked)}
            />
            <span className="text-sm">
              {selectedRows.length} {selectedRows.length === 1 ? "item" : "items"} selected
            </span>
          </div>
          <div className="flex items-center space-x-2">
            {bulkActions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "outline"}
                size="sm"
                onClick={() => action.onClick(selectedRows)}
              >
                {action.icon && <span className="mr-2">{action.icon}</span>}
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      )}
      
      {/* Table */}
      <div className="rounded-md border overflow-hidden">
        <div className="max-w-full overflow-auto">
          <Table className={getTableClassNames()}>
            <TableHeader>
              <TableRow>
                {hasRowSelection && (
                  <TableHead style={{ width: "40px" }} className="text-center">
                    <Checkbox
                      checked={isAllRowsSelected}
                      onCheckedChange={(checked) => handleSelectAllRows(!!checked)}
                    />
                  </TableHead>
                )}
                
                {visibleColumnsData.map((column) => (
                  <TableHead
                    key={column.id}
                    style={{ width: column.width }}
                    className={
                      column.align === "right"
                        ? "text-right"
                        : column.align === "center"
                        ? "text-center"
                        : "text-left"
                    }
                  >
                    {column.sortable ? (
                      <button
                        className="flex items-center hover:text-foreground text-muted-foreground font-medium text-xs uppercase tracking-wider"
                        onClick={() => handleSort(column.id)}
                      >
                        {renderTableHead(column)}
                      </button>
                    ) : (
                      <span className="text-muted-foreground font-medium text-xs uppercase tracking-wider">
                        {column.header}
                      </span>
                    )}
                  </TableHead>
                ))}
                
                {rowActions && (
                  <TableHead className="text-right" style={{ width: "60px" }}>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, rowIndex) => (
                  <TableRow key={`skeleton-${rowIndex}`}>
                    {hasRowSelection && (
                      <TableCell>
                        <Skeleton className="h-4 w-4 rounded" />
                      </TableCell>
                    )}
                    
                    {visibleColumnsData.map((column, cellIndex) => (
                      <TableCell
                        key={`skeleton-${rowIndex}-${cellIndex}`}
                        className={
                          column.align === "right"
                            ? "text-right"
                            : column.align === "center"
                            ? "text-center"
                            : "text-left"
                        }
                      >
                        <Skeleton className="h-5 w-24 rounded" />
                      </TableCell>
                    ))}
                    
                    {rowActions && (
                      <TableCell>
                        <div className="flex justify-end">
                          <Skeleton className="h-8 w-8 rounded-full" />
                        </div>
                      </TableCell>
                    )}
                  </TableRow>
                ))
              ) : data.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={
                      visibleColumnsData.length +
                      (hasRowSelection ? 1 : 0) +
                      (rowActions ? 1 : 0)
                    }
                    className="h-32 text-center"
                  >
                    {emptyMessage}
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row, rowIndex) => (
                  <TableRow
                    key={row.id || `row-${rowIndex}`}
                    className={isRowSelected(row) ? "bg-muted/60" : ""}
                  >
                    {hasRowSelection && (
                      <TableCell className="text-center">
                        <Checkbox
                          checked={isRowSelected(row)}
                          onCheckedChange={(checked) => handleSelectRow(row, !!checked)}
                        />
                      </TableCell>
                    )}
                    
                    {visibleColumnsData.map((column) => (
                      <TableCell
                        key={`${row.id || rowIndex}-${column.id}`}
                        className={
                          column.align === "right"
                            ? "text-right"
                            : column.align === "center"
                            ? "text-center"
                            : "text-left"
                        }
                      >
                        {renderTableCell(row, column)}
                      </TableCell>
                    ))}
                    
                    {rowActions && (
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreHorizontalIcon className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {rowActions.map((action, actionIndex) => (
                              <React.Fragment key={actionIndex}>
                                <DropdownMenuItem
                                  onClick={() => action.onClick(row)}
                                  className={action.variant === "destructive" ? "text-destructive focus:text-destructive" : ""}
                                >
                                  {action.icon && (
                                    <span className="mr-2">{action.icon}</span>
                                  )}
                                  {action.label}
                                </DropdownMenuItem>
                                {actionIndex < rowActions.length - 1 && action.variant === "destructive" && (
                                  <DropdownMenuSeparator />
                                )}
                              </React.Fragment>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    )}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      
      {/* Pagination */}
      {hasPagination && (
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 pt-2">
          <div className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-medium">
              {data.length > 0 ? pageIndex * pageSize + 1 : 0}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min((pageIndex + 1) * pageSize, (pageCount * pageSize))}
            </span>{" "}
            of{" "}
            <span className="font-medium">{pageCount * pageSize}</span> results
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <p className="text-sm whitespace-nowrap">Rows per page:</p>
              <Select
                value={pageSize.toString()}
                onValueChange={(value) => {
                  if (onPageSizeChange) {
                    onPageSizeChange(Number(value));
                  }
                }}
              >
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue placeholder={pageSize.toString()} />
                </SelectTrigger>
                <SelectContent>
                  {[5, 10, 20, 50, 100].map((size) => (
                    <SelectItem key={size} value={size.toString()}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onPageChange && onPageChange(0)}
                disabled={pageIndex === 0}
              >
                <ChevronsLeftIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onPageChange && onPageChange(pageIndex - 1)}
                disabled={pageIndex === 0}
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
              
              <div className="text-sm text-muted-foreground">
                Page {pageIndex + 1} of {pageCount}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onPageChange && onPageChange(pageIndex + 1)}
                disabled={pageIndex >= pageCount - 1}
              >
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onPageChange && onPageChange(pageCount - 1)}
                disabled={pageIndex >= pageCount - 1}
              >
                <ChevronsRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}