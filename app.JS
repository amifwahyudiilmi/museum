// const NilaiUjian= "42";

// if (NilaiUjian < 50){
//     console.log("E");
// }else if (NilaiUjian < 60 ){
//     console.log("D");
// }else if (NilaiUjian < 70){
//     console.log("C");
// }else if ( NilaiUjian <80){
//     console.log("B");
// }else if (NilaiUjian <100){
//     console.log("A");
// }

// const NamaHari = prompt("isikan hari").toLowerCase();

// if (NamaHari === "senin"){
//     console.log("selamat bekerja");
// }else if (NamaHari === "sabtu"){
//     console.log ("selamat menikmati hari libur!!");
// }else {
//     console.log ("lanjut bekerja");
// }

// const Password = prompt("buat pasword");

// if (Password.length >= 6){
//     if (Password.indexOf (' ') === -1){
//         if (Password.indexOf("$")){
//             console.log("harus ada character");
//         }else{
//             console.log("password valid");
//         }
//     }else{
//         console.log("password tidak boleh ada spasi");
//     }
// }else{
//     console.log("panjang karakter 6 angka");
// }

// if (Password.length >= 6 && Password.indexOf (' ')=== -1){
//     console.log("password telah sesuai");
// }else{
//     console.log("password invalid");
// }

// const Role = prompt("masukkan role");

// if (Role === "admin" || Role === "spv"){
//     console.log("akses di terima");
// }else{
//     console.log("akses di tolak");
// }

// if (Role != "admin"){
//     console.log("akses di tolak");
// }else{
//     console.log("akses di izinkan");
// }

const StatusKeluarga = prompt("Nama Anda")

switch (StatusKeluarga){
    case "badrul":
        console.log("ayah");
        break;
    case "sri":
        console.log("mamak");
        break;
    case "amif":
        console.log("abang");
        break;
    case "firza":
        console.log("adek laki-laki");
        break;
    default:
        console.log("bukan keluarga");        
}