// function rond(a) {
    //      return a.html('<img src="circle.jpg" alt="rond">')
    // };
    var star = ($(this).html('<img src="star.png" alt="star">'));
    // var caseVide = 0;
    var count = 0;
    // console.log("hi");
    
    
    $(".case").click(function() {
        
        
        
        if ($(this).html() === "") {
            if (count%2 === 0) {
                //  rond($(this));
                //  console.log(rond);
                ($(this).html("<img src='circle.jpg' alt='rond'>"));
            } else {
                
                ($(this).html('<img src="star.png" alt="star">'));
            }
            count++;
        }
    });
    
    
    $("#vider").click(function() {
        $(".case").empty();
    });
    
    
    // $(".case").click(function(){
        //     console.log("hi");
        //     count++;
        
        //     if ($(this).html() === ""){
            //         if(count%2 === 0){
                //             console.log(this);
                //         // position = ($(this).data('position'));
                //         // data.push(position);
                //             ($(this).html("<img class='image img-responsive' width='150' height='100' src='circle.jpg'/>"));
                
                //     } else  {
                    
                    //             ($(this).html("<img class='image img-responsive' width='150' height='100' src='star.png'/>"));
                    
                    //         }
                    //     }
                    
                    // });
                    
                    
                    
                    
                    
                    // var src = ($('#img').attr('src') === 'circle.jpg') ? 'star.png' : 'circle.jpg';
                    // $('#img').attr('src', src);
                    // // $(this).html("src");
                    
                    
                    