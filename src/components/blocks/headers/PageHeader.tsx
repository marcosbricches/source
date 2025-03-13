// components/blocks/headers/PageHeader.tsx
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

interface Action {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: {
    text: string;
    variant?: "default" | "outline" | "secondary" | "destructive";
  };
  actions?: Action[];
  hasBackButton?: boolean;
  decoration?: boolean;
  align?: "left" | "center";
}

export function PageHeader({
  title,
  subtitle,
  badge,
  actions,
  hasBackButton = false,
  decoration = false,
  align = "left",
}: PageHeaderProps) {
  return (
    <div className="relative pb-6 mb-6 border-b">
      {decoration && (
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-[80px] -z-10 overflow-hidden">
          <div className="w-full h-full opacity-40" 
               style={{backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '10px 10px'}} />
        </div>
      )}
      
      <div className={`flex flex-col space-y-2 ${align === "center" ? "items-center text-center" : ""}`}>
        {badge && (
          <Badge variant={badge.variant} className="w-fit mb-1">
            {badge.text}
          </Badge>
        )}
        
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            {hasBackButton && (
              <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeftIcon className="h-4 w-4" />
              </Button>
            )}
            
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
          
          {actions && actions.length > 0 && (
            <div className="flex items-center gap-2">
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
        
        {subtitle && (
          <p className="text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
}