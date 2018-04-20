var express = require('express');
var router = express.Router();
var invoice_dal = require('../dal/invoice_dal');

router.get('/all', function(req, res, next)
{
    invoice_dal.getAll(function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            console.log(result);
            res.render('invoice/invoice_all', {invoice: result});
        }
    })

});

module.exports = router;