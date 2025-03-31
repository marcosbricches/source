// app/admin/clientes/[id]/page.tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { 
  AlertTriangleIcon, 
  ArrowLeftIcon, 
  EditIcon, 
  PhoneIcon, 
  MailIcon, 
  CalendarIcon, 
  UserIcon, 
  BuildingIcon,
  CreditCardIcon,
  ClockIcon,
  LineChartIcon
} from "lucide-react"

export default function ClienteDetails({ params }: { params: { id: string } }) {
  // Simulação de dados de cliente
  const cliente = {
    id: params.id,
    nome: "Restaurante Sabor & Arte Ltda",
    documento: "12.345.678/0001-90",
    email: "contato@saborarte.com",
    telefone: "(11) 98765-4321",
    plano: "Premium",
    status: "Ativo",
    dataCadastro: "15/02/2025",
    ultimoAcesso: "17/03/2025",
    numeroAcessos: 45,
    socios: [
      {
        nome: "Maria Silva",
        cpf: "123.456.789-00",
        email: "maria@saborarte.com",
        telefone: "(11) 98765-1234"
      },
      {
        nome: "João Santos",
        cpf: "987.654.321-00",
        email: "joao@saborarte.com",
        telefone: "(11) 98765-5678"
      }
    ]
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
          <Button variant="link" className="px-2 font-medium">Detalhes do Cliente</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página com ações */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">Cliente</Badge>
            <span className="text-muted-foreground">/</span>
            <Badge variant="outline">Detalhes</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{cliente.nome}</h1>
          <div className="flex items-center gap-2">
            <Badge className={cliente.status === 'Ativo' ? 'bg-green-500' : 'bg-gray-500'}>
              {cliente.status}
            </Badge>
            <p className="text-muted-foreground">CNPJ: {cliente.documento}</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
          <Button variant="outline" asChild className="gap-2">
            <Link href="/admin/clientes">
              <ArrowLeftIcon className="h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <Button variant="outline" asChild className="gap-2 text-blue-600 border-blue-200 hover:bg-blue-50">
            <Link href={`/admin/clientes/${cliente.id}/editar`}>
              <EditIcon className="h-4 w-4" />
              Editar
            </Link>
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
            <UserIcon className="h-4 w-4" />
            Login Simulado
          </Button>
        </div>
      </div>

      {/* Conteúdo com Tabs */}
      <Tabs defaultValue="informacoes" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="informacoes">Informações Gerais</TabsTrigger>
          <TabsTrigger value="socios">Sócios</TabsTrigger>
          <TabsTrigger value="metricas">Métricas de Uso</TabsTrigger>
        </TabsList>
        
        <TabsContent value="informacoes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BuildingIcon className="h-5 w-5 text-amber-600" />
                  Dados do Cliente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Nome/Razão Social</h3>
                  <p>{cliente.nome}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">CNPJ/CPF</h3>
                  <p>{cliente.documento}</p>
                </div>
                <div className="flex gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">E-mail</h3>
                    <p className="flex items-center gap-1">
                      <MailIcon className="h-4 w-4 text-muted-foreground" />
                      {cliente.email}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Telefone</h3>
                    <p className="flex items-center gap-1">
                      <PhoneIcon className="h-4 w-4 text-muted-foreground" />
                      {cliente.telefone}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CreditCardIcon className="h-5 w-5 text-amber-600" />
                  Dados da Assinatura
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Plano Atual</h3>
                  <p className="font-medium">{cliente.plano}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Status da Conta</h3>
                  <Badge className={cliente.status === 'Ativo' ? 'bg-green-500' : 'bg-gray-500'}>
                    {cliente.status}
                  </Badge>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Data de Cadastro</h3>
                  <p className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    {cliente.dataCadastro}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="socios">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <UserIcon className="h-5 w-5 text-amber-600" />
                Sócios
              </CardTitle>
            </CardHeader>
            <CardContent>
              {cliente.socios.map((socio, index) => (
                <div key={index} className="border-b pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
                  <h3 className="font-medium mb-2">{socio.nome}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">CPF</p>
                      <p>{socio.cpf}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">E-mail</p>
                      <p className="flex items-center gap-1">
                        <MailIcon className="h-4 w-4 text-muted-foreground" />
                        {socio.email}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Telefone</p>
                      <p className="flex items-center gap-1">
                        <PhoneIcon className="h-4 w-4 text-muted-foreground" />
                        {socio.telefone}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="metricas">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-amber-600" />
                  Dados de Acesso
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Último Acesso</h3>
                  <p>{cliente.ultimoAcesso}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Número de Acessos</h3>
                  <p>{cliente.numeroAcessos}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <LineChartIcon className="h-5 w-5 text-amber-600" />
                  Engajamento
                </CardTitle>
              </CardHeader>
              <CardContent className="h-40 flex items-center justify-center border-2 border-dashed border-muted-foreground/20 rounded-md">
                <p className="text-muted-foreground text-sm">Gráfico de engajamento seria exibido aqui</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Alerta contextual */}
      <Alert className="border-amber-200 bg-amber-50">
        <AlertTriangleIcon className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">Login Simulado</AlertTitle>
        <AlertDescription className="text-amber-700">
          Ao realizar o login simulado, você acessará a plataforma como este cliente, podendo visualizar 
          todas as suas informações e funcionalidades disponíveis. Esta ação será registrada no histórico do sistema.
        </AlertDescription>
      </Alert>
    </div>
  )
}