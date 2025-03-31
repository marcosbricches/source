// app/dashboard/colaboradores/page.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PlusIcon, SearchIcon, MoreVerticalIcon, EyeIcon, PencilIcon, PowerIcon, TrashIcon } from "lucide-react"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ColaboradoresPage() {
  // Mock data para o protótipo
  const colaboradores = [
    { id: 1, nome: "João Silva", email: "joao.silva@rookystem.com", telefone: "(11) 98765-4321", cargo: "Supervisor Financeiro", nivel: "Supervisor", status: "Ativo" },
    { id: 2, nome: "Maria Santos", email: "maria.santos@rookystem.com", telefone: "(11) 91234-5678", cargo: "Cobrança", nivel: "Operacional", status: "Ativo" },
    { id: 3, nome: "Pedro Alves", email: "pedro.alves@rookystem.com", telefone: "(11) 99876-5432", cargo: "Sucesso do Cliente", nivel: "Visualização", status: "Inativo" },
    { id: 4, nome: "Ana Ferreira", email: "ana.ferreira@rookystem.com", telefone: "(11) 95555-4444", cargo: "Supervisor Financeiro", nivel: "Administrador", status: "Ativo" },
    { id: 5, nome: "Carlos Mendes", email: "carlos.mendes@rookystem.com", telefone: "(11) 93333-2222", cargo: "Cobrança", nivel: "Operacional", status: "Inativo" },
  ]

  return (
    <div className="container py-8 max-w-7xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 text-muted-foreground">Dashboard</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Colaboradores</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <Badge className="mb-2" variant="outline">Administração</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Cadastro de Colaboradores</h1>
        <p className="text-muted-foreground max-w-3xl">
          Gerencie os colaboradores do sistema, seus níveis de acesso e permissões.
        </p>
      </div>

      {/* Filtros e Ações */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-[300px]">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar colaborador" 
              className="pl-9"
            />
          </div>
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="ativo">Ativo</SelectItem>
              <SelectItem value="inativo">Inativo</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Nível de acesso" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="master">Master</SelectItem>
              <SelectItem value="administrador">Administrador</SelectItem>
              <SelectItem value="supervisor">Supervisor</SelectItem>
              <SelectItem value="operacional">Operacional</SelectItem>
              <SelectItem value="visualizacao">Visualização</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 gap-2">
            <PlusIcon className="h-4 w-4" />
            Adicionar Colaborador
          </Button>
        </div>
      </div>

      {/* Conteúdo da Tabela */}
      <Card>
        <CardHeader className="px-6 pt-6 pb-0">
          <CardTitle className="text-base text-muted-foreground">Lista de Colaboradores</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>Nível de Acesso</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[80px]">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {colaboradores.map((colaborador) => (
                <TableRow key={colaborador.id}>
                  <TableCell className="font-medium">{colaborador.nome}</TableCell>
                  <TableCell>{colaborador.email}</TableCell>
                  <TableCell>{colaborador.telefone}</TableCell>
                  <TableCell>{colaborador.cargo}</TableCell>
                  <TableCell>{colaborador.nivel}</TableCell>
                  <TableCell>
                    <Badge className={
                      colaborador.status === "Ativo" 
                        ? "bg-green-100 text-green-800 hover:bg-green-100" 
                        : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                    }>
                      {colaborador.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVerticalIcon className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center gap-2">
                          <EyeIcon className="h-4 w-4" /> Visualizar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <PencilIcon className="h-4 w-4" /> Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <PowerIcon className="h-4 w-4" /> 
                          {colaborador.status === "Ativo" ? "Desativar" : "Ativar"}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                          <TrashIcon className="h-4 w-4" /> Excluir
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
            Mostrando 5 de 5 colaboradores
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
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