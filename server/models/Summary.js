const Joi = require('joi');

class Summary {
  constructor(id, title, originalText, summaryText, date, status) {
    this.id = id;
    this.title = title;
    this.originalText = originalText;
    this.summaryText = summaryText;
    this.date = date;
    this.status = status;
  }

  // Joi validation schema
  static get schema() {
    return Joi.object({
      id: Joi.number().integer().positive().required(),
      title: Joi.string().trim().min(1).required(),
      originalText: Joi.string().trim().min(1).required(),
      summaryText: Joi.string().trim().min(1).required(),
      date: Joi.date().required(),
      status: Joi.string().valid('pending', 'completed', 'failed').required()
    });
  }

  // Validate the instance
  validate() {
    const { error } = Summary.schema.validate(this);
    if (error) {
      throw new Error(error.details[0].message);
    }
    return this;
  }

  // Create from plain object
  static fromObject(obj) {
    const summary = new Summary(obj.id, obj.title, obj.originalText, obj.summaryText, obj.date, obj.status);
    return summary.validate();
  }
}

module.exports = Summary;