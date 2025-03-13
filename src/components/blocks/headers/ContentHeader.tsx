// components/blocks/headers/ContentHeader.tsx
import React from "react";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface Action {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

interface ContentHeaderProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: Action[];
  sticky?: boolean;
}

export function ContentHeader({
  title,
  breadcrumbs,
  actions,
  sticky = false,
}: ContentHeaderProps) {
  return (
    <div 
      className={`
        py-4 mb-6 bg-background 
        ${sticky ? "sticky top-0 z-10 border-b" : ""}
      `}
    >
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="flex items-center space-x-1 text-sm mb-2">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <ChevronRightIcon className="h-4 w-4 text-muted-foreground mx-1" />
              )}
              
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-foreground">
                  {item.icon && <span className="mr-1 inline-flex items-center">{item.icon}</span>}
                  {item.label}
                </span>
              ) : (
                <a 
                  href={item.href || "#"} 
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                >
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  {item.label}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        
        {actions && actions.length > 0 && (
          <div className="flex items-center space-x-2">
            {actions.map((action, i) => (
              <Button 
                key={i} 
                variant={action.variant || "default"} 
                onClick={action.onClick}
              >
                {action.icon && <span className="mr-2">{action.icon}</span>}
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}