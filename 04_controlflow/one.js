//if

// < , > , >= , <= , == , != , === , !== 

// if( 3 !== '3'){
//     console.log(`ok`);
    
// }

// +++++++++++++++++++++. implicit scope ++++++++++++++++++++++++++++++++===

// const balance=1000
// if(balance > 300) console.log(`balance is enough`) //balance is enough



// ++++++++++++++++++++ && , || ++++++++++++++++++++






//***************************************************  SWITCH ******************************************** */

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// let month= undefined //not a month

// let month //not a month

// const month=null //not a month

const month=3
switch (month) {
    case 1:
        console.log('January');
       break;
    case 2:
        console.log('february');
        break;
    case 3:
        console.log('march');
        break;
    default:
        console.log('not a month');
        
        break;
}

// without break @Hardik27811 ➜ /workspaces/js-hindi-youtube (main) $ node 04_controlflow/one.js
// January
// february
// march
// not a month