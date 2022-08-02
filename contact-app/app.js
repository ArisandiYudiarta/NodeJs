const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

// membuat folder data 
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
};

// membuat file contact.json jika belum ada

const filePath = './data/contacts.json';
if (!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, '[]', 'utf-8');
};

// pertanyaan 
const tulisPertanyaan = (pertanyaan,) => {
    return new Promise((resolve, reject) => {
        rl.question( pertanyaan , (input) =>{
            resolve(input);
        });
    });
};


const core = async () => {
    const nama = await tulisPertanyaan('Masukkan nama anda : ');
    const nohp = await tulisPertanyaan('Masukkan nomer telp anda : ');
    const email = await tulisPertanyaan('Masukkan email anda : ');

    // veriabel contact dibawah berupa object 
    const contact = { nama, nohp, email };
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    
    contacts.push(contact);
    console.log(contacts);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('sukses');

    rl.close();
};

core();
