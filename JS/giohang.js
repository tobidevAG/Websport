
const input = document.querySelector('#sl input');
const cong = document.getElementById('cong');
const tru = document.getElementById('tru');
const cong1 = document.getElementById('cong+');
const tru1 = document.getElementById('tru-');
const sizes=document.querySelector('.sizegy input');
const xoa1=document.querySelectorAll('.xoa1');
const tamtinh=document.querySelectorAll('.tamtinh')
const dongia=document.querySelector('.dongia')
// function updateTamtinh() {
//     const sl = parseInt(input.value) ;
//     const gia=parseInt(dongia)
//     tamtinh.forEach(el => {
//         el.innerText = (gia * sl).toString() ;
//     });
// }
function updateTamtinh() {
    const sl = parseInt(input.value) ;  
    const price = parseInt(dongia.innerText) ;

    tamtinh.forEach(el => {
        el.innerText = (price * sl).toString() ;
    });
}


cong1.addEventListener('click',()=>{
    let a=parseInt(sizes.value);
    if(a+1>44){
        alert("size giày này không có trong cửa hàng")
    }
    else{
        sizes.value=a+1
    }
})
tru1.addEventListener('click',()=>{
    let a=parseInt(sizes.value);
    if(a-1<39){
        alert("size giày này không có trong cửa hàng")
        
    }
    
    else{
        sizes.value=a-1
    }
})

cong.addEventListener('click', () => {
  let a = parseInt(input.value);
  if(a+1<=3){
  input.value = a + 1;
  updateTamtinh()
}
  else
  alert("hàng không đủ số lượng")
});

tru.addEventListener('click', () => {
  let a = parseInt(input.value);
  if(a-1>0)
    input.value = a - 1;
    updateTamtinh()
});
///xóa
xoa1.forEach(a => {
    a.addEventListener('click', function() {
      // Tìm hàng <tr> chứa nút và xóa
      const cot = this.closest('tr');
      const thanhtoan=document.querySelector(".thanhtoan")
      if (cot) cot.remove();
      if(thanhtoan) thanhtoan.remove()
    });
});



