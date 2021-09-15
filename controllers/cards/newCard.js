const newCardSchemaByManual = require("../../models/cards/cards")
const newCardSchemaByBank = require("../../models/cards/cardsBank")

const newCorporateCardByManual = async (req, res) => {
    try {
        let card = new newCardSchemaByManual({
            type: "Corporate",
            cardType: req.body.cardType,
            accountName: req.body.accountName,
            currency: req.body.currency,
            bankName: req.body.bankName,
            billingDate: req.body.billingDate,
            description: req.body.description
        })
        // console.log(card);
        const saveCard = await card.save()
        res.end(JSON.stringify(saveCard))
    } catch (err) {
        console.log(err);
    }
}

const newPersonalCardByManual = async (req, res) => {
    try {
        let card = new newCardSchemaByManual({
            type: "Personal",
            cardType: req.body.cardType,
            accountName: req.body.accountName,
            currency: req.body.currency,
            bankName: req.body.bankName,
            billingDate: req.body.billingDate,
            description: req.body.description
        })
        // console.log(card);
        const saveCard = await card.save()
        res.end(JSON.stringify(saveCard))
    } catch (err) {
        console.log(err);
    }
}

const newCorporateCardByBank = async (req, res) => {
    try {
        let card = new newCardSchemaByBank({
            type: "Corporate",
            customerID: req.body.customerID,
            password: req.body.password
        })
        console.log(req.body.customerID);
        // console.log(card);
        const saveCard = await card.save()
        res.end(JSON.stringify(saveCard))
    } catch (err) {
        console.log(err);
    }
}

const newPersonalCardByBank = async (req, res) => {
    try {
        let card = new newCardSchemaByBank({
            type: "Personal",
            customerID: req.body.customerID,
            password: req.body.password
        })
        // console.log(card);
        const saveCard = await card.save()
        res.end(JSON.stringify(saveCard))
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    newCorporateCardByManual,
    newPersonalCardByManual,
    newCorporateCardByBank,
    newPersonalCardByBank
}