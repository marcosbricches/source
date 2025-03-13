// app/configuracao/restaurante/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { X, HelpCircle, Upload, ArrowRight, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

export default function ConfiguracaoRestaurante() {
  return (
    <div className="container py-8 max-w-7xl mx-auto relative">
      {/* Cabeçalho da página */}
      <div className="mb-6">
        <Badge className="mb-2" variant="outline">Configurações</Badge>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Configuração do Restaurante</h1>
            <p className="text-muted-foreground max-w-3xl">
              Configure as informações básicas do seu restaurante para personalizar sua experiência no Rook System.
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            <HelpCircle className="h-4 w-4" />
            Ajuda
          </Button>
        </div>
      </div>

      {/* Barra de progresso do onboarding */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 relative">
        <button className="absolute right-2 top-2 hover:bg-amber-100 rounded-full p-1">
          <X className="h-4 w-4 text-amber-800" />
        </button>
        <h2 className="text-sm font-medium text-amber-800 mb-2">Configuração inicial (1/4)</h2>
        <div className="flex items-center gap-4 mb-2">
          <div className="flex-1">
            <Progress value={25} className="h-2" />
          </div>
          <span className="text-xs font-medium text-amber-800">25% Completo</span>
        </div>
        <p className="text-xs text-amber-700">
          Preencha os campos abaixo para configurar seu restaurante. Ao terminar, você será levado automaticamente para o próximo passo.
        </p>
      </div>

      {/* Conteúdo principal da página */}
      <Tabs defaultValue="informacoes" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="informacoes" className="relative">
            Informações Básicas
            {/* Indicador de onboarding para esta aba */}
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-amber-600 rounded-full flex items-center justify-center text-white text-xs">1</span>
          </TabsTrigger>
          <TabsTrigger value="categorias">Categorias e Serviços</TabsTrigger>
          <TabsTrigger value="fiscal">Configurações Fiscais</TabsTrigger>
          <TabsTrigger value="visual">Personalização Visual</TabsTrigger>
        </TabsList>
        
        <TabsContent value="informacoes">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Restaurante</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Nome do Restaurante com tooltip de onboarding */}
              <div className="space-y-2 relative">
                <Label htmlFor="nome">Nome do Restaurante</Label>
                <Input 
                  id="nome" 
                  placeholder="Digite o nome do seu restaurante" 
                  className="border-amber-300 ring-2 ring-amber-300"
                />
                
                {/* Tooltip de onboarding destacando este campo */}
                <div className="absolute -right-80 top-0 w-72 bg-amber-50 border border-amber-300 p-3 rounded-lg shadow-md z-10">
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 bg-amber-50 border-l border-b border-amber-300"></div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-amber-600 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-amber-800">Digite o nome do seu restaurante</h3>
                      <p className="text-xs text-amber-700 mt-1">
                        Este nome será exibido em relatórios, dashboards e na comunicação com seus clientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CNPJ */}
              <div className="space-y-2">
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input id="cnpj" placeholder="00.000.000/0000-00" />
              </div>
              
              {/* Grupo: Telefone e Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="contato@seurestaurante.com" />
                </div>
              </div>
              
              {/* Endereço */}
              <div className="space-y-2">
                <Label htmlFor="endereco">Endereço</Label>
                <Input id="endereco" placeholder="Rua, número, bairro" />
              </div>
              
              {/* Grupo: Cidade, Estado e CEP */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input id="cidade" placeholder="Sua cidade" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="estado">Estado</Label>
                  <Select>
                    <SelectTrigger id="estado">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sp">São Paulo</SelectItem>
                      <SelectItem value="rj">Rio de Janeiro</SelectItem>
                      <SelectItem value="mg">Minas Gerais</SelectItem>
                      {/* Outros estados... */}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" placeholder="00000-000" />
                </div>
              </div>
              
              {/* Horário de Funcionamento */}
              <div className="space-y-2">
                <Label htmlFor="horario">Horário de Funcionamento</Label>
                <Input id="horario" placeholder="Ex: Segunda a Sexta, 11h às 15h e 18h às 23h" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <div className="text-sm text-muted-foreground">
                * Campos obrigatórios devem ser preenchidos
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
                Salvar e Continuar <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="categorias">
  <Card>
    <CardHeader>
      <CardTitle>Categorias e Serviços</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <p className="text-muted-foreground mb-2">
        Configure o tipo de restaurante, culinária e serviços oferecidos para personalizar os relatórios e funcionalidades.
      </p>
      
      {/* Tipo de Restaurante */}
      <div className="space-y-2 relative">
        <Label htmlFor="tipo">Tipo de Restaurante</Label>
        <Select>
          <SelectTrigger id="tipo" className="border-amber-300 ring-2 ring-amber-300">
            <SelectValue placeholder="Selecione o tipo de restaurante" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="alacarte">À la Carte</SelectItem>
            <SelectItem value="buffet">Self-Service / Buffet</SelectItem>
            <SelectItem value="fastfood">Fast Food</SelectItem>
            <SelectItem value="delivery">Delivery / Take-out</SelectItem>
            <SelectItem value="rodizio">Rodízio</SelectItem>
            <SelectItem value="cafeteria">Cafeteria</SelectItem>
            <SelectItem value="bar">Bar / Pub</SelectItem>
            <SelectItem value="outro">Outro</SelectItem>
          </SelectContent>
        </Select>
        
        {/* Tooltip de onboarding destacando este campo */}
        <div className="absolute -right-80 top-0 w-72 bg-amber-50 border border-amber-300 p-3 rounded-lg shadow-md z-10">
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 bg-amber-50 border-l border-b border-amber-300"></div>
          <div className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-amber-600 flex-shrink-0 flex items-center justify-center mt-0.5">
              <span className="text-white text-xs font-medium">1</span>
            </div>
            <div>
              <h3 className="text-sm font-medium text-amber-800">Selecione o tipo de restaurante</h3>
              <p className="text-xs text-amber-700 mt-1">
                Esta informação ajudará a personalizar os indicadores de desempenho e relatórios específicos para seu modelo de negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categorias Culinárias */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="culinaria">Categorias Culinárias</Label>
          <Button variant="ghost" size="sm" className="h-7 text-xs text-amber-600">
            + Adicionar Nova
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="culinaria-brasileira" />
            <label htmlFor="culinaria-brasileira" className="text-sm">Brasileira</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="culinaria-italiana" />
            <label htmlFor="culinaria-italiana" className="text-sm">Italiana</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="culinaria-japonesa" />
            <label htmlFor="culinaria-japonesa" className="text-sm">Japonesa</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="culinaria-mexicana" />
            <label htmlFor="culinaria-mexicana" className="text-sm">Mexicana</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="culinaria-arabe" />
            <label htmlFor="culinaria-arabe" className="text-sm">Árabe</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="culinaria-francesa" />
            <label htmlFor="culinaria-francesa" className="text-sm">Francesa</label>
          </div>
        </div>
      </div>
      
      {/* Serviços Oferecidos */}
      <div className="space-y-2">
        <Label>Serviços Oferecidos</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="servico-delivery" />
            <label htmlFor="servico-delivery" className="text-sm">Delivery</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="servico-reservas" />
            <label htmlFor="servico-reservas" className="text-sm">Reservas</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="servico-eventos" />
            <label htmlFor="servico-eventos" className="text-sm">Eventos/Festas</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="servico-drive" />
            <label htmlFor="servico-drive" className="text-sm">Drive-thru</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="servico-happy" />
            <label htmlFor="servico-happy" className="text-sm">Happy Hour</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="servico-catering" />
            <label htmlFor="servico-catering" className="text-sm">Catering</label>
          </div>
        </div>
      </div>
      
      {/* Capacidade e Operação */}
      <div className="p-4 border rounded-lg space-y-4">
        <h3 className="font-medium">Capacidade e Operação</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="capacidade">Capacidade de Lugares</Label>
            <Input id="capacidade" type="number" placeholder="0" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="mesas">Número de Mesas</Label>
            <Input id="mesas" type="number" placeholder="0" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="funcionarios">Número de Funcionários</Label>
            <Input id="funcionarios" type="number" placeholder="0" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="tempoMedio">Tempo Médio de Atendimento (minutos)</Label>
          <Input id="tempoMedio" type="number" placeholder="0" />
        </div>
      </div>
      
                {/* Especialidades da Casa */}
                <div className="space-y-2">
                    <Label htmlFor="especialidades">Especialidades da Casa</Label>
                    <Textarea 
                    id="especialidades" 
                    placeholder="Descreva os pratos ou produtos pelos quais seu restaurante é conhecido..." 
                    className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground">
                    Estas informações serão usadas para personalizar sugestões de fichas técnicas e análises de CMV.
                    </p>
                </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-6">
                <div className="text-sm text-muted-foreground">
                    Estas configurações podem ser alteradas posteriormente
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
                    Salvar e Continuar <ArrowRight className="h-4 w-4" />
                </Button>
                </CardFooter>
            </Card>
            </TabsContent>
        
                        <TabsContent value="fiscal">
            <Card>
                <CardHeader>
                <CardTitle>Configurações Fiscais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                <p className="text-muted-foreground mb-2">
                    Configure informações fiscais e tributárias para garantir relatórios financeiros precisos e conformidade legal.
                </p>
                
                {/* Regime Tributário */}
                <div className="space-y-2 relative">
                    <Label htmlFor="regime">Regime Tributário</Label>
                    <Select>
                    <SelectTrigger id="regime" className="border-amber-300 ring-2 ring-amber-300">
                        <SelectValue placeholder="Selecione o regime tributário" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="simples">Simples Nacional</SelectItem>
                        <SelectItem value="lucro-presumido">Lucro Presumido</SelectItem>
                        <SelectItem value="lucro-real">Lucro Real</SelectItem>
                        <SelectItem value="mei">MEI</SelectItem>
                    </SelectContent>
                    </Select>
                    
                    {/* Tooltip de onboarding destacando este campo */}
                    <div className="absolute -right-80 top-0 w-72 bg-amber-50 border border-amber-300 p-3 rounded-lg shadow-md z-10">
                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 bg-amber-50 border-l border-b border-amber-300"></div>
                    <div className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-amber-600 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs font-medium">1</span>
                        </div>
                        <div>
                        <h3 className="text-sm font-medium text-amber-800">Selecione seu regime tributário</h3>
                        <p className="text-xs text-amber-700 mt-1">
                            O regime tributário determinará o cálculo de impostos em seus relatórios financeiros e planejamento orçamentário.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                
                {/* Alíquotas */}
                <div className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                    <h3 className="font-medium">Alíquotas de Impostos</h3>
                    <Badge variant="outline">Baseado no regime selecionado</Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="aliquota-icms">Alíquota ICMS (%)</Label>
                        <Input id="aliquota-icms" type="number" placeholder="0.00" step="0.01" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="aliquota-pis">Alíquota PIS (%)</Label>
                        <Input id="aliquota-pis" type="number" placeholder="0.00" step="0.01" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="aliquota-cofins">Alíquota COFINS (%)</Label>
                        <Input id="aliquota-cofins" type="number" placeholder="0.00" step="0.01" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="aliquota-iss">Alíquota ISS (%)</Label>
                        <Input id="aliquota-iss" type="number" placeholder="0.00" step="0.01" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="aliquota-csll">Alíquota CSLL (%)</Label>
                        <Input id="aliquota-csll" type="number" placeholder="0.00" step="0.01" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="aliquota-ir">Alíquota IR (%)</Label>
                        <Input id="aliquota-ir" type="number" placeholder="0.00" step="0.01" />
                    </div>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                    Estas alíquotas serão usadas nos cálculos de impostos. Consulte seu contador para valores precisos.
                    </p>
                </div>
                
                {/* Nota Fiscal */}
                <div className="space-y-4">
                    <h3 className="font-medium">Configurações de Nota Fiscal</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="nf-serie">Série da NF-e</Label>
                        <Input id="nf-serie" placeholder="Ex: 001" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="nf-numero">Próximo Número</Label>
                        <Input id="nf-numero" type="number" placeholder="Ex: 1" />
                    </div>
                    </div>
                    
                    <div className="space-y-2">
                    <Label>Tipo de NF-e Emitida</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                        <Checkbox id="nf-produto" />
                        <label htmlFor="nf-produto" className="text-sm">NF-e de Produto</label>
                        </div>
                        <div className="flex items-center space-x-2">
                        <Checkbox id="nf-servico" />
                        <label htmlFor="nf-servico" className="text-sm">NFS-e (Serviço)</label>
                        </div>
                        <div className="flex items-center space-x-2">
                        <Checkbox id="nf-consumidor" />
                        <label htmlFor="nf-consumidor" className="text-sm">NFC-e (Consumidor)</label>
                        </div>
                    </div>
                    </div>
                </div>
                
                {/* Dados Bancários */}
                <div className="space-y-4">
                    <h3 className="font-medium">Dados Bancários para Relatórios</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="banco">Banco</Label>
                        <Input id="banco" placeholder="Nome do banco" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="agencia">Agência</Label>
                        <Input id="agencia" placeholder="Número da agência" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="conta">Conta</Label>
                        <Input id="conta" placeholder="Número da conta" />
                    </div>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                    Estes dados serão usados apenas para relatórios internos e não serão compartilhados.
                    </p>
                </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-6">
                <div className="text-sm text-muted-foreground">
                    Consulte seu contador para garantir informações fiscais precisas
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
                    Salvar e Continuar <ArrowRight className="h-4 w-4" />
                </Button>
                </CardFooter>
            </Card>
            </TabsContent>
        
            <TabsContent value="visual">
  <Card>
    <CardHeader>
      <CardTitle>Personalização Visual</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <p className="text-muted-foreground mb-2">
        Personalize a aparência do sistema com as cores e o logo do seu restaurante para uma experiência mais integrada à sua marca.
      </p>
      
      {/* Logo do Restaurante */}
      <div className="space-y-3 relative">
        <Label>Logo do Restaurante</Label>
        <div className="border rounded-lg p-8 border-dashed flex flex-col items-center justify-center gap-4 border-amber-300 bg-amber-50/50">
          <div className="h-24 w-24 bg-white rounded-md flex items-center justify-center shadow-sm">
            <Upload className="h-10 w-10 text-amber-300" />
          </div>
          <p className="text-sm text-muted-foreground text-center max-w-md">
            Arraste e solte o logo do seu restaurante aqui ou clique para selecionar um arquivo.
            Formatos aceitos: PNG, JPG ou SVG. Tamanho máximo: 5MB.
          </p>
          <Button variant="outline" size="sm" className="border-amber-300 text-amber-700">
            Selecionar Arquivo
          </Button>
        </div>
        
        {/* Tooltip de onboarding destacando este campo */}
        <div className="absolute -right-80 top-0 w-72 bg-amber-50 border border-amber-300 p-3 rounded-lg shadow-md z-10">
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 bg-amber-50 border-l border-b border-amber-300"></div>
          <div className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-amber-600 flex-shrink-0 flex items-center justify-center mt-0.5">
              <span className="text-white text-xs font-medium">1</span>
            </div>
            <div>
              <h3 className="text-sm font-medium text-amber-800">Faça upload do seu logo</h3>
              <p className="text-xs text-amber-700 mt-1">
                Seu logo será exibido nos relatórios, dashboards e interface do sistema, proporcionando uma experiência personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cores da Marca */}
      <div className="space-y-4">
        <h3 className="font-medium">Cores da Marca</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="cor-primaria" className="flex items-center gap-2">
              Cor Primária <div className="h-4 w-4 rounded-full bg-amber-600"></div>
            </Label>
            <div className="flex">
              <Input id="cor-primaria" value="#F59E0B" className="rounded-r-none" />
              <div className="w-12 border rounded-r-md border-l-0 flex items-center justify-center bg-amber-600">
                <span className="sr-only">Selecionar cor</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Usada em botões principais, cabeçalhos e destaques.
            </p>
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="cor-secundaria" className="flex items-center gap-2">
              Cor Secundária <div className="h-4 w-4 rounded-full bg-slate-700"></div>
            </Label>
            <div className="flex">
              <Input id="cor-secundaria" value="#334155" className="rounded-r-none" />
              <div className="w-12 border rounded-r-md border-l-0 flex items-center justify-center bg-slate-700">
                <span className="sr-only">Selecionar cor</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Usada em elementos secundários, texto e detalhes.
            </p>
          </div>
        </div>
        
        <div className="pt-4">
          <h4 className="text-sm font-medium mb-3">Pré-visualização</h4>
          <div className="border rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">Rook System - Personalizado</div>
              <Button size="sm" className="bg-amber-600 hover:bg-amber-700">Botão Primário</Button>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-medium">
                Logo
              </div>
              <div>
                <div className="font-medium text-slate-700">Nome do Restaurante</div>
                <div className="text-xs text-slate-500">Restaurante personalizado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Personalização de Relatórios */}
      <div className="space-y-3">
        <Label>Cabeçalho de Relatórios</Label>
        <div className="border rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-4">
            <Checkbox id="relatorio-logo" defaultChecked />
            <label htmlFor="relatorio-logo" className="text-sm">Incluir logo nos relatórios</label>
          </div>
          
          <div className="flex items-center space-x-3 mb-4">
            <Checkbox id="relatorio-endereco" defaultChecked />
            <label htmlFor="relatorio-endereco" className="text-sm">Incluir endereço nos relatórios</label>
          </div>
          
          <div className="flex items-center space-x-3">
            <Checkbox id="relatorio-cnpj" defaultChecked />
            <label htmlFor="relatorio-cnpj" className="text-sm">Incluir CNPJ nos relatórios</label>
          </div>
        </div>
      </div>
      
      {/* Tema da Interface */}
      <div className="space-y-3">
        <Label>Tema da Interface</Label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="border rounded-lg p-4 flex items-center gap-3 cursor-pointer bg-white">
            <Checkbox id="tema-claro" defaultChecked />
            <label htmlFor="tema-claro" className="text-sm font-medium cursor-pointer">Tema Claro</label>
          </div>
          
          <div className="border rounded-lg p-4 flex items-center gap-3 cursor-pointer">
            <Checkbox id="tema-escuro" />
            <label htmlFor="tema-escuro" className="text-sm font-medium cursor-pointer">Tema Escuro</label>
          </div>
          
          <div className="border rounded-lg p-4 flex items-center gap-3 cursor-pointer">
            <Checkbox id="tema-sistema" />
            <label htmlFor="tema-sistema" className="text-sm font-medium cursor-pointer">Seguir Sistema</label>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter className="flex justify-between border-t pt-6">
      <div className="text-sm text-muted-foreground">
        Estas configurações podem ser alteradas a qualquer momento em seu perfil
      </div>
      <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
        Salvar e Finalizar <ArrowRight className="h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
</TabsContent>
      </Tabs>
      
      
    </div>
  );
}