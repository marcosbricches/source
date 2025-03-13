// app/admin/clientes/onboarding/page.tsx
"use client"

import Link from "next/link"
import { ChevronLeft, Download, Filter, Mail, Activity, UserPlus, CheckCircle, BarChart2, LineChart, PieChart, ArrowUpRight, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

export default function RelatoriosOnboardingPage() {
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
          <Badge className="devio-badge devio-badge-primary">Engajamento</Badge>
        </div>
        <h1 className="devio-text-2xl devio-font-bold mb-2">Relatórios de Onboarding e Engajamento</h1>
        <p className="devio-text-muted mb-6">Monitoramento da eficácia do onboarding e campanhas de engajamento de clientes.</p>
      </div>

      {/* ReportNavigation: filters-and-period */}
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
              <span className="devio-text-sm devio-font-medium">Campanha:</span>
              <Select defaultValue="todas">
                <SelectTrigger className="devio-input w-[180px]">
                  <SelectValue placeholder="Selecione a campanha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas as campanhas</SelectItem>
                  <SelectItem value="boas-vindas">Boas-vindas</SelectItem>
                  <SelectItem value="reativacao">Reativação</SelectItem>
                  <SelectItem value="novos-recursos">Novos recursos</SelectItem>
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
        
        <Tabs defaultValue="onboarding" className="w-full">
          <TabsList className="mb-6 bg-neutral-50 p-1 border border-neutral-200">
            <TabsTrigger value="onboarding" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Progresso do Onboarding
            </TabsTrigger>
            <TabsTrigger value="emails" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <Mail className="w-4 h-4 mr-2" />
              Taxa de Abertura de E-mails
            </TabsTrigger>
            <TabsTrigger value="conversao" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <UserPlus className="w-4 h-4 mr-2" />
              Conversão Pós-Campanha
            </TabsTrigger>
          </TabsList>

          {/* TabContent: onboarding */}
          <TabsContent value="onboarding" className="mt-0">
            <div className="devio-grid devio-grid-3 mb-6">
              <div className="devio-stat-card">
                <div className="devio-flex devio-justify-between devio-items-center mb-2">
                  <div className="devio-icon-container devio-icon-primary devio-icon-container-sm">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="devio-stat-trend devio-trend-up">
                    <span>+8.3%</span>
                  </div>
                </div>
                <div className="devio-stat-label">Conclusão do Onboarding</div>
                <div className="devio-stat-value">78%</div>
                <div className="devio-text-xs devio-text-muted mt-1">Média de conclusão</div>
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
                <div className="devio-stat-label">Uso pós-onboarding</div>
                <div className="devio-stat-value">92%</div>
                <div className="devio-text-xs devio-text-muted mt-1">Taxa de retenção</div>
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
                <div className="devio-stat-label">Abandonos</div>
                <div className="devio-stat-value">22%</div>
                <div className="devio-text-xs devio-text-muted mt-1">Não completaram</div>
              </div>
            </div>
            
            <Card className="devio-card mb-6">
              <CardHeader className="pb-2">
                <div className="devio-flex devio-justify-between devio-items-center">
                  <div>
                    <CardTitle>Progresso do Onboarding</CardTitle>
                    <CardDescription>
                      Percentual de usuários que concluíram as etapas do onboarding, detalhado por tarefa.
                    </CardDescription>
                  </div>
                  <Button className="devio-btn devio-btn-outline devio-btn-sm">
                    <Download className="w-3 h-3 mr-1" />
                    Exportar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-8 space-y-6">
                  <div className="space-y-2">
                    <div className="devio-flex devio-justify-between">
                      <span className="devio-text-sm devio-font-medium">Cadastro de informações básicas</span>
                      <span className="devio-text-sm devio-font-medium">95%</span>
                    </div>
                    <Progress value={95} className="h-2 bg-neutral-200" indicatorClassName="bg-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="devio-flex devio-justify-between">
                      <span className="devio-text-sm devio-font-medium">Planejamento orçamentário inicial</span>
                      <span className="devio-text-sm devio-font-medium">82%</span>
                    </div>
                    <Progress value={82} className="h-2 bg-neutral-200" indicatorClassName="bg-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="devio-flex devio-justify-between">
                      <span className="devio-text-sm devio-font-medium">Cadastro de produtos</span>
                      <span className="devio-text-sm devio-font-medium">76%</span>
                    </div>
                    <Progress value={76} className="h-2 bg-neutral-200" indicatorClassName="bg-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="devio-flex devio-justify-between">
                      <span className="devio-text-sm devio-font-medium">Integração financeira</span>
                      <span className="devio-text-sm devio-font-medium">68%</span>
                    </div>
                    <Progress value={68} className="h-2 bg-neutral-200" indicatorClassName="bg-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="devio-flex devio-justify-between">
                      <span className="devio-text-sm devio-font-medium">Configuração de relatórios</span>
                      <span className="devio-text-sm devio-font-medium">53%</span>
                    </div>
                    <Progress value={53} className="h-2 bg-neutral-200" indicatorClassName="bg-primary" />
                  </div>
                </div>
                
                <div className="devio-flex devio-justify-center">
                  <Button className="devio-btn devio-btn-primary">
                    <ArrowUpRight className="w-4 h-4 mr-2" />
                    Visualizar Relatório Completo
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="devio-flex devio-justify-between pt-0 border-t border-neutral-200 mt-4 pt-4">
                <div className="devio-text-xs devio-text-muted">Atualizado: 07/03/2025, 09:45</div>
                <Badge className="devio-badge devio-badge-primary">243 clientes analisados</Badge>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* TabContent: emails */}
          <TabsContent value="emails" className="mt-0">
            <div className="devio-grid devio-grid-3 mb-6">
              <div className="devio-stat-card">
                <div className="devio-flex devio-justify-between devio-items-center mb-2">
                  <div className="devio-icon-container devio-icon-primary devio-icon-container-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="devio-stat-trend devio-trend-up">
                    <span>+5.3%</span>
                  </div>
                </div>
                <div className="devio-stat-label">Taxa de Abertura</div>
                <div className="devio-stat-value">42%</div>
                <div className="devio-text-xs devio-text-muted mt-1">Média geral</div>
              </div>
              
              <div className="devio-stat-card">
                <div className="devio-flex devio-justify-between devio-items-center mb-2">
                  <div className="devio-icon-container devio-icon-success devio-icon-container-sm">
                    <BarChart2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="devio-stat-label">Melhor Campanha</div>
                <div className="devio-stat-value">68%</div>
                <div className="devio-text-xs devio-text-muted mt-1">Novos recursos</div>
              </div>
              
              <div className="devio-stat-card">
                <div className="devio-flex devio-justify-between devio-items-center mb-2">
                  <div className="devio-icon-container devio-icon-warning devio-icon-container-sm">
                    <PieChart className="w-4 h-4" />
                  </div>
                </div>
                <div className="devio-stat-label">Menor Abertura</div>
                <div className="devio-stat-value">28%</div>
                <div className="devio-text-xs devio-text-muted mt-1">Reativação</div>
              </div>
            </div>
            
            <Card className="devio-card">
              <CardHeader>
                <div className="devio-flex devio-justify-between devio-items-center">
                  <div>
                    <CardTitle>Taxa de Abertura de E-mails</CardTitle>
                    <CardDescription>
                      Percentual de e-mails abertos pelos clientes em cada campanha enviada.
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
                    <div className="devio-icon-container devio-icon-primary mx-auto mb-3">
                      <Mail className="w-5 h-5" />
                    </div>
                    <p className="devio-text-base devio-font-medium mb-1">Relatório de Abertura de E-mails</p>
                    <p className="devio-text-sm devio-text-muted mb-4">Análise detalhada de todas as campanhas de e-mail e suas métricas</p>
                    <Button className="devio-btn devio-btn-primary">
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Visualizar Relatório Completo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TabContent: conversao */}
          <TabsContent value="conversao" className="mt-0">
            <div className="devio-grid devio-grid-3 mb-6">
              <div className="devio-stat-card">
                <div className="devio-flex devio-justify-between devio-items-center mb-2">
                  <div className="devio-icon-container devio-icon-primary devio-icon-container-sm">
                    <UserPlus className="w-4 h-4" />
                  </div>
                  <div className="devio-stat-trend devio-trend-up">
                    <span>+9.4%</span>
                  </div>
                </div>
                <div className="devio-stat-label">Taxa de Conversão</div>
                <div className="devio-stat-value">34%</div>
                <div className="devio-text-xs devio-text-muted mt-1">Média de retorno</div>
              </div>
              
              <div className="devio-stat-card">
                <div className="devio-flex devio-justify-between devio-items-center mb-2">
                  <div className="devio-icon-container devio-icon-accent devio-icon-container-sm">
                    <Activity className="w-4 h-4" />
                  </div>
                </div>
                <div className="devio-stat-label">Novos Acessos</div>
                <div className="devio-stat-value">158</div>
                <div className="devio-text-xs devio-text-muted mt-1">Após campanhas</div>
              </div>
              
              <div className="devio-stat-card">
                <div className="devio-flex devio-justify-between devio-items-center mb-2">
                  <div className="devio-icon-container devio-icon-success devio-icon-container-sm">
                    <LineChart className="w-4 h-4" />
                  </div>
                </div>
                <div className="devio-stat-label">Novas Assinaturas</div>
                <div className="devio-stat-value">23</div>
                <div className="devio-text-xs devio-text-muted mt-1">Upgrades de plano</div>
              </div>
            </div>
            
            <Card className="devio-card">
              <CardHeader>
                <div className="devio-flex devio-justify-between devio-items-center">
                  <div>
                    <CardTitle>Conversão Pós-Campanha</CardTitle>
                    <CardDescription>
                      Número de clientes que retornaram ao sistema ou assinaram planos após uma campanha de engajamento.
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
                      <UserPlus className="w-5 h-5" />
                    </div>
                    <p className="devio-text-base devio-font-medium mb-1">Relatório de Conversão Pós-Campanha</p>
                    <p className="devio-text-sm devio-text-muted mb-4">Análise de retorno e conversão após campanhas de marketing</p>
                    <Button className="devio-btn devio-btn-primary">
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Visualizar Relatório Completo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* InfoCard: improvement */}
      <div className="mb-8">
        <Card className="devio-card devio-card-accent">
          <CardContent className="p-6">
            <div className="devio-flex devio-gap-4">
              <div className="devio-icon-container devio-icon-accent">
                <LineChart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="devio-text-lg devio-font-semibold mb-2">Melhore suas taxas de conversão</h3>
                <p className="devio-text-sm mb-4">
                  Campanhas personalizadas apresentam taxas de abertura e conversão até 3x maiores que campanhas genéricas. 
                  Use os dados de engajamento para criar campanhas mais eficazes.
                </p>
                <div className="devio-flex devio-gap-3">
                  <Button className="devio-btn devio-btn-outline">
                    Ver dicas de otimização
                  </Button>
                  <Button className="devio-btn devio-btn-accent">
                    Criar nova campanha
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}