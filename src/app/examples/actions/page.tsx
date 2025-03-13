// app/examples/actions/page.tsx
"use client"

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { CommandBar } from "@/components/blocks/actions/CommandBar";
import { ActionMenu } from "@/components/blocks/actions/ActionMenu";
import { BulkActions } from "@/components/blocks/actions/BulkActions";
import { ActionCard } from "@/components/blocks/actions/ActionCard";
import { ActionGroup } from "@/components/blocks/actions/ActionGroup";
import { ActionButton } from "@/components/blocks/actions/ActionButton";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  BookmarkIcon,
  CheckIcon,
  ClipboardCopyIcon,
  CopyIcon,
  DeleteIcon,
  Download,
  DownloadIcon,
  EditIcon,
  EyeIcon,
  FileIcon,
  FilterIcon,
  ImageIcon,
  InfoIcon,
  LayoutDashboardIcon,
  LayoutGridIcon,
  LayoutListIcon,
  MoreHorizontalIcon,
  PackageIcon,
  PaperclipIcon,
  PlusIcon,
  PrinterIcon,
  RefreshCcwIcon,
  Save,
  SendIcon,
  SettingsIcon,
  ShareIcon,
  ShoppingCartIcon,
  SlidersHorizontalIcon,
  StarIcon,
  Trash2Icon,
  UploadIcon,
  UsersIcon,
  ZoomInIcon,
  BellIcon,
  MailIcon,
  ExternalLinkIcon,
  
} from "lucide-react";

