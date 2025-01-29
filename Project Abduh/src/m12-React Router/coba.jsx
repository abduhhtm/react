function mandi() {
    console.log("Mandi di laut")
}

function sarapan () {
    setTimeout(function()  {
        console.log("sarapan tertunda 3 detik");
    },3000);
}

function kerja () {
    console.log("kerja di kantor");
}

function sarapan(callback) {
    setTimeout(function()  {
        console.log("sarapan tertunda 3 detik");
        callback();
    },3000);
}

mandi();
sarapan();
kerja();