// Synchronous

// const getUserSync = (id) => {
//     // let nama = '';
//     // if(id === 1) {
//     //     nama = 'Arisandi';
//     // }else{
//     //     nama = 'Yudiarta';
//     // }

//     const nama = (id === 1) ? 'Arisandi' : 'Yudiarta';

//     return { id, nama };
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = 'Hello Folks!';
// console.log(halo);


// Asynchronous

const getUser = (id, callback) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(() => {
        const nama = (id === 1) ? 'Arisandi' : 'Yudiarta';
        callback({id, nama});
    }, time);1
}

const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
});


const userDua = getUser(2, (hasil) => {
    console.log(hasil);
});


const halo = 'Hello Folks!';
console.log(halo);
