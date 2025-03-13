// app/onboarding/conclusao/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ChevronRight, BookOpen, Zap, LineChart, Coffee } from "lucide-react";

export default function ConclusaoOnboarding() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <Badge className="mb-2" variant="outline">Onboarding</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Configuração Concluída!</h1>
        <p className="text-muted-foreground max-w-3xl">
          Parabéns! Você completou todas as etapas de configuração inicial do Rook System. Seu restaurante está pronto para começar.
        </p>
      </div>

      {/* Progresso do Onboarding */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1">
          <Progress value={100} className="h-2" />
        </div>
        <span className="text-sm font-medium text-green-600">100% Completo</span>
      </div>

      {/* Card de Sucesso */}
      <Card className="mb-8 border-green-100">
        <CardHeader className="bg-green-50 border-b border-green-100">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle>Onboarding Concluído com Sucesso</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-4">Resumo das Configurações</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Informações Básicas</h4>
                    <p className="text-sm text-muted-foreground">
                      Dados do restaurante, contato e endereço configurados com sucesso.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Categorias e Serviços</h4>
                    <p className="text-sm text-muted-foreground">
                      Tipo de restaurante, culinária e serviços oferecidos definidos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Configurações Fiscais</h4>
                    <p className="text-sm text-muted-foreground">
                      Regime tributário e informações fiscais configurados corretamente.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Personalização Visual</h4>
                    <p className="text-sm text-muted-foreground">
                      Logo e cores da marca aplicados ao sistema.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-4">Seu Restaurante na Rook</h3>
              
              <div className="border rounded-lg p-5 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-14 w-14 rounded-lg bg-white border flex items-center justify-center">
                    <span className="text-amber-600 font-medium">LOGO</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Nome do Restaurante</h3>
                    <p className="text-sm text-muted-foreground">Restaurante à la Carte • Culinária Brasileira</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Localização:</span>
                    <p className="font-medium">São Paulo, SP</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Tipo:</span>
                    <p className="font-medium">À la Carte</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Capacidade:</span>
                    <p className="font-medium">80 lugares</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Regime:</span>
                    <p className="font-medium">Simples Nacional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Próximos Passos */}
      <h2 className="text-2xl font-bold tracking-tight mb-6">Próximos Passos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-amber-600" />
              </div>
              <CardTitle className="text-lg">Crie seu Primeiro Planejamento</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Configure seu planejamento orçamentário mensal e defina metas financeiras para seu restaurante.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-amber-600 mt-0.5" />
                <span className="text-sm">Configure categorias de receitas e despesas</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-amber-600 mt-0.5" />
                <span className="text-sm">Defina metas de faturamento e CMV</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-amber-600 mt-0.5" />
                <span className="text-sm">Acompanhe indicadores financeiros-chave</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-2">
            <Button className="w-full bg-amber-600 hover:bg-amber-700">
              Iniciar Planejamento
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                <Zap className="h-4 w-4 text-amber-600" />
              </div>
              <CardTitle className="text-lg">Cadastre seus Produtos</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Cadastre os produtos do seu cardápio e crie fichas técnicas para controle preciso de custos.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-amber-600 mt-0.5" />
                <span className="text-sm">Cadastre ingredientes e fornecedores</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-amber-600 mt-0.5" />
                <span className="text-sm">Crie fichas técnicas com precificação</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-amber-600 mt-0.5" />
                <span className="text-sm">Configure seu estoque inicial</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-2">
            <Button className="w-full bg-amber-600 hover:bg-amber-700">
              Cadastrar Produtos
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Recursos Extras */}
      <h2 className="text-2xl font-bold tracking-tight mb-6">Recursos para Explorar</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <LineChart className="h-5 w-5 text-amber-600" />
            <CardTitle className="text-base">Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Visualize seus principais indicadores em tempo real.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">Acessar Dashboard</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <Coffee className="h-5 w-5 text-amber-600" />
            <CardTitle className="text-base">CMV por Produto</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Analise o Custo de Mercadoria Vendida de cada produto.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">Analisar CMV</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <BookOpen className="h-5 w-5 text-amber-600" />
            <CardTitle className="text-base">Centro de Ajuda</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Acesse tutoriais e materiais de treinamento.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">Ver Tutoriais</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Call to Action Final */}
      <div className="flex flex-col items-center text-center p-8 mt-6 bg-amber-50 border border-amber-100 rounded-lg">
        <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-amber-600" />
        </div>
        <h2 className="text-xl font-bold mb-2">Você está pronto para começar!</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl">
          Seu restaurante está configurado e pronto para utilizar todas as funcionalidades do Rook System. 
          Explore o sistema e comece a otimizar a gestão do seu negócio agora mesmo.
        </p>
        <Button className="bg-amber-600 hover:bg-amber-700 px-8">
          Ir para o Dashboard
        </Button>
      </div>
    </div>
  );
}