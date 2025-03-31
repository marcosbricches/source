// app/planos/relatorios/page.tsx
"use client"

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  FileText, 
  Calendar, 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Percent,
  Clock,
  Search,
  PieChart,
  LineChart,
  Share2
} from "lucide-react";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Dados fictícios para os relatórios
const relatoriosData = {
  resumoPlanos: [
    { id: 1, nome: "Plano Básico", valorMensal: 99.90, valorAnual: 999.00, status: "Ativo", assinantes: 124, recursos: 8 },
    { id: 2, nome: "Plano Premium", valorMensal: 199.90, valorAnual: 1999.00, status: "Ativo", assinantes: 87, recursos: 12 },
    { id: 3, nome: "Plano Enterprise", valorMensal: 349.90, valorAnual: 3499.00, status: "Ativo", assinantes: 42, recursos: 15 },
    { id: 4, nome: "Plano Promocional", valorMensal: 79.90, valorAnual: 799.00, status: "Inativo", assinantes: 0, recursos: 6 }
  ],
  receitaPorPlano: [
    { id: 1, nome: "Plano Básico", receitaMensal: 12387.60, receitaAnual: 9990.00, percentualReceita: 27.5, crescimento: 8.3 },
    { id: 2, nome: "Plano Premium", receitaMensal: 17391.30, receitaAnual: 19990.00, percentualReceita: 38.6, crescimento: 12.7 },
    { id: 3, nome: "Plano Enterprise", receitaMensal: 14695.80, receitaAnual: 13996.00, percentualReceita: 32.6, crescimento: 5.2 },
    { id: 4, nome: "Plano Promocional", receitaMensal: 559.30, receitaAnual: 799.00, percentualReceita: 1.3, crescimento: -2.1 }
  ],
  adesaoFreemium: [
    { id: 1, nome: "Plano Básico", diasFreemium: 7, iniciosFreemium: 285, conversoes: 124, taxaConversao: 43.5, cancelandoEm: "Dia 6" },
    { id: 2, nome: "Plano Premium", diasFreemium: 15, iniciosFreemium: 127, conversoes: 87, taxaConversao: 68.5, cancelandoEm: "Dia 12" },
    { id: 3, nome: "Plano Enterprise", diasFreemium: 30, iniciosFreemium: 58, conversoes: 42, taxaConversao: 72.4, cancelandoEm: "Dia 25" },
    { id: 4, nome: "Plano Promocional", diasFreemium: 7, iniciosFreemium: 43, conversoes: 23, taxaConversao: 53.5, cancelandoEm: "Dia 5" }
  ],
  metricas: {
    totalPlanos: 4,
    planosAtivos: 3,
    totalAssinantes: 253,
    receitaMensalTotal: 45033.00,
    taxaConversaoMedia: 59.3,
    percentualAssinaturasAnuais: 22.5
  }
};

