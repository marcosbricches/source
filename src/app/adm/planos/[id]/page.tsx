// app/planos/[id]/page.tsx
"use client"

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Edit, 
  Trash2, 
  Clock, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  CheckCircle, 
  XCircle,
  BarChart3,
  Activity,
  ShieldCheck,
  AlertCircle,
  UserCog,
  Info,
  Settings
} from "lucide-react";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Dados fictícios para o protótipo
const planDetails = {
  id: 2,
  nome: "Plano Premium",
  descricao: "Recursos avançados para médios restaurantes com suporte prioritário e ferramentas de análise detalhada para otimização de custos e operações.",
  valorMensal: 199.90,
  valorAnual: 1999.00,
  status: "Ativo",
  dataInicio: "01/01/2025",
  dataTermino: null,
  freemiumDias: 15,
  freemiumLimitacoes: "Limite de 50 itens no estoque, 3 usuários, relatórios básicos.",
  dataCriacao: "15/12/2024",
  ultimaAtualizacao: "28/12/2024",
  assinantes: {
    total: 87,
    ativos: 83,
    freemium: 12,
    cancelados: 8,
    conversao: 68
  },
  metricas: {
    receitaMensal: 16591.70,
    receitaAnual: 49970.10,
    crescimento: 12.3,
    mrr: 16591.70, // Monthly Recurring Revenue
    churnRate: 3.2,
  },
  recursos: [
    { id: 1, nome: "Dashboards Avançados", incluido: true },
    { id: 2, nome: "Relatórios Personalizados", incluido: true },
    { id: 3, nome: "Controle de Estoque", incluido: true },
    { id: 4, nome: "Gestão de Fornecedores", incluido: true },
    { id: 5, nome: "Planejamento Financeiro", incluido: true },
    { id: 6, nome: "Projeções e Metas", incluido: false },
    { id: 7, nome: "Aplicativo Mobile", incluido: false },
    { id: 8, nome: "Suporte Prioritário", incluido: true },
    { id: 9, nome: "Exportação de Dados", incluido: false },
    { id: 10, nome: "Integrações com APIs", incluido: false },
  ]
};

