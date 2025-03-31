// app/dashboard/colaboradores/[id]/page.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { ArrowLeftIcon, EditIcon, PowerIcon, TrashIcon, UserIcon, MailIcon, PhoneIcon, BriefcaseIcon, ShieldIcon, KeyIcon } from "lucide-react"

// Ícone de calendário
const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
)

export default function DetalhesColaboradorPage() {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showStatusDialog, setShowStatusDialog] = useState(false)
  
  // Mock data para o protótipo
  const colaborador = {
    id: 1,
    nome: "João Silva",
    email: "joao.silva@rookystem.com",
    telefone: "(11) 98765-4321",
    cargo: "Supervisor Financeiro",
    nivel: "Supervisor",
    status: "Ativo",
    dataCriacao: "12/01/2025",
    ultimoAcesso: "16/03/2025 14:32",
    criadoPor: "Admin"
  }

  return (
    <div className="container py-8 max-w-5xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 text-muted-foreground">Dashboard</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 text-muted-foreground">Colaboradores</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Detalhes</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página com ações */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">Administração</Badge>
            <span className="text-muted-foreground">/</span>
            <Badge variant="outline">Colaborador</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{colaborador.nome}</h1>
          <div className="flex items-center gap-2">
            <Badge className={colaborador.status === "Ativo" ? "bg-green-500" : "bg-gray-500"}>
              {colaborador.status}
            </Badge>
            <p className="text-muted-foreground">ID: #{colaborador.id}</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
          <Button variant="outline" className="gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Voltar
          </Button>
          <Button variant="outline" className="gap-2 text-blue-600 border-blue-200 hover:bg-blue-50">
            <EditIcon className="h-4 w-4" />
            Editar
          </Button>
          <Button 
            variant="outline" 
            className={`gap-2 ${colaborador.status === "Ativo" ? "text-amber-600 border-amber-200 hover:bg-amber-50" : "text-green-600 border-green-200 hover:bg-green-50"}`}
            onClick={() => setShowStatusDialog(true)}
          >
            <PowerIcon className="h-4 w-4" />
            {colaborador.status === "Ativo" ? "Desativar" : "Ativar"}
          </Button>
          <Button 
            variant="outline" 
            className="gap-2 text-red-600 border-red-200 hover:bg-red-50"
            onClick={() => setShowDeleteDialog(true)}
          >
            <TrashIcon className="h-4 w-4" />
            Excluir
          </Button>
        </div>
      </div>

      {/* Conteúdo com Tabs */}
      <Tabs defaultValue="info" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="info">Informações</TabsTrigger>
          <TabsTrigger value="acesso">Acesso</TabsTrigger>
          <TabsTrigger value="atividade">Atividade</TabsTrigger>
        </TabsList>
        
        <TabsContent value="info">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base font-medium">Dados Pessoais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <UserIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Nome Completo</p>
                    <p className="text-muted-foreground">{colaborador.nome}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MailIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-muted-foreground">{colaborador.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PhoneIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground">{colaborador.telefone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base font-medium">Função</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <BriefcaseIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Cargo</p>
                    <p className="text-muted-foreground">{colaborador.cargo}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Nível de Acesso</p>
                    <p className="text-muted-foreground">{colaborador.nivel}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="acesso">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base font-medium">Informações de Acesso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <KeyIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Status da Conta</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={colaborador.status === "Ativo" ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-gray-100 text-gray-800 hover:bg-gray-100"}>
                        {colaborador.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {colaborador.status === "Ativo" ? "Acesso permitido ao sistema" : "Acesso bloqueado ao sistema"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <UserIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Último Acesso</p>
                    <p className="text-muted-foreground">{colaborador.ultimoAcesso}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button variant="outline" className="w-full">Redefinir Senha</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base font-medium">Informações do Registro</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <UserIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Criado por</p>
                    <p className="text-muted-foreground">{colaborador.criadoPor}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Data de Criação</p>
                    <p className="text-muted-foreground">{colaborador.dataCriacao}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="atividade">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium">Histórico de Atividades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>Histórico de atividades do colaborador.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Modal de Exclusão */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <TrashIcon className="h-5 w-5" />
              <AlertDialogTitle>Excluir Colaborador</AlertDialogTitle>
            </div>
            <AlertDialogDescription className="text-base text-gray-700">
              Você está prestes a excluir o colaborador <strong>{colaborador.nome}</strong>. Esta ação não pode ser desfeita.
            </AlertDialogDescription>
            <div className="bg-red-50 border border-red-100 rounded-md p-3 mt-2">
              <p className="text-sm text-red-800">
                A exclusão removerá permanentemente todos os dados deste colaborador do sistema, incluindo seu histórico de atividades.
              </p>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel asChild>
              <Button variant="outline">Cancelar</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button 
                className="bg-red-600 hover:bg-red-700"
              >
                Excluir Permanentemente
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Modal de Alteração de Status */}
      <AlertDialog open={showStatusDialog} onOpenChange={setShowStatusDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center gap-2 text-amber-600 mb-2">
              <PowerIcon className="h-5 w-5" />
              <AlertDialogTitle>
                {colaborador.status === "Ativo" ? "Desativar" : "Ativar"} Colaborador
              </AlertDialogTitle>
            </div>
            <AlertDialogDescription className="text-base text-gray-700">
              Você está prestes a {colaborador.status === "Ativo" ? "desativar" : "ativar"} o colaborador <strong>{colaborador.nome}</strong>.
            </AlertDialogDescription>
            <div className={`${colaborador.status === "Ativo" ? "bg-amber-50 border-amber-100" : "bg-green-50 border-green-100"} border rounded-md p-3 mt-2`}>
              <p className={`text-sm ${colaborador.status === "Ativo" ? "text-amber-800" : "text-green-800"}`}>
                {colaborador.status === "Ativo" 
                  ? "Colaboradores desativados não podem acessar o sistema até que sejam ativados novamente." 
                  : "Ao ativar este colaborador, ele poderá acessar o sistema novamente com suas credenciais."}
              </p>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel asChild>
              <Button variant="outline">Cancelar</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button 
                className={
                  colaborador.status === "Ativo" 
                    ? "bg-amber-600 hover:bg-amber-700" 
                    : "bg-green-600 hover:bg-green-700"
                }
              >
                {colaborador.status === "Ativo" ? "Desativar" : "Ativar"} Colaborador
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}