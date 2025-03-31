// app/login/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  
  const isFormValid = email.includes('@') && email.includes('.') && password.length >= 6
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de validação para protótipo
    if (isFormValid) {
      window.location.href = "/dashboard"
    } else {
      setError("E-mail ou senha incorretos. Verifique suas credenciais.")
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
          <p className="text-muted-foreground mt-1">Painel Administrativo</p>
        </div>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Login</CardTitle>
            <CardDescription>
              Acesse o painel administrativo do Rook System
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Usuário</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="exemplo@rooksystem.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <Link 
                    href="/recuperar-senha" 
                    className="text-xs text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="********" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full bg-amber-600 hover:bg-amber-700"
                disabled={!isFormValid}
              >
                Entrar
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