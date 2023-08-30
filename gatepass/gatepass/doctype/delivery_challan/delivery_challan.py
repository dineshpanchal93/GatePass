# Copyright (c) 2022, Dinesh Panchal and contributors
# For license information, please see license.txt

# import frappe
# from frappe.model.document import Document

# class DeliveryChallan(Document):
#     def before_save(self):
#         total_amount = 0
#         total_qty = 0

#         for item in self.delivery_challan_item:
#             item.amount = float(item.quantity) * float(item.rate)
#             total_amount += item.amount
#             total_qty += float(item.quantity)

#         self.net_total = total_amount
#         self.total_qty = total_qty


            # print("----------------------",i.amount)
