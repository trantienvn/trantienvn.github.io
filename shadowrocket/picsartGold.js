let objc = {
    "status": "success",
    "response": [
        {
            "is_eligible_for_grant": true,
            "limitation": {
                "max_count": 10,
                "limits_exceeded": false
            },
            "expire_date": 1741007726000,
            "order_id": "160001326559771",
            "purchase_date": 1663982350000,
            "original_order_id": "160001326559771",
            "reason": "ok",
            "is_eligible_for_introductory": false,
            "subscription_id": "com.picsart.studio.subscription_plus_yearly",
            "is_trial": false,
            "status": "SUBSCRIPTION_PURCHASED",
            "plan_meta": {
                "product_id": "subscription_plus_yearly",
                "frequency": "yearly",
                "scope_id": "full",
                "id": "com.picsart.studio.subscription_plus_yearly",
                "storage_limit_in_mb": 5120,
                "level": 1500,
                "type": "renewable",
                "description": "plus",
                "tier_id": "gold_old",
                "permissions": [
                    "premium_tools_standard",
                    "premium_tools_ai"
                ]
            }
        }
    ],
    "data": {
        "is_subscribed": true,
        "is_trial_used": false,
        "is_pending": false,
        "payment_error_message": null,
        "country_code": null,
        "subscription_id": "com.picsart.studio.subscription_test_yearly",
        "is_trial_limit_reached": false,
        "tier_meta": {
            "id": "gold_old",
            "level": 1500,
            "permissions": [
                "premium_tools_standard",
                "premium_tools_ai"
            ],
            "storage_limit_in_mb": 5120
        }
    }
}
$done({ response: {body: JSON.stringify(objc),status: 200} });
