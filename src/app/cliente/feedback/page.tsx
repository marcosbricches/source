// app/feedback/page.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown,
  Send, 
  ArrowLeft, 
  Star, 
  CheckCircle2, 
  Clock, 
  PenLine,
  List,
  BarChart,
  Filter
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AreaFeedback() {
  const [modalFeedbackAberto, setModalFeedbackAberto] = useState(false)
  const [modalAvaliacaoAberto, setModalAvaliacaoAberto] = useState(false)
  const [filtroFeedbacks, setFiltroFeedbacks] = useState("todos")
  
  // Dados de exemplo para feedbacks enviados
  const feedbacksEnviados = [
    { 
      id: "FB-2024-001", 
      titulo: "Sugestão para melhorar o módulo de compras", 
      data: "10/03/2024", 
      tipo: "sugestao", 
      status: "em_analise",
      categoria: "Compras",
      descricao: "Seria útil ter uma opção para comparar preços históricos de diferentes fornecedores diretamente na tela de sugestão de compras."
    },
    { 
      id: "FB-2024-002", 
      titulo: "Problema na exportação de relatórios", 
      data: "15/03/2024", 
      tipo: "problema", 
      status: "implementado",
      categoria: "Relatórios",
      descricao: "Ao exportar relatórios em PDF, as tabelas ficam com formatação incorreta e alguns dados não aparecem corretamente."
    },
    { 
      id: "FB-2024-003", 
      titulo: "Elogio ao novo dashboard", 
      data: "18/03/2024", 
      tipo: "elogio", 
      status: "concluido",
      categoria: "Dashboard",
      descricao: "O novo layout do dashboard está excelente! Muito mais intuitivo e fácil de acompanhar os indicadores principais."
    },
  ]
  
  // Dados de exemplo para notas de satisfação
  const avaliacoesSatisfacao = [
    { modulo: "Dashboard", nota: 4.5, avaliacoes: 32, comentarios: 12 },
    { modulo: "Fichas Técnicas", nota: 4.2, avaliacoes: 28, comentarios: 8 },
    { modulo: "Planejamento", nota: 3.8, avaliacoes: 25, comentarios: 15 },
    { modulo: "Compras", nota: 4.0, avaliacoes: 30, comentarios: 10 },
    { modulo: "Relatórios", nota: 4.7, avaliacoes: 22, comentarios: 7 },
  ]

  // Função para renderizar as estrelas com base na nota
  const renderEstrelas = (nota) => {
    const estrelas = []
    const notaInteira = Math.floor(nota)
    const temMeia = nota % 1 >= 0.5
    
    for (let i = 1; i <= 5; i++) {
      if (i <= notaInteira) {
        estrelas.push(<Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />)
      } else if (i === notaInteira + 1 && temMeia) {
        estrelas.push(
          <div key={i} className="relative">
            <Star className="h-4 w-4 text-amber-500" />
            <Star className="h-4 w-4 fill-amber-500 text-amber-500 absolute top-0 left-0" style={{clipPath: 'inset(0 50% 0 0)'}} />
          </div>
        )
      } else {
        estrelas.push(<Star key={i} className="h-4 w-4 text-amber-500" />)
      }
    }
    
    return (
      <div className="flex items-center">
        {estrelas}
        <span className="ml-2 font-medium">{nota.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <div className="container py-8 max-w-7xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 text-muted-foreground">Dashboard</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Área de Feedback</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">Área Complementar</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Área de Feedback</h1>
        <p className="text-muted-foreground max-w-3xl">
          Compartilhe suas opiniões, sugestões e experiências para nos ajudar a melhorar o Rook System.
        </p>
      </div>
      
      {/* Cards de ação rápida */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <PenLine className="h-5 w-5 text-amber-600" />
              <span>Enviar Feedback</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Compartilhe suas sugestões, reporte problemas ou envie um elogio à nossa equipe.
            </p>
            <Dialog open={modalFeedbackAberto} onOpenChange={setModalFeedbackAberto}>
              <DialogTrigger asChild>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Enviar Feedback</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <DialogTitle>Enviar Feedback</DialogTitle>
                  <DialogDescription>
                    Sua opinião é fundamental para continuarmos melhorando o Rook System.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="tipo-feedback">Tipo de Feedback</Label>
                    <RadioGroup defaultValue="sugestao" className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sugestao" id="sugestao" />
                        <Label htmlFor="sugestao" className="flex items-center gap-2">
                          <span>Sugestão</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="problema" id="problema" />
                        <Label htmlFor="problema" className="flex items-center gap-2">
                          <span>Problema</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="elogio" id="elogio" />
                        <Label htmlFor="elogio" className="flex items-center gap-2">
                          <span>Elogio</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="categoria-feedback">Categoria</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dashboard">Dashboard</SelectItem>
                        <SelectItem value="fichas">Fichas Técnicas</SelectItem>
                        <SelectItem value="planejamento">Planejamento</SelectItem>
                        <SelectItem value="compras">Compras</SelectItem>
                        <SelectItem value="relatorios">Relatórios</SelectItem>
                        <SelectItem value="interface">Interface do Usuário</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="titulo-feedback">Título</Label>
                    <Input id="titulo-feedback" placeholder="Resumo do seu feedback" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="descricao-feedback">Descrição detalhada</Label>
                    <Textarea id="descricao-feedback" placeholder="Descreva seu feedback em detalhes" rows={5} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="anexo-feedback" className="flex justify-between">
                      <span>Anexos (opcional)</span>
                      <span className="text-xs text-muted-foreground">Imagens, capturas de tela, etc.</span>
                    </Label>
                    <Input id="anexo-feedback" type="file" multiple />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setModalFeedbackAberto(false)}>Cancelar</Button>
                  <Button 
                    className="bg-amber-600 hover:bg-amber-700" 
                    onClick={() => setModalFeedbackAberto(false)}
                  >
                    Enviar Feedback
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-600" />
              <span>Avaliar Módulos</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Avalie sua experiência nos diferentes módulos do sistema e ajude a identificar áreas para melhorias.
            </p>
            <Dialog open={modalAvaliacaoAberto} onOpenChange={setModalAvaliacaoAberto}>
              <DialogTrigger asChild>
                <Button className="w-full" variant="outline">
                  <span>Avaliar Módulos</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <DialogTitle>Avaliar Módulos</DialogTitle>
                  <DialogDescription>
                    Classifique sua experiência com cada módulo do sistema.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid gap-2">
                    <Label>Qual módulo você deseja avaliar?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um módulo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dashboard">Dashboard</SelectItem>
                        <SelectItem value="fichas">Fichas Técnicas</SelectItem>
                        <SelectItem value="planejamento">Planejamento</SelectItem>
                        <SelectItem value="compras">Compras</SelectItem>
                        <SelectItem value="relatorios">Relatórios</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label>Sua avaliação</Label>
                    <div className="flex items-center gap-2 text-2xl">
                      {[1, 2, 3, 4, 5].map((valor) => (
                        <Button key={valor} variant="ghost" className="p-2 h-auto">
                          <Star className={`h-8 w-8 ${valor <= 3 ? 'text-amber-500' : 'text-amber-500 fill-amber-500'}`} />
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="comentario-avaliacao">Comentários (opcional)</Label>
                    <Textarea 
                      id="comentario-avaliacao" 
                      placeholder="Compartilhe sua experiência com este módulo" 
                      rows={4} 
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label>O que você mais gosta neste módulo?</Label>
                    <RadioGroup className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="usabilidade" id="usabilidade" />
                        <Label htmlFor="usabilidade">Facilidade de uso</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="visual" id="visual" />
                        <Label htmlFor="visual">Design visual</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="funcionalidades" id="funcionalidades" />
                        <Label htmlFor="funcionalidades">Funcionalidades disponíveis</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="performance" id="performance" />
                        <Label htmlFor="performance">Velocidade/Performance</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="outro" id="outro" />
                        <Label htmlFor="outro">Outro</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setModalAvaliacaoAberto(false)}>Cancelar</Button>
                  <Button 
                    className="bg-amber-600 hover:bg-amber-700" 
                    onClick={() => setModalAvaliacaoAberto(false)}
                  >
                    Enviar Avaliação
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-amber-600" />
              <span>Ver Estatísticas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Consulte as estatísticas de feedback e veja como suas contribuições estão ajudando a melhorar o sistema.
            </p>
            <Button className="w-full" variant="outline">
              <span>Ver Estatísticas</span>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Conteúdo principal com tabs */}
      <Tabs defaultValue="meus_feedbacks" className="space-y-8">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="meus_feedbacks" className="flex items-center gap-2">
            <List className="h-4 w-4" />
            <span>Meus Feedbacks</span>
          </TabsTrigger>
          <TabsTrigger value="satisfacao" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span>Índices de Satisfação</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Conteúdo da aba Meus Feedbacks */}
        <TabsContent value="meus_feedbacks" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-2xl font-bold">Feedbacks Enviados</h2>
            
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
              <Select 
                value={filtroFeedbacks}
                onValueChange={setFiltroFeedbacks}
              >
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os tipos</SelectItem>
                  <SelectItem value="sugestao">Sugestões</SelectItem>
                  <SelectItem value="problema">Problemas</SelectItem>
                  <SelectItem value="elogio">Elogios</SelectItem>
                </SelectContent>
              </Select>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Filter className="h-4 w-4 mr-2" />
                    <span>Filtrar</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Mais recentes</DropdownMenuItem>
                  <DropdownMenuItem>Mais antigos</DropdownMenuItem>
                  <DropdownMenuItem>Em análise</DropdownMenuItem>
                  <DropdownMenuItem>Implementados</DropdownMenuItem>
                  <DropdownMenuItem>Todos os status</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {feedbacksEnviados.length > 0 ? (
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {feedbacksEnviados.map((feedback, index) => (
                    <div key={index} className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge 
                              className={
                                feedback.tipo === "sugestao" ? "bg-blue-500" : 
                                feedback.tipo === "problema" ? "bg-red-500" : 
                                "bg-green-500"
                              }
                            >
                              {feedback.tipo === "sugestao" ? "Sugestão" : 
                              feedback.tipo === "problema" ? "Problema" : 
                              "Elogio"}
                            </Badge>
                            <Badge variant="outline">{feedback.categoria}</Badge>
                            <span className="text-sm text-muted-foreground">{feedback.id}</span>
                          </div>
                          <h3 className="font-medium text-lg mb-1">{feedback.titulo}</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            <span>Enviado em {feedback.data}</span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <Badge 
                            className={
                              feedback.status === "em_analise" ? "bg-amber-500" : 
                              feedback.status === "implementado" ? "bg-green-500" : 
                              "bg-gray-500"
                            }
                          >
                            {feedback.status === "em_analise" ? "Em análise" : 
                            feedback.status === "implementado" ? "Implementado" : 
                            "Concluído"}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{feedback.descricao}</p>
                      
                      {feedback.status === "implementado" && (
                        <div className="bg-green-50 border border-green-100 rounded-md p-3 mb-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                            <div>
                              <p className="font-medium text-green-800">Implementado na versão 2.3.0</p>
                              <p className="text-green-700">Obrigado por sua sugestão! Implementamos esta funcionalidade na atualização de 12/03/2024.</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm" className="gap-2">
                          <span>Ver detalhes</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-8">
                <MessageSquare className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">Nenhum feedback enviado</h3>
                <p className="text-muted-foreground mb-6 text-center max-w-md">
                  Você ainda não enviou nenhum feedback. Compartilhe suas sugestões, problemas ou elogios para nos ajudar a melhorar.
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Enviar Feedback</span>
                </Button>
              </CardContent>
            </Card>
          )}
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </TabsContent>
        
        {/* Conteúdo da aba Índices de Satisfação */}
        <TabsContent value="satisfacao" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Índices de Satisfação</h2>
            
            <Select defaultValue="ultimos_30">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ultimos_30">Últimos 30 dias</SelectItem>
                <SelectItem value="ultimos_90">Últimos 90 dias</SelectItem>
                <SelectItem value="ano_atual">Ano atual</SelectItem>
                <SelectItem value="todos">Todo o período</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Resumo de satisfação */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Satisfação Geral</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-4xl font-bold mr-2">4.2</div>
                  <div className="flex">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 text-amber-500" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Baseado em 137 avaliações</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Avaliações Positivas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-4xl font-bold mr-2 text-green-600">78%</div>
                  <ThumbsUp className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">4-5 estrelas</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Avaliações Neutras</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-4xl font-bold mr-2 text-amber-600">15%</div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">3 estrelas</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Avaliações Negativas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-4xl font-bold mr-2 text-red-600">7%</div>
                  <ThumbsDown className="h-6 w-6 text-red-600" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">1-2 estrelas</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Avaliações por módulo */}
          <Card>
            <CardHeader>
              <CardTitle>Avaliações por Módulo</CardTitle>
              <CardDescription>
                Veja as avaliações de satisfação para cada módulo do sistema.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {avaliacoesSatisfacao.map((avaliacao, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium">{avaliacao.modulo}</div>
                      <div className="flex items-center gap-2">
                        {renderEstrelas(avaliacao.nota)}
                        <span className="text-sm text-muted-foreground">({avaliacao.avaliacoes})</span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full mb-1">
                      <div 
                        className="h-full bg-amber-500 rounded-full" 
                        style={{ width: `${(avaliacao.nota / 5) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{avaliacao.comentarios} comentários</span>
                      <Button variant="link" className="p-0 h-auto text-xs">
                        Ver comentários
                      </Button>
                    </div>
                    {index < avaliacoesSatisfacao.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Comentários recentes */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Comentários Recentes</CardTitle>
                <CardDescription>
                  Os comentários mais recentes deixados pelos usuários.
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Ver todos
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Comentário 1 */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-500">Dashboard</Badge>
                      <div className="flex">
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">15/03/2024</span>
                  </div>
                  <p className="text-sm">
                    "O novo dashboard é muito mais intuitivo e facilita o acompanhamento dos KPIs principais. Consigo identificar rapidamente áreas que precisam de atenção."
                  </p>
                </div>
                
                {/* Comentário 2 */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-500">Planejamento</Badge>
                      <div className="flex">
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                        <Star className="h-4 w-4 text-amber-500" />
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">12/03/2024</span>
                  </div>
                  <p className="text-sm">
                    "As ferramentas de planejamento funcionam muito bem, especialmente a projeção de custos. Facilitou muito nosso controle financeiro. Seria bom ter mais opções de visualização de dados."
                  </p>
                </div>
                
                {/* Comentário 3 */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-500">Compras</Badge>
                      <div className="flex">
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                        <Star className="h-4 w-4 text-amber-500" />
                        <Star className="h-4 w-4 text-amber-500" />
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">10/03/2024</span>
                  </div>
                  <p className="text-sm">
                    "As sugestões de compras são muito úteis, mas o sistema poderia simplificar o processo de aprovação de pedidos para fornecedores múltiplos."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Seção de conclusão */}
      <Alert className="mt-12 border-green-200 bg-green-50">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-800">Sua opinião é valiosa</AlertTitle>
        <AlertDescription className="text-green-700">
          Agradecemos por compartilhar suas experiências e sugestões. Nosso time de desenvolvimento analisa todos os feedbacks para continuar melhorando o Rook System.
        </AlertDescription>
      </Alert>
    </div>
  )
}