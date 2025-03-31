// app/admin/clientes/novo/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, PlusIcon, SaveIcon, TrashIcon, UserIcon } from "lucide-react"

export default function NovoCliente() {
  const [tipoDocumento, setTipoDocumento] = useState("cnpj")
  const [socios, setSocios] = useState([{ nome: "", cpf: "", email: "", telefone: "" }])
  
  const adicionarSocio = () => {
    setSocios([...socios, { nome: "", cpf: "", email: "", telefone: "" }])
  }
  
  const removerSocio = (index: number) => {
    const novosSocios = [...socios]
    novosSocios.splice(index, 1)
    setSocios(novosSocios)
  }
  
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
          <Button variant="link" className="px-2 font-medium">Novo Cliente</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">Cliente</Badge>
          <span className="text-muted-foreground">/</span>
          <Badge variant="outline">Novo</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Adicionar Novo Cliente</h1>
        <p className="text-muted-foreground max-w-3xl">
          Preencha os campos abaixo para adicionar um novo cliente ao sistema. Campos marcados com * são obrigatórios.
        </p>
      </div>

      {/* Formulário */}
      <form>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Dados do Cliente</CardTitle>
            <CardDescription>
              Informações básicas para cadastro do cliente.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Tipo de Documento */}
            <div className="space-y-3">
              <Label>Tipo de Documento *</Label>
              <RadioGroup 
                defaultValue="cnpj" 
                className="flex flex-row gap-4"
                onValueChange={setTipoDocumento}
                value={tipoDocumento}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cnpj" id="cnpj" />
                  <Label htmlFor="cnpj" className="cursor-pointer">CNPJ (Pessoa Jurídica)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cpf" id="cpf" />
                  <Label htmlFor="cpf" className="cursor-pointer">CPF (Pessoa Física)</Label>
                </div>
              </RadioGroup>
            </div>
            
            {/* Grupo de campos - Identificação */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nomeRazaoSocial">
                  {tipoDocumento === "cnpj" ? "Razão Social *" : "Nome Completo *"}
                </Label>
                <Input 
                  id="nomeRazaoSocial" 
                  placeholder={tipoDocumento === "cnpj" ? "Razão social da empresa" : "Nome completo da pessoa"}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="documento">
                  {tipoDocumento === "cnpj" ? "CNPJ *" : "CPF *"}
                </Label>
                <Input 
                  id="documento" 
                  placeholder={tipoDocumento === "cnpj" ? "00.000.000/0000-00" : "000.000.000-00"}
                />
                <p className="text-xs text-muted-foreground">
                  Formato: {tipoDocumento === "cnpj" ? "00.000.000/0000-00" : "000.000.000-00"}
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
                  placeholder="email@exemplo.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone de Contato Principal *</Label>
                <Input 
                  id="telefone" 
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
                <Select>
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
                      Deixe ativado para permitir acesso imediato à plataforma
                    </p>
                  </div>
                  <Switch id="statusSwitch" defaultChecked={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Sócios (somente para CNPJ) */}
        {tipoDocumento === "cnpj" && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserIcon className="h-5 w-5 text-amber-600" />
                Sócios
              </CardTitle>
              <CardDescription>
                Cadastre os sócios da empresa para facilitar a comunicação e o suporte.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {socios.map((socio, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Sócio {index + 1}</h3>
                    {socios.length > 1 && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removerSocio(index)}
                        type="button"
                      >
                        <TrashIcon className="h-4 w-4 mr-1" />
                        Remover
                      </Button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`socio-nome-${index}`}>Nome Completo *</Label>
                      <Input 
                        id={`socio-nome-${index}`} 
                        placeholder="Nome do sócio"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`socio-cpf-${index}`}>CPF *</Label>
                      <Input 
                        id={`socio-cpf-${index}`} 
                        placeholder="000.000.000-00"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`socio-email-${index}`}>E-mail</Label>
                      <Input 
                        id={`socio-email-${index}`} 
                        type="email"
                        placeholder="email@exemplo.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`socio-telefone-${index}`}>Telefone</Label>
                      <Input 
                        id={`socio-telefone-${index}`} 
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <Button 
                type="button" 
                variant="outline" 
                className="w-full mt-2"
                onClick={adicionarSocio}
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Adicionar Outro Sócio
              </Button>
            </CardContent>
          </Card>
        )}
        
        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" asChild className="gap-2">
            <Link href="/admin/clientes">
              <ArrowLeftIcon className="h-4 w-4" />
              Cancelar
            </Link>
          </Button>
          <Button type="submit" className="bg-amber-600 hover:bg-amber-700 gap-2">
            <SaveIcon className="h-4 w-4" />
            Cadastrar Cliente
          </Button>
        </div>
      </form>
    </div>
  )
}