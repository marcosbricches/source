// app/landing-page-completa/page.tsx
'use client'
import Link from "next/link";
import { 
  AlertTriangle, ArrowRight, ArrowUpRight, BarChart2, Check, CheckCircle2, ChevronDown, ChevronRight, 
  Clock, DollarSign, FileText, Gauge, HelpCircle, LineChart, MessageCircle, PieChart, 
  Settings, ShoppingCart, Star, Trash, TrendingUp, Users 
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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LandingPageCompleta() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header Integrado + Hero Section - Design assimétrico e diferenciado */}
      <section className="relative bg-white min-h-screen">
        {/* Background com divisor diagonal */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100"></div>
          <div className="absolute inset-y-0 right-0 w-full md:w-2/3 lg:w-1/2 bg-gray-900 clip-diagonal-left"></div>
        </div>
        
        {/* Navegação flutuante */}
        <header className="relative z-20 pt-6 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10L90 30V70L50 90L10 70V30L50 10Z" fill="#F59E0B" />
                  <path d="M50 25L75 38V62L50 75L25 62V38L50 25Z" fill="#FFFFFF" />
                  <path d="M50 40L60 45V55L50 60L40 55V45L50 40Z" fill="#1F2937" />
                </svg>
                <div className="ml-3">
                  <div className="text-2xl font-bold text-gray-900">Rook</div>
                  <div className="text-xs text-amber-600 font-medium tracking-wider">FINANCIAL INTELLIGENCE</div>
                </div>
              </div>
              
              <div className="hidden md:flex items-center space-x-1">
                <Link href="#como-funciona" className="relative px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors group">
                  <span>Como funciona</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#beneficios" className="relative px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors group">
                  <span>Benefícios</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#faq" className="relative px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors group">
                  <span>FAQ</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
              
              <div>
                <Button variant="outline" className="rounded-full border-amber-300 hover:border-amber-500 hover:bg-white text-gray-900">
                  Login
                </Button>
              </div>
            </div>
          </div>
        </header>
        
        {/* Conteúdo Hero Assimétrico */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full pt-12 pb-24">
          <div className="grid grid-cols-12 gap-4 items-center min-h-[80vh]">
            {/* Lado esquerdo - Conteúdo */}
            <div className="col-span-12 md:col-span-7 lg:col-span-6 xl:col-span-5 pr-0 md:pr-6 lg:pr-12 relative z-10">
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 rounded-full bg-amber-400 opacity-20 blur-2xl"></div>
              </div>
              
              <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200 mb-6">
                Sistema de gestão financeira para restaurantes
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
                <span className="relative inline-block">
                  <span className="relative z-10">Sabe por que</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-amber-300 opacity-50"></span>
                </span>
                <span className="block mt-1">seu restaurante</span>
                <span className="block mt-1">
                  não tem <span className="text-amber-600">lucro?</span>
                </span>
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                Seu CMV está fora de controle, e isso está drenando seu dinheiro 
                sem que você perceba. O Rook transforma seus custos em 
                oportunidades de lucro através de inteligência financeira.
              </p>
              
              {/* Chamada à ação com contagem regressiva */}
              <Card className="mb-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 opacity-5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
                
                <CardHeader className="pb-2">
                  <CardTitle>Aumente seu lucro agora</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                    <div>
                      <p className="text-gray-600 mb-2">Oferta por tempo limitado:</p>
                      <div className="flex gap-2">
                        {[
                          { num: "04", label: "dias" },
                          { num: "12", label: "horas" },
                          { num: "36", label: "min" }
                        ].map((item, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div className="bg-gray-100 rounded-md w-12 h-12 flex items-center justify-center font-mono font-bold text-lg text-amber-600">
                              {item.num}
                            </div>
                            <span className="text-xs text-gray-500 mt-1">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Badge className="bg-amber-100 text-amber-800 border-amber-200 px-3 py-2 text-sm">
                      50% OFF no primeiro mês
                    </Badge>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-6 rounded-xl group h-auto">
                    <span>Começar período gratuito</span>
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Clientes */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Confiado por restaurantes como:</p>
                <div className="flex flex-wrap gap-6">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-8 bg-gray-200 w-24 rounded opacity-50"></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Lado direito - Gráfico Visual & Problemas */}
            <div className="col-span-12 md:col-span-5 lg:col-span-6 xl:col-span-7 relative z-10 mt-12 md:mt-0">
              <div className="relative">
                {/* Card flutuando acima */}
                <div className="absolute top-0 left-0 transform -translate-y-20 -translate-x-1/4 md:translate-x-0 md:w-72 bg-white rounded-xl shadow-xl p-5 border-l-4 border-red-500 z-20">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Compras descontroladas</h4>
                      <p className="text-sm text-gray-600">São 35% do dinheiro desperdiçado em restaurantes</p>
                    </div>
                  </div>
                </div>
                
                {/* Card dashboard principal */}
                <Card className="ml-auto max-w-lg transform rotate-1 border-gray-100 shadow-2xl">
                  <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm">Dashboard Financeiro</span>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">CMV Atual</h3>
                        <div className="flex items-end">
                          <span className="text-3xl font-bold text-red-500">32%</span>
                          <span className="text-sm text-gray-500 ml-2 mb-1">/ Meta: 28%</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-red-50 text-red-800 border-red-200 h-fit">
                        Perdendo lucro
                      </Badge>
                    </div>
                    
                    {/* Gráfico simulado */}
                    <div className="relative h-48 mb-6">
                      <div className="absolute inset-0">
                        <div className="h-full w-full bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg border border-gray-200"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-red-200 opacity-30"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-green-200 opacity-30"></div>
                        
                        {/* Linha simulando um gráfico */}
                        <svg className="absolute inset-0 w-full h-full">
                          <path 
                            d="M0,80 C40,100 60,60 100,70 C140,80 180,40 220,30 C260,20 300,60 340,65 C380,70 420,30 460,20" 
                            fill="none" 
                            stroke="#F59E0B" 
                            strokeWidth="3"
                          />
                          <path 
                            d="M0,90 C50,85 100,75 150,70 C200,65 250,60 300,55 C350,50 400,45 460,40" 
                            fill="none" 
                            stroke="#10B981" 
                            strokeWidth="3" 
                            strokeDasharray="5,5"
                          />
                        </svg>
                        
                        {/* Indicadores */}
                        <div className="absolute top-2 right-2 flex items-center">
                          <div className="w-3 h-3 bg-amber-500 rounded-full mr-1"></div>
                          <span className="text-xs text-gray-500">Atual</span>
                          <div className="w-3 h-3 bg-green-500 rounded-full ml-3 mr-1"></div>
                          <span className="text-xs text-gray-500">Meta</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Categorias de CMV */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Proteínas", value: "38%", status: "high" },
                        { label: "Hortifruti", value: "29%", status: "medium" },
                        { label: "Laticínios", value: "24%", status: "low" },
                        { label: "Bebidas", value: "22%", status: "good" }
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">{item.label}</span>
                            <span className={`text-sm font-medium ${
                              item.status === 'high' ? 'text-red-600' :
                              item.status === 'medium' ? 'text-amber-600' :
                              item.status === 'low' ? 'text-amber-500' : 'text-green-600'
                            }`}>{item.value}</span>
                          </div>
                          <div className="mt-2 bg-gray-200 h-2 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                item.status === 'high' ? 'bg-red-500' :
                                item.status === 'medium' ? 'bg-amber-500' :
                                item.status === 'low' ? 'bg-amber-400' : 'bg-green-500'
                              }`}
                              style={{ width: item.value }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Card flutuando abaixo */}
                <div className="absolute bottom-10 right-10 w-64 md:w-72 bg-white rounded-xl shadow-xl p-5 border-l-4 border-amber-500 z-20 transform translate-y-10 md:translate-y-1/4">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <DollarSign className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Oportunidade de lucro</h4>
                      <p className="text-sm text-gray-600">Reduzindo o CMV em 4%, seu lucro aumenta 22%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divisor de seção com forma ondulada */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg className="absolute bottom-0 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Problema Section */}
      <section className="py-20 bg-white" id="problema">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-16">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-200 w-full"></div>
              <h2 className="relative text-3xl md:text-4xl font-bold text-center bg-white inline-block px-8 mx-auto">
                <span className="text-amber-600">Por que</span> seu restaurante está lucrando menos?
              </h2>
            </div>
            
            {/* Cards de problemas em grid com design diferenciado */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <ShoppingCart className="h-8 w-8 text-white" />,
                  title: "Compras desorganizadas",
                  description: "Sem planejamento adequado, você acaba comprando mais do que precisa e desperdiçando recursos valiosos.",
                  color: "from-red-500 to-red-600"
                },
                {
                  icon: <PieChart className="h-8 w-8 text-white" />,
                  title: "Custos invisíveis",
                  description: "Gastos não monitorados que vão consumindo suas margens sem você perceber ao longo do tempo.",
                  color: "from-amber-500 to-amber-600"
                },
                {
                  icon: <FileText className="h-8 w-8 text-white" />,
                  title: "Precificação inadequada",
                  description: "Vender pratos sem conhecer seu custo real é como dar dinheiro aos clientes sem saber.",
                  color: "from-amber-600 to-amber-700"
                },
                {
                  icon: <AlertTriangle className="h-8 w-8 text-white" />,
                  title: "Decisões baseadas no feeling",
                  description: "Sem dados concretos, você toma decisões baseadas em intuição que frequentemente levam a prejuízos.",
                  color: "from-red-600 to-red-700"
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl transform transition-transform group-hover:scale-[1.02]`}></div>
                  <div className="relative bg-white rounded-xl p-6 border border-gray-100 transform transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">
                    <div className={`w-14 h-14 mb-4 rounded-lg flex items-center justify-center bg-gradient-to-br ${item.color}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Card className="mt-16 bg-gray-50 border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500 opacity-5 rounded-full translate-x-1/4 -translate-y-1/4"></div>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">A verdade é que sem controle, o dinheiro escapa.</h3>
                    <p className="text-gray-600 max-w-xl">
                      87% dos restaurantes não conhecem seus custos reais. O Rook foi feito para mudar isso.
                    </p>
                  </div>
                  <Button className="whitespace-nowrap bg-amber-500 hover:bg-amber-600 text-white px-6 py-6 rounded-xl shadow h-auto">
                    Resolver esses problemas
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solução/Benefícios Section */}
      <section className="py-20 bg-gray-50" id="beneficios">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                A SOLUÇÃO
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                O Rook <span className="text-amber-600">transforma</span> seus custos em lucro
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Diga adeus aos achismos. O Rook te mostra exatamente como gastar melhor para aumentar sua margem.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-8 mb-20">
              {/* Lado esquerdo - Imagen/Mock */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-400 rounded-full opacity-20 blur-xl"></div>
                  <Card className="max-w-sm relative z-10 shadow-xl bg-white">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center text-lg">
                        <PieChart className="mr-2 h-5 w-5 text-amber-500" />
                        Análise de CMV
                      </CardTitle>
                      <CardDescription>Dashboard mensal</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                            <div className="text-sm text-gray-500 mb-1">CMV Atual</div>
                            <div className="text-2xl font-bold text-green-600">28.4%</div>
                            <div className="flex items-center text-xs text-green-600 mt-1">
                              <ArrowUpRight className="h-3 w-3 mr-1 transform rotate-180" />
                              <span>3.6% menor</span>
                            </div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <div className="text-sm text-gray-500 mb-1">Economia</div>
                            <div className="text-2xl font-bold text-gray-800">R$4.820</div>
                            <div className="flex items-center text-xs text-amber-600 mt-1">
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                              <span>No mês</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">Proteínas</span>
                              <div className="flex items-center text-red-600 text-sm">
                                <span className="font-bold">36%</span>
                                <span className="text-xs ml-1 text-gray-500">/ meta: 32%</span>
                              </div>
                            </div>
                            <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                              <div className="bg-red-500 h-full w-[36%] rounded-full"></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">Hortifruti</span>
                              <div className="flex items-center text-green-600 text-sm">
                                <span className="font-bold">28%</span>
                                <span className="text-xs ml-1 text-gray-500">/ meta: 30%</span>
                              </div>
                            </div>
                            <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                              <div className="bg-green-500 h-full w-[28%] rounded-full"></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">Outros insumos</span>
                              <div className="flex items-center text-amber-600 text-sm">
                                <span className="font-bold">24%</span>
                                <span className="text-xs ml-1 text-gray-500">/ meta: 22%</span>
                              </div>
                            </div>
                            <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                              <div className="bg-amber-500 h-full w-[24%] rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
                            <div className="flex items-start">
                              <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                              <div>
                                <p className="text-sm text-amber-800 font-medium">Oportunidade de melhoria</p>
                                <p className="text-xs text-amber-700 mt-0.5">
                                  Reduza em 4% suas compras de proteínas para atingir a meta
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Lado direito - Recursos/Benefícios */}
              <div className="lg:col-span-7">
                <div className="space-y-8">
                  {[
                    {
                      icon: <PieChart className="h-6 w-6 text-amber-500" />,
                      title: "Descubra os pratos que realmente dão lucro",
                      description: "Identifique quais itens do seu cardápio realmente trazem resultado e quais estão prejudicando seu lucro.",
                    },
                    {
                      icon: <ShoppingCart className="h-6 w-6 text-amber-500" />,
                      title: "Planeje suas compras com inteligência",
                      description: "Saiba exatamente quanto comprar de cada insumo e elimine gastos desnecessários com base em dados reais.",
                    },
                    {
                      icon: <BarChart2 className="h-6 w-6 text-amber-500" />,
                      title: "Defina metas de CMV alcançáveis",
                      description: "Estabeleça metas inteligentes para cada categoria de insumos com base no desempenho histórico e potencial.",
                    },
                    {
                      icon: <TrendingUp className="h-6 w-6 text-amber-500" />,
                      title: "Obtenha insights para aumentar lucratividade",
                      description: "Descubra oportunidades escondidas de aumento de margem sem precisar vender mais ou aumentar preços."
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex relative group">
                      <div className="flex-shrink-0 mr-6">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-amber-100 border border-amber-200 group-hover:bg-amber-500 transition-colors">
                          <div className="group-hover:text-white transition-colors">{feature.icon}</div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Métricas de Impacto */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { value: "35%", label: "Média de redução no desperdício" },
                { value: "22%", label: "Aumento de margem sem ajuste de preços" },
                { value: "16%", label: "Aumento do lucro líquido" },
                { value: "4.8/5", label: "Satisfação dos clientes com o Rook" }
              ].map((metric, index) => (
                <Card key={index} className="bg-white text-center transform transition-transform hover:-translate-y-2">
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                      {metric.value}
                    </div>
                    <p className="text-gray-600 text-sm">{metric.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-20 bg-white" id="como-funciona">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                PROCESSO SIMPLES
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Como o Rook <span className="text-amber-600">funciona</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sem complicações. O Rook simplifica a gestão financeira do seu restaurante em 3 passos.
              </p>
            </div>
            
            <div className="relative">
              {/* Conectores */}
              <div className="absolute left-[39px] top-[100px] bottom-32 w-1 bg-amber-200 hidden md:block"></div>
              
              <div className="space-y-16 md:space-y-24">
                {[
                  {
                    number: "01",
                    icon: <FileText className="h-6 w-6 text-amber-600" />,
                    title: "Cadastre seus dados básicos",
                    description: "Crie sua conta em menos de 2 minutos e configure o perfil do seu restaurante com algumas informações básicas.",
                    image: (
                      <Card className="bg-gray-50 border-gray-100 h-40 flex items-center justify-center">
                        <p className="text-gray-400">Imagem formulário cadastro</p>
                      </Card>
                    )
                  },
                  {
                    number: "02",
                    icon: <PieChart className="h-6 w-6 text-amber-600" />,
                    title: "Conecte seus dados financeiros",
                    description: "Faça o upload dos seus dados de vendas, compras e estoque. O Rook é compatível com os principais ERPs e planilhas.",
                    image: (
                      <Card className="bg-gray-50 border-gray-100 h-40 flex items-center justify-center">
                        <p className="text-gray-400">Imagem integração de dados</p>
                      </Card>
                    )
                  },
                  {
                    number: "03",
                    icon: <BarChart2 className="h-6 w-6 text-amber-600" />,
                    title: "Receba insights e transforme seu negócio",
                    description: "Visualize seu dashboard personalizado com análises detalhadas, metas de CMV e recomendações para aumentar seu lucro.",
                    image: (
                      <Card className="bg-gray-50 border-gray-100 h-40 flex items-center justify-center">
                        <p className="text-gray-400">Imagem dashboard insights</p>
                      </Card>
                    )
                  }
                ].map((step, index) => (
                  <div key={index} className="grid md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-5 order-2 md:order-1">
                      {step.image}
                    </div>
                    
                    <div className="md:col-span-7 order-1 md:order-2">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 z-10">
                          <div className="flex flex-col items-center">
                            <div className="bg-amber-500 text-white text-2xl font-bold w-20 h-20 rounded-full flex items-center justify-center">
                              {step.number}
                            </div>
                            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mt-4 hidden md:flex">
                              {step.icon}
                            </div>
                          </div>
                        </div>
                        
                        <div className="ml-6">
                          <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                          <p className="text-gray-600 max-w-lg">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Card className="mt-20 bg-gradient-to-r from-amber-500 to-amber-600 border-none text-white shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Comece agora mesmo</h3>
                      <p className="text-amber-100">
                        Leva menos de 10 minutos para configurar sua conta e ver os primeiros insights.
                      </p>
                    </div>
                    <Button className="bg-white hover:bg-gray-100 text-amber-600 hover:text-amber-700 border-none px-6 py-6 rounded-xl shadow-lg h-auto md:min-w-[180px]">
                      Teste grátis por 14 dias
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-amber-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-gray-800 text-amber-400 border-gray-700">
                DEPOIMENTOS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                O que nossos clientes <span className="text-amber-400">dizem</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Restaurantes que transformaram seus resultados com o Rook.
              </p>
            </div>
            
            <Tabs defaultValue="tab1" className="w-full">
              <TabsList className="w-full flex mb-8 bg-gray-800 p-1">
                <TabsTrigger value="tab1" className="flex-1 data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                  Pizza Bella
                </TabsTrigger>
                <TabsTrigger value="tab2" className="flex-1 data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                  Bistrô Gourmet
                </TabsTrigger>
                <TabsTrigger value="tab3" className="flex-1 data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                  Sabor Carioca
                </TabsTrigger>
              </TabsList>
              
              {["tab1", "tab2", "tab3"].map((tab, index) => (
                <TabsContent value={tab} key={index}>
                  <Card className="bg-gray-800 border-gray-700 shadow-xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2">
                        <div className="bg-gray-700 h-64 md:h-auto flex items-center justify-center">
                          <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center text-amber-400">
                            <Users className="h-10 w-10" />
                          </div>
                        </div>
                        <div className="p-8">
                          <div className="flex text-amber-400 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-5 w-5 fill-current" />
                            ))}
                          </div>
                          <blockquote className="text-xl font-medium mb-6">
                            "O Rook transformou completamente nossa gestão financeira. A redução do CMV em 4% representou mais de R$8.000 de lucro adicional por mês."
                          </blockquote>
                          <div>
                            <p className="font-semibold text-white">Carlos Silva</p>
                            <p className="text-gray-400">Proprietário, {tab === "tab1" ? "Pizza Bella" : tab === "tab2" ? "Bistrô Gourmet" : "Sabor Carioca"}</p>
                          </div>
                          <div className="mt-6 bg-gray-700 p-3 rounded-lg">
                            <div className="flex items-center">
                              <Badge className="bg-green-500 text-white border-none mr-3">Resultado</Badge>
                              <span className="text-white font-medium">Redução de 32% no CMV para 28% em 3 meses</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { label: "Restaurantes usando Rook", value: "500+" },
                { label: "Economia média mensal", value: "R$6.200" },
                { label: "Redução média de CMV", value: "3-5%" },
                { label: "Tempo de implementação", value: "10 min" }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-amber-400 mb-2">{stat.value}</div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section className="py-20 bg-white" id="planos">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                PLANOS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Escolha o plano <span className="text-amber-600">ideal</span> para seu restaurante
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Temos opções para todos os tamanhos de operação. Comece grátis e escale conforme seu crescimento.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  description: "Para restaurantes pequenos começarem a controlar seu CMV",
                  price: "0",
                  period: "para sempre",
                  features: [
                    "Dashboard básico de CMV",
                    "Análise de até 50 itens",
                    "Importação manual de dados",
                    "Relatórios mensais"
                  ],
                  cta: "Começar agora",
                  popular: false,
                  color: "from-gray-500 to-gray-600"
                },
                {
                  name: "Professional",
                  description: "Para restaurantes que querem otimizar seu lucro",
                  price: "179,90",
                  period: "por mês",
                  features: [
                    "Dashboard completo de CMV",
                    "Análise de até 200 itens",
                    "Importação automática de dados",
                    "Relatórios semanais",
                    "Alertas de desvios de metas",
                    "Recomendações de economia"
                  ],
                  cta: "Teste grátis por 14 dias",
                  popular: true,
                  color: "from-amber-500 to-amber-600"
                },
                {
                  name: "Enterprise",
                  description: "Para redes e restaurantes de grande porte",
                  price: "349,90",
                  period: "por mês",
                  features: [
                    "Tudo do Professional",
                    "Análise ilimitada de itens",
                    "Múltiplas unidades",
                    "Suporte prioritário",
                    "Consultoria financeira mensal",
                    "API para integração"
                  ],
                  cta: "Fale com consultor",
                  popular: false,
                  color: "from-gray-800 to-gray-900"
                }
              ].map((plan, index) => (
                <div key={index} className={`relative group ${plan.popular ? 'transform -translate-y-4' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-xl group-hover:scale-[1.03] transition-transform`}></div>
                  <Card className={`relative bg-white border-gray-200 transition-all h-full
                    ${plan.popular ? 'border-amber-300 shadow-xl shadow-amber-200/20' : 'group-hover:translate-y-1 group-hover:-translate-x-1'}`}>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                        <Badge className="bg-amber-500 text-white border-none px-3 py-1">
                          MAIS POPULAR
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="flex flex-col items-center">
                        <span>{plan.name}</span>
                        <div className="mt-4 mb-2">
                          <span className="text-sm align-top mr-1">R$</span>
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-gray-500 text-sm">/{plan.period}</span>
                        </div>
                      </CardTitle>
                      <CardDescription className="text-center">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className={`w-full py-6 rounded-xl h-auto ${
                        plan.popular 
                          ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                          : plan.name === 'Starter' 
                            ? 'bg-gray-100 hover:bg-gray-200 text-gray-800' 
                            : 'bg-gray-900 hover:bg-black text-white'
                      }`}>
                        {plan.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-gray-500 mb-4">
                Todos os planos incluem suporte ao cliente e acesso à base de conhecimento
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-gray-600">Sem taxas ocultas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-gray-600">Cancele quando quiser</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-gray-600">Suporte 5 dias por semana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                PERGUNTAS FREQUENTES
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Dúvidas <span className="text-amber-600">comuns</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Respondemos às perguntas mais frequentes sobre o Rook System.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question: "Já uso um sistema financeiro. Por que preciso do Rook?",
                  answer: "Seu sistema financeiro mostra o que aconteceu. O Rook te mostra o que fazer para melhorar seus lucros. Enquanto seu sistema atual registra as transações, o Rook analisa esses dados e fornece recomendações específicas para reduzir custos e aumentar suas margens."
                },
                {
                  question: "O Rook é difícil de usar?",
                  answer: "Não. O Rook foi desenvolvido para ser extremamente intuitivo, mesmo para quem não tem conhecimentos avançados em finanças. Nossa interface simplifica dados complexos e entrega recomendações diretas e acionáveis para você."
                },
                {
                  question: "Como o Rook acessa meus dados?",
                  answer: "Você pode importar seus dados de diferentes maneiras: upload de planilhas, conexão direta com seu sistema de PDV ou via integração com ERPs populares. Todos os dados são transmitidos com criptografia e armazenados com segurança."
                },
                {
                  question: "Quanto tempo leva para ver resultados?",
                  answer: "A maioria dos restaurantes começa a ver resultados tangíveis em 30 dias após a implementação completa das recomendações do Rook. Alguns clientes relatam reduções no CMV já no primeiro ciclo de compras após as análises iniciais."
                },
                {
                  question: "O Rook funciona para qualquer tipo de restaurante?",
                  answer: "Sim! O Rook é eficaz para todos os tipos de estabelecimentos: restaurantes à la carte, fast food, bares, cafeterias, dark kitchens e outros. Nossa tecnologia se adapta às particularidades de cada modelo de negócio."
                },
                {
                  question: "Posso cancelar minha assinatura quando quiser?",
                  answer: "Absolutamente. Não há contratos de longo prazo ou taxas de cancelamento. Você pode cancelar sua assinatura a qualquer momento diretamente pela sua conta, sem complicações."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                    <div className="flex items-start">
                      <HelpCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-left font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    <div className="ml-8">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                Fale com um especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Final */}
      <section className="py-24 bg-gradient-to-br from-amber-500 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Comece a transformar seus custos em lucro hoje mesmo
            </h2>
            <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
              Cada dia que passa é dinheiro perdido. Junte-se aos restaurantes que já aumentaram sua lucratividade com o Rook.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white hover:bg-gray-100 text-amber-600 hover:text-amber-700 px-8 py-6 rounded-xl shadow-lg h-auto text-lg">
                Começar teste gratuito
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 rounded-xl h-auto text-lg">
                Ver demonstração
              </Button>
            </div>
            <div className="mt-10 flex items-center justify-center">
              <Clock className="h-5 w-5 text-amber-200 mr-2" />
              <span className="text-amber-100">Configuração em menos de 10 minutos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10L90 30V70L50 90L10 70V30L50 10Z" fill="#F59E0B" />
                  <path d="M50 25L75 38V62L50 75L25 62V38L50 25Z" fill="#FFFFFF" />
                  <path d="M50 40L60 45V55L50 60L40 55V45L50 40Z" fill="#1F2937" />
                </svg>
                <div className="ml-3">
                  <div className="text-xl font-bold">Rook</div>
                  <div className="text-xs text-amber-400 font-medium tracking-wider">FINANCIAL INTELLIGENCE</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                A inteligência financeira que transforma restaurantes em negócios mais lucrativos.
              </p>
              <div className="mt-6 flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                  <a key={social} href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-500 transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-gray-600 rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Produto</h3>
                  <ul className="space-y-2">
                    {['Funcionalidades', 'Integração', 'Preços', 'FAQ', 'Atualizações'].map(item => (
                      <li key={item}>
                        <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Recursos</h3>
                  <ul className="space-y-2">
                    {['Blog', 'Guias', 'Calculadoras', 'Estudos de caso', 'Suporte'].map(item => (
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
                    {['Sobre nós', 'Carreiras', 'Contato', 'Parceiros', 'Imprensa'].map(item => (
                      <li key={item}>
                        <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Rook System. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* CSS necessário */}
      <style jsx global>{`
        .clip-diagonal-left {
          clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
        }
        
        @media (max-width: 768px) {
          .clip-diagonal-left {
            clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 100%);
          }
        }
      `}</style>
    </div>
  );
}