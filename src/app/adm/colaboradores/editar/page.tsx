// app/dashboard/colaboradores/[id]/editar/page.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeftIcon, SaveIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function EditarColaboradorPage() {
  // Mock data para o protótipo
  const colaborador = {
    id: 1,
    nome: "João Silva",
    email: "joao.silva@rookystem.com",
    telefone: "(11) 98765-4321",
    cargo: "supervisor-financeiro",
    nivel: "supervisor",
    status: "ativo"
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
          <Button variant="link" className="px-2 text-muted-foreground">{colaborador.nome}</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Editar</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">Administração</Badge>
          <span className="text-muted-foreground">/</span>
          <Badge variant="outline">Colaborador</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Editar Colaborador</h1>
        <p className="text-muted-foreground max-w-3xl">
          Atualize os dados do colaborador conforme necessário.
        </p>
      </div>

      {/* Formulário */}
      <Card>
        <CardHeader>
          <CardTitle>Dados do Colaborador</CardTitle>
          <CardDescription>
            Campos obrigatórios estão marcados com * (asterisco).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Dados Pessoais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome do Colaborador *</Label>
              <Input id="nome" placeholder="Nome completo" defaultValue={colaborador.nome} required />
              <p className="text-xs text-muted-foreground">
                Mínimo de 3 caracteres.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input id="email" type="email" placeholder="exemplo@rookystem.com" defaultValue={colaborador.email} required />
              <p className="text-xs text-muted-foreground">
                O e-mail deve ser único no sistema.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" placeholder="(99) 99999-9999" defaultValue={colaborador.telefone} />
              <p className="text-xs text-muted-foreground">
                Formato: (99) 99999-9999
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cargo">Cargo *</Label>
              <Select defaultValue={colaborador.cargo} required>
                <SelectTrigger id="cargo">
                  <SelectValue placeholder="Selecione o cargo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="supervisor-financeiro">Supervisor Financeiro</SelectItem>
                  <SelectItem value="cobranca">Cobrança</SelectItem>
                  <SelectItem value="sucesso-cliente">Sucesso do Cliente (CS)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                O cargo define as responsabilidades do colaborador.
              </p>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          {/* Acesso ao Sistema */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nivel">Nível de Acesso *</Label>
              <Select defaultValue={colaborador.nivel} required>
                <SelectTrigger id="nivel">
                  <SelectValue placeholder="Selecione o nível" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="master">Master</SelectItem>
                  <SelectItem value="administrador">Administrador</SelectItem>
                  <SelectItem value="supervisor">Supervisor</SelectItem>
                  <SelectItem value="operacional">Operacional</SelectItem>
                  <SelectItem value="visualizacao">Visualização</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Determina as permissões dentro do sistema.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="status">Status *</Label>
              <Select defaultValue={colaborador.status} required>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Selecione o status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ativo">Ativo</SelectItem>
                  <SelectItem value="inativo">Inativo</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Colaboradores inativos não podem acessar o sistema.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="senha">Nova Senha</Label>
              <Input id="senha" type="password" placeholder="Deixe em branco para manter a atual" />
              <p className="text-xs text-muted-foreground">
                A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmar-senha">Confirmar Nova Senha</Label>
              <Input id="confirmar-senha" type="password" placeholder="Confirme a nova senha" />
              <p className="text-xs text-muted-foreground">
                Repita a senha digitada acima.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" className="gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Cancelar
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
            <SaveIcon className="h-4 w-4" />
            Salvar Alterações
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}