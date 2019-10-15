const ids = ['very_satisfied','satisfied','neither','dissatisfied','very_dissatisfied']

document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});
function drawSelectedBorder(ele){
    let id_value = ele.id
    ids.forEach(function(id){
        let obj = document.getElementById(id)
        if(id === id_value){
            obj.style.border = "solid 1px yellow";
        }else{
            obj.style.borderWidth = "0px";
        }
    })
}