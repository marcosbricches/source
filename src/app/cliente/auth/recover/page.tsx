// app/auth/recover/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, CheckCircle, Mail } from "lucide-react";

export default function RecoverPasswordPage() {
  // O estado de sucesso seria gerenciado pelo componente na aplicação real
  // Para o protótipo, vamos mostrar a visualização do estado inicial
  const isSubmitted = false;

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
            <div className="flex items-center mb-2">
              <Link 
                href="/auth/login" 
                className="text-muted-foreground hover:text-amber-600 inline-flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                <span className="text-sm">Voltar ao login</span>
              </Link>
            </div>
            <CardTitle className="text-2xl font-bold">Recuperação de Senha</CardTitle>
            <CardDescription>
              Digite seu e-mail para receber um link de recuperação
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isSubmitted ? (
              <Alert className="bg-green-50 border-green-200 text-green-800">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription>
                  E-mail enviado com sucesso! Verifique sua caixa de entrada para prosseguir com a recuperação.
                </AlertDescription>
              </Alert>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="exemplo@email.com"
                    autoComplete="email"
                  />
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 gap-2">
                  <Mail className="h-4 w-4" />
                  Enviar link de recuperação
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  O link será válido por 24 horas
                </p>
              </>
            )}
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