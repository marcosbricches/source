// app/planos/[action]/[id]/page.tsx
// Esta página serve tanto para criação (novo) quanto edição (editar/id)
"use client"

import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, HelpCircle, Info, DollarSign, Clock, Check, X } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Esta página serve tanto para criação quanto edição
// Para edição, seria necessário carregar os dados existentes
const PlanoFormPage = ({ params }) => {
  const isEditing = params?.action === "editar";
  const pageTitle = isEditing ? "Editar Plano" : "Novo Plano";
  
  // Recursos fictícios disponíveis na plataforma
  const availableResources = [
    { id: 1, name: "Dashboards Avançados" },
    { id: 2, name: "Relatórios Personalizados" },
    { id: 3, name: "Controle de Estoque" },
    { id: 4, name: "Gestão de Fornecedores" },
    { id: 5, name: "Planejamento Financeiro" },
    { id: 6, name: "Projeções e Metas" },
    { id: 7, name: "Aplicativo Mobile" },
    { id: 8, name: "Suporte Prioritário" },
    { id: 9, name: "Exportação de Dados" },
    { id: 10, name: "Integrações com APIs" },
  ];

  // Dados fictícios para o modo de edição
  const planData = isEditing ? {
    id: 2,
    nome: "Plano Premium",
    descricao: "Recursos avançados para médios restaurantes com suporte prioritário e ferramentas de análise detalhada para otimização de custos e operações.",
    valorMensal: 199.90,
    valorAnual: 1999.00,
    status: "Ativo",
    freemiumDias: 15,
    freemiumLimitacoes: "Limite de 50 itens no estoque, 3 usuários, relatórios básicos.",
    dataInicio: "2025-01-01",
    dataTermino: "",
    recursos: [1, 2, 3, 4, 5, 8]
  } : {
    nome: "",
    descricao: "",
    valorMensal: "",
    valorAnual: "",
    status: "Ativo",
    freemiumDias: "",
    freemiumLimitacoes: "",
    dataInicio: "",
    dataTermino: "",
    recursos: []
  };

  return (
    <div className="devio-container">
      {/* PageHeader: Form */}
      <div className="devio-section relative mb-8">
        <div className="devio-dot-pattern"></div>
        <div className="devio-flex devio-items-center mb-2">
          <Link href="/planos">
            <Button variant="ghost" className="devio-btn devio-btn-ghost p-0 mr-2">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar
            </Button>
          </Link>
          <Badge className="devio-badge devio-badge-primary">
            {isEditing ? "Edição" : "Novo Cadastro"}
          </Badge>
        </div>
        <h2 className="devio-text-2xl devio-font-bold mb-2">{pageTitle}</h2>
        <p className="devio-text-muted mb-6">
          {isEditing 
            ? "Edite as informações do plano existente conforme necessário"
            : "Preencha as informações para criar um novo plano na plataforma"}
        </p>
      </div>
      
      {/* FormCard: primary */}
      <Card className="devio-card mb-8">
        <CardHeader>
          <CardTitle className="devio-text-xl">Informações Básicas</CardTitle>
          <CardDescription>Configurações principais do plano</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="devio-grid devio-grid-2 gap-6">
            {/* FormField: required */}
            <div className="space-y-2 col-span-2">
              <div className="devio-flex devio-items-center">
                <Label htmlFor="nome" className="devio-font-medium">Nome do Plano*</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 ml-1 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>O nome deve ser único no sistema</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input 
                id="nome" 
                className="devio-input" 
                placeholder="Ex: Plano Básico" 
                defaultValue={planData.nome}
              />
              <p className="devio-text-xs devio-text-muted">
                Min. 3 caracteres. Este nome será exibido para os clientes.
              </p>
            </div>
            
            {/* FormField: required */}
            <div className="space-y-2 col-span-2">
              <Label htmlFor="descricao" className="devio-font-medium">Descrição do Plano*</Label>
              <Textarea 
                id="descricao" 
                className="devio-input min-h-24"
                placeholder="Descreva os principais benefícios do plano..."
                defaultValue={planData.descricao}
              />
              <div className="devio-flex devio-justify-between">
                <p className="devio-text-xs devio-text-muted">
                  Descreva brevemente os benefícios do plano.
                </p>
                <p className="devio-text-xs devio-text-muted">
                  {planData.descricao?.length || 0}/500 caracteres
                </p>
              </div>
            </div>
            
            {/* FormField: required */}
            <div className="space-y-2">
              <div className="devio-flex devio-items-center">
                <Label htmlFor="valorMensal" className="devio-font-medium">Valor Mensal (R$)*</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 ml-1 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Valor cobrado mensalmente</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="devio-input-group">
                <span className="devio-input-group-icon"><DollarSign className="w-4 h-4" /></span>
                <Input 
                  id="valorMensal" 
                  className="devio-input pl-8" 
                  placeholder="0,00" 
                  defaultValue={planData.valorMensal}
                />
              </div>
              <p className="devio-text-xs devio-text-muted">
                Deve ser maior que zero.
              </p>
            </div>
            
            {/* FormField: optional */}
            <div className="space-y-2">
              <div className="devio-flex devio-items-center">
                <Label htmlFor="valorAnual" className="devio-font-medium">Valor Anual (R$)</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 ml-1 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Deve ser menor que 12x o valor mensal</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="devio-input-group">
                <span className="devio-input-group-icon"><DollarSign className="w-4 h-4" /></span>
                <Input 
                  id="valorAnual" 
                  className="devio-input pl-8" 
                  placeholder="0,00" 
                  defaultValue={planData.valorAnual}
                />
              </div>
              <p className="devio-text-xs devio-text-muted">
                Opcional. Caso preenchido, deve ser menor que 12x o valor mensal.
              </p>
            </div>
            
            {/* FormField: required */}
            <div className="space-y-2">
              <Label htmlFor="status" className="devio-font-medium">Status*</Label>
              <Select defaultValue={planData.status}>
                <SelectTrigger className="devio-input">
                  <SelectValue placeholder="Selecione o status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ativo">Ativo</SelectItem>
                  <SelectItem value="Inativo">Inativo</SelectItem>
                </SelectContent>
              </Select>
              <p className="devio-text-xs devio-text-muted">
                Apenas planos ativos serão visíveis para os clientes.
              </p>
            </div>
            
            {/* FormField: required */}
            <div className="space-y-2">
              <div className="devio-flex devio-items-center">
                <Label htmlFor="dataInicio" className="devio-font-medium">Data de Início*</Label>
              </div>
              <div className="devio-input-group">
                <span className="devio-input-group-icon"><Calendar className="w-4 h-4" /></span>
                <Input 
                  id="dataInicio" 
                  className="devio-input pl-8" 
                  type="date" 
                  defaultValue={planData.dataInicio}
                />
              </div>
              <p className="devio-text-xs devio-text-muted">
                Data a partir da qual o plano estará disponível.
              </p>
            </div>
            
            {/* FormField: optional */}
            <div className="space-y-2">
              <div className="devio-flex devio-items-center">
                <Label htmlFor="dataTermino" className="devio-font-medium">Data de Término</Label>
              </div>
              <div className="devio-input-group">
                <span className="devio-input-group-icon"><Calendar className="w-4 h-4" /></span>
                <Input 
                  id="dataTermino" 
                  className="devio-input pl-8" 
                  type="date" 
                  defaultValue={planData.dataTermino}
                />
              </div>
              <p className="devio-text-xs devio-text-muted">
                Opcional. Data em que o plano será automaticamente desativado.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* FreemiumCard: accent */}
      <Card className="devio-card devio-card-accent mb-8">
        <CardHeader>
          <div className="devio-flex devio-items-center">
            <div className="devio-icon-container devio-icon-accent mb-2">
              <Clock className="w-5 h-5" />
            </div>
            <div className="ml-4">
              <CardTitle className="devio-text-xl">Configuração do Freemium</CardTitle>
              <CardDescription>Defina as condições do período de teste gratuito</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="devio-grid devio-grid-2 gap-6">
            {/* FormField: optional */}
            <div className="space-y-2">
              <div className="devio-flex devio-items-center">
                <Label htmlFor="freemiumDias" className="devio-font-medium">Período Freemium (dias)</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="w-4 h-4 ml-1 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Período de acesso gratuito antes da cobrança</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input 
                id="freemiumDias" 
                className="devio-input" 
                type="number" 
                placeholder="0" 
                defaultValue={planData.freemiumDias}
              />
              <p className="devio-text-xs devio-text-muted">
                Opcional. Número de dias para teste gratuito do plano.
              </p>
            </div>
            
            {/* FormField: conditional */}
            <div className="space-y-2">
              <div className="devio-flex devio-items-center">
                <Label htmlFor="freemiumLimitacoes" className="devio-font-medium">Limitações no Freemium</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="w-4 h-4 ml-1 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Necessário se o período Freemium for configurado</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Textarea 
                id="freemiumLimitacoes" 
                className="devio-input min-h-[80px]" 
                placeholder="Descreva as limitações durante o período gratuito..."
                defaultValue={planData.freemiumLimitacoes}
              />
              <p className="devio-text-xs devio-text-muted">
                Descreva claramente quais recursos são limitados durante o período Freemium.
              </p>
            </div>
          </div>
          
          {planData.freemiumDias && !planData.freemiumLimitacoes && (
            <Alert className="devio-alert devio-alert-warning mt-4">
              <AlertDescription className="devio-flex devio-items-start">
                <Info className="w-4 h-4 mr-2 mt-0.5" />
                <span>É necessário descrever as limitações quando o período Freemium for configurado.</span>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
      
      {/* ResourcesCard: default */}
      <Card className="devio-card mb-8">
        <CardHeader>
          <CardTitle className="devio-text-xl">Recursos Incluídos</CardTitle>
          <CardDescription>Selecione os recursos disponíveis neste plano</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="devio-grid devio-grid-2 gap-4">
            {availableResources.map((resource) => (
              <div key={resource.id} className="devio-flex devio-items-center space-x-2">
                <Checkbox 
                  id={`resource-${resource.id}`} 
                  defaultChecked={planData.recursos.includes(resource.id)}
                />
                <Label 
                  htmlFor={`resource-${resource.id}`}
                  className="devio-text-sm devio-font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {resource.name}
                </Label>
              </div>
            ))}
          </div>
          
          <Alert className="devio-alert devio-alert-info mt-6">
            <AlertDescription className="devio-flex devio-items-start">
              <Info className="w-4 h-4 mr-2 mt-0.5" />
              <span>Todos os planos incluem o acesso básico à plataforma e suporte por email.</span>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
      {/* ValidationSection: default */}
      <div className="mb-8">
        <h3 className="devio-text-lg devio-font-semibold mb-4">Validação</h3>
        <div className="devio-card p-4">
          <div className="space-y-2">
            <div className="devio-flex devio-items-center">
              <Check className="w-4 h-4 mr-2 devio-text-success" />
              <p className="devio-text-sm">Nome do plano válido</p>
            </div>
            <div className="devio-flex devio-items-center">
              <Check className="w-4 h-4 mr-2 devio-text-success" />
              <p className="devio-text-sm">Descrição dentro do limite de caracteres</p>
            </div>
            <div className="devio-flex devio-items-center">
              <Check className="w-4 h-4 mr-2 devio-text-success" />
              <p className="devio-text-sm">Valor mensal válido</p>
            </div>
            <div className="devio-flex devio-items-center">
              <Check className="w-4 h-4 mr-2 devio-text-success" />
              <p className="devio-text-sm">Valor anual dentro do limite (menor que 12x o valor mensal)</p>
            </div>
            <div className="devio-flex devio-items-center">
              <Check className="w-4 h-4 mr-2 devio-text-success" />
              <p className="devio-text-sm">Data de início válida</p>
            </div>
            {planData.freemiumDias && !planData.freemiumLimitacoes ? (
              <div className="devio-flex devio-items-center">
                <X className="w-4 h-4 mr-2 devio-text-danger" />
                <p className="devio-text-sm devio-text-danger">Limitações do Freemium devem ser descritas</p>
              </div>
            ) : (
              planData.freemiumDias && (
                <div className="devio-flex devio-items-center">
                  <Check className="w-4 h-4 mr-2 devio-text-success" />
                  <p className="devio-text-sm">Configuração do Freemium válida</p>
                </div>
              )
            )}
            {planData.recursos.length === 0 ? (
              <div className="devio-flex devio-items-center">
                <X className="w-4 h-4 mr-2 devio-text-danger" />
                <p className="devio-text-sm devio-text-danger">Selecione pelo menos um recurso</p>
              </div>
            ) : (
              <div className="devio-flex devio-items-center">
                <Check className="w-4 h-4 mr-2 devio-text-success" />
                <p className="devio-text-sm">{planData.recursos.length} recursos selecionados</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* FormActions: default */}
      <div className="devio-flex devio-justify-end devio-gap-4 mb-10">
        <Link href="/planos">
          <Button className="devio-btn devio-btn-outline">
            Cancelar
          </Button>
        </Link>
        <Button 
          className="devio-btn devio-btn-primary"
          disabled={
            !planData.nome || 
            !planData.descricao || 
            !planData.valorMensal || 
            (planData.freemiumDias && !planData.freemiumLimitacoes) ||
            planData.recursos.length === 0
          }
        >
          {isEditing ? "Salvar Alterações" : "Criar Plano"}
        </Button>
      </div>
    </div>
  );
};

export default PlanoFormPage;