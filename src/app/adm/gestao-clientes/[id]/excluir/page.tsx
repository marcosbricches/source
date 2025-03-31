// app/admin/clientes/[id]/excluir/page.tsx
"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { 
  AlertTriangleIcon, 
  ArrowLeftIcon, 
  TrashIcon
} from "lucide-react"

export default function ExcluirCliente({ params }: { params: { id: string } }) {
  const router = useRouter()
  
  // Simulação de dados de cliente
  const cliente = {
    id: params.id,
    nome: "Restaurante Sabor & Arte Ltda",
    documento: "12.345.678/0001-90"
  }
  
  const handleExcluir = () => {
    // Aqui seria implementada a lógica para excluir o cliente
    // Como é apenas um protótipo visual, vamos apenas redirecionar para a lista
    router.push('/admin/clientes')
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
          <Button variant="link" className="px-2 font-medium">Excluir</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">Cliente</Badge>
          <span className="text-muted-foreground">/</span>
          <Badge variant="outline" className="text-red-500 border-red-200">Exclusão</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Excluir Cliente</h1>
        <p className="text-muted-foreground max-w-3xl">
          Você está prestes a excluir permanentemente um cliente do sistema. Esta ação não pode ser desfeita.
        </p>
      </div>

      {/* Conteúdo */}
      <Card className="border-red-200">
        <CardHeader className="border-b">
          <CardTitle className="text-lg flex items-center gap-2 text-red-600">
            <AlertTriangleIcon className="h-5 w-5" />
            Confirmação de Exclusão
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Você está prestes a excluir:</h3>
              <p className="text-xl font-bold">{cliente.nome}</p>
              <p className="text-muted-foreground">CNPJ/CPF: {cliente.documento}</p>
            </div>
            
            <Alert className="border-red-200 bg-red-50">
              <AlertTriangleIcon className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800">Atenção: Ação Irreversível</AlertTitle>
              <AlertDescription className="text-red-700">
                A exclusão removerá todos os dados associados a este cliente, incluindo histórico de uso e 
                configurações personalizadas. Esta ação não pode ser desfeita.
              </AlertDescription>
            </Alert>
            
            <div className="p-4 bg-amber-50 border border-amber-100 rounded-md">
              <h4 className="font-medium text-amber-800 mb-2">Importante:</h4>
              <p className="text-amber-700 text-sm">
                Apenas clientes sem assinaturas ativas ou pendências financeiras podem ser excluídos.
                Se o cliente possuir pendências, primeiro resolva estas questões antes de prosseguir com a exclusão.
              </p>
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
          <Button 
            className="bg-red-600 hover:bg-red-700 gap-2" 
            onClick={handleExcluir}
          >
            <TrashIcon className="h-4 w-4" />
            Excluir Permanentemente
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}