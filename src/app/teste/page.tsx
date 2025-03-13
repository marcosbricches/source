import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpIcon, BarChartIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';


export default function TestePage() {
  return (

<div className="mb-8 space-y-2">
  <Badge variant="outline" className="mb-2">Dashboard</Badge>
  <h1 className="text-3xl font-bold tracking-tight">Visão Geral Financeira</h1>
  <p className="text-muted-foreground">
    Monitore os principais indicadores do seu restaurante
  </p>
</div>

    );
    }