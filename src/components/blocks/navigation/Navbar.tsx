// components/blocks/navigation/Navbar.tsx
"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { BellIcon, MenuIcon, SearchIcon, UserIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  active?: boolean;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "outline" | "destructive";
  };
}

export interface UserNavItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: "default" | "destructive";
}

export interface NavbarProps {
  logo?: React.ReactNode;
  title?: string;
  navItems?: NavItem[];
  userMenuItems?: UserNavItem[];
  actions?: React.ReactNode[];
  user?: {
    name: string;
    email?: string;
    avatar?: string;
    role?: string;
  };
  hasSearch?: boolean;
  hasNotifications?: boolean;
  notificationCount?: number;
  hasMobileMenu?: boolean;
  variant?: "default" | "minimal" | "centered" | "bordered";
  sticky?: boolean;
  transparent?: boolean;
  maxWidth?: "default" | "full" | "boxed";
}

export function Navbar({
  logo,
  title = "Application",
  navItems = [],
  userMenuItems = [],
  actions = [],
  user,
  hasSearch = false,
  hasNotifications = false,
  notificationCount = 0,
  hasMobileMenu = true,
  variant = "default",
  sticky = false,
  transparent = false,
  maxWidth = "default",
}: NavbarProps) {
  const pathname = usePathname();
  
  // Mark the active nav item based on the current path
  const activeItems = React.useMemo(() => {
    return navItems.map((item) => ({
      ...item,
      active: item.active || pathname === item.href || pathname?.startsWith(`${item.href}/`),
    }));
  }, [navItems, pathname]);
  
  const containerClasses = {
    default: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    full: "w-full px-4 sm:px-6 lg:px-8",
    boxed: "max-w-5xl mx-auto px-4",
  }[maxWidth];
  
  const renderNavItems = (items: NavItem[], mobile = false) => {
    return items.map((item, index) => (
      <Link
        key={index}
        href={item.href}
        className={`
          flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors
          ${
            mobile
              ? "hover:bg-muted"
              : variant === "minimal"
              ? "hover:text-primary"
              : "hover:bg-muted"
          }
          ${
            item.active
              ? mobile
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : variant === "minimal"
                ? "text-primary font-medium"
                : "bg-muted font-medium"
              : ""
          }
        `}
      >
        {item.icon && <span className="h-4 w-4">{item.icon}</span>}
        <span>{item.label}</span>
        {item.badge && (
          <Badge variant={item.badge.variant} className="ml-1">
            {item.badge.text}
          </Badge>
        )}
      </Link>
    ));
  };
  
  // Minimal Variant
  if (variant === "minimal") {
    return (
      <header
        className={`
          py-3 border-b
          ${sticky ? "sticky top-0 z-40" : ""}
          ${transparent ? "bg-transparent" : "bg-background"}
        `}
      >
        <div className={`${containerClasses} flex items-center justify-between`}>
          <div className="flex items-center">
            {logo || (
              <span className="text-lg font-semibold tracking-tight">
                {title}
              </span>
            )}
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {renderNavItems(activeItems)}
          </div>
          
          <div className="flex items-center space-x-2">
            {hasSearch && (
              <div className="relative w-40 lg:w-64 hidden md:block">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 h-9 md:w-40 lg:w-64"
                />
              </div>
            )}
            
            {actions.map((action, i) => (
              <React.Fragment key={i}>{action}</React.Fragment>
            ))}
            
            {hasNotifications && (
              <Button variant="ghost" size="icon" className="relative">
                <BellIcon className="h-5 w-5" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {notificationCount > 9 ? "9+" : notificationCount}
                  </span>
                )}
              </Button>
            )}
            
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={user.avatar}
                        alt={user.name}
                      />
                      <AvatarFallback>
                        {user.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.name}
                      </p>
                      {user.email && (
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      )}
                      {user.role && (
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.role}
                        </p>
                      )}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {userMenuItems.map((item, i) => (
                    <DropdownMenuItem
                      key={i}
                      asChild={!!item.href}
                      className={item.variant === "destructive" ? "text-destructive" : ""}
                      onClick={item.onClick}
                    >
                      {item.href ? (
                        <Link href={item.href}>
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          {item.label}
                        </Link>
                      ) : (
                        <>
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          {item.label}
                        </>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            
            {hasMobileMenu && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                  >
                    <MenuIcon className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col space-y-4 py-4">
                    <div className="px-3 py-2">
                      <h2 className="mb-2 font-semibold">{title}</h2>
                      {hasSearch && (
                        <div className="relative mb-4">
                          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="search"
                            placeholder="Search..."
                            className="pl-8 h-9 w-full"
                          />
                        </div>
                      )}
                    </div>
                    <nav className="flex flex-col space-y-1 px-3">
                      {renderNavItems(activeItems, true)}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </header>
    );
  }
  
  // Centered Variant
  if (variant === "centered") {
    return (
      <header
        className={`
          py-3 border-b
          ${sticky ? "sticky top-0 z-40" : ""}
          ${transparent ? "bg-transparent" : "bg-background"}
        `}
      >
        <div className={`${containerClasses} flex flex-col items-center justify-center`}>
          <div className="flex items-center justify-center py-2">
            {logo || (
              <span className="text-lg font-semibold tracking-tight">
                {title}
              </span>
            )}
          </div>
          
          <div className="flex items-center justify-center mt-1">
            <nav className="hidden md:flex items-center space-x-2">
              {renderNavItems(activeItems)}
            </nav>
          </div>
          
          <div className="absolute right-4 top-4 flex items-center space-x-2">
            {hasSearch && (
              <div className="relative w-40 lg:w-64 hidden md:block">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 h-9 md:w-40 lg:w-64"
                />
              </div>
            )}
            
            {actions.map((action, i) => (
              <React.Fragment key={i}>{action}</React.Fragment>
            ))}
            
            {hasNotifications && (
              <Button variant="ghost" size="icon" className="relative">
                <BellIcon className="h-5 w-5" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {notificationCount > 9 ? "9+" : notificationCount}
                  </span>
                )}
              </Button>
            )}
            
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={user.avatar}
                        alt={user.name}
                      />
                      <AvatarFallback>
                        {user.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.name}
                      </p>
                      {user.email && (
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      )}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {userMenuItems.map((item, i) => (
                    <DropdownMenuItem
                      key={i}
                      asChild={!!item.href}
                      className={item.variant === "destructive" ? "text-destructive" : ""}
                      onClick={item.onClick}
                    >
                      {item.href ? (
                        <Link href={item.href}>
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          {item.label}
                        </Link>
                      ) : (
                        <>
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          {item.label}
                        </>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            
            {hasMobileMenu && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                  >
                    <MenuIcon className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col space-y-4 py-4">
                    <div className="px-3 py-2">
                      <h2 className="mb-2 font-semibold">{title}</h2>
                      {hasSearch && (
                        <div className="relative mb-4">
                          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="search"
                            placeholder="Search..."
                            className="pl-8 h-9 w-full"
                          />
                        </div>
                      )}
                    </div>
                    <nav className="flex flex-col space-y-1 px-3">
                      {renderNavItems(activeItems, true)}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </header>
    );
  }
  
  // Bordered Variant
  if (variant === "bordered") {
    return (
      <header
        className={`
          py-3 border-b
          ${sticky ? "sticky top-0 z-40" : ""}
          ${transparent ? "bg-transparent" : "bg-background"}
        `}
      >
        <div className={`${containerClasses} flex items-center justify-between`}>
          <div className="flex items-center mr-6">
            {logo || (
              <span className="text-lg font-semibold tracking-tight">
                {title}
              </span>
            )}
          </div>
          
          <div className="hidden md:flex border-l border-r px-4 h-10">
            <nav className="flex items-center space-x-1">
              {renderNavItems(activeItems)}
            </nav>
          </div>
          
          <div className="flex items-center space-x-2">
            {hasSearch && (
              <div className="relative w-40 lg:w-64 hidden md:block">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 h-9 md:w-40 lg:w-64"
                />
              </div>
            )}
            
            {actions.map((action, i) => (
              <React.Fragment key={i}>{action}</React.Fragment>
            ))}
            
            {hasNotifications && (
              <Button variant="ghost" size="icon" className="relative">
                <BellIcon className="h-5 w-5" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {notificationCount > 9 ? "9+" : notificationCount}
                  </span>
                )}
              </Button>
            )}
            
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={user.avatar}
                        alt={user.name}
                      />
                      <AvatarFallback>
                        {user.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.name}
                      </p>
                      {user.email && (
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      )}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {userMenuItems.map((item, i) => (
                    <DropdownMenuItem
                      key={i}
                      asChild={!!item.href}
                      className={item.variant === "destructive" ? "text-destructive" : ""}
                      onClick={item.onClick}
                    >
                      {item.href ? (
                        <Link href={item.href}>
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          {item.label}
                        </Link>
                      ) : (
                        <>
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          {item.label}
                        </>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            
            {hasMobileMenu && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                  >
                    <MenuIcon className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col space-y-4 py-4">
                    <div className="px-3 py-2">
                      <h2 className="mb-2 font-semibold">{title}</h2>
                      {hasSearch && (
                        <div className="relative mb-4">
                          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="search"
                            placeholder="Search..."
                            className="pl-8 h-9 w-full"
                          />
                        </div>
                      )}
                    </div>
                    <nav className="flex flex-col space-y-1 px-3">
                      {renderNavItems(activeItems, true)}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </header>
    );
  }
  
  // Default variant
  return (
    <header
      className={`
        py-3 border-b
        ${sticky ? "sticky top-0 z-40" : ""}
        ${transparent ? "bg-transparent" : "bg-background"}
      `}
    >
      <div className={`${containerClasses} flex items-center justify-between`}>
        <div className="flex items-center gap-8">
          <div className="flex items-center">
            {logo || (
              <span className="text-lg font-semibold tracking-tight">
                {title}
              </span>
            )}
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            {renderNavItems(activeItems)}
          </nav>
        </div>
        
        <div className="flex items-center space-x-3">
          {hasSearch && (
            <div className="relative w-40 lg:w-64 hidden md:block">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 h-9 md:w-40 lg:w-64"
              />
            </div>
          )}
          
          {actions.map((action, i) => (
            <React.Fragment key={i}>{action}</React.Fragment>
          ))}
          
          {hasNotifications && (
            <Button variant="ghost" size="icon" className="relative">
              <BellIcon className="h-5 w-5" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {notificationCount > 9 ? "9+" : notificationCount}
                </span>
              )}
            </Button>
          )}
          
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={user.avatar}
                      alt={user.name}
                    />
                    <AvatarFallback>
                      {user.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.name}
                    </p>
                    {user.email && (
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    )}
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {userMenuItems.map((item, i) => (
                  <DropdownMenuItem
                    key={i}
                    asChild={!!item.href}
                    className={item.variant === "destructive" ? "text-destructive" : ""}
                    onClick={item.onClick}
                  >
                    {item.href ? (
                      <Link href={item.href}>
                        {item.icon && <span className="mr-2">{item.icon}</span>}
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        {item.icon && <span className="mr-2">{item.icon}</span>}
                        {item.label}
                      </>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          
          {hasMobileMenu && (
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                >
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 py-4">
                  <div className="px-3 py-2">
                    <h2 className="mb-2 font-semibold">{title}</h2>
                    {hasSearch && (
                      <div className="relative mb-4">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search..."
                          className="pl-8 h-9 w-full"
                        />
                      </div>
                    )}
                  </div>
                  <nav className="flex flex-col space-y-1 px-3">
                    {renderNavItems(activeItems, true)}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}