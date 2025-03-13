// app/planos/page.tsx
"use client"

import React from "react";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Zap
} from "lucide-react";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const PlanosPage = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState(null);

  // Dados fictícios para o protótipo
  const plans = [
    { 
      id: 1, 
      nome: "Plano Básico", 
      descricao: "Ideal para pequenos estabelecimentos",
      valorMensal: 99.90, 
      valorAnual: 999.00,
      status: "Ativo", 
      assinantes: 124,
      dataInicio: "01/01/2025",
      dataTermino: null,
      freemium: 7
    },
    { 
      id: 2, 
      nome: "Plano Premium", 
      descricao: "Recursos avançados para médios restaurantes",
      valorMensal: 199.90, 
      valorAnual: 1999.00,
      status: "Ativo", 
      assinantes: 87,
      dataInicio: "01/01/2025",
      dataTermino: null,
      freemium: 15
    },
    { 
      id: 3, 
      nome: "Plano Enterprise", 
      descricao: "Solução completa para redes de restaurantes",
      valorMensal: 349.90, 
      valorAnual: 3499.00,
      status: "Ativo", 
      assinantes: 42,
      dataInicio: "01/01/2025",
      dataTermino: null,
      freemium: 30
    },
    { 
      id: 4, 
      nome: "Plano Promocional", 
      descricao: "Plano especial para novos clientes",
      valorMensal: 79.90, 
      valorAnual: 799.00,
      status: "Inativo", 
      assinantes: 0,
      dataInicio: "01/02/2025",
      dataTermino: "01/05/2025",
      freemium: 7
    }
  ];

  const handleDeleteClick = (plan) => {
    setSelectedPlan(plan);
    setOpenDialog(true);
  };

  return (
    <div className="devio-container">
      {/* PageHeader: default */}
      <div className="devio-section relative mb-8">
        <div className="devio-dot-pattern"></div>
        <Badge className="devio-badge devio-badge-primary mb-2">Administração</Badge>
        <h2 className="devio-text-2xl devio-font-bold mb-2">Gestão de Planos</h2>
        <p className="devio-text-muted mb-6">Gerencie os planos disponíveis para os clientes na plataforma</p>
      </div>
      
      {/* StatsSummary: compact */}
      <div className="devio-grid devio-grid-3 mb-6">
        <div className="devio-stat-card">
          <div className="devio-flex devio-justify-between devio-items-center mb-2">
            <div className="devio-icon-container devio-icon-primary devio-icon-container-sm">
              <Zap className="w-4 h-4" />
            </div>
            <div className="devio-stat-trend devio-trend-up">
              <TrendingUp className="w-3 h-3" />
              <span>8.5%</span>
            </div>
          </div>
          <div className="devio-stat-label">Total de Planos</div>
          <div className="devio-stat-value">4</div>
        </div>
        
        <div className="devio-stat-card">
          <div className="devio-flex devio-justify-between devio-items-center mb-2">
            <div className="devio-icon-container devio-icon-success devio-icon-container-sm">
              <Users className="w-4 h-4" />
            </div>
            <div className="devio-stat-trend devio-trend-up">
              <TrendingUp className="w-3 h-3" />
              <span>12.3%</span>
            </div>
          </div>
          <div className="devio-stat-label">Total de Assinantes</div>
          <div className="devio-stat-value">253</div>
        </div>
        
        <div className="devio-stat-card">
          <div className="devio-flex devio-justify-between devio-items-center mb-2">
            <div className="devio-icon-container devio-icon-accent devio-icon-container-sm">
              <DollarSign className="w-4 h-4" />
            </div>
            <div className="devio-stat-trend devio-trend-up">
              <TrendingUp className="w-3 h-3" />
              <span>15.7%</span>
            </div>
          </div>
          <div className="devio-stat-label">Receita Mensal</div>
          <div className="devio-stat-value">R$ 49.752,00</div>
        </div>
      </div>
      
      {/* SearchAndFilter: default */}
      <div className="devio-flex devio-justify-between devio-items-center mb-6">
        <div className="devio-flex devio-gap-2">
          <div className="devio-input-group">
            <span className="devio-input-group-icon"><Search className="w-4 h-4" /></span>
            <Input className="devio-input w-64" placeholder="Buscar planos..." />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="devio-btn devio-btn-outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtrar
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Status</DropdownMenuLabel>
              <DropdownMenuItem>Todos</DropdownMenuItem>
              <DropdownMenuItem>Ativos</DropdownMenuItem>
              <DropdownMenuItem>Inativos</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
              <DropdownMenuItem>Nome</DropdownMenuItem>
              <DropdownMenuItem>Valor (crescente)</DropdownMenuItem>
              <DropdownMenuItem>Valor (decrescente)</DropdownMenuItem>
              <DropdownMenuItem>Assinantes</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Link href="/planos/novo">
          <Button className="devio-btn devio-btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Plano
          </Button>
        </Link>
      </div>
      
      {/* DataTable: default */}
      <Card className="devio-card mb-8">
        <CardContent className="p-0">
          <Table className="devio-table">
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Valor Mensal</TableHead>
                <TableHead>Valor Anual</TableHead>
                <TableHead>Freemium</TableHead>
                <TableHead>Assinantes</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Vigência</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.map((plan) => (
                <TableRow key={plan.id}>
                  <TableCell className="devio-font-medium">{plan.nome}</TableCell>
                  <TableCell>R$ {plan.valorMensal.toFixed(2)}</TableCell>
                  <TableCell>R$ {plan.valorAnual.toFixed(2)}</TableCell>
                  <TableCell>{plan.freemium} dias</TableCell>
                  <TableCell>{plan.assinantes}</TableCell>
                  <TableCell>
                    <Badge className={`devio-badge ${plan.status === "Ativo" ? "devio-badge-success" : "devio-badge-neutral"}`}>
                      {plan.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {plan.dataInicio} {plan.dataTermino ? ` - ${plan.dataTermino}` : ""}
                  </TableCell>
                  <TableCell>
                    <div className="devio-flex devio-gap-2">
                      <Link href={`/planos/${plan.id}`}>
                        <Button className="devio-btn-icon devio-btn-icon-sm devio-btn-ghost">
                          <Eye className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                      <Link href={`/planos/editar/${plan.id}`}>
                        <Button className="devio-btn-icon devio-btn-icon-sm devio-btn-ghost">
                          <Edit className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                      <Button 
                        className="devio-btn-icon devio-btn-icon-sm devio-btn-ghost devio-text-danger"
                        onClick={() => handleDeleteClick(plan)}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* FeaturedCard: premium */}
      <div className="mb-8">
        <h3 className="devio-text-xl devio-font-semibold mb-4">Plano em Destaque</h3>
        <Card className="devio-card devio-card-premium">
          <CardHeader>
            <div className="devio-icon-container devio-icon-accent mb-2">
              <DollarSign className="w-5 h-5" />
            </div>
            <CardTitle>Plano Premium</CardTitle>
            <CardDescription>Recursos avançados para médios restaurantes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="devio-grid devio-grid-2 gap-4 mb-4">
              <div>
                <p className="devio-text-sm devio-text-muted mb-1">Valor Mensal</p>
                <p className="devio-text-lg devio-font-semibold">R$ 199,90</p>
              </div>
              <div>
                <p className="devio-text-sm devio-text-muted mb-1">Valor Anual</p>
                <p className="devio-text-lg devio-font-semibold">R$ 1.999,00</p>
              </div>
              <div>
                <p className="devio-text-sm devio-text-muted mb-1">Período Freemium</p>
                <p className="devio-text-lg devio-font-semibold">15 dias</p>
              </div>
              <div>
                <p className="devio-text-sm devio-text-muted mb-1">Assinantes</p>
                <p className="devio-text-lg devio-font-semibold">87 clientes</p>
              </div>
            </div>
            <div className="devio-highlight-box mb-4">
              <p className="devio-text-sm">Este plano representa <span className="devio-font-bold">38%</span> da receita total mensal e <span className="devio-font-bold">34%</span> da base de clientes.</p>
            </div>
          </CardContent>
          <CardFooter className="devio-flex devio-gap-2">
            <Link href="/planos/2">
              <Button className="devio-btn devio-btn-outline devio-btn-outline-primary">
                Ver Detalhes
              </Button>
            </Link>
            <Link href="/planos/editar/2">
              <Button className="devio-btn devio-btn-accent">
                Editar Plano
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      
      {/* ConversionMetrics: compact */}
      <div>
        <h3 className="devio-text-xl devio-font-semibold mb-4">Métricas de Conversão</h3>
        <div className="devio-grid devio-grid-2 gap-6">
          <div className="devio-stat-card">
            <div className="devio-flex devio-justify-between devio-items-center mb-2">
              <div className="devio-icon-container devio-icon-info devio-icon-container-sm">
                <Clock className="w-4 h-4" />
              </div>
              <div className="devio-stat-trend devio-trend-up">
                <TrendingUp className="w-3 h-3" />
                <span>4.2%</span>
              </div>
            </div>
            <div className="devio-stat-label">Taxa de Conversão Freemium</div>
            <div className="devio-stat-value">68%</div>
            <p className="devio-text-sm devio-text-muted mt-2">Clientes que assinam após o período gratuito</p>
          </div>
          
          <div className="devio-stat-card">
            <div className="devio-flex devio-justify-between devio-items-center mb-2">
              <div className="devio-icon-container devio-icon-warning devio-icon-container-sm">
                <Users className="w-4 h-4" />
              </div>
              <div className="devio-stat-trend devio-trend-down">
                <TrendingUp className="w-3 h-3" />
                <span>2.1%</span>
              </div>
            </div>
            <div className="devio-stat-label">Churn Rate (Mensal)</div>
            <div className="devio-stat-value">3.4%</div>
            <p className="devio-text-sm devio-text-muted mt-2">Taxa de cancelamento de assinaturas</p>
          </div>
        </div>
      </div>
      
      {/* DeleteConfirmationDialog: danger */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="devio-text-danger">Excluir Plano</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir este plano? Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          {selectedPlan && selectedPlan.assinantes > 0 && (
            <div className="devio-alert devio-alert-warning mt-2">
              <p className="devio-font-medium">Atenção!</p>
              <p className="devio-text-sm">Este plano possui {selectedPlan.assinantes} assinantes ativos. A exclusão não é recomendada.</p>
            </div>
          )}
          <DialogFooter className="sm:justify-end gap-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpenDialog(false)}
              className="devio-btn devio-btn-outline"
            >
              Cancelar
            </Button>
            <Button 
              type="button" 
              className="devio-btn devio-btn-danger"
              disabled={selectedPlan && selectedPlan.assinantes > 0}
            >
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlanosPage;