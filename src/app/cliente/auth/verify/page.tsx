// app/autenticacao/dois-fatores/page.tsx
"use client"

import { useState, useEffect } from "react"
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon, ArrowLeftIcon, RefreshCwIcon, ShieldIcon } from "lucide-react"

export default function AutenticacaoDoisFatores() {
  const [codigo, setCodigo] = useState<string>("")
  const [tempoRestante, setTempoRestante] = useState<number>(300) // 5 minutos em segundos
  const [tentativas, setTentativas] = useState<number>(0)
  const [erro, setErro] = useState<string | null>(null)
  const [metodoEnvio, setMetodoEnvio] = useState<string>("email") // email ou sms
  
  // Simulação de contagem regressiva
  useEffect(() => {
    const timer = setInterval(() => {
      setTempoRestante((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  const formatarTempo = (segundos: number) => {
    const minutos = Math.floor(segundos / 60)
    const segs = segundos % 60
    return `${minutos}:${segs < 10 ? '0' : ''}${segs}`
  }
  
  const verificarCodigo = () => {
    // Simulação de verificação
    if (codigo === "123456") {
      window.location.href = "/dashboard"
    } else {
      setErro("Código incorreto. Verifique e tente novamente.")
      setTentativas(prev => prev + 1)
    }
  }
  
  const reenviarCodigo = () => {
    if (tentativas < 3) {
      setTempoRestante(300)
      setErro(null)
      // Simulação de reenvio
      alert("Um novo código foi enviado para seu " + (metodoEnvio === "email" ? "e-mail" : "celular"))
    } else {
      setErro("Limite de tentativas excedido. Tente novamente em 15 minutos.")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md px-4">
        {/* Navegação */}
        <div className="flex items-center mb-8">
          <Button variant="ghost" className="gap-2 text-muted-foreground" onClick={() => window.location.href = "/login"}>
            <ArrowLeftIcon className="h-4 w-4" />
            Voltar para login
          </Button>
        </div>
        
        <Card className="border-gray-200 shadow-sm">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2 mb-2">
              <ShieldIcon className="h-5 w-5 text-amber-600" />
              <CardTitle className="text-xl">Verificação em duas etapas</CardTitle>
            </div>
            <CardDescription>
              Digite o código de verificação enviado para seu {metodoEnvio === "email" ? "e-mail secundário" : "telefone celular"}.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-sm font-normal">
                {metodoEnvio === "email" ? "Código enviado por e-mail" : "Código enviado por SMS"}
              </Badge>
              
              <Badge 
                variant="outline" 
                className={`${tempoRestante < 60 ? "border-red-200 text-red-700" : "border-gray-200"}`}
              >
                Expira em: {formatarTempo(tempoRestante)}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Digite o código de 6 dígitos"
                className="text-center text-lg tracking-widest h-12"
                maxLength={6}
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
              
              {erro && (
                <Alert variant="destructive" className="py-2">
                  <AlertDescription className="text-sm">{erro}</AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col gap-4">
            <Button 
              className="w-full bg-amber-600 hover:bg-amber-700" 
              disabled={codigo.length !== 6 || tempoRestante === 0}
              onClick={verificarCodigo}
            >
              Verificar código
            </Button>
            
            <div className="flex justify-between w-full">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-sm gap-1"
                disabled={tentativas >= 3}
                onClick={reenviarCodigo}
              >
                <RefreshCwIcon className="h-3 w-3" />
                Reenviar código
              </Button>
              
              <Button 
                variant="link" 
                size="sm" 
                className="text-sm text-amber-600"
                onClick={() => setMetodoEnvio(metodoEnvio === "email" ? "sms" : "email")}
              >
                Usar outro método
              </Button>
            </div>
            
            <div className="text-xs text-muted-foreground flex items-start gap-2 bg-blue-50 p-3 rounded-md border border-blue-100">
              <InfoIcon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p>
                O código é válido por 5 minutos. Você pode solicitar um novo código até 3 vezes antes que sua conta seja bloqueada temporariamente.
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}