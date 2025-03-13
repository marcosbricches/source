// pages/export-preview.tsx
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

// Ícones
import { 
  ArrowLeft,  
  FileText,
  FileSpreadsheet,
  BarChart3,
  PieChart,
  LineChart,
  Calendar,
  Edit,
  Printer,
  Share2
} from "lucide-react";

export default function ExportPreviewPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/importacao-exportacao">
          <Button variant="outline" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
        <Badge className="bg-amber-500 hover:bg-amber-600">Integração de Dados</Badge>
      </div>

      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold">Prévia de Exportação</h2>
          <p className="text-muted-foreground text-lg mt-1">
            Relatório Financeiro - Fevereiro/2025
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Edit className="h-4 w-4" />
            Editar Filtros
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Printer className="h-4 w-4" />
            Imprimir
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Parâmetros do Relatório</CardTitle>
            <Badge variant="outline" className="gap-1">
              <Calendar className="h-3 w-3" />
              01/02/2025 - 29/02/2025
            </Badge>
          </div>
          <CardDescription>
            Configurações e filtros aplicados ao relatório.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">Tipo de Relatório</div>
              <div className="font-medium">Relatório Financeiro</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">Categoria</div>
              <div className="font-medium">Fast Food</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">Formato de Exportação</div>
              <div className="font-medium flex items-center gap-1">
                <FileText className="h-4 w-4 text-red-500" />
                PDF
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="tables" className="mb-6">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="tables" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Tabelas
          </TabsTrigger>
          <TabsTrigger value="charts" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Gráficos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tables" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Indicadores Financeiros</CardTitle>
              <CardDescription>
                Dados referentes a fevereiro de 2025 para restaurantes Fast Food.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Indicador</TableHead>
                    <TableHead className="text-right">Valor Atual</TableHead>
                    <TableHead className="text-right">Mês Anterior</TableHead>
                    <TableHead className="text-right">Variação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Faturamento Total</TableCell>
                    <TableCell className="text-right">R$ 128.450,00</TableCell>
                    <TableCell className="text-right">R$ 115.320,00</TableCell>
                    <TableCell className="text-right text-green-500">+11,4%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">CMV (Custo Mercadoria Vendida)</TableCell>
                    <TableCell className="text-right">R$ 42.388,50</TableCell>
                    <TableCell className="text-right">R$ 39.208,80</TableCell>
                    <TableCell className="text-right text-amber-500">+8,1%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Percentual CMV</TableCell>
                    <TableCell className="text-right">33%</TableCell>
                    <TableCell className="text-right">34%</TableCell>
                    <TableCell className="text-right text-green-500">-1,0%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Custo de Pessoal</TableCell>
                    <TableCell className="text-right">R$ 25.690,00</TableCell>
                    <TableCell className="text-right">R$ 24.217,20</TableCell>
                    <TableCell className="text-right text-amber-500">+6,1%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Lucro Operacional</TableCell>
                    <TableCell className="text-right">R$ 35.966,00</TableCell>
                    <TableCell className="text-right">R$ 31.136,40</TableCell>
                    <TableCell className="text-right text-green-500">+15,5%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Margem de Lucro</TableCell>
                    <TableCell className="text-right">28%</TableCell>
                    <TableCell className="text-right">27%</TableCell>
                    <TableCell className="text-right text-green-500">+1,0%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Análise de Vendas por Dia da Semana</CardTitle>
              <CardDescription>
                Distribuição de vendas em fevereiro de 2025.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Dia da Semana</TableHead>
                    <TableHead className="text-right">Faturamento</TableHead>
                    <TableHead className="text-right">Ticket Médio</TableHead>
                    <TableHead className="text-right">Nº de Clientes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Segunda-feira</TableCell>
                    <TableCell className="text-right">R$ 14.255,00</TableCell>
                    <TableCell className="text-right">R$ 42,50</TableCell>
                    <TableCell className="text-right">335</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Terça-feira</TableCell>
                    <TableCell className="text-right">R$ 15.120,00</TableCell>
                    <TableCell className="text-right">R$ 43,20</TableCell>
                    <TableCell className="text-right">350</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Quarta-feira</TableCell>
                    <TableCell className="text-right">R$ 16.340,00</TableCell>
                    <TableCell className="text-right">R$ 44,50</TableCell>
                    <TableCell className="text-right">367</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Quinta-feira</TableCell>
                    <TableCell className="text-right">R$ 17.850,00</TableCell>
                    <TableCell className="text-right">R$ 45,25</TableCell>
                    <TableCell className="text-right">394</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sexta-feira</TableCell>
                    <TableCell className="text-right">R$ 24.610,00</TableCell>
                    <TableCell className="text-right">R$ 48,75</TableCell>
                    <TableCell className="text-right">505</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sábado</TableCell>
                    <TableCell className="text-right">R$ 25.820,00</TableCell>
                    <TableCell className="text-right">R$ 49,80</TableCell>
                    <TableCell className="text-right">518</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Domingo</TableCell>
                    <TableCell className="text-right">R$ 14.455,00</TableCell>
                    <TableCell className="text-right">R$ 46,50</TableCell>
                    <TableCell className="text-right">311</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="charts" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-amber-500" />
                  Faturamento Mensal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] bg-muted/30 rounded-md flex items-center justify-center">
                  <div className="text-center p-4">
                    <BarChart3 className="h-16 w-16 text-muted-foreground/50 mx-auto mb-2" />
                    <p className="text-muted-foreground">Prévia do gráfico de barras mostrando faturamento mensal</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-amber-500" />
                  Distribuição de Custos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] bg-muted/30 rounded-md flex items-center justify-center">
                  <div className="text-center p-4">
                    <PieChart className="h-16 w-16 text-muted-foreground/50 mx-auto mb-2" />
                    <p className="text-muted-foreground">Prévia do gráfico de pizza mostrando distribuição de custos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-amber-500" />
                  Tendência de Vendas (Últimos 6 Meses)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] bg-muted/30 rounded-md flex items-center justify-center">
                  <div className="text-center p-4">
                    <LineChart className="h-16 w-16 text-muted-foreground/50 mx-auto mb-2" />
                    <p className="text-muted-foreground">Prévia do gráfico de linha mostrando tendências de vendas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-10">
        <Button variant="outline" className="gap-2">
          <Share2 className="h-4 w-4" />
          Compartilhar
        </Button>
        
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <FileSpreadsheet className="h-4 w-4 text-green-500" />
            Exportar como CSV
          </Button>
          <Button className="bg-amber-500 hover:bg-amber-600 gap-2">
            <FileText className="h-4 w-4" />
            Exportar como PDF
          </Button>
        </div>
      </div>
    </div>
  );
}