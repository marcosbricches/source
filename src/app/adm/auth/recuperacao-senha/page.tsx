// app/recuperar-senha/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, AlertCircle, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RecuperacaoSenhaPage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  
  const isFormValid = email.includes('@') && email.includes('.')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de envio para protótipo
    if (isFormValid) {
      setStatus("success")
      setMessage("Link de recuperação enviado! Verifique seu e-mail para redefinir sua senha.")
    } else {
      setStatus("error")
      setMessage("E-mail não encontrado ou inválido. Verifique e tente novamente.")
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-4">
        <div className="mb-8 text-center">
          <Image 
            src="/logo-rook.svg" 
            alt="Rook System Logo" 
            width={180} 
            height={60}
            className="mx-auto mb-6"
          />
          <h1 className="text-2xl font-bold tracking-tight">Rook System</h1>
          <p className="text-muted-foreground mt-1">Recuperação de Senha</p>
        </div>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Recuperar Senha</CardTitle>
            <CardDescription>
              Insira seu e-mail para receber um link de recuperação
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {status === "error" && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{message}</AlertDescription>
                </Alert>
              )}
              
              {status === "success" && (
                <Alert variant="default" className="mb-4 border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-700">{message}</AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="exemplo@rooksystem.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Insira o e-mail associado à sua conta.
                </p>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Link href="/login">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar ao login
                </Button>
              </Link>
              
              <Button 
                type="submit" 
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700"
                disabled={!isFormValid}
              >
                Recuperar
              </Button>
            </CardFooter>
          </form>
        </Card>
        
        <p className="text-center text-sm text-muted-foreground mt-6">
          © 2025 Rook System. Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}