// app/dashboard/cliente/[id]/page.tsx
"use client"

import { ArrowLeftIcon, ArrowUpIcon, BarChart3Icon, CircleDollarSignIcon, ClockIcon, ExternalLinkIcon, LineChartIcon, MailIcon, PhoneIcon, UserIcon } from "lucide-react"
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
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ClienteDetailPage() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 text-muted-foreground" >Dashboard</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Visão Cliente</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página com info do cliente */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">Cliente #12394</Badge>
            <span className="text-muted-foreground">/</span>
            <Badge className="bg-green-500 hover:bg-green-600">Ativo</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Restaurante Sabor & Arte</h1>
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="flex items-center gap-1">
              <MailIcon className="h-4 w-4" />
              <span>contato@saborarte.com.br</span>
            </div>
            <div className="flex items-center gap-1">
              <PhoneIcon className="h-4 w-4" />
              <span>(11) 98765-4321</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
          <Button variant="outline" className="gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Voltar
          </Button>
          <Button variant="outline" className="gap-2">
            <ExternalLinkIcon className="h-4 w-4" />
            Login Simulado
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
            <UserIcon className="h-4 w-4" />
            Editar Cliente
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-3 mb-6">
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
      </div>

      {/* Indicadores principais */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faturamento</CardTitle>
            <CircleDollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 4.850,00</div>
            <div className="flex items-center text-xs text-green-600">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span>+8,3% em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CMV</CardTitle>
            <CircleDollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">34,5%</div>
            <div className="flex items-center text-xs text-red-600">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span>Acima do ideal (30-32%)</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engajamento</CardTitle>
            <BarChart3Icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78</div>
            <div className="flex items-center text-xs text-green-600">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span>+15 acessos em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tempo de Permanência</CardTitle>
            <ClockIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18 meses</div>
            <p className="text-xs text-muted-foreground">
              Cliente desde Mar/2023
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Alerta para CMV fora do ideal */}
      <Alert className="border-red-200 bg-red-50 mb-6">
        <div className="flex items-start gap-4">
          <ArrowUpIcon className="h-5 w-5 text-red-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-red-800 mb-1">CMV acima do ideal</h4>
            <AlertDescription className="text-red-700">
              O CMV atual do cliente está em 34,5%, acima da faixa ideal de 30-32%. Isso pode indicar problemas de precificação, desperdícios ou custos elevados com fornecedores.
            </AlertDescription>
          </div>
        </div>
      </Alert>

      {/* Informações do Plano */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Informações do Plano</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Plano Atual</h3>
              <p className="font-medium">Plano Profissional</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Valor Mensal</h3>
              <p className="font-medium">R$ 350,00</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Próxima Renovação</h3>
              <p className="font-medium">15/04/2025</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gráficos */}
      <Tabs defaultValue="engajamento" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="engajamento">Evolução de Engajamento</TabsTrigger>
          <TabsTrigger value="receita">Receita por Período</TabsTrigger>
        </TabsList>
        
        <TabsContent value="engajamento">
          <Card>
            <CardHeader>
              <CardTitle>Evolução de Engajamento</CardTitle>
              <CardDescription>
                Número de acessos do cliente ao longo do tempo
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center border-t pt-4">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <LineChartIcon className="h-16 w-16" />
                <p>Gráfico de linha mostrando os acessos do cliente ao longo do tempo</p>
                <p className="text-xs">(Protótipo visual - sem dados reais)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="receita">
          <Card>
            <CardHeader>
              <CardTitle>Receita por Período</CardTitle>
              <CardDescription>
                Pagamentos realizados pelo cliente nos últimos meses
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center border-t pt-4">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <BarChart3Icon className="h-16 w-16" />
                <p>Gráfico de barras detalhando os pagamentos realizados pelo cliente</p>
                <p className="text-xs">(Protótipo visual - sem dados reais)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Ações Sugeridas */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Sugeridas</CardTitle>
          <CardDescription>
            Recomendações baseadas na análise dos dados do cliente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 pb-4 border-b">
              <div className="bg-amber-100 text-amber-700 p-2 rounded-md">
                <CircleDollarSignIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Consultoria de CMV</h3>
                <p className="text-muted-foreground text-sm">
                  Agendar uma consultoria para análise do CMV e identificar oportunidades de otimização de custos.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-700 p-2 rounded-md">
                <BarChart3Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Upgrade de Plano</h3>
                <p className="text-muted-foreground text-sm">
                  O padrão de uso sugere que o cliente poderia se beneficiar do plano Enterprise com recursos avançados de análise.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}