let { request, gql } = require('graphql-request')

module.exports.getETHPrice = async function getETHPrice() {
  let query = `{
      bundle(id: "1") {
        ethPrice
      },
    }`
  let response = await request(
    'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
    query
  )
  console.log(response)
}
