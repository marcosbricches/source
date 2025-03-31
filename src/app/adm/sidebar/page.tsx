// app/page.tsx (exemplo para demonstrar a sidebar)
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  ChevronRight, 
  LayoutDashboard, 
  Users, 
  TrendingUp, 
  UserCircle, 
  Globe, 
  Settings, 
  Bell, 
  ClipboardList, 
  Menu, 
  X, 
  ChevronDown,
  LogOut,
  Boxes
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function MainLayout() {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    "clientes": true,
    "planos": true,
    "colaboradores": true,
    "configuracoes": true
  })

  // Detectar se está em modo móvel
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(true)
      }
    }
    
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])
  
  // Função para alternar grupo expandido
  const toggleGroup = (group: string) => {
    setExpandedGroups({
      ...expandedGroups,
      [group]: !expandedGroups[group]
    })
  }
  
  // Verificar se um caminho está ativo
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname?.startsWith(path)
  }
  
  // Estrutura de navegação
  const navigationGroups = [
    {
      id: "principal",
      items: [
        {
          name: "Dashboard",
          href: "/",
          icon: <LayoutDashboard className="h-5 w-5" />
        }
      ]
    },
    {
      id: "clientes",
      title: "Gestão de Clientes",
      icon: <Users className="h-5 w-5" />,
      items: [
        {
          name: "Lista de Clientes",
          href: "/gestao-clientes",
          icon: <ChevronRight className="h-4 w-4" />
        },
        {
          name: "Novo Cliente",
          href: "/gestao-clientes/novo",
          icon: <ChevronRight className="h-4 w-4" />
        },
        {
          name: "Relatórios",
          href: "/gestao-clientes/relatorios",
          icon: <ChevronRight className="h-4 w-4" />
        }
      ]
    },
    {
      id: "planos",
      title: "Gestão de Planos",
      icon: <TrendingUp className="h-5 w-5" />,
      items: [
        {
          name: "Lista de Planos",
          href: "/gestao-planos",
          icon: <ChevronRight className="h-4 w-4" />
        },
        {
          name: "Novo Plano",
          href: "/gestao-planos/novo",
          icon: <ChevronRight className="h-4 w-4" />
        },
        {
          name: "Relatórios",
          href: "/gestao-planos/relatorios",
          icon: <ChevronRight className="h-4 w-4" />
        }
      ]
    },
    {
      id: "colaboradores",
      title: "Gestão de Colaboradores",
      icon: <UserCircle className="h-5 w-5" />,
      items: [
        {
          name: "Lista de Colaboradores",
          href: "/gestao-colaboradores",
          icon: <ChevronRight className="h-4 w-4" />
        },
        {
          name: "Novo Colaborador",
          href: "/gestao-colaboradores/novo",
          icon: <ChevronRight className="h-4 w-4" />
        }
      ]
    },
    {
      id: "landing",
      items: [
        {
          name: "Edição Landing Page",
          href: "/edicao-landing-page",
          icon: <Globe className="h-5 w-5" />
        }
      ]
    },
    {
      id: "ferramentas",
      items: [
        {
          name: "Notificações",
          href: "/notificacoes",
          icon: <Bell className="h-5 w-5" />,
          badge: 3
        },
        {
          name: "Logs de Atividades",
          href: "/logs-atividades",
          icon: <ClipboardList className="h-5 w-5" />
        }
      ]
    },
    {
      id: "configuracoes",
      title: "Configurações",
      icon: <Settings className="h-5 w-5" />,
      items: [
        {
          name: "Perfil",
          href: "/perfil/configuracoes",
          icon: <ChevronRight className="h-4 w-4" />
        },
        {
          name: "Preferências",
          href: "/perfil/preferencias",
          icon: <ChevronRight className="h-4 w-4" />
        }
      ]
    }
  ]

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Overlay para dispositivos móveis */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 z-50 flex flex-col border-r bg-background
          ${isSidebarOpen ? "w-64" : "w-16"} 
          ${isMobile ? (isSidebarOpen ? "left-0" : "-left-16") : "left-0"}
          transition-all duration-300
        `}
      >
        {/* Logo e toggle */}
        <div className="border-b py-3 px-4 flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-amber-600">
              <Boxes className="h-4 w-4 text-white" />
            </div>
            {isSidebarOpen && (
              <span className="ml-2 font-semibold text-lg">Rook</span>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="h-8 w-8"
          >
            {isMobile ? 
              (isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />) : 
              (isSidebarOpen ? <ChevronRight className="h-4 w-4" /> : <ChevronRight className="h-4 w-4 rotate-180" />)
            }
          </Button>
        </div>
        
        {/* Usuário */}
        <div className={`px-3 py-4 border-b ${!isSidebarOpen && "justify-center"} flex items-center`}>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          {isSidebarOpen && (
            <div className="ml-3 space-y-1 overflow-hidden">
              <p className="text-sm font-medium leading-none">João Silva</p>
              <p className="text-xs leading-none text-muted-foreground">
                Supervisor Financeiro
              </p>
            </div>
          )}
        </div>
        
        {/* Links de navegação */}
        <ScrollArea className="flex-1">
          <nav className="flex flex-col gap-1 px-2 py-3">
            <TooltipProvider delayDuration={0}>
              {navigationGroups.map((group) => (
                <div key={group.id} className="mb-2">
                  {group.title && isSidebarOpen && (
                    <div 
                      className="flex items-center justify-between px-3 py-2 rounded-md cursor-pointer hover:bg-muted"
                      onClick={() => toggleGroup(group.id)}
                    >
                      <div className="flex items-center gap-3">
                        {group.icon}
                        <span className="text-sm font-medium">{group.title}</span>
                      </div>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform ${expandedGroups[group.id] ? "rotate-180" : ""}`} 
                      />
                    </div>
                  )}
                  
                  {/* Quando a sidebar está aberta e grupo expandido, ou quando está fechada (todos os itens são mostrados) */}
                  {(isSidebarOpen && (!group.title || expandedGroups[group.id])) || !isSidebarOpen ? (
                    <div className={`${isSidebarOpen && group.title ? "ml-1 border-l pl-3" : ""}`}>
                      {group.items.map((item) => (
                        <Tooltip key={item.href}>
                          <TooltipTrigger asChild>
                            <Link 
                              href={item.href}
                              className={`
                                flex items-center gap-3 px-3 py-2 rounded-md text-sm
                                ${!isSidebarOpen ? "justify-center" : ""}
                                ${isActive(item.href) 
                                  ? "bg-amber-50 text-amber-700 font-medium" 
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                }
                              `}
                            >
                              {item.icon}
                              {isSidebarOpen && (
                                <span>{item.name}</span>
                              )}
                              {isSidebarOpen && item.badge && (
                                <Badge 
                                  className="ml-auto bg-amber-500 hover:bg-amber-600"
                                >
                                  {item.badge}
                                </Badge>
                              )}
                              {!isSidebarOpen && item.badge && (
                                <Badge 
                                  className="absolute top-0 right-0 -mr-1 -mt-1 h-5 w-5 p-0 flex items-center justify-center bg-amber-500 hover:bg-amber-600"
                                >
                                  {item.badge}
                                </Badge>
                              )}
                            </Link>
                          </TooltipTrigger>
                          {!isSidebarOpen && (
                            <TooltipContent side="right">
                              {item.name}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </TooltipProvider>
          </nav>
        </ScrollArea>
        
        {/* Rodapé */}
        <div className="mt-auto border-t p-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="outline" 
                className={`w-full gap-2 ${!isSidebarOpen ? "justify-center" : ""}`}
              >
                <LogOut className="h-4 w-4" />
                {isSidebarOpen && "Sair"}
              </Button>
            </TooltipTrigger>
            {!isSidebarOpen && (
              <TooltipContent side="right">
                Sair
              </TooltipContent>
            )}
          </Tooltip>
        </div>
      </aside>
      
      {/* Conteúdo principal */}
      <main 
        className={`
          flex-1 overflow-auto 
          ${isMobile ? "ml-0" : (isSidebarOpen ? "ml-64" : "ml-16")}
          transition-all duration-300
        `}
      >
        {/* Exemplo de conteúdo */}
        <div className="container py-8 mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight mb-4">Dashboard</h1>
          <p className="text-muted-foreground mb-8">
            Este é um exemplo para demonstrar a sidebar. O conteúdo real seria substituído pelo conteúdo de cada página.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Cards de exemplo */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-lg border p-6 shadow-sm">
                <h3 className="text-lg font-medium">Card de exemplo {i + 1}</h3>
                <p className="text-muted-foreground mt-2">Conteúdo de exemplo</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}