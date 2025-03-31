// app/notificacoes/page.tsx
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
  import { 
    HomeIcon, 
    BellIcon, 
    CheckIcon, 
    FilterIcon, 
    ChevronDownIcon,
    InfoIcon,
    AlertTriangleIcon,
    CheckCircleIcon,
    XIcon,
    Settings2Icon
  } from "lucide-react"
  
  export default function CentroNotificacoes() {
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
            <Button variant="link" className="px-2 font-medium">
              <BellIcon className="h-4 w-4 mr-1" />
              Centro de Notificações
            </Button>
          </nav>
        </div>
        
        {/* Cabeçalho da página */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">Centro de Notificações</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Minhas Notificações</h1>
          <p className="text-muted-foreground max-w-3xl">
            Visualize e gerencie alertas, mensagens e atualizações do sistema
          </p>
        </div>
  
        {/* Filtros e Ações */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <FilterIcon className="h-4 w-4" />
              Filtrar
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <CheckIcon className="h-4 w-4" />
              Marcar todas como lidas
            </Button>
            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <Settings2Icon className="h-4 w-4" />
              Preferências
            </Button>
          </div>
        </div>
  
        {/* Conteúdo principal */}
        <Tabs defaultValue="todas" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="todas" className="relative">
              Todas
              <Badge className="ml-2 bg-amber-100 text-amber-800 border-0">12</Badge>
            </TabsTrigger>
            <TabsTrigger value="nao-lidas" className="relative">
              Não lidas
              <Badge className="ml-2 bg-amber-100 text-amber-800 border-0">5</Badge>
            </TabsTrigger>
            <TabsTrigger value="alertas" className="relative">
              Alertas
              <Badge className="ml-2 bg-red-100 text-red-800 border-0">2</Badge>
            </TabsTrigger>
            <TabsTrigger value="sistema">Sistema</TabsTrigger>
          </TabsList>
  
          {/* Conteúdo da Tab "Todas" */}
          <TabsContent value="todas">
            <Card>
              <CardHeader className="px-6 pt-6 pb-3">
                <CardTitle className="text-base text-muted-foreground">Notificações Recentes</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-1">
                <div className="space-y-1">
                  {/* Notificação 1 - Alerta */}
                  <div className="flex items-start gap-4 p-4 border rounded-lg bg-red-50 border-red-100">
                    <AlertTriangleIcon className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-red-800">Alerta de CMV Alto</h3>
                          <p className="text-sm text-red-700">
                            O CMV do seu restaurante atingiu 35%, acima do limite recomendado de 32%.
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground rounded-full">
                            <XIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Hoje, 09:15</span>
                        <Button variant="link" size="sm" className="h-7 text-sm text-red-600 p-0">
                          Ver detalhes
                        </Button>
                      </div>
                    </div>
                  </div>
  
                  {/* Notificação 2 - Informação */}
                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <InfoIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Relatório Semanal Disponível</h3>
                          <p className="text-sm text-muted-foreground">
                            O relatório semanal de desempenho do seu restaurante já está disponível para visualização.
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground rounded-full">
                            <XIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Ontem, 18:30</span>
                        <Button variant="link" size="sm" className="h-7 text-sm text-blue-600 p-0">
                          Ver relatório
                        </Button>
                      </div>
                    </div>
                  </div>
  
                  {/* Notificação 3 - Sucesso */}
                  <div className="flex items-start gap-4 p-4 border rounded-lg bg-green-50 border-green-100">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-green-800">Importação Concluída</h3>
                          <p className="text-sm text-green-700">
                            Seus dados de fornecedores foram importados com sucesso. 32 novos fornecedores adicionados.
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground rounded-full">
                            <XIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">15/03/2025, 14:20</span>
                        <Button variant="link" size="sm" className="h-7 text-sm text-green-600 p-0">
                          Ver fornecedores
                        </Button>
                      </div>
                    </div>
                  </div>
  
                  {/* Notificação 4 - Sistema */}
                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <BellIcon className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Atualização do Sistema</h3>
                          <p className="text-sm text-muted-foreground">
                            Uma nova versão do Rook System está disponível. Novos recursos foram adicionados.
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground rounded-full">
                            <XIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">10/03/2025, 09:45</span>
                        <Button variant="link" size="sm" className="h-7 text-sm text-amber-600 p-0">
                          Ver novidades
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
  
              <Separator className="my-2" />
  
              <CardHeader className="px-6 pt-4 pb-3">
                <CardTitle className="text-base text-muted-foreground">Notificações Anteriores</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-4">
                <div className="space-y-1">
                  {/* Notificações anteriores - versão simplificada */}
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-4 border rounded-lg border-gray-100 bg-gray-50">
                      <InfoIcon className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-500">Notificação Anterior {i}</h3>
                            <p className="text-sm text-gray-400">
                              Conteúdo da notificação marcada como lida.
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400">0{i}/03/2025</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
  
              <CardFooter className="flex justify-between py-4 border-t">
                <div className="text-sm text-muted-foreground">
                  Mostrando 8 de 12 notificações
                </div>
                <Button variant="outline" size="sm">Ver mais</Button>
              </CardFooter>
            </Card>
          </TabsContent>
  
          {/* Outras tabs teriam implementação semelhante */}
          <TabsContent value="nao-lidas">
            <Card>
              <CardHeader className="px-6 pt-6 pb-3">
                <CardTitle className="text-base text-muted-foreground">Notificações Não Lidas</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-center text-muted-foreground py-8">
                    As notificações não lidas aparecerão aqui.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
  
          <TabsContent value="alertas">
            <Card>
              <CardHeader className="px-6 pt-6 pb-3">
                <CardTitle className="text-base text-muted-foreground">Alertas</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-center text-muted-foreground py-8">
                    Os alertas importantes aparecerão aqui.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
  
          <TabsContent value="sistema">
            <Card>
              <CardHeader className="px-6 pt-6 pb-3">
                <CardTitle className="text-base text-muted-foreground">Sistema</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-center text-muted-foreground py-8">
                    As notificações do sistema aparecerão aqui.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    )
  }