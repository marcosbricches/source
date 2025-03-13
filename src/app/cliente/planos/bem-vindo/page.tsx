// app/bem-vindo/page.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, ChevronRightIcon, FastForward, Pause, Play, Rewind, SkipForward } from "lucide-react";
import Link from "next/link";

export default function BemVindoPage() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-8">
        <Badge className="mb-2" variant="outline">Bem-vindo ao Rook System</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Parabéns! Sua assinatura está ativa</h1>
        <p className="text-muted-foreground max-w-2xl">
          Estamos animados por ter você conosco. Assista ao vídeo abaixo para conhecer as principais funcionalidades e começar a usar o sistema.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <Card className="overflow-hidden shadow-lg border-0">
          <div className="aspect-video bg-gray-900 relative">
            {/* Área do vídeo (em um sistema real, seria um iframe ou componente de vídeo) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="h-16 w-16 text-white opacity-50 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
            
            {/* Sobreposição com título do vídeo */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-medium">Como usar o Rook System para otimizar seu restaurante</h3>
              <p className="text-white/80 text-sm mt-1">Duração: 4:32</p>
            </div>
          </div>
          
          <div className="px-6 py-4">
            <Progress value={0} className="h-1.5 w-full mb-4" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <Rewind className="h-4 w-4" />
                </Button>
                <Button size="icon" className="h-10 w-10 rounded-full bg-amber-600 hover:bg-amber-700">
                  <Play className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <FastForward className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center">
                <Button variant="ghost" className="text-xs text-muted-foreground">
                  <SkipForward className="h-4 w-4 mr-1" />
                  Pular Tutorial
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="inicio" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="inicio">Primeiros Passos</TabsTrigger>
          <TabsTrigger value="recursos">Recursos Principais</TabsTrigger>
          <TabsTrigger value="suporte">Suporte</TabsTrigger>
        </TabsList>
        
        <TabsContent value="inicio" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Como começar</CardTitle>
              <CardDescription>
                Siga estes passos para configurar seu restaurante no Rook System
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Configure seu perfil</h3>
                  <p className="text-sm text-muted-foreground">
                    Adicione as informações do seu restaurante, logo e detalhes de contato para personalizar sua experiência.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Cadastre seus produtos</h3>
                  <p className="text-sm text-muted-foreground">
                    Adicione os produtos que seu restaurante utiliza, com preços, fornecedores e quantidades em estoque.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Configure suas metas financeiras</h3>
                  <p className="text-sm text-muted-foreground">
                    Estabeleça metas de faturamento, custos e margem para acompanhar o desempenho do seu negócio.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                Ir para Dashboard <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="recursos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Gestão Financeira</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Acompanhe receitas, despesas e fluxo de caixa com relatórios detalhados.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-xs">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                    <span>Dashboards financeiros</span>
                  </li>
                  <li className="flex items-start text-xs">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                    <span>Análise de custos</span>
                  </li>
                  <li className="flex items-start text-xs">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                    <span>Previsão de faturamento</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Controle de Estoque</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Monitore seus insumos e evite desperdícios ou falta de produtos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-xs">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                    <span>Controle de validade</span>
                  </li>
                  <li className="flex items-start text-xs">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                    <span>Alertas de estoque baixo</span>
                  </li>
                  <li className="flex items-start text-xs">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                    <span>Histórico de movimentação</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Gestão de Compras</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Otimize o processo de compras com fornecedores e acompanhe pedidos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-xs">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                    <span>Cadastro de fornecedores</span>
                  </li>
                  <li className="flex items-start text-xs">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                    <span>Comparativo de preços</span>
                  </li>
                  <li className="flex items-start text-xs">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                    <span>Histórico de compras</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="suporte" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Precisa de ajuda?</CardTitle>
              <CardDescription>
                Nosso time de suporte está pronto para ajudar você a aproveitar ao máximo o Rook System
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium mb-2">Central de Ajuda</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Encontre tutoriais, artigos e respostas para perguntas frequentes.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Acessar Base de Conhecimento</Button>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium mb-2">Suporte Técnico</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Entre em contato com nossa equipe para resolver problemas técnicos.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Abrir Chamado</Button>
                </div>
              </div>
              
              <Alert className="bg-amber-50 border-amber-200">
                <AlertDescription className="text-amber-800 text-sm">
                  Como assinante do Plano Standart, você tem acesso a suporte prioritário por e-mail e chat durante horário comercial.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Separator className="max-w-4xl mx-auto my-10" />
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Pronto para começar?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Explore todas as funcionalidades do Rook System e comece a otimizar a gestão do seu restaurante agora mesmo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-amber-600 hover:bg-amber-700">
            Ir para Dashboard
          </Button>
          <Button variant="outline">
            Configurar Perfil
          </Button>
        </div>
      </div>
    </div>
  );
}