// app/dashboard/page.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  CalendarIcon, 
  Download, 
  Users, 
  UserCheck, 
  UserMinus,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Activity,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Info
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="devio-container">
      {/* PageHeader: default */}
      <div className="devio-section relative">
        <div className="devio-dot-pattern"></div>
        <Badge className="devio-badge devio-badge-primary mb-2">Dashboard</Badge>
        <h2 className="devio-text-2xl devio-font-bold mb-2">Painel de Controle</h2>
        <p className="devio-text-muted mb-6">Visão consolidada do desempenho da plataforma com métricas atualizadas</p>
      </div>
      
      {/* FilterBar: dashboard */}
      <div className="devio-flex devio-justify-between devio-items-center mb-6">
        <div className="devio-flex devio-gap-4">
          <div className="devio-flex devio-items-center devio-gap-2">
            <CalendarIcon className="w-4 h-4 text-primary" />
            <Select>
              <SelectTrigger className="devio-input w-40">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Semanal</SelectItem>
                <SelectItem value="month">Mensal</SelectItem>
                <SelectItem value="year">Anual</SelectItem>
                <SelectItem value="custom">Personalizado</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="devio-flex devio-items-center devio-gap-2">
            <Filter className="w-4 h-4 text-primary" />
            <Select>
              <SelectTrigger className="devio-input w-40">
                <SelectValue placeholder="Tipo de Métrica" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="revenue">Receita</SelectItem>
                <SelectItem value="engagement">Engajamento</SelectItem>
                <SelectItem value="churn">Churn</SelectItem>
                <SelectItem value="all">Todos</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="devio-flex devio-items-center devio-gap-2">
            <Users className="w-4 h-4 text-primary" />
            <Select>
              <SelectTrigger className="devio-input w-40">
                <SelectValue placeholder="Plano de Assinatura" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Plano Básico</SelectItem>
                <SelectItem value="premium">Plano Premium</SelectItem>
                <SelectItem value="enterprise">Plano Enterprise</SelectItem>
                <SelectItem value="all">Todos os Planos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button className="devio-btn devio-btn-outline">
          <Download className="w-4 h-4 mr-2" />
          Exportar Relatório
        </Button>
      </div>
      
      {/* KpiCards: primary */}
      <div className="devio-grid devio-grid-4 mb-8">
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-items-center devio-justify-between mb-4">
              <div className="devio-icon-container devio-icon-primary">
                <Users className="w-5 h-5" />
              </div>
              <Badge className="devio-badge devio-badge-neutral">Total</Badge>
            </div>
            <div className="devio-stat-label">Total de Clientes</div>
            <div className="devio-stat-value">1,248</div>
            <div className="devio-flex devio-items-center mt-2">
              <ArrowUpRight className="w-4 h-4 devio-text-success mr-1" />
              <span className="devio-text-xs devio-text-success">+5.2% no último mês</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-items-center devio-justify-between mb-4">
              <div className="devio-icon-container devio-icon-success">
                <UserCheck className="w-5 h-5" />
              </div>
              <Badge className="devio-badge devio-badge-success">Ativos</Badge>
            </div>
            <div className="devio-stat-label">Clientes Ativos</div>
            <div className="devio-stat-value">1,124</div>
            <div className="devio-flex devio-items-center mt-2">
              <ArrowUpRight className="w-4 h-4 devio-text-success mr-1" />
              <span className="devio-text-xs devio-text-success">+3.8% no último mês</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-items-center devio-justify-between mb-4">
              <div className="devio-icon-container devio-icon-danger">
                <UserMinus className="w-5 h-5" />
              </div>
              <Badge className="devio-badge devio-badge-danger">Inativos</Badge>
            </div>
            <div className="devio-stat-label">Clientes Inativos</div>
            <div className="devio-stat-value">124</div>
            <div className="devio-flex devio-items-center mt-2">
              <ArrowDownRight className="w-4 h-4 devio-text-danger mr-1" />
              <span className="devio-text-xs devio-text-danger">+1.5% no último mês</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-items-center devio-justify-between mb-4">
              <div className="devio-icon-container devio-icon-primary">
                <DollarSign className="w-5 h-5" />
              </div>
              <Badge className="devio-badge devio-badge-primary">Mensal</Badge>
            </div>
            <div className="devio-stat-label">Receita Mensal</div>
            <div className="devio-stat-value">R$ 127.540</div>
            <div className="devio-flex devio-items-center mt-2">
              <ArrowUpRight className="w-4 h-4 devio-text-success mr-1" />
              <span className="devio-text-xs devio-text-success">+8.3% em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="devio-grid devio-grid-4 mb-8">
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-items-center devio-justify-between mb-4">
              <div className="devio-icon-container devio-icon-accent">
                <DollarSign className="w-5 h-5" />
              </div>
              <Badge className="devio-badge devio-badge-accent">Anual</Badge>
            </div>
            <div className="devio-stat-label">Receita Anual</div>
            <div className="devio-stat-value">R$ 1.423.500</div>
            <div className="devio-flex devio-items-center mt-2">
              <ArrowUpRight className="w-4 h-4 devio-text-success mr-1" />
              <span className="devio-text-xs devio-text-success">+12.7% em relação ao ano anterior</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-items-center devio-justify-between mb-4">
              <div className="devio-icon-container devio-icon-success">
                <TrendingUp className="w-5 h-5" />
              </div>
              <Badge className="devio-badge devio-badge-success">Retenção</Badge>
            </div>
            <div className="devio-stat-label">Taxa de Retenção</div>
            <div className="devio-stat-value">90.1%</div>
            <div className="devio-flex devio-items-center mt-2">
              <ArrowUpRight className="w-4 h-4 devio-text-success mr-1" />
              <span className="devio-text-xs devio-text-success">+1.2% em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-items-center devio-justify-between mb-4">
              <div className="devio-icon-container devio-icon-danger">
                <TrendingDown className="w-5 h-5" />
              </div>
              <Badge className="devio-badge devio-badge-danger">Churn</Badge>
            </div>
            <div className="devio-stat-label">Taxa de Churn</div>
            <div className="devio-stat-value">9.9%</div>
            <div className="devio-flex devio-items-center mt-2">
              <ArrowDownRight className="w-4 h-4 devio-text-success mr-1" />
              <span className="devio-text-xs devio-text-success">-1.2% em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-items-center devio-justify-between mb-4">
              <div className="devio-icon-container devio-icon-info">
                <Activity className="w-5 h-5" />
              </div>
              <Badge className="devio-badge devio-badge-info">Uso</Badge>
            </div>
            <div className="devio-stat-label">Engajamento Geral</div>
            <div className="devio-stat-value">4,728</div>
            <div className="devio-flex devio-items-center mt-2">
              <ArrowUpRight className="w-4 h-4 devio-text-success mr-1" />
              <span className="devio-text-xs devio-text-success">+15.3% em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* ChartSection: revenue */}
      <div className="mb-8">
        <h3 className="devio-text-xl devio-font-semibold mb-4">Evolução de Receita</h3>
        <Card className="devio-card">
          <CardContent className="p-6">
            {/* Aqui seria renderizado o gráfico real */}
            <div className="w-full h-72 bg-gradient-to-r from-primary-50 to-primary-100 rounded-md flex items-center justify-center">
              <div className="devio-flex devio-flex-col devio-items-center">
                <LineChart className="w-12 h-12 text-primary-500 mb-2" />
                <p className="devio-text-muted">Gráfico de Linha: Evolução da Receita Mensal</p>
              </div>
            </div>
            <div className="devio-flex devio-justify-between mt-4">
              <div className="devio-stat-card p-2 w-auto">
                <div className="devio-stat-label">Maior Receita</div>
                <div className="devio-stat-value devio-text-lg">R$ 142.680</div>
                <div className="devio-text-xs devio-text-muted">Dezembro/2024</div>
              </div>
              <div className="devio-stat-card p-2 w-auto">
                <div className="devio-stat-label">Menor Receita</div>
                <div className="devio-stat-value devio-text-lg">R$ 98.320</div>
                <div className="devio-text-xs devio-text-muted">Janeiro/2024</div>
              </div>
              <div className="devio-stat-card p-2 w-auto">
                <div className="devio-stat-label">Média Anual</div>
                <div className="devio-stat-value devio-text-lg">R$ 118.625</div>
                <div className="devio-text-xs devio-text-muted">12 meses</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* ChartGrid: distribution */}
      <div className="devio-grid devio-grid-2 gap-6 mb-8">
        <div>
          <h3 className="devio-text-xl devio-font-semibold mb-4">Distribuição por Planos</h3>
          <Card className="devio-card h-full">
            <CardContent className="p-6">
              {/* Aqui seria renderizado o gráfico real */}
              <div className="w-full h-64 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-md flex items-center justify-center">
                <div className="devio-flex devio-flex-col devio-items-center">
                  <PieChart className="w-12 h-12 text-primary-500 mb-2" />
                  <p className="devio-text-muted">Gráfico de Pizza: Distribuição de Clientes por Plano</p>
                </div>
              </div>
              <div className="devio-flex devio-gap-4 devio-justify-center mt-4">
                <div className="devio-flex devio-items-center devio-gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                  <span>Básico (42%)</span>
                </div>
                <div className="devio-flex devio-items-center devio-gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent-500"></div>
                  <span>Premium (35%)</span>
                </div>
                <div className="devio-flex devio-items-center devio-gap-2">
                  <div className="w-3 h-3 rounded-full bg-success-500"></div>
                  <span>Enterprise (23%)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h3 className="devio-text-xl devio-font-semibold mb-4">Engajamento por Período</h3>
          <Card className="devio-card h-full">
            <CardContent className="p-6">
              {/* Aqui seria renderizado o gráfico real */}
              <div className="w-full h-64 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-md flex items-center justify-center">
                <div className="devio-flex devio-flex-col devio-items-center">
                  <BarChart3 className="w-12 h-12 text-primary-500 mb-2" />
                  <p className="devio-text-muted">Gráfico de Barras: Engajamento Mensal</p>
                </div>
              </div>
              <div className="devio-flex devio-gap-4 devio-justify-between mt-4">
                <div className="devio-stat-card p-2 w-auto">
                  <div className="devio-stat-label">Pico de Acessos</div>
                  <div className="devio-stat-value devio-text-lg">742</div>
                  <div className="devio-text-xs devio-text-muted">15/02/2025</div>
                </div>
                <div className="devio-stat-card p-2 w-auto">
                  <div className="devio-stat-label">Média Diária</div>
                  <div className="devio-stat-value devio-text-lg">158</div>
                  <div className="devio-text-xs devio-text-muted">Último mês</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* ChartSection: churn */}
      <div className="mb-8">
        <h3 className="devio-text-xl devio-font-semibold mb-4">Churn Mensal</h3>
        <Card className="devio-card">
          <CardContent className="p-6">
            {/* Aqui seria renderizado o gráfico real */}
            <div className="w-full h-72 bg-gradient-to-r from-danger-50 to-neutral-100 rounded-md flex items-center justify-center">
              <div className="devio-flex devio-flex-col devio-items-center">
                <LineChart className="w-12 h-12 text-danger-500 mb-2" />
                <p className="devio-text-muted">Gráfico de Linha: Evolução da Taxa de Churn</p>
              </div>
            </div>
            <div className="devio-highlight-box mt-4">
              <div className="devio-flex devio-gap-2">
                <Info className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="devio-font-medium">Análise de Tendência</p>
                  <p className="devio-text-sm">A taxa de churn apresenta queda consistente nos últimos 3 meses, reflexo das melhorias implementadas na plataforma e no suporte ao cliente.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* InfoAlert: tips */}
      <div className="devio-alert devio-alert-info mb-6">
        <div className="devio-flex devio-gap-2">
          <Info className="w-5 h-5" />
          <div>
            <p className="devio-font-medium">Dica de otimização</p>
            <p className="devio-text-sm">Exporte relatórios periódicos para acompanhar a evolução das métricas. Você pode configurar alertas para métricas específicas em Configurações.</p>
          </div>
        </div>
      </div>
    </div>
  );
}