// app/fornecedores/editar/page.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function EditarFornecedorPage() {
  return (
    <div className="container py-8 max-w-5xl mx-auto">
      <div className="mb-6">
        <Badge className="mb-2" variant="outline">Fornecedores</Badge>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Editar Fornecedor</h1>
            <p className="text-muted-foreground">Atualize as informações do fornecedor e produtos associados</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Cancelar</Button>
            <Button className="bg-amber-600 hover:bg-amber-700">Salvar Alterações</Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Informações Principais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-base">
                    Nome do Fornecedor <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="nome" 
                    placeholder="Ex: Frigorífico XPTO, Distribuidora Alimentos ABC" 
                    defaultValue="Frigorífico XPTO"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cnpj" className="text-base">
                    CNPJ <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="cnpj" 
                    placeholder="00.000.000/0000-00" 
                    defaultValue="12.345.678/0001-90"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    E-mail de Contato
                  </Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="exemplo@exemplo.com" 
                    defaultValue="contato@xpto.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-base">
                    Telefone de Contato
                  </Label>
                  <Input 
                    id="telefone" 
                    placeholder="(00) 00000-0000" 
                    defaultValue="(11) 98765-4321"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="prazo" className="text-base">
                    Prazo de Entrega (em dias úteis)
                  </Label>
                  <Input 
                    id="prazo" 
                    type="number"
                    defaultValue="3"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="pagamento" className="text-base">
                    Condições de Pagamento
                  </Label>
                  <Input 
                    id="pagamento" 
                    placeholder="Ex: 30 dias, À vista/30 dias, 15/30/45 dias" 
                    defaultValue="30 dias"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="observacoes" className="text-base">
                  Observações
                </Label>
                <Textarea 
                  id="observacoes" 
                  placeholder="Informações adicionais sobre o fornecedor"
                  className="min-h-[100px]" 
                  defaultValue="Atendimento de segunda a sexta-feira, das 8h às 18h. Pedido mínimo de R$ 500,00."
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Produtos Fornecidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              <Alert className="bg-amber-50 border-amber-200">
                <AlertDescription className="text-amber-800">
                  Selecione os produtos que este fornecedor disponibiliza. Apenas produtos cadastrados em fichas técnicas podem ser associados.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Select defaultValue="proteinas">
                  <SelectTrigger>
                    <SelectValue placeholder="Filtrar por categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas categorias</SelectItem>
                    <SelectItem value="proteinas">Proteínas</SelectItem>
                    <SelectItem value="graos">Grãos e Cereais</SelectItem>
                    <SelectItem value="laticinios">Laticínios</SelectItem>
                    <SelectItem value="hortifruti">Hortifruti</SelectItem>
                    <SelectItem value="bebidas">Bebidas</SelectItem>
                  </SelectContent>
                </Select>

                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <Input className="pl-10" placeholder="Buscar produto..." />
                </div>
              </div>

              <Separator />

              <div className="space-y-5">
                <div>
                  <h3 className="font-medium mb-3">Proteínas</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-md">
                      <Checkbox id="produto-1" defaultChecked />
                      <div>
                        <Label htmlFor="produto-1" className="font-medium">Camarão Rosa Limpo</Label>
                        <div className="flex items-center mt-1 gap-3">
                          <div className="flex items-center gap-2">
                            <Label htmlFor="preco-1" className="text-xs">Preço:</Label>
                            <div className="flex items-center">
                              <span className="text-xs mr-1">R$</span>
                              <Input 
                                id="preco-1" 
                                className="h-6 w-20 text-xs" 
                                defaultValue="48.90"
                              />
                              <span className="text-xs ml-1">/kg</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-md">
                      <Checkbox id="produto-2" defaultChecked />
                      <div>
                        <Label htmlFor="produto-2" className="font-medium">Filé Mignon</Label>
                        <div className="flex items-center mt-1 gap-3">
                          <div className="flex items-center gap-2">
                            <Label htmlFor="preco-2" className="text-xs">Preço:</Label>
                            <div className="flex items-center">
                              <span className="text-xs mr-1">R$</span>
                              <Input 
                                id="preco-2" 
                                className="h-6 w-20 text-xs" 
                                defaultValue="65.90"
                              />
                              <span className="text-xs ml-1">/kg</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-md">
                      <Checkbox id="produto-3" />
                      <div>
                        <Label htmlFor="produto-3" className="font-medium">Picanha</Label>
                        <div className="flex items-center mt-1 gap-3">
                          <div className="flex items-center gap-2">
                            <Label htmlFor="preco-3" className="text-xs">Preço:</Label>
                            <div className="flex items-center">
                              <span className="text-xs mr-1">R$</span>
                              <Input 
                                id="preco-3" 
                                className="h-6 w-20 text-xs" 
                                defaultValue="69.90"
                              />
                              <span className="text-xs ml-1">/kg</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-md">
                      <Checkbox id="produto-4" />
                      <div>
                        <Label htmlFor="produto-4" className="font-medium">Peito de Frango</Label>
                        <div className="flex items-center mt-1 gap-3">
                          <div className="flex items-center gap-2">
                            <Label htmlFor="preco-4" className="text-xs">Preço:</Label>
                            <div className="flex items-center">
                              <span className="text-xs mr-1">R$</span>
                              <Input 
                                id="preco-4" 
                                className="h-6 w-20 text-xs" 
                                defaultValue="18.90"
                              />
                              <span className="text-xs ml-1">/kg</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-3">Grãos e Cereais</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-md">
                      <Checkbox id="produto-5" />
                      <div>
                        <Label htmlFor="produto-5" className="font-medium">Arroz Branco</Label>
                        <div className="flex items-center mt-1 gap-3">
                          <div className="flex items-center gap-2">
                            <Label htmlFor="preco-5" className="text-xs">Preço:</Label>
                            <div className="flex items-center">
                              <span className="text-xs mr-1">R$</span>
                              <Input 
                                id="preco-5" 
                                className="h-6 w-20 text-xs" 
                                defaultValue="5.90"
                              />
                              <span className="text-xs ml-1">/kg</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-md">
                      <Checkbox id="produto-6" />
                      <div>
                        <Label htmlFor="produto-6" className="font-medium">Farinha de Trigo</Label>
                        <div className="flex items-center mt-1 gap-3">
                          <div className="flex items-center gap-2">
                            <Label htmlFor="preco-6" className="text-xs">Preço:</Label>
                            <div className="flex items-center">
                              <span className="text-xs mr-1">R$</span>
                              <Input 
                                id="preco-6" 
                                className="h-6 w-20 text-xs" 
                                defaultValue="4.50"
                              />
                              <span className="text-xs ml-1">/kg</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Histórico de Pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Exibimos apenas um resumo do histórico, com link para a página completa */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-slate-50 p-4 rounded-md text-center">
                  <p className="text-sm text-muted-foreground mb-1">Total de Pedidos</p>
                  <p className="text-2xl font-bold">18</p>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-md text-center">
                  <p className="text-sm text-muted-foreground mb-1">Último Pedido</p>
                  <p className="text-lg font-medium">10/03/2025</p>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-md text-center">
                  <p className="text-sm text-muted-foreground mb-1">Valor Médio</p>
                  <p className="text-lg font-medium">R$ 3.450,75</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button variant="outline" size="sm">
                  Ver Histórico Completo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between mt-3">
          <Link href="/fornecedores">
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
              Voltar para Fornecedores
            </Button>
          </Link>
          <Button className="bg-amber-600 hover:bg-amber-700">
            Salvar Fornecedor
          </Button>
        </div>
      </div>
    </div>
  );
}