// app/examples/headers/page.tsx

'use client'
import React from "react";
import { PageHeader } from "@/components/blocks/headers/PageHeader";
import { SectionHeader } from "@/components/blocks/headers/SectionHeader";
import { ContentHeader } from "@/components/blocks/headers/ContentHeader";
import { DashboardHeader } from "@/components/blocks/headers/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PlusIcon, DownloadIcon, SettingsIcon, HomeIcon, UsersIcon, FileTextIcon, UploadIcon } from "lucide-react";

export default function HeaderExamplesPage() {
  return (
    <div className="container mx-auto py-10 space-y-12">
      <h1 className="text-3xl font-bold">Header Components</h1>
      <p className="text-muted-foreground">Examples of different header components in various configurations.</p>
      
      <Separator />
      
      {/* Page Headers */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Page Headers</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Basic Page Header</CardTitle>
            <CardDescription>Simple header with just a title and subtitle</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <PageHeader 
              title="Products" 
              subtitle="Manage your product inventory and categories" 
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Page Header with Badge</CardTitle>
            <CardDescription>Header with a category badge</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <PageHeader 
              title="Monthly Revenue Report" 
              subtitle="Overview of this month's financial performance"
              badge={{
                text: "Finance",
                variant: "secondary"
              }}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Page Header with Actions</CardTitle>
            <CardDescription>Header with action buttons</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <PageHeader 
              title="Team Members" 
              subtitle="Manage your organization's team members"
              actions={[
                {
                  label: "Add Member",
                  icon: <PlusIcon className="h-4 w-4" />,
                  onClick: () => {},
                  variant: "default"
                },
                {
                  label: "Export",
                  icon: <DownloadIcon className="h-4 w-4" />,
                  onClick: () => {},
                  variant: "outline"
                }
              ]}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Full Featured Page Header</CardTitle>
            <CardDescription>Header with badge, back button, actions and decoration</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <PageHeader 
              title="Campaign Performance" 
              subtitle="Detailed analytics for your marketing campaign"
              badge={{
                text: "Marketing",
                variant: "default"
              }}
              hasBackButton={true}
              decoration={true}
              actions={[
                {
                  label: "Download Report",
                  icon: <DownloadIcon className="h-4 w-4" />,
                  onClick: () => {},
                  variant: "outline"
                },
                {
                  label: "Settings",
                  icon: <SettingsIcon className="h-4 w-4" />,
                  onClick: () => {},
                  variant: "ghost"
                }
              ]}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Centered Page Header</CardTitle>
            <CardDescription>Header with centered alignment</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <PageHeader 
              title="Welcome to Your Dashboard" 
              subtitle="Get started with your new account"
              align="center"
              badge={{
                text: "New",
                variant: "default"
              }}
              decoration={true}
            />
          </CardContent>
        </Card>
      </section>
      
      {/* Section Headers */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Section Headers</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Basic Section Header</CardTitle>
            <CardDescription>Simple section header with title and description</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <SectionHeader 
              title="Recent Orders" 
              description="Your most recent customer orders" 
            />
            <div className="p-8 bg-muted/20 rounded-md mt-4 text-center text-muted-foreground">
              Content area
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Section Header with Action</CardTitle>
            <CardDescription>Section header with an action button</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <SectionHeader 
              title="Team Members" 
              description="People in your organization"
              action={{
                label: "Add Member",
                icon: <PlusIcon className="h-4 w-4" />,
                onClick: () => {},
              }}
            />
            <div className="p-8 bg-muted/20 rounded-md mt-4 text-center text-muted-foreground">
              Content area
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Section Header with Tabs</CardTitle>
            <CardDescription>Section header with tabbed navigation</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <SectionHeader 
              title="Analytics Overview" 
              variant="tabs"
              tabs={[
                { value: "daily", label: "Daily" },
                { value: "weekly", label: "Weekly" },
                { value: "monthly", label: "Monthly" },
                { value: "yearly", label: "Yearly" },
              ]}
              defaultTab="weekly"
              action={{
                label: "Export",
                icon: <DownloadIcon className="h-4 w-4" />,
                onClick: () => {},
                variant: "outline"
              }}
            />
            <div className="p-8 bg-muted/20 rounded-md mt-4 text-center text-muted-foreground">
              Content area for selected tab
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Minimal Section Header</CardTitle>
            <CardDescription>Lightweight section header without separator</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <SectionHeader 
              title="Quick Stats" 
              variant="minimal"
              action={{
                label: "Refresh",
                onClick: () => {},
                variant: "ghost"
              }}
            />
            <div className="p-8 bg-muted/20 rounded-md mt-4 text-center text-muted-foreground">
              Content area
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* Content Headers */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Content Headers</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Basic Content Header</CardTitle>
            <CardDescription>Simple header with just a title</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <ContentHeader title="Customer Details" />
            <div className="p-8 bg-muted/20 rounded-md text-center text-muted-foreground">
              Content area
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Content Header with Breadcrumbs</CardTitle>
            <CardDescription>Header with navigational breadcrumbs</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <ContentHeader 
              title="Edit Customer" 
              breadcrumbs={[
                { label: "Dashboard", href: "#", icon: <HomeIcon className="h-3.5 w-3.5" /> },
                { label: "Customers", href: "#", icon: <UsersIcon className="h-3.5 w-3.5" /> },
                { label: "Jane Smith" }
              ]}
            />
            <div className="p-8 bg-muted/20 rounded-md text-center text-muted-foreground">
              Content area
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Content Header with Actions</CardTitle>
            <CardDescription>Header with action buttons</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <ContentHeader 
              title="Invoice #INV-2023-004" 
              actions={[
                {
                  label: "Download PDF",
                  icon: <DownloadIcon className="h-4 w-4" />,
                  onClick: () => {},
                  variant: "outline"
                },
                {
                  label: "Print",
                  icon: <FileTextIcon className="h-4 w-4" />,
                  onClick: () => {},
                  variant: "default"
                }
              ]}
            />
            <div className="p-8 bg-muted/20 rounded-md text-center text-muted-foreground">
              Content area
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Full Featured Content Header</CardTitle>
            <CardDescription>Header with breadcrumbs, actions and sticky positioning</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6 overflow-hidden" style={{ maxHeight: "300px", overflowY: "auto" }}>
            <ContentHeader 
              title="Product Details" 
              breadcrumbs={[
                { label: "Home", href: "#", icon: <HomeIcon className="h-3.5 w-3.5" /> },
                { label: "Products", href: "#" },
                { label: "Premium Subscription" }
              ]}
              actions={[
                {
                  label: "Edit",
                  onClick: () => {},
                  variant: "outline"
                },
                {
                  label: "Publish",
                  icon: <UploadIcon className="h-4 w-4" />,
                  onClick: () => {},
                  variant: "default"
                }
              ]}
              sticky={true}
            />
            {/* Dummy content to demonstrate sticky header */}
            {Array(10).fill(0).map((_, i) => (
              <p key={i} className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur 
                interdum, nisl nunc egestas nisi, euismod aliquam nisl nunc egestas nisi.
              </p>
            ))}
          </CardContent>
        </Card>
      </section>
      
      {/* Dashboard Headers */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Dashboard Headers</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Basic Dashboard Header</CardTitle>
            <CardDescription>Dashboard header with title and controls</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <DashboardHeader 
              title="Analytics Dashboard" 
              subtitle="Monitor your key performance indicators"
            />
            <div className="p-8 bg-muted/20 rounded-md text-center text-muted-foreground">
              Dashboard content area
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Dashboard Header with Badge</CardTitle>
            <CardDescription>Dashboard header with category badge</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <DashboardHeader 
              title="Financial Overview" 
              subtitle="Track your revenue and expenses"
              badge={{
                text: "Premium",
                variant: "default"
              }}
            />
            <div className="p-8 bg-muted/20 rounded-md text-center text-muted-foreground">
              Dashboard content area
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Minimal Dashboard Header</CardTitle>
            <CardDescription>Dashboard header without date picker or filters</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-6">
            <DashboardHeader 
              title="Quick Overview" 
              showDatePicker={false}
              showFilters={false}
            />
            <div className="p-8 bg-muted/20 rounded-md text-center text-muted-foreground">
              Dashboard content area
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}