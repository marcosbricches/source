// app/resultados-forecasting/resultados/page.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, DownloadIcon, Filter, Printer } from "lucide-react";
import Link from "next/link";

export default function ResultadosOrcamentarios() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      {/* Navegação e cabeçalho */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <Link href="/resultados-forecasting" className="flex items-center text-sm text-muted-foreground hover:text-foreground mr-8">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Voltar ao Dashboard
          </Link>
          <nav className="flex">
            <ol className="flex text-sm">
              <li className="text-muted-foreground">
                <Link href="/dashboard" className="hover:underline">Dashboard</Link>
              </li>
              <li className="mx-2 text-muted-foreground">/</li>
              <li className="text-muted-foreground">
                <Link href="/resultados-forecasting" className="hover:underline">Resultados e Forecasting</Link>
              </li>
              <li className="mx-2 text-muted-foreground">/</li>
              <li className="font-medium">Resultados Orçamentários</li>
            </ol>
          </nav>
        </div>
        
        <Badge className="mb-2" variant="outline">Análise Financeira</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Resultados do Planejamento Orçamentário</h1>
        <p className="text-muted-foreground max-w-3xl">
          Compare o desempenho planejado versus realizado, analisando os principais indicadores financeiros
          do seu restaurante ao longo do tempo.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Select defaultValue="mar2025">
            <SelectTrigger className="w-full sm:w-44">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jan2025">Janeiro 2025</SelectItem>
              <SelectItem value="fev2025">Fevereiro 2025</SelectItem>
              <SelectItem value="mar2025">Março 2025</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="todas">
            <SelectTrigger className="w-full sm:w-44">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas categorias</SelectItem>
              <SelectItem value="bebidas">Bebidas</SelectItem>
              <SelectItem value="pratos">Pratos principais</SelectItem>
              <SelectItem value="sobremesas">Sobremesas</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="w-10 h-10">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button variant="outline" className="w-full sm:w-auto gap-2">
            <Printer className="h-4 w-4" />
            Imprimir
          </Button>
          <Button variant="outline" className="w-full sm:w-auto gap-2">
            <DownloadIcon className="h-4 w-4" />
            Exportar CSV
          </Button>
        </div>
      </div>

      {/* Resumo dos resultados */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Resumo dos Resultados</CardTitle>
          <CardDescription>Março 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">Faturamento</h3>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold">R$ 152.450</span>
                <span className="text-sm font-medium text-green-600">+5.2%</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-muted-foreground mr-2">Planejado:</span>
                <span>R$ 145.000</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">CMV</h3>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold">31.2%</span>
                <span className="text-sm font-medium text-green-600">-0.8%</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-muted-foreground mr-2">Planejado:</span>
                <span>32.0%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">Margem de Contribuição</h3>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold">68.8%</span>
                <span className="text-sm font-medium text-green-600">+0.8%</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-muted-foreground mr-2">Planejado:</span>
                <span>68.0%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">Lucro Operacional</h3>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold">R$ 47.650</span>
                <span className="text-sm font-medium text-red-600">-3.2%</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-muted-foreground mr-2">Planejado:</span>
                <span>R$ 49.200</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Abas para categorias de análise */}
      <Tabs defaultValue="geral" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="categorias">Por Categoria</TabsTrigger>
          <TabsTrigger value="tendencias">Tendências</TabsTrigger>
        </TabsList>

        {/* Visão Geral */}
        <TabsContent value="geral" className="space-y-6">
          {/* Gráfico principal */}
          <Card>
            <CardHeader>
              <CardTitle>Comparativo Detalhado - Planejado vs Realizado</CardTitle>
              <CardDescription>Março 2025</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              {/* Representação visual do gráfico */}
              <div className="w-full h-full bg-muted/30 rounded-md flex items-center justify-center">
                <div className="h-4/5 w-11/12 relative">
                  {/* Simulação visual do gráfico */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-muted"></div>
                  <div className="absolute left-0 bottom-0 h-full w-1 bg-muted"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full flex justify-between px-4">
                    {["Faturamento", "CMV", "Despesas Op.", "Marketing", "Pessoal", "Ocupação", "Lucro Oper."].map((item, i) => (
                      <div key={i} className="text-xs text-muted-foreground pb-2">{item}</div>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-0 left-6 w-[90%] h-4/5 flex justify-around items-end">
                    <div className="flex items-end">
                      <div style={{height: '70%'}} className="w-5 bg-blue-500 rounded-t-sm mr-1"></div>
                      <div style={{height: '75%'}} className="w-5 bg-amber-600 rounded-t-sm"></div>
                    </div>
                    <div className="flex items-end">
                      <div style={{height: '32%'}} className="w-5 bg-blue-500 rounded-t-sm mr-1"></div>
                      <div style={{height: '31%'}} className="w-5 bg-amber-600 rounded-t-sm"></div>
                    </div>
                    <div className="flex items-end">
                      <div style={{height: '25%'}} className="w-5 bg-blue-500 rounded-t-sm mr-1"></div>
                      <div style={{height: '28%'}} className="w-5 bg-amber-600 rounded-t-sm"></div>
                    </div>
                    <div className="flex items-end">
                      <div style={{height: '12%'}} className="w-5 bg-blue-500 rounded-t-sm mr-1"></div>
                      <div style={{height: '15%'}} className="w-5 bg-amber-600 rounded-t-sm"></div>
                    </div>
                    <div className="flex items-end">
                      <div style={{height: '22%'}} className="w-5 bg-blue-500 rounded-t-sm mr-1"></div>
                      <div style={{height: '23%'}} className="w-5 bg-amber-600 rounded-t-sm"></div>
                    </div>
                    <div className="flex items-end">
                      <div style={{height: '18%'}} className="w-5 bg-blue-500 rounded-t-sm mr-1"></div>
                      <div style={{height: '20%'}} className="w-5 bg-amber-600 rounded-t-sm"></div>
                    </div>
                    <div className="flex items-end">
                      <div style={{height: '34%'}} className="w-5 bg-blue-500 rounded-t-sm mr-1"></div>
                      <div style={{height: '30%'}} className="w-5 bg-amber-600 rounded-t-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground flex justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
                <span>Planejado</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-600 rounded-sm mr-2"></div>
                <span>Realizado</span>
              </div>
            </CardFooter>
          </Card>

          {/* Tabela detalhada de resultados */}
          <Card>
            <CardHeader>
              <CardTitle>Detalhamento de Resultados</CardTitle>
              <CardDescription>Valores planejados versus realizados no período</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Indicador</TableHead>
                    <TableHead className="text-right">Planejado</TableHead>
                    <TableHead className="text-right">Realizado</TableHead>
                    <TableHead className="text-right">Variação</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Faturamento</TableCell>
                    <TableCell className="text-right">R$ 145.000,00</TableCell>
                    <TableCell className="text-right">R$ 152.450,00</TableCell>
                    <TableCell className="text-right text-green-600">+5.2%</TableCell>
                    <TableCell className="text-right">
                      <Badge className="bg-green-500">Acima</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">CMV (R$)</TableCell>
                    <TableCell className="text-right">R$ 46.400,00</TableCell>
                    <TableCell className="text-right">R$ 47.564,40</TableCell>
                    <TableCell className="text-right text-red-600">+2.5%</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="text-amber-600 border-amber-600">No Limite</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">CMV (%)</TableCell>
                    <TableCell className="text-right">32.0%</TableCell>
                    <TableCell className="text-right">31.2%</TableCell>
                    <TableCell className="text-right text-green-600">-0.8%</TableCell>
                    <TableCell className="text-right">
                      <Badge className="bg-green-500">Abaixo</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Despesas Operacionais</TableCell>
                    <TableCell className="text-right">R$ 36.250,00</TableCell>
                    <TableCell className="text-right">R$ 42.686,00</TableCell>
                    <TableCell className="text-right text-red-600">+17.8%</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="destructive">Acima</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Margem de Contribuição</TableCell>
                    <TableCell className="text-right">68.0%</TableCell>
                    <TableCell className="text-right">68.8%</TableCell>
                    <TableCell className="text-right text-green-600">+0.8%</TableCell>
                    <TableCell className="text-right">
                      <Badge className="bg-green-500">Acima</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Lucro Operacional</TableCell>
                    <TableCell className="text-right">R$ 49.200,00</TableCell>
                    <TableCell className="text-right">R$ 47.650,00</TableCell>
                    <TableCell className="text-right text-red-600">-3.2%</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="text-amber-600 border-amber-600">No Limite</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Análise de desvios */}
          <Card>
            <CardHeader>
              <CardTitle>Análise de Desvios Críticos</CardTitle>
              <CardDescription>Indicadores que necessitam atenção</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">Despesas Operacionais: +17.8% acima do planejado</h3>
                  <p className="text-sm text-red-700">
                    As despesas operacionais estão significativamente acima do planejado, impactando o lucro operacional
                    do período. A maior parte deste desvio foi observada em custos de manutenção não programados 
                    e aumento nas despesas com energia elétrica.
                  </p>
                  <div className="mt-2">
                    <Badge variant="outline" className="bg-white text-red-700 border-red-300">
                      Requer Ação Imediata
                    </Badge>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h3 className="font-semibold text-amber-800 mb-2">Lucro Operacional: -3.2% abaixo do planejado</h3>
                  <p className="text-sm text-amber-700">
                    Embora o faturamento tenha superado o planejado, o lucro operacional está abaixo da meta devido
                    ao aumento expressivo nas despesas operacionais. O CMV percentual melhorou, mas não foi suficiente
                    para compensar.
                  </p>
                  <div className="mt-2">
                    <Badge variant="outline" className="bg-white text-amber-700 border-amber-300">
                      Atenção Necessária
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end border-t p-4">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Ver Sugestões de Melhoria
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Por Categoria */}
        <TabsContent value="categorias" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Desempenho por Categoria</CardTitle>
              <CardDescription>Análise detalhada por tipo de produto</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Bebidas */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Bebidas</h3>
                    <Badge variant="outline" className="text-amber-600 border-amber-600">
                      Alerta de CMV
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Faturamento</p>
                      <div className="flex justify-between">
                        <p className="font-medium">R$ 38.250</p>
                        <p className="text-green-600 text-sm">+4.8%</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">CMV</p>
                      <div className="flex justify-between">
                        <p className="font-medium">35.6%</p>
                        <p className="text-red-600 text-sm">+3.6%</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Margem</p>
                      <div className="flex justify-between">
                        <p className="font-medium">64.4%</p>
                        <p className="text-red-600 text-sm">-3.6%</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">% do Faturamento Total</p>
                      <div className="flex justify-between">
                        <p className="font-medium">25.1%</p>
                        <p className="text-muted-foreground text-sm">-0.2%</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-8 bg-muted/30 rounded-md w-full relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-2 bg-muted w-full"></div>
                      <div className="absolute left-[32%] h-5 w-0.5 bg-blue-500"></div>
                      <div className="absolute left-[35.6%] h-5 w-0.5 bg-amber-600"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0%</span>
                    <span className="text-blue-500">Meta: 32%</span>
                    <span className="text-amber-600">Atual: 35.6%</span>
                    <span>50%</span>
                  </div>
                </div>
                
                <Separator />
                
                {/* Pratos Principais */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Pratos Principais</h3>
                    <Badge className="bg-green-500">CMV Otimizado</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Faturamento</p>
                      <div className="flex justify-between">
                        <p className="font-medium">R$ 91.470</p>
                        <p className="text-green-600 text-sm">+6.4%</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">CMV</p>
                      <div className="flex justify-between">
                        <p className="font-medium">29.8%</p>
                        <p className="text-green-600 text-sm">-2.2%</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Margem</p>
                      <div className="flex justify-between">
                        <p className="font-medium">70.2%</p>
                        <p className="text-green-600 text-sm">+2.2%</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">% do Faturamento Total</p>
                      <div className="flex justify-between">
                        <p className="font-medium">60.0%</p>
                        <p className="text-green-600 text-sm">+0.8%</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-8 bg-muted/30 rounded-md w-full relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-2 bg-muted w-full"></div>
                      <div className="absolute left-[32%] h-5 w-0.5 bg-blue-500"></div>
                      <div className="absolute left-[29.8%] h-5 w-0.5 bg-green-600"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0%</span>
                    <span className="text-green-600">Atual: 29.8%</span>
                    <span className="text-blue-500">Meta: 32%</span>
                    <span>50%</span>
                  </div>
                </div>
                
                <Separator />
                
                {/* Sobremesas */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Sobremesas</h3>
                    <Badge className="bg-green-500">CMV Otimizado</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Faturamento</p>
                      <div className="flex justify-between">
                        <p className="font-medium">R$ 22.730</p>
                        <p className="text-green-600 text-sm">+3.3%</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">CMV</p>
                      <div className="flex justify-between">
                        <p className="font-medium">30.5%</p>
                        <p className="text-green-600 text-sm">-1.5%</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Margem</p>
                      <div className="flex justify-between">
                        <p className="font-medium">69.5%</p>
                        <p className="text-green-600 text-sm">+1.5%</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">% do Faturamento Total</p>
                      <div className="flex justify-between">
                        <p className="font-medium">14.9%</p>
                        <p className="text-muted-foreground text-sm">-0.3%</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-8 bg-muted/30 rounded-md w-full relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-2 bg-muted w-full"></div>
                      <div className="absolute left-[32%] h-5 w-0.5 bg-blue-500"></div>
                      <div className="absolute left-[30.5%] h-5 w-0.5 bg-green-600"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0%</span>
                    <span className="text-green-600">Atual: 30.5%</span>
                    <span className="text-blue-500">Meta: 32%</span>
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end border-t p-4">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Analisar Causas dos Desvios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Tendências */}
        <TabsContent value="tendencias" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tendências e Evolução dos Indicadores</CardTitle>
              <CardDescription>Acompanhe a evolução dos principais indicadores ao longo do tempo</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              {/* Representação visual do gráfico de tendências */}
              <div className="w-full h-full bg-muted/30 rounded-md flex items-center justify-center">
                <div className="h-5/6 w-11/12 relative">
                  {/* Simulação visual do gráfico de linhas */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-muted"></div>
                  <div className="absolute left-0 bottom-0 h-full w-1 bg-muted"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full flex justify-between px-3">
                    {["Jan", "Fev", "Mar"].map((month, i) => (
                      <div key={i} className="text-xs text-muted-foreground pb-2">{month}</div>
                    ))}
                  </div>
                  
                  <div className="absolute left-2 top-0 h-full flex flex-col justify-between">
                    <div className="text-xs text-muted-foreground">50%</div>
                    <div className="text-xs text-muted-foreground">40%</div>
                    <div className="text-xs text-muted-foreground">30%</div>
                    <div className="text-xs text-muted-foreground">20%</div>
                    <div className="text-xs text-muted-foreground">10%</div>
                    <div className="text-xs text-muted-foreground">0%</div>
                  </div>
                  
                  {/* Linhas de tendência */}
                  <svg className="absolute top-0 left-6 w-[95%] h-full">
                    {/* CMV */}
                    <path d="M0,200 L125,190 L250,185" stroke="#f59e0b" fill="none" strokeWidth="3"/>
                    
                    {/* Margem de Contribuição */}
                    <path d="M0,120 L125,115 L250,110" stroke="#0ea5e9" fill="none" strokeWidth="3"/>
                    
                    {/* Lucro Operacional */}
                    <path d="M0,170 L125,180 L250,190" stroke="#22c55e" fill="none" strokeWidth="3"/>
                    
                    {/* Faturamento (escala secundária) */}
                    <path d="M0,250 L125,230 L250,200" stroke="#8b5cf6" fill="none" strokeWidth="3" strokeDasharray="5,5"/>
                  </svg>
                </div>
              </div>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground flex flex-wrap justify-between">
              <div className="flex items-center mr-4 mb-2">
                <div className="w-3 h-3 bg-amber-600 rounded-sm mr-2"></div>
                <span>CMV (%)</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
                <span>Margem de Contribuição (%)</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
                <span>Lucro Operacional (%)</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-purple-500 rounded-sm mr-2"></div>
                <span>Faturamento (R$ - escala secundária)</span>
              </div>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Análise de Tendências</CardTitle>
              <CardDescription>Interpretação da evolução dos resultados nos últimos meses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Tendências Positivas</h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>CMV em tendência de queda, diminuindo de 33.5% em janeiro para 31.2% em março.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Margem de contribuição em crescimento constante, atingindo o melhor resultado no trimestre.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Faturamento com crescimento sustentado de aproximadamente 5% ao mês.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h3 className="font-medium text-amber-800 mb-2">Pontos de Atenção</h3>
                  <ul className="space-y-2 text-sm text-amber-700">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Despesas operacionais crescendo em ritmo superior ao faturamento, pressionando o lucro.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>CMV de bebidas permanece acima do ideal em todo o trimestre, demandando atenção.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Lucro operacional com leve tendência de queda percentual, apesar do crescimento absoluto.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t p-4 flex justify-end">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Gerar Relatório Completo
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}