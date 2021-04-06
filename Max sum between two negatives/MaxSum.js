/*

You have a list of integers. The task is to return the maximum sum of the elements
 located between two negative elements, or -1, Nothing, or a similar empty value, 
if there is no such sum. No negative element should be present in this sum.

*/


function maxSumBetweenTwoNegatives(a) {
   // return 0 || -1 ;

   let b = [];
   let returnadd = 0;
   
    
    a.forEach(function(element,currentval) {
        //find first element
        //console.log(currentval)
        if (element < 0){
            //console.log(currentval)
            b.push(currentval);
        }
        
    }, this);

    b.forEach(function(element,currentval) {
        //find first element
        //console.log(currentval)
        
            //console.log(element)
            //check for existence of next value
            if (b[currentval + 1]){
                console.log((element+1) + ":" +(b[currentval+1]))
               // let slice = a.slice((element+1), (b[currentval+1]-1))
                let slice = a.slice((element+1), (b[currentval+1]))
                let test = 0;
                slice.forEach(function(sliceelement,slicecurrentval) {
                    console.log(sliceelement);
                    test = test + sliceelement;
                },this)

                if (test > returnadd)
                    returnadd = test;
            }
        
        
    }, this);

    return returnadd;
  }

 /* assert.strictEqual( maxSumBetweenTwoNegatives([-1,6,-2,3,5,-7]), 8 );
  assert.strictEqual( maxSumBetweenTwoNegatives([5,-1,-2]), 0 );
  assert.strictEqual( maxSumBetweenTwoNegatives([1,-2]), -1 ); */


  console.log(maxSumBetweenTwoNegatives([-1,6,-2,3,5,-7]))