// app/fornecedores/relatorios/page.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RelatoriosFornecedoresPage() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Link href="/fornecedores">
            <Badge variant="outline" className="hover:bg-slate-100 cursor-pointer">
              Fornecedores
            </Badge>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Badge variant="outline">Relatórios</Badge>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Relatórios de Fornecedores</h1>
            <p className="text-muted-foreground max-w-3xl">
              Visualize e exporte relatórios que ajudam a identificar os melhores parceiros em termos de custo, prazo e qualidade.
            </p>
          </div>
          <Link href="/fornecedores">
            <Button variant="outline" className="gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
          <Select defaultValue="todas">
            <SelectTrigger>
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas categorias</SelectItem>
              <SelectItem value="proteinas">Proteínas</SelectItem>
              <SelectItem value="graos">Grãos e Cereais</SelectItem>
              <SelectItem value="laticinios">Laticínios</SelectItem>
              <SelectItem value="hortifruti">Hortifruti</SelectItem>
              <SelectItem value="bebidas">Bebidas</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="todos">
            <SelectTrigger>
              <SelectValue placeholder="Região" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todas regiões</SelectItem>
              <SelectItem value="sudeste">Sudeste</SelectItem>
              <SelectItem value="sul">Sul</SelectItem>
              <SelectItem value="nordeste">Nordeste</SelectItem>
              <SelectItem value="centro-oeste">Centro-Oeste</SelectItem>
              <SelectItem value="norte">Norte</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="ativos">
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="ativos">Ativos</SelectItem>
              <SelectItem value="inativos">Inativos</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="outline" className="gap-2 w-full md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Imprimir
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700 gap-2 w-full md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Exportar CSV
          </Button>
        </div>
      </div>

      <Tabs defaultValue="resumo" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="resumo">Resumo de Fornecedores</TabsTrigger>
          <TabsTrigger value="desempenho">Desempenho por Fornecedor</TabsTrigger>
          <TabsTrigger value="pagamento">Condições de Pagamento</TabsTrigger>
        </TabsList>

        <TabsContent value="resumo">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Resumo de Fornecedores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome do Fornecedor</TableHead>
                      <TableHead>CNPJ</TableHead>
                      <TableHead>Contato</TableHead>
                      <TableHead>Produtos Fornecidos</TableHead>
                      <TableHead>Prazo de Entrega</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Frigorífico XPTO</TableCell>
                      <TableCell>12.345.678/0001-90</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-sm">contato@xpto.com</span>
                          <span className="text-xs text-muted-foreground">(11) 98765-4321</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Badge variant="outline" className="bg-amber-50">Carnes</Badge>
                          <Badge variant="outline" className="bg-amber-50">Aves</Badge>
                        </div>
                      </TableCell>
                      <TableCell>3 dias</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                      </TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Distribuidora Alimentos ABC</TableCell>
                      <TableCell>98.765.432/0001-10</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-sm">vendas@abc.com</span>
                          <span className="text-xs text-muted-foreground">(21) 3456-7890</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Badge variant="outline" className="bg-amber-50">Grãos</Badge>
                          <Badge variant="outline" className="bg-amber-50">+3</Badge>
                        </div>
                      </TableCell>
                      <TableCell>2 dias</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                      </TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Laticínios Sul Mineiro</TableCell>
                      <TableCell>45.678.901/0001-23</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-sm">comercial@sulmineiro.com</span>
                          <span className="text-xs text-muted-foreground">(35) 9876-5432</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Badge variant="outline" className="bg-amber-50">Laticínios</Badge>
                        </div>
                      </TableCell>
                      <TableCell>4 dias</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-100 text-amber-800">Pendente</Badge>
                      </TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Hortifruti Direto do Campo</TableCell>
                      <TableCell>34.567.890/0001-12</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-sm">compras@diretodocampo.com</span>
                          <span className="text-xs text-muted-foreground">(11) 97654-3210</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Badge variant="outline" className="bg-amber-50">Hortifruti</Badge>
                        </div>
                      </TableCell>
                      <TableCell>1 dia</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                      </TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Distribuidora de Bebidas Premium</TableCell>
                      <TableCell>23.456.789/0001-01</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-sm">contato@bebidaspremium.com</span>
                          <span className="text-xs text-muted-foreground">(11) 4567-8901</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Badge variant="outline" className="bg-amber-50">Bebidas</Badge>
                        </div>
                      </TableCell>
                      <TableCell>5 dias</TableCell>
                      <TableCell>
                        <Badge className="bg-red-100 text-red-800">Inativo</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm" className="gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Exportar CSV
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="desempenho">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Desempenho por Fornecedor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome do Fornecedor</TableHead>
                      <TableHead>Produtos Fornecidos</TableHead>
                      <TableHead>Categorias</TableHead>
                      <TableHead>Prazo de Entrega</TableHead>
                      <TableHead>Compras Realizadas</TableHead>
                      <TableHead>Volume Fornecido</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Frigorífico XPTO</TableCell>
                      <TableCell>8</TableCell>
                      <TableCell>Proteínas</TableCell>
                      <TableCell>3 dias</TableCell>
                      <TableCell>18</TableCell>
                      <TableCell>R$ 32.458,75</TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Distribuidora Alimentos ABC</TableCell>
                      <TableCell>15</TableCell>
                      <TableCell>Grãos e Cereais</TableCell>
                      <TableCell>2 dias</TableCell>
                      <TableCell>22</TableCell>
                      <TableCell>R$ 28.945,30</TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Laticínios Sul Mineiro</TableCell>
                      <TableCell>6</TableCell>
                      <TableCell>Laticínios</TableCell>
                      <TableCell>4 dias</TableCell>
                      <TableCell>15</TableCell>
                      <TableCell>R$ 21.367,89</TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Hortifruti Direto do Campo</TableCell>
                      <TableCell>24</TableCell>
                      <TableCell>Hortifruti</TableCell>
                      <TableCell>1 dia</TableCell>
                      <TableCell>30</TableCell>
                      <TableCell>R$ 18.752,40</TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Distribuidora de Bebidas Premium</TableCell>
                      <TableCell>12</TableCell>
                      <TableCell>Bebidas</TableCell>
                      <TableCell>5 dias</TableCell>
                      <TableCell>14</TableCell>
                      <TableCell>R$ 16.890,25</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm" className="gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Exportar CSV
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pagamento">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Condições de Pagamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome do Fornecedor</TableHead>
                      <TableHead>Condições Padrão</TableHead>
                      <TableHead>Desconto à Vista</TableHead>
                      <TableHead>Prazo Máximo</TableHead>
                      <TableHead>Pedido Mínimo</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Frigorífico XPTO</TableCell>
                      <TableCell>30 dias</TableCell>
                      <TableCell>3%</TableCell>
                      <TableCell>45 dias</TableCell>
                      <TableCell>R$ 500,00</TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Distribuidora Alimentos ABC</TableCell>
                      <TableCell>15/30/45 dias</TableCell>
                      <TableCell>2%</TableCell>
                      <TableCell>60 dias</TableCell>
                      <TableCell>R$ 1.000,00</TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Laticínios Sul Mineiro</TableCell>
                      <TableCell>À vista/30 dias</TableCell>
                      <TableCell>5%</TableCell>
                      <TableCell>30 dias</TableCell>
                      <TableCell>R$ 300,00</TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Hortifruti Direto do Campo</TableCell>
                      <TableCell>7 dias</TableCell>
                      <TableCell>8%</TableCell>
                      <TableCell>15 dias</TableCell>
                      <TableCell>R$ 200,00</TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Distribuidora de Bebidas Premium</TableCell>
                      <TableCell>30/60/90 dias</TableCell>
                      <TableCell>1.5%</TableCell>
                      <TableCell>90 dias</TableCell>
                      <TableCell>R$ 2.000,00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm" className="gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Exportar CSV
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}