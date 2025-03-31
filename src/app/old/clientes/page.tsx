// app/admin/clientes/page.tsx
"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, Filter, Download, MoreHorizontal, Edit, Eye, Power, Trash, FileText, Users, Calendar, Briefcase, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function ClientesPage() {
  const [openFilter, setOpenFilter] = useState(false)

  return (
    <div className="devio-container">
      {/* PageHeader: default */}
      <div className="devio-section relative">
        <div className="devio-dot-pattern"></div>
        <Badge className="devio-badge devio-badge-primary mb-2">Administração</Badge>
        <h1 className="devio-text-2xl devio-font-bold mb-2">Gestão de Clientes</h1>
        <p className="devio-text-muted mb-6">Visualize, gerencie e acompanhe os clientes cadastrados no sistema.</p>
      </div>

      {/* ActionBar: search-and-filter */}
      <div className="devio-flex devio-justify-between devio-items-center mb-6">
        <div className="devio-flex devio-gap-2">
          <div className="devio-input-group">
            <span className="devio-input-group-icon"><Search className="w-4 h-4" /></span>
            <Input className="devio-input w-64" placeholder="Buscar cliente..." />
          </div>
          <Dialog open={openFilter} onOpenChange={setOpenFilter}>
            <DialogTrigger asChild>
              <Button className="devio-btn devio-btn-outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Filtrar Clientes</DialogTitle>
                <DialogDescription>
                  Selecione os filtros para refinar sua busca.
                </DialogDescription>
              </DialogHeader>
              <div className="devio-flex devio-flex-col devio-gap-4 py-4">
                <div className="devio-flex devio-flex-col devio-gap-2">
                  <label className="devio-text-sm devio-font-medium">Status da Conta</label>
                  <Select defaultValue="todos">
                    <SelectTrigger className="devio-input">
                      <SelectValue placeholder="Selecione o status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="ativo">Ativo</SelectItem>
                      <SelectItem value="inativo">Inativo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="devio-flex devio-flex-col devio-gap-2">
                  <label className="devio-text-sm devio-font-medium">Plano Assinado</label>
                  <Select defaultValue="todos">
                    <SelectTrigger className="devio-input">
                      <SelectValue placeholder="Selecione o plano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="basico">Básico</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="devio-flex devio-flex-col devio-gap-2">
                  <label className="devio-text-sm devio-font-medium">Período de Cadastro</label>
                  <div className="devio-flex devio-gap-2">
                    <Input className="devio-input" type="date" placeholder="Data inicial" />
                    <Input className="devio-input" type="date" placeholder="Data final" />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button className="devio-btn devio-btn-outline" onClick={() => setOpenFilter(false)}>Cancelar</Button>
                <Button className="devio-btn devio-btn-primary" onClick={() => setOpenFilter(false)}>Aplicar Filtros</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="devio-flex devio-gap-2">
          <Link href="/admin/clientes/relatorios">
            <Button className="devio-btn devio-btn-outline-primary">
              <FileText className="w-4 h-4 mr-2" />
              Relatórios
            </Button>
          </Link>
          <Button className="devio-btn devio-btn-outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* DataTable: client-list */}
      <Card className="devio-card mb-6">
        <CardContent className="p-0">
          <Table className="devio-table">
            <TableHeader>
              <TableRow>
                <TableHead>Nome/Razão Social</TableHead>
                <TableHead>CNPJ/CPF</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Plano</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data Cadastro</TableHead>
                <TableHead>Acessos</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Cliente Ativo - Empresa */}
              <TableRow>
                <TableCell className="devio-font-medium">Restaurante Sabor & Arte Ltda</TableCell>
                <TableCell>12.345.678/0001-90</TableCell>
                <TableCell>contato@saborarte.com.br</TableCell>
                <TableCell>
                  <Badge className="devio-badge devio-badge-accent">Premium</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="devio-badge devio-badge-success">Ativo</Badge>
                </TableCell>
                <TableCell>12/01/2025</TableCell>
                <TableCell>127</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="devio-btn-icon devio-btn-icon-sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" /> Detalhes
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="w-4 h-4 mr-2" /> Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="w-4 h-4 mr-2" /> Login Simulado
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-amber-600">
                        <Power className="w-4 h-4 mr-2" /> Inativar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="w-4 h-4 mr-2" /> Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              
              {/* Cliente Inativo - Pessoa Física */}
              <TableRow>
                <TableCell className="devio-font-medium">Ana Carolina Silva</TableCell>
                <TableCell>123.456.789-00</TableCell>
                <TableCell>ana.silva@email.com</TableCell>
                <TableCell>
                  <Badge className="devio-badge devio-badge-neutral">Básico</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="devio-badge devio-badge-danger">Inativo</Badge>
                </TableCell>
                <TableCell>05/02/2025</TableCell>
                <TableCell>8</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="devio-btn-icon devio-btn-icon-sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" /> Detalhes
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="w-4 h-4 mr-2" /> Editar
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-green-600">
                        <Power className="w-4 h-4 mr-2" /> Ativar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="w-4 h-4 mr-2" /> Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              
              {/* Cliente Enterprise */}
              <TableRow>
                <TableCell className="devio-font-medium">Gastronomia Express Eireli</TableCell>
                <TableCell>98.765.432/0001-10</TableCell>
                <TableCell>financeiro@gastronomiaexpress.com</TableCell>
                <TableCell>
                  <Badge className="devio-badge devio-badge-primary">Enterprise</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="devio-badge devio-badge-success">Ativo</Badge>
                </TableCell>
                <TableCell>15/01/2025</TableCell>
                <TableCell>432</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="devio-btn-icon devio-btn-icon-sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" /> Detalhes
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="w-4 h-4 mr-2" /> Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="w-4 h-4 mr-2" /> Login Simulado
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-amber-600">
                        <Power className="w-4 h-4 mr-2" /> Inativar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="w-4 h-4 mr-2" /> Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Statistics: customer-metrics */}
      <div className="mb-8">
        <h3 className="devio-text-xl devio-font-semibold mb-4">Métricas de Clientes</h3>
        <div className="devio-grid devio-grid-4">
          <div className="devio-stat-card">
            <div className="devio-flex devio-justify-between devio-items-center mb-2">
              <div className="devio-icon-container devio-icon-primary devio-icon-container-sm">
                <Users className="w-4 h-4" />
              </div>
              <div className="devio-stat-trend devio-trend-up">
                <span>+5.2%</span>
              </div>
            </div>
            <div className="devio-stat-label">Total de Clientes</div>
            <div className="devio-stat-value">243</div>
          </div>
          
          <div className="devio-stat-card">
            <div className="devio-flex devio-justify-between devio-items-center mb-2">
              <div className="devio-icon-container devio-icon-success devio-icon-container-sm">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="devio-stat-trend devio-trend-up">
                <span>+3.7%</span>
              </div>
            </div>
            <div className="devio-stat-label">Clientes Ativos</div>
            <div className="devio-stat-value">218</div>
          </div>
          
          <div className="devio-stat-card">
            <div className="devio-flex devio-justify-between devio-items-center mb-2">
              <div className="devio-icon-container devio-icon-danger devio-icon-container-sm">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div className="devio-stat-trend devio-trend-down">
                <span>-1.2%</span>
              </div>
            </div>
            <div className="devio-stat-label">Taxa de Churn</div>
            <div className="devio-stat-value">4.8%</div>
          </div>
          
          <div className="devio-stat-card">
            <div className="devio-flex devio-justify-between devio-items-center mb-2">
              <div className="devio-icon-container devio-icon-accent devio-icon-container-sm">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="devio-stat-trend devio-trend-up">
                <span>+8.3%</span>
              </div>
            </div>
            <div className="devio-stat-label">Novos este mês</div>
            <div className="devio-stat-value">17</div>
          </div>
        </div>
      </div>

      {/* Alert: info-tip */}
      <div className="devio-alert devio-alert-info">
        <div className="devio-flex devio-gap-2">
          <div className="devio-icon-container devio-icon-info devio-icon-container-sm flex-shrink-0">
            <AlertCircle className="w-4 h-4" />
          </div>
          <div>
            <p className="devio-font-medium">Dica de Produtividade</p>
            <p className="devio-text-sm">Utilize o &quot;Login Simulado&quot; para visualizar a plataforma como seus clientes e oferecer suporte mais eficiente.</p>
          </div>
        </div>
      </div>
    </div>
  )
}