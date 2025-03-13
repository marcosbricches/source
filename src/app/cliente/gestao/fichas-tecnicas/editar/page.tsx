// app/fichas-tecnicas/editar/page.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function EditarFichaTecnicaPage() {
  return (
    <div className="container py-8 max-w-5xl mx-auto">
      <div className="mb-6">
        <Badge className="mb-2" variant="outline">Fichas Técnicas</Badge>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Editar Ficha Técnica</h1>
            <p className="text-muted-foreground">Atualize as informações da ficha técnica do produto</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Cancelar</Button>
            <Button className="bg-amber-600 hover:bg-amber-700">Salvar Alterações</Button>
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
          <div className="grid gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-base">Nome do Produto</Label>
                      <Input id="nome" placeholder="Ex: Camarão, Arroz, Farinha de Trigo" defaultValue="Camarão Rosa Limpo" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="categoria" className="text-base">Categoria</Label>
                      <Select defaultValue="proteinas">
                        <SelectTrigger id="categoria">
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
                  
                  <div className="space-y-2">
                    <Label htmlFor="ingredientes" className="text-base">Lista de Ingredientes</Label>
                    <Textarea 
                      id="ingredientes" 
                      placeholder="Descreva os ingredientes detalhadamente, um por linha"
                      className="min-h-[120px]" 
                      defaultValue="Camarão rosa (Farfantepenaeus paulensis), sal, conservantes E-221, E-223."
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="porcao" className="text-base">Tamanho da Porção</Label>
                      <Input id="porcao" placeholder="Ex: 150g, 200ml" defaultValue="100g" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="validade" className="text-base">Data de Validade</Label>
                      <Input id="validade" type="date" defaultValue="2025-06-15" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fabricante" className="text-base">Fabricante e Contato</Label>
                    <Input id="fabricante" placeholder="Nome do fabricante e informações de contato" defaultValue="Pescados Mar Azul Ltda. | contato@marazul.com | (48) 3333-4444" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Label className="text-base mb-3 block">Informações Alergênicas</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {['Glúten', 'Crustáceos', 'Ovos', 'Peixes', 'Amendoim', 'Soja', 'Leite', 'Nozes', 'Aipo', 'Mostarda', 'Gergelim', 'Sulfitos', 'Tremoço', 'Moluscos'].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <input type="checkbox" id={`alergeno-${item}`} className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600" defaultChecked={item === 'Crustáceos'} />
                      <Label htmlFor={`alergeno-${item}`} className="text-sm font-normal">{item}</Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="nutricional">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Informações Nutricionais</h3>
              <p className="text-sm text-muted-foreground mb-4">Valores nutricionais por porção de 100g</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="valorEnergetico" className="text-base">Valor Energético (kcal)</Label>
                  <Input id="valorEnergetico" type="number" defaultValue="120" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="proteinas" className="text-base">Proteínas (g)</Label>
                  <Input id="proteinas" type="number" defaultValue="24" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="carboidratos" className="text-base">Carboidratos (g)</Label>
                  <Input id="carboidratos" type="number" defaultValue="0.5" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gordurasTotais" className="text-base">Gorduras Totais (g)</Label>
                  <Input id="gordurasTotais" type="number" defaultValue="1.5" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gordurasSaturadas" className="text-base">Gorduras Saturadas (g)</Label>
                  <Input id="gordurasSaturadas" type="number" defaultValue="0.3" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gordurasTrans" className="text-base">Gorduras Trans (g)</Label>
                  <Input id="gordurasTrans" type="number" defaultValue="0" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="fibras" className="text-base">Fibras Alimentares (g)</Label>
                  <Input id="fibras" type="number" defaultValue="0" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sodio" className="text-base">Sódio (mg)</Label>
                  <Input id="sodio" type="number" defaultValue="450" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="armazenamento">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="instrucoes" className="text-base">Instruções de Armazenamento</Label>
                  <Textarea 
                    id="instrucoes" 
                    placeholder="Descreva as condições de armazenamento necessárias para este produto"
                    className="min-h-[120px]"
                    defaultValue="Armazenar a -18°C ou inferior. Uma vez descongelado, não recongelar. Manter sob refrigeração (0-4°C) por até 2 dias após descongelamento."
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="temperatura" className="text-base">Temperatura de Armazenamento</Label>
                    <Select defaultValue="congelado">
                      <SelectTrigger id="temperatura">
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
                    <Label htmlFor="vidaUtil" className="text-base">Vida Útil Após Abertura</Label>
                    <Input id="vidaUtil" placeholder="Ex: 3 dias refrigerado" defaultValue="2 dias refrigerado" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="especiais" className="text-base">Requisitos Especiais</Label>
                  <Textarea 
                    id="especiais" 
                    placeholder="Requisitos adicionais de armazenamento ou manuseio"
                    className="min-h-[80px]"
                    defaultValue="Manter protegido da luz direta. Evitar contato com outros alimentos crus para prevenir contaminação cruzada."
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fornecedores">
          <Card>
            <CardContent className="pt-6 pb-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Fornecedores Associados</h3>
                <Button variant="outline" size="sm" className="bg-amber-50 hover:bg-amber-100 border-amber-200 text-amber-900">
                  Adicionar Fornecedor
                </Button>
              </div>
              
              <div className="space-y-4">
                {/* Fornecedor 1 */}
                <div className="bg-slate-50 rounded-md p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium">Frigorífico XPTO</h4>
                      <p className="text-sm text-muted-foreground">CNPJ: 12.345.678/0001-90</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-7 w-7 hover:bg-red-100 hover:text-red-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground block">Prazo de Entrega</span>
                      <span>3 dias</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">Condições de Pagamento</span>
                      <span>30 dias</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">Último Preço</span>
                      <span className="font-medium">R$ 48,90/kg</span>
                    </div>
                  </div>
                </div>
                
                {/* Fornecedor 2 */}
                <div className="bg-slate-50 rounded-md p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium">Pescados Mar Azul</h4>
                      <p className="text-sm text-muted-foreground">CNPJ: 65.432.109/0001-87</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-7 w-7 hover:bg-red-100 hover:text-red-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground block">Prazo de Entrega</span>
                      <span>2 dias</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">Condições de Pagamento</span>
                      <span>15/30 dias</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">Último Preço</span>
                      <span className="font-medium text-green-600">R$ 45,50/kg</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-100 rounded-md p-4 text-center text-amber-700">
                  <p className="text-sm">Lembre-se que as fichas técnicas precisam ter pelo menos um fornecedor associado.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 flex justify-between">
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
        <Button className="bg-amber-600 hover:bg-amber-700">
          Salvar Ficha Técnica
        </Button>
      </div>
    </div>
  );
}