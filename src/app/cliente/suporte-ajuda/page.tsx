// app/suporte-ajuda/page.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  Search, 
  HelpCircle, 
  MessageSquare, 
  FileText, 
  Play, 
  Book, 
  Send, 
  ArrowRight, 
  Download, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  PenSquare
} from "lucide-react"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SuporteAjuda() {
  const [searchQuery, setSearchQuery] = useState("")
  const [novoTicketAberto, setNovoTicketAberto] = useState(false)
  
  // Dados de exemplo para tickets de suporte
  const tickets = [
    { id: "TK-2024-001", titulo: "Dúvida sobre importação de dados", data: "12/03/2024", status: "respondido", categoria: "Importação" },
    { id: "TK-2024-002", titulo: "Problema ao gerar relatório de fornecedores", data: "15/03/2024", status: "pendente", categoria: "Relatórios" },
    { id: "TK-2024-003", titulo: "Erro ao salvar ficha técnica", data: "18/03/2024", status: "em_andamento", categoria: "Fichas Técnicas" },
  ]

  // Dados de exemplo para FAQs
  const faqs = [
    {
      categoria: "Geral",
      perguntas: [
        { 
          pergunta: "Como faço para alterar meus dados de perfil?", 
          resposta: "Para alterar seus dados de perfil, acesse o menu do usuário no canto superior direito e selecione 'Perfil do Usuário'. Na página de perfil, você encontrará opções para atualizar suas informações pessoais, alterar sua foto e modificar suas preferências de notificação." 
        },
        { 
          pergunta: "Posso ter múltiplos usuários em minha conta?", 
          resposta: "Sim, dependendo do seu plano de assinatura. Planos Básicos permitem até 3 usuários, enquanto planos Premium e Enterprise oferecem usuários ilimitados. Para adicionar novos usuários, acesse 'Configurações da Conta' > 'Gerenciar Usuários' > 'Adicionar Usuário'." 
        },
        { 
          pergunta: "Como faço para atualizar meu plano de assinatura?", 
          resposta: "Para atualizar seu plano, acesse o módulo 'Planos e Assinaturas' no menu principal. Lá você poderá visualizar as opções disponíveis, comparar recursos e fazer upgrade. Alterações no plano serão aplicadas imediatamente, com ajustes pro-rata na cobrança." 
        }
      ]
    },
    {
      categoria: "Fichas Técnicas",
      perguntas: [
        { 
          pergunta: "Como importar dados de fornecedores de uma planilha?", 
          resposta: "Para importar fornecedores de uma planilha, acesse o módulo 'Fichas Técnicas e Fornecedores', clique em 'Importação de Fornecedores'. Você poderá fazer upload de arquivos CSV ou Excel. O sistema validará os dados antes da importação final." 
        },
        { 
          pergunta: "Posso editar múltiplas fichas técnicas ao mesmo tempo?", 
          resposta: "Sim, na lista de fichas técnicas, utilize a seleção múltipla marcando as caixas à esquerda de cada item. Depois, use o botão 'Ações em Lote' para aplicar alterações como atualização de categoria, status ou exclusão em massa." 
        }
      ]
    },
    {
      categoria: "Planejamento",
      perguntas: [
        { 
          pergunta: "Como o sistema calcula as sugestões de compras?", 
          resposta: "O sistema utiliza diversos fatores para gerar sugestões de compras: histórico de vendas, sazonalidade, estoque atual, ponto de reposição, lead time dos fornecedores e projeções de demanda baseadas em seus dados históricos e tendências do setor." 
        },
        { 
          pergunta: "Posso ajustar manualmente as sugestões de compras?", 
          resposta: "Sim, todas as sugestões são editáveis. Na tela de sugestão de compras, você pode ajustar as quantidades clicando no valor e inserindo a nova quantidade. O sistema manterá suas modificações, mas indicará visualmente quais itens foram alterados manualmente." 
        }
      ]
    }
  ]

  // Dados de exemplo para documentação
  const documentacao = [
    { titulo: "Guia de Início Rápido", descricao: "Aprenda a configurar sua conta e começar a usar o sistema.", categoria: "Iniciante", tamanho: "2.5 MB" },
    { titulo: "Manual do Usuário Completo", descricao: "Documentação detalhada de todas as funcionalidades do sistema.", categoria: "Completo", tamanho: "8.7 MB" },
    { titulo: "Guia de Importação de Dados", descricao: "Como preparar e importar dados de fontes externas.", categoria: "Intermediário", tamanho: "3.1 MB" },
    { titulo: "Melhores Práticas de Planejamento", descricao: "Otimize seu uso do módulo de planejamento orçamentário.", categoria: "Avançado", tamanho: "4.2 MB" },
    { titulo: "Relatórios e Análises", descricao: "Como interpretar e extrair valor dos relatórios do sistema.", categoria: "Intermediário", tamanho: "5.0 MB" },
  ]

  // Dados de exemplo para tutoriais em vídeo
  const tutoriais = [
    { 
      titulo: "Configuração Inicial", 
      descricao: "Como configurar sua conta para obter o melhor do Rook System", 
      duracao: "4:32",
      thumbnail: "configuracao-inicial.jpg" 
    },
    { 
      titulo: "Criando Fichas Técnicas", 
      descricao: "Aprenda a criar fichas técnicas detalhadas para seus produtos", 
      duracao: "7:15",
      thumbnail: "fichas-tecnicas.jpg" 
    },
    { 
      titulo: "Importando Fornecedores", 
      descricao: "Como importar e gerenciar sua base de fornecedores", 
      duracao: "5:48",
      thumbnail: "importacao-fornecedores.jpg" 
    },
    { 
      titulo: "Planejamento Orçamentário", 
      descricao: "Utilizando o módulo de planejamento para otimizar seus custos", 
      duracao: "9:22",
      thumbnail: "planejamento.jpg" 
    },
    { 
      titulo: "Relatórios e Dashboards", 
      descricao: "Extraindo insights dos relatórios e dashboards", 
      duracao: "6:54",
      thumbnail: "relatorios.jpg" 
    }
  ]

  return (
    <div className="container py-8 max-w-7xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 text-muted-foreground">Dashboard</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Suporte e Ajuda</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">Área Complementar</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Suporte e Ajuda</h1>
        <p className="text-muted-foreground max-w-3xl">
          Encontre respostas para suas dúvidas, acesse documentação e entre em contato com nossa equipe de suporte.
        </p>
      </div>
      
      {/* Barra de pesquisa */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input 
          placeholder="Pesquisar por tópicos, dúvidas ou tutoriais..." 
          className="pl-10 py-6 text-base"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Conteúdo principal com tabs */}
      <Tabs defaultValue="faq" className="space-y-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
          <TabsTrigger value="faq" className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            <span className="hidden md:inline">Perguntas Frequentes</span>
            <span className="inline md:hidden">FAQ</span>
          </TabsTrigger>
          <TabsTrigger value="tickets" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span className="hidden md:inline">Tickets de Suporte</span>
            <span className="inline md:hidden">Tickets</span>
          </TabsTrigger>
          <TabsTrigger value="docs" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">Documentação</span>
            <span className="inline md:hidden">Docs</span>
          </TabsTrigger>
          <TabsTrigger value="tutoriais" className="flex items-center gap-2">
            <Play className="h-4 w-4" />
            <span className="hidden md:inline">Tutoriais em Vídeo</span>
            <span className="inline md:hidden">Vídeos</span>
          </TabsTrigger>
          <TabsTrigger value="glossario" className="flex items-center gap-2">
            <Book className="h-4 w-4" />
            <span>Glossário</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Conteúdo da aba FAQ */}
        <TabsContent value="faq" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Perguntas Frequentes</h2>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <HelpCircle className="h-4 w-4" />
                  <span>Não encontrou sua dúvida?</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <DialogTitle>Enviar Nova Pergunta</DialogTitle>
                  <DialogDescription>
                    Preencha o formulário abaixo para enviar sua dúvida à nossa equipe de suporte.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="assunto">Assunto</Label>
                    <Input id="assunto" placeholder="Digite um título para sua pergunta" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="categoria">Categoria</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="geral">Geral</SelectItem>
                        <SelectItem value="fichas">Fichas Técnicas</SelectItem>
                        <SelectItem value="planejamento">Planejamento</SelectItem>
                        <SelectItem value="importacao">Importação de Dados</SelectItem>
                        <SelectItem value="relatorios">Relatórios</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="mensagem">Sua pergunta</Label>
                    <Textarea id="mensagem" placeholder="Descreva sua dúvida em detalhes" rows={5} />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancelar</Button>
                  <Button type="submit" className="bg-amber-600 hover:bg-amber-700">Enviar Pergunta</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          
          {faqs.map((categoria, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{categoria.categoria}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {categoria.perguntas.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-base font-medium">{faq.pergunta}</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        {faq.resposta}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        {/* Conteúdo da aba Tickets */}
        <TabsContent value="tickets" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-2xl font-bold">Tickets de Suporte</h2>
            
            <Dialog open={novoTicketAberto} onOpenChange={setNovoTicketAberto}>
              <DialogTrigger asChild>
                <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Novo Ticket de Suporte</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <DialogTitle>Abrir Novo Ticket de Suporte</DialogTitle>
                  <DialogDescription>
                    Descreva seu problema ou dúvida em detalhes para que possamos ajudar.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="assunto-ticket">Assunto</Label>
                    <Input id="assunto-ticket" placeholder="Resumo do seu problema ou dúvida" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="categoria-ticket">Categoria</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="acesso">Acesso e Login</SelectItem>
                        <SelectItem value="fichas">Fichas Técnicas</SelectItem>
                        <SelectItem value="planejamento">Planejamento</SelectItem>
                        <SelectItem value="importacao">Importação/Exportação</SelectItem>
                        <SelectItem value="relatorios">Relatórios</SelectItem>
                        <SelectItem value="cobranca">Cobrança e Assinatura</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="prioridade">Prioridade</Label>
                    <Select defaultValue="media">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="baixa">Baixa - Tenho uma dúvida</SelectItem>
                        <SelectItem value="media">Média - Estou enfrentando dificuldades</SelectItem>
                        <SelectItem value="alta">Alta - Não consigo continuar meu trabalho</SelectItem>
                        <SelectItem value="urgente">Urgente - Problema crítico para o negócio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="descricao-ticket">Descrição detalhada</Label>
                    <Textarea id="descricao-ticket" placeholder="Descreva seu problema, incluindo passos para reproduzi-lo e o resultado esperado" rows={5} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="anexo-ticket" className="flex justify-between">
                      <span>Anexos (opcional)</span>
                      <span className="text-xs text-muted-foreground">Máx. 5MB por arquivo</span>
                    </Label>
                    <Input id="anexo-ticket" type="file" multiple />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setNovoTicketAberto(false)}>Cancelar</Button>
                  <Button 
                    className="bg-amber-600 hover:bg-amber-700" 
                    onClick={() => setNovoTicketAberto(false)}
                  >
                    Enviar Ticket
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          
          {tickets.length > 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>Seus Tickets</CardTitle>
                <CardDescription>
                  Acompanhe o status dos seus tickets de suporte abertos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tickets.map((ticket, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col md:flex-row justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge 
                            className={
                              ticket.status === "respondido" ? "bg-green-500" : 
                              ticket.status === "em_andamento" ? "bg-blue-500" : 
                              "bg-amber-500"
                            }
                          >
                            {ticket.status === "respondido" ? "Respondido" : 
                             ticket.status === "em_andamento" ? "Em andamento" : 
                             "Pendente"}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{ticket.id}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <Badge variant="outline">{ticket.categoria}</Badge>
                        </div>
                        <h3 className="font-medium text-lg">{ticket.titulo}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          <span>Aberto em {ticket.data}</span>
                        </div>
                      </div>
                      <div className="flex items-center mt-4 md:mt-0">
                        <Button variant="outline" className="gap-2 w-full md:w-auto">
                          <MessageSquare className="h-4 w-4" />
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
                <h3 className="text-xl font-medium mb-2">Nenhum ticket aberto</h3>
                <p className="text-muted-foreground mb-6 text-center max-w-md">
                  Você não possui tickets de suporte abertos no momento. Se precisar de ajuda, abra um novo ticket.
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Novo Ticket de Suporte</span>
                </Button>
              </CardContent>
            </Card>
          )}
          
          <Alert>
            <HelpCircle className="h-4 w-4" />
            <AlertTitle>Precisa de ajuda imediata?</AlertTitle>
            <AlertDescription>
              Para problemas urgentes, entre em contato diretamente com nossa central de suporte pelo telefone <span className="font-medium">(11) 4678-9012</span>, disponível em dias úteis das 8h às 18h.
            </AlertDescription>
          </Alert>
        </TabsContent>
        
        {/* Conteúdo da aba Documentação */}
        <TabsContent value="docs" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Documentação</h2>
            
            <Select defaultValue="todos">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os níveis</SelectItem>
                <SelectItem value="iniciante">Iniciante</SelectItem>
                <SelectItem value="intermediario">Intermediário</SelectItem>
                <SelectItem value="avancado">Avançado</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {documentacao.map((doc, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline">{doc.categoria}</Badge>
                    <span className="text-xs text-muted-foreground">{doc.tamanho}</span>
                  </div>
                  <CardTitle className="mt-2">{doc.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{doc.descricao}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="h-4 w-4" />
                    <span>Baixar PDF</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Conteúdo da aba Tutoriais */}
        <TabsContent value="tutoriais" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Tutoriais em Vídeo</h2>
            
            <Select defaultValue="recentes">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recentes">Mais recentes</SelectItem>
                <SelectItem value="populares">Mais populares</SelectItem>
                <SelectItem value="iniciantes">Para iniciantes</SelectItem>
                <SelectItem value="avancados">Técnicas avançadas</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {tutoriais.map((tutorial, index) => (
              <Card key={index} className="overflow-hidden flex flex-col">
                <div className="aspect-video bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="ghost" className="rounded-full h-12 w-12 flex items-center justify-center">
                      <Play className="h-6 w-6" />
                    </Button>
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {tutorial.duracao}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{tutorial.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{tutorial.descricao}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full gap-2">
                    <Play className="h-4 w-4" />
                    <span>Assistir Tutorial</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline" className="gap-2">
              <span>Ver mais tutoriais</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        
        {/* Conteúdo da aba Glossário */}
        <TabsContent value="glossario" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Glossário de Termos</h2>
            
            <Input 
              placeholder="Filtrar termos..." 
              className="w-full md:w-64"
            />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Termos técnicos do Rook System</CardTitle>
              <CardDescription>
                Um guia dos principais termos e conceitos utilizados no sistema.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-medium mb-1">CMV (Custo de Mercadoria Vendida)</h3>
                  <p className="text-muted-foreground">
                    Valor total gasto com insumos para produzir os itens vendidos em um determinado período. É uma métrica fundamental para análise de lucratividade no setor de restaurantes.
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="text-lg font-medium mb-1">Ficha Técnica</h3>
                  <p className="text-muted-foreground">
                    Documento que contém todas as informações necessárias para a produção padronizada de um item, incluindo ingredientes, quantidades, modo de preparo e custo estimado.
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="text-lg font-medium mb-1">Forecasting</h3>
                  <p className="text-muted-foreground">
                    Método de projeção de vendas e resultados futuros baseado em dados históricos, tendências sazonais e outros fatores relevantes para o negócio.
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="text-lg font-medium mb-1">Lead Time</h3>
                  <p className="text-muted-foreground">
                    Tempo decorrido entre o pedido de compra e a entrega efetiva dos produtos pelo fornecedor. É considerado no cálculo de necessidade de estoque.
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="text-lg font-medium mb-1">Ponto de Reposição</h3>
                  <p className="text-muted-foreground">
                    Nível mínimo de estoque que, quando atingido, sinaliza a necessidade de um novo pedido para evitar o desabastecimento, considerando o lead time do fornecedor.
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="text-lg font-medium mb-1">Quebra Operacional</h3>
                  <p className="text-muted-foreground">
                    Perda de insumos durante o processo produtivo, seja por fatores naturais (como evaporação), erros na produção ou desperdício. É considerada no cálculo de CMV.
                  </p>
                </div>
                
                <div className="pb-4">
                  <h3 className="text-lg font-medium mb-1">Sazonalidade</h3>
                  <p className="text-muted-foreground">
                    Variação periódica e previsível na demanda ou nos preços de insumos, que ocorre em determinadas épocas do ano. O sistema utiliza esses padrões para ajustar previsões.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Seção de contato rápido */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-xl font-bold mb-6">Precisa de mais ajuda?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-amber-600" />
                <span>Chat ao Vivo</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Converse em tempo real com um especialista de nossa equipe de suporte.
              </p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Iniciar Chat</span>
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <PenSquare className="h-5 w-5 text-amber-600" />
                <span>Solicitar Treinamento</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Agende uma sessão de treinamento personalizada para sua equipe.
              </p>
              <Button className="w-full" variant="outline">
                <span>Agendar Treinamento</span>
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <span>Reportar Problema</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Encontrou um bug ou problema técnico? Informe nossa equipe.
              </p>
              <Button className="w-full" variant="outline">
                <span>Reportar Bug</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}