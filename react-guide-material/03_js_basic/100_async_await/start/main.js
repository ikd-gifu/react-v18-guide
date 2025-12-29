// 非同期処理（await/async）
let a = 0;

init();
async function init() {
    // const result = await new Promise((resolve, reject) => { // resolveが呼ばれるまで待機
    //     setTimeout(() => {
    //         a = 1;
    //         resolve(a)
    //     }, 2000);
    // })
    //     console.log(result);
    try {
        const result = await new Promise((resolve, reject) => { // rejectが呼ばれるまで待機
        setTimeout(() => {
            a = 1;
            reject(a)
        }, 2000);
    })
        console.log(result);
    } catch(e) {
        console.log('catchが実行', e)
    }
}