const RelatoriosPage = () => {
  const [periodo, setPeriodo] = React.useState("30dias");

  return (
    <div className="devio-container">
      {/* PageHeader: Report */}
      <div className="devio-section relative mb-8">
        <div className="devio-dot-pattern"></div>
        <div className="devio-flex devio-items-center mb-2">
          <Link href="/planos">
            <Button variant="ghost" className="devio-btn devio-btn-ghost p-0 mr-2">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar
            </Button>
          </Link>
          <Badge className="devio-badge devio-badge-primary">Relatórios</Badge>
        </div>
        <div className="devio-flex devio-justify-between devio-items-center">
          <div>
            <h2 className="devio-text-2xl devio-font-bold mb-2">Relatórios de Planos</h2>
            <p className="devio-text-muted mb-2">Análise detalhada e métricas dos planos oferecidos</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="devio-btn devio-btn-primary">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Formatos</DropdownMenuLabel>
              <DropdownMenuItem>
                <FileText className="w-4 h-4 mr-2" />
                PDF
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="w-4 h-4 mr-2" />
                CSV
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* FiltersBar: default */}
      <div className="devio-card mb-8 p-4">
        <div className="devio-flex devio-justify-between devio-items-center">
          <div className="devio-flex devio-gap-4 devio-items-center">
            <div>
              <label className="devio-text-sm devio-text-muted block mb-1">Período</label>
              <Select defaultValue={periodo} onValueChange={setPeriodo}>
                <SelectTrigger className="devio-input w-[180px]">
                  <SelectValue placeholder="Selecione o período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30dias">Últimos 30 dias</SelectItem>
                  <SelectItem value="3meses">Últimos 3 meses</SelectItem>
                  <SelectItem value="6meses">Últimos 6 meses</SelectItem>
                  <SelectItem value="12meses">Últimos 12 meses</SelectItem>
                  <SelectItem value="personalizado">Personalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="devio-text-sm devio-text-muted block mb-1">Status</label>
              <Select defaultValue="todos">
                <SelectTrigger className="devio-input w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="ativo">Ativos</SelectItem>
                  <SelectItem value="inativo">Inativos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="devio-text-sm devio-text-muted block mb-1">Ordenar Por</label>
              <Select defaultValue="receita">
                <SelectTrigger className="devio-input w-[170px]">
                  <SelectValue placeholder="Ordenação" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="receita">Maior Receita</SelectItem>
                  <SelectItem value="assinantes">Mais Assinantes</SelectItem>
                  <SelectItem value="conversao">Melhor Conversão</SelectItem>
                  <SelectItem value="alfabetica">Alfabética</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="devio-input-group">
            <span className="devio-input-group-icon"><Search className="w-4 h-4" /></span>
            <Input className="devio-input w-64 pl-8" placeholder="Buscar nos relatórios..." />
          </div>
        </div>
      </div>
      
      {/* MetricsSummary: compact */}
      <div className="devio-grid devio-grid-3 mb-8">
        <div className="devio-stat-card">
          <div className="devio-flex devio-justify-between devio-items-center mb-2">
            <div className="devio-icon-container devio-icon-primary devio-icon-container-sm">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="devio-stat-label">Receita Mensal Total</div>
          <div className="devio-stat-value">R$ {relatoriosData.metricas.receitaMensalTotal.toFixed(2)}</div>
        </div>
        
        <div className="devio-stat-card">
          <div className="devio-flex devio-justify-between devio-items-center mb-2">
            <div className="devio-icon-container devio-icon-success devio-icon-container-sm">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="devio-stat-label">Total de Assinantes</div>
          <div className="devio-stat-value">{relatoriosData.metricas.totalAssinantes}</div>
        </div>
        
        <div className="devio-stat-card">
          <div className="devio-flex devio-justify-between devio-items-center mb-2">
            <div className="devio-icon-container devio-icon-accent devio-icon-container-sm">
              <Percent className="w-4 h-4" />
            </div>
          </div>
          <div className="devio-stat-label">Taxa de Conversão Média</div>
          <div className="devio-stat-value">{relatoriosData.metricas.taxaConversaoMedia}%</div>
        </div>
      </div>
      
      {/* ReportTabs: default */}
      <Tabs defaultValue="resumo" className="mb-10">
        <TabsList className="mb-6">
          <TabsTrigger value="resumo">Resumo de Planos</TabsTrigger>
          <TabsTrigger value="receita">Receita por Plano</TabsTrigger>
          <TabsTrigger value="freemium">Adesão ao Freemium</TabsTrigger>
        </TabsList>
        
        {/* TabContent: Resumo de Planos */}
        <TabsContent value="resumo">
          <div className="space-y-8">
            {/* ReportHeader: default */}
            <div className="devio-flex devio-justify-between devio-items-center">
              <div>
                <h3 className="devio-text-lg devio-font-semibold">Resumo de Planos</h3>
                <p className="devio-text-sm devio-text-muted">
                  Lista de planos cadastrados com seus valores, recursos, status e assinantes
                </p>
              </div>
              <div className="devio-flex devio-gap-2">
                <Button className="devio-btn devio-btn-outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="devio-btn devio-btn-outline">
                      <Download className="w-4 h-4 mr-2" />
                      Exportar
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>PDF</DropdownMenuItem>
                    <DropdownMenuItem>CSV</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            {/* PlansChart: visualization */}
            <Card className="devio-card p-6 mb-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="devio-text-lg">Distribuição de Assinantes por Plano</CardTitle>
                <CardDescription>Representação visual da distribuição de assinantes</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-64 w-full bg-neutral-50 rounded-md flex items-center justify-center border border-neutral-200">
                  <div className="text-center">
                    <PieChart className="w-10 h-10 mx-auto mb-4 devio-text-primary opacity-50" />
                    <p className="devio-text-muted">Visualização do gráfico de distribuição</p>
                    <p className="devio-text-xs devio-text-muted mt-1">(Representação visual - sem dados reais)</p>
                  </div>
                </div>
              </CardContent>
              <div className="devio-grid devio-grid-4 gap-4 mt-4">
                <div className="p-3 rounded-md bg-blue-50 border border-blue-100">
                  <p className="devio-text-xs devio-text-muted mb-1">Plano Básico</p>
                  <div className="devio-flex devio-justify-between">
                    <p className="devio-text-sm devio-font-semibold">124 (49%)</p>
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  </div>
                </div>
                <div className="p-3 rounded-md bg-purple-50 border border-purple-100">
                  <p className="devio-text-xs devio-text-muted mb-1">Plano Premium</p>
                  <div className="devio-flex devio-justify-between">
                    <p className="devio-text-sm devio-font-semibold">87 (34%)</p>
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  </div>
                </div>
                <div className="p-3 rounded-md bg-green-50 border border-green-100">
                  <p className="devio-text-xs devio-text-muted mb-1">Plano Enterprise</p>
                  <div className="devio-flex devio-justify-between">
                    <p className="devio-text-sm devio-font-semibold">42 (17%)</p>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-3 rounded-md bg-amber-50 border border-amber-100">
                  <p className="devio-text-xs devio-text-muted mb-1">Plano Promocional</p>
                  <div className="devio-flex devio-justify-between">
                    <p className="devio-text-sm devio-font-semibold">0 (0%)</p>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* PlansTable: default */}
            <Card className="devio-card">
              <CardContent className="p-0">
                <Table className="devio-table">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Valor Mensal</TableHead>
                      <TableHead>Valor Anual</TableHead>
                      <TableHead>Recursos</TableHead>
                      <TableHead>Assinantes</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {relatoriosData.resumoPlanos.map((plano) => (
                      <TableRow key={plano.id}>
                        <TableCell className="devio-font-medium">{plano.nome}</TableCell>
                        <TableCell>R$ {plano.valorMensal.toFixed(2)}</TableCell>
                        <TableCell>R$ {plano.valorAnual.toFixed(2)}</TableCell>
                        <TableCell>{plano.recursos}</TableCell>
                        <TableCell>{plano.assinantes}</TableCell>
                        <TableCell>
                          <Badge className={`devio-badge ${plano.status === "Ativo" ? "devio-badge-success" : "devio-badge-neutral"}`}>
                            {plano.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Link href={`/planos/${plano.id}`}>
                            <Button className="devio-btn devio-btn-outline devio-btn-sm">
                              Ver Detalhes
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            {/* InsightCards: info */}
            <div className="devio-grid devio-grid-2 gap-6">
              <Card className="devio-card">
                <CardHeader>
                  <CardTitle className="devio-text-base">Insights - Planos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="devio-flex devio-items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      <p className="devio-text-sm">
                        <span className="devio-font-medium">75%</span> dos assinantes estão concentrados nos planos Básico e Premium.
                      </p>
                    </li>
                    <li className="devio-flex devio-items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      <p className="devio-text-sm">
                        O plano Premium oferece <span className="devio-font-medium">50%</span> mais recursos que o plano Básico, mas custa apenas <span className="devio-font-medium">100%</span> a mais.
                      </p>
                    </li>
                    <li className="devio-flex devio-items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      <p className="devio-text-sm">
                        A distribuição atual indica uma boa diversificação de planos, com presença em diferentes segmentos de mercado.
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="devio-card">
                <CardHeader>
                  <CardTitle className="devio-text-base">Recomendações</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="devio-flex devio-items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2"></span>
                      <p className="devio-text-sm">
                        Considerar a inclusão de mais recursos no Plano Enterprise para aumentar sua atratividade.
                      </p>
                    </li>
                    <li className="devio-flex devio-items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2"></span>
                      <p className="devio-text-sm">
                        Revisar a estratégia para o Plano Promocional, que atualmente não possui assinantes.
                      </p>
                    </li>
                    <li className="devio-flex devio-items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2"></span>
                      <p className="devio-text-sm">
                        Analisar a possibilidade de criar um plano intermediário entre Premium e Enterprise.
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        {/* TabContent: Receita por Plano */}
        <TabsContent value="receita">
          <div className="space-y-8">
            {/* ReportHeader: default */}
            <div className="devio-flex devio-justify-between devio-items-center">
              <div>
                <h3 className="devio-text-lg devio-font-semibold">Receita por Plano</h3>
                <p className="devio-text-sm devio-text-muted">
                  Análise da receita gerada por cada plano, segmentada por período (mensal/anual)
                </p>
              </div>
              <div className="devio-flex devio-gap-2">
                <Button className="devio-btn devio-btn-outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="devio-btn devio-btn-outline">
                      <Download className="w-4 h-4 mr-2" />
                      Exportar
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>PDF</DropdownMenuItem>
                    <DropdownMenuItem>CSV</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            {/* RevenueChart: visualization */}
            <Card className="devio-card p-6 mb-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="devio-text-lg">Distribuição de Receita por Plano</CardTitle>
                <CardDescription>Representação visual da contribuição de cada plano para a receita total</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-64 w-full bg-neutral-50 rounded-md flex items-center justify-center border border-neutral-200">
                  <div className="text-center">
                    <BarChart3 className="w-10 h-10 mx-auto mb-4 devio-text-primary opacity-50" />
                    <p className="devio-text-muted">Visualização do gráfico de receita</p>
                    <p className="devio-text-xs devio-text-muted mt-1">(Representação visual - sem dados reais)</p>
                  </div>
                </div>
              </CardContent>
              <div className="devio-grid devio-grid-2 gap-4 mt-4">
                <div className="devio-stat-card">
                  <div className="devio-flex devio-justify-between devio-items-center mb-2">
                    <div className="devio-icon-container devio-icon-primary devio-icon-container-sm">
                      <DollarSign className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="devio-stat-label">Total Mensal</div>
                  <div className="devio-stat-value">R$ {relatoriosData.metricas.receitaMensalTotal.toFixed(2)}</div>
                </div>
                
                <div className="devio-stat-card">
                  <div className="devio-flex devio-justify-between devio-items-center mb-2">
                    <div className="devio-icon-container devio-icon-accent devio-icon-container-sm">
                      <DollarSign className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="devio-stat-label">Total Anual</div>
                  <div className="devio-stat-value">R$ {(relatoriosData.metricas.receitaMensalTotal * 12).toFixed(2)}</div>
                </div>
              </div>
            </Card>
            
            {/* RevenueTable: default */}
            <Card className="devio-card">
              <CardContent className="p-0">
                <Table className="devio-table">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Receita Mensal</TableHead>
                      <TableHead>Receita Anual</TableHead>
                      <TableHead>% da Receita Total</TableHead>
                      <TableHead>Crescimento</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {relatoriosData.receitaPorPlano.map((plano) => (
                      <TableRow key={plano.id}>
                        <TableCell className="devio-font-medium">{plano.nome}</TableCell>
                        <TableCell>R$ {plano.receitaMensal.toFixed(2)}</TableCell>
                        <TableCell>R$ {plano.receitaAnual.toFixed(2)}</TableCell>
                        <TableCell>{plano.percentualReceita}%</TableCell>
                        <TableCell>
                          <div className={`devio-stat-trend ${plano.crescimento >= 0 ? "devio-trend-up" : "devio-trend-down"}`}>
                            <TrendingUp className="w-3 h-3" />
                            <span>{plano.crescimento}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Link href={`/planos/${plano.id}`}>
                            <Button className="devio-btn devio-btn-outline devio-btn-sm">
                              Ver Detalhes
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            {/* RevenueTrend: visualization */}
            <Card className="devio-card p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="devio-text-lg">Tendência de Receita (Últimos 6 Meses)</CardTitle>
                <CardDescription>Evolução da receita por plano ao longo do tempo</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-64 w-full bg-neutral-50 rounded-md flex items-center justify-center border border-neutral-200">
                  <div className="text-center">
                    <LineChart className="w-10 h-10 mx-auto mb-4 devio-text-primary opacity-50" />
                    <p className="devio-text-muted">Visualização do gráfico de tendência</p>
                    <p className="devio-text-xs devio-text-muted mt-1">(Representação visual - sem dados reais)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* TabContent: Adesão ao Freemium */}
        <TabsContent value="freemium">
          <div className="space-y-8">
            {/* ReportHeader: default */}
            <div className="devio-flex devio-justify-between devio-items-center">
              <div>
                <h3 className="devio-text-lg devio-font-semibold">Adesão ao Freemium</h3>
                <p className="devio-text-sm devio-text-muted">
                  Número de clientes que utilizaram o período Freemium e sua conversão para planos pagos
                </p>
              </div>
              <div className="devio-flex devio-gap-2">
                <Button className="devio-btn devio-btn-outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="devio-btn devio-btn-outline">
                      <Download className="w-4 h-4 mr-2" />
                      Exportar
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>PDF</DropdownMenuItem>
                    <DropdownMenuItem>CSV</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            {/* FreemiumMetrics: default */}
            <div className="devio-grid devio-grid-3 gap-6">
              <Card className="devio-stat-card">
                <div className="devio-flex devio-justify-between devio-items-center mb-2">
                  <div className="devio-icon-container devio-icon-primary devio-icon-container-sm">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <div className="devio-stat-label">Total de Testes Freemium</div>
                <div className="devio-stat-value">513</div>
                <p className="devio-text-xs devio-text-muted mt-1">
                  No período selecionado
                </p>
              </Card>
              
              <Card className="devio-stat-card">
                <div className="devio-flex devio-justify-between devio-items-center mb-2">
                  <div className="devio-icon-container devio-icon-success devio-icon-container-sm">
                    <Percent className="w-4 h-4" />
                  </div>
                </div>
                <div className="devio-stat-label">Taxa de Conversão Média</div>
                <div className="devio-stat-value">{relatoriosData.metricas.taxaConversaoMedia}%</div>
                <p className="devio-text-xs devio-text-muted mt-1">
                  De Freemium para assinantes pagos
                </p>
              </Card>
              
              <Card className="devio-stat-card">
                <div className="devio-flex devio-justify-between devio-items-center mb-2">
                  <div className="devio-icon-container devio-icon-warning devio-icon-container-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                </div>
                <div className="devio-stat-label">Dia Médio de Cancelamento</div>
                <div className="devio-stat-value">Dia 12</div>
                <p className="devio-text-xs devio-text-muted mt-1">
                  Para usuários que não converteram
                </p>
              </Card>
            </div>
            
            {/* FreemiumTable: default */}
            <Card className="devio-card">
              <CardContent className="p-0">
                <Table className="devio-table">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Dias Freemium</TableHead>
                      <TableHead>Testes Iniciados</TableHead>
                      <TableHead>Conversões</TableHead>
                      <TableHead>Taxa de Conversão</TableHead>
                      <TableHead>Cancelamento Frequente</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {relatoriosData.adesaoFreemium.map((plano) => (
                      <TableRow key={plano.id}>
                        <TableCell className="devio-font-medium">{plano.nome}</TableCell>
                        <TableCell>{plano.diasFreemium} dias</TableCell>
                        <TableCell>{plano.iniciosFreemium}</TableCell>
                        <TableCell>{plano.conversoes}</TableCell>
                        <TableCell>
                          <Badge className={`devio-badge ${
                            plano.taxaConversao > 65 
                              ? "devio-badge-success" 
                              : plano.taxaConversao > 50 
                                ? "devio-badge-warning" 
                                : "devio-badge-danger"
                          }`}>
                            {plano.taxaConversao}%
                          </Badge>
                        </TableCell>
                        <TableCell>{plano.cancelandoEm}</TableCell>
                        <TableCell>
                          <Link href={`/planos/${plano.id}`}>
                            <Button className="devio-btn devio-btn-outline devio-btn-sm">
                              Ver Detalhes
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            {/* FreemiumAnalysis: accent */}
            <Card className="devio-card devio-card-accent">
              <CardHeader>
                <div className="devio-flex devio-items-center">
                  <div className="devio-icon-container devio-icon-accent">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <CardTitle>Análise de Conversão Freemium</CardTitle>
                    <CardDescription>Insights sobre o comportamento durante o período gratuito</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="devio-highlight-box mb-4">
                  <p className="devio-text-sm">
                    O <span className="devio-font-bold">Plano Enterprise</span> apresenta a melhor taxa de conversão com <span className="devio-font-bold">72,4%</span>, 
                    enquanto o <span className="devio-font-bold">Plano Básico</span> possui a menor taxa com <span className="devio-font-bold">43,5%</span>.
                  </p>
                </div>
                
                <div className="devio-grid devio-grid-2 gap-6">
                  <div>
                    <h4 className="devio-text-sm devio-font-semibold mb-3">Insights Principais</h4>
                    <ul className="space-y-2">
                      <li className="devio-flex devio-items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2"></span>
                        <p className="devio-text-sm">
                          Períodos mais longos de Freemium tendem a gerar taxas de conversão mais altas.
                        </p>
                      </li>
                      <li className="devio-flex devio-items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2"></span>
                        <p className="devio-text-sm">
                          A maioria dos cancelamentos ocorre nos últimos dias do período gratuito.
                        </p>
                      </li>
                      <li className="devio-flex devio-items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2"></span>
                        <p className="devio-text-sm">
                          Usuários que utilizam mais de 70% dos recursos disponíveis durante o Freemium têm maior probabilidade de conversão.
                        </p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="devio-text-sm devio-font-semibold mb-3">Recomendações</h4>
                    <ul className="space-y-2">
                      <li className="devio-flex devio-items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                        <p className="devio-text-sm">
                          Considerar aumentar o período Freemium do Plano Básico para melhorar a conversão.
                        </p>
                      </li>
                      <li className="devio-flex devio-items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                        <p className="devio-text-sm">
                          Implementar notificações e incentivos 2-3 dias antes do final do período gratuito.
                        </p>
                      </li>
                      <li className="devio-flex devio-items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                        <p className="devio-text-sm">
                          Criar guias de onboarding para estimular o uso de mais recursos durante o período gratuito.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* HistoricalDataAlert: info */}
      <Alert className="devio-alert devio-alert-info mb-10">
        <AlertDescription className="devio-flex devio-items-start">
          <Calendar className="w-4 h-4 mr-2 mt-0.5" />
          <div>
            <p className="devio-font-medium">Dados Históricos Disponíveis</p>
            <p className="devio-text-sm">
              Você pode acessar dados históricos completos exportando relatórios ou no painel de análise avançada.
              Relatórios detalhados estão disponíveis para os últimos 24 meses.
            </p>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default RelatoriosPage;