export const index = async ({ params: { token }, update, html }: { params: { token: string }, update: any, html: any }) => {
  const {id} = await update.verify(token);
  if (!id) {
    return html(`<!DOCTYPE html><html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="https://pub-0a144e69bb31494aa2cd840966b21242.r2.dev/favicon.svg"><title>Cambiar contraseña</title><link rel="stylesheet" href="https://pub-0a144e69bb31494aa2cd840966b21242.r2.dev/_astro/index.CQ57Qz7M.css"></head> <body class="bg-gray-100 flex items-center justify-center h-dvh">  <div class="w-11/12 max-w-md bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col gap-8"> <h1 class="text-3xl font-bold text-red-500 text-center">Acceso denegado</h1> <div class="flex flex-col gap-4"> <p class="text-lg text-gray-600">El enlace para restablecer tu contraseña no es válido. Esto puede deberse a que:</p> <ul class="list-disc list-inside text-gray-600"> <li>El enlace ha caducado.</li> <li>El enlace ha sido utilizado anteriormente.</li> <li>El enlace ha sido modificado.</li> </ul> </div> <p class="text-lg text-gray-600">Por favor, solicita un nuevo enlace para restablecer tu contraseña.</p> </div>  </body></html>`)
  }
  return html(`<!DOCTYPE html><html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="https://pub-0a144e69bb31494aa2cd840966b21242.r2.dev/favicon.svg"><title>Cambiar contraseña</title><link rel="stylesheet" href="https://pub-0a144e69bb31494aa2cd840966b21242.r2.dev/_astro/index.CQ57Qz7M.css">
<style>label[data-astro-cid-j7pv25f6]{font-weight:700}input[data-astro-cid-j7pv25f6]{border-radius:.25rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1));padding:.5rem}input[data-astro-cid-j7pv25f6]:focus{--tw-border-opacity: 1;border-color:rgb(107 114 128 / var(--tw-border-opacity, 1));outline:2px solid transparent;outline-offset:2px}button[data-astro-cid-j7pv25f6]{cursor:pointer}
</style></head> <body class="bg-gray-100 flex items-center justify-center h-dvh">  <div class="w-11/12 max-w-md bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col gap-8" data-astro-cid-j7pv25f6> <h1 class="text-3xl" data-astro-cid-j7pv25f6>Cambiar contraseña</h1> <form class="flex flex-col gap-4" id="change-password-form" data-astro-cid-j7pv25f6> <label for="password" data-astro-cid-j7pv25f6>Nueva contraseña</label> <div class="relative" data-astro-cid-j7pv25f6> <input type="password" id="password" name="password" required class="w-full" data-astro-cid-j7pv25f6> <button type="button" id="toggle-password" class="absolute right-2 inset-y-0 text-gray-300" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0" data-astro-cid-j7pv25f6></path></svg> <svg class="hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13" data-astro-cid-j7pv25f6></path></svg> </button> </div> <label for="password-confirm" data-astro-cid-j7pv25f6>Confirmar contraseña</label> <div class="relative" data-astro-cid-j7pv25f6> <input type="password" class="w-full" id="password-confirm" name="password-confirm" required data-astro-cid-j7pv25f6> <button type="button" id="toggle-confirm-password" class="absolute right-2 inset-y-0 text-gray-300" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0" data-astro-cid-j7pv25f6></path></svg> <svg class="hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13" data-astro-cid-j7pv25f6></path></svg> </button> </div> <button id="change-password-button" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit m-auto" type="submit" data-astro-cid-j7pv25f6>Cambiar contraseña</button> </form> </div> <div id="alert" class="fixed -top-10 opacity-0 transition-all duration-300 ease-in-out left-1/2 -translate-x-1/2 text-white py-2 px-4 rounded font-bold shadow" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6></p> </div>  </body></html>  <script type="module">const o=e=>{const t=document.getElementById(e);if(!t)throw new Error("Element with ID "+e+" not found");return t},m=o("change-password-form"),c=o("password"),l=o("password-confirm"),r=o("change-password-button"),a=o("alert"),d=o("toggle-password"),g=o("toggle-confirm-password"),n=(e,t=!1)=>{const s=t?"bg-red-500":"bg-green-500",i=t?"bg-green-500":"bg-red-500";a.classList.add(s,"opacity-100","top-10"),a.classList.remove(i,"opacity-0","-top-10"),a.querySelector("p").textContent=e,setTimeout(()=>{a.classList.remove(s,"opacity-100","top-10"),a.classList.add("opacity-0","-top-10")},3e3)},p=e=>{r.disabled=e,r.textContent=e?"Cambiando...":"Cambiar contraseña",r.classList.toggle("cursor-not-allowed",e),r.classList.toggle("hover:bg-blue-700",!e),r.classList.toggle("bg-gray-500",e),r.classList.toggle("bg-blue-600",!e)},u=(e,t)=>{const s=e.type==="password";e.type=s?"text":"password",t.querySelector("svg").classList.toggle("hidden",s),t.querySelector("svg:last-child").classList.toggle("hidden",!s)};d.addEventListener("click",()=>u(c,d));g.addEventListener("click",()=>u(l,g));m.addEventListener("submit",async e=>{e.preventDefault();const t=c.value.trim(),s=l.value.trim();if(t!==s){n("Las contraseñas no coinciden",!0),c.value="",l.value="";return}if(t.length<8){n("La contraseña debe tener al menos 8 caracteres",!0),c.value="",l.value="";return}p(!0);try{(await fetch("/api/v1/user/update-password/${token}",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t})})).ok?(n("Contraseña cambiada correctamente"),c.value="",l.value=""):n("Error al cambiar la contraseña",!0)}catch(i){console.error("Error:",i),n("Ocurrió un error inesperado",!0)}finally{p(!1)}});</script>`)
}