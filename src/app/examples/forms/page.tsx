// app/examples/forms/page.tsx
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LoginForm } from "@/components/blocks/forms/LoginForm";
import { FilterForm } from "@/components/blocks/forms/FilterForm";
import { SearchFilterBar } from "@/components/blocks/forms/SearchFilterBar";
import { SettingsGroup } from "@/components/blocks/forms/SettingsGroup";

export default function FormExamplesPage() {
  // Sample filters data for the filter components
  const filters = [
    {
      id: "category",
      label: "Category",
      type: "select" as const,
      options: [
        { value: "all", label: "All Categories" },
        { value: "electronics", label: "Electronics" },
        { value: "clothing", label: "Clothing" },
        { value: "furniture", label: "Furniture" },
      ],
    },
    {
      id: "price",
      label: "Price Range",
      type: "slider" as const,
      min: 0,
      max: 1000,
      step: 10,
    },
    {
      id: "date",
      label: "Date Added",
      type: "date" as const,
    },
    {
      id: "inStock",
      label: "In Stock Only",
      type: "switch" as const,
    },
  ];
  
  // Sample active filters
  const activeFilters = {
    category: "electronics",
    inStock: true,
  };
  
  // Sample settings data
  const settingsSections = [
    {
      id: "general",
      title: "General Settings",
      description: "Manage your account preferences",
      settings: [
        {
          id: "displayName",
          label: "Display Name",
          description: "This is your public display name",
          type: "text" as const,
          placeholder: "Your Name",
          defaultValue: "John Doe",
          required: true,
        },
        {
          id: "email",
          label: "Email",
          description: "We'll use this email to notify you",
          type: "email" as const,
          placeholder: "your.email@example.com",
          defaultValue: "john.doe@example.com",
          required: true,
        },
        {
          id: "language",
          label: "Language",
          description: "Your preferred language for the interface",
          type: "select" as const,
          options: [
            { value: "en", label: "English" },
            { value: "es", label: "Spanish" },
            { value: "fr", label: "French" },
          ],
          defaultValue: "en",
        },
      ],
    },
    {
      id: "notifications",
      title: "Notification Preferences",
      description: "Control when and how you receive notifications",
      settings: [
        {
          id: "emailNotifications",
          label: "Email Notifications",
          description: "Receive notifications via email",
          type: "switch" as const,
          defaultValue: true,
        },
        {
          id: "marketingEmails",
          label: "Marketing Emails",
          description: "Receive marketing and promotional emails",
          type: "checkbox" as const,
          defaultValue: false,
        },
        {
          id: "notificationFrequency",
          label: "Notification Frequency",
          description: "How often should we send you notifications",
          type: "select" as const,
          options: [
            { value: "immediate", label: "Immediately" },
            { value: "daily", label: "Daily Digest" },
            { value: "weekly", label: "Weekly Digest" },
          ],
          defaultValue: "immediate",
          helpText: "Immediate notifications are sent as events occur, while digests summarize all activities at the specified interval.",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-10 space-y-12">
      <h1 className="text-3xl font-bold">Form Block Components</h1>
      <p className="text-muted-foreground">Examples of form-related components in various configurations.</p>
      
      <Separator />
      
      {/* Login Forms */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Login Forms</h2>
        <p className="text-muted-foreground">Authentication form components with different layouts and variants.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Default Login Form</CardTitle>
              <CardDescription>Card-based login form with standard layout</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <LoginForm />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Compact Login Form</CardTitle>
              <CardDescription>Simplified login without card container</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <LoginForm 
                variant="compact"
                error="Invalid username or password. Please try again."
              />
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Split Login Form with Social Login</CardTitle>
            <CardDescription>Two-column layout with branding area and social sign-in options</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm 
              variant="split"
              showSocialLogin={true}
            />
          </CardContent>
        </Card>
      </section>
      
      {/* Filter Forms */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Filter Forms</h2>
        <p className="text-muted-foreground">Components for filtering data with different layouts.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Filter Form</CardTitle>
              <CardDescription>Standard card-based filter component</CardDescription>
            </CardHeader>
            <CardContent>
              <FilterForm 
                title="Filter Products"
                filters={filters}
                activeFilters={activeFilters}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Sidebar Filter Form</CardTitle>
              <CardDescription>Vertical filter panel for sidebar layouts</CardDescription>
            </CardHeader>
            <CardContent>
              <FilterForm 
                title="Filter Products"
                filters={filters}
                activeFilters={activeFilters}
                variant="sidebar"
                collapsible={true}
              />
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Inline Filter Form</CardTitle>
            <CardDescription>Horizontal filter layout for inline filtering</CardDescription>
          </CardHeader>
          <CardContent>
            <FilterForm 
              title="Filter Products"
              filters={filters}
              activeFilters={activeFilters}
              variant="inline"
            />
          </CardContent>
        </Card>
      </section>
      
      {/* Search Filter Bars */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Search & Filter Bars</h2>
        <p className="text-muted-foreground">Combined search and filter components for quick data access.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Default Search Filter Bar</CardTitle>
              <CardDescription>Standard search with dropdown filters</CardDescription>
            </CardHeader>
            <CardContent>
              <SearchFilterBar 
                placeholder="Search products..."
                filters={filters}
                activeFilters={activeFilters}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Compact Search Filter Bar</CardTitle>
              <CardDescription>Space-efficient search and filter component</CardDescription>
            </CardHeader>
            <CardContent>
              <SearchFilterBar 
                placeholder="Search products..."
                filters={filters}
                activeFilters={activeFilters}
                variant="compact"
              />
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Expanded Search Filter Bar</CardTitle>
            <CardDescription>Full-featured search with expandable filter panel</CardDescription>
          </CardHeader>
          <CardContent>
            <SearchFilterBar 
              placeholder="Search products..."
              filters={filters}
              activeFilters={activeFilters}
              variant="expanded"
            />
          </CardContent>
        </Card>
      </section>
      
      {/* Settings Groups */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Settings Groups</h2>
        <p className="text-muted-foreground">Settings and preference management components.</p>
        
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Settings</CardTitle>
              <CardDescription>Standard settings component in card container</CardDescription>
            </CardHeader>
            <CardContent>
              <SettingsGroup 
                title="Account Settings"
                description="Manage your account preferences and notifications"
                sections={settingsSections}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Simple Settings</CardTitle>
              <CardDescription>Streamlined settings layout without card container</CardDescription>
            </CardHeader>
            <CardContent>
              <SettingsGroup 
                title="Account Settings"
                description="Manage your account preferences and notifications"
                sections={settingsSections}
                variant="simple"
                collapsible={true}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Accordion Settings</CardTitle>
              <CardDescription>Collapsible settings sections</CardDescription>
            </CardHeader>
            <CardContent>
              <SettingsGroup 
                title="Account Settings"
                description="Manage your account preferences and notifications"
                sections={settingsSections}
                variant="accordion"
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}