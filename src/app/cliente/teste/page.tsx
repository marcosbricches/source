// app/planejamento/page.tsx
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Tabs, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { InfoIcon, TrendingUpIcon, AlertTriangleIcon } from "lucide-react"

export default function PlanejamentoPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header com breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Dashboard</span> / <span>Planejamento Orçamentário</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Planejamento Orçamentário</h1>
            <p className="text-muted-foreground mt-2">
              Período: Janeiro 2024
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Exportar Relatório</Button>
            <Button className="bg-[#F59E0B] hover:bg-[#D97706]">
              Novo Planejamento
            </Button>
          </div>
        </div>
      </div>

      {/* Alerta de CMV */}
      <Alert className="mb-8 border-amber-500 bg-amber-50">
        <AlertTriangleIcon className="h-4 w-4 text-amber-500" />
        <AlertDescription>
          CMV atual está em 32.5% - acima da meta estabelecida de 30%. 
          <Button variant="link" className="text-amber-700 p-0 ml-2">
            Ver recomendações
          </Button>
        </AlertDescription>
      </Alert>

      {/* Navegação por Tabs */}
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="financial">Dados Financeiros</TabsTrigger>
          <TabsTrigger value="purchases">Compras</TabsTrigger>
          <TabsTrigger value="suggestions">Sugestões</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Indicadores Principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">CMV</p>
              <h3 className="text-2xl font-bold mt-1">32,5%</h3>
            </div>
            <Badge variant="destructive">Acima da Meta</Badge>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUpIcon className="h-4 w-4 text-red-500" />
            <span className="text-red-500">+2.5%</span>
            <span className="text-muted-foreground">vs. mês anterior</span>
          </div>
          <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-red-100 rounded-full opacity-20" />
        </Card>

        {/* Similares cards para Margem e Lucro... */}
      </div>

      {/* Seção de Ações Rápidas */}
      <h2 className="text-xl font-semibold mb-4">Ações Rápidas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-4 hover:bg-slate-50 cursor-pointer transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 rounded-lg">
              <InfoIcon className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-medium">Atualizar Dados</h3>
              <p className="text-sm text-muted-foreground">Financeiros</p>
            </div>
          </div>
        </Card>
        {/* Mais cards de ações... */}
      </div>

      {/* Seção de Análises */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Histórico de CMV</h3>
          {/* Gráfico placeholder */}
          <div className="h-64 bg-slate-100 rounded-lg" />
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Distribuição de Custos</h3>
          {/* Gráfico placeholder */}
          <div className="h-64 bg-slate-100 rounded-lg" />
        </Card>
      </div>
    </div>
  )
}