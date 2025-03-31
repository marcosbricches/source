// app/(admin)/notificacoes/page.tsx
"use client"

import { useState } from "react"
import { Bell, CheckCircle, Clock, Eye, Filter, MailOpen, Settings, Trash2, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

// Interface para o tipo de notificação
interface Notificacao {
  id: string
  tipo: "sistema" | "cliente" | "pagamento" | "alerta"
  titulo: string
  mensagem: string
  data: Date
  lida: boolean
  link?: string
  icone?: React.ReactNode
}

export default function NotificacoesPage() {
  // Dados de exemplo para notificações (em um caso real, viriam da API)
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([
    {
      id: "1",
      tipo: "cliente",
      titulo: "Novo cliente cadastrado",
      mensagem: "Restaurante Sabor & Arte acabou de se cadastrar no plano Premium.",
      data: new Date(2025, 2, 15, 10, 30),
      lida: false,
      link: "/gestao-clientes/1",
      icone: <CheckCircle className="h-5 w-5 text-green-500" />
    },
    {
      id: "2",
      tipo: "pagamento",
      titulo: "Pagamento recebido",
      mensagem: "Pagamento de R$ 350,00 confirmado da Cantina Bella Napoli.",
      data: new Date(2025, 2, 14, 15, 45),
      lida: true,
      link: "/gestao-clientes/2",
      icone: <CheckCircle className="h-5 w-5 text-green-500" />
    },
    {
      id: "3",
      tipo: "alerta",
      titulo: "Cliente com pagamento pendente",
      mensagem: "Bar do Chefe está com pagamento atrasado há 5 dias.",
      data: new Date(2025, 2, 12, 9, 15),
      lida: false,
      link: "/gestao-clientes/3",
      icone: <XCircle className="h-5 w-5 text-red-500" />
    },
    {
      id: "4",
      tipo: "sistema",
      titulo: "Atualização do sistema",
      mensagem: "Nova versão do Rook System disponível com melhorias na gestão de estoque.",
      data: new Date(2025, 2, 10, 16, 20),
      lida: true,
      icone: <Bell className="h-5 w-5 text-blue-500" />
    },
    {
      id: "5",
      tipo: "cliente",
      titulo: "Login simulado realizado",
      mensagem: "Ana Ferreira realizou login simulado como Sushi Express.",
      data: new Date(2025, 2, 9, 11, 30),
      lida: true,
      link: "/gestao-colaboradores/4",
      icone: <Eye className="h-5 w-5 text-purple-500" />
    },
    {
      id: "6",
      tipo: "sistema",
      titulo: "Backup automático realizado",
      mensagem: "Backup semanal dos dados do sistema concluído com sucesso.",
      data: new Date(2025, 2, 8, 3, 0),
      lida: true,
      icone: <CheckCircle className="h-5 w-5 text-green-500" />
    },
    {
      id: "7",
      tipo: "alerta",
      titulo: "Taxa de churn acima do normal",
      mensagem: "A taxa de churn deste mês está 1.8% acima do mês anterior.",
      data: new Date(2025, 2, 5, 8, 45),
      lida: false,
      link: "/dashboard",
      icone: <AlertIcon className="h-5 w-5 text-amber-500" />
    }
  ])
  
  // Estado para filtros
  const [filtroTipo, setFiltroTipo] = useState<string>("todos")
  
  // Função para marcar como lida
  const marcarComoLida = (id: string) => {
    setNotificacoes(
      notificacoes.map(notif => 
        notif.id === id ? { ...notif, lida: true } : notif
      )
    )
  }
  
  // Função para marcar todas como lidas
  const marcarTodasComoLidas = () => {
    setNotificacoes(
      notificacoes.map(notif => ({ ...notif, lida: true }))
    )
  }
  
  // Função para excluir notificação
  const excluirNotificacao = (id: string) => {
    setNotificacoes(
      notificacoes.filter(notif => notif.id !== id)
    )
  }

  // Filtragem das notificações
  const getNotificacoesFiltradas = () => {
    if (filtroTipo === "todos") {
      return notificacoes
    }
    if (filtroTipo === "nao-lidas") {
      return notificacoes.filter(notif => !notif.lida)
    }
    return notificacoes.filter(notif => notif.tipo === filtroTipo)
  }

  const notificacoesFiltradas = getNotificacoesFiltradas()
  const qtdNaoLidas = notificacoes.filter(notif => !notif.lida).length

  // Componente para o ícone de alerta
  function AlertIcon(props: any) {
    return <XCircle {...props} />
  }

  // Formatação da data
  const formatarData = (data: Date) => {
    const hoje = new Date()
    const ontem = new Date(hoje)
    ontem.setDate(hoje.getDate() - 1)
    
    if (data.toDateString() === hoje.toDateString()) {
      return `Hoje, ${format(data, 'HH:mm')}`
    } else if (data.toDateString() === ontem.toDateString()) {
      return `Ontem, ${format(data, 'HH:mm')}`
    } else {
      return format(data, "dd 'de' MMMM, HH:mm", { locale: ptBR })
    }
  }

  return (
    <div className="container py-8 max-w-6xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 text-muted-foreground">Dashboard</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Notificações</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
              <Bell className="h-6 w-6 text-amber-600" />
              Centro de Notificações
              {qtdNaoLidas > 0 && (
                <Badge className="bg-amber-600 ml-2">{qtdNaoLidas} não lidas</Badge>
              )}
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              Gerencie suas notificações do sistema e mantenha-se atualizado sobre as atividades importantes.
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={marcarTodasComoLidas}
              disabled={qtdNaoLidas === 0}
            >
              <MailOpen className="h-4 w-4" />
              Marcar todas como lidas
            </Button>
            <Button variant="outline" className="gap-2">
              <Settings className="h-4 w-4" />
              Configurações
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="todas" className="mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <TabsList>
            <TabsTrigger value="todas">Todas</TabsTrigger>
            <TabsTrigger value="nao-lidas">Não lidas</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select 
              defaultValue="todos" 
              onValueChange={setFiltroTipo}
              value={filtroTipo}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar por tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os tipos</SelectItem>
                <SelectItem value="sistema">Sistema</SelectItem>
                <SelectItem value="cliente">Clientes</SelectItem>
                <SelectItem value="pagamento">Pagamentos</SelectItem>
                <SelectItem value="alerta">Alertas</SelectItem>
                <SelectItem value="nao-lidas">Não lidas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <TabsContent value="todas">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {notificacoesFiltradas.length > 0 ? (
                  notificacoesFiltradas.map((notificacao) => (
                    <div 
                      key={notificacao.id} 
                      className={`p-4 flex items-start gap-4 ${!notificacao.lida ? 'bg-muted/30' : ''}`}
                    >
                      <div className="mt-1">
                        {notificacao.icone || <Bell className="h-5 w-5 text-gray-400" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-sm">
                              {notificacao.titulo}
                              {!notificacao.lida && (
                                <Badge className="bg-blue-500 ml-2 text-[10px] py-0">Nova</Badge>
                              )}
                            </h3>
                            <p className="text-muted-foreground text-sm mt-1">{notificacao.mensagem}</p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                            {formatarData(notificacao.data)}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                          {notificacao.link && (
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                              Ver detalhes
                            </Button>
                          )}
                          {!notificacao.lida && (
                            <Button 
                              variant="link" 
                              size="sm" 
                              className="h-auto p-0 text-xs"
                              onClick={() => marcarComoLida(notificacao.id)}
                            >
                              Marcar como lida
                            </Button>
                          )}
                          <Button 
                            variant="link" 
                            size="sm" 
                            className="h-auto p-0 text-xs text-red-500"
                            onClick={() => excluirNotificacao(notificacao.id)}
                          >
                            Excluir
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium">Nenhuma notificação encontrada</h3>
                    <p className="text-muted-foreground mt-1">
                      {filtroTipo === "todos" 
                        ? "Você não tem nenhuma notificação." 
                        : "Nenhuma notificação corresponde ao filtro selecionado."}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
            {notificacoesFiltradas.length > 0 && (
              <CardFooter className="flex justify-between py-4 border-t">
                <div className="text-sm text-muted-foreground">
                  Mostrando {notificacoesFiltradas.length} de {notificacoes.length} notificações
                </div>
                <Button variant="outline" size="sm">
                  Carregar mais
                </Button>
              </CardFooter>
            )}
          </Card>
        </TabsContent>
        
        <TabsContent value="nao-lidas">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {notificacoes.filter(n => !n.lida).length > 0 ? (
                  notificacoes.filter(n => !n.lida).map((notificacao) => (
                    <div 
                      key={notificacao.id} 
                      className="p-4 flex items-start gap-4 bg-muted/30"
                    >
                      <div className="mt-1">
                        {notificacao.icone || <Bell className="h-5 w-5 text-gray-400" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-sm">
                              {notificacao.titulo}
                              <Badge className="bg-blue-500 ml-2 text-[10px] py-0">Nova</Badge>
                            </h3>
                            <p className="text-muted-foreground text-sm mt-1">{notificacao.mensagem}</p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                            {formatarData(notificacao.data)}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                          {notificacao.link && (
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                              Ver detalhes
                            </Button>
                          )}
                          <Button 
                            variant="link" 
                            size="sm" 
                            className="h-auto p-0 text-xs"
                            onClick={() => marcarComoLida(notificacao.id)}
                          >
                            Marcar como lida
                          </Button>
                          <Button 
                            variant="link" 
                            size="sm" 
                            className="h-auto p-0 text-xs text-red-500"
                            onClick={() => excluirNotificacao(notificacao.id)}
                          >
                            Excluir
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-medium">Sem notificações não lidas</h3>
                    <p className="text-muted-foreground mt-1">
                      Você está em dia com todas as suas notificações.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Configurações de Notificações</CardTitle>
          <CardDescription>
            Personalize quais notificações você deseja receber e como deseja recebê-las.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-3">Notificações no Sistema</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="notif-clientes" className="flex-1">
                    Clientes
                    <p className="text-xs font-normal text-muted-foreground mt-1">
                      Novos cadastros, alterações de status e atividades de clientes.
                    </p>
                  </Label>
                  <Switch id="notif-clientes" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="notif-pagamentos" className="flex-1">
                    Pagamentos
                    <p className="text-xs font-normal text-muted-foreground mt-1">
                      Confirmações de pagamentos, falhas e renovações.
                    </p>
                  </Label>
                  <Switch id="notif-pagamentos" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="notif-sistema" className="flex-1">
                    Sistema
                    <p className="text-xs font-normal text-muted-foreground mt-1">
                      Atualizações, manutenções e comunicados gerais.
                    </p>
                  </Label>
                  <Switch id="notif-sistema" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="notif-alertas" className="flex-1">
                    Alertas
                    <p className="text-xs font-normal text-muted-foreground mt-1">
                      Alertas sobre métricas, desempenho e situações críticas.
                    </p>
                  </Label>
                  <Switch id="notif-alertas" defaultChecked />
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-sm font-medium mb-3">Notificações por E-mail</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="email-resumo" className="flex-1">
                    Resumo diário
                    <p className="text-xs font-normal text-muted-foreground mt-1">
                      Receba um resumo diário com todas as notificações importantes.
                    </p>
                  </Label>
                  <Switch id="email-resumo" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="email-alertas" className="flex-1">
                    Apenas alertas
                    <p className="text-xs font-normal text-muted-foreground mt-1">
                      Receba e-mails apenas para alertas críticos do sistema.
                    </p>
                  </Label>
                  <Switch id="email-alertas" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-4">
          <Button className="bg-amber-600 hover:bg-amber-700">
            Salvar Preferências
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}