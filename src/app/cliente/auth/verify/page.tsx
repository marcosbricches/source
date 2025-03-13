// app/auth/verify/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, KeyRound, RefreshCw, Smartphone, Mail } from "lucide-react";

export default function TwoFactorVerifyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabeçalho */}
      <header className="border-b py-4">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Rook System</h1>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Verificação em Duas Etapas</CardTitle>
            <CardDescription>
              Para sua segurança, precisamos confirmar sua identidade
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  E-mail
                </TabsTrigger>
                <TabsTrigger value="sms" className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  SMS
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="email" className="space-y-4">
                <div className="bg-muted rounded-lg p-4 text-sm">
                  <p className="mb-2">Um código de verificação foi enviado para:</p>
                  <p className="font-medium">j***@exemplo.com</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-code">Código de Verificação</Label>
                  <div className="grid grid-cols-6 gap-2">
                    <Input className="text-center" maxLength={1} />
                    <Input className="text-center" maxLength={1} />
                    <Input className="text-center" maxLength={1} />
                    <Input className="text-center" maxLength={1} />
                    <Input className="text-center" maxLength={1} />
                    <Input className="text-center" maxLength={1} />
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-1 text-muted-foreground hover:text-amber-600"
                  >
                    <RefreshCw className="h-3 w-3" />
                    <span className="text-xs">Reenviar código (4:32)</span>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="sms" className="space-y-4">
                <div className="bg-muted rounded-lg p-4 text-sm">
                  <p className="mb-2">Um código de verificação foi enviado para:</p>
                  <p className="font-medium">(**) *****-1234</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sms-code">Código de Verificação</Label>
                  <div className="grid grid-cols-6 gap-2">
                    <Input className="text-center" maxLength={1} />
                    <Input className="text-center" maxLength={1} />
                    <Input className="text-center" maxLength={1} />
                    <Input className="text-center" maxLength={1} />
                    <Input className="text-center" maxLength={1} />
                    <Input className="text-center" maxLength={1} />
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-1 text-muted-foreground hover:text-amber-600"
                  >
                    <RefreshCw className="h-3 w-3" />
                    <span className="text-xs">Reenviar código (4:32)</span>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
            
            <Button className="w-full bg-amber-600 hover:bg-amber-700 gap-2 mt-4">
              <KeyRound className="h-4 w-4" />
              Verificar e continuar
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Separator className="my-2" />
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
              asChild
            >
              <Link href="/auth/login" className="flex items-center justify-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar ao login
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </main>

      {/* Rodapé */}
      <footer className="border-t py-6">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Rook System. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-amber-600">
                Termos de Uso
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-amber-600">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-amber-600">
                Suporte
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}