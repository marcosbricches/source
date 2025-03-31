// app/perfil/page.tsx
import { 
    Card, 
    CardContent, 
    CardFooter, 
    CardHeader, 
    CardTitle, 
    CardDescription 
  } from "@/components/ui/card"
  import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
  } from "@/components/ui/tabs"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
  import { Separator } from "@/components/ui/separator"
  import { Label } from "@/components/ui/label"
  import { Badge } from "@/components/ui/badge"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import { 
    UserIcon, 
    Settings2Icon, 
    KeyIcon, 
    SaveIcon,
    HomeIcon,
    ShieldIcon,
  } from "lucide-react"
  
  export default function PerfilUsuario() {
    return (
      <div className="container py-8 max-w-5xl mx-auto">
        {/* Navegação/Breadcrumbs */}
        <div className="flex items-center border-b pb-4 mb-6">
          <nav className="flex">
            <Button variant="link" className="px-2 text-muted-foreground">
              <HomeIcon className="h-4 w-4 mr-1" />
              Dashboard
            </Button>
            <span className="text-muted-foreground flex items-center">/</span>
            <Button variant="link" className="px-2 font-medium">
              <UserIcon className="h-4 w-4 mr-1" />
              Perfil do Usuário
            </Button>
          </nav>
        </div>
        
        {/* Cabeçalho da página */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Meu Perfil</h1>
          <p className="text-muted-foreground max-w-3xl">
            Gerencie suas informações pessoais e preferências de segurança.
          </p>
        </div>
        
        {/* Conteúdo com Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bloco de perfil esquerdo */}
          <Card className="md:col-span-4">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/avatars/profile.jpg" alt="Maria Santos" />
                  <AvatarFallback className="bg-amber-100 text-amber-800 text-xl">MS</AvatarFallback>
                </Avatar>
                
                <h2 className="text-xl font-semibold">Maria Santos</h2>
                <p className="text-sm text-muted-foreground mb-2">maria.santos@email.com</p>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Administrador
                </Badge>
                
                <Button variant="outline" className="mt-4 w-full">
                  Alterar foto de perfil
                </Button>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-1">Empresa</h3>
                  <p className="text-sm text-muted-foreground">Restaurante Sabor & Arte</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-1">Plano atual</h3>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-amber-100 text-amber-800 border-amber-200">Premium</Badge>
                    <span className="text-xs text-muted-foreground">Renova em 23/04/2025</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Tabs de conteúdo */}
          <div className="md:col-span-8">
            <Tabs defaultValue="informacoes" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="informacoes">Informações Pessoais</TabsTrigger>
                <TabsTrigger value="seguranca">Segurança</TabsTrigger>
                <TabsTrigger value="preferencias">Preferências</TabsTrigger>
              </TabsList>
              
              <TabsContent value="informacoes">
                <Card>
                  <CardHeader>
                    <CardTitle>Informações Pessoais</CardTitle>
                    <CardDescription>
                      Atualize seus dados de contato e informações básicas
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome completo*</Label>
                        <Input id="nome" placeholder="Nome completo" defaultValue="Maria Santos" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cargo">Cargo</Label>
                        <Input id="cargo" placeholder="Cargo na empresa" defaultValue="Gerente Financeiro" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail principal*</Label>
                        <Input id="email" type="email" placeholder="E-mail" defaultValue="maria.santos@email.com" />
                        <p className="text-xs text-muted-foreground">
                          Este é o e-mail usado para login e notificações principais
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input id="telefone" placeholder="Telefone" defaultValue="(11) 98765-4321" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end border-t pt-6">
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      Salvar alterações
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="seguranca">
                <Card>
                  <CardHeader>
                    <CardTitle>Segurança da Conta</CardTitle>
                    <CardDescription>
                      Atualize sua senha e defina configurações de autenticação
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Alterar senha</h3>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="senha-atual">Senha atual</Label>
                          <Input id="senha-atual" type="password" placeholder="Digite sua senha atual" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="nova-senha">Nova senha</Label>
                          <Input id="nova-senha" type="password" placeholder="Digite a nova senha" />
                          <p className="text-xs text-muted-foreground">
                            A senha deve ter pelo menos 8 caracteres e incluir letras, números e caracteres especiais
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirmar-senha">Confirmar nova senha</Label>
                          <Input id="confirmar-senha" type="password" placeholder="Confirme a nova senha" />
                        </div>
                      </div>
                      
                      <Button className="bg-amber-600 hover:bg-amber-700">
                        Atualizar senha
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="preferencias">
                <Card>
                  <CardHeader>
                    <CardTitle>Preferências de Notificação</CardTitle>
                    <CardDescription>
                      Escolha como e quando deseja receber notificações do sistema
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border rounded-md p-4">
                        <div className="space-y-0.5">
                          <div className="font-medium">Notificações por e-mail</div>
                          <div className="text-sm text-muted-foreground">
                            Receba e-mails sobre atividades importantes
                          </div>
                        </div>
                        <div className="h-6 w-10 bg-amber-600 rounded-full"></div>
                      </div>
                      
                      <div className="flex items-center justify-between border rounded-md p-4">
                        <div className="space-y-0.5">
                          <div className="font-medium">Notificações no sistema</div>
                          <div className="text-sm text-muted-foreground">
                            Controle as notificações dentro da plataforma
                          </div>
                        </div>
                        <div className="h-6 w-10 bg-amber-600 rounded-full"></div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end border-t pt-6">
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      Salvar preferências
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }