// app/configuracoes/usuarios/convidar/page.tsx
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  ArrowLeftIcon, 
  InfoIcon, 
  MailIcon, 
  ShieldAlertIcon, 
  ShieldCheckIcon, 
  UserIcon 
} from "lucide-react";

export default function ConvidarUsuarioPage() {
  return (
    <div className="container py-8 max-w-3xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 text-muted-foreground">Dashboard</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 text-muted-foreground">Configurações</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 text-muted-foreground">Usuários e Permissões</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Convidar Usuário</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <Badge className="mb-2" variant="outline">Configurações da Conta</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Convidar Novo Usuário</h1>
        <p className="text-muted-foreground max-w-3xl">
          Envie um convite por e-mail para permitir que um novo usuário acesse seu restaurante no Rook System com o nível de permissão adequado.
        </p>
      </div>

      {/* Alerta informativo */}
      <Alert className="mb-6 border-blue-200 bg-blue-50">
        <InfoIcon className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-800">Sobre convites de usuários</AlertTitle>
        <AlertDescription className="text-blue-700">
          O usuário convidado receberá um e-mail com um link de ativação válido por 48 horas. Após a ativação, 
          ele terá acesso às funcionalidades de acordo com o nível de permissão selecionado.
        </AlertDescription>
      </Alert>

      {/* Formulário de convite */}
      <Card>
        <CardHeader>
          <CardTitle>Informações do Convite</CardTitle>
          <CardDescription>
            Preencha os dados do usuário que você deseja convidar para o sistema.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail*</Label>
              <Input id="email" placeholder="exemplo@email.com" />
              <p className="text-sm text-muted-foreground">
                Um link de ativação será enviado para este endereço de e-mail.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Nome (opcional)</Label>
              <Input id="name" placeholder="Nome do usuário" />
              <p className="text-sm text-muted-foreground">
                Se fornecido, será usado para personalizar o convite.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="access-level">Nível de Acesso*</Label>
              <Select>
                <SelectTrigger id="access-level">
                  <SelectValue placeholder="Selecione um nível de acesso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrador</SelectItem>
                  <SelectItem value="manager">Gerente</SelectItem>
                  <SelectItem value="buyer">Comprador</SelectItem>
                  <SelectItem value="accountant">Contador</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Detalhes dos níveis de acesso */}
            <div className="space-y-3">
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

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem Personalizada (opcional)</Label>
              <Textarea 
                id="message" 
                placeholder="Escreva uma mensagem personalizada para o convite..."
                className="min-h-[120px]"
              />
              <p className="text-sm text-muted-foreground">
                Esta mensagem será incluída no e-mail de convite.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" className="gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Voltar
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
            <MailIcon className="h-4 w-4" />
            Enviar Convite
          </Button>
        </CardFooter>
      </Card>

      {/* Alerta de segurança */}
      <Alert className="mt-6 border-amber-200 bg-amber-50">
        <InfoIcon className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">Dica de segurança</AlertTitle>
        <AlertDescription className="text-amber-700">
          Conceda aos usuários apenas o nível de acesso necessário para suas funções. 
          O princípio do menor privilégio ajuda a proteger seus dados e operações.
        </AlertDescription>
      </Alert>
    </div>
  );
}