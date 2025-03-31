// app/resultados/dashboards/page.tsx
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle, 
    CardDescription,
    CardFooter
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
  import { Badge } from "@/components/ui/badge"
  import { Separator } from "@/components/ui/separator"
  import { 
    HomeIcon, 
    BarChartIcon, 
    FilterIcon, 
    DownloadIcon,
    ChevronDownIcon,
    ArrowDownIcon,
    ArrowUpIcon,
    DollarSignIcon,
    UsersIcon,
    PackageIcon,
    CalendarIcon,
    MoveRightIcon,
    PieChartIcon,
    InfoIcon,
    ListIcon
  } from "lucide-react"
  
  export default function DashboardsRestaurantes() {
    return (
      <div className="container py-8 max-w-7xl mx-auto">
        {/* Navegação/Breadcrumbs */}
        <div className="flex items-center border-b pb-4 mb-6">
          <nav className="flex">
            <Button variant="link" className="px-2 text-muted-foreground">
              <HomeIcon className="h-4 w-4 mr-1" />
              Dashboard
            </Button>
            <span className="text-muted-foreground flex items-center">/</span>
            <Button variant="link" className="px-2 text-muted-foreground">
              <BarChartIcon className="h-4 w-4 mr-1" />
              Resultados
            </Button>
            <span className="text-muted-foreground flex items-center">/</span>
            <Button variant="link" className="px-2 font-medium">
              <PieChartIcon className="h-4 w-4 mr-1" />
              Dashboards Restaurantes
            </Button>
          </nav>
        </div>
        
        {/* Cabeçalho da página */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">Resultados</Badge>
              <span className="text-muted-foreground">/</span>
              <Badge variant="outline">Análise</Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard Gerencial</h1>
            <p className="text-muted-foreground max-w-3xl">
              Visão consolidada dos principais indicadores financeiros e operacionais do seu restaurante
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <Button variant="outline" className="gap-2">
              <CalendarIcon className="h-4 w-4" />
              Março 2025
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="gap-2">
              <FilterIcon className="h-4 w-4" />
              Filtros
            </Button>
            <Button variant="outline" className="gap-2 text-blue-600 border-blue-200 hover:bg-blue-50">
              <DownloadIcon className="h-4 w-4" />
              Exportar
            </Button>
            <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
              <ChevronDownIcon className="h-4 w-4" />
              Atualizar
            </Button>
          </div>
        </div>
        
        {/* Indicadores principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Card de Faturamento */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-0.5">
                  <p className="text-sm text-muted-foreground">Faturamento Mensal</p>
                  <h2 className="text-3xl font-bold">R$ 215.490</h2>
                </div>
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <DollarSignIcon className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Badge className="bg-green-100 text-green-700 gap-1 border-0">
                  <ArrowUpIcon className="h-3 w-3" />
                  12%
                </Badge>
                <span className="text-sm text-muted-foreground">vs. mês anterior</span>
              </div>
            </CardContent>
          </Card>
          
          {/* Card de CMV */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-0.5">
                  <p className="text-sm text-muted-foreground">CMV</p>
                  <h2 className="text-3xl font-bold">31,2%</h2>
                </div>
                <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <PackageIcon className="h-5 w-5 text-amber-600" />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Badge className="bg-amber-100 text-amber-700 gap-1 border-0">
                  <ArrowDownIcon className="h-3 w-3" />
                  0,8%
                </Badge>
                <span className="text-sm text-muted-foreground">vs. mês anterior</span>
              </div>
            </CardContent>
          </Card>
          
          {/* Card de Lucro Operacional */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-0.5">
                  <p className="text-sm text-muted-foreground">Lucro Operacional</p>
                  <h2 className="text-3xl font-bold">R$ 42.985</h2>
                </div>
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <BarChartIcon className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Badge className="bg-green-100 text-green-700 gap-1 border-0">
                  <ArrowUpIcon className="h-3 w-3" />
                  5,2%
                </Badge>
                <span className="text-sm text-muted-foreground">vs. mês anterior</span>
              </div>
            </CardContent>
          </Card>
          
          {/* Card de Ticket Médio */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-0.5">
                  <p className="text-sm text-muted-foreground">Ticket Médio</p>
                  <h2 className="text-3xl font-bold">R$ 78,45</h2>
                </div>
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <UsersIcon className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Badge className="bg-red-100 text-red-700 gap-1 border-0">
                  <ArrowDownIcon className="h-3 w-3" />
                  2,1%
                </Badge>
                <span className="text-sm text-muted-foreground">vs. mês anterior</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Gráficos principais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Gráfico de Faturamento x CMV */}
          <Card className="col-span-1">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Faturamento x CMV</CardTitle>
                  <CardDescription>Evolução mensal comparativa</CardDescription>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <InfoIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pb-6">
              <div className="aspect-[4/3] bg-gray-100 rounded flex items-center justify-center">
                <p className="text-muted-foreground">Gráfico: Faturamento vs. CMV (últimos 6 meses)</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Gráfico de Margem de Contribuição */}
          <Card className="col-span-1">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Margem de Contribuição</CardTitle>
                  <CardDescription>Por categoria de produto</CardDescription>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <InfoIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pb-6">
              <div className="aspect-[4/3] bg-gray-100 rounded flex items-center justify-center">
                <p className="text-muted-foreground">Gráfico: Margem de contribuição por categoria</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Análise detalhada por categoria */}
        <div className="mb-6">
          <Tabs defaultValue="geral" className="w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Análise Detalhada</h2>
              <TabsList>
                <TabsTrigger value="geral">Visão Geral</TabsTrigger>
                <TabsTrigger value="categorias">Por Categoria</TabsTrigger>
                <TabsTrigger value="produtos">Por Produto</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="geral">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Coluna 1: Comparativo Planejado/Realizado */}
                    <div>
                      <h3 className="text-lg font-medium mb-4">Planejado vs. Realizado</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Faturamento</span>
                            <span className="text-sm text-green-600 font-medium">+2,5%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-2 bg-green-500 rounded-full" style={{ width: '102.5%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Planejado: R$ 210.000</span>
                            <span>Realizado: R$ 215.490</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">CMV</span>
                            <span className="text-sm text-amber-600 font-medium">+0,2%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-2 bg-amber-500 rounded-full" style={{ width: '100.2%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Planejado: 31,0%</span>
                            <span>Realizado: 31,2%</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Lucro</span>
                            <span className="text-sm text-green-600 font-medium">+4,8%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-2 bg-green-500 rounded-full" style={{ width: '104.8%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Planejado: R$ 41.000</span>
                            <span>Realizado: R$ 42.985</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Coluna 2: Estoque e Compras */}
                    <div>
                      <h3 className="text-lg font-medium mb-4">Estoque e Compras</h3>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Estoque Atual</span>
                            <span className="text-sm font-medium">12 dias</span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-2">
                            <div className="h-2 bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                        </div>
                        
                        <div className="p-4 border rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Total de Compras</span>
                            <span className="text-sm font-medium">R$ 67.230</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-amber-100 text-amber-700 gap-1 border-0">
                              <ArrowUpIcon className="h-3 w-3" />
                              5%
                            </Badge>
                            <span className="text-xs text-muted-foreground">vs. mês anterior</span>
                          </div>
                        </div>
                        
                        <div className="p-4 border rounded-lg bg-green-50 border-green-100">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-green-800">Economia Estimada</span>
                            <span className="text-sm font-medium text-green-800">R$ 3.450</span>
                          </div>
                          <p className="text-xs text-green-700">
                            Economia baseada nas sugestões de compras implementadas
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Coluna 3: Forecast e Tendências */}
                    <div>
                      <h3 className="text-lg font-medium mb-4">Forecast e Tendências</h3>
                      <div className="space-y-4">
                        <Card className="border-blue-200 bg-blue-50">
                          <CardContent className="p-4">
                            <h4 className="font-medium text-blue-800 mb-2">Próximo Mês (Previsão)</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-blue-700">Faturamento</span>
                                <span className="text-sm font-medium text-blue-700">R$ 226.264</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-blue-700">CMV Estimado</span>
                                <span className="text-sm font-medium text-blue-700">30,8%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-blue-700">Lucro Projetado</span>
                                <span className="text-sm font-medium text-blue-700">R$ 45.990</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">Categorias em Alta</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm">Bebidas Alcoólicas</span>
                              <Badge className="bg-green-100 text-green-700 gap-1 border-0">
                                <ArrowUpIcon className="h-3 w-3" />
                                8,2%
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Sobremesas</span>
                              <Badge className="bg-green-100 text-green-700 gap-1 border-0">
                                <ArrowUpIcon className="h-3 w-3" />
                                6,5%
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="categorias">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Análise detalhada por categoria de produtos</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="produtos">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Análise detalhada por produto</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sugestões de ação */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Sugestões de Ação</CardTitle>
            <CardDescription>
              Recomendações baseadas na análise dos seus dados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <PackageIcon className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Renegociação de fornecedores</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Os preços de carnes bovinas estão 12% acima da média do mercado. 
                    Sugerimos renegociar com seus fornecedores atuais ou buscar alternativas.
                  </p>
                  <Button size="sm" variant="outline" className="h-8 gap-2">
                    Ver detalhes
                    <MoveRightIcon className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <DollarSignIcon className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Ajuste de preços sugerido</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Identificamos 5 itens do cardápio com margens abaixo de 60%. 
                    Um pequeno ajuste de preços pode melhorar sua lucratividade.
                  </p>
                  <Button size="sm" variant="outline" className="h-8 gap-2">
                    Ver detalhes
                    <MoveRightIcon className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Rodapé com filtros e exportação */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            Dados atualizados em: 19/03/2025 às 08:15
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="h-8 gap-2">
              <ListIcon className="h-4 w-4" />
              Ver relatório completo
            </Button>
            <Button variant="outline" size="sm" className="h-8 gap-2">
              <DownloadIcon className="h-4 w-4" />
              Exportar dados
            </Button>
          </div>
        </div>
      </div>
    )
  }