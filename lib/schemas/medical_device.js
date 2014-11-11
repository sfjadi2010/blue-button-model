module.exports = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/common_models#/properties/cda_id"
            },
            "minItems": 1
        },
        "product": {
            "$ref": "http://local.com/common_models#/properties/cda_coded_entry"
        },
        "status": {
            "type": "string"
        },
        "date_time": {
            "$ref": "http://local.com/common_models#/properties/cda_date"
        }
    },
    "additionalProperties": false,
    "required": ["product"]
};