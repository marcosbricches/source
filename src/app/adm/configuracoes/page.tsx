// app/(admin)/perfil/configuracoes/page.tsx
"use client"

import { useState } from "react"
import { ArrowLeftIcon, SaveIcon, UserIcon, BellIcon, EyeIcon, EyeOffIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function ConfiguracoesUsuarioPage() {
  const [saved, setSaved] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  const handleSave = () => {
    // Simulação de salvamento
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="container py-8 max-w-5xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 text-muted-foreground">Dashboard</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 text-muted-foreground">Perfil</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Configurações</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Minhas Configurações</h1>
        <p className="text-muted-foreground max-w-3xl">
          Personalize suas configurações de usuário, preferências de interface e senha.
        </p>
      </div>

      {/* Notificação de sucesso */}
      {saved && (
        <Alert className="mb-6 border-green-200 bg-green-50">
          <CheckIcon className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Configurações salvas</AlertTitle>
          <AlertDescription className="text-green-700">
            Suas configurações foram atualizadas com sucesso.
          </AlertDescription>
        </Alert>
      )}

      {/* Conteúdo com Tabs */}
      <Tabs defaultValue="perfil" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="perfil">Perfil</TabsTrigger>
          <TabsTrigger value="preferencias">Preferências</TabsTrigger>
          <TabsTrigger value="senha">Senha</TabsTrigger>
        </TabsList>
        
        <TabsContent value="perfil">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <UserIcon className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Informações Pessoais</CardTitle>
              </div>
              <CardDescription>
                Atualize suas informações de perfil exibidas no sistema.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/avatars/user.png" alt="Usuário" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm">Alterar Foto</Button>
                  <p className="text-xs text-muted-foreground">JPG, GIF ou PNG. Tamanho máximo de 1MB.</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input id="name" placeholder="Seu nome" defaultValue="João Silva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" placeholder="seu.email@exemplo.com" defaultValue="joao.silva@rookystem.com" />
                  <p className="text-xs text-muted-foreground">Usado para login e notificações.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(00) 00000-0000" defaultValue="(11) 98765-4321" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job">Cargo</Label>
                  <Input id="job" defaultValue="Supervisor Financeiro" disabled />
                  <p className="text-xs text-muted-foreground">Seu cargo não pode ser alterado diretamente.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="preferencias">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <BellIcon className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Preferências de Interface</CardTitle>
              </div>
              <CardDescription>
                Personalize como você visualiza e interage com o sistema.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="language">Idioma</Label>
                  <Select defaultValue="pt-BR">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Selecione o idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                      <SelectItem value="en-US">English (US)</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dashboard">Dashboard Padrão</Label>
                  <Select defaultValue="admin">
                    <SelectTrigger id="dashboard">
                      <SelectValue placeholder="Selecione o dashboard" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Dashboard Administrativo</SelectItem>
                      <SelectItem value="client">Visão de Cliente</SelectItem>
                      <SelectItem value="financial">Análise Financeira</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Página exibida ao fazer login.</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Notificações</h3>
                
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="emailNotifications" className="flex-1">
                    Notificações por e-mail
                    <p className="text-xs font-normal text-muted-foreground mt-1">
                      Receber alertas por e-mail sobre atividades importantes.
                    </p>
                  </Label>
                  <Switch id="emailNotifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="systemNotifications" className="flex-1">
                    Notificações no sistema
                    <p className="text-xs font-normal text-muted-foreground mt-1">
                      Exibir alertas e notificações na interface do sistema.
                    </p>
                  </Label>
                  <Switch id="systemNotifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="clientAlerts" className="flex-1">
                    Alertas de clientes
                    <p className="text-xs font-normal text-muted-foreground mt-1">
                      Receber notificações sobre atividades dos clientes.
                    </p>
                  </Label>
                  <Switch id="clientAlerts" defaultChecked />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Exibição</h3>
                
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="compactView" className="flex-1">
                    Modo compacto
                    <p className="text-xs font-normal text-muted-foreground mt-1">
                      Visualizar mais informações com espaços reduzidos.
                    </p>
                  </Label>
                  <Switch id="compactView" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="itemsPerPage">Itens por página</Label>
                  <Select defaultValue="10">
                    <SelectTrigger id="itemsPerPage">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 itens</SelectItem>
                      <SelectItem value="25">25 itens</SelectItem>
                      <SelectItem value="50">50 itens</SelectItem>
                      <SelectItem value="100">100 itens</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Número de registros exibidos em listas e tabelas.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="senha">
          <Card>
            <CardHeader>
              <CardTitle>Alterar Senha</CardTitle>
              <CardDescription>
                Atualize sua senha de acesso ao sistema. Recomendamos usar uma senha forte e única.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Senha Atual *</Label>
                  <div className="relative">
                    <Input 
                      id="currentPassword" 
                      type={showCurrentPassword ? "text" : "password"} 
                      placeholder="Digite sua senha atual" 
                    />
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon" 
                      className="absolute right-0 top-0 h-full px-3" 
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Nova Senha *</Label>
                  <div className="relative">
                    <Input 
                      id="newPassword" 
                      type={showNewPassword ? "text" : "password"} 
                      placeholder="Digite sua nova senha" 
                    />
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon" 
                      className="absolute right-0 top-0 h-full px-3" 
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    A senha deve ter pelo menos 8 caracteres e incluir letras maiúsculas, minúsculas, números e símbolos.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Nova Senha *</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    placeholder="Confirme sua nova senha" 
                  />
                </div>
                
                <Alert className="mt-2 border-amber-200 bg-amber-50">
                  <AlertTitle className="text-amber-800">Importante</AlertTitle>
                  <AlertDescription className="text-amber-700">
                    Após alterar sua senha, você será redirecionado para a tela de login.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end border-t pt-4">
              <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
                Alterar Senha
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between mt-8">
        <Button variant="outline" className="gap-2">
          <ArrowLeftIcon className="h-4 w-4" />
          Voltar
        </Button>
        <Button className="bg-amber-600 hover:bg-amber-700 gap-2" onClick={handleSave}>
          <SaveIcon className="h-4 w-4" />
          Salvar Configurações
        </Button>
      </div>
    </div>
  )
}