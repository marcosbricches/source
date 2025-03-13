// app/planos/pagamento/page.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, CheckIcon, CreditCard, QrCode, Receipt } from "lucide-react";
import Link from "next/link";

export default function PagamentoPage() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <Link href="/planos" className="flex items-center text-sm text-muted-foreground mb-4 hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-1" /> Voltar para planos
        </Link>
        
        <Badge className="mb-2" variant="outline">Pagamento</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Finalizar assinatura</h1>
        <p className="text-muted-foreground max-w-3xl">
          Complete o pagamento para ativar seu plano e comece a otimizar a gestão do seu restaurante.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna do Formulário de Pagamento - Maior */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="cartao" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="cartao" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Cartão</span>
              </TabsTrigger>
              <TabsTrigger value="boleto" className="flex items-center gap-2">
                <Receipt className="h-4 w-4" />
                <span>Boleto</span>
              </TabsTrigger>
              <TabsTrigger value="pix" className="flex items-center gap-2">
                <QrCode className="h-4 w-4" />
                <span>Pix</span>
              </TabsTrigger>
            </TabsList>

            {/* Conteúdo da Tab Cartão de Crédito */}
            <TabsContent value="cartao" className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label>Tipo de pagamento</Label>
                  <RadioGroup defaultValue="recorrente" className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <div className="flex items-center space-x-2 border rounded-md p-4">
                      <RadioGroupItem value="recorrente" id="recorrente" />
                      <Label htmlFor="recorrente" className="flex flex-col">
                        <span>Recorrente Mensal</span>
                        <span className="text-xs text-muted-foreground">Renovação automática</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4">
                      <RadioGroupItem value="parcelado" id="parcelado" />
                      <Label htmlFor="parcelado" className="flex flex-col">
                        <span>Anual Parcelado</span>
                        <span className="text-xs text-muted-foreground">Até 12x no cartão</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4">
                      <RadioGroupItem value="avista" id="avista" />
                      <Label htmlFor="avista" className="flex flex-col">
                        <span>Anual à Vista</span>
                        <span className="text-xs text-muted-foreground">20% de desconto</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="card-name">Nome no cartão</Label>
                  <Input id="card-name" placeholder="Nome como aparece no cartão" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="card-number">Número do cartão</Label>
                  <Input id="card-number" placeholder="9999 9999 9999 9999" className="mt-1" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="card-expiry">Validade (MM/AA)</Label>
                    <Input id="card-expiry" placeholder="MM/AA" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="card-cvv">CVV</Label>
                    <Input id="card-cvv" placeholder="999" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="cpf">CPF do titular</Label>
                  <Input id="cpf" placeholder="999.999.999-99" className="mt-1" />
                </div>

                {/* Opção de parcelamento aparece condicionalmente */}
                <div className="parcelamento">
                  <Label htmlFor="parcelas">Número de parcelas</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1x de R$ 932,16 (à vista)</SelectItem>
                      <SelectItem value="2">2x de R$ 466,08 sem juros</SelectItem>
                      <SelectItem value="3">3x de R$ 310,72 sem juros</SelectItem>
                      <SelectItem value="6">6x de R$ 155,36 sem juros</SelectItem>
                      <SelectItem value="12">12x de R$ 77,68 sem juros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Alert variant="outline" className="bg-amber-50 border-amber-200">
                <AlertDescription className="text-amber-800 text-sm">
                  Suas informações de pagamento são processadas com segurança. Não armazenamos dados do seu cartão.
                </AlertDescription>
              </Alert>

              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                Pagar Agora
              </Button>
            </TabsContent>

            {/* Conteúdo da Tab Boleto */}
            <TabsContent value="boleto" className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label>Tipo de pagamento</Label>
                  <RadioGroup defaultValue="boleto-mensal" className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="flex items-center space-x-2 border rounded-md p-4">
                      <RadioGroupItem value="boleto-mensal" id="boleto-mensal" />
                      <Label htmlFor="boleto-mensal" className="flex flex-col">
                        <span>Boleto Recorrente</span>
                        <span className="text-xs text-muted-foreground">Pagamento mensal</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4">
                      <RadioGroupItem value="boleto-anual" id="boleto-anual" />
                      <Label htmlFor="boleto-anual" className="flex flex-col">
                        <span>Boleto Anual</span>
                        <span className="text-xs text-muted-foreground">20% de desconto</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input id="nome" placeholder="Seu nome completo" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="cpf-boleto">CPF</Label>
                  <Input id="cpf-boleto" placeholder="999.999.999-99" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" placeholder="Para envio do boleto" className="mt-1" />
                </div>
              </div>

              <Alert variant="outline" className="bg-blue-50 border-blue-200">
                <AlertDescription className="text-blue-800 text-sm">
                  O boleto será enviado para seu e-mail e terá vencimento em 3 dias úteis. É necessário pagar o boleto para ativar sua assinatura.
                </AlertDescription>
              </Alert>

              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                Gerar Boleto
              </Button>
            </TabsContent>

            {/* Conteúdo da Tab PIX */}
            <TabsContent value="pix" className="space-y-6">
              <div className="flex flex-col items-center justify-center p-6 border rounded-md">
                <div className="bg-gray-200 w-48 h-48 flex items-center justify-center mb-4">
                  <QrCode className="h-24 w-24 text-gray-500" />
                </div>
                <p className="text-sm text-center mb-2">Escaneie o código QR com o aplicativo do seu banco</p>
                <p className="text-xs text-muted-foreground text-center mb-4">Pagamento processado instantaneamente</p>
                <Button variant="outline" className="w-full">
                  Copiar código PIX
                </Button>
              </div>

              <Alert variant="outline" className="bg-green-50 border-green-200">
                <AlertDescription className="text-green-800 text-sm">
                  O pagamento via PIX é processado instantaneamente. Após o pagamento, sua assinatura será ativada automaticamente.
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>
        </div>

        {/* Coluna do Resumo do Pedido - Menor */}
        <div className="lg:col-span-1">
          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Resumo do pedido</CardTitle>
              <CardDescription>Plano Standart selecionado</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">Plano Standart (Mensal)</span>
                <span className="font-medium">R$ 97,00</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span className="text-lg">R$ 97,00</span>
              </div>

              <div className="mt-6 space-y-3">
                <h3 className="text-sm font-medium">Recursos incluídos:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-xs">Cadastro ilimitado de produtos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-xs">Relatórios financeiros avançados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-xs">Controle de estoque</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-xs">Gestão de fornecedores</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 border-t px-6 py-4">
              <div className="text-xs text-muted-foreground">
                Ao realizar o pagamento, você concorda com nossos <a href="#" className="underline hover:text-amber-600">Termos de Serviço</a> e <a href="#" className="underline hover:text-amber-600">Política de Privacidade</a>.
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}