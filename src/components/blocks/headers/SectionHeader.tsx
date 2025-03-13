// components/blocks/headers/SectionHeader.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Action {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

interface Tab {
  value: string;
  label: string;
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: Action;
  tabs?: Tab[];
  defaultTab?: string;
  onTabChange?: (value: string) => void;
  className?: string;
  variant?: "default" | "tabs" | "minimal";
}

export function SectionHeader({
  title,
  description,
  action,
  tabs,
  defaultTab,
  onTabChange,
  className = "",
  variant = "default",
}: SectionHeaderProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          {description && variant !== "tabs" && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        
        {action && (
          <Button 
            variant={action.variant || "outline"} 
            size="sm" 
            onClick={action.onClick}
          >
            {action.icon && <span className="mr-2">{action.icon}</span>}
            {action.label}
          </Button>
        )}
      </div>
      
      {tabs && variant === "tabs" && (
        <Tabs defaultValue={defaultTab || tabs[0].value} onValueChange={onTabChange}>
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}
      
      {variant !== "minimal" && <Separator />}
    </div>
  );
}