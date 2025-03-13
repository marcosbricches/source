// app/admin/clientes/relatorios/page.tsx
"use client"

import Link from "next/link"
import { ChevronLeft, Download, Filter, FileText, Layers, Activity, UserMinus, PieChart, BarChart2, Calendar, AlertCircle, ArrowUpRight, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function RelatoriosClientesPage() {
  return (
    <div className="devio-container">
      {/* PageHeader: with-back-button */}
      <div className="devio-section relative">
        <div className="devio-dot-pattern"></div>
        <div className="devio-flex devio-items-center devio-gap-2 mb-4">
          <Link href="/admin/clientes">
            <Button className="devio-btn devio-btn-ghost devio-btn-sm">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Voltar para Clientes
            </Button>
          </Link>
          <Badge className="devio-badge devio-badge-primary">Relatórios</Badge>
        </div>
        <h1 className="devio-text-2xl devio-font-bold mb-2">Relatórios de Clientes</h1>
        <p className="devio-text-muted mb-6">Análise detalhada e métricas da base de clientes para tomada de decisões estratégicas.</p>
      </div>

      {/* ReportNavigation: tabs-with-filters */}
      <div className="mb-8">
        <div className="devio-flex devio-justify-between devio-items-center mb-6">
          <div className="devio-flex devio-gap-4 devio-items-center">
            <div className="devio-flex devio-gap-2 devio-items-center">
              <span className="devio-text-sm devio-font-medium">Período:</span>
              <Select defaultValue="ultimo-mes">
                <SelectTrigger className="devio-input w-[180px]">
                  <SelectValue placeholder="Selecione o período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ultimo-mes">Último mês</SelectItem>
                  <SelectItem value="ultimos-3-meses">Últimos 3 meses</SelectItem>
                  <SelectItem value="ultimos-6-meses">Últimos 6 meses</SelectItem>
                  <SelectItem value="ultimo-ano">Último ano</SelectItem>
                  <SelectItem value="personalizado">Personalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator orientation="vertical" className="h-6" />
            <div className="devio-flex devio-gap-2 devio-items-center">
              <span className="devio-text-sm devio-font-medium">Plano:</span>
              <Select defaultValue="todos">
                <SelectTrigger className="devio-input w-[150px]">
                  <SelectValue placeholder="Selecione o plano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os planos</SelectItem>
                  <SelectItem value="basico">Básico</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="devio-flex devio-gap-2">
            <Button className="devio-btn devio-btn-outline">
              <Filter className="w-4 h-4 mr-2" />
              Mais Filtros
            </Button>
            <Button className="devio-btn devio-btn-primary">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="resumo" className="w-full">
          <TabsList className="mb-6 bg-neutral-50 p-1 border border-neutral-200">
            <TabsTrigger value="resumo" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <FileText className="w-4 h-4 mr-2" />
              Resumo
            </TabsTrigger>
            <TabsTrigger value="engajamento" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <Activity className="w-4 h-4 mr-2" />
              Engajamento
            </TabsTrigger>
            <TabsTrigger value="retencao" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <UserMinus className="w-4 h-4 mr-2" />
              Retenção e Churn
            </TabsTrigger>
            <TabsTrigger value="distribuicao" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <PieChart className="w-4 h-4 mr-2" />
              Distribuição
            </TabsTrigger>
            <TabsTrigger value="planejamento" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <Layers className="w-4 h-4 mr-2" />
              Planejamento
            </TabsTrigger>
          </TabsList>

          {/* TabContent: resumo */}
          <TabsContent value="resumo" className="mt-0">
            <div className="devio-grid devio-grid-4 mb-6">
              <div className="devio-stat-card">
                <div className="devio-flex devio-justify-between devio-items-center mb-2">
                  <div className="devio-icon-container devio-icon-primary devio-icon-container-sm">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="devio-stat-trend devio-trend-up">
                    <span>+5.2%</span>
                  </div>
                </div>
                <div className="devio-stat-label">Total de Clientes</div>
                <div className="devio-stat-value">243</div>
              </div>
              
              <div className="devio-stat-card">
                <div className="devio-flex devio-justify-between devio-items-center mb-2">
                  <div className="devio-icon-container devio-icon-success devio-icon-container-sm">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="devio-stat-trend devio-trend-up">
                    <span>+12%</span>
                  </div>
                </div>
                <div className="devio-stat-label">CMV no Intervalo</div>
                <div className="devio-stat-value">82%</div>
                <div className="devio-text-xs devio-text-muted mt-1">Clientes dentro de 30-32%</div>
              </div>
              
              <div className="devio-stat-card">
                <div className="devio-flex devio-justify-between devio-items-center mb-2">
                  <div className="devio-icon-container devio-icon-warning devio-icon-container-sm">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div className="devio-stat-trend devio-trend-down">
                    <span>-3%</span>
                  </div>
                </div>
                <div className="devio-stat-label">CMV Acima</div>
                <div className="devio-stat-value">12%</div>
                <div className="devio-text-xs devio-text-muted mt-1">Clientes acima de 32%</div>
              </div>
              
              <div className="devio-stat-card">
                <div className="devio-flex devio-justify-between devio-items-center mb-2">
                  <div className="devio-icon-container devio-icon-danger devio-icon-container-sm">
                    <BarChart2 className="w-4 h-4" />
                  </div>
                  <div className="devio-stat-trend devio-trend-up">
                    <span>+1%</span>
                  </div>
                </div>
                <div className="devio-stat-label">CMV Abaixo</div>
                <div className="devio-stat-value">6%</div>
                <div className="devio-text-xs devio-text-muted mt-1">Clientes abaixo de 30%</div>
              </div>
            </div>
            
            <Card className="devio-card">
              <CardHeader className="pb-2">
                <div className="devio-flex devio-justify-between devio-items-center">
                  <div>
                    <CardTitle>Resumo de Clientes</CardTitle>
                    <CardDescription>
                      Lista consolidada com dados como nome, plano, status e CMV, destacando valores fora do intervalo ideal.
                    </CardDescription>
                  </div>
                  <Badge className="devio-badge devio-badge-neutral">243 clientes</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative h-[260px] w-full bg-gradient-to-b from-white to-neutral-50 rounded-md border border-neutral-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="devio-icon-container devio-icon-primary mx-auto mb-3">
                      <FileText className="w-5 h-5" />
                    </div>
                    <p className="devio-text-base devio-font-medium mb-1">Resumo de Clientes</p>
                    <p className="devio-text-sm devio-text-muted mb-4">Visão consolidada de todos os clientes cadastrados</p>
                    <Button className="devio-btn devio-btn-primary">
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Visualizar Relatório Completo
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="devio-flex devio-justify-between pt-0">
                <div className="devio-text-xs devio-text-muted">Atualizado: 07/03/2025, 09:45</div>
                <Button className="devio-btn devio-btn-outline devio-btn-sm">
                  <Download className="w-3 h-3 mr-1" />
                  Exportar PDF
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* TabContent: engajamento - Aqui iria o conteúdo dos demais relatórios */}
          <TabsContent value="engajamento" className="mt-0">
            <Card className="devio-card">
              <CardHeader>
                <div className="devio-flex devio-justify-between devio-items-center">
                  <div>
                    <CardTitle>Engajamento por Cliente</CardTitle>
                    <CardDescription>
                      Relatório detalhado de acessos realizados por cada cliente no período selecionado.
                    </CardDescription>
                  </div>
                  <Button className="devio-btn devio-btn-outline devio-btn-sm">
                    <Download className="w-3 h-3 mr-1" />
                    Exportar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] w-full bg-gradient-to-b from-white to-neutral-50 rounded-md border border-neutral-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="devio-icon-container devio-icon-success mx-auto mb-3">
                      <Activity className="w-5 h-5" />
                    </div>
                    <p className="devio-text-base devio-font-medium mb-1">Relatório de Engajamento</p>
                    <p className="devio-text-sm devio-text-muted mb-4">Análise detalhada de acessos e interações no sistema</p>
                    <Button className="devio-btn devio-btn-primary">
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Visualizar Relatório Completo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TabContent: retencao - Versão simplificada */}
<TabsContent value="retencao" className="mt-0">
  <div className="devio-grid devio-grid-2 mb-6">
    <div className="devio-stat-card">
      <div className="devio-flex devio-justify-between devio-items-center mb-2">
        <div className="devio-icon-container devio-icon-success devio-icon-container-sm">
          <Users className="w-4 h-4" />
        </div>
        <div className="devio-stat-trend devio-trend-up">
          <span>+2.3%</span>
        </div>
      </div>
      <div className="devio-stat-label">Taxa de Retenção</div>
      <div className="devio-stat-value">92%</div>
      <div className="devio-text-xs devio-text-muted mt-1">Últimos 30 dias</div>
    </div>
    
    <div className="devio-stat-card">
      <div className="devio-flex devio-justify-between devio-items-center mb-2">
        <div className="devio-icon-container devio-icon-danger devio-icon-container-sm">
          <UserMinus className="w-4 h-4" />
        </div>
        <div className="devio-stat-trend devio-trend-down">
          <span>-1.2%</span>
        </div>
      </div>
      <div className="devio-stat-label">Taxa de Churn</div>
      <div className="devio-stat-value">4.8%</div>
      <div className="devio-text-xs devio-text-muted mt-1">Últimos 30 dias</div>
    </div>
  </div>
  
  <Card className="devio-card">
    <CardHeader>
      <div className="devio-flex devio-justify-between devio-items-center">
        <div>
          <CardTitle>Taxa de Retenção e Churn</CardTitle>
          <CardDescription>
            Relatório que calcula o percentual de clientes ativos e inativos no período analisado.
          </CardDescription>
        </div>
        <Button className="devio-btn devio-btn-outline devio-btn-sm">
          <Download className="w-3 h-3 mr-1" />
          Exportar
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="relative h-[300px] w-full bg-gradient-to-b from-white to-neutral-50 rounded-md border border-neutral-200 flex items-center justify-center">
        <div className="text-center">
          <div className="devio-icon-container devio-icon-danger mx-auto mb-3">
            <UserMinus className="w-5 h-5" />
          </div>
          <p className="devio-text-base devio-font-medium mb-1">Relatório de Retenção e Churn</p>
          <p className="devio-text-sm devio-text-muted mb-4">Análise da taxa de retenção e perdas de clientes ao longo do tempo</p>
          <Button className="devio-btn devio-btn-primary">
            <ArrowUpRight className="w-4 h-4 mr-2" />
            Visualizar Relatório Completo
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
</TabsContent>

