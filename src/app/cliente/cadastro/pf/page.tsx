// app/cadastro/iniciar-jornada-pf/page.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function IniciarJornadaPFPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="border-b bg-white py-4">
        <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-amber-600"></div>
            <span className="font-bold text-xl">Rook System</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8 px-4">
        <div className="container max-w-3xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Etapa 2 de 2: Complete seu cadastro</span>
              <span className="text-sm text-muted-foreground">100%</span>
            </div>
            <Progress value={100} className="h-2" />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Iniciar sua jornada no Rook</CardTitle>
              <CardDescription>
                Complete seu perfil para personalizar sua experiência e calcular seus indicadores iniciais.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Dados Pessoais */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Dados Pessoais</h3>
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome-cadastrante">Nome do Cadastrante</Label>
                    <Input id="nome-cadastrante" value="Maria Silva" disabled />
                    <p className="text-xs text-muted-foreground">Informado na etapa anterior</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" value="123.456.789-00" disabled />
                    <p className="text-xs text-muted-foreground">Informado na etapa anterior</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" value="(11) 98765-4321" disabled />
                    <p className="text-xs text-muted-foreground">Informado na etapa anterior</p>
                  </div>
                </div>
              </div>
              
              {/* Informações do Negócio */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Informações do Negócio</h3>
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ticket-medio">Ticket Médio</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-muted-foreground">R$</span>
                      <Input id="ticket-medio" className="pl-10" placeholder="0,00" />
                    </div>
                    <p className="text-xs text-muted-foreground">Valor médio gasto por cliente</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="faturamento">Faturamento Médio Real ou Esperado</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-muted-foreground">R$</span>
                      <Input id="faturamento" className="pl-10" placeholder="0,00" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="clientes-diarios">Quantidade de Clientes Diários</Label>
                    <Input id="clientes-diarios" type="number" placeholder="0" />
                    <p className="text-xs text-muted-foreground">Fluxo médio diário de clientes atendidos ou esperados</p>
                  </div>
                </div>
              </div>
              
              {/* Dados do Estabelecimento */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Dados do Estabelecimento</h3>
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="nome-estabelecimento">Nome do Estabelecimento</Label>
                    <Input id="nome-estabelecimento" placeholder="Como seu estabelecimento é conhecido" />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="endereco">Endereço do Estabelecimento</Label>
                    <Input id="endereco" placeholder="Endereço completo" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 md:col-span-2">
                    <div className="space-y-2">
                      <Label htmlFor="cep">CEP</Label>
                      <Input id="cep" placeholder="00000-000" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cidade">Cidade</Label>
                      <Input id="cidade" placeholder="Cidade" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="estado">Estado</Label>
                      <Select>
                        <SelectTrigger id="estado">
                          <SelectValue placeholder="UF" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sp">SP</SelectItem>
                          <SelectItem value="rj">RJ</SelectItem>
                          <SelectItem value="mg">MG</SelectItem>
                          {/* Outros estados... */}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="tipo-culinaria">Tipo de Culinária</Label>
                    <Select>
                      <SelectTrigger id="tipo-culinaria">
                        <SelectValue placeholder="Selecione o tipo de culinária" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sobremesas">Sobremesas > Gelatos Artesanais</SelectItem>
                        <SelectItem value="cafeteria">Cafeteria > Café Especial</SelectItem>
                        <SelectItem value="sandwich">Sanduíches > Hambúrgueres Artesanais</SelectItem>
                        <SelectItem value="pizza">Pizza > Napoletana</SelectItem>
                        {/* Outros tipos de culinária... */}
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">Escolha a categoria que melhor define seu negócio</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline">Voltar</Button>
              <Button className="bg-amber-600 hover:bg-amber-700">
                Concluir Cadastro
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-6 mt-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">© 2025 Rook System. Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:underline">Termos de Uso</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">Política de Privacidade</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">Suporte</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}