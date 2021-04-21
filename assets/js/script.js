$(function(){

  console.log('DOM caricato');

  $('a.features').click(function(){
    console.log('click');

    $('.dropdown').toggleClass('active')
  })
})