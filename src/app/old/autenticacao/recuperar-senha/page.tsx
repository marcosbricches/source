// app/recuperar-senha/page.tsx
import Link from 'next/link';

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Icons
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

export default function RecuperarSenhaPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-blue-50 p-4">
      {/* PageContainer: default */}
      <div className="devio-container max-w-md relative">
        {/* PageDecoration: pattern */}
        <div className="devio-dot-pattern"></div>
        
        {/* BrandLogo: default */}
        <div className="flex justify-center mb-6">
          <div className="devio-icon-container devio-icon-primary devio-icon-container-lg">
            <span className="devio-text-xl devio-font-bold">Rook</span>
          </div>
        </div>
        
        {/* PageHeader: default */}
        <div className="text-center mb-8">
          <h1 className="devio-text-2xl devio-font-bold mb-2">Recuperação de Senha</h1>
          <p className="devio-text-muted">Informe seu e-mail para receber um link de redefinição</p>
        </div>
        
        {/* RecoveryForm: default */}
        <Card className="devio-card">
          <CardHeader>
            <div className="space-y-2">
              <h2 className="devio-text-lg devio-font-semibold text-center">Recuperar Acesso</h2>
            </div>
          </CardHeader>
          
          <CardContent>
            {/* AlertMessage: info */}
            <Alert className="devio-alert devio-alert-info mb-4">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                <span className="devio-font-medium">Enviaremos um link de recuperação</span>
                <br />
                <span className="devio-text-sm">O link será válido por 24 horas e pode ser usado apenas uma vez.</span>
              </AlertDescription>
            </Alert>
            
            <div className="space-y-4">
              {/* EmailField: default */}
              <div className="space-y-2">
                <label htmlFor="email" className="devio-text-sm devio-font-medium">
                  E-mail
                </label>
                <div className="devio-input-group">
                  <span className="devio-input-group-icon">
                    <Mail className="h-4 w-4" />
                  </span>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu.email@exemplo.com"
                    className="devio-input" 
                  />
                </div>
                {/* ValidationMessage: error - comentado para visualização do estado normal */}
                {/* <p className="devio-text-danger devio-text-xs">E-mail não encontrado ou conta inativa.</p> */}
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            {/* RecoverButton: primary */}
            <Button className="devio-btn devio-btn-primary w-full">
              Recuperar
            </Button>
            
            {/* ReturnToLogin: ghost */}
            <Link href="/login" className="w-full">
              <Button variant="ghost" className="devio-btn devio-btn-ghost devio-text-sm w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para o login
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        {/* SecurityMessage: info */}
        <div className="devio-text-xs devio-text-muted text-center mt-4">
          <p>© 2025 Rook System. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}