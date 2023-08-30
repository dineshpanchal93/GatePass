// Copyright (c) 2022, Dinesh Panchal and contributors
// For license information, please see license.txt

frappe.ui.form.on('Delivery Challan', {
    refresh: function(frm) {
        frm.fields_dict['delivery_challan_item'].grid.get_field('quantity').get_query = function(doc, cdt, cdn) {
            var d = locals[cdt][cdn];
            return {
                filters: {
                    
                }
            };
        };
    }
});
frappe.ui.form.on('Delivery Challan Item', {
    quantity: function(frm, cdt, cdn) {
        var child = locals[cdt][cdn];
        if (child.quantity) {
            calculate_net_total(frm);
            calculate_total_qty(frm);
        }
    },
    rate: function(frm, cdt, cdn) {
        var child = locals[cdt][cdn];
        frappe.model.set_value(cdt, cdn, "amount", child.quantity * child.rate);
        calculate_net_total(frm);
        calculate_total_qty(frm);
    }

});
function calculate_net_total(frm) {
    let items = frm.doc.delivery_challan_item || [];
    let totalAmount = 0;
	let totalqty= 0;

    for (let item of items) {
		if(item.quantity && item.rate){
        totalAmount += item.amount;
		totalqty += item.quantity;
		}
    }
	console.log("!!!!!!!!!!!!", totalqty)
    frm.set_value("net_total", totalAmount);
	frm.set_value("total_qty",totalqty)
	frm.refresh_field("total_qty")
    frm.refresh_field("net_total");
	
}
