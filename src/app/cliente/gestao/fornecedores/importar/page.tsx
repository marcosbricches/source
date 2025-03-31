// app/modulos/fichas-tecnicas/fornecedores/importacao/page.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, ArrowLeft, ArrowRight, Download, FileSpreadsheet, Upload, Check, X, Info, AlertTriangle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function ImportacaoFornecedores() {
  const [etapaAtual, setEtapaAtual] = useState("upload")
  const [arquivoSelecionado, setArquivoSelecionado] = useState<string | null>(null)
  const [validacaoCompleta, setValidacaoCompleta] = useState(false)
  const [importacaoCompleta, setImportacaoCompleta] = useState(false)

  // Dados de exemplo para a validação
  const dadosValidacao = [
    { linha: 1, status: "valido", cnpj: "12.345.678/0001-90", nome: "Frigorífico XPTO", produtos: "Carne bovina, Frango", mensagem: "Dados válidos" },
    { linha: 2, status: "valido", cnpj: "23.456.789/0001-01", nome: "Distribuidora Alimentos ABC", produtos: "Arroz, Feijão, Macarrão", mensagem: "Dados válidos" },
    { linha: 3, status: "invalido", cnpj: "34.567.890/0001", nome: "Fornecedor Inválido", produtos: "Batata, Cenoura", mensagem: "CNPJ inválido" },
    { linha: 4, status: "atencao", cnpj: "45.678.901/0001-23", nome: "Distribuidora XYZ", produtos: "Óleo, Vinagre", mensagem: "Fornecedor já cadastrado" },
    { linha: 5, status: "valido", cnpj: "56.789.012/0001-34", nome: "Atacado de Bebidas", produtos: "Refrigerantes, Sucos", mensagem: "Dados válidos" },
  ]

  // Dados de exemplo para o resumo de importação
  const resumoImportacao = {
    total: 5,
    validos: 3,
    ignorados: 1,
    erros: 1,
    novos: 3,
    atualizados: 1
  }

  const handleArquivoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setArquivoSelecionado(e.target.files[0].name)
    }
  }

  const handleValidar = () => {
    // Simulando validação
    setTimeout(() => {
      setValidacaoCompleta(true)
      setEtapaAtual("validacao")
    }, 1000)
  }

  const handleImportar = () => {
    // Simulando importação
    setTimeout(() => {
      setImportacaoCompleta(true)
      setEtapaAtual("resultado")
    }, 1500)
  }

  return (
    <div className="container py-8 max-w-7xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" className="px-2 text-muted-foreground">Dashboard</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 text-muted-foreground">Fichas Técnicas</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 text-muted-foreground">Fornecedores</Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Importação</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">Fornecedores</Badge>
          <span className="text-muted-foreground">/</span>
          <Badge variant="outline">Importação</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Importação de Fornecedores</h1>
        <p className="text-muted-foreground max-w-3xl">
          Importe dados de fornecedores a partir de arquivos CSV ou Excel. O sistema validará os dados antes de realizar a importação.
        </p>
      </div>

      {/* Indicador de progresso */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-2">
            <Badge className={etapaAtual === "upload" ? "bg-amber-600" : "bg-green-500"}>1</Badge>
            <span className={etapaAtual === "upload" ? "font-medium" : "text-muted-foreground"}>Upload de Arquivo</span>
          </div>
          <div className="flex-1 mx-2 pt-3">
            <div className="h-[2px] bg-gray-200 relative">
              <div className={`absolute top-0 left-0 h-full bg-amber-600 transition-all ${
                etapaAtual === "upload" ? "w-0" : etapaAtual === "validacao" ? "w-1/2" : "w-full"
              }`}></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={etapaAtual === "validacao" ? "bg-amber-600" : etapaAtual === "resultado" ? "bg-green-500" : "bg-gray-200"}>2</Badge>
            <span className={etapaAtual === "validacao" ? "font-medium" : etapaAtual === "resultado" ? "text-muted-foreground" : "text-gray-400"}>Validação</span>
          </div>
          <div className="flex-1 mx-2 pt-3">
            <div className="h-[2px] bg-gray-200 relative">
              <div className={`absolute top-0 left-0 h-full bg-amber-600 transition-all ${
                etapaAtual === "resultado" ? "w-full" : "w-0"
              }`}></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={etapaAtual === "resultado" ? "bg-amber-600" : "bg-gray-200"}>3</Badge>
            <span className={etapaAtual === "resultado" ? "font-medium" : "text-gray-400"}>Resultado</span>
          </div>
        </div>
      </div>

      {/* Conteúdo principal - varia de acordo com a etapa atual */}
      {etapaAtual === "upload" && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Upload de Arquivo</CardTitle>
            <CardDescription>
              Selecione um arquivo CSV ou Excel (.xlsx) contendo os dados dos fornecedores.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-10 text-center">
                <FileSpreadsheet className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">Arraste um arquivo ou clique para selecionar</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Formatos suportados: CSV, XLS, XLSX
                </p>
                <Input 
                  id="arquivo" 
                  type="file" 
                  accept=".csv,.xls,.xlsx" 
                  className="hidden" 
                  onChange={handleArquivoChange}
                />
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById('arquivo')?.click()}
                  className="mb-2"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Selecionar arquivo
                </Button>
                {arquivoSelecionado && (
                  <div className="mt-4 text-left p-4 bg-gray-50 rounded-md">
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet className="h-5 w-5 text-amber-600" />
                      <span className="font-medium">{arquivoSelecionado}</span>
                    </div>
                  </div>
                )}
              </div>

              <Alert className="border-amber-200 bg-amber-50">
                <Info className="h-4 w-4 text-amber-600" />
                <AlertTitle className="text-amber-800">Formato do arquivo</AlertTitle>
                <AlertDescription className="text-amber-700">
                  <p className="mb-2">O arquivo deve conter as seguintes colunas: Nome do Fornecedor, CNPJ, E-mail, Telefone, Produtos Fornecidos, Condições de Pagamento, Prazo de Entrega.</p>
                  <Button variant="link" className="p-0 h-auto text-amber-700 font-medium">
                    Baixar modelo de importação
                    <Download className="h-4 w-4 ml-1" />
                  </Button>
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button variant="outline" disabled>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <Button 
              className="bg-amber-600 hover:bg-amber-700 gap-2"
              onClick={handleValidar}
              disabled={!arquivoSelecionado}
            >
              Validar Dados
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {etapaAtual === "validacao" && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Validação de Dados</CardTitle>
            <CardDescription>
              Revise os dados antes de confirmar a importação. Registros com erros serão ignorados.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Arquivo: <span className="text-muted-foreground">{arquivoSelecionado}</span></h3>
                  <p className="text-sm text-muted-foreground">Total de registros: 5</p>
                </div>
                <div className="flex gap-2">
                  <Badge className="bg-green-500">Válidos: 3</Badge>
                  <Badge className="bg-amber-500">Atenção: 1</Badge>
                  <Badge className="bg-red-500">Inválidos: 1</Badge>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Linha</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>CNPJ</TableHead>
                    <TableHead>Nome do Fornecedor</TableHead>
                    <TableHead>Produtos Fornecidos</TableHead>
                    <TableHead>Mensagem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dadosValidacao.map((item) => (
                    <TableRow key={item.linha}>
                      <TableCell className="font-medium">{item.linha}</TableCell>
                      <TableCell>
                        {item.status === "valido" && <Badge className="bg-green-500"><Check className="h-3 w-3 mr-1" />Válido</Badge>}
                        {item.status === "invalido" && <Badge className="bg-red-500"><X className="h-3 w-3 mr-1" />Inválido</Badge>}
                        {item.status === "atencao" && <Badge className="bg-amber-500"><AlertTriangle className="h-3 w-3 mr-1" />Atenção</Badge>}
                      </TableCell>
                      <TableCell>{item.cnpj}</TableCell>
                      <TableCell>{item.nome}</TableCell>
                      <TableCell>{item.produtos}</TableCell>
                      <TableCell className={`text-sm ${
                        item.status === "invalido" ? "text-red-600" : 
                        item.status === "atencao" ? "text-amber-600" : 
                        "text-green-600"
                      }`}>
                        {item.mensagem}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Alert className="border-amber-200 bg-amber-50">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertTitle className="text-amber-800">Atenção</AlertTitle>
                <AlertDescription className="text-amber-700">
                  Registros marcados como "Inválidos" serão ignorados durante a importação. Registros com "Atenção" serão atualizados se já existirem.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button variant="outline" onClick={() => setEtapaAtual("upload")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <Button 
              className="bg-amber-600 hover:bg-amber-700 gap-2"
              onClick={handleImportar}
            >
              Confirmar Importação
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {etapaAtual === "resultado" && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Importação Concluída</CardTitle>
            <CardDescription>
              A importação de fornecedores foi finalizada. Veja abaixo um resumo dos resultados.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="rounded-lg bg-green-50 border border-green-100 p-4 flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-green-800">Importação realizada com sucesso</h3>
                  <p className="text-green-700">Alguns registros foram ignorados devido a erros nos dados.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gray-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Total de Registros</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <FileSpreadsheet className="h-8 w-8 text-gray-500" />
                      <span className="text-3xl font-bold">{resumoImportacao.total}</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50 border-green-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Importados com Sucesso</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Check className="h-8 w-8 text-green-500" />
                      <span className="text-3xl font-bold">{resumoImportacao.validos}</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-50 border-red-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Registros Ignorados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <X className="h-8 w-8 text-red-500" />
                      <span className="text-3xl font-bold">{resumoImportacao.ignorados + resumoImportacao.erros}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="detalhes">
                <TabsList className="mb-4">
                  <TabsTrigger value="detalhes">Detalhes da Importação</TabsTrigger>
                  <TabsTrigger value="erros">Erros Encontrados</TabsTrigger>
                </TabsList>
                
                <TabsContent value="detalhes">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Descrição</TableHead>
                        <TableHead className="text-right">Quantidade</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Novos fornecedores criados</TableCell>
                        <TableCell className="text-right font-medium">{resumoImportacao.novos}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fornecedores atualizados</TableCell>
                        <TableCell className="text-right font-medium">{resumoImportacao.atualizados}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Ignorados por duplicidade</TableCell>
                        <TableCell className="text-right font-medium">{resumoImportacao.ignorados}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Ignorados por erros</TableCell>
                        <TableCell className="text-right font-medium">{resumoImportacao.erros}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
                
                <TabsContent value="erros">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[80px]">Linha</TableHead>
                        <TableHead>CNPJ</TableHead>
                        <TableHead>Nome do Fornecedor</TableHead>
                        <TableHead>Erro</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">3</TableCell>
                        <TableCell>34.567.890/0001</TableCell>
                        <TableCell>Fornecedor Inválido</TableCell>
                        <TableCell className="text-red-600">CNPJ inválido</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>

              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Baixar Relatório de Importação
                </Button>
                <Button variant="outline" className="gap-2 text-red-600 border-red-200 hover:bg-red-50">
                  <Download className="h-4 w-4" />
                  Baixar Lista de Erros
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button 
              variant="outline" 
              onClick={() => {
                setEtapaAtual("upload")
                setArquivoSelecionado(null)
                setValidacaoCompleta(false)
                setImportacaoCompleta(false)
              }}
            >
              Nova Importação
            </Button>
            <Button className="bg-amber-600 hover:bg-amber-700 gap-2" onClick={() => window.location.href = "/modulos/fichas-tecnicas/fornecedores"}>
              Ir para Lista de Fornecedores
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}