// app/landing-premium-v1/page.tsx
import Link from "next/link";
import { 
  AlertTriangle, ArrowRight, BarChart2, BriefcaseBusiness, Check, ChevronDown,
  Clock, CreditCard, DollarSign, FileText, Gauge, HelpCircle, LineChart, 
  MessageCircle, PieChart, PlayCircle, Receipt, Settings, ShieldCheck, ShoppingBag,
  Star, Smartphone, TrendingUp, Users, WalletCards, Zap 
} from "lucide-react";

// Importações de componentes shadcn/ui
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function LandingPremiumV1() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-0 -m-1 rounded-full bg-amber-500 blur-sm opacity-80"></div>
              <div className="relative w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
            </div>
            <div className="ml-3">
              <span className="text-2xl font-bold text-gray-900">Rook</span>
              <span className="ml-1 text-amber-500 font-light">System</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#problemas" className="text-gray-600 hover:text-gray-900 transition-colors">
              Problemas
            </Link>
            <Link href="#solucao" className="text-gray-600 hover:text-gray-900 transition-colors">
              Solução
            </Link>
            <Link href="#como-funciona" className="text-gray-600 hover:text-gray-900 transition-colors">
              Como Funciona
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </Link>
          </nav>
          
          <div className="flex items-center space-x-3">
            <a href="#" className="text-gray-700 hover:text-amber-600 hidden md:block">Login</a>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6">
              Teste Grátis
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section com Design Premium */}
      <section className="pt-32 pb-20 overflow-hidden relative bg-gradient-to-b from-white to-amber-50">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-amber-300 opacity-10 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-amber-400 opacity-10 rounded-tr-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative mb-6">
                <Badge className="absolute -top-4 -left-2 bg-amber-100 text-amber-800 border-amber-200">
                  Inteligência financeira para restaurantes
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
                Seu restaurante fatura bem, mas o 
                <span className="relative inline-block mx-2">
                  <span className="relative z-10">dinheiro</span>
                  <svg className="absolute -bottom-1.5 left-0 w-full h-3 text-amber-200" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,0 Q100,12 200,0" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
                não sobra?
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Conheça o Rook – a inteligência financeira que transforma seus custos em lucro.
                Analisamos seus dados e definimos exatamente <span className="font-semibold">quanto gastar</span> para 
                maximizar suas margens e garantir um restaurante mais lucrativo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 rounded-lg h-auto text-lg group">
                  <span>Teste grátis agora</span>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" className="border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-6 rounded-lg h-auto text-lg group">
                  <PlayCircle className="mr-2 h-5 w-5 text-amber-500" />
                  <span>Ver como funciona</span>
                </Button>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="h-5 w-5 text-amber-500" />
                <span className="text-sm">Comece grátis | Sem necessidade de cartão de crédito</span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400 opacity-20 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="absolute -top-3 -left-3 right-3 bottom-3 bg-gray-900 rounded-2xl transform rotate-2"></div>
                <Card className="relative border-0 shadow-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 text-white z-10">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>
                  
                  <CardHeader className="border-b border-gray-700 pb-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-gray-100 flex items-center">
                        <LineChart className="mr-2 h-5 w-5 text-amber-400" />
                        Dashboard Financeiro
                      </CardTitle>
                      <Badge className="bg-amber-500 text-white border-0">
                        Análise em tempo real
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-400 mb-1">Faturamento</div>
                          <div className="text-2xl font-bold">R$86.500</div>
                          <div className="flex items-center text-green-400 text-xs mt-1">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>+12%</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg col-span-2">
                          <div className="text-sm text-gray-400 mb-1">Lucro Esperado vs. Real</div>
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-2xl font-bold text-green-400">R$21.625</div>
                              <div className="text-xs text-gray-400">Esperado (25%)</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-red-400">R$12.110</div>
                              <div className="text-xs text-gray-400">Real (14%)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 text-amber-400 mr-1" />
                            <span className="font-medium">CMV Atual vs. Meta</span>
                          </div>
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                            Problema crítico
                          </Badge>
                        </div>
                        
                        <div className="relative h-16 bg-gray-700 bg-opacity-50 rounded-lg overflow-hidden mb-1">
                          {/* Gráfico simulado */}
                          <div className="absolute inset-0 flex items-end">
                            <div className="w-1/5 h-[30%] bg-amber-500/20 border-r border-gray-700"></div>
                            <div className="w-1/5 h-[50%] bg-amber-500/30 border-r border-gray-700"></div>
                            <div className="w-1/5 h-[80%] bg-amber-500/40 border-r border-gray-700"></div>
                            <div className="w-1/5 h-[65%] bg-amber-500/30 border-r border-gray-700"></div>
                            <div className="w-1/5 h-[90%] bg-amber-500/50"></div>
                          </div>
                          
                          {/* Linha de meta */}
                          <div className="absolute left-0 right-0 top-[60%] border-t-2 border-dashed border-green-400 z-10"></div>
                          
                          {/* Etiqueta de meta */}
                          <div className="absolute right-2 top-[50%] bg-green-400/20 text-green-400 text-xs px-1 rounded">
                            Meta: 28%
                          </div>
                          
                          {/* Etiqueta atual */}
                          <div className="absolute right-2 bottom-1 bg-amber-400/20 text-amber-400 text-xs px-1 rounded">
                            Atual: 38%
                          </div>
                        </div>
                        
                        <div className="text-sm text-red-400">
                          Seu CMV está 10% acima da meta e isso reduz seu lucro em R$8.650
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 p-4 rounded-lg border border-amber-500/30">
                        <div className="flex items-start">
                          <Zap className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-medium text-amber-300 mb-1">Recomendação de ação</div>
                            <div className="text-sm text-gray-300">
                              Reduza 15% nas compras de carnes e 8% em bebidas para aumentar sua margem em 6%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Card flutuante de alerta */}
                <div className="absolute -bottom-5 -left-8 max-w-[240px] bg-white rounded-lg shadow-lg p-4 border-l-4 border-red-500 z-20 transform -rotate-3">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Alerta de CMV</div>
                      <div className="text-sm text-gray-600">
                        Suas compras estão 22% acima do ideal esta semana
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Marcas de clientes */}
          <div className="mt-20 text-center">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">Utilizado por centenas de restaurantes</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-8 bg-gray-200 w-24 rounded opacity-40"></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Divisor ondulado */}
        <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full fill-white" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Problema Section */}
      <section id="problemas" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
              O PROBLEMA
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O dinheiro vai embora sem que você perceba
            </h2>
            <p className="text-xl text-gray-700">
              A maioria dos restaurantes <span className="font-semibold">não conecta seus custos ao resultado financeiro</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <ShoppingBag className="h-8 w-8 text-white" />,
                title: "Compras descontroladas",
                description: "Insumos comprados sem planejamento levam a custos elevados e desperdício.",
                color: "from-red-500 to-red-600",
                stat: "35%",
                statLabel: "do dinheiro desperdiçado",
              },
              {
                icon: <LineChart className="h-8 w-8 text-white" />,
                title: "Margens comprometidas",
                description: "CMV elevado reduz sua margem de lucro, mesmo com o restaurante cheio.",
                color: "from-amber-500 to-amber-600",
                stat: "10-15%",
                statLabel: "de lucro perdido",
              },
              {
                icon: <AlertTriangle className="h-8 w-8 text-white" />,
                title: "Decisões no feeling",
                description: "Sem dados precisos, decisões são tomadas por intuição, não por estratégia.",
                color: "from-orange-500 to-orange-600",
                stat: "68%",
                statLabel: "das decisões são imprecisas",
              },
              {
                icon: <DollarSign className="h-8 w-8 text-white" />,
                title: "Lucro menor",
                description: "O resultado final é sempre abaixo do potencial real do seu negócio.",
                color: "from-gray-700 to-gray-800",
                stat: "22%",
                statLabel: "menos lucro em média",
              }
            ].map((problem, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className={`h-2 w-full bg-gradient-to-r ${problem.color}`}></div>
                <CardContent className="p-6 pt-8">
                  <div className="flex flex-col h-full">
                    <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${problem.color} transform group-hover:scale-110 transition-transform`}>
                      {problem.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                    <p className="text-gray-600 mb-6">{problem.description}</p>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className={`text-2xl font-bold ${
                          index === 0 ? 'text-red-600' : 
                          index === 1 ? 'text-amber-600' : 
                          index === 2 ? 'text-orange-600' : 'text-gray-800'
                        }`}>
                          {problem.stat}
                        </span>
                        <span className="text-sm text-gray-500">{problem.statLabel}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-16">
            <Card className="bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-amber-800 mb-2">
                  O <span className="text-amber-600">Rook</span> muda isso.
                </h3>
                <p className="text-amber-700 mb-6">
                  Nossa inteligência financeira identifica exatamente onde seu dinheiro está escapando 
                  e mostra o caminho para recuperá-lo.
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                  Teste grátis agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section id="solucao" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-96 h-96 bg-amber-300 opacity-10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-amber-400 opacity-10 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              A SOLUÇÃO
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A inteligência financeira que garante margens saudáveis
            </h2>
            <p className="text-xl text-gray-700">
              O Rook analisa seus dados financeiros e define metas de CMV para cada categoria de insumo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto relative z-10">
            {[
              {
                icon: <PieChart className="h-8 w-8 text-amber-600" />,
                title: "Clareza sobre seus custos",
                description: "Visualize exatamente para onde está indo o dinheiro do seu restaurante com dashboards interativos.",
                bullets: [
                  "Análise detalhada por categorias",
                  "Visualização de tendências",
                  "Identificação de pontos críticos"
                ]
              },
              {
                icon: <BarChart2 className="h-8 w-8 text-amber-600" />,
                title: "Decisões estratégicas",
                description: "Tome decisões baseadas em dados para a compra de insumos e gestão do seu negócio.",
                bullets: [
                  "Recomendações personalizadas",
                  "Metas alcançáveis por categoria",
                  "Simulações de cenários"
                ]
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-amber-600" />,
                title: "Melhores margens",
                description: "Aumente sua lucratividade com otimização de processos e redução de desperdícios.",
                bullets: [
                  "Aumento médio de 22% no lucro",
                  "Redução de 15% nos desperdícios",
                  "ROI positivo já no primeiro mês"
                ]
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden transform hover:-translate-y-1 hover:scale-[1.02] transition-transform">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 opacity-5 rounded-full translate-x-16 -translate-y-16"></div>
                
                <CardHeader className="pt-8 pb-2">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3.5 w-3.5 text-amber-600" />
                        </div>
                        <span className="text-gray-700">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-16">
            <p className="text-xl font-medium text-gray-800 italic mb-8">
              "Sem complicação. Sem achismos. Só lucro real."
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl text-lg">
              Comece grátis agora
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios Section com Cards Sofisticados */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              BENEFÍCIOS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tome decisões financeiras com segurança
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6 text-amber-600" />,
                  title: "Aumento da lucratividade sem precisar vender mais",
                  description: "Otimize seus processos para extrair mais lucro das vendas que já possui.",
                  stat: "+22%",
                  statLabel: "em lucratividade média"
                },
                {
                  icon: <Gauge className="h-6 w-6 text-amber-600" />,
                  title: "Previsibilidade financeira e controle total sobre os custos",
                  description: "Saiba exatamente quanto gastar e como isso afetará o resultado final do seu negócio.",
                  stat: "98%",
                  statLabel: "de precisão nas previsões"
                },
                {
                  icon: <Smartphone className="h-6 w-6 text-amber-600" />,
                  title: "Ferramenta prática, feita para quem não é especialista em finanças",
                  description: "Interface intuitiva e recomendações claras, sem jargões financeiros complicados.",
                  stat: "< 10min",
                  statLabel: "para configuração inicial"
                },
                {
                  icon: <BriefcaseBusiness className="h-6 w-6 text-amber-600" />,
                  title: "Decisões embasadas em dados, sem perda de tempo",
                  description: "Análises rápidas e diretas para que você possa focar no que realmente importa.",
                  stat: "5x",
                  statLabel: "mais rápido que análises manuais"
                }
              ].map((benefit, index) => (
                <Card key={index} className="border-gray-200 hover:border-amber-200 transition-colors overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex p-6">
                      <div className="flex-shrink-0 mr-6">
                        <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center">
                          {benefit.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="text-2xl font-bold text-amber-600 mr-2">{benefit.stat}</div>
                        <div className="text-sm text-gray-500">{benefit.statLabel}</div>
                      </div>
                      <Button variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 p-0 h-auto">
                        <span className="text-sm mr-1">Saiba mais</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl text-lg">
                Quero testar o Rook agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section - Com Visual Premium */}
      <section id="como-funciona" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-80 h-80 bg-amber-500 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-400 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <Badge className="mb-4 bg-gray-800 text-amber-400 border-gray-700">
              PROCESSO SIMPLES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Como funciona?
            </h2>
            <p className="text-xl text-gray-300">
              Em apenas três passos simples, você transforma completamente a gestão financeira do seu restaurante.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-800 hidden md:block transform -translate-x-1/2"></div>
              
              <div className="space-y-24">
                {[
                  {
                    number: "01",
                    title: "Cadastre-se gratuitamente",
                    description: "Crie sua conta em poucos cliques e configure seu perfil de restaurante em menos de 2 minutos.",
                    icon: <FileText className="h-6 w-6 text-amber-400" />,
                    image: (
                      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                        <div className="px-6 py-4 border-b border-gray-700 flex items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                          <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="ml-4 text-sm text-gray-500">Cadastro Simplificado</span>
                        </div>
                        <div className="p-8 flex flex-col items-center justify-center">
                          <div className="w-16 h-16 bg-gray-700 rounded-full mb-6"></div>
                          <div className="w-full h-8 bg-gray-700 rounded-md mb-4"></div>
                          <div className="w-full h-8 bg-gray-700 rounded-md mb-4"></div>
                          <div className="w-3/4 h-10 bg-amber-500 rounded-md"></div>
                        </div>
                      </div>
                    )
                  },
                  {
                    number: "02",
                    title: "Conecte seus dados financeiros",
                    description: "Importe seus dados financeiros (fluxo de caixa, DRE, etc.) de forma simples e segura.",
                    icon: <PieChart className="h-6 w-6 text-amber-400" />,
                    image: (
                      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                        <div className="px-6 py-4 border-b border-gray-700 flex items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                          <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="ml-4 text-sm text-gray-500">Importação de Dados</span>
                        </div>
                        <div className="p-8">
                          <div className="flex justify-between mb-6">
                            <div className="w-1/3 h-24 bg-gray-700 rounded-lg border border-gray-600 flex items-center justify-center">
                              <FileText className="h-8 w-8 text-gray-500" />
                            </div>
                            <div className="w-1/2">
                              <div className="w-full h-6 bg-gray-700 rounded-md mb-3"></div>
                              <div className="w-full h-6 bg-gray-700 rounded-md mb-3"></div>
                              <div className="w-3/4 h-8 bg-amber-500 rounded-md"></div>
                            </div>
                          </div>
                          <div className="w-full h-4 bg-gray-700 rounded-full mb-2">
                            <div className="w-2/3 h-4 bg-amber-500 rounded-full"></div>
                          </div>
                          <div className="text-xs text-gray-500 text-right">67% Completo</div>
                        </div>
                      </div>
                    )
                  },
                  {
                    number: "03",
                    title: "Receba suas metas de CMV",
                    description: "O Rook define suas metas de CMV e recomenda o que gastar em cada categoria para maximizar seus lucros.",
                    icon: <BarChart2 className="h-6 w-6 text-amber-400" />,
                    image: (
                      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                        <div className="px-6 py-4 border-b border-gray-700 flex items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                          <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="ml-4 text-sm text-gray-500">Dashboard de Metas</span>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                              <div className="text-xs text-gray-400 mb-1">Meta CMV</div>
                              <div className="text-xl font-bold text-green-400">28%</div>
                            </div>
                            <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                              <div className="text-xs text-gray-400 mb-1">Potencial</div>
                              <div className="text-xl font-bold text-amber-400">+R$8.650</div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            {[
                              { label: "Proteína", current: "38%", target: "32%", color: "bg-red-400" },
                              { label: "Hortifruti", current: "30%", target: "28%", color: "bg-amber-400" },
                              { label: "Bebidas", current: "26%", target: "25%", color: "bg-green-400" }
                            ].map((item, idx) => (
                              <div key={idx} className="space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span className="text-gray-400">{item.label}</span>
                                  <div>
                                    <span className="text-gray-300">{item.current}</span>
                                    <span className="text-gray-500"> / meta </span>
                                    <span className="text-green-400">{item.target}</span>
                                  </div>
                                </div>
                                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                  <div className={`h-full ${item.color}`} style={{ width: item.current }}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  }
                ].map((step, index) => (
                  <div key={index} className="relative grid md:grid-cols-2 gap-8 items-center">
                    {/* Ordem alternada para layout em zigue-zague */}
                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      {step.image}
                    </div>
                    
                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''} relative`}>
                      {/* Círculo numerado no centro para desktop */}
                      <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-[calc(50%+1.5rem)]">
                        <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-white text-2xl font-bold">
                          {step.number}
                        </div>
                      </div>
                      
                      {/* Círculo numerado para mobile */}
                      <div className="md:hidden w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-white text-xl font-bold mb-4">
                        {step.number}
                      </div>
                      
                      <div className="md:pl-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center mr-4">
                            {step.icon}
                          </div>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-gray-300 text-lg mb-6">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-20">
              <p className="text-xl text-gray-300 mb-8">
                Plano gratuito disponível. Comece agora e veja a diferença.
              </p>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg shadow-lg shadow-amber-500/30">
                Teste grátis agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos carrossel horizontal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              CASES DE SUCESSO
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que nossos clientes dizem
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((item) => (
                <Card key={item} className="border-0 shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-8 pb-4 relative">
                      <div className="absolute -top-6 -left-6 text-8xl text-amber-200 opacity-30 font-serif">
                        "
                      </div>
                      <div className="relative">
                        <div className="flex text-amber-400 mb-6">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-5 w-5 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-lg text-gray-700 mb-6">
                          "O Rook transformou nossa forma de enxergar os custos. Conseguimos reduzir nosso CMV de 34% para 29% em apenas dois meses, o que representou um aumento de mais de R$15 mil em nosso lucro mensal."
                        </blockquote>
                      </div>
                    </div>
                    
                    <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                        <div>
                          <p className="font-medium text-gray-900">Carlos Silva</p>
                          <p className="text-gray-500 text-sm">Dono do Restaurante Sabores</p>
                        </div>
                        <div className="ml-auto">
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            CMV -5%
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              PERGUNTAS FREQUENTES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perguntas frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question: "Já uso um sistema financeiro. Por que preciso do Rook?",
                  answer: "Seu sistema mostra o que aconteceu. O Rook te mostra o que fazer para melhorar seus lucros. A maioria dos sistemas financeiros são apenas registros históricos, enquanto o Rook fornece inteligência preditiva e recomendações acionáveis."
                },
                {
                  question: "É difícil de usar?",
                  answer: "Não. O Rook simplifica tudo e entrega recomendações diretas para você. Nossa interface foi desenvolvida pensando em proprietários de restaurantes, não em especialistas em finanças ou tecnologia."
                },
                {
                  question: "Como o Rook acessa meus dados?",
                  answer: "É necessário que você faça a carga de dados da sua operação para que seja possível analisarmos os melhores caminhos para o resultado do seu restaurante. Oferecemos integrações com os principais sistemas de PDV e ERPs, além de modelos de planilha para importação manual."
                },
                {
                  question: "Quanto custa usar o Rook?",
                  answer: "Além do plano gratuito com recursos limitados, temos planos que partem de R$179,90 mensais. O retorno sobre o investimento é tipicamente observado no primeiro mês de uso, com nossos clientes economizando em média 5x o valor da assinatura."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline data-[state=open]:text-amber-600">
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                      <span className="text-left font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                    <div className="ml-8 border-l-2 border-amber-200 pl-4">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 flex items-center justify-center gap-4">
              <span className="text-gray-600">Ainda tem dúvidas?</span>
              <Button variant="outline" className="border-amber-300 text-amber-600 hover:bg-amber-50">
                <MessageCircle className="mr-2 h-4 w-4" />
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Final */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
              <path d="M0,0 L100,100" stroke="white" strokeWidth="0.5"></path>
              <path d="M100,0 L0,100" stroke="white" strokeWidth="0.5"></path>
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Transforme seus custos em lucro hoje
                </h2>
                <p className="text-gray-600 mb-8">
                  Cada dia sem o Rook é dinheiro deixado na mesa. Junte-se aos restaurantes que aumentaram sua lucratividade em até 22%.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Análise completa do seu CMV",
                    "Recomendações personalizadas",
                    "Plano gratuito disponível"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-amber-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg">
                    Teste grátis agora
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700">
                    <PlayCircle className="mr-2 h-4 w-4 text-amber-600" />
                    Ver demonstração
                  </Button>
                </div>
              </div>
              
              <div className="bg-gray-900 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Comece em 3 passos simples
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      number: "1",
                      text: "Cadastre-se gratuitamente",
                      icon: <FileText className="h-5 w-5 text-amber-400" />
                    },
                    {
                      number: "2",
                      text: "Conecte seus dados financeiros",
                      icon: <PieChart className="h-5 w-5 text-amber-400" />
                    },
                    {
                      number: "3",
                      text: "Receba suas metas de CMV",
                      icon: <BarChart2 className="h-5 w-5 text-amber-400" />
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold mr-4">
                        {step.number}
                      </div>
                      <div className="flex items-center">
                        <div className="mr-3">{step.icon}</div>
                        <span className="text-gray-300">{step.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 border-t border-gray-800 pt-6 flex items-center">
                  <ShieldCheck className="h-5 w-5 text-amber-400 mr-2" />
                  <span className="text-gray-400 text-sm">Sem necessidade de cartão de crédito</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 -m-1 rounded-full bg-amber-500 blur-sm opacity-80"></div>
                  <div className="relative w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">R</span>
                  </div>
                </div>
                <div className="ml-3">
                  <span className="text-2xl font-bold">Rook</span>
                  <span className="ml-1 text-amber-500 font-light">System</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                A inteligência financeira que transforma seus custos em lucro.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-600 rounded-sm"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Produto</h3>
                  <ul className="space-y-2">
                    {['Recursos', 'Preços', 'FAQ', 'Segurança', 'API'].map(item => (
                      <li key={item}>
                        <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Empresa</h3>
                  <ul className="space-y-2">
                    {['Sobre', 'Clientes', 'Blog', 'Carreiras', 'Contato'].map(item => (
                      <li key={item}>
                        <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Entre em contato</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                        Fale conosco
                      </a>
                    </li>
                    <li className="text-gray-400">Instagram: @rook</li>
                    <li className="text-gray-400">LinkedIn: Rook Inteligência Financeira</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-10 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Rook System. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componentes adicionais
function Shield(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}