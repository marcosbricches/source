// app/cadastro/page.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function CadastroPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="border-b bg-white py-4">
        <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-amber-600"></div>
            <span className="font-bold text-xl">Rook System</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="#">Já tem uma conta? Entrar</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-xl">
          {/* Progress Indicator */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Etapa 1 de 2: Dados iniciais</span>
              <span className="text-sm text-muted-foreground">50%</span>
            </div>
            <Progress value={50} className="h-2" />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Crie sua conta no Rook</CardTitle>
              <CardDescription>
                Comece com os dados essenciais e depois complete seu perfil para aproveitar ao máximo a plataforma.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="pj" className="w-full">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="pj">Pessoa Jurídica</TabsTrigger>
                  <TabsTrigger value="pf">Pessoa Física</TabsTrigger>
                </TabsList>
                
                <TabsContent value="pj" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome completo</Label>
                    <Input id="nome" placeholder="Digite seu nome completo" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" placeholder="(00) 00000-0000" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seuemail@exemplo.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input id="cnpj" placeholder="00.000.000/0000-00" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="senha">Senha</Label>
                    <Input id="senha" type="password" placeholder="Crie uma senha segura" />
                    <p className="text-xs text-muted-foreground mt-1">A senha deve conter no mínimo 6 caracteres com letras maiúsculas, minúsculas, números e caracteres especiais.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="pf" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome-pf">Nome completo</Label>
                    <Input id="nome-pf" placeholder="Digite seu nome completo" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telefone-pf">Telefone</Label>
                    <Input id="telefone-pf" placeholder="(00) 00000-0000" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email-pf">E-mail</Label>
                    <Input id="email-pf" type="email" placeholder="seuemail@exemplo.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" placeholder="000.000.000-00" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="senha-pf">Senha</Label>
                    <Input id="senha-pf" type="password" placeholder="Crie uma senha segura" />
                    <p className="text-xs text-muted-foreground mt-1">A senha deve conter no mínimo 6 caracteres com letras maiúsculas, minúsculas, números e caracteres especiais.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Continuar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-6">
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