// app/resultados-forecasting/planos-acao/page.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Download, Filter, Plus, Clock, CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function SugestoesPlanos() {
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
              <li className="font-medium">Sugestões e Planos de Ação</li>
            </ol>
          </nav>
        </div>
        
        <Badge className="mb-2" variant="outline">Melhorias Operacionais</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Sugestões e Planos de Ação</h1>
        <p className="text-muted-foreground max-w-3xl">
          Recomendações práticas baseadas na análise dos resultados e previsões, 
          com planos de ação para corrigir desvios e atingir metas de crescimento.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Select defaultValue="todas">
            <SelectTrigger className="w-full sm:w-44">
              <SelectValue placeholder="Prioridade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas prioridades</SelectItem>
              <SelectItem value="alta">Alta prioridade</SelectItem>
              <SelectItem value="media">Média prioridade</SelectItem>
              <SelectItem value="baixa">Baixa prioridade</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="todos">
            <SelectTrigger className="w-full sm:w-44">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos status</SelectItem>
              <SelectItem value="pendente">Pendentes</SelectItem>
              <SelectItem value="andamento">Em andamento</SelectItem>
              <SelectItem value="concluido">Concluídos</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="w-10 h-10">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button variant="outline" className="w-full sm:w-auto gap-2">
            <Download className="h-4 w-4" />
            Exportar Planos
          </Button>
          <Button className="w-full sm:w-auto gap-2 bg-amber-600 hover:bg-amber-700">
            <Plus className="h-4 w-4" />
            Novo Plano de Ação
          </Button>
        </div>
      </div>

      {/* Status geral */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Status de Implementação</CardTitle>
          <CardDescription>Visão geral da implementação de planos de ação</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Sugestões Aceitas</span>
                <span className="text-sm font-medium">75%</span>
              </div>
              <Progress value={75} className="h-2" />
              <p className="text-xs text-muted-foreground">9 de 12 sugestões aceitas</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Planos em Andamento</span>
                <span className="text-sm font-medium">58%</span>
              </div>
              <Progress value={58} className="h-2" />
              <p className="text-xs text-muted-foreground">7 de 12 planos iniciados</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Planos Concluídos</span>
                <span className="text-sm font-medium">33%</span>
              </div>
              <Progress value={33} className="h-2" />
              <p className="text-xs text-muted-foreground">4 de 12 planos concluídos</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sugestões e Planos */}
      <Tabs defaultValue="sugestoes" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="sugestoes">Sugestões</TabsTrigger>
          <TabsTrigger value="planos">Planos de Ação</TabsTrigger>
          <TabsTrigger value="progresso">Progresso</TabsTrigger>
        </TabsList>

        {/* Sugestões */}
        <TabsContent value="sugestoes" className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {/* Sugestão 1 - CMV Alto */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant="destructive" className="mb-2">Alta Prioridade</Badge>
                    <CardTitle>CMV de Bebidas Acima do Ideal (35.6%)</CardTitle>
                    <CardDescription>
                      O CMV de bebidas está significativamente acima do benchmark ideal de 32%, 
                      impactando a margem de contribuição desta categoria.
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-amber-600 border-amber-600">Pendente</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Problemas Identificados:</h3>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      <li>Preços elevados de bebidas alcoólicas importadas (16% acima da média de mercado)</li>
                      <li>Alto nível de desperdício de bebidas (estimado em 3.8% do total)</li>
                      <li>Controle de estoque inadequado, com perdas não registradas</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Sugestões de Melhoria:</h3>
                    <ul className="space-y-3 mt-1">
                      <li className="flex items-start gap-2">
                        <Checkbox id="sugestao1-1" />
                        <div>
                          <label htmlFor="sugestao1-1" className="text-sm font-medium">
                            Negociar com fornecedores atuais
                          </label>
                          <p className="text-xs text-muted-foreground">
                            Buscar melhores condições comerciais, especialmente para itens de alto volume.
                            Impacto estimado: redução de 1.5% no CMV.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Checkbox id="sugestao1-2" />
                        <div>
                          <label htmlFor="sugestao1-2" className="text-sm font-medium">
                            Implementar controle de estoque rigoroso
                          </label>
                          <p className="text-xs text-muted-foreground">
                            Adotar sistema de inventário diário para bebidas de alto custo e 
                            revisão semanal completa. Impacto estimado: redução de 1.2% em perdas.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Checkbox id="sugestao1-3" />
                        <div>
                          <label htmlFor="sugestao1-3" className="text-sm font-medium">
                            Revisar a precificação de bebidas
                          </label>
                          <p className="text-xs text-muted-foreground">
                            Ajustar preços de venda, especialmente de bebidas premium,
                            mantendo competitividade. Impacto estimado: aumento de 2.3% na margem.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t p-4">
                <Button variant="outline">Descartar Sugestão</Button>
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Criar Plano de Ação
                </Button>
              </CardFooter>
            </Card>

            {/* Sugestão 2 - Despesas Operacionais */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant="destructive" className="mb-2">Alta Prioridade</Badge>
                    <CardTitle>Despesas Operacionais em Crescimento (17.8% acima)</CardTitle>
                    <CardDescription>
                      Despesas operacionais cresceram significativamente acima do planejado,
                      comprometendo o lucro operacional do período.
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-500">Em Andamento</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Problemas Identificados:</h3>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      <li>Aumento de 23% nos custos de energia elétrica</li>
                      <li>Manutenções corretivas não previstas (R$ 8.450 no mês)</li>
                      <li>Crescimento de 12% nos gastos com serviços terceirizados</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Sugestões de Melhoria:</h3>
                    <ul className="space-y-3 mt-1">
                      <li className="flex items-start gap-2">
                        <Checkbox id="sugestao2-1" checked={true} />
                        <div>
                          <label htmlFor="sugestao2-1" className="text-sm font-medium">
                            Implementar plano de eficiência energética
                          </label>
                          <p className="text-xs text-muted-foreground">
                            Substituir equipamentos de alto consumo e implementar rotinas de economia.
                            Impacto estimado: redução de 8% nos custos de energia.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Checkbox id="sugestao2-2" checked={true} />
                        <div>
                          <label htmlFor="sugestao2-2" className="text-sm font-medium">
                            Estabelecer plano de manutenção preventiva
                          </label>
                          <p className="text-xs text-muted-foreground">
                            Criar cronograma regular de manutenção para reduzir intervenções emergenciais.
                            Impacto estimado: redução de 15% nos custos de manutenção.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Checkbox id="sugestao2-3" />
                        <div>
                          <label htmlFor="sugestao2-3" className="text-sm font-medium">
                            Renegociar contratos com terceiros
                          </label>
                          <p className="text-xs text-muted-foreground">
                            Revisar contratos de serviços terceirizados e buscar alternativas no mercado.
                            Impacto estimado: redução de 7-10% nos custos de serviços.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t p-4">
                <Button variant="outline" disabled>Descartar Sugestão</Button>
                <Button disabled>
                  Plano de Ação Criado
                </Button>
              </CardFooter>
            </Card>

            {/* Sugestão 3 - Ticket Médio */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant="secondary" className="mb-2">Média Prioridade</Badge>
                    <CardTitle>Ticket Médio Abaixo da Meta (8% abaixo)</CardTitle>
                    <CardDescription>
                      O ticket médio está abaixo da meta estabelecida, impactando
                      o potencial de faturamento do negócio.
                    </CardDescription>
                  </div>
                  <Badge className="bg-purple-500">Concluído</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Problemas Identificados:</h3>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      <li>Baixa taxa de vendas de entradas e sobremesas (apenas 32% dos clientes)</li>
                      <li>Venda de bebidas alcoólicas em apenas 45% das mesas</li>
                      <li>Falta de combos e sugestões de acompanhamentos</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Sugestões Implementadas:</h3>
                    <ul className="space-y-3 mt-1">
                      <li className="flex items-start gap-2">
                        <Checkbox id="sugestao3-1" checked={true} disabled />
                        <div>
                          <label htmlFor="sugestao3-1" className="text-sm font-medium">
                            Treinar equipe para venda sugestiva
                          </label>
                          <p className="text-xs text-muted-foreground">
                            Capacitar garçons para sugerir ativamente entradas, sobremesas e bebidas.
                            Resultados: aumento de 15% na venda de entradas e sobremesas.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Checkbox id="sugestao3-2" checked={true} disabled />
                        <div>
                          <label htmlFor="sugestao3-2" className="text-sm font-medium">
                            Criar menu de combos e promoções
                          </label>
                          <p className="text-xs text-muted-foreground">
                            Desenvolver combinações atrativas de pratos + bebidas com valor percebido.
                            Resultados: aumento de 7% no ticket médio.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Checkbox id="sugestao3-3" checked={true} disabled />
                        <div>
                          <label htmlFor="sugestao3-3" className="text-sm font-medium">
                            Implementar destaques visuais no cardápio
                          </label>
                          <p className="text-xs text-muted-foreground">
                            Redesenhar cardápio destacando itens de maior margem e valor.
                            Resultados: aumento de 18% na venda de itens destacados.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t p-4 bg-gray-50">
                <div className="text-sm text-green-600 flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-1" />
                  Implementado com sucesso! Ticket médio aumentou 12% no último mês.
                </div>
                <Button variant="outline" size="sm">
                  Ver Relatório
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Planos de Ação */}
        <TabsContent value="planos" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Plano de Ação: Redução de Despesas Operacionais</CardTitle>
              <CardDescription>Criado em 05/03/2025 • Prazo: 45 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <h3 className="text-sm font-medium">Progresso Geral</h3>
                    <span className="text-sm">67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
                
                <div className="space-y-5">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-green-50 p-3 border-b flex justify-between items-center">
                      <div className="flex items-center">
                        <Checkbox id="etapa1" checked={true} disabled className="mr-2" />
                        <h4 className="text-sm font-medium">Etapa 1: Diagnóstico de Consumo Energético</h4>
                      </div>
                      <Badge className="bg-green-500">Concluído</Badge>
                    </div>
                    <div className="p-3 text-sm text-muted-foreground">
                      <p className="mb-2">Mapear consumo de energia por equipamento e identificar oportunidades de economia.</p>
                      <div className="flex justify-between text-xs mt-3">
                        <span>Responsável: Marina Silva (Gerente)</span>
                        <span>Concluído em: 10/03/2025</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-amber-50 p-3 border-b flex justify-between items-center">
                      <div className="flex items-center">
                        <Checkbox id="etapa2" className="mr-2" />
                        <h4 className="text-sm font-medium">Etapa 2: Substituição de Equipamentos Críticos</h4>
                      </div>
                      <Badge variant="outline" className="text-amber-600 border-amber-600">Em Andamento</Badge>
                    </div>
                    <div className="p-3 text-sm text-muted-foreground">
                      <p className="mb-2">Substituir equipamentos de refrigeração e iluminação por modelos de baixo consumo.</p>
                      <div className="flex justify-between text-xs mt-3">
                        <span>Responsável: Carlos Mendes (Manutenção)</span>
                        <span>Prazo: 25/03/2025</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-3 border-b flex justify-between items-center">
                      <div className="flex items-center">
                        <Checkbox id="etapa3" className="mr-2" />
                        <h4 className="text-sm font-medium">Etapa 3: Implementação de Procedimentos de Economia</h4>
                      </div>
                      <Badge variant="outline">Pendente</Badge>
                    </div>
                    <div className="p-3 text-sm text-muted-foreground">
                      <p className="mb-2">Criar e treinar equipe em procedimentos operacionais para economia de energia.</p>
                      <div className="flex justify-between text-xs mt-3">
                        <span>Responsável: Juliana Alves (Treinamento)</span>
                        <span>Prazo: 15/04/2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Editar Plano
                </Button>
                <Button variant="outline" size="sm">
                  Adicionar Etapa
                </Button>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700">
                Atualizar Progresso
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Plano de Ação: Aumento de Ticket Médio</CardTitle>
              <CardDescription>Criado em 15/02/2025 • Prazo: 30 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <h3 className="text-sm font-medium">Progresso Geral</h3>
                    <span className="text-sm">100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                
                <div className="border rounded-lg p-4 bg-green-50 flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                    <div>
                      <h3 className="font-medium">Plano concluído com sucesso!</h3>
                      <p className="text-sm text-muted-foreground">Todas as etapas foram implementadas e os resultados superaram as expectativas.</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver Relatório
                  </Button>
                </div>
                
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h3 className="font-medium text-amber-800 mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Resultados Alcançados
                  </h3>
                  <ul className="space-y-2 text-sm text-amber-700">
                    <li className="flex justify-between">
                      <span>Meta de aumento no ticket médio:</span>
                      <span className="font-medium">8%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Resultado alcançado:</span>
                      <span className="font-medium">12%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Impacto no faturamento mensal:</span>
                      <span className="font-medium">+R$ 18.350</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Taxa de adoção de combos:</span>
                      <span className="font-medium">43% dos clientes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end border-t p-4">
              <Button variant="outline">
                Arquivar Plano
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Progresso */}
        <TabsContent value="progresso" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Progresso</CardTitle>
              <CardDescription>Acompanhamento da evolução dos indicadores após implementação dos planos</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              {/* Representação visual do gráfico de progresso */}
              <div className="w-full h-full bg-muted/30 rounded-md flex items-center justify-center">
                <div className="h-4/5 w-11/12 relative">
                  {/* Simulação visual do gráfico */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-muted"></div>
                  <div className="absolute left-0 bottom-0 h-full w-1 bg-muted"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full flex justify-between px-4">
                    {["Jan", "Fev", "Mar", "Abr"].map((month, i) => (
                      <div key={i} className="text-xs text-muted-foreground pb-2">{month}</div>
                    ))}
                  </div>
                  
                  {/* Linhas de tendência */}
                  <svg className="absolute top-0 left-6 w-[95%] h-full">
                    {/* Implementação de planos (marcadores) */}
                    <path d="M80,50 L80,250" stroke="#e2e8f0" strokeDasharray="4,4" strokeWidth="2"/>
                    <circle cx="80" cy="20" r="6" fill="#f59e0b" />
                    <text x="85" y="20" className="text-xs fill-amber-600">Plano: Ticket Médio</text>
                    
                    <path d="M160,50 L160,250" stroke="#e2e8f0" strokeDasharray="4,4" strokeWidth="2"/>
                    <circle cx="160" cy="40" r="6" fill="#f59e0b" />
                    <text x="165" y="40" className="text-xs fill-amber-600">Plano: Despesas Op.</text>
                    
                    {/* Linha de ticket médio */}
                    <path d="M0,180 L80,175 L160,155 L240,120" stroke="#8b5cf6" fill="none" strokeWidth="3"/>
                    
                    {/* Linha de despesas operacionais */}
                    <path d="M0,100 L80,110 L160,120 L240,90" stroke="#ef4444" fill="none" strokeWidth="3"/>
                    
                    {/* Linha de lucro operacional */}
                    <path d="M0,150 L80,145 L160,140 L240,120" stroke="#22c55e" fill="none" strokeWidth="3"/>
                  </svg>
                </div>
              </div>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground flex flex-wrap justify-between">
              <div className="flex items-center mr-4 mb-2">
                <div className="w-3 h-3 bg-purple-500 rounded-sm mr-2"></div>
                <span>Ticket Médio</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-sm mr-2"></div>
                <span>Despesas Operacionais</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
                <span>Lucro Operacional</span>
              </div>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Impacto Financeiro dos Planos de Ação</CardTitle>
              <CardDescription>Resultados consolidados após implementação</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-medium text-green-800 mb-3 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Aumento de Ticket Médio
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Antes:</span>
                      <span>R$ 75,00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Depois:</span>
                      <span>R$ 84,00</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Impacto Mensal:</span>
                      <span className="text-green-600">+R$ 18.350</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>ROI do Plano:</span>
                      <span className="text-green-600">520%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h3 className="font-medium text-amber-800 mb-3 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Redução de Despesas Operacionais
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Antes:</span>
                      <span>R$ 42.686</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Projeção:</span>
                      <span>R$ 36.283</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Impacto Esperado:</span>
                      <span className="text-amber-600">-R$ 6.403</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Progresso:</span>
                      <span className="text-amber-600">67%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-medium text-blue-800 mb-3">Impacto Total no Lucro</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lucro Anterior:</span>
                      <span>R$ 47.650</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lucro Projetado:</span>
                      <span>R$ 58.400</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Aumento Esperado:</span>
                      <span className="text-blue-600">+22.6%</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Realizado até agora:</span>
                      <span className="text-blue-600">+15.3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t p-4 flex justify-end">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Gerar Relatório de Impacto
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}