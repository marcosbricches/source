// app/admin/landing-page/edit/page.tsx
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { AlertCircleIcon, ArrowLeftIcon, CheckCircleIcon, ImageIcon, SaveIcon, UploadIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

export default function LandingPageEdit() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("funcionalidades")
  
  // Estados para alertas
  const [alertInfo, setAlertInfo] = useState<{
    show: boolean;
    type: "success" | "error";
    title: string;
    message: string;
  }>({
    show: false,
    type: "success",
    title: "",
    message: ""
  })
  
  // Estados para landing page baseada em funcionalidades
  const [funcTitle, setFuncTitle] = useState("Você no controle do seu restaurante e lucrando mais")
  const [funcSubtitle, setFuncSubtitle] = useState("Seu restaurante está lucrando o que poderia?")
  const [funcDescription, setFuncDescription] = useState("Se você não sabe exatamente seus custos ou sente que poderia ganhar mais, o problema pode estar no CMV fora de controle. O Rook System te ajuda a enxergar para onde está indo o seu dinheiro e a tomar decisões mais seguras para melhorar a rentabilidade do seu restaurante.")
  const [funcImage, setFuncImage] = useState("/dashboard-placeholder.png")
  const [funcImageFile, setFuncImageFile] = useState<File | null>(null)
  const [funcImagePreview, setFuncImagePreview] = useState("/dashboard-placeholder.png")
  
  // Estados para landing page baseada em dores
  const [doresTitle, setDoresTitle] = useState("Você no controle do seu restaurante e lucrando mais")
  const [doresSubtitle, setDoresSubtitle] = useState("Seu restaurante está lucrando menos do que deveria?")
  const [doresDescription, setDoresDescription] = useState("Você trabalha duro, vê o restaurante cheio, mas no fim do mês o dinheiro some? Você não está sozinho. O problema pode estar no CMV descontrolado – e isso está roubando seu lucro sem que você perceba.")
  const [doresImage, setDoresImage] = useState("/dashboard-preview.png")
  const [doresImageFile, setDoresImageFile] = useState<File | null>(null)
  const [doresImagePreview, setDoresImagePreview] = useState("/dashboard-preview.png")
  
  // Validações
  const isFuncValid = funcTitle.trim() !== "" && funcTitle.length <= 100
  const isDoresValid = doresTitle.trim() !== "" && doresTitle.length <= 100
  
  // Mostrar alerta com timeout para fechar
  const showAlert = (type: "success" | "error", title: string, message: string) => {
    setAlertInfo({
      show: true,
      type,
      title,
      message
    })
    
    // Auto-esconder após 5 segundos
    setTimeout(() => {
      setAlertInfo(prev => ({ ...prev, show: false }))
    }, 5000)
  }
  
  // Fechar alerta
  const closeAlert = () => {
    setAlertInfo(prev => ({ ...prev, show: false }))
  }
  
  // Handler para upload de imagem (funcionalidades)
  const handleFuncImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    
    // Validação de tamanho e formato
    if (file.size > 5 * 1024 * 1024) {
      showAlert(
        "error", 
        "Erro de upload", 
        "A imagem deve ter no máximo 5MB"
      )
      return
    }
    
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      showAlert(
        "error", 
        "Formato inválido", 
        "A imagem deve ser JPG ou PNG"
      )
      return
    }
    
    setFuncImageFile(file)
    
    // Criar preview da imagem
    const reader = new FileReader()
    reader.onload = (e) => {
      setFuncImagePreview(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }
  
  // Handler para upload de imagem (dores)
  const handleDoresImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    
    // Validação de tamanho e formato
    if (file.size > 5 * 1024 * 1024) {
      showAlert(
        "error", 
        "Erro de upload", 
        "A imagem deve ter no máximo 5MB"
      )
      return
    }
    
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      showAlert(
        "error", 
        "Formato inválido", 
        "A imagem deve ser JPG ou PNG"
      )
      return
    }
    
    setDoresImageFile(file)
    
    // Criar preview da imagem
    const reader = new FileReader()
    reader.onload = (e) => {
      setDoresImagePreview(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }
  
  // Handler para salvar alterações
  const handleSave = () => {
    if (activeTab === "funcionalidades" && !isFuncValid) {
      showAlert(
        "error", 
        "Erro de validação", 
        "Preencha todos os campos obrigatórios corretamente"
      )
      return
    }
    
    if (activeTab === "dores" && !isDoresValid) {
      showAlert(
        "error", 
        "Erro de validação", 
        "Preencha todos os campos obrigatórios corretamente"
      )
      return
    }
    
    // Em um ambiente real, aqui seria feita a chamada à API para salvar os dados
    // e o upload das imagens para o servidor
    
    showAlert(
      "success", 
      "Alterações salvas", 
      "As atualizações da landing page foram aplicadas com sucesso"
    )
    
    // Em um caso real, redirecionaria após o sucesso
    // router.push("/admin/landing-page")
  }
  
  return (
    <div className="container py-8 max-w-6xl mx-auto">
      {/* Alertas */}
      {alertInfo.show && (
        <Alert className={`mb-6 ${alertInfo.type === "success" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
          <div className="flex items-start">
            <div className="flex-1 flex items-start gap-2">
              {alertInfo.type === "success" ? (
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
              ) : (
                <AlertCircleIcon className="h-5 w-5 text-red-600 mt-0.5" />
              )}
              <div>
                <AlertTitle className={alertInfo.type === "success" ? "text-green-800" : "text-red-800"}>
                  {alertInfo.title}
                </AlertTitle>
                <AlertDescription className={alertInfo.type === "success" ? "text-green-700" : "text-red-700"}>
                  {alertInfo.message}
                </AlertDescription>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={closeAlert}
              className={alertInfo.type === "success" ? "text-green-700" : "text-red-700"}
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </div>
        </Alert>
      )}
      
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" asChild className="px-2 text-muted-foreground">
            <Link href="/admin/dashboard">Dashboard</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" asChild className="px-2 text-muted-foreground">
            <Link href="/admin/landing-page">Landing Pages</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Editar</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Editar Landing Page</h1>
          <p className="text-muted-foreground max-w-3xl">
            Atualize os conteúdos das landing pages do Rook System. As alterações ficarão visíveis imediatamente.
          </p>
        </div>
        
        <div className="flex gap-3 mt-4 md:mt-0">
          <Button variant="outline" className="gap-2" asChild>
            <Link href="/admin/landing-page">
              <ArrowLeftIcon className="h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <Button 
            className="gap-2 bg-amber-600 hover:bg-amber-700"
            onClick={handleSave}
            disabled={(activeTab === "funcionalidades" && !isFuncValid) || (activeTab === "dores" && !isDoresValid)}
          >
            <SaveIcon className="h-4 w-4" />
            Salvar Alterações
          </Button>
        </div>
      </div>
      
      {/* Conteúdo principal com Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="funcionalidades">Landing Page de Funcionalidades</TabsTrigger>
          <TabsTrigger value="dores">Landing Page de Dores</TabsTrigger>
        </TabsList>
        
        {/* Tab de Funcionalidades */}
        <TabsContent value="funcionalidades">
          <Card>
            <CardHeader>
              <CardTitle>Landing Page baseada em Funcionalidades</CardTitle>
              <CardDescription>
                Esta versão destaca os recursos e benefícios principais do Rook System
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="func-title">
                  Título Principal <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="func-title" 
                  placeholder="Digite o título principal" 
                  value={funcTitle}
                  onChange={(e) => setFuncTitle(e.target.value)}
                  maxLength={100}
                />
                <p className="text-xs text-muted-foreground">
                  {funcTitle.length}/100 caracteres (obrigatório)
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="func-subtitle">Subtítulo</Label>
                <Input 
                  id="func-subtitle" 
                  placeholder="Digite o subtítulo" 
                  value={funcSubtitle}
                  onChange={(e) => setFuncSubtitle(e.target.value)}
                  maxLength={200}
                />
                <p className="text-xs text-muted-foreground">
                  {funcSubtitle.length}/200 caracteres (opcional)
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="func-description">Descrição</Label>
                <Textarea 
                  id="func-description" 
                  placeholder="Digite a descrição principal" 
                  value={funcDescription}
                  onChange={(e) => setFuncDescription(e.target.value)}
                  rows={5}
                  maxLength={500}
                />
                <p className="text-xs text-muted-foreground">
                  {funcDescription.length}/500 caracteres (opcional)
                </p>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                <Label htmlFor="func-image">Imagem Principal (Dashboard)</Label>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 border rounded-md overflow-hidden relative h-[200px]">
                    {funcImagePreview ? (
                      <Image 
                        src={funcImagePreview} 
                        alt="Preview da imagem" 
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-muted">
                        <ImageIcon className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        A imagem deve estar no formato JPG ou PNG e ter no máximo 5MB.
                        Recomendamos uma imagem de alta qualidade com resolução mínima de 1200x700px.
                      </p>
                      
                      <div className="flex flex-col gap-4">
                        <Label htmlFor="func-image-upload" className="cursor-pointer">
                          <Button variant="outline" className="w-full gap-2" type="button">
                            <UploadIcon className="h-4 w-4" />
                            Selecionar imagem
                          </Button>
                          <Input 
                            id="func-image-upload"
                            type="file"
                            accept="image/jpeg,image/png"
                            className="hidden"
                            onChange={handleFuncImageChange}
                          />
                        </Label>
                        
                        {funcImageFile && (
                          <p className="text-sm font-medium">
                            Arquivo selecionado: {funcImageFile.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-6 border-t">
              <Button variant="outline" asChild>
                <Link href="/admin/landing-page">Cancelar</Link>
              </Button>
              <Button 
                className="bg-amber-600 hover:bg-amber-700"
                onClick={handleSave}
                disabled={!isFuncValid}
              >
                Salvar Alterações
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Tab de Dores */}
        <TabsContent value="dores">
          <Card>
            <CardHeader>
              <CardTitle>Landing Page baseada em Dores</CardTitle>
              <CardDescription>
                Esta versão foca nas dores e problemas que o Rook System resolve para restaurantes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="dores-title">
                  Título Principal <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="dores-title" 
                  placeholder="Digite o título principal" 
                  value={doresTitle}
                  onChange={(e) => setDoresTitle(e.target.value)}
                  maxLength={100}
                />
                <p className="text-xs text-muted-foreground">
                  {doresTitle.length}/100 caracteres (obrigatório)
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dores-subtitle">Subtítulo</Label>
                <Input 
                  id="dores-subtitle" 
                  placeholder="Digite o subtítulo" 
                  value={doresSubtitle}
                  onChange={(e) => setDoresSubtitle(e.target.value)}
                  maxLength={200}
                />
                <p className="text-xs text-muted-foreground">
                  {doresSubtitle.length}/200 caracteres (opcional)
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dores-description">Descrição</Label>
                <Textarea 
                  id="dores-description" 
                  placeholder="Digite a descrição principal" 
                  value={doresDescription}
                  onChange={(e) => setDoresDescription(e.target.value)}
                  rows={5}
                  maxLength={500}
                />
                <p className="text-xs text-muted-foreground">
                  {doresDescription.length}/500 caracteres (opcional)
                </p>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                <Label htmlFor="dores-image">Imagem Principal (Dashboard)</Label>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 border rounded-md overflow-hidden relative h-[200px]">
                    {doresImagePreview ? (
                      <Image 
                        src={doresImagePreview} 
                        alt="Preview da imagem" 
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-muted">
                        <ImageIcon className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        A imagem deve estar no formato JPG ou PNG e ter no máximo 5MB.
                        Recomendamos uma imagem de alta qualidade com resolução mínima de 1200x700px.
                      </p>
                      
                      <div className="flex flex-col gap-4">
                        <Label htmlFor="dores-image-upload" className="cursor-pointer">
                          <Button variant="outline" className="w-full gap-2" type="button">
                            <UploadIcon className="h-4 w-4" />
                            Selecionar imagem
                          </Button>
                          <Input 
                            id="dores-image-upload"
                            type="file"
                            accept="image/jpeg,image/png"
                            className="hidden"
                            onChange={handleDoresImageChange}
                          />
                        </Label>
                        
                        {doresImageFile && (
                          <p className="text-sm font-medium">
                            Arquivo selecionado: {doresImageFile.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-6 border-t">
              <Button variant="outline" asChild>
                <Link href="/admin/landing-page">Cancelar</Link>
              </Button>
              <Button 
                className="bg-amber-600 hover:bg-amber-700"
                onClick={handleSave}
                disabled={!isDoresValid}
              >
                Salvar Alterações
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}