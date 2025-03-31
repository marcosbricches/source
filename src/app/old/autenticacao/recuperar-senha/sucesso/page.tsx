// app/recuperar-senha/sucesso/page.tsx
import Link from 'next/link';

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

// Icons
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function SucessoRedefinicaoPage() {
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
        
        {/* SuccessCard: default */}
        <Card className="devio-card devio-card-success">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto devio-icon-container devio-icon-success devio-icon-container-lg mb-4">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h2 className="devio-text-xl devio-font-bold">Senha Redefinida!</h2>
          </CardHeader>
          
          <CardContent className="text-center">
            <div className="devio-highlight-box mb-6">
              <p className="devio-text-base">
                Senha redefinida com sucesso. Faça login para continuar.
              </p>
            </div>
            
            {/* SuccessAnimation: fade-in */}
            <div className="devio-fade-in flex justify-center my-4">
              <div className="devio-stat-card w-full">
                <div className="devio-flex devio-justify-between devio-items-center">
                  <div className="devio-stat-label">Status</div>
                  <div className="devio-stat-trend devio-trend-up">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    <span>Concluído</span>
                  </div>
                </div>
                <div className="devio-stat-value devio-text-success">100%</div>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            {/* LoginButton: primary */}
            <Link href="/login" className="w-full">
              <Button className="devio-btn devio-btn-primary w-full">
                Ir para o Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        {/* SecurityMessage: info */}
        <div className="devio-text-xs devio-text-muted text-center mt-4">
          <p>© 2025 Rook System. Todos os direitos reservados.</p>
          <p>Suas credenciais foram atualizadas com segurança.</p>
        </div>
      </div>
    </div>
  );
}