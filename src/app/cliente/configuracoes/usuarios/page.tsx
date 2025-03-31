// app/configuracoes/usuarios/page.tsx
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  AlertDialogTrigger
} from "@/components/ui/dialog";
import {
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { 
  AlertTriangle, 
  ChevronDownIcon, 
  InfoIcon, 
  MailIcon, 
  PencilIcon, 
  PlusIcon, 
  SearchIcon, 
  ShieldAlertIcon, 
  ShieldCheckIcon, 
  UserIcon, 
  UserPlusIcon, 
  XIcon 
} from "lucide-react";

// Mock dos dados de usuários para o protótipo
const usuarios = [
  { 
    id: 1, 
    nome: "Carlos Oliveira", 
    email: "carlos@restaurante.com", 
    nivel: "Administrador", 
    status: "Ativo", 
    ultimoAcesso: "19/03/2025 08:45" 
  },
  { 
    id: 2, 
    nome: "Ana Silva", 
    email: "ana@restaurante.com", 
    nivel: "Gerente", 
    status: "Ativo", 
    ultimoAcesso: "18/03/2025 16:30" 
  },
  { 
    id: 3, 
    nome: "Paulo Santos", 
    email: "paulo@restaurante.com", 
    nivel: "Comprador", 
    status: "Ativo", 
    ultimoAcesso: "19/03/2025 10:15" 
  },
  { 
    id: 4, 
    nome: "Juliana Costa", 
    email: "juliana@contabilidade.com", 
    nivel: "Contador", 
    status: "Ativo", 
    ultimoAcesso: "17/03/2025 14:22" 
  },
  { 
    id: 5, 
    nome: "Roberto Almeida", 
    email: "roberto@restaurante.com", 
    nivel: "Gerente", 
    status: "Pendente", 
    ultimoAcesso: "Convite enviado 15/03/2025" 
  }
];

export default function GerenciamentoUsuariosPage() {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="container py-8 max-w-7xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 text-muted-foreground">Dashboard</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 text-muted-foreground">Configurações</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Usuários e Permissões</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <Badge className="mb-2" variant="outline">Configurações da Conta</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Usuários e Níveis de Acesso</h1>
        <p className="text-muted-foreground max-w-3xl">
          Gerencie os usuários que têm acesso ao seu restaurante no Rook System e configure suas permissões de acordo com suas funções.
        </p>
      </div>

      {/* Abas para organizar o conteúdo */}
      <Tabs defaultValue="usuarios" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="usuarios">Usuários</TabsTrigger>
          <TabsTrigger value="permissoes">Níveis de Acesso</TabsTrigger>
        </TabsList>
        
        <TabsContent value="usuarios">
          {/* Filtros e Ações */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Buscar usuário..." 
                  className="pl-8 w-full sm:w-[300px]" 
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Nível de Acesso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="admin">Administrador</SelectItem>
                  <SelectItem value="manager">Gerente</SelectItem>
                  <SelectItem value="buyer">Comprador</SelectItem>
                  <SelectItem value="accountant">Contador</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="active">Ativos</SelectItem>
                  <SelectItem value="pending">Pendentes</SelectItem>
                  <SelectItem value="inactive">Inativos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 gap-2">
                    <UserPlusIcon className="h-4 w-4" />
                    Convidar Usuário
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>Convidar Novo Usuário</DialogTitle>
                    <DialogDescription>
                      Envie um convite por e-mail para que o usuário possa acessar o sistema com as permissões definidas.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <FormLabel htmlFor="email">E-mail*</FormLabel>
                      <Input id="email" placeholder="email@exemplo.com" />
                    </div>
                    <div className="space-y-2">
                      <FormLabel htmlFor="name">Nome (opcional)</FormLabel>
                      <Input id="name" placeholder="Nome do usuário" />
                    </div>
                    <div className="space-y-2">
                      <FormLabel htmlFor="level">Nível de Acesso*</FormLabel>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um nível de acesso" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Administrador</SelectItem>
                          <SelectItem value="manager">Gerente</SelectItem>
                          <SelectItem value="buyer">Comprador</SelectItem>
                          <SelectItem value="accountant">Contador</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground">
                        <InfoIcon className="inline h-3 w-3 mr-1" />
                        Selecione o nível de acesso de acordo com a função do usuário.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <FormLabel>Mensagem Personalizada (opcional)</FormLabel>
                      <textarea 
                        className="w-full border rounded-md p-2 h-20" 
                        placeholder="Escreva uma mensagem personalizada para o convite..."
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsInviteDialogOpen(false)}>
                      Cancelar
                    </Button>
                    <Button 
                      className="bg-amber-600 hover:bg-amber-700 gap-2"
                      onClick={() => setIsInviteDialogOpen(false)}
                    >
                      <MailIcon className="h-4 w-4" />
                      Enviar Convite
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Conteúdo da Tabela */}
          <Card>
            <CardHeader className="px-6 pt-6 pb-0">
              <CardTitle className="text-base text-muted-foreground">Lista de Usuários</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>E-mail</TableHead>
                    <TableHead>Nível de Acesso</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Último Acesso</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usuarios.map((usuario) => (
                    <TableRow key={usuario.id}>
                      <TableCell className="font-medium">{usuario.nome}</TableCell>
                      <TableCell>{usuario.email}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline"
                          className={`gap-1 ${
                            usuario.nivel === "Administrador" ? "border-amber-200 bg-amber-50 text-amber-800" : 
                            usuario.nivel === "Gerente" ? "border-blue-200 bg-blue-50 text-blue-800" : 
                            usuario.nivel === "Comprador" ? "border-green-200 bg-green-50 text-green-800" : 
                            "border-purple-200 bg-purple-50 text-purple-800"
                          }`}
                        >
                          {usuario.nivel === "Administrador" && <ShieldAlertIcon className="h-3 w-3" />}
                          {usuario.nivel === "Gerente" && <ShieldCheckIcon className="h-3 w-3" />}
                          {usuario.nivel === "Comprador" && <UserIcon className="h-3 w-3" />}
                          {usuario.nivel === "Contador" && <UserIcon className="h-3 w-3" />}
                          {usuario.nivel}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          className={
                            usuario.status === "Ativo" ? "bg-green-500 hover:bg-green-600" : 
                            usuario.status === "Pendente" ? "bg-amber-500 hover:bg-amber-600" : 
                            "bg-gray-500 hover:bg-gray-600"
                          }
                        >
                          {usuario.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{usuario.ultimoAcesso}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <span className="sr-only">Abrir menu</span>
                              <ChevronDownIcon className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                              <DialogTrigger asChild>
                                <DropdownMenuItem 
                                  className="flex items-center gap-2 cursor-pointer"
                                  onSelect={(e) => {
                                    e.preventDefault();
                                    setCurrentUser(usuario);
                                    setIsEditDialogOpen(true);
                                  }}
                                >
                                  <PencilIcon className="h-4 w-4" />
                                  Editar Permissões
                                </DropdownMenuItem>
                              </DialogTrigger>
                            </Dialog>
                            
                            <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                              <AlertDialogTrigger asChild>
                                <DropdownMenuItem 
                                  className="flex items-center gap-2 text-red-600 cursor-pointer"
                                  onSelect={(e) => {
                                    e.preventDefault();
                                    setCurrentUser(usuario);
                                    setIsDeleteDialogOpen(true);
                                  }}
                                >
                                  <XIcon className="h-4 w-4" />
                                  Remover Acesso
                                </DropdownMenuItem>
                              </AlertDialogTrigger>
                            </AlertDialog>

                            {usuario.status === "Pendente" && (
                              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                                <MailIcon className="h-4 w-4" />
                                Reenviar Convite
                              </DropdownMenuItem>
                            )}
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
                Mostrando 5 de 8 usuários
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
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>

          {/* Modal de Editar Permissões */}
          {currentUser && (
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Editar Permissões de Usuário</DialogTitle>
                  <DialogDescription>
                    Altere o nível de acesso e as permissões do usuário {currentUser.nome}.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-md">
                    <UserIcon className="h-12 w-12 text-slate-400 bg-slate-200 p-2 rounded-full" />
                    <div>
                      <h4 className="font-medium">{currentUser.nome}</h4>
                      <p className="text-sm text-muted-foreground">{currentUser.email}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <FormLabel htmlFor="access-level">Nível de Acesso</FormLabel>
                    <Select defaultValue={currentUser.nivel === "Administrador" ? "admin" : 
                                          currentUser.nivel === "Gerente" ? "manager" : 
                                          currentUser.nivel === "Comprador" ? "buyer" : "accountant"}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Administrador</SelectItem>
                        <SelectItem value="manager">Gerente</SelectItem>
                        <SelectItem value="buyer">Comprador</SelectItem>
                        <SelectItem value="accountant">Contador</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3 mt-2">
                    <h4 className="text-sm font-medium">Detalhes das Permissões:</h4>
                    <div className="bg-amber-50 border border-amber-100 rounded-md p-3">
                      <h5 className="text-sm font-medium text-amber-800 mb-2">
                        <ShieldAlertIcon className="h-4 w-4 inline mr-1" />
                        Administrador
                      </h5>
                      <p className="text-sm text-amber-700">
                        Controle completo do restaurante, incluindo convites para usuários e gestão de estoque.
                      </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 rounded-md p-3">
                      <h5 className="text-sm font-medium text-blue-800 mb-2">
                        <ShieldCheckIcon className="h-4 w-4 inline mr-1" />
                        Gerente
                      </h5>
                      <p className="text-sm text-blue-700">
                        Acesso aos relatórios e controle de estoque, sem permissões para editar usuários.
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-md p-3">
                      <h5 className="text-sm font-medium text-green-800 mb-2">
                        <UserIcon className="h-4 w-4 inline mr-1" />
                        Comprador
                      </h5>
                      <p className="text-sm text-green-700">
                        Gestão de fichas técnicas e pedidos de compras.
                      </p>
                    </div>
                    <div className="bg-purple-50 border border-purple-100 rounded-md p-3">
                      <h5 className="text-sm font-medium text-purple-800 mb-2">
                        <UserIcon className="h-4 w-4 inline mr-1" />
                        Contador
                      </h5>
                      <p className="text-sm text-purple-700">
                        Acesso exclusivo aos relatórios financeiros.
                      </p>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button 
                    className="bg-amber-600 hover:bg-amber-700"
                    onClick={() => setIsEditDialogOpen(false)}
                  >
                    Salvar Alterações
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}

          {/* Modal de Remover Acesso */}
          {currentUser && (
            <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <div className="flex items-center gap-2 text-red-600 mb-2">
                    <AlertTriangle className="h-5 w-5" />
                    <AlertDialogTitle>Remover acesso do usuário</AlertDialogTitle>
                  </div>
                  <AlertDialogDescription className="text-base text-gray-700">
                    Você está prestes a revogar o acesso de {currentUser.nome} ({currentUser.email}) ao Rook System.
                  </AlertDialogDescription>
                  <div className="bg-red-50 border border-red-100 rounded-md p-3 mt-2">
                    <p className="text-sm text-red-800">
                      Esta ação não pode ser desfeita. O usuário perderá acesso imediatamente e será necessário enviar um novo convite caso queira restaurar o acesso no futuro.
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
                      onClick={() => setIsDeleteDialogOpen(false)}
                    >
                      Remover Acesso
                    </Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </TabsContent>
        
        <TabsContent value="permissoes">
          <div className="space-y-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Níveis de Acesso do Sistema</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-amber-500 gap-1">
                        <ShieldAlertIcon className="h-3 w-3" />
                        Administrador
                      </Badge>
                    </div>
                    <h4 className="font-medium">Acesso Máximo ao Restaurante</h4>
                    <p className="text-sm text-muted-foreground">
                      Controle completo do restaurante, incluindo convites para usuários e gestão de estoque.
                    </p>
                    <div className="mt-3 pt-3 border-t">
                      <h5 className="text-sm font-medium mb-2">Permissões Incluídas:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Convidar e gerenciar usuários</li>
                        <li>• Acesso total ao módulo financeiro</li>
                        <li>• Controle de estoque e compras</li>
                        <li>• Gestão de fichas técnicas</li>
                        <li>• Visualização de relatórios</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-500 gap-1">
                        <ShieldCheckIcon className="h-3 w-3" />
                        Gerente
                      </Badge>
                    </div>
                    <h4 className="font-medium">Gerenciamento Operacional</h4>
                    <p className="text-sm text-muted-foreground">
                      Acesso aos relatórios e controle de estoque, sem permissões para editar usuários.
                    </p>
                    <div className="mt-3 pt-3 border-t">
                      <h5 className="text-sm font-medium mb-2">Permissões Incluídas:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Visualização de relatórios</li>
                        <li>• Controle de estoque</li>
                        <li>• Gestão de fichas técnicas</li>
                        <li>• Visualização de dados financeiros</li>
                        <li>• (Sem acesso para convidar usuários)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-500 gap-1">
                        <UserIcon className="h-3 w-3" />
                        Comprador
                      </Badge>
                    </div>
                    <h4 className="font-medium">Gestão de Compras</h4>
                    <p className="text-sm text-muted-foreground">
                      Gestão de fichas técnicas e pedidos de compras.
                    </p>
                    <div className="mt-3 pt-3 border-t">
                      <h5 className="text-sm font-medium mb-2">Permissões Incluídas:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Gestão de fichas técnicas</li>
                        <li>• Cadastro de fornecedores</li>
                        <li>• Processamento de pedidos</li>
                        <li>• Controle de estoque</li>
                        <li>• (Sem acesso a dados financeiros detalhados)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-purple-500 gap-1">
                        <UserIcon className="h-3 w-3" />
                        Contador
                      </Badge>
                    </div>
                    <h4 className="font-medium">Acesso Financeiro</h4>
                    <p className="text-sm text-muted-foreground">
                      Acesso exclusivo aos relatórios financeiros.
                    </p>
                    <div className="mt-3 pt-3 border-t">
                      <h5 className="text-sm font-medium mb-2">Permissões Incluídas:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Visualização de relatórios financeiros</li>
                        <li>• Exportação de dados contábeis</li>
                        <li>• Acompanhamento de métricas financeiras</li>
                        <li>• Análise de custos e receitas</li>
                        <li>• (Sem acesso operacional)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Boas Práticas de Atribuição de Acesso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 border border-blue-100 rounded-md p-4">
                  <h4 className="text-blue-800 font-medium mb-2">Princípio do Menor Privilégio</h4>
                  <p className="text-sm text-blue-700">
                    Conceda aos usuários apenas os níveis de acesso necessários para que realizem suas funções. Isso minimiza riscos de segurança e exposição de dados sensíveis.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Recomendações:</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <div className="mt-0.5 text-amber-600">
                        <ShieldAlertIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Administrador</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Limite o número de administradores. Idealmente apenas o proprietário e gerente principal.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 text-blue-600">
                        <ShieldCheckIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Gerente</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Adequado para supervisores e gerentes operacionais que precisam visualizar dados completos.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 text-green-600">
                        <UserIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Comprador</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Ideal para funcionários responsáveis pelo controle de estoque e compras.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 text-purple-600">
                        <UserIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium">Contador</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Reservado para profissionais de contabilidade que precisam apenas dos dados financeiros.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}