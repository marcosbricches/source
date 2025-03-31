"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { 
  ArrowLeft, Edit, Trash2, FileText, AlertTriangle, CheckCircle2, Users, CalendarDays, DollarSign 
} from "lucide-react"

export default function DetalhesPlano({ params }: { params: { id: string } }) {
  // Mock data for the plan
  const plano = {
    id: params.id,
    nome: "Plano Premium",
    descricao: "Plano completo com todas as funcionalidades avançadas para gestão de restaurantes de médio porte.",
    valorMensal: 199.90,
    valorAnual: 1999.90,
    status: "Ativo",
    dataInicio: "01/01/2025",
    dataTermino: "",
    periodoFreemium: 15,
    limitacaoFreemium: "Acesso limitado aos relatórios avançados e apenas 3 usuários simultâneos durante o período Freemium.",
    assinantes: 28,
    receitaMensal: 5597.20,
    recursos: [
      "Dashboard de Métricas",
      "Relatórios Avançados",
      "Integrações com PDV",
      "Controle de Estoque",
      "Gestão Financeira",
      "Planejamento de Compras",
      "Gestão de Fornecedores",
      "Usuários Ilimitados"
    ]
  }

  return (
    <div className="container py-8 max-w-5xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 text-muted-foreground" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 text-muted-foreground" asChild>
            <Link href="/gestao-planos">Gestão de Planos</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Detalhes do Plano</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página com ações */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">Plano</Badge>
            <span className="text-muted-foreground">/</span>
            <Badge variant="outline">ID: {plano.id}</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{plano.nome}</h1>
          <div className="flex items-center gap-2">
            <Badge className={plano.status === "Ativo" ? "bg-green-500" : "bg-gray-500"}>
              {plano.status}
            </Badge>
            <p className="text-muted-foreground">Desde {plano.dataInicio}</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
          <Button variant="outline" className="gap-2" asChild>
            <Link href="/gestao-planos">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <Button variant="outline" className="gap-2 text-blue-600 border-blue-200 hover:bg-blue-50" asChild>
            <Link href={`/gestao-planos/${plano.id}/editar`}>
              <Edit className="h-4 w-4" />
              Editar
            </Link>
          </Button>
          <Button variant="outline" className="gap-2 text-red-600 border-red-200 hover:bg-red-50" asChild>
            <Link href={`/gestao-planos/${plano.id}/excluir`}>
              <Trash2 className="h-4 w-4" />
              Excluir
            </Link>
          </Button>
        </div>
      </div>

      {/* Conteúdo com Tabs */}
      <Tabs defaultValue="informacoes" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="informacoes">Informações do Plano</TabsTrigger>
          <TabsTrigger value="estatisticas">Estatísticas</TabsTrigger>
          <TabsTrigger value="assinantes">Assinantes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="informacoes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Detalhes Básicos */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Detalhes Básicos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Descrição</p>
                  <p>{plano.descricao}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <Badge className={plano.status === "Ativo" ? "bg-green-500" : "bg-gray-500"}>
                      {plano.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-muted-foreground">Data de Início</p>
                    <p>{plano.dataInicio}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-muted-foreground">Data de Término</p>
                    <p>{plano.dataTermino || "Não definido"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Informações Financeiras */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-amber-600" />
                  Informações Financeiras
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-muted-foreground">Valor Mensal</p>
                    <p className="font-semibold">R$ {plano.valorMensal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-muted-foreground">Valor Anual</p>
                    <p className="font-semibold">R$ {plano.valorAnual.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-muted-foreground">Economia Anual</p>
                    <p className="font-semibold text-green-600">
                      {((1 - (plano.valorAnual / (plano.valorMensal * 12))) * 100).toFixed(0)}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Período Freemium */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-blue-500" />
                  Período Freemium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-muted-foreground">Dias Gratuitos</p>
                    <p>{plano.periodoFreemium} dias</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Limitações</p>
                  <p className="text-sm">{plano.limitacaoFreemium}</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Recursos Incluídos */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Recursos Incluídos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plano.recursos.map((recurso, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      {recurso}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="estatisticas">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  Assinantes Ativos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-5xl font-bold">{plano.assinantes}</p>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    +12% último mês
                  </Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-amber-600" />
                  Receita Mensal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-5xl font-bold">R$ {plano.receitaMensal.toFixed(2)}</p>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    +12% último mês
                  </Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-500" />
                  Relatórios Disponíveis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="gap-2">
                    <FileText className="h-4 w-4" />
                    Resumo de Planos
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <FileText className="h-4 w-4" />
                    Receita por Plano
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <FileText className="h-4 w-4" />
                    Adesão ao Freemium
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="assinantes">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                Lista de Assinantes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-muted-foreground">
                Para visualizar a lista completa de assinantes deste plano,
                acesse o relatório detalhado de assinantes.
              </p>
              <div className="flex justify-center">
                <Button className="gap-2 bg-amber-600 hover:bg-amber-700">
                  <FileText className="h-4 w-4" />
                  Gerar Relatório de Assinantes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Alertas contextuais */}
      {plano.status === "Ativo" && plano.assinantes > 0 && (
        <Alert className="border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-800">Atenção ao modificar este plano</AlertTitle>
          <AlertDescription className="text-amber-700">
            Este plano possui {plano.assinantes} assinantes ativos. 
            Qualquer alteração ou desativação impactará esses usuários e eles serão notificados.
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}