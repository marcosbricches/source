// app/colaboradores/novo/page.tsx (ou app/colaboradores/editar/[id]/page.tsx)
import Link from 'next/link';

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

// Icons
import { 
  Save, 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Shield, 
  CheckCircle, 
  Eye, 
  EyeOff, 
  ShieldAlert, 
  AlertTriangle, 
  X, 
  Check, 
  Info 
} from 'lucide-react';

export default function NovoColaboradorPage() {
  // Esta página funciona para adicionar novo ou editar existente
  const isEditing = false; // Seria dinâmico em um app real
  const pageTitle = isEditing ? "Editar Colaborador" : "Novo Colaborador";
  
  return (
    <div className="p-6 min-h-screen bg-neutral-50">
      {/* PageContainer: default */}
      <div className="devio-container max-w-3xl">
        {/* PageHeader: collaborator-form */}
        <div className="devio-section mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Link href="/colaboradores">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <div className="devio-badge devio-badge-primary mb-1">Gerenciamento</div>
                <h1 className="devio-text-2xl devio-font-bold">{pageTitle}</h1>
              </div>
            </div>
            <div className="devio-flex devio-gap-2">
              <Link href="/colaboradores">
                <Button variant="outline" className="devio-btn devio-btn-outline">
                  Cancelar
                </Button>
              </Link>
              <Button className="devio-btn devio-btn-primary">
                <Save className="mr-2 h-4 w-4" />
                Salvar
              </Button>
            </div>
          </div>
          
          {/* AccessRestrictionWarning: master-only */}
          <Alert className="devio-alert devio-alert-primary mb-6">
            <ShieldAlert className="h-4 w-4" />
            <AlertDescription>
              <span className="devio-font-medium">Acesso restrito</span>
              <br />
              <span className="devio-text-sm">Somente usuários com nível Master podem adicionar ou editar colaboradores.</span>
            </AlertDescription>
          </Alert>
        </div>
        
        {/* FormTabs: default */}
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="devio-grid devio-grid-2 mb-6">
            <TabsTrigger value="info" className="devio-text-base">
              Informações Básicas
            </TabsTrigger>
            <TabsTrigger value="access" className="devio-text-base">
              Acesso e Permissões
            </TabsTrigger>
          </TabsList>
          
          {/* FormTabContent: basic-info */}
          <TabsContent value="info">
            <Card className="devio-card">
              <CardHeader>
                <h2 className="devio-text-lg devio-font-semibold">Dados Pessoais</h2>
                <p className="devio-text-muted devio-text-sm">Informações básicas do colaborador</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* NameField: required */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="devio-text-sm devio-font-medium">
                    Nome do Colaborador <span className="text-red-500">*</span>
                  </Label>
                  <div className="devio-input-group">
                    <span className="devio-input-group-icon">
                      <User className="h-4 w-4" />
                    </span>
                    <Input 
                      id="name" 
                      placeholder="Nome completo"
                      className="devio-input" 
                    />
                  </div>
                  <p className="devio-text-xs devio-text-muted">Mínimo de 3 caracteres</p>
                  {/* ValidationMessage: error - comentado para visualização do estado normal */}
                  {/* <p className="devio-text-danger devio-text-xs">Nome deve ter pelo menos 3 caracteres</p> */}
                </div>
                
                {/* EmailField: required */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="devio-text-sm devio-font-medium">
                    E-mail <span className="text-red-500">*</span>
                  </Label>
                  <div className="devio-input-group">
                    <span className="devio-input-group-icon">
                      <Mail className="h-4 w-4" />
                    </span>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="colaborador@empresa.com"
                      className="devio-input" 
                    />
                  </div>
                  <p className="devio-text-xs devio-text-muted">Este e-mail será usado para login e recuperação de senha</p>
                  {/* ValidationMessage: error - comentado para visualização do estado normal */}
                  {/* <p className="devio-text-danger devio-text-xs">E-mail já cadastrado no sistema</p> */}
                </div>
                
                {/* PhoneField: optional */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="devio-text-sm devio-font-medium">
                    Telefone
                  </Label>
                  <div className="devio-input-group">
                    <span className="devio-input-group-icon">
                      <Phone className="h-4 w-4" />
                    </span>
                    <Input 
                      id="phone" 
                      placeholder="(00) 00000-0000"
                      className="devio-input" 
                    />
                  </div>
                  <p className="devio-text-xs devio-text-muted">Campo opcional</p>
                </div>
                
                {/* JobTitle: select */}
                <div className="space-y-2">
                  <Label htmlFor="job" className="devio-text-sm devio-font-medium">
                    Cargo <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="devio-input">
                      <SelectValue placeholder="Selecione um cargo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="supervisor">Supervisor Financeiro</SelectItem>
                      <SelectItem value="cobranca">Cobrança</SelectItem>
                      <SelectItem value="cs">Sucesso do Cliente (CS)</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {/* JobDescription: info */}
                  <div className="devio-highlight-box mt-3">
                    <div className="devio-flex devio-gap-2 devio-items-start">
                      <Info className="h-4 w-4 text-primary-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="devio-text-sm devio-font-medium">Descrição do Cargo</p>
                        <p className="devio-text-xs devio-text-muted mt-1">
                          <span className="devio-font-medium">Supervisor Financeiro:</span> Auditoria de assinantes ativos/inativos. Autorização para mudança de forma de pagamento.
                        </p>
                        <p className="devio-text-xs devio-text-muted mt-1">
                          <span className="devio-font-medium">Cobrança:</span> Gestão de pagamentos pendentes e negociação de débitos. Alteração de forma de pagamento mediante aprovação do Supervisor.
                        </p>
                        <p className="devio-text-xs devio-text-muted mt-1">
                          <span className="devio-font-medium">Sucesso do Cliente (CS):</span> Acesso restrito à performance de clientes. Respeito à LGPD, limitando a visualização de dados sensíveis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* FormTabContent: access-permissions */}
          <TabsContent value="access">
            <Card className="devio-card">
              <CardHeader>
                <h2 className="devio-text-lg devio-font-semibold">Acesso ao Sistema</h2>
                <p className="devio-text-muted devio-text-sm">Defina as credenciais e permissões</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* AccessLevel: select */}
                <div className="space-y-2">
                  <Label htmlFor="level" className="devio-text-sm devio-font-medium">
                    Nível de Acesso <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="devio-input">
                      <SelectValue placeholder="Selecione um nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="master">
                        <div className="devio-flex devio-items-center devio-gap-2">
                          <ShieldAlert className="h-4 w-4 text-primary-600" />
                          <span>Master</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="admin">Administrador</SelectItem>
                      <SelectItem value="supervisor">Supervisor</SelectItem>
                      <SelectItem value="operational">Operacional</SelectItem>
                      <SelectItem value="view">Visualização</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* AccountStatus: toggle */}
                <div className="space-y-2">
                  <div className="devio-flex devio-justify-between devio-items-center">
                    <Label htmlFor="status" className="devio-text-sm devio-font-medium">
                      Status da Conta <span className="text-red-500">*</span>
                    </Label>
                    <Badge className="devio-badge devio-badge-success">Ativo</Badge>
                  </div>
                  <div className="devio-flex devio-items-center devio-justify-between devio-gap-4 rounded-md border p-3">
                    <div className="space-y-0.5">
                      <div className="devio-text-sm devio-font-medium">Conta Ativa</div>
                      <div className="devio-text-muted devio-text-xs">Colaboradores inativos não podem acessar o sistema</div>
                    </div>
                    <Switch checked />
                  </div>
                </div>
                
                <Separator className="my-3" />
                
                {/* PasswordSection: security */}
                <div className="space-y-4">
                  <div className="devio-flex devio-justify-between devio-items-center">
                    <h3 className="devio-text-base devio-font-medium">Senha</h3>
                    <Badge className="devio-badge devio-badge-primary devio-badge-sm">Obrigatório</Badge>
                  </div>
                  
                  {/* PasswordField: secure */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="devio-text-sm devio-font-medium">
                      Senha <span className="text-red-500">*</span>
                    </Label>
                    <div className="devio-input-group relative">
                      <span className="devio-input-group-icon">
                        <Shield className="h-4 w-4" />
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
                  </div>
                  
                  {/* PasswordRequirements: checklist */}
                  <div className="devio-highlight-box">
                    <p className="devio-text-sm devio-font-medium mb-2">Requisitos de segurança:</p>
                    <ul className="space-y-1">
                      <li className="devio-flex devio-items-center devio-gap-2 devio-text-xs">
                        <X className="h-3.5 w-3.5 text-danger-500" />
                        <span>Mínimo de 6 caracteres</span>
                      </li>
                      <li className="devio-flex devio-items-center devio-gap-2 devio-text-xs">
                        <X className="h-3.5 w-3.5 text-danger-500" />
                        <span>Pelo menos uma letra maiúscula</span>
                      </li>
                      <li className="devio-flex devio-items-center devio-gap-2 devio-text-xs">
                        <X className="h-3.5 w-3.5 text-danger-500" />
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
              
              <CardFooter className="flex-col gap-4 border-t p-6">
                <Alert className="devio-alert devio-alert-warning">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <span className="devio-font-medium">Aviso de Segurança</span>
                    <br />
                    <span className="devio-text-sm">Certifique-se de utilizar uma senha forte e única.</span>
                  </AlertDescription>
                </Alert>
              
                <div className="devio-flex devio-justify-end devio-gap-2 w-full">
                  <Link href="/colaboradores">
                    <Button variant="outline" className="devio-btn devio-btn-outline">
                      Cancelar
                    </Button>
                  </Link>
                  <Button className="devio-btn devio-btn-primary">
                    <Save className="mr-2 h-4 w-4" />
                    Salvar
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}