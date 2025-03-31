// app/(public)/landing-page-preview/page.tsx
"use client"

import { useState, useEffect } from "react"
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Componente para a seção Hero
const HeroSection = ({ content }: { content: any }) => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              {content.heading || "Simplifique a gestão do seu restaurante"}
            </h1>
            <p className="text-xl text-gray-600">
              {content.subheading || "Automatize processos e tome decisões baseadas em dados reais"}
            </p>
            <p className="text-gray-600">
              {content.description || "Transforme a operação do seu restaurante com a plataforma que automatiza processos financeiros, otimiza compras e controla estoque com precisão."}
            </p>
            <div className="pt-4">
              <Button className="bg-amber-600 hover:bg-amber-700 px-8 py-6 text-base">
                {content.buttonText || "Solicitar demonstração"}
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src={content.imageUrl || "/images/hero-placeholder.jpg"} 
              alt="Rook System" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente para a seção de Features
const FeaturesSection = ({ content }: { content: any }) => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            {content.title || "Recursos Principais"}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(content.items || []).map((item: any, index: number) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <span className="text-amber-600 font-bold">{index + 1}</span>
                </div>
                <CardTitle>{item.title || `Recurso ${index + 1}`}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  {item.description || "Descrição do recurso e seus benefícios para o seu negócio."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente para a seção de Testimonials
const TestimonialsSection = ({ content }: { content: any }) => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            {content.title || "O que nossos clientes dizem"}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(content.items || []).map((item: any, index: number) => (
            <Card key={index} className="bg-white shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-amber-200 flex items-center justify-center mr-3">
                    <span className="font-bold text-amber-800">{item.name?.charAt(0) || "C"}</span>
                  </div>
                  <div>
                    <p className="font-medium">{item.name || "Nome do Cliente"}</p>
                    <p className="text-sm text-gray-500">{item.role || "Cargo, Empresa"}</p>
                  </div>
                </div>
                <p className="italic text-gray-600">
                  "{item.quote || "Depoimento do cliente sobre sua experiência com o Rook System."}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente para a seção de Pricing
const PricingSection = ({ content }: { content: any }) => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            {content.title || "Nossos Planos"}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(content.plans || []).map((plan: any, index: number) => (
            <Card key={index} className={`shadow-lg ${index === 1 ? 'border-amber-500 shadow-amber-100' : ''}`}>
              {index === 1 && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-amber-500">Mais popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name || "Plano Básico"}</CardTitle>
                <p className="text-3xl font-bold mt-4">{plan.price || "R$ 99,90"}</p>
                <p className="text-sm text-gray-500 mt-1">por mês</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  {plan.description || "Ideal para pequenos negócios iniciando sua jornada."}
                </p>
                <ul className="space-y-3">
                  {(plan.features || []).map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{feature || `Recurso ${featureIndex + 1}`}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={index === 1 ? "w-full bg-amber-600 hover:bg-amber-700" : "w-full"} 
                  variant={index === 1 ? "default" : "outline"}
                >
                  Escolher plano
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente para a seção de CTA
const CtaSection = ({ content }: { content: any }) => {
  return (
    <section className="w-full py-20 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {content.heading || "Pronto para transformar seu restaurante?"}
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          {content.description || "Agende uma demonstração gratuita e descubra como o Rook System pode otimizar seus processos."}
        </p>
        <Button className="bg-amber-600 hover:bg-amber-700 px-8 py-6 text-base">
          {content.buttonText || "Solicitar demonstração"}
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}

// Componente principal para o preview
export default function LandingPagePreview() {
  // Em um cenário real, buscaríamos esses dados da API
  const [sections, setSections] = useState([
    {
      id: '1',
      type: 'hero' as const,
      content: {
        heading: 'Rook System - Gestão financeira para restaurantes',
        subheading: 'Simplifique o planejamento orçamentário e potencialize os resultados do seu negócio',
        description: 'Automatize processos financeiros, otimize compras e controle de estoque com uma solução integrada que elimina planilhas e reduz custos operacionais.',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
        buttonText: 'Solicitar demonstração'
      }
    },
    {
      id: '2',
      type: 'features' as const,
      content: {
        title: 'Recursos Principais',
        items: [
          {
            title: 'Automação financeira',
            description: 'Automatize processos financeiros e reduza erros manuais, economizando tempo e recursos.'
          },
          {
            title: 'Controle de estoque',
            description: 'Gerencie seu estoque em tempo real, evite desperdícios e otimize seu capital de giro.'
          },
          {
            title: 'Planejamento orçamentário',
            description: 'Crie orçamentos precisos e acompanhe sua execução para melhorar seus resultados financeiros.'
          },
          {
            title: 'Gestão de fornecedores',
            description: 'Centralize informações de fornecedores, compare preços e otimize suas compras.'
          },
          {
            title: 'Análise de custos',
            description: 'Visualize seus custos detalhadamente e identifique oportunidades de economia.'
          },
          {
            title: 'Dashboard intuitivo',
            description: 'Acompanhe todos os indicadores-chave do seu negócio em uma interface simples e intuitiva.'
          }
        ]
      }
    },
    {
      id: '3',
      type: 'testimonials' as const,
      content: {
        title: 'O que nossos clientes dizem',
        items: [
          {
            name: 'Carlos Silva',
            role: 'Proprietário, Restaurante Sabor & Arte',
            quote: 'O Rook System transformou a forma como gerenciamos nossas finanças. Economizamos tempo e dinheiro, além de termos muito mais clareza sobre o desempenho do nosso negócio.'
          },
          {
            name: 'Ana Ferreira',
            role: 'Gerente Financeira, Cantina Bella Napoli',
            quote: 'A visibilidade que temos agora sobre nossos custos nos permitiu tomar decisões mais inteligentes e aumentar nossa margem de lucro em 15% em apenas três meses.'
          },
          {
            name: 'Ricardo Mendes',
            role: 'Chef Proprietário, Bistro du Chef',
            quote: 'Antes do Rook, eu gastava horas com planilhas e cálculos. Agora posso me concentrar no que realmente importa: criar experiências gastronômicas incríveis para meus clientes.'
          },
          {
            name: 'Julia Santos',
            role: 'Diretora Operacional, Rede Fast Gourmet',
            quote: 'Com múltiplas unidades para gerenciar, o Rook System nos deu o controle centralizado que precisávamos para escalar nosso negócio sem perder o controle financeiro.'
          }
        ]
      }
    },
    {
      id: '4',
      type: 'pricing' as const,
      content: {
        title: 'Planos que se adaptam ao seu negócio',
        plans: [
          {
            name: 'Básico',
            price: 'R$ 99,90',
            description: 'Ideal para pequenos estabelecimentos.',
            features: [
              'Dashboard financeiro',
              'Controle de estoque básico',
              'Relatórios mensais',
              'Suporte por e-mail'
            ]
          },
          {
            name: 'Profissional',
            price: 'R$ 199,90',
            description: 'Perfeito para restaurantes em crescimento.',
            features: [
              'Tudo do plano Básico',
              'Controle de estoque avançado',
              'Gestão de fornecedores',
              'Planejamento orçamentário',
              'Suporte prioritário',
              'Integrações com PDV'
            ]
          },
          {
            name: 'Enterprise',
            price: 'R$ 399,90',
            description: 'Para redes e operações complexas.',
            features: [
              'Tudo do plano Profissional',
              'Multi-estabelecimentos',
              'API para integração personalizada',
              'Consultoria financeira mensal',
              'Gestão de múltiplos usuários',
              'Suporte 24/7'
            ]
          }
        ]
      }
    },
    {
      id: '5',
      type: 'cta' as const,
      content: {
        heading: 'Vamos transformar seu restaurante juntos',
        description: 'Agende uma demonstração gratuita e descubra como o Rook System pode otimizar seus processos financeiros e impulsionar seus resultados.',
        buttonText: 'Começar agora',
        buttonUrl: '/contato'
      }
    }
  ])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Barra de preview */}
      <div className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-white hover:text-white hover:bg-gray-800">
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Voltar ao Editor
          </Button>
          <Separator orientation="vertical" className="h-6 bg-gray-700" />
          <span className="text-sm">Pré-visualização da Landing Page</span>
        </div>
        <div>
          <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
            <ArrowRightIcon className="h-4 w-4" />
            Editar
          </Button>
        </div>
      </div>

      {/* Renderização das seções da Landing Page */}
      <main className="flex-1">
        {sections.map((section) => {
          switch (section.type) {
            case 'hero':
              return <HeroSection key={section.id} content={section.content} />
            case 'features':
              return <FeaturesSection key={section.id} content={section.content} />
            case 'testimonials':
              return <TestimonialsSection key={section.id} content={section.content} />
            case 'pricing':
              return <PricingSection key={section.id} content={section.content} />
            case 'cta':
              return <CtaSection key={section.id} content={section.content} />
            default:
              return null
          }
        })}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Rook System</h3>
              <p className="text-gray-400">Gestão financeira inteligente para restaurantes</p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase text-gray-400 mb-4">Produto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-500">Recursos</a></li>
                <li><a href="#" className="hover:text-amber-500">Planos</a></li>
                <li><a href="#" className="hover:text-amber-500">Integrações</a></li>
                <li><a href="#" className="hover:text-amber-500">Novidades</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase text-gray-400 mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-500">Sobre nós</a></li>
                <li><a href="#" className="hover:text-amber-500">Clientes</a></li>
                <li><a href="#" className="hover:text-amber-500">Blog</a></li>
                <li><a href="#" className="hover:text-amber-500">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase text-gray-400 mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-500">Ajuda</a></li>
                <li><a href="#" className="hover:text-amber-500">Documentação</a></li>
                <li><a href="#" className="hover:text-amber-500">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Rook System. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-500">Termos</a>
              <a href="#" className="text-gray-400 hover:text-amber-500">Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-amber-500">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}