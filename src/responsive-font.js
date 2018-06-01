
 /**
  * Classe responsável por gerenciar o tamanho de fonts responsivas
  *
  * @author William Costa
  *
  * Para utilizar os recursos de fonts responsívas basta adicionar a classe "responsiveFont" ao elemento que abriga o texto.
  * Caso queira definir um tamanho mínimo ou máximo para a font, adicione os atributos "responsiveFont-minSize" ou "responsiveFont-maxSize" ao elemento com a clase responsiveFont
  * A classe trabalha apenas com "px", qualquer outra unidade não será considerada e poderá não ter os resultados desejados
  *
  */
 class ResponsiveFont{

   /**
    * Método responsável por iniciar a classe
    * @method init
    */
   static init(){
     ResponsiveFont.refresh();
     ResponsiveFont.initialized = true;
   }

   /**
    * Método responsável por recarregar os dados da classe
    * @method refresh
    */
   static refresh(){
     ResponsiveFont.setHTML();
     ResponsiveFont.setCSS();
     ResponsiveFont.verify();
     if(typeof ResponsiveFont.initialized == 'undefined'){
      ResponsiveFont.setListeners();
     }
   }

   /**
    * Método responsável por definir os listeners da classe
    * @method setListeners
    */
   static setListeners(){
     if(typeof ResponsiveFont.initialized == 'undefined'){
       $(window).resize(function() {
         ResponsiveFont.verify();
       });
     }
   }

   /**
    * Método responsável por adicionar os elementos html que estão faltando
    * @method setHTML
    */
   static setHTML(){
     $('.responsiveFont').each(function(e){
       if(!$(this).find('.responsiveFontText').html()) $(this).html('<div class="responsiveFontText">'+$(this).html()+'</div>');
     });
   }

   /**
    * Método responsável por adicionar os estilos CSS faltantes
    * @method setCSS
    */
   static setCSS(){
     $('.responsiveFontText').css({'white-space' : 'nowrap',
                                   'overflow'    : 'hidden',
                                   'display'     : 'inline-block'});
   }

   /**
    * Método responsável verificar se existem fonts responsivas e invocar o método de processamento
    * @method verify
    */
   static verify(){
     $('.responsiveFont').each(function(e){
       ResponsiveFont.process(this);
     });
   }

   /**
    * Método responsável por processar o tamanho de uma font responsiva
    * @method process
    */
   static process(selector){
     var box           = $(selector);
     var widthBox      = parseInt(box.css('width'));
     var paddingleft   = parseInt(box.css('padding-left'));
     var paddingRight  = parseInt(box.css('padding-right'));
     var minFontSize   = parseInt(box.attr('responsiveFont-minSize'));
     var maxFontSize   = parseInt(box.attr('responsiveFont-maxSize'));
     var bloodletting  = parseInt(box.attr('responsiveFont-bloodletting'));
     bloodletting = !isNaN(bloodletting) ? bloodletting : 20;

     var text      = box.find('.responsiveFontText');
     text.css({'float':'left'});
     var widthText = parseInt(text.css('width'));
     text.css({'float':'none'});
     var fontSize  = parseInt(text.css('font-size'));

     var factor = parseInt((((widthBox - paddingleft - paddingRight - bloodletting)*100)/widthText).toFixed(0))/100;
     var newFontSize = parseInt(fontSize * factor);

     if(!isNaN(minFontSize) && newFontSize < minFontSize) newFontSize = minFontSize;
     else if(!isNaN(maxFontSize) && newFontSize > maxFontSize) newFontSize = maxFontSize;

     text.css({'font-size':newFontSize+'px'});
   }

 }

 ResponsiveFont.init();