{/* TabContent: distribuicao - Versão simplificada */}
<TabsContent value="distribuicao" className="mt-0">
  <div className="devio-grid devio-grid-3 mb-6">
    <div className="devio-stat-card">
      <div className="devio-flex devio-justify-between devio-items-center mb-2">
        <div className="devio-icon-container devio-icon-primary devio-icon-container-sm">
          <FileText className="w-4 h-4" />
        </div>
      </div>
      <div className="devio-stat-label">Plano Básico</div>
      <div className="devio-stat-value">45%</div>
      <div className="devio-text-xs devio-text-muted mt-1">109 clientes</div>
    </div>
    
    <div className="devio-stat-card">
      <div className="devio-flex devio-justify-between devio-items-center mb-2">
        <div className="devio-icon-container devio-icon-accent devio-icon-container-sm">
          <FileText className="w-4 h-4" />
        </div>
      </div>
      <div className="devio-stat-label">Plano Premium</div>
      <div className="devio-stat-value">35%</div>
      <div className="devio-text-xs devio-text-muted mt-1">85 clientes</div>
    </div>
    
    <div className="devio-stat-card">
      <div className="devio-flex devio-justify-between devio-items-center mb-2">
        <div className="devio-icon-container devio-icon-success devio-icon-container-sm">
          <FileText className="w-4 h-4" />
        </div>
      </div>
      <div className="devio-stat-label">Plano Enterprise</div>
      <div className="devio-stat-value">20%</div>
      <div className="devio-text-xs devio-text-muted mt-1">49 clientes</div>
    </div>
  </div>
  
  <Card className="devio-card">
    <CardHeader>
      <div className="devio-flex devio-justify-between devio-items-center">
        <div>
          <CardTitle>Distribuição por Plano</CardTitle>
          <CardDescription>
            Gráfico mostrando a quantidade de clientes em cada plano disponível na plataforma.
          </CardDescription>
        </div>
        <Button className="devio-btn devio-btn-outline devio-btn-sm">
          <Download className="w-3 h-3 mr-1" />
          Exportar
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="relative h-[300px] w-full bg-gradient-to-b from-white to-neutral-50 rounded-md border border-neutral-200 flex items-center justify-center">
        <div className="text-center">
          <div className="devio-icon-container devio-icon-info mx-auto mb-3">
            <PieChart className="w-5 h-5" />
          </div>
          <p className="devio-text-base devio-font-medium mb-1">Relatório de Distribuição por Plano</p>
          <p className="devio-text-sm devio-text-muted mb-4">Visualização da divisão de clientes entre os planos disponíveis</p>
          <Button className="devio-btn devio-btn-primary">
            <ArrowUpRight className="w-4 h-4 mr-2" />
            Visualizar Relatório Completo
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
</TabsContent>

