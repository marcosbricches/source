// app/login/page.tsx


// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

// Icons
import { EyeOff, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
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
          <h1 className="devio-text-2xl devio-font-bold mb-2">Bem-vindo ao Rook System</h1>
          <p className="devio-text-muted">Faça login para acessar o painel de gerenciamento</p>
        </div>
        
        {/* LoginForm: default */}
        <Card className="devio-card">
          <CardHeader>
            <div className="space-y-2">
              <h2 className="devio-text-lg devio-font-semibold text-center">Login Administrativo</h2>
            </div>
          </CardHeader>
          
          <CardContent>
            {/* AlertMessage: error - comentado para visualização do estado normal */}
            {/* 
            <Alert className="devio-alert devio-alert-danger mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <span className="devio-font-medium">E-mail ou senha incorretos.</span>
                <br />
                <span className="devio-text-sm">Você tem mais 2 tentativas antes do bloqueio temporário.</span>
              </AlertDescription>
            </Alert>
            */}
            
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
                {/* <p className="devio-text-danger devio-text-xs">Por favor, digite um e-mail válido.</p> */}
              </div>
              
              {/* PasswordField: default */}
              <div className="space-y-2">
                <label htmlFor="password" className="devio-text-sm devio-font-medium">
                  Senha
                </label>
                <div className="devio-input-group relative">
                  <span className="devio-input-group-icon">
                    <Lock className="h-4 w-4" />
                  </span>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••"
                    className="devio-input" 
                  />
                  <Button type="button" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0">
                    <EyeOff className="h-4 w-4 text-neutral-500" />
                  </Button>
                </div>
                {/* ValidationMessage: error - comentado para visualização do estado normal */}
                {/* <p className="devio-text-danger devio-text-xs">Senha deve ter pelo menos 6 caracteres.</p> */}
                
                <p className="devio-text-muted devio-text-xs mt-1">
                  Mínimo de 6 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.
                </p>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            {/* LoginButton: primary */}
            <Button className="devio-btn devio-btn-primary w-full">
              Entrar
            </Button>
            
            {/* ForgotPasswordLink: ghost */}
            <Button variant="ghost" className="devio-btn devio-btn-ghost devio-text-sm">
              Esqueci minha senha
            </Button>
          </CardFooter>
        </Card>
        
        {/* SecurityMessage: info */}
        <div className="devio-text-xs devio-text-muted text-center mt-4">
          <p>© 2025 Rook System. Todos os direitos reservados.</p>
          <p>Área restrita. Acesso permitido somente para administradores autorizados.</p>
        </div>
      </div>
    </div>
  );
}