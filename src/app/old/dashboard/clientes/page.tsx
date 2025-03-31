// app/dashboard/clientes/page.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  BarChart3, 
  CalendarIcon, 
  Download, 
  Users, 
  Search,
  DollarSign,
  TrendingUp,
  ShoppingCart,
  Activity,
  CheckCircle,
  Clock,
  ArrowUpRight,
  MenuSquare,
  Info,
  Bell
} from "lucide-react";

export default function DashboardClientesPage() {
  return (
    <div className="devio-container">
      {/* PageHeader: client */}
      <div className="devio-section relative">
        <div className="devio-dot-pattern"></div>
        <Badge className="devio-badge devio-badge-primary mb-2">Dashboard</Badge>
        <h2 className="devio-text-2xl devio-font-bold mb-2">Dashboard de Clientes</h2>
        <p className="devio-text-muted mb-6">Análise detalhada de desempenho por cliente com métricas individualizadas</p>
      </div>
      
      {/* SearchBar: client */}
      <Card className="devio-card mb-6">
        <CardContent className="p-6">
          <div className="devio-flex devio-flex-col md:devio-flex-row devio-gap-4 devio-items-center devio-justify-between">
            <div className="w-full md:w-1/2">
              <div className="devio-input-group">
                <span className="devio-input-group-icon"><Search className="w-4 h-4" /></span>
                <Input className="devio-input" placeholder="Buscar por nome, CNPJ/CPF ou e-mail..." />
              </div>
            </div>
            
            <div className="devio-flex devio-gap-4">
              <div className="devio-flex devio-items-center devio-gap-2">
                <CalendarIcon className="w-4 h-4 text-primary" />
                <Select>
                  <SelectTrigger className="devio-input w-32">
                    <SelectValue placeholder="Período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">Semanal</SelectItem>
                    <SelectItem value="month">Mensal</SelectItem>
                    <SelectItem value="year">Anual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="devio-flex devio-items-center devio-gap-2">
                <MenuSquare className="w-4 h-4 text-primary" />
                <Select>
                  <SelectTrigger className="devio-input w-36">
                    <SelectValue placeholder="Plano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Plano Básico</SelectItem>
                    <SelectItem value="premium">Plano Premium</SelectItem>
                    <SelectItem value="enterprise">Plano Enterprise</SelectItem>
                    <SelectItem value="all">Todos os Planos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="devio-flex devio-items-center devio-gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <Select>
                  <SelectTrigger className="devio-input w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Ativos</SelectItem>
                    <SelectItem value="inactive">Inativos</SelectItem>
                    <SelectItem value="all">Todos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* ClientOverview: default */}
      <Card className="devio-card-premium mb-6">
        <CardContent className="p-6">
          <div className="devio-flex devio-flex-col md:devio-flex-row devio-gap-6 devio-justify-between">
            <div className="devio-flex devio-gap-4 devio-items-center">
              <div className="devio-icon-container devio-icon-container-lg devio-icon-primary">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="devio-text-xl devio-font-bold">Restaurante Silva Gourmet LTDA</h3>
                <p className="devio-text-muted">CNPJ: 12.345.678/0001-90</p>
                <div className="devio-flex devio-gap-3 mt-1">
                  <Badge className="devio-badge devio-badge-success">Ativo</Badge>
                  <Badge className="devio-badge devio-badge-accent">Plano Premium</Badge>
                </div>
              </div>
            </div>
            
            <div className="devio-flex devio-gap-3">
              <Button className="devio-btn devio-btn-outline">
                <Bell className="w-4 h-4 mr-2" />
                Notificações
              </Button>
              <Button className="devio-btn devio-btn-outline">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* KpiCards: client */}
      <div className="devio-grid devio-grid-2 lg:devio-grid-3 mb-8 gap-6">
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-items-center devio-justify-between mb-4">
              <div className="devio-icon-container devio-icon-primary">
                <DollarSign className="w-5 h-5" />
              </div>
              <Badge className="devio-badge devio-badge-primary">Faturamento</Badge>
            </div>
            <div className="devio-stat-label">Faturamento por Cliente</div>
            <div className="devio-stat-value">R$ 12.450</div>
            <div className="devio-flex devio-items-center mt-2">
              <ArrowUpRight className="w-4 h-4 devio-text-success mr-1" />
              <span className="devio-text-xs devio-text-success">+8.3% em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-items-center devio-justify-between mb-4">
              <div className="devio-icon-container devio-icon-danger">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <Badge className="devio-badge devio-badge-danger">Alerta</Badge>
            </div>
            <div className="devio-stat-label">CMV do Cliente</div>
            <div className="devio-stat-value">38.2%</div>
            <div className="devio-flex devio-items-center mt-2">
              <ArrowUpRight className="w-4 h-4 devio-text-danger mr-1" />
              <span className="devio-text-xs devio-text-danger">+6.2% acima do ideal (30-32%)</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-items-center devio-justify-between mb-4">
              <div className="devio-icon-container devio-icon-info">
                <Activity className="w-5 h-5" />
              </div>
              <Badge className="devio-badge devio-badge-info">Engajamento</Badge>
            </div>
            <div className="devio-stat-label">Engajamento do Cliente</div>
            <div className="devio-stat-value">184</div>
            <div className="devio-flex devio-items-center mt-2">
              <ArrowUpRight className="w-4 h-4 devio-text-success mr-1" />
              <span className="devio-text-xs devio-text-success">+12.7% em relação ao mês anterior</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-items-center devio-justify-between mb-4">
              <div className="devio-icon-container devio-icon-accent">
                <MenuSquare className="w-5 h-5" />
              </div>
              <Badge className="devio-badge devio-badge-accent">Plano</Badge>
            </div>
            <div className="devio-stat-label">Plano Atual</div>
            <div className="devio-stat-value devio-text-xl">Premium</div>
            <div className="devio-flex devio-items-center mt-2">
              <span className="devio-text-xs devio-text-muted">Renovação em 15/04/2025</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-items-center devio-justify-between mb-4">
              <div className="devio-icon-container devio-icon-success">
                <CheckCircle className="w-5 h-5" />
              </div>
              <Badge className="devio-badge devio-badge-success">Status</Badge>
            </div>
            <div className="devio-stat-label">Status do Cliente</div>
            <div className="devio-stat-value devio-text-xl">Ativo</div>
            <div className="devio-flex devio-items-center mt-2">
              <span className="devio-text-xs devio-text-muted">Última verificação: 07/03/2025</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-items-center devio-justify-between mb-4">
              <div className="devio-icon-container devio-icon-primary">
                <Clock className="w-5 h-5" />
              </div>
              <Badge className="devio-badge devio-badge-primary">Retenção</Badge>
            </div>
            <div className="devio-stat-label">Taxa de Retenção Individual</div>
            <div className="devio-stat-value">18 meses</div>
            <div className="devio-flex devio-items-center mt-2">
              <span className="devio-text-xs devio-text-muted">Cliente desde 09/2023</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* ChartTabs: client */}
      <div className="mb-8">
        <Tabs defaultValue="engagement" className="w-full">
          <div className="devio-flex devio-justify-between devio-items-center mb-4">
            <h3 className="devio-text-xl devio-font-semibold">Análise Detalhada</h3>
            <TabsList>
              <TabsTrigger value="engagement">Engajamento</TabsTrigger>
              <TabsTrigger value="revenue">Receita</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="engagement">
            <Card className="devio-card">
              <CardHeader>
                <CardTitle>Evolução de Engajamento</CardTitle>
                <CardDescription>Acessos do cliente nos últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Aqui seria renderizado o gráfico real */}
                <div className="w-full h-72 bg-gradient-to-r from-info-50 to-neutral-100 rounded-md flex items-center justify-center">
                  <div className="devio-flex devio-flex-col devio-items-center">
                    <LineChart className="w-12 h-12 text-info-500 mb-2" />
                    <p className="devio-text-muted">Gráfico de Linha: Evolução de Engajamento</p>
                  </div>
                </div>
                <div className="devio-flex devio-justify-between mt-6">
                  <div className="devio-stat-card p-2 w-auto">
                    <div className="devio-stat-label">Maior Atividade</div>
                    <div className="devio-stat-value devio-text-lg">42 acessos</div>
                    <div className="devio-text-xs devio-text-muted">Fevereiro/2025</div>
                  </div>
                  <div className="devio-stat-card p-2 w-auto">
                    <div className="devio-stat-label">Média Mensal</div>
                    <div className="devio-stat-value devio-text-lg">30.6 acessos</div>
                    <div className="devio-text-xs devio-text-muted">Últimos 6 meses</div>
                  </div>
                  <div className="devio-stat-card p-2 w-auto">
                    <div className="devio-stat-label">Média do Segmento</div>
                    <div className="devio-stat-value devio-text-lg">22.8 acessos</div>
                    <div className="devio-text-xs devio-text-muted">Referência</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="revenue">
            <Card className="devio-card">
              <CardHeader>
                <CardTitle>Receita por Período</CardTitle>
                <CardDescription>Pagamentos realizados nos últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Aqui seria renderizado o gráfico real */}
                <div className="w-full h-72 bg-gradient-to-r from-primary-50 to-neutral-100 rounded-md flex items-center justify-center">
                  <div className="devio-flex devio-flex-col devio-items-center">
                    <BarChart3 className="w-12 h-12 text-primary-500 mb-2" />
                    <p className="devio-text-muted">Gráfico de Barras: Receita por Período</p>
                  </div>
                </div>
                <div className="devio-highlight-box mt-6">
                  <div className="devio-flex devio-gap-2">
                    <Info className="w-5 h-5 text-primary-500" />
                    <div>
                      <p className="devio-font-medium">Análise de Receita</p>
                      <p className="devio-text-sm">Este cliente apresenta um crescimento consistente de receita de aproximadamente 7.5% ao mês, acima da média da plataforma de 5.2%.</p>
                    </div>
                  </div>
                </div>
                <div className="devio-flex devio-gap-4 devio-justify-between mt-4">
                  <div className="devio-stat-card p-2 w-auto">
                    <div className="devio-stat-label">Faturamento Total</div>
                    <div className="devio-stat-value devio-text-lg">R$ 74.700</div>
                    <div className="devio-text-xs devio-text-muted">Últimos 6 meses</div>
                  </div>
                  <div className="devio-stat-card p-2 w-auto">
                    <div className="devio-stat-label">Ticket Médio</div>
                    <div className="devio-stat-value devio-text-lg">R$ 12.450</div>
                    <div className="devio-text-xs devio-text-muted">Mensal</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* ActionCards: client */}
      <div className="devio-grid devio-grid-2 gap-6 mb-8">
        <Card className="devio-card devio-card-warning">
          <CardContent className="p-6">
            <div className="devio-flex devio-gap-4 devio-items-start">
              <div className="devio-icon-container devio-icon-warning">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="devio-text-lg devio-font-semibold mb-2">Alerta de CMV</h4>
                <p className="devio-text-sm mb-4">O CMV atual de 38.2% está acima do intervalo ideal (30-32%). Recomenda-se verificar a estratégia de compras e uso de insumos.</p>
                <Button className="devio-btn devio-btn-warning">
                  Ver Detalhes de Compras
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="devio-card">
          <CardContent className="p-6">
            <div className="devio-flex devio-gap-4 devio-items-start">
              <div className="devio-icon-container devio-icon-success">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="devio-text-lg devio-font-semibold mb-2">Oportunidade de Upgrade</h4>
                <p className="devio-text-sm mb-4">Com base no engajamento e faturamento, este cliente apresenta perfil compatível com o plano Enterprise, com potencial de aumento de 25% na receita.</p>
                <Button className="devio-btn devio-btn-success">
                  Sugerir Upgrade
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* InfoAlert: engagement */}
      <div className="devio-alert devio-alert-info mb-6">
        <div className="devio-flex devio-gap-2">
          <Info className="w-5 h-5" />
          <div>
            <p className="devio-font-medium">Lembrete importante</p>
            <p className="devio-text-sm">Lembre-se que apenas clientes com status Ativo têm métricas de engajamento exibidas. Para visualizar dados históricos de clientes inativos, use os filtros avançados.</p>
          </div>
        </div>
      </div>
    </div>
  );
}