{/* TabContent: planejamento - Versão simplificada */}
<TabsContent value="planejamento" className="mt-0">
  <div className="devio-grid devio-grid-2 mb-6">
    <div className="devio-stat-card">
      <div className="devio-flex devio-justify-between devio-items-center mb-2">
        <div className="devio-icon-container devio-icon-primary devio-icon-container-sm">
          <Layers className="w-4 h-4" />
        </div>
        <div className="devio-stat-trend devio-trend-up">
          <span>+4.7%</span>
        </div>
      </div>
      <div className="devio-stat-label">Clientes com Planejamento</div>
      <div className="devio-stat-value">87%</div>
    </div>
    
    <div className="devio-stat-card">
      <div className="devio-flex devio-justify-between devio-items-center mb-2">
        <div className="devio-icon-container devio-icon-warning devio-icon-container-sm">
          <AlertCircle className="w-4 h-4" />
        </div>
        <div className="devio-stat-trend devio-trend-down">
          <span>-2.5%</span>
        </div>
      </div>
      <div className="devio-stat-label">CMV Fora do Intervalo</div>
      <div className="devio-stat-value">18%</div>
    </div>
  </div>
  
  <Card className="devio-card">
    <CardHeader>
      <div className="devio-flex devio-justify-between devio-items-center">
        <div>
          <CardTitle>Planejamento Orçamentário</CardTitle>
          <CardDescription>
            Relatório consolidado com informações de planejamento orçamentário de todos os clientes para análises estratégicas.
          </CardDescription>
        </div>
        <Button className="devio-btn devio-btn-outline devio-btn-sm">
          <Download className="w-3 h-3 mr-1" />
          Exportar
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="relative h-[300px] w-full bg-gradient-to-b from-white to-neutral-50 rounded-md border border-neutral-200 flex items-center justify-center">
        <div className="text-center">
          <div className="devio-icon-container devio-icon-accent mx-auto mb-3">
            <Layers className="w-5 h-5" />
          </div>
          <p className="devio-text-base devio-font-medium mb-1">Relatório de Planejamento Orçamentário</p>
          <p className="devio-text-sm devio-text-muted mb-4">Análise consolidada para benchmarking e insights estratégicos</p>
          <Button className="devio-btn devio-btn-primary">
            <ArrowUpRight className="w-4 h-4 mr-2" />
            Visualizar Relatório Completo
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
</TabsContent>

          {/* Os outros TabsContent para retencao, distribuicao e planejamento seguiriam o mesmo padrão */}
          <TabsContent value="retencao" className="mt-0">
            {/* Conteúdo para Taxa de Retenção e Churn */}
          </TabsContent>
          
          <TabsContent value="distribuicao" className="mt-0">
            {/* Conteúdo para Distribuição por Plano */}
          </TabsContent>
          
          <TabsContent value="planejamento" className="mt-0">
            {/* Conteúdo para Planejamento Orçamentário */}
          </TabsContent>
        </Tabs>
      </div>

      {/* InfoCard: data-export */}
      <div className="mb-8">
        <Card className="devio-card devio-card-premium">
          <CardContent className="p-6">
            <div className="devio-flex devio-gap-4">
              <div className="devio-icon-container devio-icon-info">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h3 className="devio-text-lg devio-font-semibold mb-2">Exporte seus relatórios</h3>
                <p className="devio-text-sm mb-4">
                  Todos os relatórios podem ser exportados nos formatos PDF ou CSV, mantendo os filtros aplicados para análises específicas. 
                  Você pode compartilhar esses relatórios com sua equipe ou utilizá-los em apresentações.
                </p>
                <div className="devio-flex devio-gap-3">
                  <Button className="devio-btn devio-btn-outline">
                    Exportar como CSV
                  </Button>
                  <Button className="devio-btn devio-btn-primary">
                    Exportar como PDF
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* HighlightBox: custom-report */}
      <div className="devio-highlight-box mb-8">
        <div className="devio-flex devio-gap-3 devio-items-center">
          <div className="devio-icon-container devio-icon-accent devio-icon-container-sm flex-shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <p className="devio-font-medium">Relatórios programados</p>
            <p className="devio-text-sm">Configure relatórios para serem gerados e enviados automaticamente para sua equipe em intervalos definidos.</p>
          </div>
          <Button className="devio-btn devio-btn-accent devio-btn-sm ml-auto">
            Configurar
          </Button>
        </div>
      </div>
    </div>
  )
}