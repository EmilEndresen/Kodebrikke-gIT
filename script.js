let activeCode = ""
let timeoutId

function genererKode() {
   activeCode = Math.floor(100000 + Math.random() * 900000).toString()

   document.getElementById("kode").innerText = activeCode

   document.getElementById("codeInput").value = ""
   document.getElementById("message").innerText = ""

   document.getElementById("codeInput").focus()

   clearTimeout(timeoutId)

   timeoutId = setTimeout(() => {
      activeCode = ""
      document.getElementById("kode").innerText = ""
      document.getElementById("message").innerText = "Koden utløp!"
      document.getElementById("message").style.color = "orange"
   }, 45000)
}

function sjekkKode() {
   let input = document.getElementById("codeInput").value

   if (input.length === 6) {
      if (input === activeCode && activeCode !== "") {
         document.getElementById("message").innerText = "Riktig kode!"
         document.getElementById("message").style.color = "green"
      } else {
         document.getElementById("message").innerText = "Feil kode!"
         document.getElementById("message").style.color = "red"
      }
   }
}

document.addEventListener("DOMContentLoaded", () => {
   document.getElementById("generateBtn").addEventListener("click", genererKode)

   document.getElementById("codeInput").addEventListener("input", sjekkKode)
})
