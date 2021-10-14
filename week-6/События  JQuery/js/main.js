

// $('#btn').on('click', function() {
//     alert('BTN CLIKCED')
// })

// $(document).ready(function() {
//     // $('#btn').click(function(){ 
//     //     alert('BTN CLICKED')
//     // })

//     // $(window).mousemove(function(e) {
//     //     console.log(e);
//     // })


//     // $('.default').on('click', function() {
//         // $('.buttons').append('<button class="ddelete">Delete</button>')
//         // $('.delete').on('click', function() {
//         //     alert('DELETE BTN CLIKCKED')
//         // })
//     // })

//     // $('.buttons').click(function() {
//     //     alert('DELETE BTN CLICKED')
//     // })

//     // $('.block').fadeOut(2000)
//     // $('block').fadeIn(2000)
//     $('block').hide(2000)
//     $('block').show(2000)




// })

// let a = 0;
// $(document).on('keydown', function (e) {
    //   if (e.key === 'ArrowRight') {
        //     kub.css('transform', `translateX(${(a += 100)}px)`);
        //   } else if (e.key === 'ArrowLeft') {
            //     kub.css('transform',`translateX(${(a -= 100)}px)`);
            //   }
            // });
            
let kub = $('#cont');
$(document).on('keydown', function (e) {
    if (e.keyCode === 39) {
      kub.animate({ left: '+=50px' }, 'slow');
    } else if (e.keyCode === 37) {
      kub.animate({ left: '-=50px' }, 'slow');
    }
  });














































































































