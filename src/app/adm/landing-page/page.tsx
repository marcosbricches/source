// app/admin/landing-page/page.tsx
import Link from "next/link"
import { EditIcon, EyeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LandingPageAdmin() {
  return (
    <div className="container py-8 max-w-6xl mx-auto">
      {/* Navegação/Breadcrumbs */}
      <div className="flex items-center border-b pb-4 mb-6">
        <nav className="flex">
          <Button variant="link" asChild className="px-2 text-muted-foreground">
            <Link href="/admin/dashboard">Dashboard</Link>
          </Button>
          <span className="text-muted-foreground flex items-center">/</span>
          <Button variant="link" className="px-2 font-medium">Landing Pages</Button>
        </nav>
      </div>
      
      {/* Cabeçalho da página */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Gerenciar Landing Pages</h1>
        <p className="text-muted-foreground max-w-3xl">
          Visualize e edite as landing pages disponíveis no Rook System
        </p>
      </div>
      
      {/* Lista de landing pages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Landing Page de Funcionalidades</CardTitle>
                <CardDescription className="mt-1">
                  Destaca os recursos e benefícios do sistema
                </CardDescription>
              </div>
              <Badge>Ativa</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium">Título atual:</p>
                <p className="text-sm text-muted-foreground">Você no controle do seu restaurante e lucrando mais</p>
              </div>
              <div>
                <p className="text-sm font-medium">Última atualização:</p>
                <p className="text-sm text-muted-foreground">Hoje, 14:52</p>
              </div>
              <div className="flex gap-3 mt-4">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <Link href="/" target="_blank">
                    <EyeIcon className="h-4 w-4" />
                    Visualizar
                  </Link>
                </Button>
                <Button variant="default" size="sm" className="gap-2 bg-amber-600 hover:bg-amber-700" asChild>
                  <Link href="/admin/landing-page/edit?tab=funcionalidades">
                    <EditIcon className="h-4 w-4" />
                    Editar
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Landing Page de Dores</CardTitle>
                <CardDescription className="mt-1">
                  Foca nos problemas que o sistema resolve
                </CardDescription>
              </div>
              <Badge variant="outline">Alternativa</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium">Título atual:</p>
                <p className="text-sm text-muted-foreground">Você no controle do seu restaurante e lucrando mais</p>
              </div>
              <div>
                <p className="text-sm font-medium">Última atualização:</p>
                <p className="text-sm text-muted-foreground">Ontem, 09:23</p>
              </div>
              <div className="flex gap-3 mt-4">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <Link href="/dores" target="_blank">
                    <EyeIcon className="h-4 w-4" />
                    Visualizar
                  </Link>
                </Button>
                <Button variant="default" size="sm" className="gap-2 bg-amber-600 hover:bg-amber-700" asChild>
                  <Link href="/admin/landing-page/edit?tab=dores">
                    <EditIcon className="h-4 w-4" />
                    Editar
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}