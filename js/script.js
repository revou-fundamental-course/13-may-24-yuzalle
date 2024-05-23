let isKelilingVisible = false;
function hideOrshow() {
    if (isKelilingVisible == false){
        isKelilingVisible = true;
        document.getElementById('luas-section').style.display='none';
        document.getElementById('keliling-section').style.display='block';
    } else{
        isKelilingVisible = false;
        document.getElementById('luas-section').style.display='block';
        document.getElementById('keliling-section').style.display='hide';
    }
    
}

function luassegitiga(){
    let alasValue = document.getElementById('alas-input').value;
    let tinggiValue = document.getElementById('tinggi-input').value;
    let luas = 0.5*alasValue*tinggiValue;

    console.log(alasValue);
    console.log(tinggiValue);
    console.log(luas);

    if (alasValue != '' && tinggiValue != ''){
        console.log('sukses validasi')
    } else{
        alert('kosong')
    }
    document.getElementById('luas-input').value=luas
}

function kelilingsegitiga(){
    let s1Value = parseFloat(document.getElementById('S1-input').value);
    let s2Value = parseFloat(document.getElementById('S2-input').value);
    let s3Value = parseFloat(document.getElementById('S3-input').value);
    let keliling = s1Value+s2Value+s3Value;

    console.log(s1Value);
    console.log(s2Value);
    console.log(s3Value);
    console.log(keliling);

    if (s1Value != '' && s2Value != '' && s3Value != ''){
        console.log('sukses validasi')
    } else{
        alert('kosong')
    }
    document.getElementById('keliling-input').value=keliling
}

function reset(){
    let alasValue = '';
    let tinggiValue = '';
    let luas = '';

    let s1Value = '';
    let s2Value = '';
    let s3Value = '';
    let keliling = '';

    document.getElementById('alas-input').value=alasValue
    document.getElementById('tinggi-input').value=tinggiValue
    document.getElementById('luas-input').value=luas
    document.getElementById('S1-input').value=s1Value
    document.getElementById('S2-input').value=s2Value
    document.getElementById('S3-input').value=s3Value
    document.getElementById('keliling-input').value=keliling
}