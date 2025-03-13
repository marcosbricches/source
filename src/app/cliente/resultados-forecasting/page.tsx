// app/resultados-forecasting/page.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ResultadosForecasting() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <Badge className="mb-2" variant="outline">Análise Financeira</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Resultados e Forecasting</h1>
        <p className="text-muted-foreground max-w-3xl">
          Visualize o desempenho financeiro do seu restaurante, compare resultados planejados e realizados,
          e obtenha previsões para o crescimento futuro.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        {/* Filtros */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Select defaultValue="mensal">
            <SelectTrigger className="w-full sm:w-44">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semanal">Semanal</SelectItem>
              <SelectItem value="mensal">Mensal</SelectItem>
              <SelectItem value="trimestral">Trimestral</SelectItem>
              <SelectItem value="anual">Anual</SelectItem>
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
        </div>
        
        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            Exportar Relatório
          </Button>
        </div>
      </div>

      {/* Tabs principais do módulo */}
      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full max-w-3xl">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="resultados">Resultados</TabsTrigger>
          <TabsTrigger value="forecasting">Forecasting</TabsTrigger>
          <TabsTrigger value="planos">Planos de Ação</TabsTrigger>
        </TabsList>

        {/* Conteúdo do Dashboard */}
        <TabsContent value="dashboard" className="space-y-6">
          {/* Indicadores principais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Faturamento Mensal</CardDescription>
                <CardTitle className="text-2xl">R$ 152.450,00</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-amber-600 font-medium">
                  ↗︎ 12.5% vs mês anterior
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>CMV</CardDescription>
                <CardTitle className="text-2xl">31.2%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-green-600 font-medium">
                  ↘︎ 0.8% vs planejado
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Margem de Contribuição</CardDescription>
                <CardTitle className="text-2xl">68.8%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-green-600 font-medium">
                  ↗︎ 0.8% vs planejado
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Lucro Operacional</CardDescription>
                <CardTitle className="text-2xl">R$ 47.650,00</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-red-600 font-medium">
                  ↘︎ 3.2% vs planejado
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Gráficos principais */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Evolução CMV vs Faturamento</CardTitle>
                <CardDescription>Últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                {/* Representação visual do gráfico */}
                <div className="w-full h-full bg-muted/30 rounded-md flex items-center justify-center">
                  <div className="h-4/5 w-11/12 relative">
                    {/* Simulação visual do gráfico */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-muted"></div>
                    <div className="absolute left-0 bottom-0 h-full w-1 bg-muted"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full flex justify-between">
                      {["Out", "Nov", "Dez", "Jan", "Fev", "Mar"].map((month, i) => (
                        <div key={i} className="text-xs text-muted-foreground pb-2">{month}</div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-0 left-2 w-11/12 h-4/5 flex items-end">
                      <div style={{height: '45%'}} className="w-[14%] bg-amber-500 mx-1 rounded-t-sm relative">
                        <div style={{height: '120%', top: '-20%'}} className="absolute w-2 bg-blue-500 rounded-t-sm left-1/2 transform -translate-x-1/2"></div>
                      </div>
                      <div style={{height: '55%'}} className="w-[14%] bg-amber-500 mx-1 rounded-t-sm relative">
                        <div style={{height: '125%', top: '-25%'}} className="absolute w-2 bg-blue-500 rounded-t-sm left-1/2 transform -translate-x-1/2"></div>
                      </div>
                      <div style={{height: '60%'}} className="w-[14%] bg-amber-500 mx-1 rounded-t-sm relative">
                        <div style={{height: '130%', top: '-30%'}} className="absolute w-2 bg-blue-500 rounded-t-sm left-1/2 transform -translate-x-1/2"></div>
                      </div>
                      <div style={{height: '50%'}} className="w-[14%] bg-amber-500 mx-1 rounded-t-sm relative">
                        <div style={{height: '120%', top: '-20%'}} className="absolute w-2 bg-blue-500 rounded-t-sm left-1/2 transform -translate-x-1/2"></div>
                      </div>
                      <div style={{height: '65%'}} className="w-[14%] bg-amber-500 mx-1 rounded-t-sm relative">
                        <div style={{height: '140%', top: '-40%'}} className="absolute w-2 bg-blue-500 rounded-t-sm left-1/2 transform -translate-x-1/2"></div>
                      </div>
                      <div style={{height: '70%'}} className="w-[14%] bg-amber-500 mx-1 rounded-t-sm relative">
                        <div style={{height: '150%', top: '-50%'}} className="absolute w-2 bg-blue-500 rounded-t-sm left-1/2 transform -translate-x-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground flex justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-sm mr-2"></div>
                  <span>CMV (%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
                  <span>Faturamento (R$)</span>
                </div>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Comparativo Planejado vs Realizado</CardTitle>
                <CardDescription>Mês atual</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                {/* Representação visual do gráfico */}
                <div className="w-full h-full bg-muted/30 rounded-md flex items-center justify-center">
                  <div className="h-4/5 w-11/12 relative">
                    {/* Simulação visual do gráfico */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-muted"></div>
                    <div className="absolute left-0 bottom-0 h-full w-1 bg-muted"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full flex justify-between px-4">
                      {["Faturamento", "CMV", "Lucro Oper.", "Margem"].map((item, i) => (
                        <div key={i} className="text-xs text-muted-foreground pb-2">{item}</div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-0 left-6 w-10/12 h-4/5 flex justify-around items-end">
                      <div className="flex items-end">
                        <div style={{height: '70%'}} className="w-6 bg-blue-500 rounded-t-sm mr-2"></div>
                        <div style={{height: '75%'}} className="w-6 bg-amber-600 rounded-t-sm"></div>
                      </div>
                      <div className="flex items-end">
                        <div style={{height: '30%'}} className="w-6 bg-blue-500 rounded-t-sm mr-2"></div>
                        <div style={{height: '28%'}} className="w-6 bg-amber-600 rounded-t-sm"></div>
                      </div>
                      <div className="flex items-end">
                        <div style={{height: '40%'}} className="w-6 bg-blue-500 rounded-t-sm mr-2"></div>
                        <div style={{height: '35%'}} className="w-6 bg-amber-600 rounded-t-sm"></div>
                      </div>
                      <div className="flex items-end">
                        <div style={{height: '65%'}} className="w-6 bg-blue-500 rounded-t-sm mr-2"></div>
                        <div style={{height: '68%'}} className="w-6 bg-amber-600 rounded-t-sm"></div>
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
          </div>
          
          {/* Previsão de crescimento */}
          <Card>
            <CardHeader>
              <CardTitle>Previsão de Crescimento</CardTitle>
              <CardDescription>Próximos 3 meses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-muted/30 rounded-md p-4 h-40">
                {/* Representação visual da previsão */}
                <div className="w-full h-full relative">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-muted"></div>
                  <div className="absolute left-0 bottom-0 h-full w-1 bg-muted"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full flex justify-between px-10">
                    {["Abril", "Maio", "Junho"].map((month, i) => (
                      <div key={i} className="text-xs text-muted-foreground pb-2">{month}</div>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-1 left-6 w-10/12 h-4/5">
                    {/* Linhas de previsão */}
                    <svg className="w-full h-full">
                      {/* Linha pessimista */}
                      <path d="M0,80 C50,85 100,90 200,100" stroke="#ef4444" fill="none" strokeWidth="2"/>
                      
                      {/* Linha realista */}
                      <path d="M0,80 C50,75 100,70 200,60" stroke="#f59e0b" fill="none" strokeWidth="2"/>
                      
                      {/* Linha otimista */}
                      <path d="M0,80 C50,65 100,50 200,30" stroke="#22c55e" fill="none" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground flex justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
                <span>Cenário Otimista</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-600 rounded-sm mr-2"></div>
                <span>Cenário Realista</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-sm mr-2"></div>
                <span>Cenário Pessimista</span>
              </div>
            </CardFooter>
          </Card>
          
          {/* Sugestões e planos de ação */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>Sugestões e Planos de Ação</CardTitle>
                <CardDescription>Baseados na análise dos resultados</CardDescription>
              </div>
              <Button variant="outline" size="sm">Ver Todos</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Badge className="mt-0.5" variant="destructive">Crítico</Badge>
                  <div>
                    <h4 className="font-semibold">CMV de bebidas acima do ideal</h4>
                    <p className="text-sm text-muted-foreground">
                      O custo de bebidas está 4% acima do ideal. Recomendamos renegociar 
                      com fornecedores ou revisar a precificação.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start space-x-4">
                  <Badge className="mt-0.5" variant="secondary">Moderado</Badge>
                  <div>
                    <h4 className="font-semibold">Ticket médio abaixo da meta</h4>
                    <p className="text-sm text-muted-foreground">
                      O ticket médio está 8% abaixo da meta estabelecida. Considere 
                      estratégias de up-selling e cross-selling.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                Implementar Planos de Ação
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="resultados">
          <Card>
            <CardHeader>
              <CardTitle>Resultados do Planejamento Orçamentário</CardTitle>
              <CardDescription>
                Acesse esta seção para visualizar detalhadamente os resultados 
                comparativos entre planejado e realizado.
              </CardDescription>
            </CardHeader>
            <CardFooter className="border-t p-4">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Ver Resultados Detalhados
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="forecasting">
          <Card>
            <CardHeader>
              <CardTitle>Forecasting de Crescimento</CardTitle>
              <CardDescription>
                Visualize projeções futuras baseadas nos dados históricos do seu 
                restaurante em diferentes cenários.
              </CardDescription>
            </CardHeader>
            <CardFooter className="border-t p-4">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Ver Projeções de Crescimento
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="planos">
          <Card>
            <CardHeader>
              <CardTitle>Sugestões e Planos de Ação</CardTitle>
              <CardDescription>
                Acesse recomendações personalizadas e planos de ação para melhorar 
                o desempenho financeiro do seu restaurante.
              </CardDescription>
            </CardHeader>
            <CardFooter className="border-t p-4">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Ver Sugestões e Planos
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}