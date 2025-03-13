// app/auth/reset/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Lock, AlertTriangle, Eye } from "lucide-react";

export default function ResetPasswordPage() {
  // O estado de sucesso seria gerenciado pelo componente na aplicação real
  // Para o protótipo, vamos mostrar a visualização do estado inicial
  const isSuccess = false;

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
            <CardTitle className="text-2xl font-bold">Redefinir Senha</CardTitle>
            <CardDescription>
              Crie uma nova senha para acessar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isSuccess ? (
              <>
                <Alert className="bg-green-50 border-green-200 text-green-800">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription>
                    Senha redefinida com sucesso. Faça login para acessar.
                  </AlertDescription>
                </Alert>
                <Button 
                  className="w-full bg-amber-600 hover:bg-amber-700 mt-4"
                  asChild
                >
                  <Link href="/auth/login">Ir para o login</Link>
                </Button>
              </>
            ) : (
              <>
                <Alert variant="destructive" className="mb-2">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    As senhas não coincidem. Tente novamente.
                  </AlertDescription>
                </Alert>
                
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nova Senha</Label>
                  <div className="relative">
                    <Input 
                      id="new-password" 
                      type="password" 
                      className="pr-10" 
                    />
                    <button 
                      type="button" 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-amber-600"
                      aria-label="Mostrar senha"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Mínimo de 6 caracteres, incluindo letras maiúsculas, minúsculas, 
                    números e caracteres especiais.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar Senha</Label>
                  <div className="relative">
                    <Input 
                      id="confirm-password" 
                      type="password" 
                      className="pr-10" 
                    />
                    <button 
                      type="button" 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-amber-600"
                      aria-label="Mostrar senha"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <Button className="w-full bg-amber-600 hover:bg-amber-700 gap-2 mt-2">
                  <Lock className="h-4 w-4" />
                  Salvar nova senha
                </Button>
              </>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Separator className="my-2" />
            <div className="text-sm text-center text-muted-foreground">
              Lembrou sua senha?{" "}
              <Link href="/auth/login" className="text-amber-600 hover:underline">
                Faça login
              </Link>
            </div>
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