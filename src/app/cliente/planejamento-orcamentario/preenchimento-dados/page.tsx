// app/planejamento-orcamentario/preenchimento-dados/page.tsx
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle
  } from "@/components/ui/card";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Button } from "@/components/ui/button";
  import { 
    Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbLink, 
    BreadcrumbList, 
    BreadcrumbPage, 
    BreadcrumbSeparator 
  } from "@/components/ui/breadcrumb";
  import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
  import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger 
  } from "@/components/ui/tooltip";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
  } from "@/components/ui/select";
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
  import { 
    HomeIcon, 
    InfoIcon, 
    ArrowRightIcon, 
    CalendarIcon, 
    HelpCircleIcon,
    CopyIcon,
    CalculatorIcon,
    TrendingUpIcon,
    TrendingDownIcon,
    ClockIcon
  } from "lucide-react";
  import { Badge } from "@/components/ui/badge";
  
  export default function PreenchimentoDados() {
    return (
      <div className="container mx-auto py-8 max-w-5xl">
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
              <BreadcrumbPage>Preenchimento de Dados</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
  
        {/* Cabeçalho da Página */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge variant="outline" className="text-amber-600 bg-amber-50">Março 2025</Badge>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Dados Pendentes</Badge>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="outline" className="bg-blue-50 text-blue-600 cursor-help">
                    <ClockIcon className="h-3 w-3 mr-1" />
                    Fevereiro Completo
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Dados do período anterior estão completos e podem ser usados como referência</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Planejamento Orçamentário</h1>
          <p className="text-muted-foreground mt-2">
            Preencha os dados financeiros e operacionais para análise detalhada do seu negócio.
          </p>
        </div>
  
        {/* Seleção de Período e Ação de Importação */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Período atual:</span>
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
          
          <Button variant="outline" className="gap-2">
            <CopyIcon className="h-4 w-4" />
            Importar Dados de Fevereiro
          </Button>
        </div>
  
        {/* Alerta Educativo */}
        <Alert className="mb-8 border-amber-300 bg-amber-50">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Dica para análise completa</AlertTitle>
          <AlertDescription>
            Preencha as despesas operacionais para obter uma análise financeira mais detalhada, 
            incluindo Lucro Operacional e Margem de Contribuição Ajustada.
          </AlertDescription>
        </Alert>
  
        {/* Resumo de Cálculos em Tempo Real */}
        <Card className="mb-8 bg-slate-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <CalculatorIcon className="h-4 w-4" />
              Estimativa Preliminar
            </CardTitle>
            <CardDescription>
              Valores são calculados automaticamente com os dados inseridos até o momento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">CMV Estimado</p>
                <p className="text-xl font-semibold">R$ 0,00</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <TrendingDownIcon className="h-3 w-3 mr-1 text-green-600" />
                  <span className="text-green-600">2% menor</span> que Fev/25
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">CMV (%)</p>
                <p className="text-xl font-semibold">0%</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="text-muted-foreground">Meta: 28-32%</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Margem de Contribuição</p>
                <p className="text-xl font-semibold">R$ 0,00</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <TrendingUpIcon className="h-3 w-3 mr-1 text-amber-600" />
                  <span className="text-amber-600">Aguardando dados</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Lucro Operacional</p>
                <p className="text-xl font-semibold">R$ 0,00</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="text-muted-foreground">Preencha despesas</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
  
        {/* Formulário - Com Abas para melhor organização */}
        <form>
          <Tabs defaultValue="informacoes_basicas" className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="informacoes_basicas">Informações Básicas</TabsTrigger>
              <TabsTrigger value="despesas_operacionais">Despesas Operacionais</TabsTrigger>
            </TabsList>
            
            {/* Aba Informações Básicas */}
            <TabsContent value="informacoes_basicas">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Básicas</CardTitle>
                  <CardDescription>
                    Campos obrigatórios para cálculo do CMV e análises básicas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="estoqueInicial">Estoque Inicial (valor total)</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">Valor total do estoque no início do período. Tipicamente é igual ao estoque final do período anterior.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="estoqueInicial" 
                          type="number" 
                          placeholder="R$ 0,00" 
                          required 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: R$ 12.500,00
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="comprasPeriodo">Compras do Período</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">Total de compras realizadas no período. Valores são importados da seção "Compras Categorizadas".</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="comprasPeriodo" 
                          type="number" 
                          placeholder="R$ 0,00" 
                          required 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: R$ 45.320,00
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="estoqueFinal">Estoque Final (valor total)</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">Valor total do estoque ao final do período. Deve ser ≤ Estoque Inicial + Compras.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="estoqueFinal" 
                          type="number" 
                          placeholder="R$ 0,00" 
                          required 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: R$ 13.200,00
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="faturamentoTotal">Faturamento Total no Período</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">Receita total gerada no período. Usado para calcular a Margem de Contribuição e o CMV (%).</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="faturamentoTotal" 
                          type="number" 
                          placeholder="R$ 0,00" 
                          required 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: R$ 142.800,00
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="ticketMedio">Ticket Médio</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">Valor médio gasto por cliente. Calculado automaticamente se preencher Faturamento e Nº de Clientes.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="ticketMedio" 
                          type="number" 
                          placeholder="R$ 0,00" 
                          required 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: R$ 85,00
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="clientesAtendidos">Número de Clientes Atendidos</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">Total de clientes atendidos no período. Importante para análise de fluxo e sazonalidade.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="clientesAtendidos" 
                          type="number" 
                          placeholder="0" 
                          required 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: 1.680
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Aba Despesas Operacionais */}
            <TabsContent value="despesas_operacionais">
              <Card>
                <CardHeader>
                  <CardTitle>Despesas Operacionais</CardTitle>
                  <CardDescription>
                    Campos opcionais para análises financeiras detalhadas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="aluguel">Aluguel</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Custo mensal do aluguel, incluindo taxas condominiais.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="aluguel" 
                          type="number" 
                          placeholder="R$ 0,00" 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: R$ 8.500,00
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="folhaPagamento">Folha de Pagamento</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Total de salários, encargos e benefícios pagos no período.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="folhaPagamento" 
                          type="number" 
                          placeholder="R$ 0,00" 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: R$ 35.200,00
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="gorjetas">Gorjetas</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Total de gorjetas pagas aos colaboradores no período.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="gorjetas" 
                          type="number" 
                          placeholder="R$ 0,00" 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: R$ 14.280,00
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="marketing">Marketing</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Gastos com publicidade, promoções e ações de marketing.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="marketing" 
                          type="number" 
                          placeholder="R$ 0,00" 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: R$ 4.300,00
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="impostos">Impostos Operacionais</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Tributos fixos e variáveis aplicados à operação (exceto folha).</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="impostos" 
                          type="number" 
                          placeholder="R$ 0,00" 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: R$ 12.850,00
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="servicosPublicos">Serviços Públicos</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Gastos com água, luz, gás, telefonia e internet.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="servicosPublicos" 
                          type="number" 
                          placeholder="R$ 0,00" 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: R$ 7.650,00
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="manutencao">Manutenção e Equipamentos</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Custos com reparos e substituições de equipamentos.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="manutencao" 
                          type="number" 
                          placeholder="R$ 0,00" 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: R$ 1.800,00
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="delivery">Delivery</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Custos com taxas de plataformas de entrega ou logística própria.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="delivery" 
                          type="number" 
                          placeholder="R$ 0,00" 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: R$ 5.890,00
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="outrasVariaveis">Outras Variáveis</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Custos diversos que não se enquadram nas categorias anteriores.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input 
                          id="outrasVariaveis" 
                          type="number" 
                          placeholder="R$ 0,00" 
                        />
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          Fev: R$ 3.420,00
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
  
          {/* Botões de Ação */}
          <div className="flex justify-end gap-4">
            <Button variant="outline">Cancelar</Button>
            <Button className="bg-amber-600 hover:bg-amber-700">
              Salvar
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    );
  }