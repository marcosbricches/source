// app/page.tsx

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight, Calculator, Check, Package,
  MessageSquare, Star, Building, PieChart,
  BarChart, Lock, Trash2, Users
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Aprimorada */}
      <section className="relative min-h-[90vh]">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-background/80 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 mx-auto px-4 pt-32">
          <Badge variant="secondary" className="mb-6 hover:bg-secondary/80 transition-colors">
            Software Especializado para Restaurantes
          </Badge>
          
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            Transforme seu restaurante com <br />
            <span className="text-primary">gestão inteligente</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-[600px]">
            Planejamento orçamentário, gestão operacional e controle financeiro 
            em uma única plataforma. Automatize processos e tome decisões baseadas em dados.
          </p>
          
          <div className="flex gap-4">
            <Button size="lg" className="group">
              Teste Grátis por 14 dias
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg">
              Agendar Demonstração
            </Button>
          </div>

          <div className="mt-12 flex gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm">Configuração assistida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Desafios - Aprimorada */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Desafios
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Os desafios que você enfrenta</h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Entendemos as dificuldades diárias da gestão de restaurantes e 
              desenvolvemos soluções específicas para cada problema
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="mb-2">Controle Financeiro Manual</CardTitle>
                <CardDescription className="text-base">
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Horas perdidas em planilhas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Dificuldade no cálculo de custos
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Falta de precisão nos dados
                    </li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
    <CardHeader>
      <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Package className="w-6 h-6 text-primary" />
      </div>
      <CardTitle className="mb-2">Gestão de Estoque Complexa</CardTitle>
      <CardDescription className="text-base">
        <ul className="space-y-2 mt-2">
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Perdas por vencimento de produtos
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Compras emergenciais frequentes
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Falta de rastreabilidade
          </li>
        </ul>
      </CardDescription>
    </CardHeader>
  </Card>
  <Card className="group hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
    <CardHeader>
      <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <PieChart className="w-6 h-6 text-primary" />
      </div>
      <CardTitle className="mb-2">Precificação Imprecisa</CardTitle>
      <CardDescription className="text-base">
        <ul className="space-y-2 mt-2">
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Margens de lucro inconsistentes
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Dificuldade em ajustar preços
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Rentabilidade comprometida
          </li>
        </ul>
      </CardDescription>
    </CardHeader>
  </Card>
  <Card className="group hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
    <CardHeader>
      <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Building className="w-6 h-6 text-primary" />
      </div>
      <CardTitle className="mb-2">Gestão de Fornecedores</CardTitle>
      <CardDescription className="text-base">
        <ul className="space-y-2 mt-2">
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Falta de comparação de preços
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Atrasos nas entregas
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Contratos mal gerenciados
          </li>
        </ul>
      </CardDescription>
    </CardHeader>
  </Card>
  <Card className="group hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
    <CardHeader>
      <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Users className="w-6 h-6 text-primary" />
      </div>
      <CardTitle className="mb-2">Gestão de Equipe</CardTitle>
      <CardDescription className="text-base">
        <ul className="space-y-2 mt-2">
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Escalas de trabalho confusas
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Produtividade não mensurada
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Alta rotatividade
          </li>
        </ul>
      </CardDescription>
    </CardHeader>
  </Card>
  <Card className="group hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
    <CardHeader>
      <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Trash2 className="w-6 h-6 text-primary" />
      </div>
      <CardTitle className="mb-2">Controle de Desperdício</CardTitle>
      <CardDescription className="text-base">
        <ul className="space-y-2 mt-2">
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Sobras não controladas
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Porções mal dimensionadas
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            Prejuízos não mensurados
          </li>
        </ul>
      </CardDescription>
    </CardHeader>
  </Card>
            {/* Cards similares para outros desafios */}
          </div>
        </div>
      </section>

      {/* Seção Como Transformamos - Nova */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Nossa Solução
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Como transformamos seu negócio</h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Automatização inteligente e insights poderosos para 
              impulsionar seus resultados
            </p>
          </div>

          <div className="gap-12">
            <div className="space-y-8">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <PieChart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Planejamento Orçamentário</CardTitle>
                      <CardDescription>
                        Previsões precisas e controle total sobre receitas e despesas
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="mb-2">Gestão de Estoque Inteligente</CardTitle>
                    <CardDescription>
                      Controle automatizado de entrada e saída, previsão de demanda e alertas de reposição
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
    <CardHeader>
      <div className="flex gap-4">
        <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
          <BarChart className="w-6 h-6 text-primary" />
        </div>
        <div>
          <CardTitle className="mb-2">Análise Financeira Detalhada</CardTitle>
          <CardDescription>
            Relatórios personalizados, indicadores em tempo real e previsões baseadas em dados
          </CardDescription>
        </div>
      </div>
    </CardHeader>
  </Card>

              {/* Mais cards de funcionalidades */}
            </div>

            
          </div>
        </div>
      </section>

      {/* Seção Depoimentos - Nova */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Casos de Sucesso 
            </Badge>
            <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Veja como o Rook System tem ajudado restaurantes a alcançarem melhores resultados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Restaurante Silva</CardTitle>
                    <CardDescription>São Paulo, SP</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <CardContent className="pt-4 border-t">
                  <p className="text-muted-foreground">
                    &quot;Reduzimos nossos custos operacionais em 30% após 3 meses usando o Rook System. 
                    A automação dos processos financeiros nos economiza horas de trabalho manual.&quot;
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
    <CardHeader>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Building className="w-6 h-6 text-primary" />
        </div>
        <div>
          <CardTitle className="text-lg">Pizzaria Bella Napoli</CardTitle>
          <CardDescription>Rio de Janeiro, RJ</CardDescription>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <CardContent className="pt-4 border-t">
        <p className="text-muted-foreground">
        &quot;O controle de estoque e a previsão de demanda nos ajudaram a reduzir o desperdício em 45%. 
          A gestão financeira automatizada nos deu visibilidade que nunca tivemos antes.&quot;
        </p>
      </CardContent>
    </CardHeader>
  </Card>
  <Card className="group hover:shadow-xl transition-all duration-300">
    <CardHeader>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Building className="w-6 h-6 text-primary" />
        </div>
        <div>
          <CardTitle className="text-lg">Burger House</CardTitle>
          <CardDescription>Curitiba, PR</CardDescription>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <CardContent className="pt-4 border-t">
        <p className="text-muted-foreground">
        &quot;Expandimos de 1 para 3 unidades em 8 meses graças ao controle financeiro 
          e operacional que o Rook System nos proporcionou. A gestão multi-unidades é simplesmente perfeita.&quot;
        </p>
      </CardContent>
    </CardHeader>
  </Card>
  <Card className="group hover:shadow-xl transition-all duration-300">
    <CardHeader>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Building className="w-6 h-6 text-primary" />
        </div>
        <div>
          <CardTitle className="text-lg">Sushi Masa</CardTitle>
          <CardDescription>São Paulo, SP</CardDescription>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <CardContent className="pt-4 border-t">
        <p className="text-muted-foreground">
        &quot;A precificação inteligente nos ajudou a manter a rentabilidade mesmo com 
          o aumento do custo dos insumos. O controle de fornecedores é excepcional.&quot;
        </p>
      </CardContent>
    </CardHeader>
  </Card>
  <Card className="group hover:shadow-xl transition-all duration-300">
    <CardHeader>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Building className="w-6 h-6 text-primary" />
        </div>
        <div>
          <CardTitle className="text-lg">Cedro do Líbano</CardTitle>
          <CardDescription>Belo Horizonte, MG</CardDescription>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <CardContent className="pt-4 border-t">
        <p className="text-muted-foreground">
          &quot;O sistema revolucionou nossa gestão de equipe. Reduzimos em 60% o tempo gasto 
          com escalas e aumentamos a satisfação dos colaboradores.&quot;
        </p>
      </CardContent>
    </CardHeader>
  </Card>
            {/* Mais depoimentos similares */}
          </div>
        </div>
      </section>

      {/* Seção FAQ - Nova */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre o Rook System
            </p>
          </div>

          <div className="max-w-[800px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="erp">
                <AccordionTrigger className="text-left">
                  Como funciona a integração com ERPs?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    <p>
                      O Rook System oferece integração nativa com os principais ERPs do mercado. 
                      O processo é simplificado e acontece em três etapas:
                    </p>
                    <ol className="space-y-2 pl-4">
                      <li>1. Configuração das credenciais de acesso</li>
                      <li>2. Mapeamento dos dados a serem sincronizados</li>
                      <li>3. Definição da frequência de sincronização</li>
                    </ol>
                    <p>
                      Nossa equipe de suporte acompanha todo o processo de integração.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cmv">
                <AccordionTrigger className="text-left">
                  Como funciona o cálculo de CMV na plataforma?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    <p>
                      O Custo da Mercadoria Vendida (CMV) é calculado automaticamente através de:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li>• Monitoramento em tempo real do estoque</li>
                      <li>• Registro automático de entradas e saídas</li>
                      <li>• Cálculo considerando método PEPS/FIFO</li>
                      <li>• Relatórios detalhados por período e categoria</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="trial">
                <AccordionTrigger className="text-left">
                  Como funciona o período gratuito?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    <p>
                      Oferecemos 14 dias de teste gratuito com acesso completo a todas as funcionalidades:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li>• Sem necessidade de cartão de crédito</li>
                      <li>• Acesso a todas as funcionalidades premium</li>
                      <li>• Suporte dedicado durante o período</li>
                      <li>• Configuração assistida da plataforma</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="integracoes">
    <AccordionTrigger className="text-left">
      Quais são as integrações disponíveis?
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-4 pt-2">
        <p>
          O Rook System oferece diversas integrações com sistemas populares do mercado:
        </p>
        <ul className="space-y-2 pl-4">
          <li>• iFood e demais delivery apps</li>
          <li>• Sistemas de PDV</li>
          <li>• Plataformas de pagamento</li>
          <li>• Sistemas fiscais</li>
          <li>• Softwares contábeis</li>
        </ul>
      </div>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="suporte">
    <AccordionTrigger className="text-left">
      Como funciona o suporte técnico?
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-4 pt-2">
        <p>
          Oferecemos suporte multicanal 7 dias por semana:
        </p>
        <ul className="space-y-2 pl-4">
          <li>• Chat ao vivo em horário comercial</li>
          <li>• Email com resposta em até 4 horas</li>
          <li>• Base de conhecimento completa</li>
          <li>• Treinamentos semanais</li>
          <li>• Consultoria personalizada</li>
        </ul>
      </div>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="implantacao">
    <AccordionTrigger className="text-left">
      Quanto tempo leva para implementar o sistema?
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-4 pt-2">
        <p>
          O processo de implementação é rápido e assistido:
        </p>
        <ul className="space-y-2 pl-4">
          <li>• Setup inicial: 24 horas</li>
          <li>• Importação de dados: 2-3 dias</li>
          <li>• Treinamento da equipe: 1 semana</li>
          <li>• Acompanhamento pós-implantação: 30 dias</li>
        </ul>
        <p>
          Em média, o sistema está 100% operacional em 2 semanas.
        </p>
      </div>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="seguranca">
    <AccordionTrigger className="text-left">
      Como é garantida a segurança dos dados?
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-4 pt-2">
        <p>
          Sua segurança é nossa prioridade:
        </p>
        <ul className="space-y-2 pl-4">
          <li>• Criptografia de dados em repouso e em trânsito</li>
          <li>• Backup automático a cada 6 horas</li>
          <li>• Conformidade com LGPD</li>
          <li>• Autenticação em dois fatores</li>
          <li>• Monitoramento 24/7</li>
        </ul>
      </div>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="customizacao">
    <AccordionTrigger className="text-left">
      É possível personalizar o sistema?
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-4 pt-2">
        <p>
          O Rook System é altamente customizável:
        </p>
        <ul className="space-y-2 pl-4">
          <li>• Dashboards personalizados</li>
          <li>• Relatórios customizados</li>
          <li>• Fluxos de trabalho adaptáveis</li>
          <li>• Permissões por perfil de usuário</li>
          <li>• Integração com sistemas próprios</li>
        </ul>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
          </div>
        </div>
      </section>

      {/* Footer com Redes Sociais - Novo */}
      <footer className="bg-secondary/5 py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Rook System</h3>
              <p className="text-sm text-muted-foreground">
                Software especializado para gestão de restaurantes
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Integrações
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Rook System. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Dados protegidos e criptografados
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* LGPD Banner */}
      <Sheet>
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 z-50">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência, 
                personalizar conteúdo e anúncios, e analisar nosso tráfego. Ao clicar em 
                &quot;Aceitar todos&quot;, você concorda com o uso de todos os cookies.
              </p>
            </div>
            <div className="flex gap-4">
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  Preferências
                </Button>
              </SheetTrigger>
              <Button size="sm">
                Aceitar todos
              </Button>
            </div>
          </div>
        </div>
      </Sheet>

      {/* Formulário de Contato */}
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="secondary" 
            className="fixed bottom-4 right-4 shadow-lg"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Fale Conosco
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="py-6">
            <h3 className="text-2xl font-bold mb-4">Entre em contato</h3>
            <p className="text-muted-foreground mb-8">
              Preencha o formulário abaixo e nossa equipe entrará em contato.
            </p>
            
            <div className="space-y-4">
              <Input placeholder="Nome completo" />
              <Input type="email" placeholder="E-mail" />
              <Input placeholder="Telefone" />
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de solicitação" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sugestao">Sugestão</SelectItem>
                  <SelectItem value="duvida">Dúvida</SelectItem>
                  <SelectItem value="elogio">Elogio</SelectItem>
                  <SelectItem value="problema">Problema</SelectItem>
                </SelectContent>
              </Select>
              
              <textarea 
                className="w-full min-h-[120px] p-3 rounded-md border bg
-background" 
                placeholder="Sua mensagem"
              />
              
              <Button className="w-full">Enviar mensagem</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </main>
  )
}