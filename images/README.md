# Pasta de Imagens

Esta pasta é destinada para armazenar as imagens do site do Lar de Idosos.

## 📁 Estrutura Sugerida

```
images/
├── hero/              # Imagens da seção principal
│   ├── hero-main.jpg
│   └── hero-bg.jpg
├── facilities/        # Imagens das instalações
│   ├── bedrooms.jpg
│   ├── dining-room.jpg
│   ├── garden.jpg
│   └── activities-room.jpg
├── team/             # Fotos da equipe
│   ├── doctor-maria.jpg
│   ├── nurse-ana.jpg
│   ├── social-worker-joao.jpg
│   └── physiotherapist-pedro.jpg
├── events/           # Imagens dos eventos
│   ├── music-live.jpg
│   ├── birthday-party.jpg
│   ├── art-crafts.jpg
│   └── outings.jpg
└── logo/             # Logo e elementos de marca
    ├── logo.png
    └── favicon.ico
```

## 🖼️ Especificações Recomendadas

### Hero Section
- **Formato**: JPG ou WebP
- **Dimensões**: 1920x1080px (16:9)
- **Tamanho**: Máximo 500KB
- **Qualidade**: 80-85%

### Galeria de Instalações
- **Formato**: JPG ou WebP
- **Dimensões**: 800x600px (4:3)
- **Tamanho**: Máximo 300KB
- **Qualidade**: 85-90%

### Fotos da Equipe
- **Formato**: JPG
- **Dimensões**: 400x400px (1:1)
- **Tamanho**: Máximo 150KB
- **Qualidade**: 90%

### Eventos
- **Formato**: JPG ou WebP
- **Dimensões**: 600x400px (3:2)
- **Tamanho**: Máximo 250KB
- **Qualidade**: 85-90%

## 🔧 Como Adicionar Imagens

1. **Salve as imagens** nesta pasta seguindo a estrutura sugerida
2. **Otimize as imagens** para web (compressão e redimensionamento)
3. **Substitua os placeholders** no HTML:

```html
<!-- Exemplo: Substituir placeholder por imagem real -->
<div class="image-placeholder">
    <img src="images/facilities/bedrooms.jpg" alt="Quartos Confortáveis">
</div>
```

## 📱 Responsividade

Para melhor performance em dispositivos móveis, considere:

- **Imagens responsivas** com diferentes tamanhos
- **Lazy loading** (já implementado no JavaScript)
- **Formatos modernos** como WebP com fallback para JPG

## 🎨 Otimização

### Ferramentas Recomendadas
- **TinyPNG**: Compressão online
- **Squoosh**: Otimização avançada do Google
- **ImageOptim**: Para macOS
- **FileOptimizer**: Para Windows

### Dicas de Otimização
1. **Redimensione** antes de comprimir
2. **Use formatos apropriados** (JPG para fotos, PNG para gráficos)
3. **Considere WebP** para melhor compressão
4. **Mantenha proporções** consistentes
5. **Teste em diferentes dispositivos**

## 📋 Checklist

- [ ] Imagens otimizadas para web
- [ ] Nomes de arquivo descritivos
- [ ] Alt text apropriado no HTML
- [ ] Diferentes tamanhos para responsividade
- [ ] Fallbacks para navegadores antigos
- [ ] Lazy loading implementado
- [ ] Teste de carregamento em diferentes conexões

## 🚀 Próximos Passos

1. Adicione as imagens reais do lar
2. Atualize o HTML para usar as imagens
3. Teste o carregamento em diferentes dispositivos
4. Otimize conforme necessário
5. Implemente lazy loading avançado se necessário 