// app/planejamento-orcamentario/compras-categorizadas/page.tsx
import { 
    Card, 
    CardContent,
    CardFooter,
    CardHeader, 
    CardTitle,
    CardDescription
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
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
  } from "@/components/ui/dialog";
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
  import { Label } from "@/components/ui/label";
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
  import { 
    HomeIcon, 
    PlusIcon, 
    CalendarIcon, 
    UploadIcon, 
    SearchIcon, 
    MoreVerticalIcon, 
    EditIcon, 
    TrashIcon,
    FileIcon,
    FilterIcon,
    CheckIcon,
    AlertTriangleIcon,
    BarChart3Icon,
    ArrowUpDownIcon,
    DownloadIcon,
    SaveIcon,
    ChevronsUpDownIcon,
    PieChartIcon,
    LightbulbIcon,
    DollarSignIcon
  } from "lucide-react";
  import { Separator } from "@/components/ui/separator";
  import { Progress } from "@/components/ui/progress";
  
  export default function ComprasCategorizadas() {
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
              <BreadcrumbPage>Compras Categorizadas</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
  
        {/* Cabeçalho da Página */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge variant="outline" className="text-amber-600 bg-amber-50">Março 2025</Badge>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
              <DollarSignIcon className="h-3 w-3 mr-1" />
              R$ 24.835,00 em compras
            </Badge>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="outline" className="bg-green-50 text-green-600 cursor-help">
                    <ArrowUpDownIcon className="h-3 w-3 mr-1" />
                    -12,5% vs. Fevereiro
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Redução de 12,5% no volume de compras em relação ao mês anterior</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Compras Categorizadas</h1>
          <p className="text-muted-foreground mt-2">
            Registre e classifique compras por categoria para análises detalhadas de custos.
          </p>
        </div>
  
        {/* Resumo por Categoria - Melhoria 1 */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <PieChartIcon className="h-4 w-4" />
              Resumo por Categoria
            </CardTitle>
            <CardDescription>
              Distribuição das compras do período por categoria de insumo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Proteína Animal</span>
                  <span className="text-sm font-semibold">R$ 9.650,00</span>
                </div>
                <Progress value={39} className="h-2 bg-slate-100" indicatorClassName="bg-red-500" />
                <span className="text-xs text-muted-foreground">39% do total</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Laticínios</span>
                  <span className="text-sm font-semibold">R$ 4.870,00</span>
                </div>
                <Progress value={20} className="h-2 bg-slate-100" indicatorClassName="bg-blue-500" />
                <span className="text-xs text-muted-foreground">20% do total</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Grãos e Cereais</span>
                  <span className="text-sm font-semibold">R$ 5.215,00</span>
                </div>
                <Progress value={21} className="h-2 bg-slate-100" indicatorClassName="bg-amber-500" />
                <span className="text-xs text-muted-foreground">21% do total</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Outros</span>
                  <span className="text-sm font-semibold">R$ 5.100,00</span>
                </div>
                <Progress value={20} className="h-2 bg-slate-100" indicatorClassName="bg-green-500" />
                <span className="text-xs text-muted-foreground">20% do total</span>
              </div>
            </div>
          </CardContent>
        </Card>
  
        {/* Barra de Ações e Filtros Avançados - Melhoria 2 e 3 */}
        <div className="flex flex-col gap-4 mb-6">
          <Tabs defaultValue="todos" className="w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <TabsList className="mb-0">
                <TabsTrigger value="todos">Todos</TabsTrigger>
                <TabsTrigger value="proteina">Proteínas</TabsTrigger>
                <TabsTrigger value="laticinios">Laticínios</TabsTrigger>
                <TabsTrigger value="graos">Grãos</TabsTrigger>
                <TabsTrigger value="outros">Outros</TabsTrigger>
              </TabsList>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Button variant="outline" className="w-full sm:w-auto gap-2">
                  <DownloadIcon className="h-4 w-4" />
                  Exportar Dados
                </Button>
                
                <Button variant="outline" className="w-full sm:w-auto gap-2">
                  <UploadIcon className="h-4 w-4" />
                  Importar CSV/Excel
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 gap-2">
                      <PlusIcon className="h-4 w-4" />
                      Nova Compra
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Registrar Nova Compra</DialogTitle>
                      <DialogDescription>
                        Cadastre os detalhes do produto adquirido e classifique adequadamente.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <Tabs defaultValue="simples" className="w-full mt-4">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="simples">Entrada Simples</TabsTrigger>
                        <TabsTrigger value="multipla">
                          <LightbulbIcon className="h-3 w-3 mr-1" />
                          Entrada Múltipla
                        </TabsTrigger>
                      </TabsList>
                      
                      {/* Aba de Entrada Simples */}
                      <TabsContent value="simples">
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="descricao">Descrição do Produto</Label>
                            <Input id="descricao" placeholder="Ex: Camarão, Farinha de Trigo" />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="categoria">Categoria</Label>
                              <Select>
                                <SelectTrigger id="categoria">
                                  <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="proteina">Proteína Animal</SelectItem>
                                  <SelectItem value="graos">Grãos e Cereais</SelectItem>
                                  <SelectItem value="laticinios">Laticínios</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="grid gap-2">
                              <Label htmlFor="subcategoria">Subcategoria</Label>
                              <Select>
                                <SelectTrigger id="subcategoria">
                                  <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="carnes_nobres">Carnes Nobres</SelectItem>
                                  <SelectItem value="massas">Massas Artesanais</SelectItem>
                                  <SelectItem value="leite">Leite e Derivados</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="quantidade">Quantidade</Label>
                              <Input id="quantidade" type="number" step="0.01" placeholder="0.00" />
                            </div>
                            
                            <div className="grid gap-2">
                              <Label htmlFor="unidade">Unidade de Medida</Label>
                              <Select>
                                <SelectTrigger id="unidade">
                                  <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="kg">Quilograma (kg)</SelectItem>
                                  <SelectItem value="l">Litro (L)</SelectItem>
                                  <SelectItem value="un">Unidade (un)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="valor_unitario">Valor Unitário</Label>
                              <Input id="valor_unitario" type="number" step="0.01" placeholder="R$ 0.00" />
                            </div>
                            
                            <div className="grid gap-2">
                              <Label htmlFor="data_compra">Data da Compra</Label>
                              <div className="relative">
                                <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input id="data_compra" type="date" className="pl-10" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      
                      {/* Aba de Entrada Múltipla - Melhoria 6 */}
                      <TabsContent value="multipla">
                        <div className="grid gap-4 py-4">
                          <div className="bg-amber-50 border border-amber-100 rounded-md p-3 mb-2">
                            <div className="flex gap-2 items-start">
                              <LightbulbIcon className="h-5 w-5 text-amber-600 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium text-amber-800">Entrada rápida de múltiplos produtos</p>
                                <p className="text-xs text-amber-700 mt-1">Cadastre vários produtos de uma só vez, com a mesma data e categoria.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="categoria_multipla">Categoria</Label>
                              <Select>
                                <SelectTrigger id="categoria_multipla">
                                  <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="proteina">Proteína Animal</SelectItem>
                                  <SelectItem value="graos">Grãos e Cereais</SelectItem>
                                  <SelectItem value="laticinios">Laticínios</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="grid gap-2">
                              <Label htmlFor="data_multipla">Data da Compra</Label>
                              <div className="relative">
                                <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input id="data_multipla" type="date" className="pl-10" />
                              </div>
                            </div>
                          </div>
                          
                          <Separator className="my-2" />
                          
                          <div className="space-y-4">
                            {/* Produto 1 */}
                            <div className="grid grid-cols-7 gap-2 items-end">
                              <div className="col-span-3">
                                <Label htmlFor="produto1" className="text-xs">Produto</Label>
                                <Input id="produto1" placeholder="Descrição" size="sm" />
                              </div>
                              <div>
                                <Label htmlFor="qtd1" className="text-xs">Qtd</Label>
                                <Input id="qtd1" type="number" step="0.01" size="sm" />
                              </div>
                              <div>
                                <Label htmlFor="un1" className="text-xs">Un</Label>
                                <Select>
                                  <SelectTrigger id="un1" className="h-9">
                                    <SelectValue placeholder="Un" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="kg">kg</SelectItem>
                                    <SelectItem value="l">L</SelectItem>
                                    <SelectItem value="un">un</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label htmlFor="valor1" className="text-xs">Valor Un.</Label>
                                <Input id="valor1" type="number" step="0.01" size="sm" />
                              </div>
                              <div className="flex items-center justify-center">
                                <Button variant="ghost" size="icon" className="h-9 w-9">
                                  <TrashIcon className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            
                            {/* Produto 2 */}
                            <div className="grid grid-cols-7 gap-2 items-end">
                              <div className="col-span-3">
                                <Input placeholder="Descrição" size="sm" />
                              </div>
                              <div>
                                <Input type="number" step="0.01" size="sm" />
                              </div>
                              <div>
                                <Select>
                                  <SelectTrigger className="h-9">
                                    <SelectValue placeholder="Un" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="kg">kg</SelectItem>
                                    <SelectItem value="l">L</SelectItem>
                                    <SelectItem value="un">un</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Input type="number" step="0.01" size="sm" />
                              </div>
                              <div className="flex items-center justify-center">
                                <Button variant="ghost" size="icon" className="h-9 w-9">
                                  <TrashIcon className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            
                            <Button variant="outline" className="w-full mt-2">
                              <PlusIcon className="h-4 w-4 mr-2" />
                              Adicionar Produto
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                    
                    <DialogFooter>
                      <Button variant="outline">Cancelar</Button>
                      <Button className="bg-amber-600 hover:bg-amber-700">Salvar</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="relative w-full sm:w-80">
                  <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-10 w-full" placeholder="Buscar produtos..." />
                </div>
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger className="w-full sm:w-40">
                      <SelectValue placeholder="Subcategoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todas">Todas subcategorias</SelectItem>
                      <SelectItem value="carnes">Carnes Nobres</SelectItem>
                      <SelectItem value="massas">Massas Artesanais</SelectItem>
                    </SelectContent>
                  </Select>
  
                  {/* Filtro Avançado - Melhoria 2 */}
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
                          <Label>Intervalo de Valores</Label>
                          <div className="flex gap-2">
                            <Input placeholder="Mín" type="number" className="w-1/2" />
                            <Input placeholder="Máx" type="number" className="w-1/2" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Período de Compra</Label>
                          <div className="flex gap-2">
                            <Input type="date" className="w-1/2" />
                            <Input type="date" className="w-1/2" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Ordenar por</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="recente">Mais recentes</SelectItem>
                              <SelectItem value="valor_alto">Maior valor</SelectItem>
                              <SelectItem value="valor_baixo">Menor valor</SelectItem>
                              <SelectItem value="alfabetico">Ordem alfabética</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="flex justify-between">
                          <Button variant="outline" size="sm">Limpar</Button>
                          <div className="space-x-2">
                            <Button variant="outline" size="sm" className="gap-1">
                              <SaveIcon className="h-3 w-3" />
                              Salvar
                            </Button>
                            <Button size="sm" className="bg-amber-600 hover:bg-amber-700">Aplicar</Button>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Visualizar como:</span>
                <Button variant="ghost" size="sm" className="gap-1">
                  <BarChart3Icon className="h-4 w-4" />
                  Tabela
                </Button>
                <Button variant="ghost" size="sm" className="gap-1">
                  <PieChartIcon className="h-4 w-4" />
                  Gráfico
                </Button>
              </div>
            </div>
        
            {/* Conteúdo das Abas */}
            <TabsContent value="todos" className="m-0 mt-4">
              {/* Tabela de Compras com Feedback Visual - Melhoria 4 */}
              <Card>
                <CardHeader className="px-6 py-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileIcon className="h-4 w-4" />
                    Registro de Compras - Março 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/5">Descrição do Produto</TableHead>
                        <TableHead className="w-1/8">Categoria</TableHead>
                        <TableHead className="w-1/8 hidden md:table-cell">Subcategoria</TableHead>
                        <TableHead className="w-1/10 text-right">Quantidade</TableHead>
                        <TableHead className="w-1/10 hidden md:table-cell">Unidade</TableHead>
                        <TableHead className="w-1/8 text-right">Valor Unitário</TableHead>
                        <TableHead className="w-1/8 text-right">Valor Total</TableHead>
                        <TableHead className="w-1/10 hidden md:table-cell">Data</TableHead>
                        <TableHead className="w-1/20"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Filé Mignon</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-red-50 text-red-600">Proteína</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">Carnes Nobres</TableCell>
                        <TableCell className="text-right">15</TableCell>
                        <TableCell className="hidden md:table-cell">kg</TableCell>
                        <TableCell className="text-right">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center justify-end gap-1">
                                  <span>R$ 75,90</span>
                                  <AlertTriangleIcon className="h-3.5 w-3.5 text-amber-500" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-xs">15% acima da média histórica (R$ 66,00)</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                        <TableCell className="text-right font-medium">R$ 1.138,50</TableCell>
                        <TableCell className="hidden md:table-cell">10/03/2025</TableCell>
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
                                <EditIcon className="mr-2 h-4 w-4" />
                                Editar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <BarChart3Icon className="mr-2 h-4 w-4" />
                                Ver histórico
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <TrashIcon className="mr-2 h-4 w-4" />
                                Excluir
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Queijo Parmesão</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-blue-50 text-blue-600">Laticínio</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">Queijos</TableCell>
                        <TableCell className="text-right">7</TableCell>
                        <TableCell className="hidden md:table-cell">kg</TableCell>
                        <TableCell className="text-right">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center justify-end gap-1">
                                  <span>R$ 89,90</span>
                                  <CheckIcon className="h-3.5 w-3.5 text-green-500" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-xs">5% abaixo da média histórica (R$ 94,50)</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                        <TableCell className="text-right font-medium">R$ 629,30</TableCell>
                        <TableCell className="hidden md:table-cell">08/03/2025</TableCell>
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
                                <EditIcon className="mr-2 h-4 w-4" />
                                Editar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <BarChart3Icon className="mr-2 h-4 w-4" />
                                Ver histórico
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <TrashIcon className="mr-2 h-4 w-4" />
                                Excluir
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Arroz Arbóreo</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-amber-50 text-amber-600">Grãos</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">Arroz</TableCell>
                        <TableCell className="text-right">20</TableCell>
                        <TableCell className="hidden md:table-cell">kg</TableCell>
                        <TableCell className="text-right">R$ 19,50</TableCell>
                        <TableCell className="text-right font-medium">R$ 390,00</TableCell>
                        <TableCell className="hidden md:table-cell">05/03/2025</TableCell>
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
                                <EditIcon className="mr-2 h-4 w-4" />
                                Editar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <BarChart3Icon className="mr-2 h-4 w-4" />
                                Ver histórico
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <TrashIcon className="mr-2 h-4 w-4" />
                                Excluir
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
                    Mostrando 3 de 48 compras
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
            </TabsContent>
            
            <TabsContent value="proteina" className="m-0 mt-4">
              <Card className="p-6 text-center text-muted-foreground">
                Exibindo apenas compras da categoria "Proteína Animal"
              </Card>
            </TabsContent>
  
            <TabsContent value="laticinios" className="m-0 mt-4">
              <Card className="p-6 text-center text-muted-foreground">
                Exibindo apenas compras da categoria "Laticínios"
              </Card>
            </TabsContent>
            
            <TabsContent value="graos" className="m-0 mt-4">
              <Card className="p-6 text-center text-muted-foreground">
                Exibindo apenas compras da categoria "Grãos e Cereais"
              </Card>
            </TabsContent>
            
            <TabsContent value="outros" className="m-0 mt-4">
              <Card className="p-6 text-center text-muted-foreground">
                Exibindo apenas compras de outras categorias
              </Card>
            </TabsContent>
          </Tabs>
        </div>
  
        {/* Card Impacto no CMV - Melhoria 7 */}
        <Card className="mt-8 border-amber-200 bg-amber-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
              <DollarSignIcon className="h-4 w-4" />
              Impacto no CMV
            </CardTitle>
            <CardDescription className="text-amber-700">
              Como as compras deste período afetam seus indicadores financeiros
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-md border border-amber-100">
                <h4 className="text-sm font-medium text-amber-800 mb-1">CMV Projetado</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-amber-900">31.2%</span>
                  <span className="text-xs text-green-600">-0.8% vs. meta</span>
                </div>
                <p className="text-xs text-amber-700 mt-2">
                  Baseado nas compras atuais e estoque do início do período
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-md border border-amber-100">
                <h4 className="text-sm font-medium text-amber-800 mb-1">Categorias de Maior Impacto</h4>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium">Proteína Animal</span>
                    <span className="text-xs">12.4% do CMV</span>
                  </div>
                  <Progress value={39} className="h-1.5 bg-amber-100" indicatorClassName="bg-red-500" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium">Laticínios</span>
                    <span className="text-xs">6.2% do CMV</span>
                  </div>
                  <Progress value={20} className="h-1.5 bg-amber-100" indicatorClassName="bg-blue-500" />
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-md border border-amber-100">
                <h4 className="text-sm font-medium text-amber-800 mb-1">Recomendações</h4>
                <ul className="text-xs text-amber-700 space-y-2 mt-1">
                  <li className="flex items-start gap-1">
                    <CheckIcon className="h-3 w-3 mt-0.5 text-green-600" />
                    <span>O CMV projetado está dentro da meta (28-32%)</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <AlertTriangleIcon className="h-3 w-3 mt-0.5 text-amber-600" />
                    <span>Atenção ao aumento no preço do Filé Mignon (+15%)</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <CheckIcon className="h-3 w-3 mt-0.5 text-green-600" />
                    <span>Boa redução no volume de compras vs. mês anterior (-12.5%)</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }