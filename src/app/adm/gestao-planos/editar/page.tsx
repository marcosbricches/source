"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Save, AlertTriangle } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export default function EditarPlano({ params }: { params: { id: string } }) {
  // Mock data for the plan
  const plano = {
    id: params.id,
    nome: "Plano Premium",
    descricao: "Plano completo com todas as funcionalidades avançadas para gestão de restaurantes de médio porte.",
    valorMensal: 199.90,
    valorAnual: 1999.90,
    status: "Ativo",
    dataInicio: "2025-01-01",
    dataTermino: "",
    periodoFreemium: 15,
    limitacaoFreemium: "Acesso limitado aos relatórios avançados e apenas 3 usuários simultâneos durante o período Freemium.",
    assinantes: 28,
    recursos: [
      "dashboard",
      "relatorios",
      "integracoes",
      "estoque",
      "financeiro",
      "compras",
      "fornecedores",
      "usuarios"
    ]
  }

  const recursos = [
    { id: "dashboard", label: "Dashboard de Métricas" },
    { id: "relatorios", label: "Relatórios Avançados" },
    { id: "integracoes", label: "Integrações com PDV" },
    { id: "estoque", label: "Controle de Estoque" },
    { id: "financeiro", label: "Gestão Financeira" },
    { id: "compras", label: "Planejamento de Compras" },
    { id: "fornecedores", label: "Gestão de Fornecedores" },
    { id: "usuarios", label: "Usuários Ilimitados" },
  ]

  const temAssinantes = plano.assinantes > 0

  return (
    <div className="container py-8 max-w-5xl mx-auto">
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
          <Button variant="link" className="px-2 font-medium">Editar</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">Plano</Badge>
          <span className="text-muted-foreground">/</span>
          <Badge variant="outline">ID: {plano.id}</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Editar Plano</h1>
        <p className="text-muted-foreground max-w-3xl">
          Atualize as informações do plano &quot;{plano.nome}&quot; conforme necessário.
        </p>
      </div>

      {temAssinantes && (
        <Alert className="mb-6 border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-800">Atenção</AlertTitle>
          <AlertDescription className="text-amber-700">
            Este plano possui {plano.assinantes} assinantes ativos. Alterações nos preços ou recursos podem afetar esses usuários.
            Todos os assinantes serão notificados sobre as mudanças realizadas.
          </AlertDescription>
        </Alert>
      )}

      {/* Formulário */}
      <Card>
        <CardHeader>
          <CardTitle>Informações do Plano</CardTitle>
          <CardDescription>
            Preencha os campos obrigatórios (*) para atualizar as informações do plano.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Informações Básicas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome do Plano *</Label>
              <Input id="nome" defaultValue={plano.nome} />
              <p className="text-sm text-muted-foreground">
                Mínimo de 3 caracteres, deve ser único no sistema.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status *</Label>
              <Select defaultValue={plano.status.toLowerCase()}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ativo">Ativo</SelectItem>
                  <SelectItem value="inativo">Inativo</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Apenas planos ativos serão exibidos para clientes.
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="descricao">Descrição do Plano *</Label>
            <Textarea 
              id="descricao" 
              defaultValue={plano.descricao}
              className="min-h-[100px]"
            />
            <p className="text-sm text-muted-foreground">
              Limite de 500 caracteres. Descreva brevemente os benefícios do plano.
            </p>
          </div>
          
          <Separator className="my-4" />
          
          {/* Preços e Datas */}
          <CardTitle className="text-lg mb-4">Preços e Período</CardTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="valorMensal">Valor Mensal (R$) *</Label>
              <Input 
                id="valorMensal" 
                defaultValue={plano.valorMensal} 
                type="number" 
                step="0.01" 
                min="0" 
              />
              <p className="text-sm text-muted-foreground">
                Valor deve ser maior que 0.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="valorAnual">Valor Anual (R$)</Label>
              <Input 
                id="valorAnual" 
                defaultValue={plano.valorAnual} 
                type="number" 
                step="0.01" 
                min="0" 
              />
              <p className="text-sm text-muted-foreground">
                Opcional. Deve ser maior que 0 e menor que 12x o valor mensal.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="dataInicio">Data de Início *</Label>
              <Input 
                id="dataInicio" 
                type="date" 
                defaultValue={plano.dataInicio} 
              />
              <p className="text-sm text-muted-foreground">
                Data em que o plano estará disponível.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dataTermino">Data de Término</Label>
              <Input 
                id="dataTermino" 
                type="date" 
                defaultValue={plano.dataTermino} 
              />
              <p className="text-sm text-muted-foreground">
                Opcional. Data em que o plano será automaticamente desativado.
              </p>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          {/* Freemium */}
          <CardTitle className="text-lg mb-4">Configuração Freemium</CardTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="periodoFreemium">Período Freemium (Dias)</Label>
              <Input 
                id="periodoFreemium" 
                type="number" 
                min="0" 
                defaultValue={plano.periodoFreemium} 
              />
              <p className="text-sm text-muted-foreground">
                Número de dias para acesso gratuito antes da cobrança. Deixe 0 para desativar.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="limitacaoFreemium">Limitação no Freemium</Label>
              <Textarea 
                id="limitacaoFreemium" 
                defaultValue={plano.limitacaoFreemium}
                className="min-h-[100px]"
              />
              <p className="text-sm text-muted-foreground">
                Descreva as funcionalidades limitadas durante o período Freemium.
              </p>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          {/* Recursos */}
          <CardTitle className="text-lg mb-4">Recursos Incluídos *</CardTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recursos.map((recurso) => (
              <div key={recurso.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={recurso.id} 
                  defaultChecked={plano.recursos.includes(recurso.id)} 
                />
                <Label htmlFor={recurso.id} className="cursor-pointer">{recurso.label}</Label>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" className="gap-2" asChild>
            <Link href={`/gestao-planos/${plano.id}`}>
              <ArrowLeft className="h-4 w-4" />
              Cancelar
            </Link>
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
            <Save className="h-4 w-4" />
            Salvar Alterações
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}