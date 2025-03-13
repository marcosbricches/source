// app/planos/page.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckIcon } from "lucide-react";

export default function PlanosPage() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <Badge className="mb-2" variant="outline">Assinatura</Badge>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Escolha seu plano</h1>
        <p className="text-muted-foreground max-w-3xl">
          Escolha o plano mais adequado para o seu restaurante e tenha acesso a ferramentas poderosas de planejamento orçamentário e gestão operacional.
        </p>
      </div>

      <Tabs defaultValue="monthly" className="w-full mb-10">
        <div className="flex justify-center mb-6">
          <TabsList>
            <TabsTrigger value="monthly">Pagamento Mensal</TabsTrigger>
            <TabsTrigger value="yearly">Pagamento Anual <Badge variant="outline" className="ml-2 text-xs bg-amber-100 text-amber-800 hover:bg-amber-100">20% OFF</Badge></TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="monthly" className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Plano Freemium */}
            <Card className="flex flex-col border-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Plano Freemium</CardTitle>
                <CardDescription>
                  Acesso limitado com funcionalidades reduzidas
                </CardDescription>
                <div className="mt-3">
                  <span className="text-3xl font-bold">R$ 0</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm mb-4">Ideal para testar a plataforma:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">Dashboard básico</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">Cadastro de até 15 produtos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">Relatórios simplificados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">Suporte por e-mail</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Selecionar
                </Button>
              </CardFooter>
            </Card>

            {/* Plano Standart */}
            <Card className="flex flex-col border-2 border-amber-500 relative">
              <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-md">
                POPULAR
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Plano Standart</CardTitle>
                <CardDescription>
                  Acesso ilimitado para pequenos negócios
                </CardDescription>
                <div className="mt-3">
                  <span className="text-3xl font-bold">R$ 97</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm mb-4">Tudo do Freemium, mais:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">Cadastro ilimitado de produtos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">Relatórios financeiros avançados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">Controle de estoque</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">Gestão de fornecedores</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">Suporte prioritário</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Selecionar
                </Button>
              </CardFooter>
            </Card>

            {/* Plano Business */}
            <Card className="flex flex-col border-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Plano Business</CardTitle>
                <CardDescription>
                  Acesso FULL para negócios consolidados
                </CardDescription>
                <div className="mt-3">
                  <span className="text-3xl font-bold">R$ 197</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm mb-4">Tudo do Standart, mais:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">Gestão de múltiplas unidades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">Análise comparativa entre unidades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">Previsão de demanda</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">API para integração</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">Suporte VIP 24/7</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Selecionar
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Conteúdo da aba de pagamento anual - similar ao mensal com descontos */}
        <TabsContent value="yearly" className="w-full">
          {/* Conteúdo similar para pagamento anual com desconto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mesma estrutura com preços anuais */}
            {/* Cards similares aos mensais, mas com preços anuais e desconto */}
          </div>
        </TabsContent>
      </Tabs>

      <Separator className="my-8" />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Perguntas Frequentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Posso mudar de plano depois?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Caso faça um upgrade, o valor será ajustado proporcionalmente.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Como funciona o período de teste?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                O plano Freemium permite que você teste as funcionalidades básicas sem limitação de tempo. Para recursos avançados, oferecemos 14 dias de teste gratuito nos planos pagos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}