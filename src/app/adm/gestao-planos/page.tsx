"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, PlusCircle, Search, FileText, Edit, Trash2, ToggleLeft, ToggleRight, Eye } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function GestaoPlanos() {
  // Mock data for plans
  const plans = [
    {
      id: 1,
      nome: "Básico",
      valorMensal: 99.90,
      valorAnual: 999.90,
      status: "Ativo",
      dataInicio: "01/01/2025",
      dataTermino: "",
      assinantes: 45
    },
    {
      id: 2,
      nome: "Premium",
      valorMensal: 199.90,
      valorAnual: 1999.90,
      status: "Ativo",
      dataInicio: "01/01/2025",
      dataTermino: "",
      assinantes: 28
    },
    {
      id: 3,
      nome: "Enterprise",
      valorMensal: 399.90,
      valorAnual: 3999.90,
      status: "Inativo",
      dataInicio: "01/01/2025",
      dataTermino: "31/12/2025",
      assinantes: 7
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
          <Button variant="link" className="px-2 font-medium">
            Gestão de Planos
          </Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <Badge className="mb-2" variant="outline">Administração</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Gestão de Planos</h1>
        <p className="text-muted-foreground max-w-3xl">
          Gerencie os planos disponíveis na plataforma, incluindo preços, benefícios e recursos oferecidos.
        </p>
      </div>

      {/* Filtros e Ações */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar planos..." className="pl-8" />
          </div>
          <Select defaultValue="todos">
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="ativo">Ativo</SelectItem>
              <SelectItem value="inativo">Inativo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" />
            Gerar Relatório
          </Button>
          <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 gap-2" asChild>
            <Link href="/gestao-planos/adicionar">
              <PlusCircle className="h-4 w-4" />
              Adicionar Plano
            </Link>
          </Button>
        </div>
      </div>

      {/* Conteúdo da Tabela */}
      <Card>
        <CardHeader className="px-6 pt-6 pb-0">
          <CardTitle className="text-base text-muted-foreground">Lista de Planos</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome do Plano</TableHead>
                <TableHead>Valor Mensal</TableHead>
                <TableHead>Valor Anual</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data de Início</TableHead>
                <TableHead>Data de Término</TableHead>
                <TableHead>Assinantes</TableHead>
                <TableHead className="w-[100px]">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.map((plan) => (
                <TableRow key={plan.id}>
                  <TableCell className="font-medium">{plan.nome}</TableCell>
                  <TableCell>R$ {plan.valorMensal.toFixed(2)}</TableCell>
                  <TableCell>R$ {plan.valorAnual.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge className={plan.status === "Ativo" ? "bg-green-500" : "bg-gray-500"}>
                      {plan.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{plan.dataInicio}</TableCell>
                  <TableCell>{plan.dataTermino || "—"}</TableCell>
                  <TableCell>{plan.assinantes}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link href={`/gestao-planos/${plan.id}`} className="flex items-center">
                            <Eye className="mr-2 h-4 w-4" />
                            <span>Visualizar</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/gestao-planos/${plan.id}/editar`} className="flex items-center">
                            <Edit className="mr-2 h-4 w-4" />
                            <span>Editar</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/gestao-planos/${plan.id}/status`} className="flex items-center">
                            {plan.status === "Ativo" ? (
                              <>
                                <ToggleLeft className="mr-2 h-4 w-4" />
                                <span>Desativar</span>
                              </>
                            ) : (
                              <>
                                <ToggleRight className="mr-2 h-4 w-4" />
                                <span>Ativar</span>
                              </>
                            )}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild className="text-red-600">
                          <Link href={`/gestao-planos/${plan.id}/excluir`} className="flex items-center">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Excluir</span>
                          </Link>
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
            Mostrando 3 de 3 planos
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>Anterior</Button>
            <Button variant="outline" size="sm" className="bg-amber-50">1</Button>
            <Button variant="outline" size="sm" disabled>Próximo</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}