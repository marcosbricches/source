// app/(admin)/logs-atividades/page.tsx
"use client"

import { useState } from "react"
import { Activity, AlertTriangle, Download, Filter, Search, Shield, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

// Interface para eventos de log
interface LogEvent {
  id: string
  timestamp: Date
  usuario: {
    id: string
    nome: string
    cargo: string
  }
  acao: string
  tipo: "cliente" | "plano" | "colaborador" | "sistema" | "acesso"
  entidade?: {
    id: string
    nome: string
    tipo: string
  }
  detalhes?: string
  ip?: string
  severidade: "info" | "aviso" | "critico"
}

export default function LogsAtividadesPage() {
  // Dados de exemplo para logs (em um caso real, viriam da API)
  const [logs, setLogs] = useState<LogEvent[]>([
    {
      id: "log1",
      timestamp: new Date(2025, 2, 18, 10, 30),
      usuario: {
        id: "1",
        nome: "João Silva",
        cargo: "Supervisor Financeiro"
      },
      acao: "Login simulado",
      tipo: "acesso",
      entidade: {
        id: "cliente3",
        nome: "Restaurante Sabor & Arte",
        tipo: "cliente"
      },
      detalhes: "Login simulado como cliente para verificação de funcionalidades",
      ip: "189.28.154.87",
      severidade: "info"
    },
    {
      id: "log2",
      timestamp: new Date(2025, 2, 18, 9, 45),
      usuario: {
        id: "4",
        nome: "Ana Ferreira",
        cargo: "Administrador"
      },
      acao: "Alteração de status",
      tipo: "colaborador",
      entidade: {
        id: "colab3",
        nome: "Pedro Alves",
        tipo: "colaborador"
      },
      detalhes: "Status alterado de Ativo para Inativo",
      ip: "189.28.154.90",
      severidade: "aviso"
    },
    {
      id: "log3",
      timestamp: new Date(2025, 2, 17, 15, 20),
      usuario: {
        id: "4",
        nome: "Ana Ferreira",
        cargo: "Administrador"
      },
      acao: "Exclusão",
      tipo: "plano",
      entidade: {
        id: "plano4",
        nome: "Plano Teste",
        tipo: "plano"
      },
      detalhes: "Plano excluído do sistema",
      ip: "189.28.154.90",
      severidade: "aviso"
    },
    {
      id: "log4",
      timestamp: new Date(2025, 2, 17, 14, 10),
      usuario: {
        id: "1",
        nome: "João Silva",
        cargo: "Supervisor Financeiro"
      },
      acao: "Criação",
      tipo: "cliente",
      entidade: {
        id: "cliente5",
        nome: "Padaria Nova Aurora",
        tipo: "cliente"
      },
      detalhes: "Novo cliente adicionado no sistema",
      ip: "189.28.154.87",
      severidade: "info"
    },
    {
      id: "log5",
      timestamp: new Date(2025, 2, 16, 9, 30),
      usuario: {
        id: "sistema",
        nome: "Sistema",
        cargo: "Automação"
      },
      acao: "Backup",
      tipo: "sistema",
      detalhes: "Backup automático diário realizado com sucesso",
      severidade: "info"
    },
    {
      id: "log6",
      timestamp: new Date(2025, 2, 15, 11, 45),
      usuario: {
        id: "2",
        nome: "Maria Santos",
        cargo: "Operacional"
      },
      acao: "Tentativa de acesso não autorizado",
      tipo: "acesso",
      detalhes: "Tentativa de acesso a área restrita sem permissões adequadas",
      ip: "189.28.155.100",
      severidade: "critico"
    },
    {
      id: "log7",
      timestamp: new Date(2025, 2, 15, 10, 20),
      usuario: {
        id: "4",
        nome: "Ana Ferreira",
        cargo: "Administrador"
      },
      acao: "Alteração",
      tipo: "plano",
      entidade: {
        id: "plano2",
        nome: "Plano Premium",
        tipo: "plano"
      },
      detalhes: "Valor mensal alterado de R$ 189,90 para R$ 199,90",
      ip: "189.28.154.90",
      severidade: "info"
    },
    {
      id: "log8",
      timestamp: new Date(2025, 2, 14, 16, 30),
      usuario: {
        id: "5",
        nome: "Carlos Mendes",
        cargo: "Operacional"
      },
      acao: "Login",
      tipo: "acesso",
      detalhes: "Login realizado com sucesso",
      ip: "189.28.156.25",
      severidade: "info"
    },
    {
      id: "log9",
      timestamp: new Date(2025, 2, 14, 14, 15),
      usuario: {
        id: "sistema",
        nome: "Sistema",
        cargo: "Automação"
      },
      acao: "Alerta",
      tipo: "sistema",
      detalhes: "Pico de uso detectado: 95% de utilização de recursos",
      severidade: "aviso"
    },
    {
      id: "log10",
      timestamp: new Date(2025, 2, 14, 10, 0),
      usuario: {
        id: "1",
        nome: "João Silva",
        cargo: "Supervisor Financeiro"
      },
      acao: "Exportação",
      tipo: "sistema",
      detalhes: "Exportação de relatório de clientes",
      ip: "189.28.154.87",
      severidade: "info"
    }
  ])
  
  // Estados para filtros
  const [filtroTipo, setFiltroTipo] = useState<string>("todos")
  const [filtroSeveridade, setFiltroSeveridade] = useState<string>("todos")
  const [filtroUsuario, setFiltroUsuario] = useState<string>("todos")
  const [busca, setBusca] = useState<string>("")
  const [dataInicio, setDataInicio] = useState<string>("")
  const [dataFim, setDataFim] = useState<string>("")
  
  // Função para filtrar logs
  const getLogsFiltrados = () => {
    return logs.filter(log => {
      // Filtro por tipo
      if (filtroTipo !== "todos" && log.tipo !== filtroTipo) {
        return false
      }
      
      // Filtro por severidade
      if (filtroSeveridade !== "todos" && log.severidade !== filtroSeveridade) {
        return false
      }
      
      // Filtro por usuário
      if (filtroUsuario !== "todos" && log.usuario.id !== filtroUsuario) {
        return false
      }
      
      // Filtro por texto de busca
      if (busca) {
        const buscaLower = busca.toLowerCase()
        const matchAcao = log.acao.toLowerCase().includes(buscaLower)
        const matchUsuario = log.usuario.nome.toLowerCase().includes(buscaLower)
        const matchEntidade = log.entidade ? log.entidade.nome.toLowerCase().includes(buscaLower) : false
        const matchDetalhes = log.detalhes ? log.detalhes.toLowerCase().includes(buscaLower) : false
        
        if (!matchAcao && !matchUsuario && !matchEntidade && !matchDetalhes) {
          return false
        }
      }
      
      // Filtro por data de início
      if (dataInicio) {
        const dataInicioObj = new Date(dataInicio)
        if (log.timestamp < dataInicioObj) {
          return false
        }
      }
      
      // Filtro por data de fim
      if (dataFim) {
        const dataFimObj = new Date(dataFim)
        dataFimObj.setHours(23, 59, 59, 999) // Fim do dia
        if (log.timestamp > dataFimObj) {
          return false
        }
      }
      
      return true
    })
  }
  
  const logsFiltrados = getLogsFiltrados()
  
  // Função para exportar logs
  const exportarLogs = () => {
    alert("Função de exportação seria implementada aqui")
  }
  
  // Lista de usuários únicos para o filtro
  const usuarios = Array.from(new Set(logs.map(log => log.usuario.id))).map(id => {
    const usuario = logs.find(log => log.usuario.id === id)?.usuario
    return { id, nome: usuario?.nome || "Desconhecido" }
  })
  
  // Formatação da data
  const formatarDataHora = (data: Date) => {
    return format(data, "dd/MM/yyyy HH:mm:ss", { locale: ptBR })
  }
  
  // Função para obter a cor do badge de severidade
  const getSeveridadeColor = (severidade: string) => {
    switch (severidade) {
      case 'info': return 'bg-blue-500 hover:bg-blue-600'
      case 'aviso': return 'bg-amber-500 hover:bg-amber-600'
      case 'critico': return 'bg-red-500 hover:bg-red-600'
      default: return 'bg-gray-500 hover:bg-gray-600'
    }
  }
  
  // Função para obter o ícone do tipo de log
  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'cliente':
        return <Users className="h-4 w-4" />
      case 'plano':
        return <Activity className="h-4 w-4" />
      case 'colaborador':
        return <User className="h-4 w-4" />
      case 'sistema':
        return <Shield className="h-4 w-4" />
      case 'acesso':
        return <Shield className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  return (
    <div className="container py-8 max-w-7xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 text-muted-foreground">Dashboard</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Registro de Atividades</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
              <Activity className="h-6 w-6 text-amber-600" />
              Registro de Atividades
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              Monitore todas as ações realizadas no sistema para auditoria e segurança.
            </p>
          </div>
          <div>
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={exportarLogs}
            >
              <Download className="h-4 w-4" />
              Exportar Logs
            </Button>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            Filtros
          </CardTitle>
          <CardDescription>
            Refine os registros por tipo, severidade, usuário ou período.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Tipo de Atividade</label>
              <Select 
                defaultValue="todos" 
                onValueChange={setFiltroTipo}
                value={filtroTipo}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Todos os tipos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os tipos</SelectItem>
                  <SelectItem value="cliente">Clientes</SelectItem>
                  <SelectItem value="plano">Planos</SelectItem>
                  <SelectItem value="colaborador">Colaboradores</SelectItem>
                  <SelectItem value="sistema">Sistema</SelectItem>
                  <SelectItem value="acesso">Acessos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Severidade</label>
              <Select 
                defaultValue="todos" 
                onValueChange={setFiltroSeveridade}
                value={filtroSeveridade}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Todas as severidades" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todas as severidades</SelectItem>
                  <SelectItem value="info">Informativo</SelectItem>
                  <SelectItem value="aviso">Aviso</SelectItem>
                  <SelectItem value="critico">Crítico</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Usuário</label>
              <Select 
                defaultValue="todos" 
                onValueChange={setFiltroUsuario}
                value={filtroUsuario}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Todos os usuários" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os usuários</SelectItem>
                  {usuarios.map(usuario => (
                    <SelectItem key={usuario.id} value={usuario.id}>
                      {usuario.nome}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Busca</label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Buscar nos logs..." 
                  className="pl-9"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Data Inicial</label>
              <Input 
                type="date" 
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Data Final</label>
              <Input 
                type="date"
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabela de Logs */}
      <Card>
        <CardHeader>
          <CardTitle>Registro de Atividades</CardTitle>
          <CardDescription>
            {logsFiltrados.length} {logsFiltrados.length === 1 ? 'registro encontrado' : 'registros encontrados'}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Data/Hora</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Usuário</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Ação</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Entidade</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Tipo</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Severidade</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">IP</th>
                </tr>
              </thead>
              <tbody>
                {logsFiltrados.length > 0 ? (
                  logsFiltrados.map((log) => (
                    <tr key={log.id} className="border-b hover:bg-muted/30">
                      <td className="p-4 align-middle">
                        <div className="text-sm">{formatarDataHora(log.timestamp)}</div>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="font-medium text-sm">{log.usuario.nome}</div>
                        <div className="text-xs text-muted-foreground">{log.usuario.cargo}</div>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="text-sm">{log.acao}</div>
                      </td>
                      <td className="p-4 align-middle">
                        {log.entidade ? (
                          <div className="text-sm">{log.entidade.nome}</div>
                        ) : (
                          <div className="text-sm text-muted-foreground">-</div>
                        )}
                      </td>
                      <td className="p-4 align-middle">
                        <Badge variant="outline" className="gap-1">
                          {getTipoIcon(log.tipo)}
                          <span className="capitalize">{log.tipo}</span>
                        </Badge>
                      </td>
                      <td className="p-4 align-middle">
                        <Badge className={`${getSeveridadeColor(log.severidade)}`}>
                          {log.severidade === 'info' && 'Informativo'}
                          {log.severidade === 'aviso' && 'Aviso'}
                          {log.severidade === 'critico' && 'Crítico'}
                        </Badge>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="text-sm">{log.ip || '-'}</div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="p-8 text-center">
                      <AlertTriangle className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <h3 className="text-lg font-medium">Nenhum registro encontrado</h3>
                      <p className="text-muted-foreground mt-1">
                        Tente modificar os filtros para encontrar o que procura.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
        {logsFiltrados.length > 0 && (
          <CardFooter className="flex justify-between py-4 border-t">
            <div className="text-sm text-muted-foreground">
              Mostrando {logsFiltrados.length} de {logs.length} registros
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled={logsFiltrados.length >= logs.length}>
                Carregar mais
              </Button>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}