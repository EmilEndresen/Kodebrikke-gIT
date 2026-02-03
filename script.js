const codeBtn = document.getElementById("code-btn")
let timeoutId

codeBtn.addEventListener("click", () => {
   let kode = Math.floor(100000 + Math.random() * 900000)

   document.getElementById("kode").innerText = kode

   clearTimeout(timeoutId)

   timeoutId = setTimeout(() => {
      document.getElementById("kode").innerText = ""
   }, 30000)
})

console.log(codeBtn)
