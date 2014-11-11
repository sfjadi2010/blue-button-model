module.exports = {
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
        "data": {
            "type": "object",
            "properties": {
                "allergies": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/allergy"
                    }
                },
                "demographics": {
                    "$ref": "http://local.com/demographics"
                },
                "encounters": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/encounter"
                    }
                },
                "immunizations": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/immunization"
                    }
                },
                "medications": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/medication"
                    }
                },
                "problems": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/problem"
                    }
                },
                "plan_of_care": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/plan_of_care_entry"
                    }
                },
                "procedures": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/procedure"
                    }
                },
                "results": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/result"
                    }
                },
                "social_history": {
                    "$ref": "http://local.com/social_history"
                },
                "payers": {
                    "$ref": "http://local.com/payers"
                },
                "vitals": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/vital"
                    }
                },
                "claims": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/claim"
                    }
                },
                "providers": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/provider"
                    }
                },
                "medical_devices": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/medical_device"
                    }
                },
                "family_history": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/family_history_entry"
                    }
                }
            },
            "additionalProperties": true
        },
        "errors": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "meta": {
            "type": "object",
            "properties": {
                "type": {
                    "type": "string"
                },
                "version": {
                    "type": "string"
                }
            },
            "additionalProperties": true
        }
    }
};