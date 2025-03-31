// app/admin/clientes/[id]/status/page.tsx
"use client"

import Link from "next/link"
import { useRouter } from "next/navigation" 
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { 
  AlertTriangleIcon, 
  ArrowLeftIcon, 
  CheckIcon,
  XIcon
} from "lucide-react"
import { useState } from "react"

export default function AlterarStatusCliente({ params }: { params: { id: string } }) {
  const router = useRouter()
  
  // Simulação de dados de cliente
  const cliente = {
    id: params.id,
    nome: "Restaurante Sabor & Arte Ltda",
    documento: "12.345.678/0001-90",
    status: "Ativo"
  }
  
  const [novoStatus, setNovoStatus] = useState(cliente.status === "Ativo")
  
  const handleSalvar = () => {
    // Aqui seria implementada a lógica para alterar o status do cliente
    // Como é apenas um protótipo visual, vamos apenas redirecionar para a lista
    router.push(`/admin/clientes/${params.id}`)
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
          <Button variant="link" asChild>
            <Link href={`/admin/clientes/${params.id}`} className="px-2 text-muted-foreground">Detalhes do Cliente</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Alterar Status</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">Cliente</Badge>
          <span className="text-muted-foreground">/</span>
          <Badge variant="outline" className="text-amber-500 border-amber-200">Status</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Alterar Status do Cliente</h1>
        <p className="text-muted-foreground max-w-3xl">
          Altere o status do cliente entre Ativo e Inativo. Esta ação afeta o acesso do cliente à plataforma.
        </p>
      </div>

      {/* Conteúdo */}
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-lg flex items-center gap-2 text-amber-600">
            <AlertTriangleIcon className="h-5 w-5" />
            Alteração de Status
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Cliente:</h3>
              <p className="text-xl font-bold">{cliente.nome}</p>
              <p className="text-muted-foreground">CNPJ/CPF: {cliente.documento}</p>
              <div className="mt-2 flex items-center gap-2">
                <span>Status Atual:</span>
                <Badge className={cliente.status === 'Ativo' ? 'bg-green-500' : 'bg-gray-500'}>
                  {cliente.status}
                </Badge>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="statusSwitch" className="text-base font-medium">Status da Conta</Label>
                  <p className="text-sm text-muted-foreground">
                    {novoStatus 
                      ? "Cliente terá acesso ativo à plataforma" 
                      : "Cliente não poderá acessar a plataforma"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${!novoStatus ? "font-medium" : "text-muted-foreground"}`}>Inativo</span>
                  <Switch 
                    id="statusSwitch" 
                    checked={novoStatus} 
                    onCheckedChange={setNovoStatus} 
                  />
                  <span className={`text-sm ${novoStatus ? "font-medium" : "text-muted-foreground"}`}>Ativo</span>
                </div>
              </div>
            </div>
            
            {!novoStatus && cliente.status === "Ativo" && (
              <Alert className="border-amber-200 bg-amber-50">
                <AlertTriangleIcon className="h-4 w-4 text-amber-600" />
                <AlertTitle className="text-amber-800">Importante</AlertTitle>
                <AlertDescription className="text-amber-700">
                  Ao inativar este cliente, a assinatura será automaticamente suspensa.
                  Os dados serão preservados e poderão ser restaurados caso a conta seja reativada no futuro.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" asChild className="gap-2">
            <Link href={`/admin/clientes/${params.id}`}>
              <ArrowLeftIcon className="h-4 w-4" />
              Cancelar
            </Link>
          </Button>
          <Button 
            className="bg-amber-600 hover:bg-amber-700 gap-2" 
            onClick={handleSalvar}
          >
            {novoStatus ? (
              <>
                <CheckIcon className="h-4 w-4" />
                Ativar Cliente
              </>
            ) : (
              <>
                <XIcon className="h-4 w-4" />
                Inativar Cliente
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}