// app/colaboradores/[id]/page.tsx
import Link from 'next/link';

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Icons
import { 
  ArrowLeft, 
  Pencil, 
  Trash, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Shield, 
  Calendar, 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle,
  FileText,
  Activity,
  UserCog,
  CircleAlert
} from 'lucide-react';

export default function VisualizarColaboradorPage() {
  // Em um app real, este ID seria dinâmico
  const colaboradorId = "001";
  
  return (
    <div className="p-6 min-h-screen bg-neutral-50">
      {/* PageContainer: default */}
      <div className="devio-container max-w-3xl">
        {/* PageHeader: colaborator-detail */}
        <div className="devio-section mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Link href="/colaboradores">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <div className="devio-badge devio-badge-primary mb-1">Detalhes do Colaborador</div>
                <h1 className="devio-text-2xl devio-font-bold">Ana Silva</h1>
              </div>
            </div>
            <div className="devio-flex devio-gap-2">
              <Link href="/colaboradores">
                <Button variant="outline" className="devio-btn devio-btn-outline">
                  Voltar
                </Button>
              </Link>
              <Link href={`/colaboradores/editar/${colaboradorId}`}>
                <Button variant="outline" className="devio-btn devio-btn-outline devio-btn-primary">
                  <Pencil className="mr-2 h-4 w-4" />
                  Editar
                </Button>
              </Link>
              <Button variant="outline" className="devio-btn devio-btn-outline text-red-600 border-red-200 hover:bg-red-50">
                <Trash className="mr-2 h-4 w-4" />
                Excluir
              </Button>
            </div>
          </div>
          
          {/* AccessRestrictionWarning: master-only */}
          <Alert className="devio-alert devio-alert-primary mb-6">
            <ShieldAlert className="h-4 w-4" />
            <AlertDescription>
              <span className="devio-font-medium">Acesso restrito</span>
              <br />
              <span className="devio-text-sm">Somente usuários com nível Master podem editar ou excluir colaboradores.</span>
            </AlertDescription>
          </Alert>
        </div>
        
        {/* UserProfileHeader: default */}
        <div className="mb-8">
          <Card className="devio-card">
            <CardContent className="p-6">
              <div className="devio-flex devio-flex-col md:devio-flex-row devio-gap-6 devio-items-center md:devio-items-start">
                <Avatar className="h-24 w-24 border-4 border-primary-100">
                  <AvatarFallback className="bg-primary-500 text-white text-xl">AS</AvatarFallback>
                </Avatar>
                
                <div className="devio-flex devio-flex-col devio-items-center md:devio-items-start devio-gap-2 flex-1">
                  <div className="devio-flex devio-flex-col devio-items-center md:devio-items-start devio-gap-1">
                    <h2 className="devio-text-xl devio-font-bold">Ana Silva</h2>
                    <p className="devio-text-muted">Supervisor Financeiro</p>
                  </div>
                  
                  <div className="devio-flex devio-gap-2 mt-2">
                    <Badge className="devio-badge devio-badge-primary">
                      <ShieldAlert className="h-3 w-3 mr-1" />
                      Master
                    </Badge>
                    <Badge className="devio-badge devio-badge-success">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Ativo
                    </Badge>
                  </div>
                  
                  <div className="devio-flex devio-gap-4 mt-4 flex-wrap">
                    <div className="devio-flex devio-items-center devio-gap-2">
                      <div className="devio-icon-container devio-icon-container-sm devio-icon-primary">
                        <Mail className="h-3.5 w-3.5" />
                      </div>
                      <span className="devio-text-sm">ana.silva@exemplo.com</span>
                    </div>
                    
                    <div className="devio-flex devio-items-center devio-gap-2">
                      <div className="devio-icon-container devio-icon-container-sm devio-icon-primary">
                        <Phone className="h-3.5 w-3.5" />
                      </div>
                      <span className="devio-text-sm">(11) 98765-4321</span>
                    </div>
                    
                    <div className="devio-flex devio-items-center devio-gap-2">
                      <div className="devio-icon-container devio-icon-container-sm devio-icon-primary">
                        <Calendar className="h-3.5 w-3.5" />
                      </div>
                      <span className="devio-text-sm">Cadastrado em 05/01/2025</span>
                    </div>
                  </div>
                </div>
                
                <div className="devio-stat-card w-full md:w-auto shrink-0">
                  <div className="devio-stat-label">ID do Colaborador</div>
                  <div className="devio-stat-value font-mono">#001</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* DetailsTabs: default */}
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="devio-grid devio-grid-3 mb-6">
            <TabsTrigger value="info" className="devio-text-base">
              <User className="h-4 w-4 mr-2" />
              Informações
            </TabsTrigger>
            <TabsTrigger value="access" className="devio-text-base">
              <Shield className="h-4 w-4 mr-2" />
              Acesso
            </TabsTrigger>
            <TabsTrigger value="activity" className="devio-text-base">
              <Activity className="h-4 w-4 mr-2" />
              Atividade
            </TabsTrigger>
          </TabsList>
          
          {/* TabContent: basic-info */}
          <TabsContent value="info">
            <Card className="devio-card">
              <CardHeader>
                <h2 className="devio-text-lg devio-font-semibold">Informações Pessoais</h2>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="devio-grid devio-grid-2 gap-6">
                    {/* InfoItem: name */}
                    <div className="space-y-2">
                      <p className="devio-text-xs devio-text-muted">Nome Completo</p>
                      <div className="devio-flex devio-items-center devio-gap-2">
                        <User className="h-4 w-4 text-primary-500" />
                        <p className="devio-text-base">Ana Silva</p>
                      </div>
                    </div>
                    
                    {/* InfoItem: email */}
                    <div className="space-y-2">
                      <p className="devio-text-xs devio-text-muted">E-mail</p>
                      <div className="devio-flex devio-items-center devio-gap-2">
                        <Mail className="h-4 w-4 text-primary-500" />
                        <p className="devio-text-base">ana.silva@exemplo.com</p>
                      </div>
                    </div>
                    
                    {/* InfoItem: phone */}
                    <div className="space-y-2">
                      <p className="devio-text-xs devio-text-muted">Telefone</p>
                      <div className="devio-flex devio-items-center devio-gap-2">
                        <Phone className="h-4 w-4 text-primary-500" />
                        <p className="devio-text-base">(11) 98765-4321</p>
                      </div>
                    </div>
                    
                    {/* InfoItem: created-at */}
                    <div className="space-y-2">
                      <p className="devio-text-xs devio-text-muted">Data de Cadastro</p>
                      <div className="devio-flex devio-items-center devio-gap-2">
                        <Calendar className="h-4 w-4 text-primary-500" />
                        <p className="devio-text-base">05/01/2025</p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* JobDetails: position-info */}
                  <div className="space-y-4">
                    <h3 className="devio-text-base devio-font-medium">Informações do Cargo</h3>
                    
                    <div className="space-y-2">
                      <p className="devio-text-xs devio-text-muted">Cargo Atual</p>
                      <div className="devio-flex devio-items-center devio-gap-2">
                        <Briefcase className="h-4 w-4 text-primary-500" />
                        <p className="devio-text-base">Supervisor Financeiro</p>
                      </div>
                    </div>
                    
                    <div className="devio-highlight-box">
                      <p className="devio-text-sm devio-font-medium mb-2">Descrição e Responsabilidades:</p>
                      <p className="devio-text-sm">
                        Auditoria de assinantes ativos/inativos. Autorização para mudança de forma de pagamento.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* TabContent: access-permissions */}
          <TabsContent value="access">
            <Card className="devio-card">
              <CardHeader>
                <h2 className="devio-text-lg devio-font-semibold">Acesso ao Sistema</h2>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="devio-grid devio-grid-2 gap-6">
                    {/* AccessItem: level */}
                    <div className="space-y-2">
                      <p className="devio-text-xs devio-text-muted">Nível de Acesso</p>
                      <div className="devio-flex devio-items-center devio-gap-2">
                        <ShieldAlert className="h-4 w-4 text-primary-500" />
                        <p className="devio-text-base devio-font-medium">Master</p>
                      </div>
                      <Badge className="devio-badge devio-badge-primary mt-1">Acesso Total</Badge>
                    </div>
                    
                    {/* AccessItem: status */}
                    <div className="space-y-2">
                      <p className="devio-text-xs devio-text-muted">Status da Conta</p>
                      <div className="devio-flex devio-items-center devio-gap-2">
                        <CheckCircle className="h-4 w-4 text-success-500" />
                        <p className="devio-text-base devio-font-medium text-success-600">Ativo</p>
                      </div>
                      <p className="devio-text-xs devio-text-muted">Último login: 06/03/2025 às 09:15</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* PermissionsDetails: master */}
                  <div className="space-y-4">
                    <div className="devio-flex devio-justify-between devio-items-center">
                      <h3 className="devio-text-base devio-font-medium">Permissões do Nível Master</h3>
                      <Badge className="devio-badge devio-badge-primary">Privilégios Máximos</Badge>
                    </div>
                    
                    <div className="devio-grid devio-grid-2 gap-4">
                      <div className="devio-flex devio-items-center devio-gap-2 p-3 rounded-md border border-success-200 bg-success-50">
                        <CheckCircle className="h-4 w-4 text-success-500" />
                        <span className="devio-text-sm">Gerenciar colaboradores</span>
                      </div>
                      
                      <div className="devio-flex devio-items-center devio-gap-2 p-3 rounded-md border border-success-200 bg-success-50">
                        <CheckCircle className="h-4 w-4 text-success-500" />
                        <span className="devio-text-sm">Configurar sistema</span>
                      </div>
                      
                      <div className="devio-flex devio-items-center devio-gap-2 p-3 rounded-md border border-success-200 bg-success-50">
                        <CheckCircle className="h-4 w-4 text-success-500" />
                        <span className="devio-text-sm">Visualizar relatórios</span>
                      </div>
                      
                      <div className="devio-flex devio-items-center devio-gap-2 p-3 rounded-md border border-success-200 bg-success-50">
                        <CheckCircle className="h-4 w-4 text-success-500" />
                        <span className="devio-text-sm">Modificar dados</span>
                      </div>
                    </div>
                    
                    <Alert className="devio-alert devio-alert-warning mt-4">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <span className="devio-font-medium">Nível de privilégio elevado</span>
                        <br />
                        <span className="devio-text-sm">O nível Master concede acesso total ao sistema. Garanta que apenas colaboradores confiáveis tenham este nível.</span>
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* TabContent: activity-log */}
          <TabsContent value="activity">
            <Card className="devio-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <h2 className="devio-text-lg devio-font-semibold">Histórico de Atividades</h2>
                  <p className="devio-text-muted devio-text-sm">Últimas ações realizadas pelo colaborador</p>
                </div>
                <Button variant="outline" className="devio-btn devio-btn-outline devio-btn-sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Relatório Completo
                </Button>
              </CardHeader>
              
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Data e Hora</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead>IP</TableHead>
                      <TableHead className="text-right">Detalhes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono text-xs">06/03/2025 09:15</TableCell>
                      <TableCell>
                        <div className="devio-flex devio-items-center devio-gap-2">
                          <div className="devio-icon-container devio-icon-container-sm devio-icon-success">
                            <UserCog className="h-3.5 w-3.5" />
                          </div>
                          <span>Login no sistema</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-xs">192.168.1.45</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 font-normal">
                          Ver
                        </Button>
                      </TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-mono text-xs">05/03/2025 17:22</TableCell>
                      <TableCell>
                        <div className="devio-flex devio-items-center devio-gap-2">
                          <div className="devio-icon-container devio-icon-container-sm devio-icon-warning">
                            <CircleAlert className="h-3.5 w-3.5" />
                          </div>
                          <span>Edição de perfil de usuário</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-xs">192.168.1.45</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 font-normal">
                          Ver
                        </Button>
                      </TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-mono text-xs">05/03/2025 14:10</TableCell>
                      <TableCell>
                        <div className="devio-flex devio-items-center devio-gap-2">
                          <div className="devio-icon-container devio-icon-container-sm devio-icon-info">
                            <FileText className="h-3.5 w-3.5" />
                          </div>
                          <span>Geração de relatório financeiro</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-xs">192.168.1.45</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 font-normal">
                          Ver
                        </Button>
                      </TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell className="font-mono text-xs">05/03/2025 09:30</TableCell>
                      <TableCell>
                        <div className="devio-flex devio-items-center devio-gap-2">
                          <div className="devio-icon-container devio-icon-container-sm devio-icon-success">
                            <UserCog className="h-3.5 w-3.5" />
                          </div>
                          <span>Login no sistema</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-xs">192.168.1.45</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 font-normal">
                          Ver
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              
              <CardFooter className="devio-flex devio-justify-between p-4 border-t">
                <p className="devio-text-sm devio-text-muted">
                  Mostrando 4 de 24 atividades
                </p>
                
                <div className="devio-flex devio-gap-2">
                  <Button variant="outline" className="devio-btn devio-btn-outline devio-btn-sm">
                    Anterior
                  </Button>
                  <Button variant="outline" className="devio-btn devio-btn-outline devio-btn-sm">
                    Próximo
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