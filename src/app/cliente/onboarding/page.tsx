// app/onboarding/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Video, FileText, Mail } from "lucide-react";

export default function OnboardingWelcome() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <Badge className="mb-2" variant="outline">Onboarding</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Bem-vindo ao Rook System</h1>
        <p className="text-muted-foreground max-w-3xl">
          Vamos guiar você pelos primeiros passos para configurar seu restaurante e começar a utilizar todas as funcionalidades do sistema.
        </p>
      </div>

      {/* Progresso do Onboarding */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1">
          <Progress value={0} className="h-2" />
        </div>
        <span className="text-sm font-medium">0% Completo</span>
      </div>

      {/* Card de boas-vindas */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Conhecendo o Rook System</CardTitle>
          <CardDescription>
            Um sistema completo para planejamento orçamentário e gestão operacional de restaurantes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4 border rounded-lg">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-medium mb-2">Planejamento Orçamentário</h3>
              <p className="text-sm text-muted-foreground">
                Configure metas financeiras e acompanhe indicadores em tempo real.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 border rounded-lg">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-medium mb-2">Gestão de Compras</h3>
              <p className="text-sm text-muted-foreground">
                Automatize o processo de compras e controle de estoque.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 border rounded-lg">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-medium mb-2">Relatórios e Dashboards</h3>
              <p className="text-sm text-muted-foreground">
                Visualize dados importantes para tomar decisões estratégicas.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700">
            Iniciar Tour Guiado
          </Button>
        </CardFooter>
      </Card>

      {/* Próximos passos */}
      <h2 className="text-2xl font-bold tracking-tight mb-4">Próximos Passos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="font-medium text-amber-600">1</span>
              </div>
              <CardTitle className="text-lg">Configuração Inicial</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Configure os dados básicos do seu restaurante, informações fiscais e preferências do sistema.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-sm">Dados do restaurante e CNPJ</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-sm">Configurações fiscais</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-sm">Preferências de sistema</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2">
              Começar <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="font-medium text-amber-600">2</span>
              </div>
              <CardTitle className="text-lg">Planejamento Orçamentário</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Configure seu primeiro planejamento orçamentário, estabeleça metas financeiras e acompanhe resultados.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-sm">Definição de categorias de receita e despesa</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-sm">Estabelecimento de metas mensais</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-sm">Configuração de alertas e notificações</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2">
              Começar <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Recursos de Aprendizado */}
      <h2 className="text-2xl font-bold tracking-tight mb-4">Recursos de Aprendizado</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <Video className="h-5 w-5 text-amber-600" />
            <CardTitle className="text-base">Vídeos Tutoriais</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Assista vídeos explicativos sobre as principais funcionalidades do sistema.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">Ver Vídeos</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <FileText className="h-5 w-5 text-amber-600" />
            <CardTitle className="text-base">Documentação</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Guias detalhados e documentação técnica para consulta.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">Acessar Docs</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <Mail className="h-5 w-5 text-amber-600" />
            <CardTitle className="text-base">Suporte</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Entre em contato com nossa equipe de suporte para tirar dúvidas.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">Contatar Suporte</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-8">
        <Button className="bg-amber-600 hover:bg-amber-700 flex items-center gap-2">
          Iniciar Onboarding <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}