export default function ActionExamplesPage() {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  
  // Fake data for example
  const items = [
    { id: "1", name: "Document 1", modified: "2 days ago" },
    { id: "2", name: "Document 2", modified: "1 week ago" },
    { id: "3", name: "Document 3", modified: "2 hours ago" },
    { id: "4", name: "Document 4", modified: "Just now" },
    { id: "5", name: "Document 5", modified: "3 days ago" }
  ];
  
  // Toggle item selection
  const toggleItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  // Clear selection
  const clearSelection = () => {
    setSelectedItems([]);
  };
  
  // Simulated action with loading and success states
  const simulateAction = () => { 
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="container mx-auto py-10 space-y-12">
      <h1 className="text-3xl font-bold">Action Components</h1>
      <p className="text-muted-foreground">Components for user interactions and actions.</p>
      
      <Separator />
      
      {/* CommandBar Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Command Bars</h2>
        <p className="text-muted-foreground">Toolbars with multiple action buttons for common operations.</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Default Command Bar</CardTitle>
            <CardDescription>Standard command bar with multiple actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <CommandBar 
              actions={[
                { label: "New", icon: <PlusIcon />, onClick: () => console.log("New clicked") },
                { label: "Upload", icon: <UploadIcon />, onClick: () => console.log("Upload clicked") },
                { label: "Edit", icon: <EditIcon />, onClick: () => console.log("Edit clicked") },
                { 
                  label: "Sort", 
                  icon: sortOrder === "asc" ? <ArrowDownIcon /> : <ArrowUpIcon />, 
                  onClick: () => setSortOrder(sortOrder === "asc" ? "desc" : "asc"),
                  active: true
                },
                { 
                  label: "View", 
                  icon: viewMode === "grid" ? <LayoutGridIcon /> : <LayoutListIcon />, 
                  onClick: () => setViewMode(viewMode === "grid" ? "list" : "grid")
                },
                { 
                  label: "More", 
                  icon: <MoreHorizontalIcon />, 
                  dropdown: [
                    { label: "Duplicate", icon: <CopyIcon />, onClick: () => console.log("Duplicate clicked") },
                    { label: "Delete", icon: <DeleteIcon />, onClick: () => console.log("Delete clicked") },
                    { label: "Share", icon: <ShareIcon />, onClick: () => console.log("Share clicked") },
                  ]
                },
              ]}
              searchable
              onSearch={(query) => console.log("Search:", query)}
            />
            
            <div className="p-6 border rounded-md bg-muted/10 text-center">
              Content Area
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Inline Command Bar</CardTitle>
              <CardDescription>Command bar with inline styling</CardDescription>
            </CardHeader>
            <CardContent>
              <CommandBar 
                variant="inline"
                actions={[
                  { label: "Bold", icon: <strong>B</strong>, tooltip: "Bold" },
                  { label: "Italic", icon: <em>I</em>, tooltip: "Italic" },
                  { label: "Link", icon: <PaperclipIcon />, tooltip: "Insert Link" },
                  { label: "Image", icon: <ImageIcon />, tooltip: "Insert Image" },
                ]}
                showLabels={false}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Cards Command Bar</CardTitle>
              <CardDescription>Command bar with card-style buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <CommandBar 
                variant="cards"
                actions={[
                  { label: "Dashboard", icon: <LayoutDashboardIcon />, onClick: () => {} },
                  { label: "Users", icon: <UsersIcon />, onClick: () => {} },
                  { label: "Settings", icon: <SettingsIcon />, onClick: () => {} },
                ]}
                align="center"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Pills Command Bar</CardTitle>
              <CardDescription>Command bar with pill-shaped buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <CommandBar 
                variant="pills"
                actions={[
                  { label: "All", onClick: () => {}, active: true },
                  { label: "Documents", onClick: () => {} },
                  { label: "Images", onClick: () => {} },
                  { label: "Videos", onClick: () => {} },
                ]}
                showDividers={false}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Icon-Only Command Bar</CardTitle>
              <CardDescription>Compact command bar with icons only</CardDescription>
            </CardHeader>
            <CardContent>
              <CommandBar 
                actions={[
                  { label: "Copy", icon: <CopyIcon />, tooltip: "Copy to clipboard" },
                  { label: "Print", icon: <PrinterIcon />, tooltip: "Print" },
                  { label: "Download", icon: <DownloadIcon />, tooltip: "Download" },
                  { label: "Share", icon: <ShareIcon />, tooltip: "Share" },
                ]}
                showLabels={false}
                align="end"
              />
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Action Menu Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Action Menus</h2>
        <p className="text-muted-foreground">Dropdown and context menus for item actions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Dropdown Menu</CardTitle>
              <CardDescription>Menu triggered by a dropdown</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ActionMenu 
                groups={[
                  {
                    items: [
                      { label: "View", icon: <EyeIcon />, onClick: () => console.log("View clicked") },
                      { label: "Edit", icon: <EditIcon />, onClick: () => console.log("Edit clicked") },
                      { label: "Duplicate", icon: <CopyIcon />, onClick: () => console.log("Duplicate clicked") },
                    ]
                  },
                  {
                    items: [
                      { label: "Archive", icon: <DownloadIcon />, onClick: () => console.log("Archive clicked") },
                      { label: "Delete", icon: <Trash2Icon />, onClick: () => console.log("Delete clicked"), variant: "destructive" },
                    ]
                  }
                ]}
                variant="dropdown"
                triggerVariant="button"
                triggerText="Actions"
                triggerIcon={<SlidersHorizontalIcon className="h-4 w-4" />}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Icon Menu</CardTitle>
              <CardDescription>Menu triggered by an icon</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ActionMenu 
                groups={[
                  {
                    title: "Document Actions",
                    items: [
                      { label: "Open", shortcut: "⌘O", onClick: () => console.log("Open clicked") },
                      { label: "Save", shortcut: "⌘S", onClick: () => console.log("Save clicked") },
                      { 
                        label: "Export As", 
                        items: [
                          { label: "PDF", onClick: () => console.log("PDF clicked") },
                          { label: "Word", onClick: () => console.log("Word clicked") },
                          { label: "Image", onClick: () => console.log("Image clicked") },
                        ]
                      },
                    ]
                  },
                  {
                    items: [
                      { label: "Delete", shortcut: "⌫", onClick: () => console.log("Delete clicked"), variant: "destructive" },
                    ]
                  }
                ]}
                variant="dropdown"
                triggerVariant="icon"
                triggerIcon={<MoreHorizontalIcon className="h-4 w-4" />}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Context Menu</CardTitle>
              <CardDescription>Menu triggered by right-click</CardDescription>
            </CardHeader>
            <CardContent>
              <ActionMenu 
                groups={[
                  {
                    items: [
                      { label: "View", icon: <EyeIcon />, onClick: () => console.log("View clicked") },
                      { label: "Edit", icon: <EditIcon />, onClick: () => console.log("Edit clicked") },
                      { label: "Rename", icon: <EditIcon />, onClick: () => console.log("Rename clicked") },
                      { label: "Duplicate", icon: <CopyIcon />, onClick: () => console.log("Duplicate clicked") },
                    ]
                  },
                  {
                    items: [
                      { label: "Download", icon: <DownloadIcon />, onClick: () => console.log("Download clicked") },
                      { label: "Delete", icon: <DeleteIcon />, onClick: () => console.log("Delete clicked"), variant: "destructive" },
                    ]
                  }
                ]}
                variant="context"
                trigger={
                  <div className="p-4 border rounded-md text-center">
                    Right-click here
                  </div>
                }
              />
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Bulk Actions Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Bulk Actions</h2>
        <p className="text-muted-foreground">Action bars for multiple selected items.</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Item Selection</CardTitle>
            <CardDescription>Select items to see bulk actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-md divide-y">
              {items.map((item) => (
                <div key={item.id} className="flex items-center p-3">
                  <Checkbox 
                    className="mr-3" 
                    checked={selectedItems.includes(item.id)}
                    onCheckedChange={() => toggleItem(item.id)}
                  />
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-muted-foreground">Modified {item.modified}</div>
                  </div>
                  <ActionMenu 
                    groups={[
                      {
                        items: [
                          { label: "View", icon: <EyeIcon />, onClick: () => console.log("View", item.id) },
                          { label: "Edit", icon: <EditIcon />, onClick: () => console.log("Edit", item.id) },
                          { label: "Delete", icon: <DeleteIcon />, onClick: () => console.log("Delete", item.id), variant: "destructive" },
                        ]
                      }
                    ]}
                    variant="dropdown"
                    triggerVariant="icon"
                    triggerIcon={<MoreHorizontalIcon className="h-4 w-4" />}
                  />
                </div>
              ))}
            </div>
            
            {selectedItems.length > 0 && (
              <div className="space-y-4 pt-4">
                <div className="text-sm text-muted-foreground">Bulk Action Variants:</div>
                
                <BulkActions 
                  selectedItems={selectedItems.map(id => items.find(item => item.id === id))}
                  actions={[
                    { label: "Delete", icon: <DeleteIcon />, onClick: () => console.log("Delete", selectedItems), variant: "destructive" },
                    { label: "Move", icon: <ArrowRightIcon />, onClick: () => console.log("Move", selectedItems) },
                    { label: "Copy", icon: <CopyIcon />, onClick: () => console.log("Copy", selectedItems) },
                  ]}
                  primaryAction={{
                    label: "Download",
                    icon: <DownloadIcon />,
                    onClick: () => console.log("Download", selectedItems),
                  }}
                  onClearSelection={clearSelection}
                />
                
                <BulkActions 
                  selectedItems={selectedItems.map(id => items.find(item => item.id === id))}
                  actions={[
                    { label: "Delete", onClick: () => console.log("Delete", selectedItems), variant: "destructive" },
                    { label: "Archive", onClick: () => console.log("Archive", selectedItems) },
                  ]}
                  onClearSelection={clearSelection}
                  variant="compact"
                />
                
                <BulkActions 
                  selectedItems={selectedItems.map(id => items.find(item => item.id === id))}
                  actions={[
                    { label: "Delete", icon: <DeleteIcon />, onClick: () => console.log("Delete", selectedItems), variant: "destructive" },
                    { label: "Move", icon: <ArrowRightIcon />, onClick: () => console.log("Move", selectedItems) },
                  ]}
                  primaryAction={{
                    label: "Download",
                    icon: <DownloadIcon />,
                    onClick: () => console.log("Download", selectedItems),
                  }}
                  onClearSelection={clearSelection}
                  variant="floating"
                />
              </div>
            )}
          </CardContent>
        </Card>
      </section>
      
      {/* Action Card Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Action Cards</h2>
        <p className="text-muted-foreground">Card components with actions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Default Action Cards</CardTitle>
              <CardDescription>Cards with primary and secondary actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ActionCard 
                title="Upgrade to Pro"
                description="Get access to advanced features and priority support"
                icon={<StarIcon className="h-10 w-10" />}
                badge={{ text: "Recommended", variant: "default" }}
                primaryAction={{
                  label: "Upgrade Now",
                  onClick: () => console.log("Upgrade clicked"),
                }}
                secondaryAction={{
                  label: "Learn More",
                  onClick: () => console.log("Learn More clicked"),
                  variant: "outline",
                }}
              />
              
              <ActionCard 
                title="Complete Your Profile"
                description="Add more information to your profile"
                icon={<UsersIcon className="h-10 w-10" />}
                status="info"
                primaryAction={{
                  label: "Complete Profile",
                  onClick: () => console.log("Complete Profile clicked"),
                  variant: "outline",
                }}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Highlight and Bordered Cards</CardTitle>
              <CardDescription>Cards with different styling</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ActionCard 
                title="Backup Complete"
                description="Your files have been successfully backed up"
                icon={<CheckIcon className="h-10 w-10" />}
                status="success"
                variant="highlight"
                primaryAction={{
                  label: "View Details",
                  onClick: () => console.log("View Details clicked"),
                  variant: "outline",
                }}
              />
              
              <ActionCard 
                title="Storage Space Low"
                description="You are running out of storage space"
                icon={<InfoIcon className="h-10 w-10" />}
                status="warning"
                variant="bordered"
                primaryAction={{
                  label: "Upgrade Storage",
                  onClick: () => console.log("Upgrade Storage clicked"),
                }}
                secondaryAction={{
                  label: "Manage Files",
                  onClick: () => console.log("Manage Files clicked"),
                  variant: "outline",
                }}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Compact Action Cards</CardTitle>
              <CardDescription>Space-efficient action cards</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ActionCard 
                title="Download Latest Report"
                description="Financial report for Q2 2023"
                icon={<FileIcon className="h-6 w-6" />}
                variant="compact"
                primaryAction={{
                  label: "Download",
                  onClick: () => console.log("Download clicked"),
                  variant: "ghost",
                }}
              />
              
              <ActionCard 
                title="New Feature Available"
                description="Try out our new analytics dashboard"
                icon={<InfoIcon className="h-6 w-6" />}
                variant="compact"
                status="info"
                badge={{ text: "New", variant: "outline" }}
                onClick={() => console.log("Card clicked")}
              />
              
              <ActionCard 
                title="Storage Space Low"
                description="10% space remaining"
                icon={<InfoIcon className="h-6 w-6" />}
                variant="compact"
                status="warning"
                primaryAction={{
                  label: "Upgrade",
                  onClick: () => console.log("Upgrade clicked"),
                  variant: "ghost",
                }}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Clickable Cards</CardTitle>
              <CardDescription>Cards that act as buttons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 grid grid-cols-2 gap-4">
              <ActionCard 
                title="Documentation"
                description="Read the docs"
                icon={<BookmarkIcon className="h-8 w-8" />}
                onClick={() => console.log("Documentation clicked")}
                size="sm"
              />
              
              <ActionCard 
                title="Settings"
                description="Configure app"
                icon={<SettingsIcon className="h-8 w-8" />}
                onClick={() => console.log("Settings clicked")}
                size="sm"
              />
              
              <ActionCard 
                title="Tutorials"
                description="Learn how to use"
                icon={<BookmarkIcon className="h-8 w-8" />}
                onClick={() => console.log("Tutorials clicked")}
                size="sm"
                badge={{ text: "New", variant: "outline" }}
              />
              
              <ActionCard 
                title="Support"
                description="Get help"
                icon={<InfoIcon className="h-8 w-8" />}
                onClick={() => console.log("Support clicked")}
                size="sm"
              />
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Action Group Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Action Groups</h2>
        <p className="text-muted-foreground">Groups of related actions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Default Action Group</CardTitle>
              <CardDescription>Standard grouped actions</CardDescription>
            </CardHeader>
            <CardContent>
              <ActionGroup 
                actions={[
                  { label: "List", icon: <LayoutListIcon />, onClick: () => setViewMode("list"), active: viewMode === "list" },
                  { label: "Grid", icon: <LayoutGridIcon />, onClick: () => setViewMode("grid"), active: viewMode === "grid" },
                  { label: "Compact", icon: <LayoutDashboardIcon />, onClick: () => {}, disabled: true },
                ]}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Outline Action Group</CardTitle>
              <CardDescription>Action group with outline styling</CardDescription>
            </CardHeader>
            <CardContent>
              <ActionGroup 
                actions={[
                  { label: "Copy", icon: <CopyIcon />, onClick: () => {}, tooltip: "Copy to clipboard" },
                  { label: "Delete", icon: <DeleteIcon />, onClick: () => {}, tooltip: "Delete item" },
                  { label: "Save", icon: <Save />, onClick: () => {}, tooltip: "Save changes" },
                ]}
                variant="outline"
                showLabels={false}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Pills Action Group</CardTitle>
              <CardDescription>Action group with pill styling</CardDescription>
            </CardHeader>
            <CardContent>
              <ActionGroup 
                actions={[
                  { label: "Day", onClick: () => {}, active: true },
                  { label: "Week", onClick: () => {} },
                  { label: "Month", onClick: () => {} },
                  { label: "Year", onClick: () => {} },
                ]}
                variant="pills"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tabs Action Group</CardTitle>
              <CardDescription>Action group styled as tabs</CardDescription>
            </CardHeader>
            <CardContent>
              <ActionGroup 
                actions={[
                  { label: "General", onClick: () => {}, active: true },
                  { label: "Security", onClick: () => {} },
                  { label: "Notifications", onClick: () => {} },
                  { label: "Billing", onClick: () => {} },
                ]}
                variant="tabs"
                fullWidth
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Vertical Action Group</CardTitle>
              <CardDescription>Action group with vertical orientation</CardDescription>
            </CardHeader>
            <CardContent>
              <ActionGroup 
                actions={[
                  { label: "Dashboard", icon: <LayoutDashboardIcon />, onClick: () => {}, active: true },
                  { label: "Products", icon: <PackageIcon />, onClick: () => {} },
                  { label: "Customers", icon: <UsersIcon />, onClick: () => {} },
                  { label: "Settings", icon: <SettingsIcon />, onClick: () => {} },
                ]}
                orientation="vertical"
                fullWidth
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Button Action Group</CardTitle>
              <CardDescription>Action group styled as separate buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <ActionGroup 
                actions={[
                  { label: "Save", icon: <Save />, onClick: () => {}, variant: "default" },
                  { label: "Copy", icon: <CopyIcon />, onClick: () => {}, variant: "outline" },
                  { label: "Delete", icon: <DeleteIcon />, onClick: () => {}, variant: "destructive" },
                ]}
                variant="buttons"
              />
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Action Button Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Action Buttons</h2>
        <p className="text-muted-foreground">Enhanced buttons with additional features.</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Action Button Variants</CardTitle>
            <CardDescription>Different styles and features of action buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ActionButton
                label="Primary Action"
                icon={<SendIcon />}
                onClick={() => {}}
              />
              
              <ActionButton
                label="Destructive"
                icon={<DeleteIcon />}
                onClick={() => {}}
                variant="destructive"
              />
              
              <ActionButton
                label="With Badge"
                icon={<BellIcon />}
                badge={{ content: "5", variant: "secondary" }}
                onClick={() => {}}
                variant="outline"
              />
              
              <ActionButton
                label="Loading..."
                icon={<RefreshCcwIcon />}
                loading
                onClick={() => {}}
                variant="secondary"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ActionButton
                label="With Tooltip"
                icon={<InfoIcon />}
                tooltip="This is a tooltip"
                onClick={() => {}}
                variant="outline"
              />
              
              <ActionButton
                label="Icon Right"
                endIcon={<ArrowRightIcon />}
                onClick={() => {}}
                iconPosition="right"
                variant="outline"
              />
              
              <ActionButton
                label="External Link"
                icon={<ExternalLinkIcon />}
                href="https://example.com"
                external
                onClick={() => {}}
                variant="outline"
              />
              
              <ActionButton
                label="With Success"
                icon={<CheckIcon />}
                success={success}
                onClick={simulateAction}
                loading={loading}
                variant="outline"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ActionButton
                label="Premium"
                icon={<StarIcon />}
                onClick={() => {}}
                variant="premium"
              />
              
              <ActionButton
                label="Branded"
                icon={<ZoomInIcon />}
                onClick={() => {}}
                variant="branded"
              />
              
              <ActionButton
                label="Icon Button"
                icon={<SettingsIcon />}
                onClick={() => {}}
                size="icon"
              />
              
              <ActionButton
                label="Full Width"
                onClick={() => {}}
                fullWidth
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Action Buttons with Dropdowns</CardTitle>
            <CardDescription>Buttons with dropdown menus</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ActionButton
                label="Download"
                icon={<DownloadIcon />}
                dropdown={[
                  { label: "PDF", icon: <FileIcon />, onClick: () => {} },
                  { label: "Excel", icon: <FileIcon />, onClick: () => {} },
                  { label: "CSV", icon: <FileIcon />, onClick: () => {} },
                ]}
                onClick={() => {}}
              />
              
              <ActionButton
                label="Share"
                icon={<ShareIcon />}
                dropdown={[
                  { label: "Email", icon: <MailIcon />, onClick: () => {} },
                  { label: "Link", icon: <ClipboardCopyIcon />, onClick: () => {}, description: "Copy shareable link" },
                  { label: "Download", icon: <DownloadIcon />, onClick: () => {} },
                  { label: "Delete", icon: <DeleteIcon />, onClick: () => {}, variant: "destructive" },
                ]}
                onClick={() => {}}
                variant="outline"
              />
              
              <ActionButton
                label="Add to Cart"
                icon={<ShoppingCartIcon />}
                dropdown={[
                  { label: "Add & Checkout", onClick: () => {} },
                  { label: "Save for Later", onClick: () => {} },
                ]}
                onClick={() => {}}
                variant="secondary"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <ActionButton
                label="Filter"
                icon={<FilterIcon />}
                dropdown={[
                  { label: "Date: Newest", onClick: () => {} },
                  { label: "Date: Oldest", onClick: () => {} },
                  { label: "Name: A-Z", onClick: () => {} },
                  { label: "Name: Z-A", onClick: () => {} },
                ]}
                variant="outline"
                size="sm"
              />
              
              <ActionButton
                label="More Actions"
                dropdown={[
{ label: "Edit", icon: <EditIcon />, onClick: () => {} },
{ label: "Copy", icon: <CopyIcon />, onClick: () => {} },
{ label: "Delete", icon: <DeleteIcon />, onClick: () => {}, variant: "destructive" },
]}
variant="ghost"
size="sm"
/>

<ActionButton
label="Export"
icon={<DownloadIcon />}
dropdown={[
{ label: "PDF", onClick: () => {}, external: true, href: "#" },
{ label: "Excel", onClick: () => {}, external: true, href: "#" },
{ label: "CSV", onClick: () => {}, external: true, href: "#" },
]}
variant="outline"
size="sm"
/>

<ActionButton
label="Options"
icon={<MoreHorizontalIcon />}
dropdown={[
{ label: "Refresh", onClick: () => {} },
{ label: "Settings", onClick: () => {} },
{ label: "Help", onClick: () => {} },
]}
size="icon"
variant="ghost"
/>
</div>
</CardContent>
</Card>

<Card>
<CardHeader>
<CardTitle>Action Button Sizes</CardTitle>
<CardDescription>Different sizes of action buttons</CardDescription>
</CardHeader>
<CardContent>
<div className="flex flex-wrap items-end gap-4">
<ActionButton
label="Small Button"
icon={<PlusIcon />}
onClick={() => {}}
size="sm"
/>

<ActionButton
label="Default Button"
icon={<PlusIcon />}
onClick={() => {}}
/>

<ActionButton
label="Large Button"
icon={<PlusIcon />}
onClick={() => {}}
size="lg"
/>

<ActionButton
label="Extra Large Button"
icon={<PlusIcon />}
onClick={() => {}}
size="xl"
/>

<ActionButton
label="Icon"
icon={<PlusIcon />}
onClick={() => {}}
size="icon"
/>
</div>
</CardContent>
</Card>
</section>

{/* Action Integration Examples */}
<section className="space-y-6">
<h2 className="text-2xl font-bold">Action Integrations</h2>
<p className="text-muted-foreground">Examples of various action components working together.</p>

<Card>
<CardHeader>
<CardTitle>Document Management Example</CardTitle>
<CardDescription>Various action components in a document management scenario</CardDescription>
</CardHeader>
<CardContent className="space-y-6">
{/* Command bar + bulk actions */}
<div className="space-y-4">
<div className="flex justify-between">
<h3 className="text-lg font-medium">Documents</h3>
<CommandBar 
actions={[
  { label: "New", icon: <PlusIcon />, onClick: () => console.log("New clicked") },
  { label: "Upload", icon: <UploadIcon />, onClick: () => console.log("Upload clicked") },
  { 
    label: "Sort", 
    icon: sortOrder === "asc" ? <ArrowDownIcon /> : <ArrowUpIcon />, 
    onClick: () => setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  },
  { 
    label: "View", 
    icon: viewMode === "grid" ? <LayoutGridIcon /> : <LayoutListIcon />, 
    onClick: () => setViewMode(viewMode === "grid" ? "list" : "grid")
  },
]}
variant="cards"
size="sm"
showLabels={false}
/>
</div>

{selectedItems.length > 0 && (
<BulkActions 
selectedItems={selectedItems.map(id => items.find(item => item.id === id))}
actions={[
  { label: "Copy", icon: <CopyIcon />, onClick: () => console.log("Copy", selectedItems) },
  { label: "Share", icon: <ShareIcon />, onClick: () => console.log("Share", selectedItems) },
  { label: "Delete", icon: <DeleteIcon />, onClick: () => console.log("Delete", selectedItems), variant: "destructive" },
]}
primaryAction={{
  label: "Download",
  icon: <DownloadIcon />,
  onClick: () => console.log("Download", selectedItems),
}}
onClearSelection={clearSelection}
variant="compact"
/>
)}

{/* Document list */}
<div className="border rounded-md divide-y">
{items.map((item) => (
<div key={item.id} className="flex items-center p-3">
  <Checkbox 
    className="mr-3" 
    checked={selectedItems.includes(item.id)}
    onCheckedChange={() => toggleItem(item.id)}
  />
  <div className="flex-1">
    <div className="font-medium">{item.name}</div>
    <div className="text-sm text-muted-foreground">Modified {item.modified}</div>
  </div>
  <ActionGroup
    actions={[
      { label: "View", icon: <EyeIcon />, onClick: () => console.log("View", item.id), tooltip: "View" },
      { label: "Edit", icon: <EditIcon />, onClick: () => console.log("Edit", item.id), tooltip: "Edit" },
      { label: "Download", icon: <DownloadIcon />, onClick: () => console.log("Download", item.id), tooltip: "Download" },
    ]}
    showLabels={false}
    variant="outline"
    size="sm"
  />
</div>
))}
</div>
</div>

{/* Action cards grid */}
<div className="pt-4">
<h3 className="text-lg font-medium mb-4">Quick Actions</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<ActionCard 
title="Upload Documents"
description="Add new files to your account"
icon={<UploadIcon className="h-8 w-8" />}
variant="compact"
onClick={() => console.log("Upload Documents clicked")}
/>

<ActionCard 
title="Create Folder"
description="Organize your documents"
icon={<FolderIcon className="h-8 w-8" />}
variant="compact"
onClick={() => console.log("Create Folder clicked")}
/>

<ActionCard 
title="Shared Files"
description="View files shared with you"
icon={<ShareIcon className="h-8 w-8" />}
variant="compact"
badge={{ text: "3 new", variant: "secondary" }}
onClick={() => console.log("Shared Files clicked")}
/>
</div>
</div>
</CardContent>
<CardFooter className="border-t flex justify-between">
<div className="text-sm text-muted-foreground">
5 of 25 documents
</div>
<ActionButton
label="More Actions"
dropdown={[
{ label: "Bulk Upload", icon: <UploadIcon />, onClick: () => {} },
{ label: "Export All", icon: <DownloadIcon />, onClick: () => {} },
{ label: "Archive All", icon: <ArchiveIcon />, onClick: () => {} },
]}
variant="outline"
size="sm"
/>
</CardFooter>
</Card>
</section>
</div>
);
}

const FolderIcon = ({ className }: { className?: string }) => (
<svg 
xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 24 24" 
fill="none" 
stroke="currentColor" 
strokeWidth="2" 
strokeLinecap="round" 
strokeLinejoin="round" 
className={className}
>
<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
</svg>
);

const ArchiveIcon = ({ className }: { className?: string }) => (
<svg 
xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 24 24" 
fill="none" 
stroke="currentColor" 
strokeWidth="2" 
strokeLinecap="round" 
strokeLinejoin="round" 
className={className}
>
<rect width="20" height="5" x="2" y="3" rx="1" />
<path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
<path d="M10 12h4" />
</svg>
);