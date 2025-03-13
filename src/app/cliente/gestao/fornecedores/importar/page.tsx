// app/fornecedores/importar/page.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ImportarFornecedoresPage() {
  return (
    <div className="container py-8 max-w-5xl mx-auto">
      <div className="mb-6">
        <Badge className="mb-2" variant="outline">Fornecedores</Badge>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Importar Fornecedores</h1>
            <p className="text-muted-foreground">Importe fornecedores de uma planilha CSV ou Excel para o sistema</p>
          </div>
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
              Voltar
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Carregar Arquivo</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert className="bg-amber-50 border-amber-200 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <AlertTitle>Informação</AlertTitle>
              <AlertDescription className="text-amber-800">
                O arquivo deve estar no formato CSV ou Excel (XLSX) e conter as colunas: Nome, CNPJ, Email, Telefone, Prazo de Entrega e Condições de Pagamento.
              </AlertDescription>
            </Alert>

            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg p-10 text-center">
              <div className="mx-auto flex flex-col items-center justify-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Arraste e solte seu arquivo aqui ou</p>
                  <p className="text-xs text-muted-foreground">
                    Formatos suportados: CSV, XLSX. Tamanho máximo: 10MB
                  </p>
                </div>
                <Button 
                  size="sm"
                  className="bg-amber-600 hover:bg-amber-700 mt-2"
                >
                  Selecionar Arquivo
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium">Modelo de Planilha</p>
                <Button variant="outline" size="sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Baixar Modelo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Baixe nosso modelo de planilha para garantir que seus dados sejam importados corretamente.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Validação e Importação</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Alert className="bg-green-50 border-green-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <AlertTitle>Arquivo validado com sucesso</AlertTitle>
                <AlertDescription className="text-green-800">
                  Encontramos 5 fornecedores para importar. Verifique os dados abaixo antes de confirmar a importação.
                </AlertDescription>
              </Alert>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome do Fornecedor</TableHead>
                      <TableHead>CNPJ</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Telefone</TableHead>
                      <TableHead>Prazo de Entrega</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Distribuidora de Bebidas Premium</TableCell>
                      <TableCell>23.456.789/0001-01</TableCell>
                      <TableCell>contato@bebidaspremium.com</TableCell>
                      <TableCell>(11) 4567-8901</TableCell>
                      <TableCell>5 dias</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800 font-normal">Novo</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Hortifruti Direto do Campo</TableCell>
                      <TableCell>34.567.890/0001-12</TableCell>
                      <TableCell>compras@diretodocampo.com</TableCell>
                      <TableCell>(11) 97654-3210</TableCell>
                      <TableCell>1 dia</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800 font-normal">Novo</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Frigorífico XPTO</TableCell>
                      <TableCell>12.345.678/0001-90</TableCell>
                      <TableCell>contato@xpto.com</TableCell>
                      <TableCell>(11) 98765-4321</TableCell>
                      <TableCell>3 dias</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-100 text-amber-800 font-normal">Atualizar</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Laticínios Sul Mineiro</TableCell>
                      <TableCell>45.678.901/0001-23</TableCell>
                      <TableCell>comercial@sulmineiro.com</TableCell>
                      <TableCell>(35) 9876-5432</TableCell>
                      <TableCell>4 dias</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-100 text-amber-800 font-normal">Atualizar</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Pescados Mar Verde</TableCell>
                      <TableCell>56.789.012/0001-34</TableCell>
                      <TableCell>vendas@marverde.com</TableCell>
                      <TableCell>(21) 98765-4321</TableCell>
                      <TableCell>2 dias</TableCell>
                      <TableCell>
                        <Badge className="bg-red-100 text-red-800 font-normal">CNPJ Inválido</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-md">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium">Resumo da Importação</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm flex items-center">
                        <span className="inline-block w-4 h-4 bg-green-100 rounded-full mr-2"></span>
                        <span className="font-medium">2</span> novos fornecedores
                      </p>
                      <p className="text-sm flex items-center">
                        <span className="inline-block w-4 h-4 bg-amber-100 rounded-full mr-2"></span>
                        <span className="font-medium">2</span> fornecedores a atualizar
                      </p>
                      <p className="text-sm flex items-center">
                        <span className="inline-block w-4 h-4 bg-red-100 rounded-full mr-2"></span>
                        <span className="font-medium">1</span> registro com erro
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Total: 5 registros</p>
                    <p className="text-sm text-green-600 mt-2">4 registros prontos para importação</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <Separator />
          <CardFooter className="flex justify-between py-4">
            <Button variant="outline">
              Cancelar
            </Button>
            <Button className="bg-amber-600 hover:bg-amber-700">
              Confirmar Importação
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}