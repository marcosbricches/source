// app/colaboradores/page.tsx
import Link from 'next/link';

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Icons
import { Plus, Search, Filter, Eye, Pencil, Trash, ArrowUpDown, User, Users, ShieldAlert, UserCog, Info, AlertTriangle } from 'lucide-react';

export default function ColaboradoresPage() {
  return (
    <div className="p-6 min-h-screen bg-neutral-50">
      {/* PageContainer: default */}
      <div className="devio-container">
        {/* PageHeader: collaborators */}
        <div className="devio-section relative mb-8">
          <div className="devio-dot-pattern"></div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="devio-badge devio-badge-primary mb-2">Gerenciamento</div>
              <h1 className="devio-text-2xl devio-font-bold">Colaboradores</h1>
              <p className="devio-text-muted">Gerencie equipes e níveis de acesso para o Rook System</p>
            </div>
            <Link href="/colaboradores/novo">
              <Button className="devio-btn devio-btn-primary">
                <Plus className="mr-2 h-4 w-4" />
                Adicionar Colaborador
              </Button>
            </Link>
          </div>
          
          {/* AccessRestrictionWarning: master-only */}
          <div className="devio-highlight-box mt-4">
            <div className="devio-flex devio-gap-2 devio-items-center">
              <ShieldAlert className="h-4 w-4 text-primary-500" />
              <p className="devio-text-sm devio-font-medium">Acesso restrito ao nível Master</p>
            </div>
            <p className="devio-text-xs devio-text-muted mt-1">Somente usuários com nível Master podem adicionar, editar ou excluir colaboradores.</p>
          </div>
        </div>
        
        {/* FilterSection: enhanced-search-and-filters */}
        <Card className="devio-card mb-6">
          <CardHeader className="py-3 px-4">
            <h3 className="devio-text-base devio-font-medium">Filtros e Pesquisa</h3>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="devio-flex devio-flex-col md:devio-flex-row devio-gap-4 devio-items-start md:devio-items-center md:devio-justify-between">
              <div className="devio-flex devio-gap-3 w-full md:w-auto">
                <div className="devio-input-group w-full md:w-80">
                  <span className="devio-input-group-icon">
                    <Search className="h-4 w-4" />
                  </span>
                  <Input 
                    placeholder="Buscar por nome, e-mail ou cargo..." 
                    className="devio-input"
                  />
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="devio-btn devio-btn-outline">
                        <Filter className="mr-2 h-4 w-4" />
                        Filtros
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Aplicar filtros avançados</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              <div className="devio-flex devio-gap-3 w-full md:w-auto">
                <Select>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os Cargos</SelectItem>
                    <SelectItem value="supervisor">Supervisor Financeiro</SelectItem>
                    <SelectItem value="cobranca">Cobrança</SelectItem>
                    <SelectItem value="cs">Sucesso do Cliente</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger className="w-full md:w-36">
                    <SelectValue placeholder="Nível de Acesso" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="master">Master</SelectItem>
                    <SelectItem value="admin">Administrador</SelectItem>
                    <SelectItem value="supervisor">Supervisor</SelectItem>
                    <SelectItem value="operational">Operacional</SelectItem>
                    <SelectItem value="view">Visualização</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger className="w-full md:w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="active">Ativo</SelectItem>
                    <SelectItem value="inactive">Inativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* DataTable: enhanced-collaborators */}
        <Card className="devio-card">
          <div className="rounded-md border">
            <table className="devio-table w-full">
              <thead>
                <tr>
                  <th className="w-[50px]">ID</th>
                  <th>
                    <Button variant="ghost" className="devio-flex devio-items-center devio-gap-1 p-0 hover:bg-transparent">
                      <span>Nome do Colaborador</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </th>
                  <th>E-mail</th>
                  <th>
                    <Button variant="ghost" className="devio-flex devio-items-center devio-gap-1 p-0 hover:bg-transparent">
                      <span>Cargo</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </th>
                  <th>
                    <Button variant="ghost" className="devio-flex devio-items-center devio-gap-1 p-0 hover:bg-transparent">
                      <span>Nível de Acesso</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </th>
                  <th>
                    <Button variant="ghost" className="devio-flex devio-items-center devio-gap-1 p-0 hover:bg-transparent">
                      <span>Status</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </th>
                  <th className="text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-mono text-sm">001</td>
                  <td>
                    <div className="devio-flex devio-items-center devio-gap-3">
                      <div className="devio-icon-container devio-icon-primary devio-icon-container-sm">
                        <User className="h-3.5 w-3.5" />
                      </div>
                      <span className="devio-font-medium">Ana Silva</span>
                    </div>
                  </td>
                  <td className="devio-text-muted">ana.silva@exemplo.com</td>
                  <td>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="text-left">
                          <div className="devio-flex devio-items-center devio-gap-1">
                            <span>Supervisor Financeiro</span>
                            <Info className="h-3.5 w-3.5 text-neutral-400" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="text-xs">Auditoria de assinantes ativos/inativos. Autorização para mudança de forma de pagamento.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                  <td>
                    <Badge className="devio-badge devio-badge-primary">
                      <ShieldAlert className="h-3 w-3 mr-1" />
                      Master
                    </Badge>
                  </td>
                  <td>
                    <div className="devio-flex devio-items-center devio-gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-success-500"></div>
                      <Badge className="devio-badge devio-badge-success">Ativo</Badge>
                    </div>
                  </td>
                  <td>
                    <div className="devio-flex devio-justify-end devio-gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href="/colaboradores/1">
                              <Button variant="outline" size="icon" className="h-8 w-8 devio-btn-icon devio-btn-icon-sm">
                                <Eye className="h-3.5 w-3.5" />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Visualizar detalhes</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href="/colaboradores/editar/1">
                              <Button variant="outline" size="icon" className="h-8 w-8 devio-btn-icon devio-btn-icon-sm">
                                <Pencil className="h-3.5 w-3.5" />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Editar colaborador</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" className="h-8 w-8 devio-btn-icon devio-btn-icon-sm text-red-600 border-red-200 hover:bg-red-50">
                              <Trash className="h-3.5 w-3.5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Excluir colaborador</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="font-mono text-sm">002</td>
                  <td>
                    <div className="devio-flex devio-items-center devio-gap-3">
                      <div className="devio-icon-container devio-icon-accent devio-icon-container-sm">
                        <User className="h-3.5 w-3.5" />
                      </div>
                      <span className="devio-font-medium">Pedro Martins</span>
                    </div>
                  </td>
                  <td className="devio-text-muted">pedro.martins@exemplo.com</td>
                  <td>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="text-left">
                          <div className="devio-flex devio-items-center devio-gap-1">
                            <span>Cobrança</span>
                            <Info className="h-3.5 w-3.5 text-neutral-400" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="text-xs">Gestão de pagamentos pendentes e negociação de débitos. Alteração de forma de pagamento mediante aprovação do Supervisor.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                  <td>
                    <Badge className="devio-badge devio-badge-neutral">
                      <UserCog className="h-3 w-3 mr-1" />
                      Operacional
                    </Badge>
                  </td>
                  <td>
                    <div className="devio-flex devio-items-center devio-gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-success-500"></div>
                      <Badge className="devio-badge devio-badge-success">Ativo</Badge>
                    </div>
                  </td>
                  <td>
                    <div className="devio-flex devio-justify-end devio-gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href="/colaboradores/2">
                              <Button variant="outline" size="icon" className="h-8 w-8 devio-btn-icon devio-btn-icon-sm">
                                <Eye className="h-3.5 w-3.5" />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Visualizar detalhes</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href="/colaboradores/editar/2">
                              <Button variant="outline" size="icon" className="h-8 w-8 devio-btn-icon devio-btn-icon-sm">
                                <Pencil className="h-3.5 w-3.5" />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Editar colaborador</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" className="h-8 w-8 devio-btn-icon devio-btn-icon-sm text-red-600 border-red-200 hover:bg-red-50">
                              <Trash className="h-3.5 w-3.5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Excluir colaborador</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="font-mono text-sm">003</td>
                  <td>
                    <div className="devio-flex devio-items-center devio-gap-3">
                      <div className="devio-icon-container devio-icon-warning devio-icon-container-sm">
                        <User className="h-3.5 w-3.5" />
                      </div>
                      <span className="devio-font-medium">Carolina Souza</span>
                    </div>
                  </td>
                  <td className="devio-text-muted">carolina.souza@exemplo.com</td>
                  <td>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="text-left">
                          <div className="devio-flex devio-items-center devio-gap-1">
                            <span>Sucesso do Cliente</span>
                            <Info className="h-3.5 w-3.5 text-neutral-400" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="text-xs">Acesso restrito à performance de clientes. Respeito à LGPD, limitando a visualização de dados sensíveis.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                  <td>
                    <Badge className="devio-badge devio-badge-neutral">
                      <Eye className="h-3 w-3 mr-1" />
                      Visualização
                    </Badge>
                  </td>
                  <td>
                    <div className="devio-flex devio-items-center devio-gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-warning-500"></div>
                      <Badge className="devio-badge devio-badge-warning">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Inativo
                      </Badge>
                    </div>
                  </td>
                  <td>
                    <div className="devio-flex devio-justify-end devio-gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href="/colaboradores/3">
                              <Button variant="outline" size="icon" className="h-8 w-8 devio-btn-icon devio-btn-icon-sm">
                                <Eye className="h-3.5 w-3.5" />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Visualizar detalhes</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href="/colaboradores/editar/3">
                              <Button variant="outline" size="icon" className="h-8 w-8 devio-btn-icon devio-btn-icon-sm">
                                <Pencil className="h-3.5 w-3.5" />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Editar colaborador</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" className="h-8 w-8 devio-btn-icon devio-btn-icon-sm text-red-600 border-red-200 hover:bg-red-50">
                              <Trash className="h-3.5 w-3.5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Excluir colaborador</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Pagination: enhanced */}
          <div className="devio-flex devio-items-center devio-justify-between p-4">
            <div className="devio-flex devio-items-center devio-gap-2">
              <Select defaultValue="10">
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              
              <p className="devio-text-sm devio-text-muted">
                itens por página
              </p>
            </div>
            
            <p className="devio-text-sm devio-text-muted">
              Mostrando <span className="devio-font-medium">1</span> a <span className="devio-font-medium">3</span> de <span className="devio-font-medium">3</span> colaboradores
            </p>
            
            <div className="devio-flex devio-gap-2">
              <Button variant="outline" className="devio-btn devio-btn-outline devio-btn-sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" className="devio-btn devio-btn-outline devio-btn-sm" disabled>
                Próximo
              </Button>
            </div>
          </div>
        </Card>
        
        {/* StatsSection: enhanced-collaborators */}
        <div className="devio-grid devio-grid-3 gap-6 mt-8">
          <div className="devio-stat-card">
            <div className="devio-flex devio-justify-between devio-items-center mb-2">
              <div className="devio-icon-container devio-icon-primary">
                <Users className="h-5 w-5" />
              </div>
            </div>
            <div className="devio-stat-label">Total de Colaboradores</div>
            <div className="devio-stat-value">3</div>
            <div className="devio-flex devio-items-center devio-gap-2 mt-2">
              <Badge className="devio-badge devio-badge-success">2 Ativos</Badge>
              <Badge className="devio-badge devio-badge-warning">1 Inativo</Badge>
            </div>
          </div>
          
          <div className="devio-stat-card">
            <div className="devio-flex devio-justify-between devio-items-center mb-2">
              <div className="devio-icon-container devio-icon-accent">
                <UserCog className="h-5 w-5" />
              </div>
            </div>
            <div className="devio-stat-label">Distribuição por Cargo</div>
            <div className="devio-flex devio-flex-wrap devio-gap-2 mt-3">
              <Badge className="devio-badge devio-badge-primary">1 Supervisor Financeiro</Badge>
              <Badge className="devio-badge devio-badge-primary">1 Cobrança</Badge>
              <Badge className="devio-badge devio-badge-primary">1 Sucesso do Cliente</Badge>
            </div>
          </div>
          
          <div className="devio-stat-card">
            <div className="devio-flex devio-justify-between devio-items-center mb-2">
              <div className="devio-icon-container devio-icon-info">
                <ShieldAlert className="h-5 w-5" />
              </div>
            </div>
            <div className="devio-stat-label">Níveis de Acesso</div>
            <div className="devio-flex devio-flex-wrap devio-gap-2 mt-3">
              <Badge className="devio-badge devio-badge-primary">1 Master</Badge>
              <Badge className="devio-badge devio-badge-neutral">1 Operacional</Badge>
              <Badge className="devio-badge devio-badge-neutral">1 Visualização</Badge>
              <Badge className="devio-badge devio-badge-neutral">0 Administrador</Badge>
              <Badge className="devio-badge devio-badge-neutral">0 Supervisor</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}