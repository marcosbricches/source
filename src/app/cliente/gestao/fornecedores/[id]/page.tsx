// app/fichas-tecnicas/visualizar/[id]/page.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function VisualizarFichaTecnicaPage() {
  return (
    <div className="container py-8 max-w-5xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Link href="/fichas-tecnicas">
            <Badge variant="outline" className="hover:bg-slate-100 cursor-pointer">
              Fichas Técnicas
            </Badge>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Badge variant="outline">Visualizar</Badge>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Camarão Rosa Limpo</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-amber-50">Proteínas</Badge>
              <p className="text-muted-foreground">Código: PRO-001</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Imprimir
            </Button>
            <Link href="/fichas-tecnicas/editar/1">
              <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Editar
              </Button>
            </Link>
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
            <CardContent className="p-6">
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Nome do Produto</h3>
                    <p className="text-lg">Camarão Rosa Limpo</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Categoria</h3>
                    <p className="text-lg">Proteínas</p>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Lista de Ingredientes</h3>
                  <p>Camarão rosa (Farfantepenaeus paulensis), sal, conservantes E-221, E-223.</p>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Tamanho da Porção</h3>
                    <p className="text-lg">100g</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Data de Validade</h3>
                    <p className="text-lg">15/06/2025</p>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Fabricante e Contato</h3>
                  <p>Pescados Mar Azul Ltda. | contato@marazul.com | (48) 3333-4444</p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Informações Alergênicas</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="bg-red-50 text-red-800 border-red-200">Crustáceos</Badge>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-md">
                  <div className="flex items-center gap-3 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="font-medium">Observações Importantes</h3>
                  </div>
                  <p className="text-sm text-slate-700">
                    Produto de origem marinha, processado em ambiente controlado. 
                    Devido à sua natureza, pode conter pequenas variações de coloração. 
                    A presença de cristais de gelo é normal em produtos ultracongelados.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutricional">
          <Card>
            <CardContent className="p-6">
              <div className="mb-5">
                <h3 className="text-lg font-medium mb-2">Informações Nutricionais</h3>
                <p className="text-sm text-muted-foreground">Valores nutricionais por porção de 100g</p>
              </div>
              
              <div className="overflow-hidden rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px]">Nutriente</TableHead>
                      <TableHead>Quantidade por porção</TableHead>
                      <TableHead>% Valores Diários*</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Valor Energético</TableCell>
                      <TableCell>120 kcal</TableCell>
                      <TableCell>6%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Proteínas</TableCell>
                      <TableCell>24 g</TableCell>
                      <TableCell>32%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Carboidratos</TableCell>
                      <TableCell>0.5 g</TableCell>
                      <TableCell>0%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Gorduras Totais</TableCell>
                      <TableCell>1.5 g</TableCell>
                      <TableCell>3%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Gorduras Saturadas</TableCell>
                      <TableCell>0.3 g</TableCell>
                      <TableCell>1%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Gorduras Trans</TableCell>
                      <TableCell>0 g</TableCell>
                      <TableCell>0%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Fibras Alimentares</TableCell>
                      <TableCell>0 g</TableCell>
                      <TableCell>0%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Sódio</TableCell>
                      <TableCell>450 mg</TableCell>
                      <TableCell>19%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                * Percentual de valores diários fornecidos pela porção, com base em uma dieta de 2.000 kcal ou 8.400 kJ. 
                Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas.
              </p>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Gráfico Nutricional</h3>
                <div className="bg-slate-50 p-6 rounded-md flex justify-center items-center h-64">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-slate-400 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p className="text-muted-foreground">Gráfico de composição nutricional</p>
                    <p className="text-xs text-muted-foreground mt-2">(Visualização do gráfico seria exibida aqui)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="armazenamento">
          <Card>
            <CardContent className="p-6">
              <div className="grid gap-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Instruções de Armazenamento</h3>
                  <p>
                    Armazenar a -18°C ou inferior. Uma vez descongelado, não recongelar. 
                    Manter sob refrigeração (0-4°C) por até 2 dias após descongelamento.
                  </p>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Temperatura de Armazenamento</h3>
                    <p className="text-lg">Congelado (-18°C ou inferior)</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Vida Útil Após Abertura</h3>
                    <p className="text-lg">2 dias refrigerado</p>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Requisitos Especiais</h3>
                  <p>
                    Manter protegido da luz direta. Evitar contato com outros alimentos crus 
                    para prevenir contaminação cruzada.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div className="bg-slate-50 p-4 rounded-md text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <h4 className="font-medium text-sm">Estocar em Freezer</h4>
                    <p className="text-xs text-muted-foreground mt-1">Temperatura: -18°C</p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-md text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-amber-500 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <h4 className="font-medium text-sm">Manter Longe da Luz</h4>
                    <p className="text-xs text-muted-foreground mt-1">Proteger da luz solar</p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-md text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <h4 className="font-medium text-sm">Não Recongelar</h4>
                    <p className="text-xs text-muted-foreground mt-1">Após descongelamento</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="font-medium text-blue-800">Instruções de Descongelamento</h3>
                  </div>
                  <p className="text-sm text-blue-700">
                    Para melhores resultados, descongelar lentamente sob refrigeração (0-4°C) 
                    por aproximadamente 12 horas. Alternativamente, para uso imediato, colocar 
                    em um recipiente hermético e submergir em água fria por cerca de 30 minutos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fornecedores">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Fornecedores Associados</h3>
              
              <div className="overflow-hidden rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome do Fornecedor</TableHead>
                      <TableHead>CNPJ</TableHead>
                      <TableHead>Contato</TableHead>
                      <TableHead>Prazo de Entrega</TableHead>
                      <TableHead>Condições de Pagamento</TableHead>
                      <TableHead>Último Preço</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Frigorífico XPTO</TableCell>
                      <TableCell>12.345.678/0001-90</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-sm">contato@xpto.com</span>
                          <span className="text-xs text-muted-foreground">(11) 98765-4321</span>
                        </div>
                      </TableCell>
                      <TableCell>3 dias</TableCell>
                      <TableCell>30 dias</TableCell>
                      <TableCell className="font-medium">R$ 48,90/kg</TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-medium">Pescados Mar Azul</TableCell>
                      <TableCell>65.432.109/0001-87</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-sm">comercial@marazul.com</span>
                          <span className="text-xs text-muted-foreground">(48) 3333-4444</span>
                        </div>
                      </TableCell>
                      <TableCell>2 dias</TableCell>
                      <TableCell>15/30 dias</TableCell>
                      <TableCell className="font-medium text-green-600">R$ 45,50/kg</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Histórico de Preços</h3>
                
                <div className="bg-slate-50 rounded-md p-6 flex justify-center items-center h-48">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-slate-400 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-muted-foreground">Gráfico de variação de preços</p>
                    <p className="text-xs text-muted-foreground mt-2">(Visualização do gráfico seria exibida aqui)</p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mt-4">
                  Este gráfico mostra a variação de preços dos últimos 6 meses para este produto, 
                  considerando todos os fornecedores associados.
                </p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-md border border-amber-100 mt-6">
                <div className="flex items-center gap-3 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <h3 className="font-medium text-amber-800">Recomendação de Compra</h3>
                </div>
                <p className="text-sm text-amber-700">
                  Baseado no histórico de preços e disponibilidade, recomendamos a compra com o 
                  fornecedor Pescados Mar Azul, que oferece o melhor custo-benefício considerando 
                  preço e prazo de entrega.
                </p>
              </div>
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
          <Button variant="outline" className="gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Histórico de Alterações
          </Button>
          <Link href="/fichas-tecnicas/editar/1">
            <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Editar Ficha Técnica
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}