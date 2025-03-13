// components/blocks/forms/SettingsGroup.tsx
'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { AlertCircleIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon, InfoIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SettingItem {
  id: string;
  label: string;
  description?: string;
  type: "text" | "number" | "email" | "password" | "textarea" | "select" | "switch" | "checkbox" | "custom";
  placeholder?: string;
  options?: { value: string; label: string }[];
  defaultValue?: any;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  helpText?: string;
  badge?: {
    text: string;
    variant?: "default" | "outline" | "secondary" | "destructive";
  };
  customRender?: React.ReactNode;
}

interface SettingSection {
  id: string;
  title: string;
  description?: string;
  settings: SettingItem[];
}

interface SettingsGroupProps {
  title: string;
  description?: string;
  sections: SettingSection[];
  onSave?: (values: Record<string, any>) => void;
  onCancel?: () => void;
  variant?: "card" | "simple" | "accordion";
  submitLabel?: string;
  cancelLabel?: string;
  showDividers?: boolean;
  collapsible?: boolean;
}

export function SettingsGroup({
  title,
  description,
  sections,
  onSave,
  onCancel,
  variant = "card",
  submitLabel = "Save changes",
  cancelLabel = "Cancel",
  showDividers = true,
  collapsible = false,
}: SettingsGroupProps) {
  const [values, setValues] = React.useState<Record<string, any>>({});
  const [expanded, setExpanded] = React.useState(!collapsible);
  const [dirty, setDirty] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  
  // Initialize values with default values from settings
  React.useEffect(() => {
    const initialValues: Record<string, any> = {};
    
    sections.forEach((section) => {
      section.settings.forEach((setting) => {
        if (setting.defaultValue !== undefined) {
          initialValues[setting.id] = setting.defaultValue;
        }
      });
    });
    
    setValues(initialValues);
  }, [sections]);
  
  const handleChange = (id: string, value: any) => {
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
    
    setDirty(true);
  };
  
  const handleSave = async () => {
    if (onSave) {
      setSaving(true);
      
      try {
        await onSave(values);
        setDirty(false);
      } finally {
        setSaving(false);
      }
    }
  };
  
  const renderSettingControl = (setting: SettingItem) => {
    if (setting.type === "custom" && setting.customRender) {
      return setting.customRender;
    }
    
    switch (setting.type) {
      case "text":
      case "number":
      case "email":
      case "password":
        return (
          <Input
            id={setting.id}
            type={setting.type}
            placeholder={setting.placeholder}
            value={values[setting.id] || ""}
            onChange={(e) => handleChange(setting.id, e.target.value)}
            required={setting.required}
            readOnly={setting.readOnly}
            disabled={setting.disabled}
          />
        );
      case "textarea":
        return (
          <Textarea
            id={setting.id}
            placeholder={setting.placeholder}
            value={values[setting.id] || ""}
            onChange={(e) => handleChange(setting.id, e.target.value)}
            required={setting.required}
            readOnly={setting.readOnly}
            disabled={setting.disabled}
          />
        );
      case "select":
        return (
          <Select
            value={values[setting.id]?.toString() || ""}
            onValueChange={(value) => handleChange(setting.id, value)}
            disabled={setting.disabled}
          >
            <SelectTrigger id={setting.id}>
              <SelectValue placeholder={setting.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {setting.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "switch":
        return (
          <div className="flex items-center space-x-2">
            <Switch
              id={setting.id}
              checked={values[setting.id] || false}
              onCheckedChange={(checked) => handleChange(setting.id, checked)}
              disabled={setting.disabled}
            />
            <Label htmlFor={setting.id} className="cursor-pointer">
              {values[setting.id] ? "Enabled" : "Disabled"}
            </Label>
          </div>
        );
      case "checkbox":
        return (
          <div className="flex items-top space-x-2">
            <Checkbox
              id={setting.id}
              checked={values[setting.id] || false}
              onCheckedChange={(checked) => handleChange(setting.id, checked)}
              disabled={setting.disabled}
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor={setting.id} className="text-sm cursor-pointer">
                {setting.label}
              </Label>
              {setting.description && (
                <p className="text-muted-foreground text-xs">
                  {setting.description}
                </p>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  // Accordion variant (different arrangement)
  if (variant === "accordion") {
    return (
      <div className="w-full space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={onCancel} disabled={saving || !dirty}>
              {cancelLabel}
            </Button>
            <Button onClick={handleSave} disabled={saving || !dirty}>
              {saving ? "Saving..." : submitLabel}
            </Button>
          </div>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {sections.map((section) => (
            <AccordionItem key={section.id} value={section.id}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-col items-start">
                  <h3 className="text-sm font-medium">{section.title}</h3>
                  {section.description && (
                    <p className="text-xs text-muted-foreground">{section.description}</p>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 py-2">
                  {section.settings.map((setting) => (
                    <div key={setting.id} className="space-y-2">
                      {setting.type !== "checkbox" && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Label htmlFor={setting.id} className="text-sm font-medium">
                              {setting.label}
                              {setting.required && <span className="text-destructive ml-1">*</span>}
                            </Label>
                            
                            {setting.badge && (
                              <Badge variant={setting.badge.variant}>{setting.badge.text}</Badge>
                            )}
                          </div>
                          
                          {setting.helpText && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">{setting.helpText}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </div>
                      )}
                      
                      {setting.description && setting.type !== "checkbox" && (
                        <p className="text-sm text-muted-foreground">
                          {setting.description}
                        </p>
                      )}
                      
                      {renderSettingControl(setting)}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }
  
  // Simple variant (no card)
  if (variant === "simple") {
    return (
      <div className="w-full space-y-8">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{title}</h2>
            
            {collapsible && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? (
                  <ChevronUpIcon className="h-4 w-4" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4" />
                )}
              </Button>
            )}
          </div>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        
        {expanded && (
          <>
            {sections.map((section, index) => (
              <div key={section.id} className="space-y-6">
                {(index > 0 && showDividers) && <Separator />}
                
                <div className="space-y-2">
                  <h3 className="text-base font-medium">{section.title}</h3>
                  {section.description && (
                    <p className="text-sm text-muted-foreground">
                      {section.description}
                    </p>
                  )}
                </div>
                
                <div className="grid gap-6">
                  {section.settings.map((setting) => (
                    <div key={setting.id} className={`space-y-2 ${setting.type === "checkbox" ? "" : "grid sm:grid-cols-3 gap-4"}`}>
                      {setting.type !== "checkbox" && (
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Label htmlFor={setting.id} className="text-sm font-medium">
                              {setting.label}
                              {setting.required && <span className="text-destructive ml-1">*</span>}
                            </Label>
                            
                            {setting.badge && (
                              <Badge variant={setting.badge.variant}>{setting.badge.text}</Badge>
                            )}
                          </div>
                          
                          {setting.description && (
                            <p className="text-xs text-muted-foreground">
                              {setting.description}
                            </p>
                          )}
                        </div>
                      )}
                      
                      <div className={setting.type === "checkbox" ? "" : "sm:col-span-2"}>
                        <div className="flex items-center gap-2">
                          {renderSettingControl(setting)}
                          
                          {setting.helpText && setting.type !== "checkbox" && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">{setting.helpText}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={onCancel} disabled={saving || !dirty}>
                {cancelLabel}
              </Button>
              <Button onClick={handleSave} disabled={saving || !dirty}>
                {saving ? "Saving..." : submitLabel}
              </Button>
            </div>
          </>
        )}
      </div>
    );
  }
  
  // Default card variant
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          
          {collapsible && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <ChevronUpIcon className="h-4 w-4" />
              ) : (
                <ChevronDownIcon className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </CardHeader>
      
      {expanded && (
        <>
          <CardContent className="space-y-6">
            {sections.map((section, index) => (
              <div key={section.id} className="space-y-4">
                {(index > 0 && showDividers) && <Separator className="my-6" />}
                
                <div className="space-y-1">
                  <h3 className="text-sm font-medium">{section.title}</h3>
                  {section.description && (
                    <p className="text-sm text-muted-foreground">
                      {section.description}
                    </p>
                  )}
                </div>
                
                <div className="grid gap-6">
                  {section.settings.map((setting) => (
                    <div key={setting.id} className="space-y-2">
                      {setting.type !== "checkbox" && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Label htmlFor={setting.id} className="text-sm font-medium">
                              {setting.label}
                              {setting.required && <span className="text-destructive ml-1">*</span>}
                            </Label>
                            
                            {setting.badge && (
                              <Badge variant={setting.badge.variant}>{setting.badge.text}</Badge>
                            )}
                          </div>
                          
                          {setting.helpText && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">{setting.helpText}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </div>
                      )}
                      
                      {setting.description && setting.type !== "checkbox" && (
                        <p className="text-xs text-muted-foreground">
                          {setting.description}
                        </p>
                      )}
                      
                      {renderSettingControl(setting)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
          
          <CardFooter className="flex justify-between border-t pt-6">
            <div>
              {dirty && (
                <div className="flex items-center text-sm text-yellow-600 dark:text-yellow-500">
                  <AlertCircleIcon className="h-4 w-4 mr-1" />
                  <span>Unsaved changes</span>
                </div>
              )}
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={onCancel} disabled={saving || !dirty}>
                {cancelLabel}
              </Button>
              <Button onClick={handleSave} disabled={saving || !dirty}>
                {saving ? (
                  "Saving..."
                ) : (
                  <span className="flex items-center">
                    <CheckIcon className="h-4 w-4 mr-1" />
                    {submitLabel}
                  </span>
                )}
              </Button>
            </div>
          </CardFooter>
        </>
      )}
    </Card>
  );
}