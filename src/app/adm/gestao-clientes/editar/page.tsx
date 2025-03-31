// app/admin/clientes/[id]/editar/page.tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, SaveIcon } from "lucide-react"

export default function EditarCliente({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8 max-w-5xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" asChild>
            <Link href="/admin/dashboard" className="px-2 text-muted-foreground">Dashboard</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" asChild>
            <Link href="/admin/clientes" className="px-2 text-muted-foreground">Gestão de Clientes</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" asChild>
            <Link href={`/admin/clientes/${params.id}`} className="px-2 text-muted-foreground">Detalhes do Cliente</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Editar</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">Cliente</Badge>
          <span className="text-muted-foreground">/</span>
          <Badge variant="outline">Edição</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Editar Cliente</h1>
        <p className="text-muted-foreground max-w-3xl">
          Atualize as informações do cliente conforme necessário. Campos marcados com * são obrigatórios.
        </p>
      </div>

      {/* Formulário */}
      <Card>
        <CardHeader>
          <CardTitle>Dados do Cliente</CardTitle>
          <CardDescription>
            Informações básicas e contato do cliente.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Grupo de campos - Identificação */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nomeRazaoSocial">Nome/Razão Social *</Label>
              <Input 
                id="nomeRazaoSocial" 
                defaultValue="Restaurante Sabor & Arte Ltda" 
                placeholder="Nome completo ou razão social"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cnpjCpf">CNPJ/CPF *</Label>
              <Input 
                id="cnpjCpf" 
                defaultValue="12.345.678/0001-90" 
                placeholder="00.000.000/0000-00 ou 000.000.000-00"
              />
              <p className="text-xs text-muted-foreground">
                Formato: 00.000.000/0000-00 (CNPJ) ou 000.000.000-00 (CPF)
              </p>
            </div>
          </div>
          
          {/* Grupo de campos - Contato */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail de Contato Principal *</Label>
              <Input 
                id="email" 
                type="email" 
                defaultValue="contato@saborarte.com" 
                placeholder="email@exemplo.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone de Contato Principal *</Label>
              <Input 
                id="telefone" 
                defaultValue="(11) 98765-4321" 
                placeholder="(00) 00000-0000"
              />
              <p className="text-xs text-muted-foreground">
                Formato: (00) 00000-0000
              </p>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          {/* Grupo de campos - Assinatura */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="plano">Plano Assinado *</Label>
              <Select defaultValue="premium">
                <SelectTrigger id="plano">
                  <SelectValue placeholder="Selecione um plano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basico">Básico</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="status">Status da Conta</Label>
              <div className="flex items-center justify-between mt-4">
                <div className="space-y-0.5">
                  <Label htmlFor="statusSwitch">Conta Ativa</Label>
                  <p className="text-xs text-muted-foreground">
                    Desative para bloquear o acesso do cliente à plataforma
                  </p>
                </div>
                <Switch id="statusSwitch" defaultChecked={true} />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" asChild className="gap-2">
            <Link href={`/admin/clientes/${params.id}`}>
              <ArrowLeftIcon className="h-4 w-4" />
              Cancelar
            </Link>
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