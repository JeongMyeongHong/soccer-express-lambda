const { getBmi, getcalc } = require("../services/basicService")

exports.calc = (req, res) => {
    const {num1, opcode, num2} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`num1 : ${num1}`)
    console.log(`연산자 : ${opcode}`)
    console.log(`num2 : ${num2}`)
    const json = getcalc(req.body)
    console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
    res.json(json)
}

exports.bmi = (req, res) => {
    const {name, height, weight} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`이름 : ${name}`)
    console.log(`키 : ${height}`)
    console.log(`몸무게 : ${weight}`)
    const json = getBmi(req.body)
    console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
    res.json(json)
}