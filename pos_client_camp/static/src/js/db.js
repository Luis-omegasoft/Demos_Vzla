odoo.define('point_of_sale.DB_2', function (require) {
"use strict";
    var PosDB = require('point_of_sale.DB');
    PosDB.include({
        _partner_search_string: function(partner){
            var str =  partner.name || '';
            if(partner.barcode){
                str += '|' + partner.barcode;
            }
            if(partner.address){
                str += '|' + partner.address;
            }
            if(partner.phone){
                str += '|' + partner.phone.split(' ').join('');
            }
            if(partner.mobile){
                str += '|' + partner.mobile.split(' ').join('');
            }
            if(partner.email){
                str += '|' + partner.email;
            }
            if(partner.vat){
                str += '|' + partner.vat;
            }
            if(partner.identification_id){
                str += '|' + partner.identification_id;
            }
            str = '' + partner.id + ':' + str.replace(':','') + '\n';
            return str;
        },

    });
    return PosDB;
});