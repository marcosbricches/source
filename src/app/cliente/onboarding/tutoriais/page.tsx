// app/onboarding/tutoriais/page.tsx
import { 
    Card, 
    CardContent, 
    CardFooter, 
    CardHeader, 
    CardTitle, 
    CardDescription 
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
  import { Badge } from "@/components/ui/badge"
  import { Separator } from "@/components/ui/separator"
  import { Progress } from "@/components/ui/progress"
  import { 
    HomeIcon, 
    PlayIcon, 
    BookOpenIcon, 
    ChevronLeftIcon, 
    ChevronRightIcon,
    CheckIcon,
    ArrowRightIcon,
    GraduationCapIcon
  } from "lucide-react"
  
  export default function TutoriaisInterativos() {
    return (
      <div className="container py-8 max-w-5xl mx-auto">
        {/* Navegação/Breadcrumbs */}
        <div className="flex items-center border-b pb-4 mb-6">
          <nav className="flex">
            <Button variant="link" className="px-2 text-muted-foreground">
              <HomeIcon className="h-4 w-4 mr-1" />
              Dashboard
            </Button>
            <span className="text-muted-foreground flex items-center">/</span>
            <Button variant="link" className="px-2 text-muted-foreground">
              <GraduationCapIcon className="h-4 w-4 mr-1" />
              Onboarding
            </Button>
            <span className="text-muted-foreground flex items-center">/</span>
            <Button variant="link" className="px-2 font-medium">
              <BookOpenIcon className="h-4 w-4 mr-1" />
              Tutoriais Interativos
            </Button>
          </nav>
        </div>
        
        {/* Cabeçalho da página */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">Onboarding</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Tutoriais Interativos</h1>
          <p className="text-muted-foreground max-w-3xl">
            Aprenda a utilizar os principais recursos do Rook System com tutoriais passo a passo
          </p>
        </div>
        
        {/* Progresso geral */}
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Seu progresso</CardTitle>
            <CardDescription>Complete todos os tutoriais para aproveitar ao máximo o sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">2 de 5 tutoriais completos</span>
                <span className="text-sm text-muted-foreground">40%</span>
              </div>
              <Progress value={40} className="h-2" />
            </div>
          </CardContent>
        </Card>
        
        {/* Seleção de tutoriais */}
        <Tabs defaultValue="inicial" className="w-full mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="inicial" className="relative">
              Primeiros Passos
              <Badge className="ml-2 bg-green-100 text-green-800 border-0">Completo</Badge>
            </TabsTrigger>
            <TabsTrigger value="planejamento" className="relative">
              Planejamento
              <Badge className="ml-2 bg-green-100 text-green-800 border-0">Completo</Badge>
            </TabsTrigger>
            <TabsTrigger value="fornecedores" className="relative">
              Fornecedores
              <Badge className="ml-2 bg-amber-100 text-amber-800 border-0">Em progresso</Badge>
            </TabsTrigger>
            <TabsTrigger value="resultados">Resultados</TabsTrigger>
            <TabsTrigger value="dashboards">Dashboards</TabsTrigger>
          </TabsList>
          
          {/* Conteúdo dos tutoriais */}
          <TabsContent value="fornecedores">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Cadastro de Fornecedores</CardTitle>
                    <CardDescription>
                      Aprenda a gerenciar seus fornecedores e associá-los a produtos
                    </CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Passo 2 de 5
                  </div>
                </div>
                <div className="mt-2">
                  <Progress value={40} className="h-1.5" />
                </div>
              </CardHeader>
              
              <CardContent className="pt-2">
                <div className="border rounded-lg overflow-hidden">
                  {/* Área do vídeo/demonstração */}
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <PlayIcon className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                      <p className="text-muted-foreground">Tutorial interativo: Cadastro de Fornecedores</p>
                    </div>
                  </div>
                  
                  {/* Instruções do passo atual */}
                  <div className="p-6 border-t">
                    <h3 className="text-lg font-medium mb-2">
                      Como cadastrar um novo fornecedor
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Neste tutorial, você aprenderá como adicionar e gerenciar fornecedores no sistema, 
                      incluindo informações de contato, produtos e condições comerciais.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                          <CheckIcon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Navegue até o módulo de Fornecedores</p>
                          <p className="text-sm text-muted-foreground">
                            Acesse o menu principal e selecione "Fichas Técnicas e Fornecedores"
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium">2</span>
                        </div>
                        <div>
                          <p className="font-medium">Clique em "Novo Fornecedor"</p>
                          <p className="text-sm text-muted-foreground">
                            Localize o botão "Novo Fornecedor" no canto superior direito da tela
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium">3</span>
                        </div>
                        <div>
                          <p className="font-medium">Preencha as informações do fornecedor</p>
                          <p className="text-sm text-muted-foreground">
                            Complete os campos obrigatórios e adicione dados de contato
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium">4</span>
                        </div>
                        <div>
                          <p className="font-medium">Associe produtos e categorias</p>
                          <p className="text-sm text-muted-foreground">
                            Vincule os produtos que este fornecedor disponibiliza
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium">5</span>
                        </div>
                        <div>
                          <p className="font-medium">Salve e verifique as informações</p>
                          <p className="text-sm text-muted-foreground">
                            Confirme os dados e finalize o cadastro
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4">
                      <p className="text-sm text-blue-700">
                        <strong>Dica:</strong> Mantenha os dados dos fornecedores sempre atualizados para obter sugestões de compras mais precisas.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-6">
                <Button variant="outline" className="gap-2">
                  <ChevronLeftIcon className="h-4 w-4" />
                  Anterior
                </Button>
                <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
                  Próximo passo
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Outros conteúdos das tabs seriam implementados de forma similar */}
          <TabsContent value="inicial">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center py-8">
                  <div className="text-center">
                    <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckIcon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Tutorial Concluído!</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Você já completou o tutorial de Primeiros Passos. 
                      Você pode revisitá-lo a qualquer momento.
                    </p>
                    <Button variant="outline" className="gap-2">
                      <PlayIcon className="h-4 w-4" />
                      Assistir novamente
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Tutoriais recomendados */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-4">Tutoriais Recomendados</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card de tutorial recomendado 1 */}
          <Card>
            <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-t-lg">
              <PlayIcon className="h-10 w-10 text-amber-600" />
            </div>
            <CardHeader className="py-4 px-5">
              <CardTitle className="text-base">Importação de Dados</CardTitle>
              <CardDescription className="text-sm">
                Como importar dados de planilhas para o sistema
              </CardDescription>
            </CardHeader>
            <CardFooter className="py-3 px-5 border-t">
              <Button variant="link" className="h-8 p-0 text-amber-600 gap-2">
                Iniciar tutorial
                <ArrowRightIcon className="h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>
          
          {/* Card de tutorial recomendado 2 */}
          <Card>
            <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-t-lg">
              <PlayIcon className="h-10 w-10 text-amber-600" />
            </div>
            <CardHeader className="py-4 px-5">
              <CardTitle className="text-base">Análise de CMV</CardTitle>
              <CardDescription className="text-sm">
                Como interpretar e otimizar seu CMV
              </CardDescription>
            </CardHeader>
            <CardFooter className="py-3 px-5 border-t">
              <Button variant="link" className="h-8 p-0 text-amber-600 gap-2">
                Iniciar tutorial
                <ArrowRightIcon className="h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>
          
          {/* Card de tutorial recomendado 3 */}
          <Card>
            <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-t-lg">
              <PlayIcon className="h-10 w-10 text-amber-600" />
            </div>
            <CardHeader className="py-4 px-5">
              <CardTitle className="text-base">Forecasting de Crescimento</CardTitle>
              <CardDescription className="text-sm">
                Como utilizar previsões para planejamento
              </CardDescription>
            </CardHeader>
            <CardFooter className="py-3 px-5 border-t">
              <Button variant="link" className="h-8 p-0 text-amber-600 gap-2">
                Iniciar tutorial
                <ArrowRightIcon className="h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }