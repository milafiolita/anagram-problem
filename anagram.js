function anagram(s1,s2) {
  var s1 = s1.replace(/[^A-Za-z_]/ig, ''); //Mencari isi dari "s1"
  var s2 = s2.replace(/[^A-Za-z_]/ig, ''); //Mencari isi dari "s2"
  
  // .lenght = panjang karakter
  // .toLowerCase = mengubah karakter menjadi kecil atau tidak huruf kapital
  // .split = memotong perkarakter contoh table jika di split akan menjadi "t","a","b","l","e"
  // .sort = mengurutkan perkarakter contoh "a","b","e","l","t"
  // .join menggabungkan perkarakter menjadi satu contoh abelt
  if(s1.length > 0 && s1.length === s2.length && s1.toLowerCase().split('').sort().join('') === s2.toLowerCase().split('').sort().join('')){
    return true;
  }else{
    return false;
  }
}

console.log(anagram("table", "bleat"));
console.log(anagram("add", "hai"));
