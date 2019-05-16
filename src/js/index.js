import '../css/style.scss';
const $menu= document.getElementById('menu')
const $menu1= document.getElementById('menu1')
const $menu2= document.getElementById('menu2')
const $menu3= document.getElementById('menu3')
const $menu4= document.getElementById('menu4')
const $enviar= document.getElementById('btenviar')
const $bttelefono = document.getElementById('bttelefono')
const $btemail = document.getElementById('btemail')
const $btambos = document.getElementById('btambos')
const $contado = document.getElementById('contado')
const $credito = document.getElementById('credito')
const $mail = document.getElementById('mail_w')
const $phone = document.getElementById('phone_w')
const $Img_telefono = document.getElementById('Img_telefono')
const $Img_mail = document.getElementById('Img_mail')

const $mover = document.getElementById('navbarSupportedContent')

 $menu.addEventListener('click', (event) =>{  
   $mover.classList.remove('show');
 });

 $menu1.addEventListener('click', (event) =>{
    $mover.classList.remove('show');
  });

 $menu2.addEventListener('click', (event) =>{
    $mover.classList.remove('show');
 });

 $menu3.addEventListener('click', (event) =>{
    $mover.classList.remove('show');
 });

 $menu4.addEventListener('click', (event) =>{
   $mover.classList.remove('show');
 });

$enviar.addEventListener('click', (event) =>{
   alert('Datos guardados con exito')
})

$bttelefono.addEventListener('click', (event) => {
   $bttelefono.classList.toggle('success')
   $phone.classList.toggle('phone_w')
   $phone.classList.toggle('ocultar')
   $Img_telefono.classList.toggle('ocultar')
   select()
})

$btemail.addEventListener('click', (event) => {
   $btemail.classList.toggle('success')
   $mail.classList.toggle('mail_w')
   $mail.classList.toggle('ocultar')
   $Img_mail.classList.toggle('ocultar')
   select()
})

function select(){
   if($bttelefono.classList.contains('success') && $btemail.classList.contains('success')){
      $btambos.classList.add('success')

   }
   else{
      $btambos.classList.remove('success')
   }
}

$btambos.addEventListener('click', (event) => {
   $btambos.classList.toggle('success')
   if($btambos.classList.contains('success')){
    $bttelefono.classList.add('success')
    $btemail.classList.add('success')
    $mail.classList.add('mail_w')
    $mail.classList.remove('ocultar')
    $Img_telefono.classList.add('ocultar')
    $phone.classList.add('phone_w')
    $phone.classList.remove('ocultar')
    $Img_mail.classList.add('ocultar')
   }
   else{
      $bttelefono.classList.remove('success')
      $btemail.classList.remove('success')
      $mail.classList.remove('mail_w')
      $mail.classList.add('ocultar')
      $phone.classList.toggle('phone_w')
      $phone.classList.toggle('ocultar')
      $Img_telefono.classList.toggle('ocultar')
      $Img_mail.classList.remove('ocultar')
   }
})

$contado.addEventListener('click', (event) => {
   $contado.classList.toggle('success')
   $credito.classList.remove('success')
} )

$credito.addEventListener('click', (event) => {
   $credito.classList.toggle('success')
   $contado.classList.remove('success')
})