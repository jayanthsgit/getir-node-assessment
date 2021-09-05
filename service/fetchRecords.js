const records = require('../models/records')
//Function to fetch records
const fetch_records = async (req, res) => {
    //Query to filter dates
	let query = { createdAt: { $gte: new Date(new Date(req.body.startDate).setHours(00, 00, 00)), $lte: new Date(new Date(req.body.endDate).setHours(23, 59, 59))}}
	let fetchedData = await records.find(query)

	let filteredData = [];
	
		fetchedData.map(item => {
			let sum = 0
			for(let count of item.counts){
				sum += count
			}
			let totalCount = sum;
			//Filter totalCount in the range of min and max counts
				if(totalCount > req.body.minCount && totalCount < req.body.maxCount){
					const obj = {
						key: item.key,
						createdAt: new Date(item.createdAt),
						totalcount: totalCount
					}
					filteredData.push(obj)
				}
		})
        //Return results
	if(filteredData.length>0){
		res.status(200).send({
			code: 0,
			msg: "Success",
			records: filteredData
		})
	} else {
		res.status(404).send({
		  code: 1,
			msg: "Unsuccessful! please modify your search",
			records: filteredData
		})
	}
}

module.exports = { fetch_records }
