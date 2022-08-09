let userName = prompt("Lütfen Adınızı Yazınız:")
let dt= new Date().getDay()  // getDay fonksiyonu bize günün sayısını döner ismini vermez.
const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]; // Bu bir liste örneği

let odev1 = document.querySelector("#odev1")
odev1.classList.add("text1","text2")
let odev2 = document.querySelector("#odev2")
odev2.classList.add("text1","text2")
let odev3 = document.querySelector("#odev3")
odev3.classList.add("text1","text2")

function tarihSaat() {
if (userName.length >0) {
    odev1.innerHTML = `Merhaba! ${userName} Hoş Geldiniz!`
    odev2.innerHTML = odev2.innerHTML=(`${new Date().toLocaleString()} ${days[dt-1]}`)
    odev3.innerHTML = `tarihinde Kodluyoruz Frontend Web Development Patikası'nın Javascript bölümü 1.Ödevindesiniz.`
    
}
}//function bitimi



setInterval(tarihSaat, 1000);