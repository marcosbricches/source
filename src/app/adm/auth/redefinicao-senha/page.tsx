// app/redefinir-senha/[token]/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, AlertCircle, CheckCircle, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function RedefinicaoSenhaPage() {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  
  const passwordsMatch = newPassword === confirmPassword
  const passwordIsValid = newPassword.length >= 6 && 
                          /[A-Z]/.test(newPassword) && 
                          /[a-z]/.test(newPassword) && 
                          /[0-9]/.test(newPassword) && 
                          /[^A-Za-z0-9]/.test(newPassword)
  const isFormValid = passwordIsValid && passwordsMatch && newPassword.length > 0
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de envio para protótipo
    if (isFormValid) {
      setStatus("success")
      setMessage("Senha redefinida com sucesso. Faça login para continuar.")
    } else {
      setStatus("error")
      setMessage("Não foi possível redefinir sua senha. Verifique os requisitos e tente novamente.")
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
          <p className="text-muted-foreground mt-1">Redefinição de Senha</p>
        </div>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Redefinir Senha</CardTitle>
            <CardDescription>
              Crie uma nova senha para acessar sua conta
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
                  <AlertDescription className="text-green-700">
                    {message} <Link href="/login" className="font-medium underline">Ir para o login</Link>
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="new-password">Nova Senha *</Label>
                <Input 
                  id="new-password" 
                  type="password" 
                  placeholder="********" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Senha *</Label>
                <Input 
                  id="confirm-password" 
                  type="password" 
                  placeholder="********" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {newPassword && confirmPassword && !passwordsMatch && (
                  <p className="text-xs text-red-500 mt-1">
                    As senhas não coincidem.
                  </p>
                )}
              </div>
              
              <Alert className="mt-4 border-amber-200 bg-amber-50">
                <ShieldCheck className="h-4 w-4 text-amber-600" />
                <AlertTitle className="text-amber-800 text-sm font-medium">Requisitos de senha</AlertTitle>
                <AlertDescription className="text-xs text-amber-700">
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li className={newPassword.length >= 6 ? "text-green-600" : ""}>
                      Mínimo de 6 caracteres
                    </li>
                    <li className={/[A-Z]/.test(newPassword) ? "text-green-600" : ""}>
                      Pelo menos uma letra maiúscula (A-Z)
                    </li>
                    <li className={/[a-z]/.test(newPassword) ? "text-green-600" : ""}>
                      Pelo menos uma letra minúscula (a-z)
                    </li>
                    <li className={/[0-9]/.test(newPassword) ? "text-green-600" : ""}>
                      Pelo menos um número (0-9)
                    </li>
                    <li className={/[^A-Za-z0-9]/.test(newPassword) ? "text-green-600" : ""}>
                      Pelo menos um caractere especial (!@#$%^&*)
                    </li>
                  </ul>
                </AlertDescription>
              </Alert>
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
                Salvar
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