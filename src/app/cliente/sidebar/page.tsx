'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  BarChart3, 
  LayoutDashboard, 
  Calculator, 
  FileText, 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  Bell, 
  Settings, 
  HelpCircle, 
  ChevronDown, 
  ChevronRight,
  Store,
  Boxes,
  Receipt,
  ClipboardList,
  BarChartHorizontal,
  LogOut
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type SidebarNavItem = {
  title: string
  href: string
  icon: React.ReactNode
  submenu?: SidebarNavItem[]
  badge?: string
  badgeColor?: string
}

const sidebarItems: SidebarNavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: 'Planejamento Orçamentário',
    href: '/planejamento',
    icon: <Calculator className="h-5 w-5" />,
    submenu: [
      {
        title: 'Preenchimento de Dados',
        href: '/planejamento/preenchimento',
        icon: <FileText className="h-4 w-4" />,
      },
      {
        title: 'Compras Categorizadas',
        href: '/planejamento/compras',
        icon: <ShoppingCart className="h-4 w-4" />,
      },
      {
        title: 'Cálculo de CMV',
        href: '/planejamento/cmv',
        icon: <BarChartHorizontal className="h-4 w-4" />,
      },
      {
        title: 'Sugestão de Compras',
        href: '/planejamento/sugestao',
        icon: <ClipboardList className="h-4 w-4" />,
      }
    ]
  },
  {
    title: 'Fichas Técnicas',
    href: '/fichas-tecnicas',
    icon: <FileText className="h-5 w-5" />,
    submenu: [
      {
        title: 'Produtos',
        href: '/fichas-tecnicas/produtos',
        icon: <Boxes className="h-4 w-4" />,
      },
      {
        title: 'Fornecedores',
        href: '/fornecedores',
        icon: <Store className="h-4 w-4" />,
      },
      {
        title: 'Relatórios',
        href: '/fichas-tecnicas/relatorios',
        icon: <BarChart3 className="h-4 w-4" />,
      }
    ]
  },
  {
    title: 'Resultados',
    href: '/resultados',
    icon: <TrendingUp className="h-5 w-5" />,
    submenu: [
      {
        title: 'Resultados do Planejamento',
        href: '/resultados/planejamento',
        icon: <Receipt className="h-4 w-4" />,
      },
      {
        title: 'Forecasting',
        href: '/resultados/forecasting',
        icon: <TrendingUp className="h-4 w-4" />,
      },
      {
        title: 'Sugestões e Planos',
        href: '/resultados/sugestoes',
        icon: <ClipboardList className="h-4 w-4" />,
      }
    ]
  },
  {
    title: 'Importação/Exportação',
    href: '/importacao-exportacao',
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: 'Planos e Assinaturas',
    href: '/planos',
    icon: <Receipt className="h-5 w-5" />,
    badge: 'Premium',
    badgeColor: 'amber'
  }
]

const complementaryItems: SidebarNavItem[] = [
  {
    title: 'Meu Perfil',
    href: '/perfil',
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: 'Notificações',
    href: '/notificacoes',
    icon: <Bell className="h-5 w-5" />,
    badge: '3',
    badgeColor: 'red'
  },
  {
    title: 'Configurações',
    href: '/configuracoes',
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: 'Ajuda e Suporte',
    href: '/suporte',
    icon: <HelpCircle className="h-5 w-5" />,
  }
]

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname()
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({})

  const toggleGroup = (title: string) => {
    setOpenGroups(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const NavItem = ({ item, isChild = false }: { item: SidebarNavItem, isChild?: boolean }) => {
    const active = isActive(item.href)
    
    return (
      <li>
        <Link 
          href={item.href} 
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all",
            active 
              ? "bg-amber-50 text-amber-900 font-medium" 
              : "text-gray-600 hover:bg-gray-100",
            isChild ? "pl-10 text-xs" : ""
          )}
        >
          {item.icon}
          <span>{item.title}</span>
          {item.badge && (
            <Badge 
              variant="outline" 
              className={cn(
                "ml-auto", 
                item.badgeColor === 'amber' 
                  ? "bg-amber-100 text-amber-800 border-amber-200" 
                  : item.badgeColor === 'red' 
                  ? "bg-red-100 text-red-800 border-red-200"
                  : ""
              )}
            >
              {item.badge}
            </Badge>
          )}
        </Link>
      </li>
    )
  }

  const NavGroup = ({ item }: { item: SidebarNavItem }) => {
    const isOpen = openGroups[item.title] || false
    const active = item.submenu?.some(subItem => isActive(subItem.href)) || false
    
    return (
      <li>
        <button
          onClick={() => toggleGroup(item.title)}
          className={cn(
            "flex items-center justify-between w-full rounded-md px-3 py-2 text-sm transition-all",
            active 
              ? "bg-amber-50 text-amber-900 font-medium" 
              : "text-gray-600 hover:bg-gray-100"
          )}
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <span>{item.title}</span>
          </div>
          {item.badge && (
            <Badge 
              variant="outline" 
              className={cn(
                "mr-2", 
                item.badgeColor === 'amber' 
                  ? "bg-amber-100 text-amber-800 border-amber-200" 
                  : item.badgeColor === 'red' 
                  ? "bg-red-100 text-red-800 border-red-200"
                  : ""
              )}
            >
              {item.badge}
            </Badge>
          )}
          {isOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
        {isOpen && item.submenu && (
          <ul className="mt-1 space-y-1">
            {item.submenu.map((subItem) => (
              <NavItem key={subItem.href} item={subItem} isChild />
            ))}
          </ul>
        )}
      </li>
    )
  }

  return (
    <div className={cn("flex flex-col h-screen border-r bg-white", className)}>
      <div className="flex h-14 items-center px-4 border-b">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="bg-amber-700 text-white p-1 rounded-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="currentColor" />
              <path d="M7 12L10 9L14 13L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-semibold text-xl">Rook System</span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-auto py-2 px-3">
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <React.Fragment key={item.href}>
              {item.submenu ? (
                <NavGroup item={item} />
              ) : (
                <NavItem item={item} />
              )}
            </React.Fragment>
          ))}
        </nav>
        
        <Separator className="my-4" />
        
        <nav className="space-y-1">
          {complementaryItems.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </nav>
      </div>
      
      <div className="mt-auto p-4 border-t">
        <div className="flex items-center gap-3 mb-4">
          <Avatar>
            <AvatarImage src="/avatar.png" alt="Avatar" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">João Pedro</p>
            <p className="text-xs text-gray-500 truncate">Restaurante Sabor & Arte</p>
          </div>
        </div>
        <Button variant="outline" className="w-full flex items-center justify-center gap-2 text-gray-600">
          <LogOut className="h-4 w-4" />
          Sair
        </Button>
      </div>
    </div>
  )
}

// Componentes de layout para demonstração
export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="w-64 hidden md:block" />
      <div className="flex-1 p-6 bg-gray-50">{children}</div>
    </div>
  )
}

export function SidebarMobileLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <Sidebar />
      </div>
      
      <div className="flex-1 p-6 bg-gray-50">
        <div className="md:hidden mb-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setSidebarOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Sidebar