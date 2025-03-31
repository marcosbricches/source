"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, AlertTriangle, Trash2 } from "lucide-react"

export default function ExcluirPlano({ params }: { params: { id: string } }) {
  // Mock data for the plan
  const plano = {
    id: params.id,
    nome: "Plano Premium",
    valorMensal: 199.90,
    status: "Ativo",
    assinantes: 28
  }

  const temAssinantes = plano.assinantes > 0

  return (
    <div className="container py-8 max-w-2xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 text-muted-foreground" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 text-muted-foreground" asChild>
            <Link href="/gestao-planos">Gestão de Planos</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 text-muted-foreground" asChild>
            <Link href={`/gestao-planos/${plano.id}`}>Detalhes do Plano</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Excluir</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">Plano</Badge>
          <span className="text-muted-foreground">/</span>
          <Badge variant="outline">ID: {plano.id}</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-red-600 flex items-center gap-2">
          <Trash2 className="h-6 w-6" />
          Excluir Plano
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          Você está prestes a excluir permanentemente o plano &quot;{plano.nome}&quot;. Esta ação não pode ser desfeita.
        </p>
      </div>

      <Card className="border-red-200">
        <CardHeader className="bg-red-50 border-b border-red-100">
          <div className="flex items-center gap-2 text-red-600 mb-2">
            <AlertTriangle className="h-5 w-5" />
            <CardTitle>Confirmar Exclusão</CardTitle>
          </div>
          <CardDescription>
            Revise as informações abaixo antes de confirmar a exclusão deste plano.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <p className="font-medium">Nome do Plano</p>
              <p>{plano.nome}</p>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <p className="font-medium">Valor Mensal</p>
              <p>R$ {plano.valorMensal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <p className="font-medium">Status</p>
              <Badge className={plano.status === "Ativo" ? "bg-green-500" : "bg-gray-500"}>
                {plano.status}
              </Badge>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <p className="font-medium">Assinantes</p>
              <p>{plano.assinantes}</p>
            </div>
          </div>
          
          {temAssinantes ? (
            <Alert className="border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800">Não é possível excluir este plano</AlertTitle>
              <AlertDescription className="text-red-700">
                Este plano possui {plano.assinantes} assinantes ativos. Não é possível excluir planos com assinaturas ativas.
                Você deve primeiro transferir ou cancelar todas as assinaturas antes de excluir o plano.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert className="border-amber-200 bg-amber-50">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">Atenção</AlertTitle>
              <AlertDescription className="text-amber-700">
                Ao excluir este plano, todos os dados históricos e configurações associados serão permanentemente removidos.
                Esta ação não pode ser desfeita.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" className="gap-2" asChild>
            <Link href={`/gestao-planos/${plano.id}`}>
              <ArrowLeft className="h-4 w-4" />
              Cancelar
            </Link>
          </Button>
          <Button 
            className={`gap-2 ${temAssinantes ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
            disabled={temAssinantes}
          >
            <Trash2 className="h-4 w-4" />
            Confirmar Exclusão
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}