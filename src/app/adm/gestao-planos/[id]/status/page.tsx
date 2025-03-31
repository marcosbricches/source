"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, AlertTriangle } from "lucide-react"

export default function AlterarStatusPlano({ params }: { params: { id: string } }) {
  // Mock data for the plan
  const plano = {
    id: params.id,
    nome: "Plano Premium",
    valorMensal: 199.90,
    status: "Ativo",
    assinantes: 28
  }

  const novoStatus = plano.status === "Ativo" ? "Inativo" : "Ativo"
  const temAssinantes = plano.assinantes > 0
  const acao = plano.status === "Ativo" ? "Desativar" : "Ativar"
  const corTexto = plano.status === "Ativo" ? "text-amber-600" : "text-green-600"
  const corBotao = plano.status === "Ativo" ? "bg-amber-600 hover:bg-amber-700" : "bg-green-600 hover:bg-green-700"

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
          <Button variant="link" className="px-2 font-medium">{acao}</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">Plano</Badge>
          <span className="text-muted-foreground">/</span>
          <Badge variant="outline">ID: {plano.id}</Badge>
        </div>
        <h1 className={`text-3xl font-bold tracking-tight mb-2 ${corTexto} flex items-center gap-2`}>
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          Você está prestes a {acao.toLowerCase()} o plano &quot;{plano.nome}&quot;. 
          {plano.status === "Ativo" 
            ? " Ao desativar, este plano não estará mais disponível para novos clientes." 
            : " Ao ativar, este plano estará disponível para todos os clientes."}
        </p>
      </div>

      <Card className={plano.status === "Ativo" ? "border-amber-200" : "border-green-200"}>
        <CardHeader className={plano.status === "Ativo" ? "bg-amber-50 border-b border-amber-100" : "bg-green-50 border-b border-green-100"}>
          <div className={`flex items-center gap-2 ${corTexto} mb-2`}>
            <CardTitle>Confirmar Alteração de Status</CardTitle>
          </div>
          <CardDescription>
            Revise as informações abaixo antes de confirmar a alteração de status deste plano.
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
              <p className="font-medium">Status Atual</p>
              <Badge className={plano.status === "Ativo" ? "bg-green-500" : "bg-gray-500"}>
                {plano.status}
              </Badge>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <p className="font-medium">Novo Status</p>
              <Badge className={novoStatus === "Ativo" ? "bg-green-500" : "bg-gray-500"}>
                {novoStatus}
              </Badge>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <p className="font-medium">Assinantes</p>
              <p>{plano.assinantes}</p>
            </div>
          </div>
          
          {plano.status === "Ativo" && temAssinantes && (
            <Alert className="border-amber-200 bg-amber-50">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">Atenção</AlertTitle>
              <AlertDescription className="text-amber-700">
                Este plano possui {plano.assinantes} assinantes ativos. Ao desativá-lo, os assinantes atuais 
                continuarão a utilizá-lo normalmente, mas o plano não estará disponível para novos clientes.
                Todos os assinantes receberão uma notificação informando sobre a desativação.
              </AlertDescription>
            </Alert>
          )}
          
          {plano.status === "Inativo" && (
            <Alert className="border-green-200 bg-green-50">
              <AlertTriangle className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">Informação</AlertTitle>
              <AlertDescription className="text-green-700">
                Ao ativar este plano, ele ficará disponível imediatamente para novos assinantes
                na plataforma e será exibido na landing page.
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
          <Button className={`gap-2 ${corBotao}`}>
            Confirmar {acao}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}