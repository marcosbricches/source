// app/auth/login/page.tsx (atualizado)
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, LogIn, Eye } from "lucide-react";

export default function LoginPage() {
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
            <CardTitle className="text-2xl font-bold text-center">Entrar</CardTitle>
            <CardDescription className="text-center">
              Digite suas credenciais para acessar o sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Alerta de erro (condicionalmente renderizado) */}
            <Alert variant="destructive" className="mb-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                E-mail ou senha incorretos. Tente novamente.
              </AlertDescription>
            </Alert>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="exemplo@email.com"
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <Link 
                  href="/auth/recover" 
                  className="text-xs text-muted-foreground hover:text-amber-600 hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="relative">
                <Input id="password" type="password" className="pr-10" />
                <button 
                  type="button" 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-amber-600"
                  aria-label="Mostrar senha"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
            <Button className="w-full bg-amber-600 hover:bg-amber-700 gap-2">
              <LogIn className="h-4 w-4" />
              Entrar
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Separator className="my-2" />
            <div className="text-sm text-center text-muted-foreground">
              Não tem uma conta?{" "}
              <Link href="/auth/register" className="text-amber-600 hover:underline">
                Cadastre-se
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