// app/planejamento-orcamentario/cmv-indicadores/page.tsx
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
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
  } from "@/components/ui/select";
  import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent
  } from "@/components/ui/tabs";
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
  } from "@/components/ui/tooltip";
  import { Progress } from "@/components/ui/progress";
  import { Separator } from "@/components/ui/separator";
  import { Slider } from "@/components/ui/slider";
  import { Label } from "@/components/ui/label";
  import {
    HomeIcon,
    AlertTriangleIcon,
    CheckCircleIcon,
    TrendingUpIcon,
    TrendingDownIcon,
    InfoIcon,
    CalendarIcon,
    BarChart3Icon,
    PieChartIcon,
    LineChartIcon,
    ArrowRightIcon,
    DownloadIcon,
    PrinterIcon,
    SettingsIcon,
    SlidersIcon,
    TargetIcon,
    HelpCircleIcon,
    RefreshCcwIcon,
    PlusIcon,
    MinusIcon,
    Equal
  } from "lucide-react";
  
  export default function CMVIndicadores() {
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
              <BreadcrumbLink href="/planejamento-orcamentario">
                Planejamento Orçamentário
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>CMV e Indicadores</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
  
        {/* Cabeçalho da Página */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge variant="outline" className="text-amber-600 bg-amber-50">Março 2025</Badge>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="outline" className="bg-green-50 text-green-600 cursor-help">
                    <CheckCircleIcon className="h-3 w-3 mr-1" />
                    CMV: 31.2%
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">CMV dentro da faixa ideal (28-32%)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <Badge variant="outline" className="bg-blue-50 text-blue-600">
              <BarChart3Icon className="h-3 w-3 mr-1" />
              Relatório Completo
            </Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">CMV e Indicadores Financeiros</h1>
          <p className="text-muted-foreground mt-2">
            Análise do Custo de Mercadoria Vendida e indicadores relacionados para avaliação de desempenho.
          </p>
        </div>
  
        {/* Seletor de Período e Opções de Exportação */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Período:</span>
            <Select defaultValue="mar2025">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jan2025">Janeiro 2025</SelectItem>
                <SelectItem value="fev2025">Fevereiro 2025</SelectItem>
                <SelectItem value="mar2025">Março 2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <DownloadIcon className="h-4 w-4" />
              Exportar
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <PrinterIcon className="h-4 w-4" />
              Imprimir
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <SettingsIcon className="h-4 w-4" />
              Configurar
            </Button>
          </div>
        </div>
  
        {/* Principais Indicadores - Cards em destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* CMV */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex justify-between items-center">
                <span>CMV (Percentual)</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">Custo da Mercadoria Vendida como percentual do faturamento. Ideal: entre 28% e 32%.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardTitle>
              <CardDescription>
                Percentual do faturamento destinado a insumos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">31,2%</div>
                  <div className="flex items-center mt-1 text-green-600 text-sm">
                    <TrendingDownIcon className="h-4 w-4 mr-1" />
                    <span>1,3% menor que Fev/25</span>
                  </div>
                </div>
                <div className="h-16 w-16 relative flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xs font-medium">Meta</div>
                  </div>
                  <svg className="h-16 w-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="24"
                      strokeWidth="8"
                      stroke="#e5e7eb"
                      fill="transparent"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="24"
                      strokeWidth="8"
                      stroke="#10b981"
                      strokeDasharray="150.8"
                      strokeDashoffset="30.16"
                      fill="transparent"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>0%</span>
                <div className="flex flex-col items-center">
                  <div className="flex space-x-1">
                    <div className="h-1 w-6 bg-red-300 rounded-l-full"></div>
                    <div className="h-1 w-8 bg-green-500 rounded-none"></div>
                    <div className="h-1 w-6 bg-red-300 rounded-r-full"></div>
                  </div>
                  <span className="mt-1">28% - 32%</span>
                </div>
                <span>50%</span>
              </div>
            </CardContent>
          </Card>
  
          {/* Margem de Contribuição */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex justify-between items-center">
                <span>Margem de Contribuição</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">Receita total menos custos variáveis (CMV). Quanto maior, melhor a eficiência operacional.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardTitle>
              <CardDescription>
                Lucro bruto após custos variáveis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">R$ 98.240,00</div>
                  <div className="flex items-center mt-1 text-blue-600 text-sm">
                    <TrendingUpIcon className="h-4 w-4 mr-1" />
                    <span>5,8% maior que Fev/25</span>
                  </div>
                </div>
                <div className="h-16 w-16 relative flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xs font-medium">68,8%</div>
                  </div>
                  <svg className="h-16 w-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="24"
                      strokeWidth="8"
                      stroke="#e5e7eb"
                      fill="transparent"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="24"
                      strokeWidth="8"
                      stroke="#3b82f6"
                      strokeDasharray="150.8"
                      strokeDashoffset="47.04896"
                      fill="transparent"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Alvo: {'>'}65%</span>
                <span className="text-blue-600 font-medium">3,8% acima da meta</span>
              </div>
            </CardContent>
          </Card>
  
          {/* Lucro Operacional */}
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex justify-between items-center">
                <span>Lucro Operacional</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">Receita menos todos os custos operacionais (incluindo CMV e despesas fixas).</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardTitle>
              <CardDescription>
                Receita após dedução de custos operacionais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">R$ 28.430,00</div>
                  <div className="flex items-center mt-1 text-amber-600 text-sm">
                    <TrendingUpIcon className="h-4 w-4 mr-1" />
                    <span>2,1% maior que Fev/25</span>
                  </div>
                </div>
                <div className="h-16 w-16 relative flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xs font-medium">19,8%</div>
                  </div>
                  <svg className="h-16 w-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="24"
                      strokeWidth="8"
                      stroke="#e5e7eb"
                      fill="transparent"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="24"
                      strokeWidth="8"
                      stroke="#f59e0b"
                      strokeDasharray="150.8"
                      strokeDashoffset="120.94"
                      fill="transparent"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Alvo: {'>'}15%</span>
                <span className="text-amber-600 font-medium">4,8% acima da meta</span>
              </div>
            </CardContent>
          </Card>
        </div>
  
        {/* Detalhamento do Cálculo de CMV - Melhoria 7 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Equal className="h-4 w-4" />
              Detalhamento do Cálculo de CMV
            </CardTitle>
            <CardDescription>
              Fórmula: CMV = Estoque Inicial + Compras do Período - Estoque Final
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
              <div className="flex flex-col items-center p-4 border rounded-md w-full md:w-auto">
                <span className="text-sm text-muted-foreground mb-1">Estoque Inicial</span>
                <span className="text-xl font-semibold">R$ 13.200,00</span>
              </div>
              
              <PlusIcon className="h-6 w-6 text-muted-foreground hidden md:block" />
              
              <div className="flex flex-col items-center p-4 border rounded-md w-full md:w-auto bg-amber-50 border-amber-200">
                <span className="text-sm text-muted-foreground mb-1">Compras do Período</span>
                <span className="text-xl font-semibold">R$ 24.835,00</span>
              </div>
              
              <MinusIcon className="h-6 w-6 text-muted-foreground hidden md:block" />
              
              <div className="flex flex-col items-center p-4 border rounded-md w-full md:w-auto">
                <span className="text-sm text-muted-foreground mb-1">Estoque Final</span>
                <span className="text-xl font-semibold">R$ 13.700,00</span>
              </div>
              
              <Equal className="h-6 w-6 text-muted-foreground hidden md:block" />
              
              <div className="flex flex-col items-center p-4 border rounded-md w-full md:w-auto bg-green-50 border-green-200">
                <span className="text-sm text-muted-foreground mb-1">CMV</span>
                <span className="text-xl font-semibold">R$ 24.335,00</span>
                <span className="text-sm text-muted-foreground mt-1">(31,2% do faturamento)</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <div className="text-sm text-muted-foreground mb-4">Faturamento do Período: <span className="font-medium">R$ 142.800,00</span></div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Evolução do Estoque</span>
                      <span className="text-xs text-green-600">+3,8% no período</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-muted-foreground">Inicial</span>
                        <span className="text-sm font-medium">R$ 13.200</span>
                      </div>
                      
                      <div className="h-2 flex-1 bg-slate-100 rounded-full relative">
                        <div className="absolute inset-0 flex items-center justify-start pl-2">
                          <div className="h-4 w-4 rounded-full bg-blue-500 border-2 border-white z-10"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-end pr-2">
                          <div className="h-4 w-4 rounded-full bg-blue-700 border-2 border-white z-10"></div>
                        </div>
                        <div className="h-2 w-[104%] bg-blue-100 rounded-full"></div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-muted-foreground">Final</span>
                        <span className="text-sm font-medium">R$ 13.700</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-sm font-medium">Variação de Estoque vs. Compras</span>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                        <span className="text-xs text-muted-foreground">Variação de Estoque</span>
                        <span className="text-xs font-medium ml-auto">R$ 500,00</span>
                        <span className="text-xs text-blue-600">2% das compras</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
                        <span className="text-xs text-muted-foreground">Total de Compras</span>
                        <span className="text-xs font-medium ml-auto">R$ 24.835,00</span>
                        <span className="text-xs text-amber-600">98% utilizado</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="space-y-2">
                    <span className="text-sm font-medium">Detalhes do CMV</span>
                    
                    <div className="p-3 bg-slate-50 rounded-md">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">CMV Absoluto</span>
                        <span className="text-sm font-medium">R$ 24.335,00</span>
                      </div>
                      
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Faturamento</span>
                        <span className="text-sm font-medium">R$ 78.000,00</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-sm">CMV Percentual</span>
                        <span className="text-sm font-medium">31,2%</span>
                      </div>
                      
                      <Separator className="my-3" />
                      
                      <div className="flex justify-between text-xs text-green-600">
                        <span>Dentro da meta (28-32%)</span>
                        <span>+0,2% vs. benchmark do setor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
  
        {/* Abas para diferentes visualizações de análise */}
        <Tabs defaultValue="evolucao" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="evolucao" className="gap-2">
              <LineChartIcon className="h-4 w-4" />
              Evolução Histórica
            </TabsTrigger>
            <TabsTrigger value="categorias" className="gap-2">
              <PieChartIcon className="h-4 w-4" />
              Análise por Categoria
            </TabsTrigger>
            <TabsTrigger value="simulacao" className="gap-2">
              <SlidersIcon className="h-4 w-4" />
              Simulação de Cenários
            </TabsTrigger>
          </TabsList>
          
          {/* Aba de Evolução Histórica - Melhoria 1 */}
          <TabsContent value="evolucao" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Evolução do CMV</CardTitle>
                <CardDescription>
                  Análise dos últimos 6 meses mostrando tendências e variações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 w-full flex items-center justify-center mb-6 bg-slate-50 rounded-md border">
                  {/* Este é apenas um placeholder para o gráfico de evolução histórica */}
                  <div className="text-center p-4">
                    <BarChart3Icon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <div className="text-sm text-muted-foreground">
                      [Visualização do gráfico de evolução do CMV mensal]
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-6 gap-2">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Out/24</div>
                    <div className="text-sm font-medium">33,8%</div>
                    <Badge variant="outline" className="text-red-600 bg-red-50 text-xs mt-1">
                      <TrendingUpIcon className="h-2 w-2 mr-1" />
                      Alto
                    </Badge>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Nov/24</div>
                    <div className="text-sm font-medium">32,6%</div>
                    <Badge variant="outline" className="text-amber-600 bg-amber-50 text-xs mt-1">
                      <TrendingDownIcon className="h-2 w-2 mr-1" />
                      Limite
                    </Badge>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Dez/24</div>
                    <div className="text-sm font-medium">32,9%</div>
                    <Badge variant="outline" className="text-amber-600 bg-amber-50 text-xs mt-1">
                      <TrendingUpIcon className="h-2 w-2 mr-1" />
                      Limite
                    </Badge>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Jan/25</div>
                    <div className="text-sm font-medium">32,1%</div>
                    <Badge variant="outline" className="text-amber-600 bg-amber-50 text-xs mt-1">
                      <TrendingDownIcon className="h-2 w-2 mr-1" />
                      Limite
                    </Badge>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Fev/25</div>
                    <div className="text-sm font-medium">31,5%</div>
                    <Badge variant="outline" className="text-green-600 bg-green-50 text-xs mt-1">
                      <TrendingDownIcon className="h-2 w-2 mr-1" />
                      Ideal
                    </Badge>
                  </div>
                  <div className="text-center border-l-2 border-amber-300 pl-2">
                    <div className="text-xs text-amber-700 font-medium">Mar/25</div>
                    <div className="text-sm font-bold text-amber-800">31,2%</div>
                    <Badge variant="outline" className="text-green-600 bg-green-50 text-xs mt-1">
                      <TrendingDownIcon className="h-2 w-2 mr-1" />
                      Ideal
                    </Badge>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Tendência:</span> CMV em declínio constante nos últimos 6 meses
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <DownloadIcon className="h-3 w-3" />
                    Relatório de Tendências
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Aba de Análise por Categoria - Melhoria 2 */}
          <TabsContent value="categorias" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">CMV por Categoria</CardTitle>
                <CardDescription>
                  Detalhamento da contribuição de cada categoria de produtos para o CMV total
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2">
                    <div className="h-64 w-full flex items-center justify-center mb-6 bg-slate-50 rounded-md border">
                      {/* Este é apenas um placeholder para o gráfico de pizza de categorias */}
                      <div className="text-center p-4">
                        <PieChartIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <div className="text-sm text-muted-foreground">
                          [Visualização do gráfico de categorias de CMV]
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <h3 className="text-sm font-medium mb-3">Detalhamento por Categoria</h3>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                            <span className="text-sm font-medium">Proteína Animal</span>
                          </div>
                          <span className="text-sm font-medium">R$ 9.490,65</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <Progress value={39} className="h-2 [&>div]:bg-red-500" />
                          <span className="text-xs text-muted-foreground ml-2">39%</span>
                        </div>
                        <div className="text-xs text-muted-foreground flex justify-between">
                          <span>Maior categoria do CMV</span>
                          <Badge variant="outline" className="text-red-600 bg-red-50 text-xs">
                            <AlertTriangleIcon className="h-2 w-2 mr-1" />
                            +2,3% vs. Fev/25
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                            <span className="text-sm font-medium">Laticínios</span>
                          </div>
                          <span className="text-sm font-medium">R$ 4.867,00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <Progress value={20} className="h-2 [&>div]:bg-blue-500" />
                          <span className="text-xs text-muted-foreground ml-2">20%</span>
                        </div>
                        <div className="text-xs text-muted-foreground flex justify-between">
                          <span>Custo estável</span>
                          <Badge variant="outline" className="text-green-600 bg-green-50 text-xs">
                            <CheckCircleIcon className="h-2 w-2 mr-1" />
                            -0,5% vs. Fev/25
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
                            <span className="text-sm font-medium">Grãos e Cereais</span>
                          </div>
                          <span className="text-sm font-medium">R$ 5.110,35</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <Progress value={21} className="h-2 [&>div]:bg-amber-500" />
                          <span className="text-xs text-muted-foreground ml-2">21%</span>
                        </div>
                        <div className="text-xs text-muted-foreground flex justify-between">
                          <span>Aumento no volume</span>
                          <Badge variant="outline" className="text-amber-600 bg-amber-50 text-xs">
                            <TrendingUpIcon className="h-2 w-2 mr-1" />
                            +1,8% vs. Fev/25
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                            <span className="text-sm font-medium">Outros</span>
                          </div>
                          <span className="text-sm font-medium">R$ 4.867,00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <Progress value={20} className="h-2 [&>div]:bg-green-500" />
                          <span className="text-xs text-muted-foreground ml-2">20%</span>
                        </div>
                        <div className="text-xs text-muted-foreground flex justify-between">
                          <span>Diversas categorias</span>
                          <Badge variant="outline" className="text-blue-600 bg-blue-50 text-xs">
                            <InfoIcon className="h-2 w-2 mr-1" />
                            Estável
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Aba de Simulação de Cenários - Melhoria 3 */}
          <TabsContent value="simulacao" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Simulação de Cenários de CMV</CardTitle>
                <CardDescription>
                  Avalie o impacto de mudanças no preço, volume ou composição de insumos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
                  <div className="flex gap-3">
                    <InfoIcon className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-amber-800">Ferramenta de Simulação</h4>
                      <p className="text-xs text-amber-700 mt-1">
                        Ajuste os parâmetros abaixo para visualizar como seriam seus indicadores 
                        financeiros em diferentes cenários. Isto não altera seus dados reais.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-medium mb-4">Ajuste de Parâmetros</h3>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="preco_proteina">Preço de Proteínas</Label>
                          <span className="text-xs text-muted-foreground">+15%</span>
                        </div>
                        <Slider defaultValue={[15]} max={50} step={1} className="w-full" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Atual</span>
                          <span>+50%</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="volume_vendas">Volume de Vendas</Label>
                          <span className="text-xs text-muted-foreground">+5%</span>
                        </div>
                        <Slider defaultValue={[5]} max={30} step={1} className="w-full" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Atual</span>
                          <span>+30%</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="estoque_final">Estoque Final</Label>
                          <span className="text-xs text-muted-foreground">-10%</span>
                        </div>
                        <Slider defaultValue={[-10]} min={-30} max={30} step={1} className="w-full" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>-30%</span>
                          <span>+30%</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full gap-2 mt-2">
                        <RefreshCcwIcon className="h-4 w-4" />
                        Resetar Simulação
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-4">Resultado da Simulação</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 border rounded-md">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">CMV Simulado</span>
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-bold">35,8%</span>
                            <Badge className="bg-red-100 text-red-800 text-xs">+4,6%</Badge>
                          </div>
                        </div>
                        <Progress value={35.8} max={50} className="h-2 mb-2" />
                        <div className="text-xs text-red-600">
                          Acima da faixa ideal (28-32%)
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-md">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Margem de Contribuição</span>
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-bold">64,2%</span>
                            <Badge className="bg-red-100 text-red-800 text-xs">-4,6%</Badge>
                          </div>
                        </div>
                        <Progress value={64.2} max={100} className="h-2 mb-2" />
                        <div className="text-xs text-amber-600">
                          Ligeiramente abaixo da meta (65%)
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-md">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Impacto Projetado (mensal)</span>
                          <span className="text-sm font-bold text-red-600">-R$ 6.570,00</span>
                        </div>
                        <div className="text-xs text-muted-foreground mb-3">
                          Redução projetada no lucro operacional mensal
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-xs flex justify-between">
                            <span>Lucro Atual</span>
                            <span className="font-medium">R$ 28.430,00</span>
                          </div>
                          <div className="text-xs flex justify-between">
                            <span>Lucro Projetado</span>
                            <span className="font-medium">R$ 21.860,00</span>
                          </div>
                          <div className="text-xs flex justify-between">
                            <span>Variação Anual Estimada</span>
                            <span className="font-medium text-red-600">-R$ 78.840,00</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 gap-2 mt-2">
                        <DownloadIcon className="h-4 w-4" />
                        Exportar Simulação
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
  
        {/* Alertas e Recomendações - Melhoria 4 */}
        <Card className="mb-8 border-green-200">
          <CardHeader className="pb-2 bg-green-50">
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-green-600" />
              Recomendações e Alertas
            </CardTitle>
            <CardDescription>
              Insights e sugestões baseadas na análise dos seus indicadores atuais
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">CMV dentro da meta</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Seu CMV de 31,2% está dentro da faixa ideal (28-32%), indicando um bom
                    balanceamento entre custo de produtos e preço de venda.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">Tendência positiva contínua</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    A redução constante do CMV nos últimos 6 meses indica melhorias
                    na gestão de compras e estoque.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <AlertTriangleIcon className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">Atenção ao aumento do custo de proteínas</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    O custo de proteína animal aumentou 2,3% em relação ao mês anterior,
                    o que pode pressionar o CMV nos próximos meses. Considere estratégias de
                    mitigação, como revisão de fornecedores ou ajuste de cardápio.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <TrendingUpIcon className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">Oportunidade de melhoria</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    O crescimento do valor de estoque final (+3,8%) pode ser uma oportunidade
                    para otimizar a gestão de estoque e reduzir capital imobilizado.
                  </p>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-dashed">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Benchmark do Setor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground space-y-2">
                    <div className="flex justify-between">
                      <span>CMV médio do setor:</span>
                      <span className="font-medium">31,0%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Seu CMV atual:</span>
                      <span className="font-medium">31,2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Posição relativa:</span>
                      <span className="font-medium text-green-600">Top 40%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-dashed">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Meta de CMV</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground space-y-2">
                    <div className="flex justify-between">
                      <span>Meta estabelecida:</span>
                      <span className="font-medium">28-32%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Situação atual:</span>
                      <span className="font-medium text-green-600">Dentro da meta</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Próxima meta:</span>
                      <span className="font-medium">30% até Jun/25</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-dashed">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Sugestões de Ação</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Revisar acordos com fornecedores de proteínas</li>
                    <li>Otimizar rotatividade de estoque</li>
                    <li>Monitorar variação de preços dos insumos principais</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" size="sm" className="gap-1">
              <TargetIcon className="h-4 w-4" />
              Definir Novas Metas
            </Button>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 gap-1">
              <ArrowRightIcon className="h-4 w-4" />
              Ações Recomendadas
            </Button>
          </CardFooter>
        </Card>
  
        {/* Menu de Navegação */}
        <div className="flex justify-between items-center">
          <Button variant="outline" className="gap-2">
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            Compras Categorizadas
          </Button>
          <Button variant="outline" className="gap-2">
            Sugestão de Compras
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }