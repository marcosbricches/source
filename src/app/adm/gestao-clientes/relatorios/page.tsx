// app/admin/clientes/relatorios/page.tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeftIcon, 
  DownloadIcon, 
  BarChart3Icon, 
  PieChartIcon, 
  LineChartIcon, 
  ListIcon,
  UsersIcon
} from "lucide-react"

export default function RelatoriosClientes() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" asChild>
            <Link href="/admin/dashboard" className="px-2 text-muted-foreground">Dashboard</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" asChild>
            <Link href="/admin/clientes" className="px-2 text-muted-foreground">Gestão de Clientes</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Relatórios</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div>
          <Badge className="mb-2" variant="outline">Análise</Badge>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Relatórios de Clientes</h1>
          <p className="text-muted-foreground max-w-3xl">
            Visualize e exporte relatórios detalhados sobre a base de clientes, análises de engajamento e métricas de desempenho.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
          <Button variant="outline" asChild className="gap-2">
            <Link href="/admin/clientes">
              <ArrowLeftIcon className="h-4 w-4" />
              Voltar para Clientes
            </Link>
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
            <DownloadIcon className="h-4 w-4" />
            Exportar Relatório
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="w-full md:w-64">
          <Select defaultValue="todos">
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os Status</SelectItem>
              <SelectItem value="ativo">Ativos</SelectItem>
              <SelectItem value="inativo">Inativos</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="w-full md:w-64">
          <Select defaultValue="todos">
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por Plano" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os Planos</SelectItem>
              <SelectItem value="basico">Básico</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="enterprise">Enterprise</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="w-full md:flex-1">
          <DateRangePicker />
        </div>
      </div>

      {/* Conteúdo com Tabs */}
      <Tabs defaultValue="resumo" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="resumo">
            <ListIcon className="h-4 w-4 mr-2" />
            Resumo de Clientes
          </TabsTrigger>
          <TabsTrigger value="engajamento">
            <LineChartIcon className="h-4 w-4 mr-2" />
            Engajamento
          </TabsTrigger>
          <TabsTrigger value="retencao">
            <UsersIcon className="h-4 w-4 mr-2" />
            Retenção e Churn
          </TabsTrigger>
          <TabsTrigger value="distribuicao">
            <PieChartIcon className="h-4 w-4 mr-2" />
            Distribuição por Plano
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="resumo">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ListIcon className="h-5 w-5 text-amber-600" />
                Resumo Consolidado de Clientes
              </CardTitle>
              <CardDescription>
                Lista detalhada com informações relevantes de todos os clientes ativos na plataforma.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 border-2 border-dashed border-muted-foreground/20 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <BarChart3Icon className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Aqui seria exibida uma tabela com o resumo detalhado de clientes, <br />
                    incluindo nome, plano, status, categoria, CMV e data de cadastro.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="engajamento">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChartIcon className="h-5 w-5 text-amber-600" />
                  Engajamento por Cliente
                </CardTitle>
                <CardDescription>
                  Análise detalhada de acessos realizados por cada cliente no período selecionado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 border-2 border-dashed border-muted-foreground/20 rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <LineChartIcon className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
                    <p className="text-muted-foreground">Gráfico de linha com engajamento ao longo do tempo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3Icon className="h-5 w-5 text-amber-600" />
                  Top 10 Clientes Mais Ativos
                </CardTitle>
                <CardDescription>
                  Ranking dos clientes com maior número de acessos e interações na plataforma.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 border-2 border-dashed border-muted-foreground/20 rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3Icon className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
                    <p className="text-muted-foreground">Gráfico de barras com os clientes mais ativos</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="retencao">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UsersIcon className="h-5 w-5 text-amber-600" />
                Taxa de Retenção e Churn
              </CardTitle>
              <CardDescription>
                Percentual de clientes ativos e inativos no período analisado, com análise de tendências.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 border-2 border-dashed border-muted-foreground/20 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center gap-12 mb-6">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-green-500">92%</h3>
                      <p className="text-sm text-muted-foreground">Taxa de Retenção</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-red-500">8%</h3>
                      <p className="text-sm text-muted-foreground">Taxa de Churn</p>
                    </div>
                  </div>
                  <LineChartIcon className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">Gráfico de tendências de retenção e churn ao longo do tempo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="distribuicao">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChartIcon className="h-5 w-5 text-amber-600" />
                Distribuição por Plano
              </CardTitle>
              <CardDescription>
                Distribuição percentual de clientes por plano contratado na plataforma.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 border-2 border-dashed border-muted-foreground/20 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <PieChartIcon className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Gráfico de pizza mostrando a distribuição de clientes por plano: <br />
                    Básico, Premium e Enterprise
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

