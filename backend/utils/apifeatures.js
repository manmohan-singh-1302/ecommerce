class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i", // this will search for the queryStr regardless of the lowercase or uppercase
          },
        }
      : {}; // if the keyword is not found it will return this empty array

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    //remove some fields  for category
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);

    //now just assign the query
    this.query = this.query.find(queryCopy);
    return this;
  }
}

module.exports = ApiFeatures;
