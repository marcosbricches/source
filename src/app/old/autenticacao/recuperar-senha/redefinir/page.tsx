// app/recuperar-senha/redefinir/page.tsx
import Link from 'next/link';

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Icons
import {  EyeOff, Lock, X, Check } from 'lucide-react';

export default function RedefinirSenhaPage() {
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
          <h1 className="devio-text-2xl devio-font-bold mb-2">Criar Nova Senha</h1>
          <p className="devio-text-muted">Defina uma nova senha segura para sua conta</p>
        </div>
        
        {/* ResetPasswordForm: default */}
        <Card className="devio-card">
          <CardHeader>
            <div className="space-y-2">
              <h2 className="devio-text-lg devio-font-semibold text-center">Redefinição de Senha</h2>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              {/* PasswordStrengthMeter: default */}
              <div className="space-y-2">
                <div className="devio-flex devio-justify-between devio-items-center">
                  <span className="devio-text-sm devio-font-medium">Força da senha</span>
                  <span className="devio-badge devio-badge-warning devio-badge-sm">Média</span>
                </div>
                <Progress value={60} className="h-2 bg-neutral-100" />
              </div>
              
              {/* NewPasswordField: default */}
              <div className="space-y-2">
                <label htmlFor="newPassword" className="devio-text-sm devio-font-medium">
                  Nova Senha
                </label>
                <div className="devio-input-group relative">
                  <span className="devio-input-group-icon">
                    <Lock className="h-4 w-4" />
                  </span>
                  <Input 
                    id="newPassword" 
                    type="password" 
                    placeholder="••••••••"
                    className="devio-input" 
                  />
                  <Button type="button" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0">
                    <EyeOff className="h-4 w-4 text-neutral-500" />
                  </Button>
                </div>
              </div>
              
              {/* ConfirmPasswordField: default */}
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="devio-text-sm devio-font-medium">
                  Confirmar Senha
                </label>
                <div className="devio-input-group relative">
                  <span className="devio-input-group-icon">
                    <Lock className="h-4 w-4" />
                  </span>
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    placeholder="••••••••"
                    className="devio-input" 
                  />
                  <Button type="button" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0">
                    <EyeOff className="h-4 w-4 text-neutral-500" />
                  </Button>
                </div>
                {/* ValidationMessage: error - comentado para visualização do estado normal */}
                {/* <p className="devio-text-danger devio-text-xs">As senhas não coincidem.</p> */}
              </div>
              
              {/* PasswordRequirements: checklist */}
              <div className="devio-highlight-box">
                <p className="devio-text-sm devio-font-medium mb-2">Requisitos de segurança:</p>
                <ul className="space-y-1">
                  <li className="devio-flex devio-items-center devio-gap-2 devio-text-xs">
                    <Check className="h-3.5 w-3.5 text-success-500" />
                    <span>Mínimo de 6 caracteres</span>
                  </li>
                  <li className="devio-flex devio-items-center devio-gap-2 devio-text-xs">
                    <Check className="h-3.5 w-3.5 text-success-500" />
                    <span>Pelo menos uma letra maiúscula</span>
                  </li>
                  <li className="devio-flex devio-items-center devio-gap-2 devio-text-xs">
                    <Check className="h-3.5 w-3.5 text-success-500" />
                    <span>Pelo menos uma letra minúscula</span>
                  </li>
                  <li className="devio-flex devio-items-center devio-gap-2 devio-text-xs">
                    <X className="h-3.5 w-3.5 text-danger-500" />
                    <span>Pelo menos um número</span>
                  </li>
                  <li className="devio-flex devio-items-center devio-gap-2 devio-text-xs">
                    <X className="h-3.5 w-3.5 text-danger-500" />
                    <span>Pelo menos um caractere especial</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            {/* SaveButton: primary */}
            <Button className="devio-btn devio-btn-primary w-full">
              Salvar Nova Senha
            </Button>
            
            {/* ReturnToLogin: ghost */}
            <Link href="/login" className="w-full">
              <Button variant="ghost" className="devio-btn devio-btn-ghost devio-text-sm w-full">
                Cancelar e voltar ao login
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        {/* SecurityMessage: info */}
        <div className="devio-text-xs devio-text-muted text-center mt-4">
          <p>© 2025 Rook System. Todos os direitos reservados.</p>
          <p>Este link de redefinição é válido por 24 horas.</p>
        </div>
      </div>
    </div>
  );
}