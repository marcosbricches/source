// pages/import-details.tsx
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

// Ícones
import { 
  ArrowLeft, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  FileText, 
  Download, 
  RotateCw, 
  FileSpreadsheet,
  Calendar,
  User,
  Clock,
  Info,
} from "lucide-react";

export default function ImportDetailsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/importacao-exportacao">
          <Button variant="outline" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
        <Badge className="bg-amber-500 hover:bg-amber-600">Integração de Dados</Badge>
      </div>

      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold">Detalhes da Importação</h2>
          <p className="text-muted-foreground text-lg mt-1">
            folha_pagamento_q1.xlsx
          </p>
        </div>
        <Badge className="bg-red-500 text-md py-1 px-3">Falhou</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <FileSpreadsheet className="h-4 w-4 text-amber-500" />
              Arquivo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Nome:</dt>
                <dd className="font-medium">folha_pagamento_q1.xlsx</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Tamanho:</dt>
                <dd className="font-medium">342 KB</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Formato:</dt>
                <dd className="font-medium">XLSX</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Linhas:</dt>
                <dd className="font-medium">87</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4 text-amber-500" />
              Data e Hora
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Importação iniciada:</dt>
                <dd className="font-medium">05/03/2025 14:32</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Importação finalizada:</dt>
                <dd className="font-medium">05/03/2025 14:33</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Tempo de processamento:</dt>
                <dd className="font-medium">1m 12s</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <User className="h-4 w-4 text-amber-500" />
              Responsável
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Importado por:</dt>
                <dd className="font-medium">Amanda Silva</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Email:</dt>
                <dd className="font-medium">amanda.silva@empresa.com</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Setor:</dt>
                <dd className="font-medium">RH</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Status da Importação</CardTitle>
          <CardDescription>
            Resumo do processo de importação e validação dos dados.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Progresso</span>
              <span className="text-red-500">Interrompido em 68%</span>
            </div>
            <Progress value={68} className="h-2 bg-muted" indicatorClassName="bg-amber-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-amber-500">87</div>
              <div className="text-sm text-muted-foreground">Linhas Processadas</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-500">58</div>
              <div className="text-sm text-muted-foreground">Registros Validados</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-500">29</div>
              <div className="text-sm text-muted-foreground">Erros Encontrados</div>
            </div>
          </div>

          <Alert className="bg-red-50 border-red-200">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-600">Falha na importação</AlertTitle>
            <AlertDescription>
              A importação foi interrompida devido a erros críticos nos dados. Por favor, corrija os erros e tente novamente.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Erros Encontrados</CardTitle>
          <CardDescription>
            Lista de erros que impediram a conclusão da importação.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Linha</TableHead>
                <TableHead>Coluna</TableHead>
                <TableHead>Descrição do Erro</TableHead>
                <TableHead>Severidade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>12</TableCell>
                <TableCell>Data de Admissão</TableCell>
                <TableCell>Formato de data inválido (esperado: DD/MM/AAAA)</TableCell>
                <TableCell>
                  <Badge className="bg-amber-500">Alerta</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>24</TableCell>
                <TableCell>CPF</TableCell>
                <TableCell>CPF com dígito verificador inválido</TableCell>
                <TableCell>
                  <Badge className="bg-red-500">Crítico</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>31</TableCell>
                <TableCell>Salário Base</TableCell>
                <TableCell>Valor não pode ser negativo</TableCell>
                <TableCell>
                  <Badge className="bg-red-500">Crítico</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>45</TableCell>
                <TableCell>Código Departamento</TableCell>
                <TableCell>Departamento não encontrado no sistema</TableCell>
                <TableCell>
                  <Badge className="bg-red-500">Crítico</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>67</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Formato de email inválido</TableCell>
                <TableCell>
                  <Badge className="bg-red-500">Crítico</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="mt-4 text-sm text-muted-foreground">
            Mostrando 5 de 29 erros. 
            <Button variant="link" className="px-1 h-auto text-amber-500">Ver todos os erros</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Modelo de Dados</CardTitle>
          <CardDescription>
            Utilize esta referência para corrigir os dados antes de reimportar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="bg-blue-50 border-blue-200 mb-4">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-600">Dica útil</AlertTitle>
            <AlertDescription>
              Recomendamos fazer o download do modelo abaixo e transferir seus dados para este formato antes de realizar uma nova importação.
            </AlertDescription>
          </Alert>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campo</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Formato</TableHead>
                <TableHead>Obrigatório</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Texto</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Sim</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>CPF</TableCell>
                <TableCell>Número</TableCell>
                <TableCell>000.000.000-00</TableCell>
                <TableCell>Sim</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Data de Admissão</TableCell>
                <TableCell>Data</TableCell>
                <TableCell>DD/MM/AAAA</TableCell>
                <TableCell>Sim</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Salário Base</TableCell>
                <TableCell>Número</TableCell>
                <TableCell>0000.00</TableCell>
                <TableCell>Sim</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Departamento</TableCell>
                <TableCell>Código</TableCell>
                <TableCell>Numérico</TableCell>
                <TableCell>Sim</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Texto</TableCell>
                <TableCell>email@dominio.com</TableCell>
                <TableCell>Não</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Baixar Modelo
          </Button>
          <Button className="bg-amber-500 hover:bg-amber-600 gap-2">
            <RotateCw className="h-4 w-4" />
            Tentar Novamente
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}