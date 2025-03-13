// page.tsx
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

// Ícones
import { 
  Upload, 
  Download, 
  AlertCircle, 
  CheckCircle, 
  FileSpreadsheet, 
  FileText,
  Info,
  Filter,
  Calendar,
  BarChart3,
  ArrowRight,
  Eye
} from "lucide-react";

export default function ImportExportPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-4">
        <Badge className="bg-amber-500 hover:bg-amber-600">Integração de Dados</Badge>
        <h2 className="text-3xl font-bold">Exportação e Importação</h2>
        <p className="text-muted-foreground text-lg">
          Importe dados financeiros e operacionais para o sistema ou exporte relatórios em formatos legíveis como CSV ou PDF.
        </p>
      </div>

      <Tabs defaultValue="import" className="mt-8">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="import" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Importação
          </TabsTrigger>
          <TabsTrigger value="export" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Exportação
          </TabsTrigger>
        </TabsList>

        {/* Conteúdo da aba de Importação */}
        <TabsContent value="import" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Importação de Dados</CardTitle>
              <CardDescription>
                Carregue arquivos contendo informações operacionais e financeiras para o sistema.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="data-type">Tipo de Dado Importado</Label>
                <Select>
                  <SelectTrigger id="data-type" className="w-full">
                    <SelectValue placeholder="Selecione o tipo de dado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="purchases">Compras e Estoque</SelectItem>
                    <SelectItem value="financial">Dados Financeiros</SelectItem>
                    <SelectItem value="employees">Funcionários e Folha de Pagamento</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Arquivo para Importação</Label>
                <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex flex-col items-center gap-2">
                    <FileText className="h-10 w-10 text-amber-500" />
                    <p className="font-medium">Arraste e solte seu arquivo ou</p>
                    <Button variant="secondary" size="sm" className="mt-2">
                      Selecionar Arquivo
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      Formatos suportados: CSV, XLS, XLSX (máximo 10MB)
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Mapeamento de Colunas</h3>
                <p className="text-sm text-muted-foreground">
                  Verifique se as colunas do seu arquivo correspondem aos campos do sistema.
                </p>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Coluna no Arquivo</TableHead>
                      <TableHead>Campo no Sistema</TableHead>
                      <TableHead className="w-[100px]">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Data Compra</TableCell>
                      <TableCell>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Data da Compra" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="purchase_date">Data da Compra</SelectItem>
                            <SelectItem value="invoice_date">Data da Nota Fiscal</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center text-green-500">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Válido
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Valor</TableCell>
                      <TableCell>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Valor Total" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="total_value">Valor Total</SelectItem>
                            <SelectItem value="unit_price">Preço Unitário</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center text-amber-500">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          Verificar
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Fornecedor</TableCell>
                      <TableCell>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Nome Fornecedor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="supplier_name">Nome Fornecedor</SelectItem>
                            <SelectItem value="supplier_id">Código Fornecedor</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center text-green-500">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Válido
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <Alert className="bg-amber-50 border-amber-200">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <AlertTitle className="text-amber-600">Atenção necessária</AlertTitle>
                <AlertDescription>
                  Há 2 colunas não mapeadas no seu arquivo. Por favor, verifique o mapeamento antes de prosseguir.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-amber-500 hover:bg-amber-600">
                Importar Dados
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Histórico de Importações</CardTitle>
              <CardDescription>
                Acompanhe suas importações recentes e seu status.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Arquivo</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>compras_fevereiro.csv</TableCell>
                    <TableCell>Compras e Estoque</TableCell>
                    <TableCell>10/03/2025</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Concluído</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Detalhes
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>folha_pagamento_q1.xlsx</TableCell>
                    <TableCell>Funcionários</TableCell>
                    <TableCell>05/03/2025</TableCell>
                    <TableCell>
                      <Badge className="bg-red-500">Falhou</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Detalhes
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>financeiro_jan_2025.csv</TableCell>
                    <TableCell>Dados Financeiros</TableCell>
                    <TableCell>28/02/2025</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Concluído</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Detalhes
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Conteúdo da aba de Exportação */}
        <TabsContent value="export" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Exportação de Dados</CardTitle>
              <CardDescription>
                Exporte relatórios, listas e outros dados do sistema para análise externa.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="report-type">Tipo de Relatório</Label>
                  <Select>
                    <SelectTrigger id="report-type">
                      <SelectValue placeholder="Selecione o tipo de relatório" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="financial">Relatórios Financeiros</SelectItem>
                      <SelectItem value="stock">Estoques e Compras</SelectItem>
                      <SelectItem value="performance">Desempenho Operacional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="file-format">Formato do Arquivo</Label>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" className="w-32 flex gap-2 justify-center">
                        <FileSpreadsheet className="h-4 w-4" />
                        CSV
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" className="w-32 flex gap-2 justify-center bg-amber-50 border-amber-500 text-amber-700">
                        <FileText className="h-4 w-4" />
                        PDF
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Filtros</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Período
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input type="date" className="w-full" defaultValue="2025-02-01" />
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <Input type="date" className="w-full" defaultValue="2025-03-01" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Categoria/Subcategoria
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Todas as categorias" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas as categorias</SelectItem>
                        <SelectItem value="fast-food">Fast Food</SelectItem>
                        <SelectItem value="casual">Casual Dining</SelectItem>
                        <SelectItem value="fine-dining">Fine Dining</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-amber-500" />
                    Prévia do Relatório
                  </h3>
                  <Button variant="outline" size="sm" className="text-muted-foreground">
                    Atualizar Prévia
                  </Button>
                </div>
                
                <Card className="bg-muted/40">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center justify-center h-40 text-center space-y-2">
                      <FileText className="h-12 w-12 text-muted-foreground/70" />
                      <p className="text-muted-foreground">
                        Selecione um tipo de relatório e aplique filtros para visualizar a prévia.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Alert className="bg-blue-50 border-blue-200">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-600">Dica útil</AlertTitle>
                <AlertDescription>
                  Relatórios em PDF incluem gráficos e tabelas formatadas, enquanto arquivos CSV são ideais para importação em outras ferramentas.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-amber-500 hover:bg-amber-600">
                <Download className="h-4 w-4 mr-2" />
                Exportar Relatório
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Exportações Recentes</CardTitle>
              <CardDescription>
                Visualize e baixe novamente relatórios exportados anteriormente.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome do Relatório</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Formato</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Relatório Financeiro Q1</TableCell>
                    <TableCell>Financeiro</TableCell>
                    <TableCell className="flex items-center">
                      <FileText className="h-4 w-4 mr-1 text-red-500" />
                      PDF
                    </TableCell>
                    <TableCell>08/03/2025</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Baixar
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Análise de Estoque Mensal</TableCell>
                    <TableCell>Estoque</TableCell>
                    <TableCell className="flex items-center">
                      <FileSpreadsheet className="h-4 w-4 mr-1 text-green-500" />
                      CSV
                    </TableCell>
                    <TableCell>01/03/2025</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Baixar
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Desempenho Operacional Fev/2025</TableCell>
                    <TableCell>Desempenho</TableCell>
                    <TableCell className="flex items-center">
                      <FileText className="h-4 w-4 mr-1 text-red-500" />
                      PDF
                    </TableCell>
                    <TableCell>28/02/2025</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Baixar
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}