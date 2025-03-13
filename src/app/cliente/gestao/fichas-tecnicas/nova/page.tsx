// app/fichas-tecnicas/nova/page.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function NovaFichaTecnicaPage() {
  return (
    <div className="container py-8 max-w-5xl mx-auto">
      <div className="mb-6">
        <Badge className="mb-2" variant="outline">Fichas Técnicas</Badge>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Nova Ficha Técnica</h1>
            <p className="text-muted-foreground">Cadastre uma nova ficha técnica com informações detalhadas do produto</p>
          </div>
          <div className="flex gap-3">
            <Link href="/fichas-tecnicas">
              <Button variant="outline">Cancelar</Button>
            </Link>
            <Button className="bg-amber-600 hover:bg-amber-700">Salvar Ficha Técnica</Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="geral" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="geral">Informações Gerais</TabsTrigger>
          <TabsTrigger value="nutricional">Informações Nutricionais</TabsTrigger>
          <TabsTrigger value="armazenamento">Armazenamento</TabsTrigger>
          <TabsTrigger value="fornecedores">Fornecedores</TabsTrigger>
        </TabsList>

        <TabsContent value="geral">
          <Card>
            <CardHeader>
              <CardTitle>Dados Básicos do Produto</CardTitle>
              <CardDescription>
                Informações essenciais para a identificação do produto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="nome" className="text-base font-medium">
                      Nome do Produto <span className="text-red-500">*</span>
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-muted-foreground cursor-help"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-80">Nome completo do produto como será exibido nos relatórios e buscas</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input 
                    id="nome" 
                    placeholder="Ex: Camarão Rosa, Arroz Branco, Filé Mignon" 
                    className="border-slate-300"
                  />
                  <p className="text-xs text-muted-foreground">
                    Utilize um nome descritivo e completo para facilitar buscas
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="categoria" className="text-base font-medium">
                      Categoria <span className="text-red-500">*</span>
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-muted-foreground cursor-help"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-80">A categoria é definida pelo Master e ajuda na organização e filtragem dos produtos</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Select>
                    <SelectTrigger id="categoria" className="border-slate-300">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="proteinas">Proteínas</SelectItem>
                      <SelectItem value="graos">Grãos e Cereais</SelectItem>
                      <SelectItem value="laticinios">Laticínios</SelectItem>
                      <SelectItem value="hortifruti">Hortifruti</SelectItem>
                      <SelectItem value="bebidas">Bebidas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="ingredientes" className="text-base font-medium">
                    Lista de Ingredientes
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-muted-foreground cursor-help"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-80">Lista completa de ingredientes utilizados na composição do produto</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Textarea 
                  id="ingredientes" 
                  placeholder="Descreva os ingredientes detalhadamente, um por linha" 
                  className="min-h-[120px] border-slate-300" 
                />
                <p className="text-xs text-muted-foreground">
                  Inclua todos os ingredientes, aditivos e conservantes
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="porcao" className="text-base font-medium">
                      Tamanho da Porção
                    </Label>
                  </div>
                  <Input id="porcao" placeholder="Ex: 150g, 200ml" className="border-slate-300" />
                  <p className="text-xs text-muted-foreground">
                    Especifique a quantidade média de uma porção
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="validade" className="text-base font-medium">
                      Data de Validade <span className="text-red-500">*</span>
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-muted-foreground cursor-help"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-80">Data até a qual o produto deve ser utilizado em condições normais de armazenamento</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input 
                    id="validade" 
                    type="date" 
                    className="border-slate-300" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="fabricante" className="text-base font-medium">
                    Fabricante e Contato
                  </Label>
                </div>
                <Input 
                  id="fabricante" 
                  placeholder="Nome do fabricante e informações de contato" 
                  className="border-slate-300"
                />
                <p className="text-xs text-muted-foreground">
                  Formato recomendado: Nome | Email | Telefone
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Informações Alergênicas</CardTitle>
              <CardDescription>
                Identifique os potenciais alergênicos presentes no produto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="tem-alergenicos" />
                  <Label htmlFor="tem-alergenicos" className="font-medium">
                    Este produto contém alergênicos
                  </Label>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2">
                  {['Glúten', 'Crustáceos', 'Ovos', 'Peixes', 'Amendoim', 'Soja', 'Leite', 'Nozes', 'Aipo', 'Mostarda', 'Gergelim', 'Sulfitos', 'Tremoço', 'Moluscos'].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <Checkbox id={`alergeno-${item}`} />
                      <Label htmlFor={`alergeno-${item}`} className="text-sm font-normal">{item}</Label>
                    </div>
                  ))}
                </div>
                
                <Alert className="bg-amber-50 border-amber-200 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-amber-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <AlertDescription className="text-amber-800">
                    A informação correta sobre alergênicos é fundamental para a segurança alimentar e atendimento às normas regulatórias.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutricional">
          <Card>
            <CardHeader>
              <CardTitle>Tabela Nutricional</CardTitle>
              <CardDescription>
                Valores nutricionais por porção do produto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-2 mb-6">
                <Switch id="has-nutrition" />
                <Label htmlFor="has-nutrition" className="font-medium">
                  Este produto possui informações nutricionais
                </Label>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="valorEnergetico" className="text-base font-medium">
                  Valor Energético (kcal)
                </Label>
                <Input id="valorEnergetico" type="number" className="border-slate-300" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="proteinas" className="text-base font-medium">
                    Proteínas (g)
                  </Label>
                  <Input id="proteinas" type="number" className="border-slate-300" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="carboidratos" className="text-base font-medium">
                    Carboidratos (g)
                  </Label>
                  <Input id="carboidratos" type="number" className="border-slate-300" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gordurasTotais" className="text-base font-medium">
                    Gorduras Totais (g)
                  </Label>
                  <Input id="gordurasTotais" type="number" className="border-slate-300" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gordurasSaturadas" className="text-base font-medium">
                    Gorduras Saturadas (g)
                  </Label>
                  <Input id="gordurasSaturadas" type="number" className="border-slate-300" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gordurasTrans" className="text-base font-medium">
                    Gorduras Trans (g)
                  </Label>
                  <Input id="gordurasTrans" type="number" className="border-slate-300" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="fibras" className="text-base font-medium">
                    Fibras Alimentares (g)
                  </Label>
                  <Input id="fibras" type="number" className="border-slate-300" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sodio" className="text-base font-medium">
                    Sódio (mg)
                  </Label>
                  <Input id="sodio" type="number" className="border-slate-300" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="acucares" className="text-base font-medium">
                    Açúcares (g)
                  </Label>
                  <Input id="acucares" type="number" className="border-slate-300" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="valorDiario" className="text-base font-medium">
                  Base para Valores Diários
                </Label>
                <Select defaultValue="2000">
                  <SelectTrigger id="valorDiario" className="border-slate-300">
                    <SelectValue placeholder="Selecione uma base de cálculo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2000">Dieta de 2.000 kcal</SelectItem>
                    <SelectItem value="2500">Dieta de 2.500 kcal</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Base de cálculo para percentuais de valores diários
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="armazenamento">
          <Card>
            <CardHeader>
              <CardTitle>Condições de Armazenamento</CardTitle>
              <CardDescription>
                Instruções para o correto armazenamento do produto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="instrucoes" className="text-base font-medium">
                    Instruções de Armazenamento
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-muted-foreground cursor-help"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-80">Especifique todas as condições e recomendações para o armazenamento adequado</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Textarea 
                  id="instrucoes" 
                  placeholder="Ex: Armazenar a -18°C ou inferior. Uma vez descongelado, não recongelar." 
                  className="min-h-[120px] border-slate-300" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="temperatura" className="text-base font-medium">
                    Temperatura de Armazenamento
                  </Label>
                  <Select>
                    <SelectTrigger id="temperatura" className="border-slate-300">
                      <SelectValue placeholder="Selecione a temperatura ideal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ambiente">Temperatura Ambiente</SelectItem>
                      <SelectItem value="refrigerado">Refrigerado (0-4°C)</SelectItem>
                      <SelectItem value="congelado">Congelado (-18°C ou inferior)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="vidaUtil" className="text-base font-medium">
                    Vida Útil Após Abertura
                  </Label>
                  <Input 
                    id="vidaUtil" 
                    placeholder="Ex: 3 dias refrigerado" 
                    className="border-slate-300" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-base font-medium">
                  Condições Especiais
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="proteger-luz" />
                    <Label htmlFor="proteger-luz" className="text-sm font-normal">Proteger da luz</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="proteger-umidade" />
                    <Label htmlFor="proteger-umidade" className="text-sm font-normal">Proteger da umidade</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nao-recongelar" />
                    <Label htmlFor="nao-recongelar" className="text-sm font-normal">Não recongelar após descongelamento</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="evitar-contaminacao" />
                    <Label htmlFor="evitar-contaminacao" className="text-sm font-normal">Evitar contaminação cruzada</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="especiais" className="text-base font-medium">
                  Requisitos Especiais
                </Label>
                <Textarea 
                  id="especiais" 
                  placeholder="Requisitos adicionais de armazenamento ou manuseio" 
                  className="min-h-[80px] border-slate-300" 
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fornecedores">
          <Card>
            <CardHeader>
              <CardTitle>Associação de Fornecedores</CardTitle>
              <CardDescription>
                Vincule fornecedores cadastrados a este produto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="bg-blue-50 border-blue-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <AlertDescription className="text-blue-800">
                  Para associar fornecedores, eles devem estar previamente cadastrados no sistema. Se necessário, <Link href="/fornecedores/novo" className="underline font-medium">cadastre um novo fornecedor</Link>.
                </AlertDescription>
              </Alert>
              
              <div className="flex justify-between items-center">
                <Label className="text-base font-medium">Fornecedores Disponíveis</Label>
                <Select defaultValue="todos">
                  <SelectTrigger className="w-[200px] border-slate-300">
                    <SelectValue placeholder="Filtrar por categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="proteinas">Fornecedores de Proteínas</SelectItem>
                    <SelectItem value="graos">Fornecedores de Grãos</SelectItem>
                    <SelectItem value="laticinios">Fornecedores de Laticínios</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-4 mt-2">
                <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                  <div className="flex items-start">
                    <Checkbox id="fornecedor-1" className="mt-1" />
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between">
                        <Label htmlFor="fornecedor-1" className="font-medium">Frigorífico XPTO</Label>
                        <Badge variant="outline" className="bg-amber-50">Proteínas</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">CNPJ: 12.345.678/0001-90</p>
                      
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <Label htmlFor="preco-1" className="text-xs font-medium">Preço por unidade (R$)</Label>
                          <div className="relative">
                            <Input 
                              id="preco-1" 
                              type="number" 
                              step="0.01" 
                              className="pl-5 border-slate-300" 
                              placeholder="0.00" 
                            />
                            <span className="absolute left-2 top-2 text-sm text-muted-foreground">R$</span>
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <Label htmlFor="unidade-1" className="text-xs font-medium">Unidade de medida</Label>
                          <Select>
                            <SelectTrigger id="unidade-1" className="border-slate-300">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kg">Quilo (kg)</SelectItem>
                              <SelectItem value="g">Grama (g)</SelectItem>
                              <SelectItem value="l">Litro (L)</SelectItem>
                              <SelectItem value="ml">Mililitro (ml)</SelectItem>
                              <SelectItem value="un">Unidade (un)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                  <div className="flex items-start">
                    <Checkbox id="fornecedor-2" className="mt-1" />
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between">
                        <Label htmlFor="fornecedor-2" className="font-medium">Pescados Mar Azul</Label>
                        <Badge variant="outline" className="bg-amber-50">Proteínas</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">CNPJ: 65.432.109/0001-87</p>
                      
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <Label htmlFor="preco-2" className="text-xs font-medium">Preço por unidade (R$)</Label>
                          <div className="relative">
                            <Input 
                              id="preco-2" 
                              type="number" 
                              step="0.01" 
                              className="pl-5 border-slate-300" 
                              placeholder="0.00" 
                            />
                            <span className="absolute left-2 top-2 text-sm text-muted-foreground">R$</span>
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <Label htmlFor="unidade-2" className="text-xs font-medium">Unidade de medida</Label>
                          <Select>
                            <SelectTrigger id="unidade-2" className="border-slate-300">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kg">Quilo (kg)</SelectItem>
                              <SelectItem value="g">Grama (g)</SelectItem>
                              <SelectItem value="l">Litro (L)</SelectItem>
                              <SelectItem value="ml">Mililitro (ml)</SelectItem>
                              <SelectItem value="un">Unidade (un)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                  <div className="flex items-start">
                    <Checkbox id="fornecedor-3" className="mt-1" />
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between">
                        <Label htmlFor="fornecedor-3" className="font-medium">Distribuidora Frutos do Mar</Label>
                        <Badge variant="outline" className="bg-amber-50">Proteínas</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">CNPJ: 87.654.321/0001-54</p>
                      
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <Label htmlFor="preco-3" className="text-xs font-medium">Preço por unidade (R$)</Label>
                          <div className="relative">
                            <Input 
                              id="preco-3" 
                              type="number" 
                              step="0.01" 
                              className="pl-5 border-slate-300" 
                              placeholder="0.00" 
                            />
                            <span className="absolute left-2 top-2 text-sm text-muted-foreground">R$</span>
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <Label htmlFor="unidade-3" className="text-xs font-medium">Unidade de medida</Label>
                          <Select>
                            <SelectTrigger id="unidade-3" className="border-slate-300">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kg">Quilo (kg)</SelectItem>
                              <SelectItem value="g">Grama (g)</SelectItem>
                              <SelectItem value="l">Litro (L)</SelectItem>
                              <SelectItem value="ml">Mililitro (ml)</SelectItem>
                              <SelectItem value="un">Unidade (un)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Alert className="bg-amber-50 border-amber-200 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-amber-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <AlertDescription className="text-amber-800">
                  Recomendamos associar pelo menos um fornecedor à ficha técnica para facilitar o processo de compras.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 flex justify-between">
        <Link href="/fichas-tecnicas">
          <Button variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para Fichas Técnicas
          </Button>
        </Link>
        <div className="flex gap-3">
          <Button variant="outline">
            Salvar como Rascunho
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700">
            Salvar Ficha Técnica
          </Button>
        </div>
      </div>
    </div>
  );
}