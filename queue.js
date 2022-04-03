function payload(index) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const isSuccess = true;
            if (isSuccess) {
                resolve(console.log(`промис ${index}`));
            }
            
        }, rand(100, 1000));
    })
}

function rand(min, max){
    return (max - min) * Math.random() + min;
}

class Queue {
    
    constructor() {
        this.concurrency = 20;
        this.countSizeConcurrency = 0;
        this.lengthQueue = [];
                
    }

    add(task, index) {
        this.lengthQueue.push(task);
        console.log(this.lengthQueue);
        
        this.#execute(task, index);
    }    
    
    #execute(task, index) {
        const hasChannel = this.countSizeConcurrency < this.concurrency;
        if (!hasChannel) {
            return;
        }
        task(index);
        console.log(task(index));
        this.countSizeConcurrency++;
        console.log(this.countSizeConcurrency);
              
        this.lengthQueue.shift();                 
        // this.#then(index) был вариант использование then внутри через приатное свойство
         
        console.log(this.lengthQueue);
    }

    then(result, index) {
        console.log(`Успешно завершен промис ${result}`)
        this.countSizeConcurrency--;
        console.log(this.countSizeConcurrency);
        if (this.lengthQueue.length > 0) {
            const newTask = this.lengthQueue.shift(); 
            this.#execute(newTask, index);
        }
        if (this.lengthQueue.length===0) {
            console.log('очередь опустошена')
        }
        
    }
}

const queue = new Queue();
    
for (let i = 1; i <= 100; i++){
    queue.add(payload, i);
    // queue.then(i,i)    
}




// #execute() {
        
//         console.log(this.lengthQueue);
//         if (this.queuesize >= this.countSizeConcurrency) {
//             return;
//         }
//         for (let i = 1; i <= this.concurrency; i++) {
//             payload(i);
//             this.queuesize = this.queuesize + 1;
            
//             if (this.queuesize === this.concurrency) {
//                 return
//             }
//         }
//         // console.log(this.queuesize);
//         // console.log(this.lengthQueue);
//     }


   


// callingThePayload() {
//         if (this.promises.length === 0) {
//             return;
//         }
//         this.#execute();
// }

// let promises = [];

// for (let i = 1; i <= 5; i++){
//     const p = payload(i);
//     promises.push(p);
//     console.log(promises)
//     if (fulfilled) {
//         console.log('Ура!');
//     }
//         // #execute();
     
// }










    
// queue.addPromise(payload);

// addPromise(payload) {
    //     for (let i = 21; i <= 100; i++){
    //         this.add(payload, i);
    //     }
        
    // }


// add(payload, index) {
//         if (this.promises.length >= this.queuesize) {
//             return
//         }
//         this.promises.push(payload);
//         payload(index);
//         console.log(`добавлен промис ${index}`);
//         console.log(this.promises);
        
//         this.#execute();
// }












