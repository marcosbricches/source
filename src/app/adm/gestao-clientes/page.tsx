// app/admin/clientes/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { 
  DownloadIcon, 
  EyeIcon, 
  FilterIcon, 
  MoreHorizontalIcon, 
  PencilIcon, 
  SearchIcon, 
  TrashIcon, 
  UserIcon,
  ChartBarIcon
} from "lucide-react"

export default function ClientesList() {
  const [statusFilter, setStatusFilter] = useState("todos")
  const [planoFilter, setPlanoFilter] = useState("todos")
  
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" asChild>
            <Link href="/admin/dashboard" className="px-2 text-muted-foreground">Dashboard</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Gestão de Clientes</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <Badge className="mb-2" variant="outline">Administração</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Gestão de Clientes</h1>
        <p className="text-muted-foreground max-w-3xl">
          Visualize, gerencie e acompanhe os clientes cadastrados no sistema, com acesso a informações como status de assinatura, engajamento e métricas.
        </p>
      </div>

      {/* Filtros e Ações */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar por nome, CNPJ/CPF..." className="pl-8" />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os Status</SelectItem>
              <SelectItem value="ativo">Ativo</SelectItem>
              <SelectItem value="inativo">Inativo</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={planoFilter} onValueChange={setPlanoFilter}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Plano" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os Planos</SelectItem>
              <SelectItem value="basico">Básico</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="enterprise">Enterprise</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" className="w-full sm:w-auto gap-2">
            <FilterIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Mais Filtros</span>
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button variant="outline" className="w-full sm:w-auto gap-2">
            <DownloadIcon className="h-4 w-4" />
            Exportar
          </Button>
          <Button asChild className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 gap-2">
            <Link href="/admin/clientes/relatorios">
              <ChartBarIcon className="h-4 w-4" />
              Relatórios
            </Link>
          </Button>
        </div>
      </div>

      {/* Conteúdo da Tabela */}
      <Card>
        <CardHeader className="px-6 pt-6 pb-0">
          <CardTitle className="text-base text-muted-foreground">Lista de Clientes</CardTitle>
        </CardHeader>
        <CardContent className="px-6 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome/Razão Social</TableHead>
                <TableHead>CNPJ/CPF</TableHead>
                <TableHead>E-mail de Contato</TableHead>
                <TableHead>Plano</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data de Cadastro</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockClients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.nome}</TableCell>
                  <TableCell>{client.documento}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.plano}</TableCell>
                  <TableCell>
                    <Badge className={client.status === 'Ativo' ? 'bg-green-500' : 'bg-gray-500'}>
                      {client.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{client.dataCadastro}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menu</span>
                          <MoreHorizontalIcon className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/clientes/${client.id}`} className="flex items-center">
                            <EyeIcon className="mr-2 h-4 w-4" />
                            <span>Visualizar detalhes</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/clientes/${client.id}/editar`} className="flex items-center">
                            <PencilIcon className="mr-2 h-4 w-4" />
                            <span>Editar</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center">
                          <UserIcon className="mr-2 h-4 w-4" />
                          <span>Login simulado</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center text-red-600">
                          <TrashIcon className="mr-2 h-4 w-4" />
                          <span>Excluir</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between py-4 border-t">
          <div className="text-sm text-muted-foreground">
            Mostrando 5 de 25 clientes
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </div>
  )
}

// Mock data for table
const mockClients = [
  {
    id: "1",
    nome: "Restaurante Sabor & Arte Ltda",
    documento: "12.345.678/0001-90",
    email: "contato@saborarte.com",
    plano: "Premium",
    status: "Ativo",
    dataCadastro: "15/02/2025"
  },
  {
    id: "2",
    nome: "Cantina Bella Napoli",
    documento: "98.765.432/0001-21",
    email: "adm@bellanapoli.com",
    plano: "Enterprise",
    status: "Ativo",
    dataCadastro: "03/01/2025"
  },
  {
    id: "3",
    nome: "Bar do Chefe",
    documento: "45.678.901/0001-54",
    email: "financeiro@bardochefe.com",
    plano: "Básico",
    status: "Inativo",
    dataCadastro: "20/12/2024"
  },
  {
    id: "4",
    nome: "Sushi Express",
    documento: "78.901.234/0001-67",
    email: "contato@sushiexpress.com",
    plano: "Premium",
    status: "Ativo",
    dataCadastro: "05/03/2025"
  },
  {
    id: "5",
    nome: "Padaria Nova Aurora",
    documento: "23.456.789/0001-10",
    email: "adm@novaurora.com",
    plano: "Básico",
    status: "Ativo",
    dataCadastro: "28/01/2025"
  }
]