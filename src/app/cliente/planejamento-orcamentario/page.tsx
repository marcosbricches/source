// app/planejamento-orcamentario/page.tsx
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
  } from "@/components/ui/breadcrumb";
  import { Badge } from "@/components/ui/badge";
  import { Progress } from "@/components/ui/progress";
  import { Separator } from "@/components/ui/separator";
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  import {
    HomeIcon,
    DollarSignIcon,
    ClipboardListIcon,
    ShoppingCartIcon,
    BarChart3Icon,
    LineChartIcon,
    ArrowRightIcon,
    CalendarIcon,
    ClockIcon,
    AlertTriangleIcon,
    CheckCircleIcon,
    TrendingUpIcon,
    TrendingDownIcon,
    RefreshCwIcon,
    FolderIcon,
    ChevronRightIcon,
    PlusIcon,
    PieChartIcon,
    FileTextIcon,
    ListIcon,
    ActivityIcon,
    CheckIcon,
    BellIcon,
    PanelRightIcon,
    ChevronsRight
  } from "lucide-react";
  
  export default function PlanejamentoOrcamentario() {
    return (
      <div className="container mx-auto py-8 max-w-7xl">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <HomeIcon className="h-4 w-4 mr-2" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Planejamento Orçamentário</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
  
        {/* Cabeçalho da Página */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge variant="outline" className="text-amber-600 bg-amber-50">Março 2025</Badge>
            <Badge className="bg-blue-100 text-blue-800">
              <CalendarIcon className="h-3 w-3 mr-1" />
              Período Atual
            </Badge>
            <Badge variant="outline" className="bg-green-50 text-green-600">
              <CheckIcon className="h-3 w-3 mr-1" />
              CMV: 31.2%
            </Badge>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Planejamento Orçamentário</h1>
              <p className="text-muted-foreground mt-2">
                Acompanhamento financeiro, análise de custos e gestão de compras do seu restaurante.
              </p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <PlusIcon className="h-4 w-4" />
                    Novo Período
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Iniciar novo período?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Isso criará um novo período de planejamento para Abril 2025. O período atual
                      será arquivado e utilizado como referência para o novo.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className="bg-amber-600 hover:bg-amber-700">Confirmar</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              
              <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
                <FileTextIcon className="h-4 w-4" />
                Gerar Relatório
              </Button>
            </div>
          </div>
        </div>
  
        {/* Status de Completude do Período - Melhoria 2 */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Status do Período Atual (Março 2025)</CardTitle>
            <CardDescription>
              Acompanhe o progresso das tarefas e atividades do período atual
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-0">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
              <div className="col-span-1 md:col-span-3">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Preenchimento de Dados</span>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Concluído</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Compras Categorizadas</span>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Concluído</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Análise de CMV e Indicadores</span>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Concluído</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <ClockIcon className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium">Sugestão de Compras (próximo período)</span>
                      </div>
                      <Badge className="bg-amber-100 text-amber-700">Em andamento</Badge>
                    </div>
                    <Progress value={65} className="h-2" indicatorClassName="bg-amber-500" />
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 flex flex-col justify-center p-4 bg-slate-50 rounded-md">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-green-600">75%</span>
                  <p className="text-sm text-muted-foreground">Completude do período atual</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <div className="flex justify-center items-center gap-1">
                      <ActivityIcon className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">3/4</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Tarefas concluídas</p>
                  </div>
                  <div>
                    <div className="flex justify-center items-center gap-1">
                      <CalendarIcon className="h-4 w-4 text-amber-600" />
                      <span className="text-sm font-medium">22/31</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Dias decorridos</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button variant="outline" className="w-full gap-2">
                    <ListIcon className="h-4 w-4" />
                    Ver todas as tarefas
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
  
        {/* KPIs Principais - Melhoria 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-green-50 to-white border-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <DollarSignIcon className="h-4 w-4" />
                  CMV
                </span>
                <Badge className="bg-green-100 text-green-700">Meta atingida</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-baseline">
                <div className="text-3xl font-bold">31,2%</div>
                <div className="flex items-center text-green-600 text-sm">
                  <TrendingDownIcon className="h-4 w-4 mr-1" />
                  <span>-1,3%</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground mt-1">vs. Fevereiro 2025 (32,5%)</div>
              <Separator className="my-3" />
              <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                Ver análise completa
                <ChevronRightIcon className="h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <PieChartIcon className="h-4 w-4" />
                  Margem de Contribuição
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-baseline">
                <div className="text-3xl font-bold">68,8%</div>
                <div className="flex items-center text-blue-600 text-sm">
                  <TrendingUpIcon className="h-4 w-4 mr-1" />
                  <span>+1,3%</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground mt-1">vs. Fevereiro 2025 (67,5%)</div>
              <Separator className="my-3" />
              <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                Ver análise completa
                <ChevronRightIcon className="h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-amber-50 to-white border-amber-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <BarChart3Icon className="h-4 w-4" />
                  Lucro Operacional
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-baseline">
                <div className="text-3xl font-bold">19,8%</div>
                <div className="flex items-center text-amber-600 text-sm">
                  <TrendingUpIcon className="h-4 w-4 mr-1" />
                  <span>+0,5%</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground mt-1">vs. Fevereiro 2025 (19,3%)</div>
              <Separator className="my-3" />
              <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                Ver análise completa
                <ChevronRightIcon className="h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <ShoppingCartIcon className="h-4 w-4" />
                  Compras
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-baseline">
                <div className="text-3xl font-bold">R$ 24.835</div>
                <div className="flex items-center text-green-600 text-sm">
                  <TrendingDownIcon className="h-4 w-4 mr-1" />
                  <span>-12,5%</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground mt-1">vs. Fevereiro 2025 (R$ 28.380)</div>
              <Separator className="my-3" />
              <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                Ver análise completa
                <ChevronRightIcon className="h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
        </div>
  
        {/* Seções Principais com Navegação Contextual - Melhoria 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <BarChart3Icon className="h-5 w-5" />
                  Visão Geral Financeira
                </span>
                <Badge variant="outline" className="text-blue-600 bg-blue-50">Últimos 6 meses</Badge>
              </CardTitle>
              <CardDescription>
                Acompanhe a evolução dos seus principais indicadores financeiros
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-1">
              <div className="h-64 w-full flex items-center justify-center mb-4 bg-slate-50 rounded-md border">
                {/* Placeholder para o gráfico de evolução dos indicadores */}
                <div className="text-center p-4">
                  <LineChartIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <div className="text-sm text-muted-foreground">
                    [Visualização do gráfico de evolução dos indicadores financeiros]
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center space-y-1">
                  <div className="inline-flex items-center gap-1 text-green-600">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs font-medium">CMV (%)</span>
                  </div>
                  <div className="text-sm font-bold">31,2%</div>
                  <div className="text-xs text-muted-foreground">Tendência: ↓</div>
                </div>
                
                <div className="text-center space-y-1">
                  <div className="inline-flex items-center gap-1 text-blue-600">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-xs font-medium">Margem (%)</span>
                  </div>
                  <div className="text-sm font-bold">68,8%</div>
                  <div className="text-xs text-muted-foreground">Tendência: ↑</div>
                </div>
                
                <div className="text-center space-y-1">
                  <div className="inline-flex items-center gap-1 text-amber-600">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="text-xs font-medium">Lucro (%)</span>
                  </div>
                  <div className="text-sm font-bold">19,8%</div>
                  <div className="text-xs text-muted-foreground">Tendência: ↑</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <Button variant="outline" size="sm" className="gap-1">
                <CalendarIcon className="h-3.5 w-3.5" />
                Alterar período
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <BarChart3Icon className="h-3.5 w-3.5" />
                Análise detalhada
              </Button>
            </CardFooter>
          </Card>
  
          {/* Alertas Prioritários - Melhoria 4 */}
          <Card className="bg-gradient-to-b from-amber-50 to-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <BellIcon className="h-5 w-5 text-amber-600" />
                Alertas Prioritários
              </CardTitle>
              <CardDescription>
                Itens que precisam de atenção imediata
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <div className="space-y-4">
                <div className="flex gap-3 p-3 bg-red-50 border border-red-100 rounded-md">
                  <AlertTriangleIcon className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-red-800">8 itens com estoque crítico</h4>
                    <p className="text-xs text-red-700 mt-1">
                      Filé Mignon e outros 7 itens com menos de 3 dias de estoque.
                    </p>
                    <Button size="sm" variant="outline" className="mt-2 h-8 text-xs gap-1 border-red-200 text-red-700 hover:bg-red-50 hover:text-red-800">
                      <ShoppingCartIcon className="h-3 w-3" />
                      Ver sugestão de compras
                    </Button>
                  </div>
                </div>
                
                <div className="flex gap-3 p-3 bg-amber-50 border border-amber-100 rounded-md">
                  <TrendingUpIcon className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-amber-800">Aumento no custo de proteínas</h4>
                    <p className="text-xs text-amber-700 mt-1">
                      Custo de proteína animal aumentou 2,3% vs. mês anterior.
                    </p>
                    <Button size="sm" variant="outline" className="mt-2 h-8 text-xs gap-1 border-amber-200 text-amber-700 hover:bg-amber-50 hover:text-amber-800">
                      <BarChart3Icon className="h-3 w-3" />
                      Analisar impacto
                    </Button>
                  </div>
                </div>
                
                <div className="flex gap-3 p-3 bg-blue-50 border border-blue-100 rounded-md">
                  <ClockIcon className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-800">Preparar compras para Abril</h4>
                    <p className="text-xs text-blue-700 mt-1">
                      Faltam 9 dias para o início do próximo período.
                    </p>
                    <Button size="sm" variant="outline" className="mt-2 h-8 text-xs gap-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800">
                      <CalendarIcon className="h-3 w-3" />
                      Iniciar planejamento
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4">
              <Button variant="ghost" size="sm" className="w-full justify-center gap-1 text-xs">
                <BellIcon className="h-3.5 w-3.5" />
                Ver todos os alertas (5)
              </Button>
            </CardFooter>
          </Card>
        </div>
  
        {/* Navegação para Módulos e Ações Rápidas - Melhoria 6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="md:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Módulos do Planejamento Orçamentário</CardTitle>
              <CardDescription>
                Acesse as principais funcionalidades do planejamento financeiro
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto py-4 px-4 flex justify-between hover:bg-green-50" asChild>
                <a href="/planejamento-orcamentario/preenchimento-dados">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2 mb-1">
                      <ClipboardListIcon className="h-5 w-5 text-green-600" />
                      <span className="font-medium">Preenchimento de Dados</span>
                    </div>
                    <p className="text-xs text-muted-foreground text-left">
                      Informações financeiras e operacionais básicas
                    </p>
                  </div>
                  <ChevronsRight className="h-5 w-5 text-muted-foreground" />
                </a>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 px-4 flex justify-between hover:bg-purple-50" asChild>
                <a href="/planejamento-orcamentario/compras-categorizadas">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2 mb-1">
                      <ShoppingCartIcon className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">Compras Categorizadas</span>
                    </div>
                    <p className="text-xs text-muted-foreground text-left">
                      Registro e classificação de compras por categoria
                    </p>
                  </div>
                  <ChevronsRight className="h-5 w-5 text-muted-foreground" />
                </a>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 px-4 flex justify-between hover:bg-blue-50" asChild>
                <a href="/planejamento-orcamentario/cmv-indicadores">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2 mb-1">
                      <BarChart3Icon className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">CMV e Indicadores</span>
                    </div>
                    <p className="text-xs text-muted-foreground text-left">
                      Análise de indicadores financeiros e CMV
                    </p>
                  </div>
                  <ChevronsRight className="h-5 w-5 text-muted-foreground" />
                </a>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 px-4 flex justify-between hover:bg-amber-50" asChild>
                <a href="/planejamento-orcamentario/sugestao-compras">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2 mb-1">
                      <ShoppingCartIcon className="h-5 w-5 text-amber-600" />
                      <span className="font-medium">Sugestão de Compras</span>
                    </div>
                    <p className="text-xs text-muted-foreground text-left">
                      Recomendações de compras baseadas no histórico
                    </p>
                  </div>
                  <ChevronsRight className="h-5 w-5 text-muted-foreground" />
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Ações Rápidas</CardTitle>
              <CardDescription>
                Acesso direto às tarefas mais comuns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <PlusIcon className="h-4 w-4 text-green-600" />
                Registrar nova compra
              </Button>
              
              <Button variant="outline" className="w-full justify-start gap-2">
                <RefreshCwIcon className="h-4 w-4 text-blue-600" />
                Atualizar estoque
              </Button>
              
              <Button variant="outline" className="w-full justify-start gap-2">
                <FileTextIcon className="h-4 w-4 text-amber-600" />
                Gerar relatório do período
              </Button>
              
              <Button variant="outline" className="w-full justify-start gap-2">
                <PanelRightIcon className="h-4 w-4 text-purple-600" />
                Configurar metas de CMV
              </Button>
            </CardContent>
          </Card>
        </div>
  
        {/* Previsões e Tendências - Melhoria 7 */}
        <Card className="mb-6 bg-slate-50 border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <LineChartIcon className="h-5 w-5" />
              Previsões e Tendências
            </CardTitle>
            <CardDescription>
              Projeções baseadas nos seus dados históricos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-md border">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium flex items-center gap-1">
                    <DollarSignIcon className="h-4 w-4 text-amber-600" />
                    CMV Projetado (Abr/25)
                  </h3>
                  <Badge className="bg-green-100 text-green-700">Favorável</Badge>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold">30,8%</span>
                  <span className="text-sm text-green-600">-0,4% vs. Mar/25</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Baseado na tendência dos últimos 3 meses e sazonalidade.
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-md border">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium flex items-center gap-1">
                    <ShoppingCartIcon className="h-4 w-4 text-blue-600" />
                    Compras Esperadas (Abr/25)
                  </h3>
                  <Badge className="bg-blue-100 text-blue-700">Informativo</Badge>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold">R$ 23.950</span>
                  <span className="text-sm text-blue-600">-3,6% vs. Mar/25</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Projeção considerando calendário de eventos e ocupação.
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-md border">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium flex items-center gap-1">
                    <BarChart3Icon className="h-4 w-4 text-green-600" />
                    Lucro Operacional (Abr/25)
                  </h3>
                  <Badge className="bg-green-100 text-green-700">Favorável</Badge>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold">R$ 29.400</span>
                  <span className="text-sm text-green-600">+3,4% vs. Mar/25</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Projeção baseada nas tendências de receita e custos.
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white rounded-md border">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium mb-1">Insights para o Próximo Período</h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Recomendações baseadas na análise de tendências dos dados históricos
                  </p>
                </div>
                <Badge variant="outline" className="text-amber-600">Abril 2025</Badge>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex gap-2 items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">A tendência de redução do CMV deve continuar</p>
                    <p className="text-xs text-muted-foreground">Mantenha a estratégia atual de compras e controle de desperdício.</p>
                  </div>
                </div>
                
                <div className="flex gap-2 items-start">
                  <TrendingUpIcon className="h-4 w-4 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Preços de proteínas tendem a continuar subindo</p>
                    <p className="text-xs text-muted-foreground">Considere renegociar com fornecedores ou ajustar o cardápio temporariamente.</p>
                  </div>
                </div>
                
                <div className="flex gap-2 items-start">
                  <TrendingDownIcon className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Oportunidade de redução nos custos de laticínios</p>
                    <p className="text-xs text-muted-foreground">Histórico indica queda sazonal de preços em Abril. Considere aumentar estoque.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
  
        {/* Períodos Anteriores */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <FolderIcon className="h-5 w-5" />
              Períodos Anteriores
            </CardTitle>
            <CardDescription>
              Acesse os dados históricos para comparação e análise
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-md">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Fevereiro 2025</p>
                    <p className="text-xs text-muted-foreground">CMV: 32,5% | Lucro: 19,3%</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-md">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Janeiro 2025</p>
                    <p className="text-xs text-muted-foreground">CMV: 33,1% | Lucro: 18,7%</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-md">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Dezembro 2024</p>
                    <p className="text-xs text-muted-foreground">CMV: 32,9% | Lucro: 18,3%</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" className="w-full">
              Ver todos os períodos
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }