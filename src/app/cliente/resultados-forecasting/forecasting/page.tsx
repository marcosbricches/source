// app/resultados-forecasting/forecasting/page.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Calendar, Download, FileText, Filter } from "lucide-react";
import Link from "next/link";

export default function ForecastingCrescimento() {
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
              <li className="font-medium">Forecasting de Crescimento</li>
            </ol>
          </nav>
        </div>
        
        <Badge className="mb-2" variant="outline">Análise Preditiva</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Forecasting de Crescimento</h1>
        <p className="text-muted-foreground max-w-3xl">
          Visualize projeções e estimativas de crescimento para o seu negócio com base em dados históricos,
          tendências de mercado e sazonalidade.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Select defaultValue="trimestre">
            <SelectTrigger className="w-full sm:w-44">
              <SelectValue placeholder="Horizonte" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mes">1 Mês</SelectItem>
              <SelectItem value="trimestre">3 Meses</SelectItem>
              <SelectItem value="semestre">6 Meses</SelectItem>
              <SelectItem value="ano">12 Meses</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="w-10 h-10">
            <Calendar className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="w-10 h-10">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button variant="outline" className="w-full sm:w-auto gap-2">
            <Download className="h-4 w-4" />
            Exportar Projeções
          </Button>
          <Button variant="outline" className="w-full sm:w-auto gap-2">
            <FileText className="h-4 w-4" />
            Relatório Completo
          </Button>
        </div>
      </div>

      {/* Alerta de precisão */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-800">
              As projeções são baseadas em dados históricos de pelo menos 3 meses. 
              Quanto mais dados disponíveis, mais precisas serão as previsões.
            </p>
          </div>
        </div>
      </div>

      {/* Resumo das Projeções */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Resumo das Projeções</CardTitle>
          <CardDescription>Próximos 3 meses (Abril - Junho 2025)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium">Faturamento Projetado</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Cenário Pessimista</span>
                  <span className="text-sm font-medium">R$ 432.750</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Cenário Realista</span>
                  <span className="text-sm font-medium text-amber-600">R$ 485.840</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Cenário Otimista</span>
                  <span className="text-sm font-medium">R$ 527.950</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Crescimento Realista</span>
                <Badge className="bg-green-500">+6.4%</Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Lucro Operacional Projetado</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Cenário Pessimista</span>
                  <span className="text-sm font-medium">R$ 125.500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Cenário Realista</span>
                  <span className="text-sm font-medium text-amber-600">R$ 150.610</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Cenário Otimista</span>
                  <span className="text-sm font-medium">R$ 168.940</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Crescimento Realista</span>
                <Badge className="bg-green-500">+5.2%</Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">CMV Ideal Projetado</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Para Crescimento Moderado</span>
                  <span className="text-sm font-medium">31.0%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Para Crescimento Acelerado</span>
                  <span className="text-sm font-medium text-amber-600">29.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">CMV Atual</span>
                  <span className="text-sm font-medium">31.2%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Redução Necessária</span>
                <Badge variant="destructive">-1.7%</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projeções Detalhadas */}
      <Tabs defaultValue="faturamento" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl">
          <TabsTrigger value="faturamento">Faturamento</TabsTrigger>
          <TabsTrigger value="lucro">Lucro</TabsTrigger>
          <TabsTrigger value="cmv">CMV</TabsTrigger>
          <TabsTrigger value="clientes">Clientes</TabsTrigger>
        </TabsList>

        {/* Projeção de Faturamento */}
        <TabsContent value="faturamento" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Projeção de Faturamento</CardTitle>
              <CardDescription>Projeção para os próximos 3 meses</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              {/* Representação visual do gráfico */}
              <div className="w-full h-full bg-muted/30 rounded-md flex items-center justify-center">
                <div className="h-4/5 w-11/12 relative">
                  {/* Simulação visual do gráfico */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-muted"></div>
                  <div className="absolute left-0 bottom-0 h-full w-1 bg-muted"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full flex justify-between px-4">
                    {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"].map((month, i) => (
                      <div key={i} className="text-xs text-muted-foreground pb-2">{month}</div>
                    ))}
                  </div>
                  
                  <div className="absolute left-2 top-0 h-full flex flex-col justify-between">
                    <div className="text-xs text-muted-foreground">200k</div>
                    <div className="text-xs text-muted-foreground">150k</div>
                    <div className="text-xs text-muted-foreground">100k</div>
                    <div className="text-xs text-muted-foreground">50k</div>
                    <div className="text-xs text-muted-foreground">0</div>
                  </div>
                  
                  {/* Histórico e projeções */}
                  <svg className="absolute top-0 left-6 w-[95%] h-full">
                    {/* Linha histórica */}
                    <path d="M0,180 L60,160 L120,140" stroke="#64748b" fill="none" strokeWidth="3"/>
                    
                    {/* Linha vertical separando histórico de projeção */}
                    <path d="M120,0 L120,250" stroke="#e2e8f0" strokeDasharray="4,4" strokeWidth="2"/>
                    
                    {/* Cenário pessimista */}
                    <path d="M120,140 L180,145 L240,150 L300,155" stroke="#ef4444" fill="none" strokeWidth="2" strokeDasharray="3,3"/>
                    
                    {/* Cenário realista */}
                    <path d="M120,140 L180,135 L240,125 L300,115" stroke="#f59e0b" fill="none" strokeWidth="3"/>
                    
                    {/* Cenário otimista */}
                    <path d="M120,140 L180,125 L240,105 L300,85" stroke="#22c55e" fill="none" strokeWidth="2" strokeDasharray="3,3"/>
                    
                    {/* Pontos de dados históricos */}
                    <circle cx="0" cy="180" r="4" fill="#64748b" />
                    <circle cx="60" cy="160" r="4" fill="#64748b" />
                    <circle cx="120" cy="140" r="4" fill="#64748b" />
                    
                    {/* Pontos de projeção realista */}
                    <circle cx="180" cy="135" r="4" fill="#f59e0b" />
                    <circle cx="240" cy="125" r="4" fill="#f59e0b" />
                    <circle cx="300" cy="115" r="4" fill="#f59e0b" />
                  </svg>
                </div>
              </div>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground flex flex-wrap justify-between">
              <div className="flex items-center mr-4 mb-2">
                <div className="w-3 h-3 bg-gray-500 rounded-sm mr-2"></div>
                <span>Histórico</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <div className="w-3 h-3 bg-amber-600 rounded-sm mr-2"></div>
                <span>Cenário Realista</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
                <span>Cenário Otimista</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-sm mr-2"></div>
                <span>Cenário Pessimista</span>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detalhamento da Projeção de Faturamento</CardTitle>
              <CardDescription>Valores mensais previstos por cenário</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mês</TableHead>
                    <TableHead className="text-right">Pessimista</TableHead>
                    <TableHead className="text-right">Realista</TableHead>
                    <TableHead className="text-right">Otimista</TableHead>
                    <TableHead className="text-right">Variação (Realista vs. Atual)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Abril 2025</TableCell>
                    <TableCell className="text-right">R$ 146.800</TableCell>
                    <TableCell className="text-right">R$ 158.750</TableCell>
                    <TableCell className="text-right">R$ 169.500</TableCell>
                    <TableCell className="text-right text-green-600">+4.1%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Maio 2025</TableCell>
                    <TableCell className="text-right">R$ 142.500</TableCell>
                    <TableCell className="text-right">R$ 162.890</TableCell>
                    <TableCell className="text-right">R$ 176.200</TableCell>
                    <TableCell className="text-right text-green-600">+6.8%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Junho 2025</TableCell>
                    <TableCell className="text-right">R$ 143.450</TableCell>
                    <TableCell className="text-right">R$ 164.200</TableCell>
                    <TableCell className="text-right">R$ 182.250</TableCell>
                    <TableCell className="text-right text-green-600">+7.7%</TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/50">
                    <TableCell className="font-medium">Total Trimestre</TableCell>
                    <TableCell className="text-right font-medium">R$ 432.750</TableCell>
                    <TableCell className="text-right font-medium">R$ 485.840</TableCell>
                    <TableCell className="text-right font-medium">R$ 527.950</TableCell>
                    <TableCell className="text-right font-medium text-green-600">+6.4%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fatores de Influência</CardTitle>
              <CardDescription>Variáveis consideradas para a projeção de faturamento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Fatores Positivos</h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Sazonalidade favorável: período de outono tende a aumentar o fluxo de clientes em 8-12%.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Tendência de aumento do ticket médio observada nos últimos 3 meses (de R$ 75 para R$ 82).</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Novas estratégias de marketing digital implementadas em março devem gerar resultados crescentes.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h3 className="font-semibold text-amber-800 mb-2">Fatores de Cautela</h3>
                  <ul className="space-y-2 text-sm text-amber-700">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Competição: abertura de novo restaurante a 500m prevista para maio pode afetar o fluxo de clientes.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Possível aumento de preços de insumos principais pode pressionar margens ou limitar reajustes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t p-4 flex justify-end">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Ajustar Variáveis de Projeção
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Projeção de Lucro */}
        <TabsContent value="lucro" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Projeção de Lucro Operacional</CardTitle>
              <CardDescription>
                Esta seção apresenta a projeção de lucro operacional para os próximos meses
                em diferentes cenários.
              </CardDescription>
            </CardHeader>
            <CardFooter className="border-t p-4">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Ver Detalhamento
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Projeção de CMV */}
        <TabsContent value="cmv" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Projeção e Metas de CMV</CardTitle>
              <CardDescription>
                Visualize a projeção do Custo de Mercadoria Vendida e defina metas 
                ideais para otimizar seus resultados.
              </CardDescription>
            </CardHeader>
            <CardFooter className="border-t p-4">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Ver Detalhamento
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Projeção de Clientes */}
        <TabsContent value="clientes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Projeção de Fluxo de Clientes</CardTitle>
              <CardDescription>
                Analise a projeção do número de clientes e ticket médio para os
                próximos meses.
              </CardDescription>
            </CardHeader>
            <CardFooter className="border-t p-4">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Ver Detalhamento
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recomendações Estratégicas */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recomendações Estratégicas Baseadas nas Projeções</CardTitle>
          <CardDescription>Ações sugeridas para otimizar resultados futuros</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-2 rounded-full">
                <svg className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium mb-1">Otimização do CMV de Bebidas</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Para atingir o cenário otimista de crescimento, recomenda-se reduzir o CMV de bebidas dos atuais 35.6% para 32% 
                  ou menos. Esta redução pode ser alcançada através de:
                </p>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Renegociação com fornecedores atuais (potencial redução de 1.5%)</li>
                  <li>Diversificação de fornecedores para itens específicos (potencial redução de 1.2%)</li>
                  <li>Ajustes na precificação de bebidas premium (potencial aumento de margem de 2.3%)</li>
                </ul>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-2 rounded-full">
                <svg className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium mb-1">Expansão de Operações Delivery</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  As projeções indicam potencial para expansão de delivery, especialmente nos meses de maio e junho.
                  Investir neste canal pode aumentar o faturamento em até 9% no trimestre:
                </p>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Ampliar raio de entrega em 2km (potencial aumento de 3.5% no faturamento)</li>
                  <li>Desenvolver embalagens otimizadas para delivery (melhoria na experiência do cliente)</li>
                  <li>Criar promoções exclusivas para pedidos online (aumento potencial de 12% no ticket médio de delivery)</li>
                </ul>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-2 rounded-full">
                <svg className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium mb-1">Gerenciamento Proativo de Despesas Operacionais</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  As despesas operacionais apresentaram crescimento acima do planejado (17.8%). 
                  Para atingir o cenário otimista, é necessário:
                </p>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Implementar plano de eficiência energética (redução potencial de 8% nos custos de energia)</li>
                  <li>Renegociar contratos de manutenção preventiva (economia estimada de 15%)</li>
                  <li>Otimizar escala de equipe baseada em previsões de fluxo (redução de 5-7% em custos de pessoal)</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t p-4 flex justify-end">
          <Button className="bg-amber-600 hover:bg-amber-700">
            Transformar em Plano de Ação
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}