const PlanoDetalhesPage = ({ params }) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [confirmAction, setConfirmAction] = React.useState("");
  
  const handleDeleteClick = () => {
    setConfirmAction("excluir");
    setOpenDialog(true);
  };
  
  const handleStatusChange = () => {
    setConfirmAction("desativar");
    setOpenDialog(true);
  };

  return (
    <div className="devio-container">
      {/* PageHeader: Detail */}
      <div className="devio-section relative mb-8">
        <div className="devio-dot-pattern"></div>
        <div className="devio-flex devio-items-center mb-2">
          <Link href="/planos">
            <Button variant="ghost" className="devio-btn devio-btn-ghost p-0 mr-2">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar
            </Button>
          </Link>
          <Badge className="devio-badge devio-badge-primary">Detalhes</Badge>
        </div>
        <div className="devio-flex devio-justify-between devio-items-center">
          <div>
            <h2 className="devio-text-2xl devio-font-bold mb-2">{planDetails.nome}</h2>
            <p className="devio-text-muted mb-2">Detalhes completos e estatísticas do plano</p>
          </div>
          <Badge className={`devio-badge ${planDetails.status === "Ativo" ? "devio-badge-success" : "devio-badge-neutral"}`}>
            {planDetails.status}
          </Badge>
        </div>
      </div>
      
      {/* ActionsBar: default */}
      <div className="devio-flex devio-justify-end devio-gap-2 mb-8">
        <Button 
          variant="outline" 
          className="devio-btn devio-btn-outline"
          onClick={handleStatusChange}
        >
          {planDetails.status === "Ativo" ? "Desativar" : "Ativar"}
        </Button>
        <Link href={`/planos/editar/${planDetails.id}`}>
          <Button className="devio-btn devio-btn-primary">
            <Edit className="w-4 h-4 mr-2" />
            Editar
          </Button>
        </Link>
        <Button 
          variant="outline" 
          className="devio-btn devio-btn-outline devio-text-danger"
          onClick={handleDeleteClick}
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Excluir
        </Button>
      </div>
      
      {/* TabNavigation: default */}
      <Tabs defaultValue="geral" className="mb-10">
        <TabsList className="mb-8">
          <TabsTrigger value="geral">Geral</TabsTrigger>
          <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
          <TabsTrigger value="recursos">Recursos</TabsTrigger>
          <TabsTrigger value="suporte">Suporte</TabsTrigger>
        </TabsList>
        
        {/* TabContent: Geral */}
        <TabsContent value="geral">
          <div className="devio-grid devio-grid-2 gap-6 mb-8">
            {/* BasicInfoCard: premium */}
            <Card className="devio-card devio-card-premium">
              <CardHeader>
                <div className="devio-flex devio-items-center">
                  <div className="devio-icon-container devio-icon-primary">
                    <Info className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <CardTitle>Informações Básicas</CardTitle>
                    <CardDescription>Dados principais do plano</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="devio-text-sm devio-text-muted mb-2">Descrição</h4>
                    <p className="devio-text-sm">{planDetails.descricao}</p>
                  </div>
                  
                  <div className="devio-highlight-box">
                    <p className="devio-text-sm">
                      Este plano representa aproximadamente <span className="devio-font-bold">38%</span> 
                      da receita total mensal e <span className="devio-font-bold">34%</span> da base de clientes.
                    </p>
                  </div>
                  
                  <div className="devio-grid devio-grid-2 gap-4">
                    <div>
                      <h4 className="devio-text-sm devio-text-muted mb-1">Valor Mensal</h4>
                      <div className="devio-flex devio-items-center">
                        <DollarSign className="w-4 h-4 mr-1 devio-text-primary" />
                        <p className="devio-text-lg devio-font-semibold">
                          R$ {planDetails.valorMensal.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="devio-text-sm devio-text-muted mb-1">Valor Anual</h4>
                      <div className="devio-flex devio-items-center">
                        <DollarSign className="w-4 h-4 mr-1 devio-text-primary" />
                        <p className="devio-text-lg devio-font-semibold">
                          R$ {planDetails.valorAnual.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* ConfigurationCard: default */}
            <Card className="devio-card">
              <CardHeader>
                <div className="devio-flex devio-items-center">
                  <div className="devio-icon-container devio-icon-accent">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <CardTitle>Configurações</CardTitle>
                    <CardDescription>Datas e configurações do plano</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="devio-grid devio-grid-2 gap-4">
                    <div>
                      <h4 className="devio-text-sm devio-text-muted mb-1">Data de Início</h4>
                      <div className="devio-flex devio-items-center">
                        <Calendar className="w-4 h-4 mr-2 devio-text-primary" />
                        <p>{planDetails.dataInicio}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="devio-text-sm devio-text-muted mb-1">Data de Término</h4>
                      <div className="devio-flex devio-items-center">
                        <Calendar className="w-4 h-4 mr-2 devio-text-primary" />
                        <p>{planDetails.dataTermino || "Não definida"}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="devio-divider" />
                  
                  <div className="devio-grid devio-grid-2 gap-4">
                    <div>
                      <h4 className="devio-text-sm devio-text-muted mb-1">Data de Criação</h4>
                      <p>{planDetails.dataCriacao}</p>
                    </div>
                    
                    <div>
                      <h4 className="devio-text-sm devio-text-muted mb-1">Última Atualização</h4>
                      <p>{planDetails.ultimaAtualizacao}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* FreemiumCard: accent */}
            <Card className="devio-card devio-card-accent">
              <CardHeader>
                <div className="devio-flex devio-items-center">
                  <div className="devio-icon-container devio-icon-accent">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <CardTitle>Período Freemium</CardTitle>
                    <CardDescription>Configurações do período gratuito</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="devio-text-sm devio-text-muted mb-1">Duração</h4>
                    <div className="devio-flex devio-items-center">
                      <Clock className="w-4 h-4 mr-2 devio-text-accent" />
                      <p className="devio-text-lg devio-font-semibold">{planDetails.freemiumDias} dias</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="devio-text-sm devio-text-muted mb-1">Limitações</h4>
                    <p className="devio-text-sm">{planDetails.freemiumLimitacoes}</p>
                  </div>
                  
                  <div>
                    <h4 className="devio-text-sm devio-text-muted mb-1">Taxa de Conversão</h4>
                    <div className="devio-stat-trend devio-trend-up">
                      <TrendingUp className="w-3 h-3" />
                      <span>{planDetails.assinantes.conversao}%</span>
                    </div>
                    <p className="devio-text-xs devio-text-muted mt-1">
                      Clientes que assinam após o período gratuito
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* SubscribersCard: success */}
            <Card className="devio-card">
              <CardHeader>
                <div className="devio-flex devio-items-center">
                  <div className="devio-icon-container devio-icon-success">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <CardTitle>Assinantes</CardTitle>
                    <CardDescription>Métricas de usuários</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="devio-flex devio-justify-between devio-items-center">
                    <span className="devio-text-sm devio-text-muted">Total de Assinantes</span>
                    <span className="devio-badge devio-badge-success">{planDetails.assinantes.total}</span>
                  </div>
                  
                  <Separator className="devio-divider" />
                  
                  <div className="devio-grid devio-grid-2 gap-4">
                    <div>
                      <h4 className="devio-text-sm devio-text-muted mb-1">Assinantes Ativos</h4>
                      <p className="devio-text-lg devio-font-semibold">{planDetails.assinantes.ativos}</p>
                    </div>
                    
                    <div>
                      <h4 className="devio-text-sm devio-text-muted mb-1">Em Período Freemium</h4>
                      <p className="devio-text-lg devio-font-semibold">{planDetails.assinantes.freemium}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="devio-text-sm devio-text-muted mb-1">Assinaturas Canceladas</h4>
                    <div className="devio-flex devio-items-center">
                      <p className="devio-text-lg devio-font-semibold">{planDetails.assinantes.cancelados}</p>
                      <Badge className="devio-badge devio-badge-warning ml-2">
                        {planDetails.metricas.churnRate}%
                      </Badge>
                    </div>
                    <p className="devio-text-xs devio-text-muted mt-1">Taxa de churn mensal</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/planos/relatorios">
                  <Button className="devio-btn devio-btn-outline w-full">
                    Ver Relatório Completo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        {/* TabContent: Financeiro */}
        <TabsContent value="financeiro">
          <div className="space-y-8">
            {/* FinancialSummaryCard: primary */}
            <Card className="devio-card devio-card-primary mb-8">
              <CardHeader>
                <div className="devio-flex devio-items-center">
                  <div className="devio-icon-container devio-icon-primary">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <CardTitle>Resumo Financeiro</CardTitle>
                    <CardDescription>Métricas financeiras deste plano</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="devio-grid devio-grid-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="devio-text-sm devio-text-muted mb-1">Receita Mensal</h4>
                      <div className="devio-flex devio-items-center">
                        <p className="devio-text-2xl devio-font-bold">
                          R$ {planDetails.metricas.receitaMensal.toFixed(2)}
                        </p>
                        <div className="devio-stat-trend devio-trend-up ml-3">
                          <TrendingUp className="w-3 h-3" />
                          <span>{planDetails.metricas.crescimento}%</span>
                        </div>
                      </div>
                      <p className="devio-text-xs devio-text-muted mt-1">
                        Comparado ao mês anterior
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="devio-text-sm devio-text-muted mb-1">Receita Anual</h4>
                      <p className="devio-text-2xl devio-font-bold">
                        R$ {planDetails.metricas.receitaAnual.toFixed(2)}
                      </p>
                      <p className="devio-text-xs devio-text-muted mt-1">
                        Projeção baseada em assinaturas anuais
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="devio-text-sm devio-text-muted mb-1">MRR</h4>
                      <p className="devio-text-2xl devio-font-bold">
                        R$ {planDetails.metricas.mrr.toFixed(2)}
                      </p>
                      <p className="devio-text-xs devio-text-muted mt-1">
                        Monthly Recurring Revenue
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="devio-text-sm devio-text-muted mb-1">Churn Rate</h4>
                      <div className="devio-flex devio-items-center">
                        <p className="devio-text-2xl devio-font-bold">
                          {planDetails.metricas.churnRate}%
                        </p>
                        <Badge className="devio-badge devio-badge-warning ml-3">
                          Atenção
                        </Badge>
                      </div>
                      <p className="devio-text-xs devio-text-muted mt-1">
                        Taxa de cancelamento mensal
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="devio-highlight-box mt-6">
                  <p className="devio-text-sm">
                    Este plano representa <span className="devio-font-bold">38%</span> da receita total 
                    mensal da plataforma. Uma análise detalhada está disponível nos relatórios.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/planos/relatorios">
                  <Button className="devio-btn devio-btn-primary">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Ver Análise Detalhada
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            {/* MetricsGrid: default */}
            <div>
              <h3 className="devio-text-lg devio-font-semibold mb-4">Métricas Detalhadas</h3>
              <div className="devio-grid devio-grid-2 gap-4">
                <Card className="devio-stat-card">
                  <div className="devio-flex devio-justify-between devio-items-center mb-2">
                    <div className="devio-icon-container devio-icon-primary devio-icon-container-sm">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div className="devio-stat-trend devio-trend-up">
                      <TrendingUp className="w-3 h-3" />
                      <span>{planDetails.metricas.crescimento}%</span>
                    </div>
                  </div>
                  <div className="devio-stat-label">Valor Médio por Assinante</div>
                  <div className="devio-stat-value">
                    R$ {(planDetails.metricas.receitaMensal / planDetails.assinantes.ativos).toFixed(2)}
                  </div>
                </Card>
                
                <Card className="devio-stat-card">
                  <div className="devio-flex devio-justify-between devio-items-center mb-2">
                    <div className="devio-icon-container devio-icon-success devio-icon-container-sm">
                      <Activity className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="devio-stat-label">Renovações Mensais</div>
                  <div className="devio-stat-value">97%</div>
                  <p className="devio-text-xs devio-text-muted mt-1">
                    Taxa de renovação mensal
                  </p>
                </Card>
                
                <Card className="devio-stat-card">
                  <div className="devio-flex devio-justify-between devio-items-center mb-2">
                    <div className="devio-icon-container devio-icon-warning devio-icon-container-sm">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="devio-stat-label">Novos Assinantes/Mês</div>
                  <div className="devio-stat-value">12</div>
                  <p className="devio-text-xs devio-text-muted mt-1">
                    Média dos últimos 3 meses
                  </p>
                </Card>
                
                <Card className="devio-stat-card">
                  <div className="devio-flex devio-justify-between devio-items-center mb-2">
                    <div className="devio-icon-container devio-icon-accent devio-icon-container-sm">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="devio-stat-label">Taxa Anualização</div>
                  <div className="devio-stat-value">23%</div>
                  <p className="devio-text-xs devio-text-muted mt-1">
                    Clientes que optam pelo plano anual
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* TabContent: Recursos */}
        <TabsContent value="recursos">
          {/* ResourcesCard: default */}
          <Card className="devio-card mb-8">
            <CardHeader>
              <div className="devio-flex devio-items-center">
                <div className="devio-icon-container devio-icon-primary">
                  <Settings className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <CardTitle>Recursos do Plano</CardTitle>
                  <CardDescription>Funcionalidades incluídas e não incluídas</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="incluidos" className="mt-4">
                <TabsList className="mb-4">
                  <TabsTrigger value="incluidos">Incluídos</TabsTrigger>
                  <TabsTrigger value="nao-incluidos">Não Incluídos</TabsTrigger>
                  <TabsTrigger value="todos">Todos os Recursos</TabsTrigger>
                </TabsList>
                
                <TabsContent value="incluidos">
                  <div className="devio-grid devio-grid-2 gap-4">
                    {planDetails.recursos
                      .filter(r => r.incluido)
                      .map(recurso => (
                        <div key={recurso.id} className="devio-flex devio-items-center p-3 border rounded-md border-green-100 bg-green-50">
                          <CheckCircle className="w-5 h-5 mr-3 devio-text-success" />
                          <span className="devio-text-sm">{recurso.nome}</span>
                        </div>
                      ))
                    }
                  </div>
                </TabsContent>
                
                <TabsContent value="nao-incluidos">
                  <div className="devio-grid devio-grid-2 gap-4">
                    {planDetails.recursos
                      .filter(r => !r.incluido)
                      .map(recurso => (
                        <div key={recurso.id} className="devio-flex devio-items-center p-3 border rounded-md border-neutral-100 bg-neutral-50">
                          <XCircle className="w-5 h-5 mr-3 devio-text-muted" />
                          <span className="devio-text-sm devio-text-muted">{recurso.nome}</span>
                        </div>
                      ))
                    }
                  </div>
                </TabsContent>
                
                <TabsContent value="todos">
                  <div className="devio-grid devio-grid-2 gap-4">
                    {planDetails.recursos.map(recurso => (
                      <div 
                        key={recurso.id} 
                        className={`devio-flex devio-items-center p-3 border rounded-md ${
                          recurso.incluido 
                            ? "border-green-100 bg-green-50" 
                            : "border-neutral-100 bg-neutral-50"
                        }`}
                      >
                        {recurso.incluido 
                          ? <CheckCircle className="w-5 h-5 mr-3 devio-text-success" />
                          : <XCircle className="w-5 h-5 mr-3 devio-text-muted" />
                        }
                        <span className={`devio-text-sm ${!recurso.incluido && "devio-text-muted"}`}>
                          {recurso.nome}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              <Alert className="devio-alert devio-alert-info mt-6">
                <AlertDescription className="devio-flex devio-items-start">
                  <AlertCircle className="w-4 h-4 mr-2 mt-0.5" />
                  <span>Todos os planos incluem o acesso básico à plataforma e suporte por email.</span>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          
          {/* SecurityCard: info */}
          <Card className="devio-card">
            <CardHeader>
              <div className="devio-flex devio-items-center">
                <div className="devio-icon-container devio-icon-info">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <CardTitle>Segurança e Compliance</CardTitle>
                  <CardDescription>Recursos de proteção de dados</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="devio-grid devio-grid-3 gap-4">
                <div className="devio-flex devio-items-center space-x-2">
                  <CheckCircle className="w-4 h-4 devio-text-success" />
                  <span className="devio-text-sm">Backup diário</span>
                </div>
                <div className="devio-flex devio-items-center space-x-2">
                  <CheckCircle className="w-4 h-4 devio-text-success" />
                  <span className="devio-text-sm">Criptografia de dados</span>
                </div>
                <div className="devio-flex devio-items-center space-x-2">
                  <CheckCircle className="w-4 h-4 devio-text-success" />
                  <span className="devio-text-sm">Autenticação 2FA</span>
                </div>
                <div className="devio-flex devio-items-center space-x-2">
                  <CheckCircle className="w-4 h-4 devio-text-success" />
                  <span className="devio-text-sm">Logs de auditoria</span>
                </div>
                <div className="devio-flex devio-items-center space-x-2">
                  <CheckCircle className="w-4 h-4 devio-text-success" />
                  <span className="devio-text-sm">Compliance LGPD</span>
                </div>
                <div className="devio-flex devio-items-center space-x-2">
                  <CheckCircle className="w-4 h-4 devio-text-success" />
                  <span className="devio-text-sm">Retenção de dados</span>
                </div>
              </div>
              
              <Alert className="devio-alert devio-alert-info mt-6">
                <AlertDescription className="devio-flex devio-items-start">
                  <AlertCircle className="w-4 h-4 mr-2 mt-0.5" />
                  <span>Todos os planos incluem as mesmas configurações de segurança e proteção de dados.</span>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* TabContent: Suporte */}
        <TabsContent value="suporte">
          {/* SupportCard: accent */}
          <Card className="devio-card devio-card-accent mb-8">
            <CardHeader>
              <div className="devio-flex devio-items-center">
                <div className="devio-icon-container devio-icon-accent">
                  <UserCog className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <CardTitle>Suporte ao Cliente</CardTitle>
                  <CardDescription>Informações de serviço para este plano</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="devio-grid devio-grid-2 gap-6">
                <div>
                  <h4 className="devio-text-sm devio-font-semibold mb-2">Canais de Suporte</h4>
                  <div className="space-y-2">
                    <div className="devio-flex devio-items-center">
                      <CheckCircle className="w-4 h-4 mr-2 devio-text-success" />
                      <span className="devio-text-sm">Email</span>
                    </div>
                    <div className="devio-flex devio-items-center">
                      <CheckCircle className="w-4 h-4 mr-2 devio-text-success" />
                      <span className="devio-text-sm">Chat ao vivo</span>
                    </div>
                    <div className="devio-flex devio-items-center">
                      <CheckCircle className="w-4 h-4 mr-2 devio-text-success" />
                      <span className="devio-text-sm">Suporte telefônico em horário comercial</span>
                    </div>
                    <div className="devio-flex devio-items-center">
                      <XCircle className="w-4 h-4 mr-2 devio-text-muted" />
                      <span className="devio-text-sm devio-text-muted">Gestor de conta dedicado</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="devio-text-sm devio-font-semibold mb-2">SLAs de Atendimento</h4>
                  <div className="space-y-3">
                    <div className="devio-flex devio-justify-between devio-items-center">
                      <span className="devio-text-sm devio-text-muted">Tempo de resposta:</span>
                      <Badge className="devio-badge devio-badge-success">4 horas</Badge>
                    </div>
                    <div className="devio-flex devio-justify-between devio-items-center">
                      <span className="devio-text-sm devio-text-muted">Horário de atendimento:</span>
                      <span className="devio-text-sm">8h às 20h (dias úteis)</span>
                    </div>
                    <div className="devio-flex devio-justify-between devio-items-center">
                      <span className="devio-text-sm devio-text-muted">Prioridade:</span>
                      <Badge className="devio-badge devio-badge-accent">Alta</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <Alert className="devio-alert devio-alert-success mt-6">
                <AlertDescription className="devio-flex devio-items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5" />
                  <span>
                    Este plano oferece prioridade alta no suporte, garantindo tempos de resposta mais rápidos e atendimento prioritário.
                  </span>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          
          {/* SupportMetricsCard: default */}
          <div className="devio-grid devio-grid-2 gap-6">
            <Card className="devio-stat-card">
              <div className="devio-flex devio-justify-between devio-items-center mb-2">
                <div className="devio-icon-container devio-icon-success devio-icon-container-sm">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="devio-stat-trend devio-trend-up">
                  <TrendingUp className="w-3 h-3" />
                  <span>5.2%</span>
                </div>
              </div>
              <div className="devio-stat-label">Tempo Médio de Resposta</div>
              <div className="devio-stat-value">2.7 horas</div>
              <p className="devio-text-xs devio-text-muted mt-1">Abaixo do SLA prometido (4h)</p>
            </Card>
            
            <Card className="devio-stat-card">
              <div className="devio-flex devio-justify-between devio-items-center mb-2">
                <div className="devio-icon-container devio-icon-primary devio-icon-container-sm">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="devio-stat-label">Satisfação do Cliente</div>
              <div className="devio-stat-value">4.8/5.0</div>
              <p className="devio-text-xs devio-text-muted mt-1">Baseado em 45 avaliações</p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* ConfirmationDialog: danger */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className={confirmAction === "excluir" ? "devio-text-danger" : ""}>
              {confirmAction === "excluir" ? "Excluir Plano" : "Desativar Plano"}
            </DialogTitle>
            <DialogDescription>
              {confirmAction === "excluir"
                ? "Tem certeza que deseja excluir este plano? Esta ação não pode ser desfeita."
                : "Tem certeza que deseja desativar este plano? Ele não será mais exibido para novos clientes."}
            </DialogDescription>
          </DialogHeader>
          
          {planDetails.assinantes.total > 0 && (
            <Alert className={`devio-alert ${confirmAction === "excluir" ? "devio-alert-danger" : "devio-alert-warning"} mt-2`}>
              <AlertDescription className="devio-flex devio-items-start">
                <AlertCircle className="w-4 h-4 mr-2 mt-0.5" />
                <span>
                  {confirmAction === "excluir"
                    ? `Este plano possui ${planDetails.assinantes.total} assinantes ativos. A exclusão não é permitida.`
                    : `Este plano possui ${planDetails.assinantes.total} assinantes ativos. Ao desativá-lo, os assinantes serão notificados.`}
                </span>
              </AlertDescription>
            </Alert>
          )}
          
          <DialogFooter className="sm:justify-end gap-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpenDialog(false)}
              className="devio-btn devio-btn-outline"
            >
              Cancelar
            </Button>
            <Button 
              type="button" 
              className={`devio-btn ${confirmAction === "excluir" ? "devio-btn-danger" : "devio-btn-warning"}`}
              disabled={confirmAction === "excluir" && planDetails.assinantes.total > 0}
            >
              {confirmAction === "excluir" ? "Excluir" : "Desativar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlanoDetalhesPage;