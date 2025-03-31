// app/(admin)/edicao-landing-page/page.tsx
"use client"

import { useState, useRef } from "react"
import { ArrowLeftIcon, SaveIcon, EyeIcon, GripVertical, PlusIcon, Trash2Icon, ChevronUpIcon, ChevronDownIcon, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckIcon, AlertCircleIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { 
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// Tipos de seções disponíveis
type SectionType = 'hero' | 'features' | 'testimonials' | 'pricing' | 'cta'

// Interface para cada seção
interface Section {
  id: string
  type: SectionType
  title: string
  content: Record<string, any>
  isOpen: boolean
}

// Componente para cada seção arrastável
function SortableSection({ section, onUpdate, onRemove, onToggle }: { 
  section: Section, 
  onUpdate: (id: string, content: Record<string, any>) => void,
  onRemove: (id: string) => void,
  onToggle: (id: string) => void
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: section.id })
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }
  
  const handleContentChange = (key: string, value: any) => {
    const newContent = { ...section.content, [key]: value }
    onUpdate(section.id, newContent)
  }
  
  // Renderização condicional baseada no tipo da seção
  const renderSectionEditor = () => {
    switch(section.type) {
      case 'hero':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`${section.id}-heading`}>Título</Label>
              <Input 
                id={`${section.id}-heading`} 
                value={section.content.heading || ''}
                onChange={(e) => handleContentChange('heading', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${section.id}-subheading`}>Subtítulo</Label>
              <Input 
                id={`${section.id}-subheading`} 
                value={section.content.subheading || ''}
                onChange={(e) => handleContentChange('subheading', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${section.id}-description`}>Descrição</Label>
              <Textarea 
                id={`${section.id}-description`} 
                value={section.content.description || ''}
                onChange={(e) => handleContentChange('description', e.target.value)}
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label>Imagem Principal</Label>
              <div className="flex items-center gap-4">
                <div className="border rounded-md overflow-hidden w-24 h-24 bg-gray-50 flex items-center justify-center">
                  {section.content.imageUrl ? (
                    <img 
                      src={section.content.imageUrl} 
                      alt="Hero" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImageIcon className="h-8 w-8 text-gray-300" />
                  )}
                </div>
                <Button variant="outline" size="sm">Alterar Imagem</Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${section.id}-buttonText`}>Texto do Botão</Label>
              <Input 
                id={`${section.id}-buttonText`} 
                value={section.content.buttonText || ''}
                onChange={(e) => handleContentChange('buttonText', e.target.value)}
              />
            </div>
          </div>
        )
      
      case 'features':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`${section.id}-title`}>Título da Seção</Label>
              <Input 
                id={`${section.id}-title`} 
                value={section.content.title || ''}
                onChange={(e) => handleContentChange('title', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Recursos</Label>
              <div className="space-y-4">
                {(section.content.items || []).map((item: any, index: number) => (
                  <Card key={index} className="p-3">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-medium">Recurso {index + 1}</h4>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                          const newItems = [...section.content.items]
                          newItems.splice(index, 1)
                          handleContentChange('items', newItems)
                        }}
                      >
                        <Trash2Icon className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Input 
                        placeholder="Título do recurso" 
                        value={item.title || ''}
                        onChange={(e) => {
                          const newItems = [...section.content.items]
                          newItems[index] = { ...newItems[index], title: e.target.value }
                          handleContentChange('items', newItems)
                        }}
                      />
                      <Textarea 
                        placeholder="Descrição do recurso" 
                        value={item.description || ''}
                        onChange={(e) => {
                          const newItems = [...section.content.items]
                          newItems[index] = { ...newItems[index], description: e.target.value }
                          handleContentChange('items', newItems)
                        }}
                        rows={2}
                      />
                    </div>
                  </Card>
                ))}
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    const newItems = [...(section.content.items || []), { title: '', description: '' }]
                    handleContentChange('items', newItems)
                  }}
                >
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Adicionar Recurso
                </Button>
              </div>
            </div>
          </div>
        )
      
      case 'testimonials':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`${section.id}-title`}>Título da Seção</Label>
              <Input 
                id={`${section.id}-title`} 
                value={section.content.title || ''}
                onChange={(e) => handleContentChange('title', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Depoimentos</Label>
              <div className="space-y-4">
                {(section.content.items || []).map((item: any, index: number) => (
                  <Card key={index} className="p-3">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-medium">Depoimento {index + 1}</h4>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                          const newItems = [...section.content.items]
                          newItems.splice(index, 1)
                          handleContentChange('items', newItems)
                        }}
                      >
                        <Trash2Icon className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Input 
                        placeholder="Nome do cliente" 
                        value={item.name || ''}
                        onChange={(e) => {
                          const newItems = [...section.content.items]
                          newItems[index] = { ...newItems[index], name: e.target.value }
                          handleContentChange('items', newItems)
                        }}
                      />
                      <Input 
                        placeholder="Empresa/Cargo" 
                        value={item.role || ''}
                        onChange={(e) => {
                          const newItems = [...section.content.items]
                          newItems[index] = { ...newItems[index], role: e.target.value }
                          handleContentChange('items', newItems)
                        }}
                      />
                      <Textarea 
                        placeholder="Depoimento" 
                        value={item.quote || ''}
                        onChange={(e) => {
                          const newItems = [...section.content.items]
                          newItems[index] = { ...newItems[index], quote: e.target.value }
                          handleContentChange('items', newItems)
                        }}
                        rows={3}
                      />
                    </div>
                  </Card>
                ))}
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    const newItems = [...(section.content.items || []), { name: '', role: '', quote: '' }]
                    handleContentChange('items', newItems)
                  }}
                >
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Adicionar Depoimento
                </Button>
              </div>
            </div>
          </div>
        )
      
      case 'pricing':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`${section.id}-title`}>Título da Seção</Label>
              <Input 
                id={`${section.id}-title`} 
                value={section.content.title || ''}
                onChange={(e) => handleContentChange('title', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Planos</Label>
              <div className="space-y-4">
                {(section.content.plans || []).map((plan: any, index: number) => (
                  <Card key={index} className="p-3">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-medium">Plano {index + 1}</h4>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                          const newPlans = [...section.content.plans]
                          newPlans.splice(index, 1)
                          handleContentChange('plans', newPlans)
                        }}
                      >
                        <Trash2Icon className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Input 
                        placeholder="Nome do plano" 
                        value={plan.name || ''}
                        onChange={(e) => {
                          const newPlans = [...section.content.plans]
                          newPlans[index] = { ...newPlans[index], name: e.target.value }
                          handleContentChange('plans', newPlans)
                        }}
                      />
                      <Input 
                        placeholder="Preço" 
                        value={plan.price || ''}
                        onChange={(e) => {
                          const newPlans = [...section.content.plans]
                          newPlans[index] = { ...newPlans[index], price: e.target.value }
                          handleContentChange('plans', newPlans)
                        }}
                      />
                      <Textarea 
                        placeholder="Descrição" 
                        value={plan.description || ''}
                        onChange={(e) => {
                          const newPlans = [...section.content.plans]
                          newPlans[index] = { ...newPlans[index], description: e.target.value }
                          handleContentChange('plans', newPlans)
                        }}
                        rows={2}
                      />
                      <div className="space-y-1">
                        <Label className="text-xs">Recursos do plano</Label>
                        {(plan.features || []).map((feature: string, featureIndex: number) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <Input 
                              value={feature}
                              onChange={(e) => {
                                const newPlans = [...section.content.plans]
                                const newFeatures = [...newPlans[index].features]
                                newFeatures[featureIndex] = e.target.value
                                newPlans[index] = { ...newPlans[index], features: newFeatures }
                                handleContentChange('plans', newPlans)
                              }}
                            />
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => {
                                const newPlans = [...section.content.plans]
                                const newFeatures = [...newPlans[index].features]
                                newFeatures.splice(featureIndex, 1)
                                newPlans[index] = { ...newPlans[index], features: newFeatures }
                                handleContentChange('plans', newPlans)
                              }}
                            >
                              <Trash2Icon className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full mt-2"
                          onClick={() => {
                            const newPlans = [...section.content.plans]
                            const newFeatures = [...(newPlans[index].features || []), '']
                            newPlans[index] = { ...newPlans[index], features: newFeatures }
                            handleContentChange('plans', newPlans)
                          }}
                        >
                          <PlusIcon className="h-3 w-3 mr-2" />
                          Adicionar Recurso
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    const newPlans = [...(section.content.plans || []), { name: '', price: '', description: '', features: [''] }]
                    handleContentChange('plans', newPlans)
                  }}
                >
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Adicionar Plano
                </Button>
              </div>
            </div>
          </div>
        )
      
      case 'cta':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`${section.id}-heading`}>Título</Label>
              <Input 
                id={`${section.id}-heading`} 
                value={section.content.heading || ''}
                onChange={(e) => handleContentChange('heading', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${section.id}-description`}>Descrição</Label>
              <Textarea 
                id={`${section.id}-description`} 
                value={section.content.description || ''}
                onChange={(e) => handleContentChange('description', e.target.value)}
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${section.id}-buttonText`}>Texto do Botão</Label>
              <Input 
                id={`${section.id}-buttonText`} 
                value={section.content.buttonText || ''}
                onChange={(e) => handleContentChange('buttonText', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${section.id}-buttonUrl`}>URL do Botão</Label>
              <Input 
                id={`${section.id}-buttonUrl`} 
                value={section.content.buttonUrl || ''}
                onChange={(e) => handleContentChange('buttonUrl', e.target.value)}
              />
            </div>
          </div>
        )
      
      default:
        return <p>Tipo de seção não reconhecido</p>
    }
  }
  
  return (
    <Card className="mb-4" style={style} ref={setNodeRef}>
      <Collapsible open={section.isOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="p-4 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="cursor-grab p-1 text-gray-400 hover:text-gray-600 active:cursor-grabbing"
                  {...attributes}
                  {...listeners}
                >
                  <GripVertical className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">{section.title}</CardTitle>
                  <CardDescription>Seção tipo: {section.type}</CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    onRemove(section.id)
                  }}
                >
                  <Trash2Icon className="h-4 w-4" />
                </Button>
                {section.isOpen ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="px-4 pt-0 pb-4">
            {renderSectionEditor()}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}

export default function EdicaoLandingPage() {
  // Estado para as seções da landing page
  const [sections, setSections] = useState<Section[]>([
    {
      id: '1',
      type: 'hero',
      title: 'Seção Hero',
      isOpen: true,
      content: {
        heading: 'Rook System - Gestão financeira para restaurantes',
        subheading: 'Simplifique o planejamento orçamentário e potencialize os resultados do seu negócio',
        description: 'Automatize processos financeiros, otimize compras e controle de estoque com uma solução integrada que elimina planilhas e reduz custos operacionais.',
        imageUrl: '/images/hero-image.jpg',
        buttonText: 'Solicitar demonstração'
      }
    },
    {
      id: '2',
      type: 'features',
      title: 'Seção de Recursos',
      isOpen: false,
      content: {
        title: 'Recursos Principais',
        items: [
          {
            title: 'Automação financeira',
            description: 'Automatize processos financeiros e reduza erros manuais.'
          },
          {
            title: 'Controle de estoque',
            description: 'Gerencie seu estoque em tempo real e evite desperdícios.'
          },
          {
            title: 'Planejamento orçamentário',
            description: 'Crie orçamentos precisos e acompanhe sua execução.'
          }
        ]
      }
    },
    {
      id: '3',
      type: 'testimonials',
      title: 'Seção de Depoimentos',
      isOpen: false,
      content: {
        title: 'O que nossos clientes dizem',
        items: [
          {
            name: 'Carlos Silva',
            role: 'Proprietário, Restaurante Sabor & Arte',
            quote: 'O Rook System transformou a forma como gerenciamos nossas finanças. Economizamos tempo e dinheiro.'
          },
          {
            name: 'Ana Ferreira',
            role: 'Gerente Financeira, Cantina Bella Napoli',
            quote: 'A visibilidade que temos agora sobre nossos custos nos permitiu tomar decisões mais inteligentes.'
          }
        ]
      }
    }
  ])
  
  const [saved, setSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  
  // Configuração do DnD Kit
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  // Função para lidar com o fim de um arrasto
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    
    if (over && active.id !== over.id) {
      setSections((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over.id)
        
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }
  
  // Função para atualizar o conteúdo de uma seção
  const handleUpdateSection = (id: string, content: Record<string, any>) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, content } : section
    ))
  }
  
  // Função para remover uma seção
  const handleRemoveSection = (id: string) => {
    setSections(sections.filter(section => section.id !== id))
  }
  
  // Função para alternar a abertura de uma seção
  const handleToggleSection = (id: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, isOpen: !section.isOpen } : section
    ))
  }
  
  // Função para adicionar uma nova seção
  const handleAddSection = (type: SectionType) => {
    const newSectionId = `section-${Date.now()}`
    
    let newContent: Record<string, any> = {}
    let title = ''
    
    switch(type) {
      case 'hero':
        title = 'Seção Hero'
        newContent = {
          heading: 'Título Principal',
          subheading: 'Subtítulo',
          description: 'Descrição detalhada do seu produto ou serviço.',
          buttonText: 'Saiba mais'
        }
        break
      case 'features':
        title = 'Seção de Recursos'
        newContent = {
          title: 'Nossos Recursos',
          items: [{ title: 'Novo Recurso', description: 'Descrição do recurso' }]
        }
        break
      case 'testimonials':
        title = 'Seção de Depoimentos'
        newContent = {
          title: 'O que nossos clientes dizem',
          items: [{ name: 'Nome do Cliente', role: 'Cargo, Empresa', quote: 'Depoimento do cliente' }]
        }
        break
      case 'pricing':
        title = 'Seção de Planos'
        newContent = {
          title: 'Nossos Planos',
          plans: [{ 
            name: 'Plano Básico', 
            price: 'R$ 99/mês', 
            description: 'Ideal para pequenos negócios', 
            features: ['Recurso 1', 'Recurso 2']
          }]
        }
        break
      case 'cta':
        title = 'Chamada para Ação'
        newContent = {
          heading: 'Pronto para começar?',
          description: 'Entre em contato conosco e solicite uma demonstração.',
          buttonText: 'Solicitar demo',
          buttonUrl: '/contato'
        }
        break
    }
    
    const newSection: Section = {
      id: newSectionId,
      type,
      title,
      isOpen: true,
      content: newContent
    }
    
    setSections([...sections, newSection])
  }
  
  // Função para salvar as alterações
  const handleSave = () => {
    setIsSaving(true)
    
    // Simular uma chamada de API
    setTimeout(() => {
      setIsSaving(false)
      setSaved(true)
      
      // Limpar a mensagem de sucesso após 3 segundos
      setTimeout(() => setSaved(false), 3000)
    }, 1000)
  }

  return (
    <div className="container py-8 max-w-6xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 text-muted-foreground">Dashboard</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Edição Landing Page</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Edição da Landing Page</h1>
        <p className="text-muted-foreground max-w-3xl">
          Personalize o conteúdo da página inicial do Rook System. Arraste as seções para reordenar.
        </p>
      </div>

      {/* Notificação de sucesso */}
      {saved && (
        <Alert className="mb-6 border-green-200 bg-green-50">
          <CheckIcon className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Alterações salvas</AlertTitle>
          <AlertDescription className="text-green-700">
            As alterações foram publicadas com sucesso na landing page.
          </AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-3/4">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Estrutura da Página</CardTitle>
              <CardDescription>
                Organize as seções da sua landing page arrastando e soltando. Clique em uma seção para editá-la.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DndContext 
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext 
                  items={sections.map(s => s.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {sections.map(section => (
                    <SortableSection 
                      key={section.id}
                      section={section}
                      onUpdate={handleUpdateSection}
                      onRemove={handleRemoveSection}
                      onToggle={handleToggleSection}
                    />
                  ))}
                </SortableContext>
              </DndContext>
              
              {sections.length === 0 && (
                <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
                  <p className="text-muted-foreground">
                    Nenhuma seção adicionada. Use o painel lateral para adicionar seções.
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline" className="gap-2">
                <ArrowLeftIcon className="h-4 w-4" />
                Voltar
              </Button>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => window.open('/landing-page-preview', '_blank')}
                >
                  <EyeIcon className="h-4 w-4" />
                  Visualizar
                </Button>
                <Button 
                  className="bg-amber-600 hover:bg-amber-700 gap-2" 
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  {isSaving ? "Salvando..." : (
                    <>
                      <SaveIcon className="h-4 w-4" />
                      Salvar e Publicar
                    </>
                  )}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        <div className="w-full lg:w-1/4">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Adicionar Seções</CardTitle>
              <CardDescription>
                Escolha um tipo de seção para adicionar à sua landing page.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2 text-left"
                  onClick={() => handleAddSection('hero')}
                >
                  <div className="flex-1">
                    <span className="font-medium">Seção Hero</span>
                    <p className="text-xs text-muted-foreground">Título, descrição e imagem principal</p>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2 text-left"
                  onClick={() => handleAddSection('features')}
                >
                  <div className="flex-1">
                    <span className="font-medium">Recursos</span>
                    <p className="text-xs text-muted-foreground">Lista de funcionalidades do sistema</p>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2 text-left"
                  onClick={() => handleAddSection('testimonials')}
                >
                  <div className="flex-1">
                    <span className="font-medium">Depoimentos</span>
                    <p className="text-xs text-muted-foreground">Feedback de clientes satisfeitos</p>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2 text-left"
                  onClick={() => handleAddSection('pricing')}
                >
                  <div className="flex-1">
                    <span className="font-medium">Planos e Preços</span>
                    <p className="text-xs text-muted-foreground">Tabela de valores e recursos</p>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2 text-left"
                  onClick={() => handleAddSection('cta')}
                >
                  <div className="flex-1">
                    <span className="font-medium">Chamada para Ação</span>
                    <p className="text-xs text-muted-foreground">Seção para conversão de visitantes</p>
                  </div>
                </Button>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Dicas</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Arraste e solte para reorganizar as seções</li>
                  <li>• Clique na seção para expandir e editar</li>
                  <li>• Use o botão de visualizar para ver o resultado</li>
                  <li>• Salve frequentemente para não perder alterações</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}