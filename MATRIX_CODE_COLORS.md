# 🎨 Paleta de Cores - Matrix Code

Baseada nas imagens fornecidas da marca Matrix Code, esta paleta captura a essência futurística e tecnológica da empresa.

## 🟢 **Cores Primárias**

### Verde Matrix (Principal)
- **Matrix Green Primary**: `#00FF00` `hsl(120, 100%, 50%)`
  - Uso: Textos principais, logo, destaques importantes
  - Inspiração: Verde clássico do filme Matrix

### Verde Matrix (Secundário)  
- **Matrix Green Secondary**: `#00D100` `hsl(127, 100%, 41%)`
  - Uso: Botões, links, elementos interativos
  - Inspiração: Verde mais suave das imagens

### Verde Matrix (Accent)
- **Matrix Green Accent**: `#00B300` `hsl(140, 100%, 35%)`
  - Uso: Bordas, ícones, elementos de apoio
  - Inspiração: Verde mais escuro para contraste

## ⚫ **Cores de Fundo**

### Preto Matrix
- **Matrix Black Primary**: `#000000` `hsl(0, 0%, 0%)`
  - Uso: Background principal, fundos de seção
  - Inspiração: Fundo das imagens enviadas

### Cinza Escuro
- **Matrix Gray Dark**: `#0F1419` `hsl(220, 13%, 8%)`
  - Uso: Cards, containers, elementos sobrepostos
  - Inspiração: Tons escuros das imagens

### Cinza Médio
- **Matrix Gray Medium**: `#1E2328` `hsl(210, 11%, 15%)`
  - Uso: Bordas, inputs, elementos de formulário
  - Inspiração: Contraste sutil com o preto

## 💫 **Cores de Efeito**

### Verde Brilho
- **Matrix Green Glow**: `#80FF80` `hsl(120, 100%, 75%)`
  - Uso: Efeitos de hover, glows, animações
  - Inspiração: Efeito luminoso das imagens

### Ciano Accent
- **Matrix Cyan Accent**: `#00FFFF` `hsl(180, 100%, 50%)`
  - Uso: Acentos secundários, destaques especiais
  - Inspiração: Complementar ao verde para variação

## 📐 **Aplicação no Design**

### Hierarquia Visual
1. **Primário**: Verde Matrix Primary (`#00FF00`)
2. **Secundário**: Verde Matrix Secondary (`#00D100`) 
3. **Terciário**: Ciano Accent (`#00FFFF`)
4. **Fundo**: Preto Matrix (`#000000`)
5. **Containers**: Cinza Escuro (`#0F1419`)

### Gradientes Sugeridos
- **Primário**: `linear-gradient(45deg, #00FF00, #00D100)`
- **Secundário**: `linear-gradient(135deg, #00D100, #00B300)`
- **Accent**: `linear-gradient(90deg, #00FFFF, #00FF00)`

### Efeitos de Glow
```css
/* Texto com glow verde */
text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00;

/* Box com glow sutil */
box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
```

## 🎯 **Uso Recomendado**

### ✅ **Faça**
- Use verde Matrix para textos importantes e CTAs
- Combine preto com verde para máximo contraste
- Use gradientes sutis para profundidade
- Aplique efeitos glow com moderação

### ❌ **Evite**
- Não misture com cores quentes (vermelho, laranja)
- Não use verde em fundos extensos (causa fadiga visual)
- Evite saturação excessiva em grandes áreas
- Não comprometa a legibilidade com contrastes baixos

## 🔧 **Implementação Técnica**

As cores estão definidas como variáveis CSS customizadas no arquivo `/app/frontend/src/index.css`:

```css
:root {
  --matrix-green-primary: 120 100% 50%;
  --matrix-green-secondary: 127 100% 41%;
  --matrix-black-primary: 0 0% 0%;
  /* ... */
}
```

Esta paleta garante consistência visual e representa perfeitamente a identidade futurística da Matrix Code! 🚀