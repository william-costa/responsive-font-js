# Responsive Font JS

Classe em JS para a manipulação de textos de forma responsiva, levando em consideração o espaço disponível para o texto e o tamanho total ocupado por ele.

## Requisitos
- `jQuery 1.12.4` ou superior

## Utilização
Para utilizar o `Responsive Font JS`, basta adicionar a classe `responsiveFont` ao elemento que abrigará o texto responsivo.

```html
  <div class="responsiveFont">
    Olá mundo!
  </div>
```

O sistema cuidará de deixar o texto com o tamanho correto para aparecer 100% dentro do elemento pai.

## Tamanhos máximo e mínimo
Você pode definir os tamanhos máximo e mínimo para a font utilizando os atributos `responsiveFont-maxSize` e `responsiveFont-minSize`, respectivamente.

```html
  <div class="responsiveFont" responsiveFont-minSize="12px" responsiveFont-maxSize="60px">
    Olá mundo!
  </div>
```

## Sangria
Algumas fonts tem uma variação não proporcional do tamanho, o que pode causar um mau funcionamento da classe.
Para isso, existe o atributo de sangria que define o valor da taxa de erro na diminuição do tamanho da font.
Para alterar o valor da sangria, utilize o atributo `responsiveFont-bloodletting` (o valor padrão é 20).

```html
  <div class="responsiveFont" minSize="12px" responsiveFont-bloodletting="20">
    Olá mundo!
  </div>
```
