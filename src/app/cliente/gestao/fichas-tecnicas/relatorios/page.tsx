// app/fichas-tecnicas/relatorios/page.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RelatoriosFichasTecnicasPage() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Link href="/fichas-tecnicas">
            <Badge variant="outline" className="hover:bg-slate-100 cursor-pointer">
              Fichas Técnicas
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
            <h1 className="text-3xl font-bold tracking-tight mb-2">Relatórios de Fichas Técnicas</h1>
            <p className="text-muted-foreground max-w-3xl">
              Visualize e exporte informações consolidadas sobre suas fichas técnicas
            </p>
          </div>
          <Link href="/fichas-tecnicas">
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

      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
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
              <SelectValue placeholder="Alergênicos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="com">Com alergênicos</SelectItem>
              <SelectItem value="sem">Sem alergênicos</SelectItem>
              <SelectItem value="gluten">Glúten</SelectItem>
              <SelectItem value="lactose">Lactose</SelectItem>
              <SelectItem value="crustaceos">Crustáceos</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="todos">
            <SelectTrigger>
              <SelectValue placeholder="Validade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="30dias">Próximos 30 dias</SelectItem>
              <SelectItem value="60dias">Próximos 60 dias</SelectItem>
              <SelectItem value="90dias">Próximos 90 dias</SelectItem>
              <SelectItem value="vencidos">Vencidos</SelectItem>
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
            Exportar PDF
          </Button>
        </div>
      </div>

      <Tabs defaultValue="resumo" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="resumo">Resumo</TabsTrigger>
          <TabsTrigger value="individual">Ficha Individual</TabsTrigger>
        </TabsList>

        <TabsContent value="resumo">
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle>Resumo de Produtos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome do Produto</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Data de Validade</TableHead>
                      <TableHead>Alergênicos</TableHead>
                      <TableHead>Fornecedores</TableHead>
                      <TableHead>Última Atualização</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Camarão Rosa Limpo</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-amber-50">Proteínas</Badge>
                      </TableCell>
                      <TableCell>15/06/2025</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-red-50 text-red-800 border-red-200">Crustáceos</Badge>
                      </TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>05/03/2025</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-amber-100 hover:text-amber-700">
                          Visualizar
                        </Button>
                      </TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Arroz Branco</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-amber-50">Grãos e Cereais</Badge>
                      </TableCell>
                      <TableCell>20/12/2025</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Nenhum</Badge>
                      </TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>20/02/2025</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-amber-100 hover:text-amber-700">
                          Visualizar
                        </Button>
                      </TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Queijo Parmesão Ralado</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-amber-50">Laticínios</Badge>
                      </TableCell>
                      <TableCell>05/04/2025</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-red-50 text-red-800 border-red-200">Leite</Badge>
                      </TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>18/01/2025</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-amber-100 hover:text-amber-700">
                          Visualizar
                        </Button>
                      </TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Farinha de Trigo</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-amber-50">Grãos e Cereais</Badge>
                      </TableCell>
                      <TableCell>18/10/2025</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-red-50 text-red-800 border-red-200">Glúten</Badge>
                      </TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>12/02/2025</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-amber-100 hover:text-amber-700">
                          Visualizar
                        </Button>
                      </TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Tomate Italiano</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-amber-50">Hortifruti</Badge>
                      </TableCell>
                      <TableCell>25/03/2025</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Nenhum</Badge>
                      </TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>05/03/2025</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-amber-100 hover:text-amber-700">
                          Visualizar
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle>Distribuição por Categoria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72 bg-slate-50 flex items-center justify-center rounded-md">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-slate-400 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                    <p className="text-muted-foreground">Gráfico de produtos por categoria</p>
                    <p className="text-xs text-muted-foreground mt-2">(Visualização do gráfico seria exibida aqui)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Resumo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Total de Fichas Técnicas</span>
                    <span className="font-bold">42</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Fichas com Alergênicos</span>
                    <span className="font-bold">18</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Produtos com Fornecedores</span>
                    <span className="font-bold">38</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Produtos sem Fornecedores</span>
                    <span className="font-bold text-amber-600">4</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Fichas Atualizadas (30 dias)</span>
                    <span className="font-bold">15</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Validade Próxima (30 dias)</span>
                    <span className="font-bold text-red-600">3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="individual">
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle>Ficha Técnica Individual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Select defaultValue="camarao">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um produto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="camarao">Camarão Rosa Limpo</SelectItem>
                      <SelectItem value="arroz">Arroz Branco</SelectItem>
                      <SelectItem value="queijo">Queijo Parmesão Ralado</SelectItem>
                      <SelectItem value="tomate">Tomate Italiano</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Exportar Ficha Individual
                  </Button>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-md">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold">Camarão Rosa Limpo</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="bg-amber-50">Proteínas</Badge>
                      <span className="text-sm text-muted-foreground">Código: PRO-001</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Ficha Técnica Completa</Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Ingredientes</h3>
                    <p>Camarão rosa (Farfantepenaeus paulensis), sal, conservantes E-221, E-223.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Fabricante</h3>
                    <p>Pescados Mar Azul Ltda.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Alergênicos</h3>
                    <div className="flex gap-1 mt-1">
                      <Badge variant="outline" className="bg-red-50 text-red-800 border-red-200">Crustáceos</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Validade</h3>
                    <p>15/06/2025</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Última Atualização</h3>
                    <p>05/03/2025</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Instruções de Armazenamento</h3>
                    <p>Armazenar a -18°C ou inferior.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Vida Útil após Abertura</h3>
                    <p>2 dias refrigerado</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Porção</h3>
                    <p>100g</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Fornecedores Associados</h3>
                  <Table className="mt-2 border rounded-md">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome do Fornecedor</TableHead>
                        <TableHead>Contato</TableHead>
                        <TableHead>Prazo de Entrega</TableHead>
                        <TableHead>Último Preço</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Frigorífico XPTO</TableCell>
                        <TableCell>contato@xpto.com</TableCell>
                        <TableCell>3 dias</TableCell>
                        <TableCell>R$ 48,90/kg</TableCell>
                      </TableRow>
                      
                      <TableRow>
                        <TableCell className="font-medium">Pescados Mar Azul</TableCell>
                        <TableCell>comercial@marazul.com</TableCell>
                        <TableCell>2 dias</TableCell>
                        <TableCell>R$ 45,50/kg</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Informações Nutricionais por Porção (100g)</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                    <div className="bg-white p-3 rounded-md border">
                      <span className="text-xs text-muted-foreground block">Valor Energético</span>
                      <span className="font-medium">120 kcal</span>
                    </div>
                    
                    <div className="bg-white p-3 rounded-md border">
                      <span className="text-xs text-muted-foreground block">Proteínas</span>
                      <span className="font-medium">24 g</span>
                    </div>
                    
                    <div className="bg-white p-3 rounded-md border">
                      <span className="text-xs text-muted-foreground block">Carboidratos</span>
                      <span className="font-medium">0.5 g</span>
                    </div>
                    
                    <div className="bg-white p-3 rounded-md border">
                      <span className="text-xs text-muted-foreground block">Gorduras Totais</span>
                      <span className="font-medium">1.5 g</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}