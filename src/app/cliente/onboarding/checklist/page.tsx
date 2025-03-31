// app/onboarding/checklist/page.tsx
import { 
    Card, 
    CardContent, 
    CardFooter, 
    CardHeader, 
    CardTitle, 
    CardDescription 
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { Badge } from "@/components/ui/badge"
  import { Progress } from "@/components/ui/progress"
  import { 
    HomeIcon, 
    CheckCircleIcon, 
    ClipboardListIcon, 
    ArrowRightIcon,
    ExternalLinkIcon,
    CheckIcon,
    XIcon,
    AlertCircleIcon,
    GraduationCapIcon
  } from "lucide-react"
  
  export default function ChecklistConfiguracao() {
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
              <ClipboardListIcon className="h-4 w-4 mr-1" />
              Checklist de Configuração
            </Button>
          </nav>
        </div>
        
        {/* Cabeçalho da página */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">Onboarding</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Checklist de Configuração</h1>
          <p className="text-muted-foreground max-w-3xl">
            Complete todas as etapas abaixo para configurar completamente seu restaurante no sistema
          </p>
        </div>
        
        {/* Progresso geral */}
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg">Seu progresso</CardTitle>
                <CardDescription>4 de 10 etapas concluídas</CardDescription>
              </div>
              <div className="text-2xl font-bold text-amber-600">40%</div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={40} className="h-2" />
          </CardContent>
        </Card>
        
        {/* Lista de tarefas */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold mb-2">Configuração Inicial</h2>
          
          {/* Tarefa 1 - Concluída */}
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Criar conta</h3>
                  <p className="text-sm text-muted-foreground">
                    Configurar o acesso principal ao sistema
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700 border-0">Concluído</Badge>
              </div>
            </CardContent>
          </Card>
          
          {/* Tarefa 2 - Concluída */}
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Configurar perfil da empresa</h3>
                  <p className="text-sm text-muted-foreground">
                    Adicionar informações básicas do restaurante
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700 border-0">Concluído</Badge>
              </div>
            </CardContent>
          </Card>
          
          {/* Tarefa 3 - Em progresso */}
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <AlertCircleIcon className="h-6 w-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Assistir tutorial de introdução</h3>
                  <p className="text-sm text-muted-foreground">
                    Conhecer as principais funcionalidades do sistema
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-amber-100 text-amber-700 border-0">Em progresso</Badge>
                  <Button size="sm" className="h-8 px-3 bg-amber-600 hover:bg-amber-700">
                    Continuar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Tarefa 4 - Concluída */}
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Configurar acesso de 2 fatores</h3>
                  <p className="text-sm text-muted-foreground">
                    Aumentar a segurança da sua conta
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700 border-0">Concluído</Badge>
              </div>
            </CardContent>
          </Card>
          
          <h2 className="text-xl font-semibold mb-2 mt-6">Configuração Operacional</h2>
          
          {/* Tarefa 5 - Pendente */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <XIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Importar cardápio</h3>
                  <p className="text-sm text-muted-foreground">
                    Adicionar produtos e preços do seu restaurante
                  </p>
                </div>
                <Button size="sm" className="h-8 px-3">
                  Iniciar
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Tarefa 6 - Pendente */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <XIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Cadastrar fornecedores</h3>
                  <p className="text-sm text-muted-foreground">
                    Registrar os fornecedores principais do seu restaurante
                  </p>
                </div>
                <Button size="sm" className="h-8 px-3">
                  Iniciar
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Tarefa 7 - Pendente */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <XIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Configurar fichas técnicas</h3>
                  <p className="text-sm text-muted-foreground">
                    Adicionar receitas e insumos necessários
                  </p>
                </div>
                <Button size="sm" className="h-8 px-3">
                  Iniciar
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <h2 className="text-xl font-semibold mb-2 mt-6">Configuração Financeira</h2>
          
          {/* Tarefa 8 - Pendente */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <XIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Configurar metas financeiras</h3>
                  <p className="text-sm text-muted-foreground">
                    Definir objetivos de faturamento e CMV
                  </p>
                </div>
                <Button size="sm" className="h-8 px-3">
                  Iniciar
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Tarefa 9 - Pendente */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <XIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Importar histórico de vendas</h3>
                  <p className="text-sm text-muted-foreground">
                    Adicionar dados históricos para análise
                  </p>
                </div>
                <Button size="sm" className="h-8 px-3">
                  Iniciar
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Tarefa 10 - Pendente */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <XIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Configurar plano de assinatura</h3>
                  <p className="text-sm text-muted-foreground">
                    Escolher e ativar o plano adequado para seu restaurante
                  </p>
                </div>
                <Button size="sm" className="h-8 px-3">
                  Iniciar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Próximas etapas recomendadas */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Próximos passos recomendados</CardTitle>
            <CardDescription>
              Para aproveitar ao máximo o sistema, sugerimos completar estas etapas logo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto py-3 px-4 justify-start text-left">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <ClipboardListIcon className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-base">Cadastrar fornecedores</p>
                    <p className="text-sm text-muted-foreground">Tempo estimado: 10 min</p>
                  </div>
                </div>
              </Button>
              
              <Button variant="outline" className="h-auto py-3 px-4 justify-start text-left">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <ClipboardListIcon className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-base">Importar cardápio</p>
                    <p className="text-sm text-muted-foreground">Tempo estimado: 15 min</p>
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="link" className="gap-2 text-amber-600">
              Ver todos os tutoriais
              <ExternalLinkIcon className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        
        {/* Suporte e ajuda */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <AlertCircleIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-blue-800">Precisa de ajuda?</h3>
                <p className="text-sm text-blue-700 mb-3">
                  Nossa equipe de suporte está disponível para ajudá-lo com a configuração do sistema.
                </p>
                <Button size="sm" variant="outline" className="bg-white border-blue-200 text-blue-700 hover:bg-blue-100">
                  Contatar suporte
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }