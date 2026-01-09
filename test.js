process.stdin.on('data', function (data) { // enter a Manufacturers' Name
let input = data.toString().trim();
 const arr = createArray();  // this function is working already. DO NOT CHANGE this line. This creates an array of products.Please see below the actual product information.
 const obj = createProperties(arr); // complete the function being called (see below).  Convert an array in (arr) into an object (obj)

 let pFound = showProducts(obj, input); // complete this function wherein it should console out all product objects in (obj) under the Manufacturer's Name in (input)
 // test pFound and give appropriate message
 if (!pFound) {
     console.log(`Manufacturer ${input} Not Found in product list`);
 }

 process.exit()

});

/* ------------------------ end of the main part of the code --------------------------- */

/* ------------------------- 1st function createProperties() ----------------------

  The function should be able to create objects with the following structure and properties of the given array saved in pInfo.
  Please refer to the list of product information at the bottom inside function createArray()
  
  sample products objects created:
  {
    AB3023010: {
      pName: 'Capacitor C10',
      pCat: 'Electronics',
      pMan: 'ElecInnovate',
      pPrice: '2.5',
      pQty: '100'
    },
    AB3023011: {
      pName: 'Gear Set G50',
      pCat: 'Mechanical',
      pMan: 'GearTech',
      pPrice: '35',
      pQty: '400'
    },
  }
*/

function createProperties(pInfo) {
    const obj = {};
    for (let i=0; i < pInfo.length; i+=6) {
        obj[pInfo[i]] = { // this represents the productid.
              // create the properties here for each productid...refer to the list below under createArray      
              pName: pInfo[i + 1],
              pCat: pInfo[i + 2],
              pMan: pInfo[i + 3],
              pPrice: pInfo[i + 4],
              pQty: pInfo[i + 5]
         };
    }
    //console.log(obj);
    return obj;
}

/* ------------------------- 2nd function ----------------------

The function should return true there were products printed 
otherwise, false should be returned

*/

function showProducts (obj, input) {
  let products = {}
  let retValue = false;
  for (let key in obj) {
       // fill-in the required line codes to get products under a Manufacturer name in (input) from the object (obj)
       if (obj[key].pMan === input) {
           products[key] = obj[key];
           retValue = true;
       }
  }

  if (retValue) console.log(products) // this will display on the console all found products
  return retValue;  // retValue should be either true of false.
}

/* */


// DO NOT CHANGE ANYTHING FROM THIS POINT ONWARDS

// This will create the array from which the object structure will be created.

function createArray() {
    // EACH LINE below are information regarding one(1) electronic or mechanical product 
    // with descriptions as: productid, pName, pCat, pMan, pPrice, pQty 
    const pInfo = [
"AB3023010","Capacitor C10","Electronics","ElecInnovate","2.5","100",
"AB3023011","Gear Set G50","Mechanical","GearTech","35","400",
"AB3023012","Transistor T20","Electronics","Techtronics","3.5","800",
"AB3023013","Pump P300","Mechanical","FluidDynamics","75","200",
"AB3023014","Resistor R5","Electronics","CircuitCo","1","1500",
"AB3023015","Bearing B30","Mechanical","BuildMakers","10","600",
"AB3023016","Diode D15","Electronics","LuminaTech","0.75","1200",
"AB3023017","Valve V100","Mechanical","MotoWorks","20","300",
"AB3023018","Microphone M30","Electronics","SoundSolutions","15","700",
"AB3023019","Screw Set S100","Mechanical","FastenMasters","7.5","900",
"AB3023020","Speaker S50","Electronics","AudioTech","20","400",
"AB3023021","Shaft Assembly A150","Mechanical","GearTech","45","250",
"AB3023022","Capacitor C20","Electronics","ElecInnovate","3","800",
"AB3023023","Piston P400","Mechanical","EngineMasters","60","150",
"AB3023024","Relay R10","Electronics","SenseSys","5","1000",
"AB3023025","Axle Assembly A200","Mechanical","BuildMakers","80","200",
"AB3023026","Capacitor C30","Electronics","Techtronics","4","600",
"AB3023027","Gearbox G200","Mechanical","GearTech","120","100",
"AB3023028","Switch S20","Electronics","ElecInnovate","8","700",
"AB3023029","Spring Set S200","Mechanical","SpringTech","25","400",
"AB3023030","Amplifier A100","Electronics","AudioTech","50","300",
"AB3023031","Bearing B40","Mechanical","BuildMakers","15","800",
"AB3023032","Capacitor C40","Electronics","Techtronics","5","500",
"AB3023033","Gear Set G100","Mechanical","GearTech","80","150",
"AB3023034","Sensor S25","Electronics","SenseSys","10","900",
"AB3023035","Nut and Bolt Set N50","Mechanical","FastenMasters","12","700",
"AB3023036","Amplifier A200","Electronics","AudioTech","100","200",
"AB3023037","Circuit Board C20","Electronics","CircuitCo","10","1000",
"AB3023038","Gearbox G300","Mechanical","GearTech","200","500",
"AB3023039","Transducer T10","Electronics","SensiTech","25","500",
"AB3023040","Spring Set S300","Mechanical","SpringTech","40","300"
];
  return pInfo;
}