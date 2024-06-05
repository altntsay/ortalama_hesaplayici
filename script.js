/*var gun=prompt("bugün günlerden ne?","lütfen küçük harf kullanınız");
if(gun=="pazar"){
 document.write("Bugün gunlerden " , gun, " olduguna gore hafta sonundayız");
}
else{
    document.write("bugun gunlerden", gun);
}
*/
function calculateSum() {
    // Input alanlarından değerleri alın
    const number1 = parseFloat(document.getElementById('vize').value);
    const number2 = parseFloat(document.getElementById('final').value);
    
    // Sayıların toplamını hesaplayın
    const sum = 40*number1/100 + 60*number2/100;
    
    // Sonucu result input alanına atayın
    document.getElementById('Ortalama').value = sum;

let sonucX;
   if (sum >= 50) {
    sonucX = "Gecti";
   }
   else{
    sonucX = "Kaldı";
   }
   document.getElementById("sonuc").value = sonucX;
 let harfNotu;
    if (sum >= 90) {
        harfNotu = "A";
    } 
    else if (sum >= 80) {
        harfNotu = "B";
    } 
    else if (sum >= 70) {
        harfNotu = "C";
    } 
    else if (sum >= 60) {
        harfNotu = "D";
    } 
    else {
        harfNotu = "F";
    }
    // Sonuçları ilgili input alanlarına ata
    document.getElementById('harf').value = harfNotu;
}


// Temizle butonu için fonksiyon
function clearFields() {
    document.getElementById('vize').value = '';
    document.getElementById('final').value = '';
    document.getElementById('Ortalama').value = '';
    document.getElementById('harf').value = '';
}

