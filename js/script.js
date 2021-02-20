$(document).ready(function(){
    $('.product-description button').on('click', function(e){
        e.preventDefault();
        var orderItems = localStorage.getItem("orderItems") || "{}";
        console.log(orderItems);
        orderItems = JSON.parse(orderItems);
        var price = $(this).attr('data-price');
        var name = $(this).attr('data-name');
        var qty = $(this).prev().val();
        console.log(name+": "+price+" "+qty);
        var obj = {
            price: price,
            name: name,
            qty: qty
        }
        orderItems[name] = obj;
        localStorage.setItem("orderItems", JSON.stringify(orderItems))
    });

    var orderItemsList = localStorage.getItem("orderItems") || "{}";
    console.log(orderItemsList);
    orderItemsList = JSON.parse(orderItemsList);
    var totalAmount = 0;
    for (var name in orderItemsList) {
        console.log(`${name}: ${orderItemsList[name]}`);
        var elem = "<tr>";
        var item = orderItemsList[name];
        var total = item.price * item.qty;
        elem += "<td>"+name+"</td>";
        elem += "<td class='text-center'>Rs."+item.price+"</td>";
        elem += "<td class='text-center'>"+item.qty+"</td>";
        elem += "<td class='text-right'>Rs."+total+"</td></tr>";
        totalAmount += total;
        $('.orders tbody').append(elem);
        
      }
    var totalElem = "<tr><td class='highrow'></td><td class='highrow'></td><td class='highrow'><strong>Total</strong></td>";
    totalElem +="<td class='highrow text-right'>Rs."+totalAmount+"</tr>";

    $('.orders tbody').append(totalElem);


});
