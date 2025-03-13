// app/fichas-tecnicas/[id]/page.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function FichaTecnicaPage() {
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
          <Badge variant="outline">Camarão Rosa Limpo</Badge>
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
                      <TableHead>Preço</TableHead>
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
                      <TableCell className="font-medium">R$ 45,50/kg</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Exportar PDF
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