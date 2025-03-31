"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileDown, ChevronDown, FileText, BarChart3, Percent, DollarSign, Filter } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function RelatoriosPlanos() {
  // Mock data for plans
  const planos = [
    {
      id: 1,
      nome: "Básico",
      valorMensal: 99.90,
      valorAnual: 999.90,
      status: "Ativo",
      dataInicio: "01/01/2025",
      assinantes: 45,
      assinantesFreemium: 12,
      conversaoFreemium: 75,
      receitaMensal: 4495.50,
      receitaAnual: 11997.90
    },
    {
      id: 2,
      nome: "Premium",
      valorMensal: 199.90,
      valorAnual: 1999.90,
      status: "Ativo",
      dataInicio: "01/01/2025",
      assinantes: 28,
      assinantesFreemium: 15,
      conversaoFreemium: 60,
      receitaMensal: 5597.20,
      receitaAnual: 15999.20
    },
    {
      id: 3,
      nome: "Enterprise",
      valorMensal: 399.90,
      valorAnual: 3999.90,
      status: "Inativo",
      dataInicio: "01/01/2025",
      assinantes: 7,
      assinantesFreemium: 3,
      conversaoFreemium: 66,
      receitaMensal: 2799.30,
      receitaAnual: 19999.50
    },
  ]

  return (
    <div className="container py-8 max-w-7xl mx-auto">
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
          <Button variant="link" className="px-2 font-medium">Relatórios</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">Administração</Badge>
          <span className="text-muted-foreground">/</span>
          <Badge variant="outline">Relatórios</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Relatórios de Planos</h1>
        <p className="text-muted-foreground max-w-3xl">
          Visualize métricas detalhadas sobre planos, assinantes e receita gerada.
        </p>
      </div>

      {/* Filtros de relatório */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            Filtros do Relatório
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/4">
              <Label>Status do Plano</Label>
              <Select defaultValue="todos">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="ativo">Ativo</SelectItem>
                  <SelectItem value="inativo">Inativo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-1/4">
              <Label>Período</Label>
              <Select defaultValue="ultimos30">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ultimos30">Últimos 30 dias</SelectItem>
                  <SelectItem value="ultimos90">Últimos 90 dias</SelectItem>
                  <SelectItem value="ano2025">Ano 2025</SelectItem>
                  <SelectItem value="personalizado">Personalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-1/4">
              <Label>Data Início</Label>
              <Input type="date" />
            </div>
            <div className="w-full md:w-1/4">
              <Label>Data Fim</Label>
              <Input type="date" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4 flex justify-between">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Limpar Filtros
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
            <BarChart3 className="h-4 w-4" />
            Aplicar Filtros
          </Button>
        </CardFooter>
      </Card>

      {/* Tabs de Relatórios */}
      <Tabs defaultValue="resumo" className="mb-6">
        <TabsList className="w-full mb-6">
          <TabsTrigger value="resumo" className="flex-1">
            <FileText className="h-4 w-4 mr-2" />
            Resumo de Planos
          </TabsTrigger>
          <TabsTrigger value="receita" className="flex-1">
            <DollarSign className="h-4 w-4 mr-2" />
            Receita por Plano
          </TabsTrigger>
          <TabsTrigger value="freemium" className="flex-1">
            <Percent className="h-4 w-4 mr-2" />
            Adesão ao Freemium
          </TabsTrigger>
        </TabsList>
        
        {/* Tab 1: Resumo de Planos */}
        <TabsContent value="resumo">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle>Resumo de Planos</CardTitle>
                  <CardDescription>
                    Visão geral de todos os planos, valores e assinantes.
                  </CardDescription>
                </div>
                <Button variant="outline" className="gap-2">
                  <FileDown className="h-4 w-4" />
                  Exportar Relatório
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome do Plano</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Valor Mensal</TableHead>
                    <TableHead>Valor Anual</TableHead>
                    <TableHead>Data de Início</TableHead>
                    <TableHead>Assinantes</TableHead>
                    <TableHead>Recursos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {planos.map((plano) => (
                    <TableRow key={plano.id}>
                      <TableCell className="font-medium">{plano.nome}</TableCell>
                      <TableCell>
                        <Badge className={plano.status === "Ativo" ? "bg-green-500" : "bg-gray-500"}>
                          {plano.status}
                        </Badge>
                      </TableCell>
                      <TableCell>R$ {plano.valorMensal.toFixed(2)}</TableCell>
                      <TableCell>R$ {plano.valorAnual.toFixed(2)}</TableCell>
                      <TableCell>{plano.dataInicio}</TableCell>
                      <TableCell>{plano.assinantes}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          Ver detalhes
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="border-t pt-4 text-sm text-muted-foreground">
              Total de planos cadastrados: {planos.length} | Total de assinantes: {planos.reduce((sum, plano) => sum + plano.assinantes, 0)}
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Tab 2: Receita por Plano */}
        <TabsContent value="receita">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle>Receita por Plano</CardTitle>
                  <CardDescription>
                    Análise de receita gerada por cada plano, segmentada por período.
                  </CardDescription>
                </div>
                <Button variant="outline" className="gap-2">
                  <FileDown className="h-4 w-4" />
                  Exportar Relatório
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome do Plano</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assinantes</TableHead>
                    <TableHead>Receita Mensal</TableHead>
                    <TableHead>Receita Anual</TableHead>
                    <TableHead>Receita Total</TableHead>
                    <TableHead>% da Receita</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {planos.map((plano) => {
                    const receitaTotal = plano.receitaMensal + plano.receitaAnual;
                    const totalReceita = planos.reduce((sum, p) => sum + p.receitaMensal + p.receitaAnual, 0);
                    const percentual = ((receitaTotal / totalReceita) * 100).toFixed(1);
                    
                    return (
                      <TableRow key={plano.id}>
                        <TableCell className="font-medium">{plano.nome}</TableCell>
                        <TableCell>
                          <Badge className={plano.status === "Ativo" ? "bg-green-500" : "bg-gray-500"}>
                            {plano.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{plano.assinantes}</TableCell>
                        <TableCell>R$ {plano.receitaMensal.toFixed(2)}</TableCell>
                        <TableCell>R$ {plano.receitaAnual.toFixed(2)}</TableCell>
                        <TableCell className="font-medium">R$ {receitaTotal.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                            {percentual}%
                          </Badge>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="border-t pt-4 text-sm text-muted-foreground">
              Receita total: R$ {planos.reduce((sum, plano) => sum + plano.receitaMensal + plano.receitaAnual, 0).toFixed(2)}
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Tab 3: Adesão ao Freemium */}
        <TabsContent value="freemium">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle>Adesão ao Freemium</CardTitle>
                  <CardDescription>
                    Análise de clientes que utilizaram o período Freemium e sua conversão para planos pagos.
                  </CardDescription>
                </div>
                <Button variant="outline" className="gap-2">
                  <FileDown className="h-4 w-4" />
                  Exportar Relatório
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome do Plano</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Período Freemium</TableHead>
                    <TableHead>Usuários Freemium</TableHead>
                    <TableHead>Convertidos</TableHead>
                    <TableHead>Taxa de Conversão</TableHead>
                    <TableHead>Assinantes Ativos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {planos.map((plano) => {
                    const convertidos = Math.round(plano.assinantesFreemium * (plano.conversaoFreemium / 100));
                    
                    return (
                      <TableRow key={plano.id}>
                        <TableCell className="font-medium">{plano.nome}</TableCell>
                        <TableCell>
                          <Badge className={plano.status === "Ativo" ? "bg-green-500" : "bg-gray-500"}>
                            {plano.status}
                          </Badge>
                        </TableCell>
                        <TableCell>15 dias</TableCell>
                        <TableCell>{plano.assinantesFreemium}</TableCell>
                        <TableCell>{convertidos}</TableCell>
                        <TableCell>
                          <Badge className={
                            plano.conversaoFreemium >= 70 ? "bg-green-100 text-green-800 hover:bg-green-100" :
                            plano.conversaoFreemium >= 50 ? "bg-amber-100 text-amber-800 hover:bg-amber-100" :
                            "bg-red-100 text-red-800 hover:bg-red-100"
                          }>
                            {plano.conversaoFreemium}%
                          </Badge>
                        </TableCell>
                        <TableCell>{plano.assinantes}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="border-t pt-4 text-sm text-muted-foreground">
              Total de usuários Freemium: {planos.reduce((sum, plano) => sum + plano.assinantesFreemium, 0)} | 
              Taxa média de conversão: {Math.round(planos.reduce((sum, plano) => sum + plano.conversaoFreemium, 0) / planos.length)}%
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
