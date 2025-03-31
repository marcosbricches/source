// app/admin/clientes/[id]/login-simulado/page.tsx
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
  UserIcon,
  ClockIcon,
  ShieldIcon,
} from "lucide-react"

export default function LoginSimulado({ params }: { params: { id: string } }) {
  const router = useRouter()
  
  // Simulação de dados de cliente
  const cliente = {
    id: params.id,
    nome: "Restaurante Sabor & Arte Ltda",
    documento: "12.345.678/0001-90",
    plano: "Premium"
  }
  
  const handleIniciarLoginSimulado = () => {
    // Aqui seria implementada a lógica para o login simulado
    // Como é apenas um protótipo visual, vamos apenas redirecionar para uma URL fictícia
    window.alert("Em um sistema real, você seria redirecionado para a visão do cliente")
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
          <Button variant="link" className="px-2 font-medium">Login Simulado</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">Cliente</Badge>
          <span className="text-muted-foreground">/</span>
          <Badge variant="outline" className="text-blue-500 border-blue-200">Login Simulado</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Iniciar Login Simulado</h1>
        <p className="text-muted-foreground max-w-3xl">
          Acesse a plataforma como se fosse este cliente para oferecer melhor suporte ou entender sua experiência.
        </p>
      </div>

      {/* Conteúdo */}
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-lg flex items-center gap-2 text-blue-600">
            <UserIcon className="h-5 w-5" />
            Confirmar Login Simulado
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Você irá acessar como:</h3>
              <p className="text-xl font-bold">{cliente.nome}</p>
              <p className="text-muted-foreground">CNPJ/CPF: {cliente.documento}</p>
              <p className="text-muted-foreground">Plano: {cliente.plano}</p>
            </div>
            
            <Alert className="border-blue-200 bg-blue-50">
              <AlertTriangleIcon className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-800">Informação Importante</AlertTitle>
              <AlertDescription className="text-blue-700">
                Durante o login simulado, você terá acesso à plataforma exatamente como o cliente a vê,
                com todas as suas configurações, dados e funcionalidades disponíveis para o plano dele.
              </AlertDescription>
            </Alert>
            
            <div className="space-y-4">
              <div className="p-3 flex items-start gap-3 border rounded-md">
                <ClockIcon className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Tempo de Sessão</h4>
                  <p className="text-sm text-muted-foreground">
                    A sessão simulada tem duração de 30 minutos e será automaticamente encerrada após este período.
                  </p>
                </div>
              </div>
              
              <div className="p-3 flex items-start gap-3 border rounded-md">
                <ShieldIcon className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Registro de Atividade</h4>
                  <p className="text-sm text-muted-foreground">
                    Todas as ações realizadas durante o login simulado serão registradas no histórico
                    de auditoria do sistema com a identificação do seu usuário.
                  </p>
                </div>
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
          <Button 
            className="bg-blue-600 hover:bg-blue-700 gap-2" 
            onClick={handleIniciarLoginSimulado}
          >
            <UserIcon className="h-4 w-4" />
            Iniciar Login Simulado
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}