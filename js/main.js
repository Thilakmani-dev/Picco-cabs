function counter(){
  document.querySelector('.counting').each(function() {
    var $this = document.querySelector(this),
        countTo = $this.attr('data-count');
    
    document.querySelector({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
  
  });
}