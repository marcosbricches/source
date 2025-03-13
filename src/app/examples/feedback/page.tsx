// app/examples/feedback/page.tsx
"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertBlock } from "@/components/blocks/feedback/AlertBlock";
import { EmptyState } from "@/components/blocks/feedback/EmptyState";
import { FeedbackToastContent, toast, ToastContainer } from "@/components/blocks/feedback/FeedbackToast";
import { LoadingState } from "@/components/blocks/feedback/LoadingState";
import { ProgressIndicator } from "@/components/blocks/feedback/ProgressIndicator";
import { 
  AlertCircleIcon, 
  AlertTriangleIcon, 
  CheckCircleIcon, 
  ClipboardIcon, 
  FileIcon, 
  FileSearchIcon, 
  InfoIcon, 
  Loader2Icon,
  PackageIcon,
  SearchIcon, 
  ShoppingCartIcon, 
  UsersIcon, 
  WifiOffIcon
} from "lucide-react";

export default function FeedbackExamplesPage() {
  const [isAlertVisible, setIsAlertVisible] = React.useState(true);
  const [progress, setProgress] = React.useState(45);
  const [isLoading, setIsLoading] = React.useState(false);
  
  // Simulate progress increase
  const simulateProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 300);
  };
  
  // Simulate loading state
  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto py-10 space-y-12">
      <ToastContainer />
      
      <h1 className="text-3xl font-bold">Feedback Components</h1>
      <p className="text-muted-foreground">Examples of components for providing user feedback.</p>
      
      <Separator />
      
      {/* Alert Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Alert Blocks</h2>
        <p className="text-muted-foreground">Informational and actionable alerts for notifying users.</p>
        
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Alert Block Variants</CardTitle>
              <CardDescription>Different types of alert messages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isAlertVisible && (
                <AlertBlock
                  variant="info"
                  title="Information"
                  description="This is an informational alert with additional details."
                  icon={<InfoIcon className="h-5 w-5" />}
                  dismissible
                  onDismiss={() => setIsAlertVisible(false)}
                  actions={[
                    { label: "Learn More", onClick: () => console.log("Learn more clicked") }
                  ]}
                />
              )}
              
              <AlertBlock
                variant="success"
                title="Success"
                description="Your changes have been saved successfully."
                icon={<CheckCircleIcon className="h-5 w-5" />}
                actions={[
                  { label: "View Changes", onClick: () => console.log("View changes clicked") }
                ]}
              />
              
              <AlertBlock
                variant="warning"
                title="Warning"
                description="Your account is approaching storage limits. Consider upgrading your plan."
                icon={<AlertTriangleIcon className="h-5 w-5" />}
                actions={[
                  { label: "Upgrade", onClick: () => console.log("Upgrade clicked"), variant: "default" },
                  { label: "Dismiss", onClick: () => console.log("Dismiss clicked"), variant: "outline" }
                ]}
              />
              
              <AlertBlock
                variant="error"
                title="Error"
                description="There was a problem processing your request. Please try again later."
                icon={<AlertCircleIcon className="h-5 w-5" />}
                actions={[
                  { label: "Try Again", onClick: () => console.log("Try again clicked") },
                  { label: "Contact Support", onClick: () => console.log("Contact support clicked"), variant: "outline" }
                ]}
              />
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Layout</CardTitle>
                <CardDescription>Alert with card styling</CardDescription>
              </CardHeader>
              <CardContent>
                <AlertBlock
                  variant="info"
                  layout="card"
                  title="Free Trial Ending"
                  description="Your free trial will end in 3 days. Upgrade now to maintain access to all features."
                  actions={[
                    { label: "Upgrade Plan", onClick: () => console.log("Upgrade clicked") },
                    { label: "Remind Later", onClick: () => console.log("Remind later clicked"), variant: "outline" }
                  ]}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Banner Layout</CardTitle>
                <CardDescription>Full-width banner alert</CardDescription>
              </CardHeader>
              <CardContent>
                <AlertBlock
                  variant="warning"
                  layout="banner"
                  title="Browser Update Required"
                  description="Your browser is outdated. Update your browser for the best experience."
                  actions={[
                    { label: "Update", onClick: () => console.log("Update clicked") }
                  ]}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Small Size</CardTitle>
                <CardDescription>Compact alert sizing</CardDescription>
              </CardHeader>
              <CardContent>
                <AlertBlock
                  variant="success"
                  size="sm"
                  title="File Uploaded"
                  description="Your file has been uploaded successfully."
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Large Size</CardTitle>
                <CardDescription>Prominent alert sizing</CardDescription>
              </CardHeader>
              <CardContent>
                <AlertBlock
                  variant="error"
                  size="lg"
                  title="Connection Lost"
                  description="Unable to connect to the server. Check your internet connection."
                  icon={<WifiOffIcon className="h-6 w-6" />}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Empty State Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Empty States</h2>
        <p className="text-muted-foreground">Visual placeholders for empty data or search results.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Default Empty State</CardTitle>
              <CardDescription>Standard empty state with actions</CardDescription>
            </CardHeader>
            <CardContent>
              <EmptyState
                title="No products found"
                description="Your product catalog is empty. Add your first product to get started."
                icon={<PackageIcon className="h-16 w-16" />}
                actions={[
                  { label: "Add Product", onClick: () => console.log("Add product clicked") },
                  { label: "Import Products", onClick: () => console.log("Import clicked"), variant: "outline" }
                ]}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Search Results Empty State</CardTitle>
              <CardDescription>No matching results found</CardDescription>
            </CardHeader>
            <CardContent>
              <EmptyState
                title="No matching results"
                description="Try adjusting your search or filter criteria to find what you're looking for."
                icon={<SearchIcon className="h-16 w-16" />}
                actions={[
                  { label: "Clear Filters", onClick: () => console.log("Clear filters clicked") }
                ]}
                variant="card"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Simple Empty State</CardTitle>
              <CardDescription>Minimal styling without container</CardDescription>
            </CardHeader>
            <CardContent>
              <EmptyState
                title="No orders yet"
                description="When you place orders, they will appear here."
                icon={<ShoppingCartIcon className="h-12 w-12" />}
                variant="simple"
                size="sm"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Compact Empty State</CardTitle>
              <CardDescription>Space-efficient empty state</CardDescription>
            </CardHeader>
            <CardContent>
              <EmptyState
                title="No notifications"
                description="You're all caught up!"
                variant="compact"
                size="sm"
                iconSize="sm"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>File Upload Empty State</CardTitle>
              <CardDescription>For file upload dropzones</CardDescription>
            </CardHeader>
            <CardContent>
              <EmptyState
                title="Drop files here"
                description="Drop your files here, or click to browse"
                icon={<FileIcon className="h-16 w-16" />}
                actions={[
                  { label: "Browse Files", onClick: () => console.log("Browse files clicked") }
                ]}
                size="lg"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Error Empty State</CardTitle>
              <CardDescription>When content cannot be loaded</CardDescription>
            </CardHeader>
            <CardContent>
              <EmptyState
                title="Unable to load data"
                description="There was a problem loading this content. Please try again later."
                icon={<AlertCircleIcon className="h-16 w-16" />}
                actions={[
                  { label: "Retry", onClick: () => console.log("Retry clicked") },
                  { label: "Go Back", onClick: () => console.log("Go back clicked"), variant: "outline" }
                ]}
                variant="card"
              />
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Toast Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Toast Notifications</h2>
        <p className="text-muted-foreground">Temporary notification messages that appear at the edge of the screen.</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Toast Notifications</CardTitle>
            <CardDescription>Click the buttons to show different types of toast notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={() => 
                  toast.default({
                    title: "Note",
                    description: "This is a default toast notification",
                  })
                }
              >
                Default Toast
              </Button>
              
              <Button 
                onClick={() => 
                  toast.success({
                    title: "Success",
                    description: "Your changes have been saved",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo clicked"),
                    }
                  })
                }
                variant="outline"
              >
                Success Toast
              </Button>
              
              <Button 
                onClick={() => 
                  toast.info({
                    title: "Information",
                    description: "A new update is available",
                    action: {
                      label: "Update Now",
                      onClick: () => console.log("Update clicked"),
                    }
                  })
                }
                variant="outline"
              >
                Info Toast
              </Button>
              
              <Button 
                onClick={() => 
                  toast.warning({
                    title: "Warning",
                    description: "Your disk space is running low",
                  })
                }
                variant="outline"
              >
                Warning Toast
              </Button>
              
              <Button 
                onClick={() => 
                  toast.error({
                    title: "Error",
                    description: "There was a problem with your request",
                    action: {
                      label: "Try Again",
                      onClick: () => console.log("Try again clicked"),
                    }
                  })
                }
                variant="outline"
              >
                Error Toast
              </Button>
              
              <Button 
                onClick={() => 
                  toast.destructive({
                    title: "Item Deleted",
                    description: "Your item has been permanently deleted",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo clicked"),
                    }
                  })
                }
                variant="destructive"
              >
                Destructive Toast
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Toast Preview</CardTitle>
              <CardDescription>Static preview of toast notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FeedbackToastContent
                title="Success"
                description="Your profile has been updated"
                variant="success"
              />
              
              <FeedbackToastContent
                title="New Feature"
                description="Check out our new dashboard analytics"
                variant="info"
                action={{
                  label: "View",
                  onClick: () => {},
                }}
              />
              
              <FeedbackToastContent
                title="Permission Required"
                description="Allow location access to use this feature"
                variant="warning"
                action={{
                  label: "Allow",
                  onClick: () => {},
                }}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>With Custom Icons</CardTitle>
              <CardDescription>Toast notifications with custom icons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FeedbackToastContent
                title="New Users"
                description="5 new users joined your team"
                icon={<UsersIcon className="h-5 w-5" />}
              />
              
              <FeedbackToastContent
                title="Copied to clipboard"
                description="Link has been copied to your clipboard"
                icon={<ClipboardIcon className="h-5 w-5" />}
                variant="success"
              />
              
              <FeedbackToastContent
                title="File processing"
                description="Your file is being processed. We'll notify you when it's ready."
                icon={<Loader2Icon className="h-5 w-5 animate-spin" />}
                variant="info"
              />
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Loading State Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Loading States</h2>
        <p className="text-muted-foreground">Visual indicators for loading and processing operations.</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Loading State Variants</CardTitle>
            <CardDescription>Different styles of loading indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-4">
                  <LoadingState
                    text="Loading..."
                    spinnerVariant="default"
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <LoadingState
                    text="Processing"
                    description="Please wait"
                    spinnerVariant="dots"
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <LoadingState
                    text="Uploading"
                    description="Your files are being uploaded"
                    spinnerVariant="spinner"
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <LoadingState
                    text="Fetching Data"
                    spinnerVariant="pulse"
                  />
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Inline Loading State</CardTitle>
              <CardDescription>Horizontal loading indicator</CardDescription>
            </CardHeader>
            <CardContent>
              <LoadingState
                text="Loading results"
                variant="inline"
                size="sm"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Card Loading State</CardTitle>
              <CardDescription>Card-based loading indicator</CardDescription>
            </CardHeader>
            <CardContent>
              <LoadingState
                text="Loading data"
                description="This may take a few moments"
                variant="card"
                size="default"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Custom Loading State</CardTitle>
              <CardDescription>With custom loading icon</CardDescription>
            </CardHeader>
            <CardContent>
              <LoadingState
                text="Searching documents"
                description="Scanning all files"
                icon={<FileSearchIcon className="h-8 w-8 animate-pulse" />}
                showSpinner={false}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Simulated Loading</CardTitle>
              <CardDescription>Example of loading overlay</CardDescription>
            </CardHeader>
            <CardContent className="relative min-h-[150px]">
              <Button 
                onClick={simulateLoading}
                disabled={isLoading}
              >
                Simulate Loading
              </Button>
              
              {isLoading && (
                <LoadingState
                  text="Loading..."
                  variant="overlay"
                />
              )}
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Progress Indicator Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Progress Indicators</h2>
        <p className="text-muted-foreground">Visual feedback for ongoing operations with progress tracking.</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Progress Variants</CardTitle>
            <CardDescription>Different styles of progress indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <ProgressIndicator
                  value={progress}
                  label="Default Progress"
                  description="Standard progress indicator"
                  variant="default"
                />
                
                <ProgressIndicator
                  value={progress}
                  label="Success Progress"
                  description="Completed steps"
                  variant="success"
                  status={progress === 100 ? "success" : "loading"}
                  showStatusIcon
                />
                
                <ProgressIndicator
                  value={progress}
                  label="Warning Progress"
                  description="Approaching limits"
                  variant="warning"
                />
                
                <ProgressIndicator
                  value={30}
                  label="Error Progress"
                  description="Failed to complete"
                  variant="error"
                  status="error"
                  showStatusIcon
                />
              </div>
              
              <div className="space-y-6">
                <ProgressIndicator
                  value={progress}
                  label="Upload Progress"
                  description="Uploading file..."
                  variant="info"
                  valueFormat="percentage"
                  size="lg"
                />
                
                <ProgressIndicator
                  value={4}
                  max={10}
                  label="Step Progress"
                  description="Step 4 of 10"
                  valueFormat="ratio"
                  size="default"
                />
                
                <ProgressIndicator
                  value={progress}
                  label="Download Progress"
                  size="sm"
                  status="loading"
                />
                
                <div className="mt-8">
                  <Button onClick={simulateProgress}>
                    Simulate Progress
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}