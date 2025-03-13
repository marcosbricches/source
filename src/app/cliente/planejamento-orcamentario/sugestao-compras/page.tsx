// app/planejamento-orcamentario/sugestao-compras/page.tsx
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from "@/components/ui/card";
  import { Input } from "@/components/ui/input";
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
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
  } from "@/components/ui/table";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
  } from "@/components/ui/dropdown-menu";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
  } from "@/components/ui/select";
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
  } from "@/components/ui/tooltip";
  import {
    Popover,
    PopoverContent,
    PopoverTrigger
  } from "@/components/ui/popover";
  import { Checkbox } from "@/components/ui/checkbox";
  import { Label } from "@/components/ui/label";
  import { Switch } from "@/components/ui/switch";
  import { Progress } from "@/components/ui/progress";
  import { Separator } from "@/components/ui/separator";
  import {
    HomeIcon,
    ShoppingCartIcon,
    SearchIcon,
    FilterIcon,
    DownloadIcon,
    SendIcon,
    PlusIcon,
    MinusIcon,
    AlertTriangleIcon,
    BarChart3Icon,
    ArrowUpDownIcon,
    ClockIcon,
    TrendingUpIcon,
    TrendingDownIcon,
    CheckIcon,
    MoreVerticalIcon,
    EditIcon,
    RefreshCwIcon,
    CalendarIcon,
    BuildingIcon,
    LineChartIcon,
    DollarSignIcon,
    LayersIcon,
    InfoIcon,
    XIcon
  } from "lucide-react";
  
  export default function SugestaoCompras() {
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
              <BreadcrumbPage>Sugestão de Compras</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
  
        {/* Cabeçalho da Página */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge variant="outline" className="text-amber-600 bg-amber-50">Abril 2025</Badge>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              <CalendarIcon className="h-3 w-3 mr-1" />
              Próximo Período
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-600">
              <LayersIcon className="h-3 w-3 mr-1" />
              45 itens sugeridos
            </Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Sugestão de Compras</h1>
          <p className="text-muted-foreground mt-2">
            Recomendações automáticas para compras baseadas no histórico de consumo, estoque atual e desperdício.
          </p>
        </div>
  
        {/* Resumo e Impacto - Melhoria 7 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex items-center gap-2">
                <ShoppingCartIcon className="h-4 w-4" />
                Resumo da Compra
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-muted-foreground">Total Estimado:</span>
                  <span className="text-2xl font-bold">R$ 18.450,00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Itens prioritários:</span>
                  <span className="font-medium">R$ 8.320,00 (12 itens)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Comparado ao mês anterior:</span>
                  <span className="flex items-center text-green-600">
                    <TrendingDownIcon className="h-3.5 w-3.5 mr-1" />
                    -8.5%
                  </span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Categorias Principais:</span>
                  <span>
                    <Badge className="mr-1 bg-red-100 text-red-700">Proteínas</Badge>
                    <Badge className="bg-blue-100 text-blue-700">Laticínios</Badge>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex items-center gap-2">
                <DollarSignIcon className="h-4 w-4" />
                Impacto Projetado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-muted-foreground">CMV Projetado:</span>
                    <span className="flex items-center gap-1">
                      <span className="text-xl font-bold">30.8%</span>
                      <Badge className="bg-green-100 text-green-700">-0.4%</Badge>
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: '30.8%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Meta: 28-32%</span>
                    <span className="text-green-600">Dentro da meta</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Contribuição para o estoque:</span>
                  <span className="font-medium">+24.5%</span>
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex items-center gap-2 text-xs text-green-600">
                  <CheckIcon className="h-3.5 w-3.5" />
                  <span>Esta lista de compras mantém o CMV dentro da meta estabelecida</span>
                </div>
              </div>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex items-center gap-2">
                <InfoIcon className="h-4 w-4" />
                Acompanhamento de Estoque
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-muted-foreground">Itens em estado crítico:</span>
                    <span className="text-xl font-bold text-red-600">8</span>
                  </div>
                  <div className="p-2 bg-red-50 rounded-md text-xs text-red-600 flex items-start gap-1">
                    <AlertTriangleIcon className="h-3.5 w-3.5 mt-0.5" />
                    <span>Itens com menos de 3 dias de estoque restante</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Desperdício médio informado:</span>
                  <span className="font-medium">3.2%</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Tempo médio de reposição:</span>
                  <span className="font-medium">2.5 dias</span>
                </div>
                
                <Button variant="outline" className="w-full gap-2 mt-2" size="sm">
                  <RefreshCwIcon className="h-3.5 w-3.5" />
                  Atualizar Estoque
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
  
        {/* Barra de Ações e Filtros */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative w-full sm:w-80">
                <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input className="pl-10 w-full" placeholder="Buscar produtos..." />
              </div>
              
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas categorias</SelectItem>
                    <SelectItem value="proteina">Proteína Animal</SelectItem>
                    <SelectItem value="graos">Grãos e Cereais</SelectItem>
                    <SelectItem value="laticinios">Laticínios</SelectItem>
                  </SelectContent>
                </Select>
  
                {/* Filtro Avançado - Melhoria 1 */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="icon">
                      <FilterIcon className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-4">
                      <h4 className="font-medium">Filtros Avançados</h4>
                      
                      <div className="space-y-2">
                        <Label>Prioridade</Label>
                        <div className="flex gap-2 flex-wrap">
                          <Badge variant="outline" className="cursor-pointer hover:bg-red-50 bg-red-50 text-red-600">Crítico</Badge>
                          <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">Médio</Badge>
                          <Badge variant="outline" className="cursor-pointer hover:bg-green-50">Normal</Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Fornecedores Preferenciais</Label>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="forn1" />
                            <label htmlFor="forn1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Distribuidora Sul</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="forn2" checked />
                            <label htmlFor="forn2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Mercado Central</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="forn3" />
                            <label htmlFor="forn3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Frigorífico Premium</label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Switch id="apenas-criticos" />
                          <Label htmlFor="apenas-criticos">Apenas itens críticos</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="apenas-promocao" />
                          <Label htmlFor="apenas-promocao">Itens com preço em queda</Label>
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <Button variant="outline" size="sm">Limpar</Button>
                        <Button size="sm" className="bg-amber-600 hover:bg-amber-700">Aplicar</Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button variant="outline" className="gap-2">
                <DownloadIcon className="h-4 w-4" />
                Exportar Lista
              </Button>
              
              {/* Modo de Ajuste em Lote - Melhoria 5 */}
              <Button variant="outline" className="gap-2">
                <EditIcon className="h-4 w-4" />
                Ajuste em Lote
              </Button>
              
              <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
                <SendIcon className="h-4 w-4" />
                Gerar Pedidos
              </Button>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Label htmlFor="toggle-recomendacoes" className="text-sm text-muted-foreground cursor-pointer">Mostrar recomendações de fornecedores</Label>
                <Switch id="toggle-recomendacoes" />
              </div>
              <div className="flex items-center gap-1">
                <Label htmlFor="toggle-tendencias" className="text-sm text-muted-foreground cursor-pointer">Mostrar tendências de preço</Label>
                <Switch id="toggle-tendencias" />
              </div>
            </div>
            
            <Select defaultValue="prioridade">
              <SelectTrigger className="w-44">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="prioridade">Ordenar por Prioridade</SelectItem>
                <SelectItem value="categoria">Ordenar por Categoria</SelectItem>
                <SelectItem value="valor">Ordenar por Valor</SelectItem>
                <SelectItem value="alfabetico">Ordenar Alfabeticamente</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
  
        {/* Tabela de Sugestões de Compra */}
        <Card className="mb-8">
          <CardHeader className="px-6 py-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <ShoppingCartIcon className="h-4 w-4" />
              Itens Sugeridos para Compra
            </CardTitle>
            <CardDescription>
              Baseado no histórico de consumo, estoque atual e taxa de desperdício
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[3%]">
                    <Checkbox id="select-all" />
                  </TableHead>
                  <TableHead className="w-[15%]">Produto</TableHead>
                  <TableHead className="w-[12%] text-center">Consumo Médio Semanal</TableHead>
                  <TableHead className="w-[15%]">
                    <div className="flex items-center justify-center">
                      Estoque Atual
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <InfoIcon className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs text-xs">
                              Estoque atualizado em 12/03/2025. 
                              As cores indicam o status: 
                              Vermelho (crítico), 
                              Amarelo (baixo), 
                              Verde (adequado).
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </TableHead>
                  <TableHead className="w-[15%] text-center">Quantidade Recomendada</TableHead>
                  <TableHead className="w-[10%] text-right">Custo Estimado</TableHead>
                  <TableHead className="w-[15%] text-center">
                    <div className="flex items-center justify-center">
                      Fornecedor Sugerido
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <InfoIcon className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs text-xs">
                              Fornecedor com o melhor preço recente 
                              ou melhor classificação para este produto.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </TableHead>
                  <TableHead className="w-[10%] text-center">
                    <div className="flex items-center justify-center">
                      Tendência de Preço
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <InfoIcon className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs text-xs">
                              Tendência de preço nas últimas 
                              4 semanas para este produto.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </TableHead>
                  <TableHead className="w-[5%]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Item 1 - Crítico */}
                <TableRow className="bg-red-50">
                  <TableCell>
                    <Checkbox checked />
                  </TableCell>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <AlertTriangleIcon className="h-4 w-4 text-red-600" />
                      <div>
                        <div>Filé Mignon</div>
                        <Badge variant="outline" className="text-red-600 mt-1">Proteína</Badge>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">18 kg</TableCell>
                  <TableCell>
                    <div className="flex flex-col items-center">
                      <span className="text-red-700 font-medium">2 kg</span>
                      <div className="w-full mt-1">
                        <Progress value={10} max={100} className="h-2" indicatorClassName="bg-red-600" />
                      </div>
                      <span className="text-xs text-red-600 mt-0.5">Crítico (1 dia)</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <Button variant="outline" size="icon" className="h-7 w-7">
                        <MinusIcon className="h-3 w-3" />
                      </Button>
                      <Input type="number" value="20" className="w-16 h-7 text-center" />
                      <Button variant="outline" size="icon" className="h-7 w-7">
                        <PlusIcon className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="text-xs text-center text-muted-foreground mt-1">kg</div>
                  </TableCell>
                  <TableCell className="text-right font-medium">R$ 1.518,00</TableCell>
                  <TableCell>
                    <div className="flex flex-col items-center">
                      <Badge variant="outline" className="bg-amber-50 text-amber-700">
                        <BuildingIcon className="h-3 w-3 mr-1" />
                        Frigorífico Premium
                      </Badge>
                      <span className="text-xs text-muted-foreground mt-1">3 fornecedores disponíveis</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 text-red-600">
                        <TrendingUpIcon className="h-4 w-4" />
                        <span>+4.5%</span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-7 px-2 mt-1">
                        <LineChartIcon className="h-3 w-3 mr-1" />
                        <span className="text-xs">Ver histórico</span>
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreVerticalIcon className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <BuildingIcon className="mr-2 h-4 w-4" />
                          Ver fornecedores
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BarChart3Icon className="mr-2 h-4 w-4" />
                          Análise de consumo
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <XIcon className="mr-2 h-4 w-4" />
                          Remover da lista
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                
                {/* Item 2 - Baixo */}
                <TableRow className="bg-amber-50">
                  <TableCell>
                    <Checkbox checked />
                  </TableCell>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-amber-600" />
                      <div>
                        <div>Queijo Parmesão</div>
                        <Badge variant="outline" className="text-blue-600 mt-1">Laticínio</Badge>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">5 kg</TableCell>
                  <TableCell>
                    <div className="flex flex-col items-center">
                      <span className="text-amber-700 font-medium">2.5 kg</span>
                      <div className="w-full mt-1">
                        <Progress value={35} max={100} className="h-2" indicatorClassName="bg-amber-600" />
                      </div>
                      <span className="text-xs text-amber-600 mt-0.5">Baixo (3 dias)</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <Button variant="outline" size="icon" className="h-7 w-7">
                        <MinusIcon className="h-3 w-3" />
                      </Button>
                      <Input type="number" value="6" className="w-16 h-7 text-center" />
                      <Button variant="outline" size="icon" className="h-7 w-7">
                        <PlusIcon className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="text-xs text-center text-muted-foreground mt-1">kg</div>
                  </TableCell>
                  <TableCell className="text-right font-medium">R$ 539,40</TableCell>
                  <TableCell>
                    <div className="flex flex-col items-center">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        <BuildingIcon className="h-3 w-3 mr-1" />
                        Laticínios Brasil
                      </Badge>
                      <span className="text-xs text-muted-foreground mt-1">2 fornecedores disponíveis</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 text-green-600">
                        <TrendingDownIcon className="h-4 w-4" />
                        <span>-2.3%</span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-7 px-2 mt-1">
                        <LineChartIcon className="h-3 w-3 mr-1" />
                        <span className="text-xs">Ver histórico</span>
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreVerticalIcon className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <BuildingIcon className="mr-2 h-4 w-4" />
                          Ver fornecedores
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BarChart3Icon className="mr-2 h-4 w-4" />
                          Análise de consumo
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <XIcon className="mr-2 h-4 w-4" />
                          Remover da lista
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                
                {/* Item 3 - Normal */}
                <TableRow>
                  <TableCell>
                    <Checkbox checked />
                  </TableCell>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div>
                        <div>Arroz Arbóreo</div>
                        <Badge variant="outline" className="text-amber-600 mt-1">Grãos</Badge>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">12 kg</TableCell>
                  <TableCell>
                    <div className="flex flex-col items-center">
                      <span className="text-green-700 font-medium">15 kg</span>
                      <div className="w-full mt-1">
                        <Progress value={60} max={100} className="h-2" indicatorClassName="bg-green-600" />
                      </div>
                      <span className="text-xs text-green-600 mt-0.5">Adequado (8 dias)</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <Button variant="outline" size="icon" className="h-7 w-7">
                        <MinusIcon className="h-3 w-3" />
                      </Button>
                      <Input type="number" value="15" className="w-16 h-7 text-center" />
                      <Button variant="outline" size="icon" className="h-7 w-7">
                        <PlusIcon className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="text-xs text-center text-muted-foreground mt-1">kg</div>
                  </TableCell>
                  <TableCell className="text-right font-medium">R$ 292,50</TableCell>
                  <TableCell>
                    <div className="flex flex-col items-center">
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        <BuildingIcon className="h-3 w-3 mr-1" />
                        Distribuidora Sul
                      </Badge>
                      <span className="text-xs text-muted-foreground mt-1">5 fornecedores disponíveis</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 text-blue-600">
                        <ArrowUpDownIcon className="h-4 w-4" />
                        <span>Estável</span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-7 px-2 mt-1">
                        <LineChartIcon className="h-3 w-3 mr-1" />
                        <span className="text-xs">Ver histórico</span>
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreVerticalIcon className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <BuildingIcon className="mr-2 h-4 w-4" />
                          Ver fornecedores
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BarChart3Icon className="mr-2 h-4 w-4" />
                          Análise de consumo
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <XIcon className="mr-2 h-4 w-4" />
                          Remover da lista
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-between p-4 border-t">
            <div className="text-sm text-muted-foreground">
              Mostrando 3 de 45 itens sugeridos
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>Anterior</Button>
              <Button variant="outline" size="sm" className="px-3 bg-amber-50">1</Button>
              <Button variant="outline" size="sm" className="px-3">2</Button>
              <Button variant="outline" size="sm" className="px-3">3</Button>
              <Button variant="outline" size="sm">Próximo</Button>
            </div>
          </CardFooter>
        </Card>
  
        {/* Ajuste em Lote - Melhoria 5 (Modo Colapsado) */}
        <Card className="mb-8 border-dashed border-amber-300">
          <CardHeader className="py-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <EditIcon className="h-4 w-4 text-amber-600" />
                Ajuste em Lote
              </CardTitle>
              <Button variant="outline" size="sm" className="gap-2">
                <EditIcon className="h-3.5 w-3.5" />
                Expandir
              </Button>
            </div>
            <CardDescription>
              Ajuste as quantidades de vários produtos simultaneamente ou aplique alterações em lote
            </CardDescription>
          </CardHeader>
        </Card>
  
        {/* Menu de Navegação */}
        <div className="flex justify-between items-center">
          <Button variant="outline" className="gap-2">
            <ArrowUpDownIcon className="h-4 w-4 rotate-180" />
            CMV e Indicadores
          </Button>
          <Button variant="outline" className="gap-2">
            Dashboard
            <ArrowUpDownIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }