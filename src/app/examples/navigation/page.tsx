// app/examples/navigation/page.tsx
"use client"

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/blocks/navigation/Navbar";
import { Sidebar } from "@/components/blocks/navigation/Sidebar";
import { TabBar } from "@/components/blocks/navigation/TabBar";
import { Breadcrumbs } from "@/components/blocks/navigation/Breadcrumb";
import { Pagination } from "@/components/blocks/navigation/Pagination";
import { StepIndicator } from "@/components/blocks/navigation/StepIndicator";
import { Badge } from "@/components/ui/badge";

import {
  BookOpenIcon,
  BriefcaseIcon,
  CreditCardIcon,
  FileIcon,
  HomeIcon,
  LayoutDashboardIcon,
  LineChartIcon,
  MailIcon,
  Package2Icon,
  SearchIcon,
  SettingsIcon,
  ShoppingCartIcon,
  UsersIcon,
  LogOutIcon,
  BellIcon,
  UserIcon,
  BarChartIcon,
  LockIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

export default function NavigationExamplesPage() {
  const [activeTab, setActiveTab] = React.useState("dashboard");
  const [currentStep, setCurrentStep] = React.useState("step1");
  const [pageIndex, setPageIndex] = React.useState(0);
  
  // Common navbar items
  const navItems = [
    { label: "Dashboard", href: "#", icon: <LayoutDashboardIcon className="h-4 w-4" /> },
    { label: "Products", href: "#", icon: <Package2Icon className="h-4 w-4" /> },
    { label: "Customers", href: "#", icon: <UsersIcon className="h-4 w-4" /> },
    { 
      label: "Orders", 
      href: "#", 
      icon: <ShoppingCartIcon className="h-4 w-4" />,
      badge: { text: "5", variant: "default" } 
    },
    { label: "Analytics", href: "#", icon: <LineChartIcon className="h-4 w-4" /> },
  ];
  
  // User profile data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "",
    role: "Administrator"
  };
  
  // User menu items
  const userMenuItems = [
    { label: "Profile", href: "#", icon: <UserIcon className="h-4 w-4" /> },
    { label: "Settings", href: "#", icon: <SettingsIcon className="h-4 w-4" /> },
    { label: "Logout", onClick: () => console.log("Logout"), icon: <LogOutIcon className="h-4 w-4" />, variant: "destructive" },
  ];
  
  // Sidebar data
  const sidebarGroups = [
    {
      title: "Main",
      items: [
        { title: "Dashboard", href: "#", icon: <LayoutDashboardIcon className="h-4 w-4" /> },
        { title: "Products", href: "#", icon: <Package2Icon className="h-4 w-4" /> },
        { 
          title: "Orders", 
          href: "#", 
          icon: <ShoppingCartIcon className="h-4 w-4" />,
          badge: { content: "5", variant: "default" } 
        },
        { 
          title: "Customers", 
          icon: <UsersIcon className="h-4 w-4" />,
          items: [
            { title: "List", href: "#" },
            { title: "Details", href: "#" },
            { title: "Segments", href: "#" },
          ]
        },
      ]
    },
    {
      title: "Reports",
      items: [
        { title: "Analytics", href: "#", icon: <BarChartIcon className="h-4 w-4" /> },
        { title: "Finance", href: "#", icon: <CreditCardIcon className="h-4 w-4" /> },
        { title: "Documents", href: "#", icon: <FileIcon className="h-4 w-4" /> },
      ]
    },
    {
      title: "Account",
      items: [
        { title: "Settings", href: "#", icon: <SettingsIcon className="h-4 w-4" /> },
        { title: "Help", href: "#", icon: <BookOpenIcon className="h-4 w-4" /> },
      ]
    }
  ];
  
  // Tab data
  const tabs = [
    { label: "Dashboard", value: "dashboard", icon: <LayoutDashboardIcon className="h-4 w-4" /> },
    { label: "Products", value: "products", icon: <Package2Icon className="h-4 w-4" /> },
    { label: "Customers", value: "customers", icon: <UsersIcon className="h-4 w-4" /> },
    { 
      label: "Orders", 
      value: "orders", 
      icon: <ShoppingCartIcon className="h-4 w-4" />,
      badge: { content: "5", variant: "default" }
    },
    { label: "Invoices", value: "invoices", icon: <CreditCardIcon className="h-4 w-4" /> },
    { label: "Analytics", value: "analytics", icon: <LineChartIcon className="h-4 w-4" /> },
    { label: "Settings", value: "settings", icon: <SettingsIcon className="h-4 w-4" /> },
  ];
  
  // Breadcrumb data
  const breadcrumbItems = [
    { label: "Dashboard", href: "#", icon: <LayoutDashboardIcon className="h-4 w-4" /> },
    { label: "Products", href: "#", icon: <Package2Icon className="h-4 w-4" /> },
    { label: "Categories", href: "#" },
    { label: "Electronics", href: "#" },
    { label: "Smartphones", href: "#" },
    { label: "iPhone 14 Pro" },
  ];
  
  // Step data
  const steps = [
    { 
      id: "step1", 
      label: "Account", 
      description: "Personal information", 
      icon: <UserIcon className="h-4 w-4" /> 
    },
    { 
      id: "step2", 
      label: "Address", 
      description: "Shipping address", 
      icon: <HomeIcon className="h-4 w-4" /> 
    },
    { 
      id: "step3", 
      label: "Payment", 
      description: "Payment details", 
      icon: <CreditCardIcon className="h-4 w-4" /> 
    },
    { 
      id: "step4", 
      label: "Review", 
      description: "Review order", 
      icon: <CheckCircleIcon className="h-4 w-4" /> 
    },
  ];

  return (
    <div className="container mx-auto py-10 space-y-12">
      <h1 className="text-3xl font-bold">Navigation Components</h1>
      <p className="text-muted-foreground">Examples of components for navigating through the application.</p>
      
      <Separator />
      
      {/* Navbar Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Navbar</h2>
        <p className="text-muted-foreground">Navigation bars for application header navigation.</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Default Navbar</CardTitle>
            <CardDescription>Standard navigation with branding, links, and user menu</CardDescription>
          </CardHeader>
          <CardContent className="p-0 border-t">
            <Navbar 
              title="Devio Admin"
              navItems={navItems}
              user={user}
              userMenuItems={userMenuItems}
              hasSearch={true}
              hasNotifications={true}
              notificationCount={3}
              actions={[
                <Button key="action" variant="outline" size="sm">
                  Upgrade Plan
                </Button>
              ]}
            />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Minimal Navbar</CardTitle>
              <CardDescription>Simplified navigation with minimal styling</CardDescription>
            </CardHeader>
            <CardContent className="p-0 border-t">
              <Navbar 
                title="Devio Admin"
                navItems={navItems.slice(0, 4)}
                user={user}
                userMenuItems={userMenuItems}
                variant="minimal"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Centered Navbar</CardTitle>
              <CardDescription>Navigation with centered logo and links</CardDescription>
            </CardHeader>
            <CardContent className="p-0 border-t">
              <Navbar 
                title="Devio Admin"
                navItems={navItems.slice(0, 4)}
                user={user}
                hasNotifications={true}
                notificationCount={3}
                variant="centered"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Bordered Navbar</CardTitle>
              <CardDescription>Navigation with bordered sections</CardDescription>
            </CardHeader>
            <CardContent className="p-0 border-t">
              <Navbar 
                title="Devio Admin"
                navItems={navItems.slice(0, 4)}
                user={user}
                hasSearch={true}
                variant="bordered"
              />
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Sidebar Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Sidebar</h2>
        <p className="text-muted-foreground">Vertical navigation for application sidebar menus.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Default Sidebar</CardTitle>
              <CardDescription>Standard sidebar navigation with groups</CardDescription>
            </CardHeader>
            <CardContent className="p-0 border-t">
              <div className="h-[400px]">
                <Sidebar 
                  header={{
                    title: "Devio Admin",
                    description: "Dashboard"
                  }}
                  groups={sidebarGroups}
                  footer={{
                    user: user
                  }}
                  width="default"
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Compact Sidebar</CardTitle>
              <CardDescription>Sidebar with more compact styling</CardDescription>
            </CardHeader>
            <CardContent className="p-0 border-t">
              <div className="h-[400px]">
                <Sidebar 
                  header={{
                    title: "Devio Admin"
                  }}
                  groups={sidebarGroups}
                  variant="compact"
                  width="narrow"
                  showGroupDividers={true}
                />
              </div>
            </CardContent>
          </Card>

<Card>
  <CardHeader>
    <CardTitle>Bordered Sidebar</CardTitle>
    <CardDescription>Sidebar with bordered styling</CardDescription>
  </CardHeader>
  <CardContent className="p-0 border-t">
    <div className="h-[400px] p-4">
      <Sidebar 
        header={{
          title: "Devio Admin"
        }}
        groups={sidebarGroups}
        variant="bordered"
        width="default"
      />
    </div>
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Collapsible Sidebar</CardTitle>
    <CardDescription>Sidebar that can be collapsed to icons only</CardDescription>
  </CardHeader>
  <CardContent className="p-0 border-t">
    <div className="h-[400px]">
      <Sidebar 
        header={{
          title: "Devio Admin",
          description: "Dashboard"
        }}
        groups={sidebarGroups}
        footer={{
          user: user
        }}
        collapsible={true}
        collapsed={false}
        onCollapsedChange={(collapsed) => console.log("Collapsed:", collapsed)}
      />
    </div>
  </CardContent>
</Card>
</div>
</section>

{/* TabBar Examples */}
<section className="space-y-6">
<h2 className="text-2xl font-bold">Tab Bar</h2>
<p className="text-muted-foreground">Tab navigation for switching between content views.</p>

<Card>
<CardHeader>
  <CardTitle>Default Tab Bar</CardTitle>
  <CardDescription>Standard tabs with active state</CardDescription>
</CardHeader>
<CardContent className="p-6 border-t">
  <TabBar 
    tabs={tabs}
    value={activeTab}
    onValueChange={setActiveTab}
    scrollable={true}
  />
  <div className="mt-6 p-4 bg-muted/20 rounded-md text-center">
    Content for the {tabs.find(t => t.value === activeTab)?.label} tab
  </div>
</CardContent>
</Card>

<div className="grid grid-cols-1 gap-6">
<Card>
  <CardHeader>
    <CardTitle>Underline Tabs</CardTitle>
    <CardDescription>Tabs with underline indicator</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <TabBar 
      tabs={tabs.slice(0, 5)}
      value={activeTab}
      onValueChange={setActiveTab}
      variant="underline"
    />
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Outline Tabs</CardTitle>
    <CardDescription>Tabs with outline styling</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <TabBar 
      tabs={tabs.slice(0, 5)}
      value={activeTab}
      onValueChange={setActiveTab}
      variant="outline"
    />
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Pills Tabs</CardTitle>
    <CardDescription>Tabs with pill-shaped styling</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <TabBar 
      tabs={tabs.slice(0, 5)}
      value={activeTab}
      onValueChange={setActiveTab}
      variant="pills"
      alignment="center"
    />
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Enclosed Tabs</CardTitle>
    <CardDescription>Tabs with enclosed styling</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <TabBar 
      tabs={tabs.slice(0, 5)}
      value={activeTab}
      onValueChange={setActiveTab}
      variant="enclosed"
    />
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Responsive Tabs with More Menu</CardTitle>
    <CardDescription>Tabs with overflow handling via dropdown</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <TabBar 
      tabs={tabs}
      value={activeTab}
      onValueChange={setActiveTab}
      hideExtraContent={4}
      moreButtonLabel="More Tabs"
    />
  </CardContent>
</Card>
</div>
</section>

{/* Breadcrumbs Examples */}
<section className="space-y-6">
<h2 className="text-2xl font-bold">Breadcrumbs</h2>
<p className="text-muted-foreground">Hierarchical navigation indicators for page context.</p>

<Card>
<CardHeader>
  <CardTitle>Default Breadcrumbs</CardTitle>
  <CardDescription>Standard breadcrumbs with hierarchical path</CardDescription>
</CardHeader>
<CardContent className="p-6 border-t">
  <Breadcrumbs 
    items={breadcrumbItems}
    homeHref="#"
    showHome={true}
  />
</CardContent>
</Card>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<Card>
  <CardHeader>
    <CardTitle>Outline Breadcrumbs</CardTitle>
    <CardDescription>Breadcrumbs with outline styling</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <Breadcrumbs 
      items={breadcrumbItems}
      variant="outline"
    />
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Ghost Breadcrumbs</CardTitle>
    <CardDescription>Breadcrumbs with ghost button styling</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <Breadcrumbs 
      items={breadcrumbItems}
      variant="ghost"
    />
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Pills Breadcrumbs</CardTitle>
    <CardDescription>Breadcrumbs with pill-shaped styling</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <Breadcrumbs 
      items={breadcrumbItems}
      variant="pills"
    />
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Collapsed Breadcrumbs</CardTitle>
    <CardDescription>Breadcrumbs with maximum display limit</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <Breadcrumbs 
      items={breadcrumbItems}
      maxItems={3}
    />
  </CardContent>
</Card>
</div>
</section>

{/* Pagination Examples */}
<section className="space-y-6">
<h2 className="text-2xl font-bold">Pagination</h2>
<p className="text-muted-foreground">Components for navigating through multi-page data.</p>

<Card>
<CardHeader>
  <CardTitle>Default Pagination</CardTitle>
  <CardDescription>Standard pagination with page controls</CardDescription>
</CardHeader>
<CardContent className="p-6 border-t">
  <Pagination 
    pageIndex={pageIndex}
    pageCount={10}
    onPageChange={setPageIndex}
  />
</CardContent>
</Card>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<Card>
  <CardHeader>
    <CardTitle>Outline Pagination</CardTitle>
    <CardDescription>Pagination with outline styling</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <Pagination 
      pageIndex={pageIndex}
      pageCount={10}
      onPageChange={setPageIndex}
      variant="outline"
    />
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Ghost Pagination</CardTitle>
    <CardDescription>Pagination with ghost button styling</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <Pagination 
      pageIndex={pageIndex}
      pageCount={10}
      onPageChange={setPageIndex}
      variant="ghost"
    />
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Pills Pagination</CardTitle>
    <CardDescription>Pagination with pill-shaped styling</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <Pagination 
      pageIndex={pageIndex}
      pageCount={10}
      onPageChange={setPageIndex}
      variant="pills"
    />
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Full-Featured Pagination</CardTitle>
    <CardDescription>Pagination with additional controls</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <Pagination 
      pageIndex={pageIndex}
      pageCount={10}
      pageSize={20}
      onPageChange={setPageIndex}
      onPageSizeChange={(size) => console.log("Page size:", size)}
      showPageSizeChanger={true}
      showPageJumper={true}
      showFirstLastButtons={true}
    />
  </CardContent>
</Card>
</div>
</section>

{/* StepIndicator Examples */}
<section className="space-y-6">
<h2 className="text-2xl font-bold">Step Indicator</h2>
<p className="text-muted-foreground">Step indicators for multi-step processes and wizards.</p>

<Card>
<CardHeader>
  <CardTitle>Default Step Indicator</CardTitle>
  <CardDescription>Standard step indicator for wizards</CardDescription>
</CardHeader>
<CardContent className="p-6 border-t">
  <StepIndicator 
    steps={steps}
    currentStep={currentStep}
    onStepClick={setCurrentStep}
    interactive={true}
  />
  <div className="mt-8 p-6 bg-muted/20 rounded-md">
    <h3 className="text-lg font-medium mb-2">
      {steps.find(s => s.id === currentStep)?.label}
    </h3>
    <p className="text-muted-foreground">
      {steps.find(s => s.id === currentStep)?.description}
    </p>
    <div className="flex justify-between mt-6">
      <Button
        variant="outline"
        onClick={() => {
          const currentIndex = steps.findIndex(s => s.id === currentStep);
          if (currentIndex > 0) {
            setCurrentStep(steps[currentIndex - 1].id);
          }
        }}
        disabled={currentStep === steps[0].id}
      >
        <ChevronLeftIcon className="h-4 w-4 mr-2" />
        Previous
      </Button>
      <Button
        onClick={() => {
          const currentIndex = steps.findIndex(s => s.id === currentStep);
          if (currentIndex < steps.length - 1) {
            setCurrentStep(steps[currentIndex + 1].id);
          }
        }}
        disabled={currentStep === steps[steps.length - 1].id}
      >
        Next
        <ChevronRightIcon className="h-4 w-4 ml-2" />
      </Button>
    </div>
  </div>
</CardContent>
</Card>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<Card>
  <CardHeader>
    <CardTitle>Outline Step Indicator</CardTitle>
    <CardDescription>Step indicator with outline styling</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <StepIndicator 
      steps={steps}
      currentStep={currentStep}
      variant="outline"
    />
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Bullets Step Indicator</CardTitle>
    <CardDescription>Step indicator with bullet points</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <StepIndicator 
      steps={steps}
      currentStep={currentStep}
      variant="bullets"
    />
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Numbered Step Indicator</CardTitle>
    <CardDescription>Step indicator with numbers</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <StepIndicator 
      steps={steps}
      currentStep={currentStep}
      variant="numbered"
    />
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Vertical Step Indicator</CardTitle>
    <CardDescription>Step indicator with vertical orientation</CardDescription>
  </CardHeader>
  <CardContent className="p-6 border-t">
    <StepIndicator 
      steps={steps}
      currentStep={currentStep}
      orientation="vertical"
      interactive={true}
      onStepClick={setCurrentStep}
    />
  </CardContent>
</Card>
</div>
</section>
</div>
);
}