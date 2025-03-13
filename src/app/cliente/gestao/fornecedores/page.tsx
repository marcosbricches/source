// app/fornecedores/page.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

export default function FornecedoresPage() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <Badge className="mb-2" variant="outline">Gestão de Compras</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Fornecedores</h1>
        <p className="text-muted-foreground max-w-3xl">
          Gerencie informações de fornecedores, associe-os a fichas técnicas e acompanhe prazos de entrega e condições de pagamento.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-72">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <Input className="pl-10 w-full" placeholder="Buscar por nome, CNPJ ou produto..." />
          </div>
          
          <Select defaultValue="todas">
            <SelectTrigger className="w-full sm:w-44">
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
          
          <Button variant="outline" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filtros
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Link href="/fornecedores/importar" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              Importar
            </Button>
          </Link>
          <Link href="/fornecedores/relatorios" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Relatórios
            </Button>
          </Link>
          <Link href="/fornecedores/novo" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Novo Fornecedor
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="tabela" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="tabela" className="rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Tabela
            </TabsTrigger>
            <TabsTrigger value="cards" className="rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Cards
            </TabsTrigger>
          </TabsList>
          
          <Select defaultValue="nome">
            <SelectTrigger className="w-[180px] h-9">
              <SelectValue placeholder="Ordenação" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nome">Nome (A-Z)</SelectItem>
              <SelectItem value="recente">Mais recentes</SelectItem>
              <SelectItem value="prazo">Menor prazo de entrega</SelectItem>
              <SelectItem value="categoria">Categoria</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="tabela">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[30px]">
                      <Checkbox id="select-all" />
                    </TableHead>
                    <TableHead>Nome do Fornecedor</TableHead>
                    <TableHead>CNPJ</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Produtos</TableHead>
                    <TableHead>Prazo</TableHead>
                    <TableHead>Pagamento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-amber-50/50">
                    <TableCell>
                      <Checkbox id="select-1" />
                    </TableCell>
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
                    <TableCell>
                      <span className="font-medium">3 dias</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">30 dias</span>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href="/fornecedores/1">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-amber-100 hover:text-amber-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </Button>
                        </Link>
                        <Link href="/fornecedores/editar/1">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-amber-100 hover:text-amber-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-red-100 hover:text-red-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-amber-50/50">
                    <TableCell>
                      <Checkbox id="select-2" />
                    </TableCell>
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
                    <TableCell>
                      <span className="font-medium">2 dias</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">15/30/45 dias</span>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href="/fornecedores/2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-amber-100 hover:text-amber-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </Button>
                        </Link>
                        <Link href="/fornecedores/editar/2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-amber-100 hover:text-amber-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-red-100 hover:text-red-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-amber-50/50">
                    <TableCell>
                      <Checkbox id="select-3" />
                    </TableCell>
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
                    <TableCell>
                      <span className="font-medium">4 dias</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">À vista/30 dias</span>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-amber-100 text-amber-800">Pendente</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href="/fornecedores/3">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-amber-100 hover:text-amber-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </Button>
                        </Link>
                        <Link href="/fornecedores/editar/3">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-amber-100 hover:text-amber-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-red-100 hover:text-red-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-amber-50/50">
                    <TableCell>
                      <Checkbox id="select-4" />
                    </TableCell>
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
                    <TableCell>
                      <span className="font-medium text-green-600">1 dia</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">7 dias</span>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href="/fornecedores/4">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-amber-100 hover:text-amber-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </Button>
                        </Link>
                        <Link href="/fornecedores/editar/4">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-amber-100 hover:text-amber-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-red-100 hover:text-red-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-amber-50/50">
                    <TableCell>
                      <Checkbox id="select-5" />
                    </TableCell>
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
                    <TableCell>
                      <span className="font-medium">5 dias</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">30/60/90 dias</span>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-red-100 text-red-800">Inativo</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href="/fornecedores/5">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-amber-100 hover:text-amber-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </Button>
                        </Link>
                        <Link href="/fornecedores/editar/5">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-amber-100 hover:text-amber-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-red-100 hover:text-red-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-between items-center py-4 border-t">
              <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
                Mostrando 5 de 24 fornecedores
              </div>
              <div className="flex gap-1">
                <Button variant="outline" size="sm" disabled className="h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Anterior
                </Button>
                <Button variant="outline" size="sm" className="h-8 bg-amber-50 border-amber-200">1</Button>
                <Button variant="outline" size="sm" className="h-8">2</Button>
                <Button variant="outline" size="sm" className="h-8">3</Button>
                <Button variant="outline" size="sm" className="h-8">4</Button>
                <Button variant="outline" size="sm" className="h-8">5</Button>
                <Button variant="outline" size="sm" className="h-8">
                  Próximo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="cards">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1 */}
            <Card className="hover:border-amber-200 transition-colors">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                    </div>
                    <h3 className="font-semibold text-lg">Frigorífico XPTO</h3>
                    <p className="text-sm text-muted-foreground">CNPJ: 12.345.678/0001-90</p>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7 hover:bg-amber-100 hover:text-amber-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">contato@xpto.com</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm">(11) 98765-4321</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Prazo de entrega: <strong>3 dias</strong></span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Pagamento: <strong>30 dias</strong></span>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-2">Produtos fornecidos:</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="bg-amber-50">Carnes</Badge>
                      <Badge variant="outline" className="bg-amber-50">Aves</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 pt-5 border-t flex items-center justify-between">
                  <Link href="/fornecedores/1">
                    <Button variant="outline" size="sm" className="h-8">
                      Ver detalhes
                    </Button>
                  </Link>
                  <Link href="/fornecedores/editar/1">
                    <Button size="sm" className="h-8 bg-amber-600 hover:bg-amber-700">
                      Editar
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Card 2 */}
            <Card className="hover:border-amber-200 transition-colors">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                    </div>
                    <h3 className="font-semibold text-lg">Distribuidora Alimentos ABC</h3>
                    <p className="text-sm text-muted-foreground">CNPJ: 98.765.432/0001-10</p>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7 hover:bg-amber-100 hover:text-amber-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">vendas@abc.com</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm">(21) 3456-7890</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Prazo de entrega: <strong>2 dias</strong></span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Pagamento: <strong>15/30/45 dias</strong></span>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-2">Produtos fornecidos:</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="bg-amber-50">Grãos</Badge>
                      <Badge variant="outline" className="bg-amber-50">Cereais</Badge>
                      <Badge variant="outline" className="bg-amber-50">Enlatados</Badge>
                      <Badge variant="outline" className="bg-amber-50">Farinhas</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 pt-5 border-t flex items-center justify-between">
                  <Link href="/fornecedores/2">
                    <Button variant="outline" size="sm" className="h-8">
                      Ver detalhes
                    </Button>
                  </Link>
                  <Link href="/fornecedores/editar/2">
                    <Button size="sm" className="h-8 bg-amber-600 hover:bg-amber-700">
                      Editar
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Card 3 */}
            <Card className="hover:border-amber-200 transition-colors">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-amber-100 text-amber-800">Pendente</Badge>
                    </div>
                    <h3 className="font-semibold text-lg">Laticínios Sul Mineiro</h3>
                    <p className="text-sm text-muted-foreground">CNPJ: 45.678.901/0001-23</p>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7 hover:bg-amber-100 hover:text-amber-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">comercial@sulmineiro.com</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm">(35) 9876-5432</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Prazo de entrega: <strong>4 dias</strong></span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Pagamento: <strong>À vista/30 dias</strong></span>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-2">Produtos fornecidos:</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="bg-amber-50">Laticínios</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 pt-5 border-t flex items-center justify-between">
                  <Link href="/fornecedores/3">
                    <Button variant="outline" size="sm" className="h-8">
                      Ver detalhes
                    </Button>
                  </Link>
                  <Link href="/fornecedores/editar/3">
                    <Button size="sm" className="h-8 bg-amber-600 hover:bg-amber-700">
                      Editar
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex gap-1">
              <Button variant="outline" size="sm" disabled className="h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Anterior
              </Button>
              <Button variant="outline" size="sm" className="h-8 bg-amber-50 border-amber-200">1</Button>
              <Button variant="outline" size="sm" className="h-8">2</Button>
              <Button variant="outline" size="sm" className="h-8">3</Button>
              <Button variant="outline" size="sm" className="h-8">4</Button>
              <Button variant="outline" size="sm" className="h-8">5</Button>
              <Button variant="outline" size="sm" className="h-8">
                Próximo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Exportar Lista
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/fichas-tecnicas">
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Fichas Técnicas
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}