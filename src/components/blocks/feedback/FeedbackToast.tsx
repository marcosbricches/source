// components/blocks/feedback/FeedbackToast.tsx
"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Toaster, toast as sonnerToast } from "sonner";
import { cn } from "@/lib/utils";
import { 
  AlertCircleIcon, 
  AlertTriangleIcon, 
  BellIcon, 
  CheckCircleIcon, 
  InfoIcon
} from "lucide-react";

export interface ToastAction {
  label: string;
  onClick: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export interface Toast {
  id?: string;
  title?: string;
  description?: React.ReactNode;
  action?: ToastAction;
  icon?: React.ReactNode;
  variant?: "default" | "success" | "info" | "warning" | "error" | "destructive";
  duration?: number;
}

// Componente para visualização nos exemplos
export function FeedbackToastContent({
  title,
  description,
  action,
  icon,
  variant = "default",
}: Toast) {
  // Default icons based on variant
  const getDefaultIcon = () => {
    switch (variant) {
      case "info":
        return <InfoIcon className="h-5 w-5" />;
      case "success":
        return <CheckCircleIcon className="h-5 w-5" />;
      case "warning":
        return <AlertTriangleIcon className="h-5 w-5" />;
      case "error":
      case "destructive":
        return <AlertCircleIcon className="h-5 w-5" />;
      default:
        return <BellIcon className="h-5 w-5" />;
    }
  };
  
  const effectiveIcon = icon || getDefaultIcon();
  
  return (
    <div className="flex gap-3">
      {effectiveIcon && (
        <div className={cn(
          "flex-shrink-0",
          variant === "success" && "text-green-600 dark:text-green-500",
          variant === "info" && "text-blue-600 dark:text-blue-500",
          variant === "warning" && "text-amber-600 dark:text-amber-500",
          variant === "error" && "text-red-600 dark:text-red-500",
          variant === "destructive" && "text-destructive",
        )}>
          {effectiveIcon}
        </div>
      )}
      
      <div className="flex-1">
        {title && <div className="font-semibold">{title}</div>}
        {description && <div className="text-sm text-muted-foreground">{description}</div>}
        
        {action && (
          <div className="mt-2">
            <Button 
              size="sm" 
              variant={action.variant || "outline"} 
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// Toast container component
export function ToastContainer() {
  return (
    <Toaster 
      position="bottom-right"
      expand={false}
      richColors
      closeButton
    />
  );
}

// Função para mostrar um toast
export function showToast(params: Toast) {
  const { title, description, action, icon, variant, duration } = params;
  
  // Mapear nosso variant para o do Sonner
  const sonnerVariant = variant === "destructive" ? "error" : (variant as "success" | "info" | "warning" | "error" | undefined);
  
  if (action) {
    sonnerToast(title, {
      description,
      icon,
      duration: duration || 5000,
      action: {
        label: action.label,
        onClick: action.onClick
      },
      style: variant === "destructive" ? { backgroundColor: "hsl(var(--destructive))", color: "hsl(var(--destructive-foreground))" } : undefined,
      className: cn(
        variant === "success" && "sonner-toast-success",
        variant === "info" && "sonner-toast-info",
        variant === "warning" && "sonner-toast-warning"
      )
    });
  } else {
    if (!sonnerVariant) {
      sonnerToast(title, {
        description,
        icon,
        duration: duration || 5000,
      });
    } else {
      sonnerToast[sonnerVariant](title, {
        description,
        icon,
        duration: duration || 5000,
      });
    }
  }
}

// Funções simplificadas para tipos específicos de toast
export const toast = {
  default: (params: Omit<Toast, "variant">) => showToast({ ...params, variant: "default" }),
  success: (params: Omit<Toast, "variant">) => showToast({ ...params, variant: "success" }),
  info: (params: Omit<Toast, "variant">) => showToast({ ...params, variant: "info" }),
  warning: (params: Omit<Toast, "variant">) => showToast({ ...params, variant: "warning" }),
  error: (params: Omit<Toast, "variant">) => showToast({ ...params, variant: "error" }),
  destructive: (params: Omit<Toast, "variant">) => showToast({ ...params, variant: "destructive" }),
};