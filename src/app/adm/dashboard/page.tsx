// app/dashboard/page.tsx
"use client"

import { ArrowDownIcon, ArrowUpIcon, BarChart3Icon, CircleDollarSignIcon, FileBarChart2Icon, LineChartIcon, PieChartIcon, UsersIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function DashboardPage() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 font-medium">Dashboard</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard Geral</h1>
        <p className="text-muted-foreground max-w-3xl">
          Visão consolidada do desempenho da plataforma, incluindo métricas gerais de clientes, receita e engajamento.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-3">
          <Select defaultValue="mensal">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semanal">Semanal</SelectItem>
              <SelectItem value="mensal">Mensal</SelectItem>
              <SelectItem value="anual">Anual</SelectItem>
              <SelectItem value="personalizado">Personalizado</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="todas">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tipo de Métrica" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas as métricas</SelectItem>
              <SelectItem value="receita">Receita</SelectItem>
              <SelectItem value="engajamento">Engajamento</SelectItem>
              <SelectItem value="churn">Churn</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="todos">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Plano de Assinatura" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os planos</SelectItem>
              <SelectItem value="basico">Plano Básico</SelectItem>
              <SelectItem value="profissional">Plano Profissional</SelectItem>
              <SelectItem value="enterprise">Plano Enterprise</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="bg-amber-600 hover:bg-amber-700 gap-2 w-full md:w-auto">
          <FileBarChart2Icon className="h-4 w-4" />
          Exportar Relatório
        </Button>
      </div>

      {/* Indicadores principais */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">
              +12 no último mês
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
            <CircleDollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 43.675,00</div>
            <div className="flex items-center text-xs text-green-600">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span>+5,2% em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Retenção</CardTitle>
            <LineChartIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92,3%</div>
            <div className="flex items-center text-xs text-green-600">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span>+1,8% em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Churn</CardTitle>
            <BarChart3Icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7,7%</div>
            <div className="flex items-center text-xs text-red-600">
              <ArrowDownIcon className="h-3 w-3 mr-1" />
              <span>-1,8% em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <Tabs defaultValue="evolucao" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="evolucao">Evolução de Receita</TabsTrigger>
          <TabsTrigger value="distribuicao">Distribuição por Planos</TabsTrigger>
          <TabsTrigger value="engajamento">Engajamento por Período</TabsTrigger>
          <TabsTrigger value="churn">Churn Mensal</TabsTrigger>
        </TabsList>
        
        <TabsContent value="evolucao">
          <Card>
            <CardHeader>
              <CardTitle>Evolução de Receita</CardTitle>
              <CardDescription>
                Receita mensal acumulada ao longo do ano atual
              </CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center border-t pt-4">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <LineChartIcon className="h-16 w-16" />
                <p>Gráfico de linha mostrando a receita mensal acumulada</p>
                <p className="text-xs">(Protótipo visual - sem dados reais)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="distribuicao">
          <Card>
            <CardHeader>
              <CardTitle>Distribuição por Planos</CardTitle>
              <CardDescription>
                Proporção de clientes em cada plano de assinatura
              </CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center border-t pt-4">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <PieChartIcon className="h-16 w-16" />
                <p>Gráfico de pizza com a proporção de clientes por plano</p>
                <p className="text-xs">(Protótipo visual - sem dados reais)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="engajamento">
          <Card>
            <CardHeader>
              <CardTitle>Engajamento por Período</CardTitle>
              <CardDescription>
                Número de acessos mensais dos clientes na plataforma
              </CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center border-t pt-4">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <BarChart3Icon className="h-16 w-16" />
                <p>Gráfico de barras exibindo o número de acessos mensais</p>
                <p className="text-xs">(Protótipo visual - sem dados reais)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="churn">
          <Card>
            <CardHeader>
              <CardTitle>Churn Mensal</CardTitle>
              <CardDescription>
                Evolução da taxa de churn mês a mês
              </CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center border-t pt-4">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <LineChartIcon className="h-16 w-16" />
                <p>Gráfico de linha mostrando a evolução da taxa de churn</p>
                <p className="text-xs">(Protótipo visual - sem dados reais)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Visão Detalhada */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Clientes por Status</CardTitle>
            <CardDescription>Distribuição de clientes ativos e inativos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-500 hover:bg-green-600">Ativos</Badge>
                  <span>228 clientes</span>
                </div>
                <span className="text-sm font-medium">92,3%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-gray-500">Inativos</Badge>
                  <span>19 clientes</span>
                </div>
                <span className="text-sm font-medium">7,7%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Engajamento Geral</CardTitle>
            <CardDescription>Total de acessos no mês atual</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">Total de acessos</span>
                <span className="text-2xl font-bold">1.843</span>
              </div>
              <div className="flex items-center text-sm text-green-600">
                <ArrowUpIcon className="h-3 w-3 mr-1" />
                <span>+12,4% em relação ao mês anterior (1.640 acessos)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}