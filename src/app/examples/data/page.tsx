// app/examples/data/page.tsx
'use client'
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { DataTable } from "@/components/blocks/data/DataTable";
import { StatDisplay } from "@/components/blocks/data/StatDisplay";
import { InfoPanel } from "@/components/blocks/data/InfoPanel";
import { CardGrid, ItemCard } from "@/components/blocks/data/CardGrid";
import { DetailGroup } from "@/components/blocks/data/DetailGroup";

import { 
  ArrowUpRight, 
  BarChart3Icon, 
  CreditCardIcon, 
  DollarSignIcon, 
  EyeIcon, 
  FileEditIcon, 
  MailIcon, 
  MapPinIcon, 
  PackageIcon, 
  PenSquareIcon, 
  PhoneIcon, 
  ShoppingCartIcon, 
  TrashIcon, 
  UsersIcon 
} from "lucide-react";

export default function DataExamplesPage() {
  // Sample data for data table
  const tableColumns = [
    { id: "id", header: "ID", width: "80px" },
    { id: "name", header: "Name" },
    { id: "email", header: "Email" },
    { id: "role", header: "Role", 
      cell: (row: any) => (
        <Badge variant="outline">{row.role}</Badge>
      )
    },
    { id: "status", header: "Status", 
      cell: (row: any) => (
        <Badge className={
          row.status === "Active" ? "bg-green-100 text-green-800 hover:bg-green-100" : 
          row.status === "Inactive" ? "bg-gray-100 text-gray-800 hover:bg-gray-100" : 
          "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
        }>
          {row.status}
        </Badge>
      ),
      align: "center"
    },
  ];
  
  const tableData = [
    { id: "1", name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: "3", name: "Robert Johnson", email: "robert@example.com", role: "Editor", status: "Pending" },
    { id: "4", name: "Emily Davis", email: "emily@example.com", role: "User", status: "Inactive" },
  ];
  
  // Sample data for InfoPanel
  const userInfoGroups = [
    {
      title: "Personal Information",
      description: "Basic user details and contact information",
      items: [
        { label: "Full Name", value: "John Doe" },
        { label: "Email", value: "john.doe@example.com", 
          valueClassName: "text-blue-600 dark:text-blue-400" },
        { label: "Phone", value: "+1 (555) 123-4567" },
        { label: "Date of Birth", value: "January 15, 1985" },
        { label: "Address", value: "123 Main St, Anytown, USA", 
          badge: { text: "Primary", variant: "outline" } },
      ],
    },
    {
      title: "Account Information",
      description: "User account details and settings",
      items: [
        { 
          label: "Account Type", 
          value: "Premium", 
          badge: { text: "Premium", variant: "default" },
          tooltip: "This account has access to premium features"
        },
        { label: "Created At", value: "March 10, 2022" },
        { label: "Last Login", value: "Today, 9:30 AM" },
        { label: "Status", value: "Active", highlight: true },
      ],
    }
  ];
  
  // Sample data for CardGrid
  const productItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Premium noise-cancelling wireless headphones with 20-hour battery life.",
      price: "$129.99",
      status: "In Stock",
      image: "https://placehold.co/300x200/e9ecef/495057?text=Headphones"
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Fitness tracking smartwatch with heart rate monitor and GPS.",
      price: "$199.99",
      status: "Low Stock",
      image: "https://placehold.co/300x200/e9ecef/495057?text=Smart+Watch"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Portable waterproof Bluetooth speaker with deep bass.",
      price: "$79.99",
      status: "In Stock",
      image: "https://placehold.co/300x200/e9ecef/495057?text=Speaker"
    },
    {
      id: 4,
      name: "Wireless Charger",
      description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
      price: "$39.99",
      status: "Out of Stock",
      image: "https://placehold.co/300x200/e9ecef/495057?text=Charger"
    },
  ];
  
  // Sample data for DetailGroup
  const customerDetailSections = [
    {
      title: "Customer Information",
      fields: [
        { label: "Customer ID", value: "CUS-12345" },
        { label: "Full Name", value: "John Doe" },
        { label: "Email", value: "john.doe@example.com", isVerified: true },
        { label: "Phone", value: "+1 (555) 123-4567" },
        { label: "Account Type", value: "Premium", 
          badge: { text: "Premium", variant: "default" } },
        { label: "Member Since", value: "March 10, 2022" },
      ]
    },
    {
      title: "Billing & Shipping",
      fields: [
        { 
          label: "Billing Address", 
          value: "123 Main St, Anytown, USA 12345",
          isEditable: true,
          onEdit: () => console.log("Edit billing address")
        },
        { 
          label: "Shipping Address", 
          value: "Same as billing address",
          isEditable: true,
          onEdit: () => console.log("Edit shipping address") 
        },
        { 
          label: "Payment Method", 
          value: "Visa ending in 4242",
          badge: { text: "Default", variant: "outline" },
          isEditable: true,
          onEdit: () => console.log("Edit payment method")
        },
        { 
          label: "Tax ID", 
          value: "TAX-987654321",
          tooltip: "Used for business purchases and tax exemptions" 
        },
      ]
    }
  ];

  return (
    <div className="container mx-auto py-10 space-y-12">
      <h1 className="text-3xl font-bold">Data Display Components</h1>
      <p className="text-muted-foreground">Examples of components for displaying and organizing data.</p>
      
      <Separator />
      
      {/* Stats Displays */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Stat Displays</h2>
        <p className="text-muted-foreground">Components for highlighting key metrics and statistics.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatDisplay 
            title="Total Revenue"
            value="$24,532"
            description="2.5% increase from last month"
            icon={<DollarSignIcon className="h-4 w-4" />}
            trend={{
              value: "+12.5%",
              direction: "up",
              label: "vs last month"
            }}
          />
          
          <StatDisplay 
            title="New Customers"
            value="321"
            description="This month"
            icon={<UsersIcon className="h-4 w-4" />}
            trend={{
              value: "+18.2%",
              direction: "up"
            }}
            accentColor="success"
          />
          
          <StatDisplay 
            title="Orders Pending"
            value="45"
            description="Requires action"
            icon={<PackageIcon className="h-4 w-4" />}
            trend={{
              value: "+5.1%",
              direction: "up"
            }}
            accentColor="warning"
          />
          
          <StatDisplay 
            title="Refund Rate"
            value="2.3%"
            description="Below industry average (3.1%)"
            icon={<CreditCardIcon className="h-4 w-4" />}
            trend={{
              value: "-0.8%",
              direction: "down"
            }}
            accentColor="danger"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatDisplay 
            title="Total Orders"
            value="1,235"
            description="Last 30 days"
            icon={<ShoppingCartIcon className="h-4 w-4" />}
            variant="outline"
          />
          
          <StatDisplay 
            title="Average Order Value"
            value="$89.43"
            description="Up from $82.31 last period"
            icon={<BarChart3Icon className="h-4 w-4" />}
            variant="outline"
            trend={{
              value: "+8.6%",
              direction: "up"
            }}
          />
          
          <StatDisplay 
            title="Monthly Recurring Revenue"
            value="$18,245"
            description="Subscriptions only"
            icon={<ArrowUpRight className="h-4 w-4" />}
            variant="filled"
            accentColor="success"
          />
        </div>
      </section>
      
      {/* Data Tables */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Data Tables</h2>
        <p className="text-muted-foreground">Tabular data displays with sorting, filtering, and pagination.</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>Manage user accounts and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable 
              columns={tableColumns} 
              data={tableData}
              hasSearch={true}
              hasPagination={true}
              rowActions={[
                { 
                  label: "View", 
                  icon: <EyeIcon className="h-4 w-4" />, 
                  onClick: (row) => console.log("View", row) 
                },
                { 
                  label: "Edit", 
                  icon: <PenSquareIcon className="h-4 w-4" />, 
                  onClick: (row) => console.log("Edit", row) 
                },
                { 
                  label: "Delete", 
                  icon: <TrashIcon className="h-4 w-4" />, 
                  onClick: (row) => console.log("Delete", row),
                  variant: "destructive"
                }
              ]}
            />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Compact Data Table</CardTitle>
              <CardDescription>With striped rows and minimal styling</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable 
                columns={tableColumns.slice(0, 3)} 
                data={tableData}
                variant="compact"
                hasSearch={false}
                hasPagination={false}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Bordered Data Table</CardTitle>
              <CardDescription>With visible cell borders</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable 
                columns={tableColumns.slice(0, 3)} 
                data={tableData}
                variant="bordered"
                hasSearch={false}
                hasPagination={false}
              />
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Info Panels */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Info Panels</h2>
        <p className="text-muted-foreground">Components for displaying detailed information in organized sections.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoPanel 
            title="User Profile"
            description="Complete user information"
            groups={userInfoGroups}
          />
          
          <InfoPanel 
            title="Account Details"
            groups={[
              {
                items: [
                  { label: "Account ID", value: "ACC-9876543" },
                  { label: "Account Type", value: "Premium", 
                    badge: { text: "Premium", variant: "default" } },
                  { label: "Status", value: "Active",
                    badge: { text: "Active", variant: "outline" } },
                  { label: "Created", value: "March 10, 2022" },
                  { label: "Billing Cycle", value: "Monthly" },
                  { label: "Next Billing", value: "April 10, 2022" },
                ],
              }
            ]}
            variant="bordered"
            footer={
              <div className="flex justify-end">
                <Button variant="outline" size="sm">Edit Details</Button>
              </div>
            }
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoPanel 
            title="Contact Information"
            groups={[
              {
                items: [
                  { 
                    label: "Email", 
                    value: <div className="flex items-center gap-1">
                      <MailIcon className="h-4 w-4 text-muted-foreground" />
                      <span>john.doe@example.com</span>
                    </div>,
                    highlight: true
                  },
                  { 
                    label: "Phone", 
                    value: <div className="flex items-center gap-1">
                      <PhoneIcon className="h-4 w-4 text-muted-foreground" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                  },
                  { 
                    label: "Address", 
                    value: <div className="flex items-center gap-1">
                      <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                      <span>123 Main St, Anytown, USA 12345</span>
                    </div>
                  },
                ],
              }
            ]}
            variant="compact"
            orientation="horizontal"
          />
          
          <InfoPanel 
            title="System Information"
            groups={[
              {
                title: "Basic Info",
                collapsible: true,
                defaultOpen: true,
                items: [
                  { label: "Operating System", value: "Windows 11 Pro" },
                  { label: "Version", value: "22H2" },
                  { label: "Build", value: "22621.1413" },
                ],
              },
              {
                title: "Hardware Details",
                collapsible: true,
                defaultOpen: false,
                items: [
                  { label: "Processor", value: "Intel Core i7-11700K" },
                  { label: "Memory", value: "32GB DDR4" },
                  { label: "Storage", value: "1TB SSD" },
                ],
              }
            ]}
            variant="simple"
          />
        </div>
      </section>
      
      {/* Card Grids */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Card Grids</h2>
        <p className="text-muted-foreground">Grid layouts for displaying collections of items in card format.</p>
        
        <CardGrid 
          items={productItems}
          hasSearch={true}
          hasAddButton={true}
          onAddClick={() => console.log("Add new product")}
          addButtonLabel="Add Product"
          sortOptions={[
            { value: "name_asc", label: "Name A-Z" },
            { value: "name_desc", label: "Name Z-A" },
            { value: "price_asc", label: "Price: Low to High" },
            { value: "price_desc", label: "Price: High to Low" },
          ]}
          onSortChange={(value) => console.log("Sort changed:", value)}
          renderItem={(item) => (
            <ItemCard 
              item={item}
              title={item.name}
              description={item.description}
              image={
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover"
                />
              }
              badge={{
                text: item.status,
                variant: 
                  item.status === "In Stock" ? "default" :
                  item.status === "Low Stock" ? "secondary" :
                  "destructive"
              }}
              footer={
                <span className="font-semibold">{item.price}</span>
              }
              actions={[
                { 
                  label: "View Details", 
                  icon: <EyeIcon className="h-4 w-4" />, 
                  onClick: (item) => console.log("View", item) 
                },
                { 
                  label: "Edit", 
                  icon: <FileEditIcon className="h-4 w-4" />, 
                  onClick: (item) => console.log("Edit", item) 
                },
              ]}
              onClick={() => console.log("Card clicked:", item)}
            />
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Compact Card Grid</CardTitle>
              <CardDescription>Tighter spacing between cards</CardDescription>
            </CardHeader>
            <CardContent>
              <CardGrid 
                items={productItems.slice(0, 2)}
                columns={1}
                spacing="compact"
                renderItem={(item) => (
                  <ItemCard 
                    item={item}
                    title={item.name}
                    description={item.description}
                    footer={
                      <div className="flex justify-between items-center w-full">
                        <span className="font-semibold">{item.price}</span>
                        <Badge variant="outline">{item.status}</Badge>
                      </div>
                    }
                  />
                )}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Media Card Grid</CardTitle>
              <CardDescription>Cards with fixed aspect ratio</CardDescription>
            </CardHeader>
            <CardContent>
              <CardGrid 
                items={productItems.slice(0, 4)}
                columns={2}
                aspectRatio="square"
                spacing="compact"
                renderItem={(item) => (
                  <ItemCard 
                    item={item}
                    title={item.name}
                    image={
                      <div className="aspect-square w-full bg-muted flex items-center justify-center">
                        <span className="text-3xl font-bold text-muted-foreground">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                    }
                  />
                )}
              />
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Detail Groups */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Detail Groups</h2>
        <p className="text-muted-foreground">Components for displaying detailed information with labels and values.</p>
        
        <DetailGroup 
          title="Customer Details"
          description="Comprehensive customer profile information"
          sections={customerDetailSections}
          actions={
            <Button variant="outline" size="sm">
              <PenSquareIcon className="h-4 w-4 mr-2" />
              Edit Customer
            </Button>
          }
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DetailGroup 
            title="Order Summary"
            sections={[
              {
                fields: [
                  { label: "Order ID", value: "ORD-98765" },
                  { label: "Date", value: "February 28, 2025" },
                  { label: "Status", value: "Shipped", 
                    badge: { text: "Shipped", variant: "default" } },
                  { label: "Customer", value: "John Doe" },
                  { label: "Payment", value: "Credit Card (Visa)" },
                  { label: "Total", value: "$128.45", isHighlighted: true },
                ]
              }
            ]}
            variant="panel"
            footer={
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">View Invoice</Button>
                <Button size="sm">Track Shipment</Button>
              </div>
            }
          />
          
          <DetailGroup 
            title="Account Settings"
            sections={[
              {
                title: "Profile",
                fields: [
                  { label: "Display Name", value: "John Doe", isEditable: true, onEdit: () => {} },
                  { label: "Email", value: "john.doe@example.com", isEditable: true, onEdit: () => {} },
                  { label: "Language", value: "English (US)", isEditable: true, onEdit: () => {} },
                ]
              },
              {
                title: "Preferences",
                fields: [
                  { label: "Theme", value: "System Default", isEditable: true, onEdit: () => {} },
                  { label: "Notifications", value: "Enabled", isEditable: true, onEdit: () => {} },
                ]
              }
            ]}
            variant="compact"
            isEditable={true}
          />
        </div>
        
        <DetailGroup 
          title="Product Specifications"
          sections={[
            {
              title: "Technical Details",
              fields: [
                { label: "Model", value: "XPS-15-9500" },
                { label: "Processor", value: "Intel Core i7-11800H" },
                { label: "RAM", value: "16GB DDR4" },
                { label: "Storage", value: "512GB SSD" },
                { label: "Display", value: "15.6\" 4K UHD Touch" },
                { label: "Graphics", value: "NVIDIA GeForce RTX 3050 Ti" },
              ]
            },
            {
              title: "Physical Specifications",
              fields: [
                { label: "Dimensions", value: "13.57 x 9.06 x 0.71 inches" },
                { label: "Weight", value: "4.5 lbs (2.04 kg)" },
                { label: "Color", value: "Platinum Silver" },
                { label: "Material", value: "Aluminum" },
              ]
            }
          ]}
          variant="list"
          layout="list"
        />
      </section>
    </div>
  );
}