// app/landing-funcionalidades/page.tsx
import Link from "next/link";
import { ArrowRight, BarChart2, Check, ChefHat, ClipboardList, DollarSign, LineChart, PieChart, Settings, TrendingUp } from "lucide-react";

export default function LandingPageFuncionalidades() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">Rook</span>
            <span className="ml-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-md">System</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#solucao" className="text-gray-600 hover:text-gray-900">Solução</Link>
            <Link href="#funcionalidades" className="text-gray-600 hover:text-gray-900">Funcionalidades</Link>
            <Link href="#resultados" className="text-gray-600 hover:text-gray-900">Resultados</Link>
          </nav>
          <div>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors">
              Começar agora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-amber-500 text-white px-3 py-1 rounded-md text-sm font-medium mb-4">
                Rook System
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Você no controle do seu restaurante e lucrando mais
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Controle financeiro inteligente que transforma os números do seu restaurante em decisões estratégicas para aumentar seu lucro.
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-4 rounded-md shadow-lg">
                Comece a lucrar mais
              </button>
            </div>
            <div className="hidden md:block">
              {/* Placeholder for dashboard mockup/screenshot */}
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                <div className="h-12 bg-gray-100 border-b flex items-center px-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-600 mb-1">CMV Atual</h3>
                      <p className="text-2xl font-bold text-amber-600">32%</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-600 mb-1">Meta CMV</h3>
                      <p className="text-2xl font-bold text-green-600">28%</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 h-40 rounded-lg mb-4 flex items-center justify-center">
                    <LineChart className="h-24 w-24 text-gray-400" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="h-8 bg-gray-200 rounded"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
              Seu restaurante está lucrando o que poderia?
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12">
              Se você não sabe exatamente seus custos ou sente que poderia ganhar mais, 
              o problema pode estar no CMV fora de controle.
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <p className="text-lg text-gray-800 mb-8">
                O Rook System te ajuda a enxergar para onde está indo o seu dinheiro e a tomar 
                decisões mais seguras para melhorar a rentabilidade do seu restaurante.
              </p>
              
              <div className="space-y-4">
                {[
                  "Reduza desperdícios e aumente seu lucro.",
                  "Saiba exatamente quanto cada prato custa para você.",
                  "Compre melhor, pague menos e otimize suas margens."
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-amber-500" />
                    </div>
                    <p className="ml-3 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 py-4 px-5 bg-amber-50 border-l-4 border-amber-500 rounded">
                <p className="text-amber-800 font-medium">
                  Lucro não vem por acaso. Vem de controle e boas decisões.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucao" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Decida com segurança, ganhe mais
            </h2>
            <p className="text-xl text-gray-700">
              Os maiores vilões do seu lucro são os custos invisíveis: compras desalinhadas, 
              desperdício de insumos e pratos vendidos abaixo do que deveriam.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ClipboardList className="h-8 w-8 text-amber-500" />,
                  title: "Controle seu CMV",
                  description: "Diga adeus às planilhas complicadas e tenha controle total do seu CMV."
                },
                {
                  icon: <PieChart className="h-8 w-8 text-amber-500" />,
                  title: "Clareza nos custos",
                  description: "Entenda exatamente quanto cada prato custa e qual sua margem real."
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-amber-500" />,
                  title: "Decisões seguras",
                  description: "Base suas decisões em dados reais, não em intuição ou achismos."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 shadow p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-xl font-medium text-gray-700 mb-6">
                Quanto mais controle você tem, mais dinheiro sobra no caixa.
              </p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md">
                Começar agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como o Rook te ajuda a lucrar mais?
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: <BarChart2 className="h-8 w-8 text-amber-500" />,
                  title: "Veja seus números de forma simples e clara",
                  description: "Nada de relatórios confusos. O Rook te dá um painel intuitivo para enxergar seu CMV e margem de lucro de forma rápida."
                },
                {
                  icon: <ShoppingCart className="h-8 w-8 text-amber-500" />,
                  title: "Compre melhor, sem surpresas",
                  description: "Saiba quanto investir na hora de comprar insumos e tenha mais previsibilidade nos custos evitando gastos desnecessários."
                },
                {
                  icon: <ChefHat className="h-8 w-8 text-amber-500" />,
                  title: "Saiba o custo real dos seus pratos",
                  description: "Descubra se você está vendendo no preço certo e faça ajustes estratégicos com mais segurança."
                },
                {
                  icon: <Settings className="h-8 w-8 text-amber-500" />,
                  title: "Identifique oportunidades de economia",
                  description: "Pequenas mudanças podem gerar um impacto enorme no seu faturamento."
                }
              ].map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 py-6 px-8 bg-amber-50 border border-amber-200 rounded-lg text-center">
              <p className="text-amber-800 text-lg font-medium">
                Cada real que você economiza é um real a mais no seu lucro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Resultados reais, sem promessas exageradas
            </h2>
            <p className="text-xl text-gray-700">
              Empreendedores que testaram a metodologia do Rook já perceberam:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <DollarSign className="h-8 w-8 text-white" />,
                  title: "Mais clareza financeira",
                  description: "Visibilidade total sobre onde está o dinheiro do restaurante."
                },
                {
                  icon: <ArrowDown className="h-8 w-8 text-white" />,
                  title: "Menos desperdício",
                  description: "Redução significativa em desperdícios e mais eficiência nas compras."
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-white" />,
                  title: "Decisões mais seguras",
                  description: "Confiança para tomar decisões financeiras estratégicas."
                }
              ].map((result, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl shadow-lg p-8 text-white">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    {result.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{result.title}</h3>
                  <p className="text-amber-100 text-center">{result.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md">
                Quero esses resultados
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "O Rook transformou completamente nossa gestão financeira. Agora consigo saber exatamente quanto cada prato custa e qual a margem real.",
                  author: "Carlos Silva",
                  role: "Proprietário, Restaurante Sabores"
                },
                {
                  quote: "Reduzi meu CMV em 4% em apenas três meses usando o Rook. Isso significou um aumento de quase 20% no meu lucro líquido.",
                  author: "Ana Costa",
                  role: "Chef e Proprietária, Bistrô Gourmet"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="flex text-amber-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comece a transformar seu restaurante hoje
            </h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              Cada dia que passa é uma oportunidade de lucro que você pode estar perdendo.
            </p>
            <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-medium shadow-lg">
              Quero mais lucro no meu restaurante
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold">Rook</span>
                <span className="ml-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-md">System</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Transformando restaurantes através de inteligência financeira.
                Otimize seus custos, aumente suas margens e maximize seus lucros.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Redes sociais</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Instagram: @rook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      LinkedIn: Rook Inteligência Financeira
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Entre em contato</h3>
                <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                  Fale conosco
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Rook System. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper component for the downarrow icon
function ArrowDown(props) {
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
      <path d="M12 5v14M19 12l-7 7-7-7"/>
    </svg>
  );
}

function ShoppingCart(props) {
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
      <circle cx="8" cy="21" r="1"/>
      <circle cx="19" cy="21" r="1"/>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>
  );
}