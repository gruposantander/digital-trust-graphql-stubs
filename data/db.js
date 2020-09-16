module.exports = {

    users: [
        { 
            id: 1, 
            username: "hilton",
            personal_basic_detail_id: 1,
            business_basic_detail_id: null
        },
        { 
            id: 2, 
            username: "laura",
            personal_basic_detail_id: 2,
            business_basic_detail_id: 1
        }
    ],
    personal_basic_details: [
        { 
            id: 1, 
            user_id: 1,
            given_name:  "Yost",
            family_name: "Hilton",
            birthdate: new Date("1985-05-22"),
            title: "Mrs",
            gender: "female",
            civil_status: "married",
            country_of_birth: "GB",
            nationality: "GB",
            ial: "2"
        },
        { 
            id: 2, 
            user_id: 2,
            given_name:  "Laura",
            family_name: "Lavine",
            birthdate: new Date("1965-02-19"),
            title: "Mrs",
            gender: "female",
            civil_status: "married",
            country_of_birth: "GB",
            nationality: "GB",
            ial: "2"
        }
    ],
    business_basic_details: [
        {
            id: 1, 
            user_id: 2,
            company_registered_name: "Zool Ltd",
            company_trade_name: "Zool Ltd",
            company_type: "Sole Trader",
            company_start_date: new Date("2015-01-19"),
            company_end_date: new Date("2018-01-19"),
            company_country_incorporation: "GB",
            ial: "3"
        }
    ],
    id_documents: [
        {
            id: 1,
            user_id: 1,
            type: "passport",
            identification: "SQ8RN5LX1",
            issuer_country: "GB",
            ial: "3"
        },
        {
            id: 2,
            user_id: 1,
            type: "driving_license",
            identification: "HILT131123131206",
            issuer_country: "GB",
            ial: "2"
        },
        {
            id: 3,
            user_id: 2,
            type: "national_card",
            identification: "44112233T",
            issuer_country: "GB",
            ial: "3"
        }
    ],
    addresses: [
        {
            id: 1,
            user_id: 1,
            ial: "2",
            formatted: "19 Kacey Forest, Redding, QZBAD9, United Kingdom",
            street_address: "19 Kacey Forest",
            locality: "Redding",
            region: "",
            postal_code: "QZBAD9",
            country: "United Kingdom"
        },
        {
            id: 2,
            user_id: 1,
            ial: "1",
            formatted: "33 Mountain, Lockhill, LH1AB8, United Kingdom",
            street_address: "Lockhill",
            locality: "33 Mountain",
            region: "",
            postal_code: "LH1AB8",
            country: "United Kingdom"
        },
        {
            id: 3,
            user_id: 2,
            ial: "2",
            formatted: "91, Savannah Falls, Rotherham, CE0YYW, United Kingdom",
            street_address: "91, Savannah Falls",
            locality: "Rotherham",
            region: "",
            postal_code: "CE0YYW",
            country: "United Kingdom"
        }
    ],
    phone_numbers: [
        {
            id: 1,
            user_id: 1,
            ial: "2",
            value: "0000000000"
        },
        {
            id: 2,
            user_id: 1,
            ial: "1",
            value: "0000000001"
        },
        {
            id: 3,
            user_id: 2,
            ial: "2",
            value: "0000000000"
        },
        {
            id: 4,
            user_id: 2,
            ial: "1",
            value: "0000000001"
        }
    ],
    emails: [
        {
            id: 1,
            user_id: 1,
            ial: "2",
            value: "hilton@exampleop.com"
        },
        {
            id: 2,
            user_id: 1,
            ial: "1",
            value: "hilton22@exampleop2.com"
        },
        {
            id: 3,
            user_id: 2,
            ial: "2",
            value: "laura@exampleop.com"
        },
        {
            id: 4,
            user_id: 2,
            ial: "1",
            value: "laura22@exampleop2.com"
        }
    ],
    finances: [
        {
            id: 1,
            user_id: 1,
            currency: "GBP",
            total_balance: "5000.00",
            last_year_money_in: "40000.00",
            last_quarter_money_in: "9000.00",
            average_monthly_money_in: "3000.00",
            ial: 3
        },
        {
            id: 2,
            user_id: 2,
            currency: "GBP",
            total_balance: "15000.00",
            last_year_money_in: "80000.00",
            last_quarter_money_in: "20000.00",
            average_monthly_money_in: "5000.00",
            ial: 3
        },
        {
            id: 3,
            user_id: 2,
            currency: "EUR",
            total_balance: "15000.00",
            last_year_money_in: "0.00",
            last_quarter_money_in: "0.00",
            average_monthly_money_in: "0.00",
            ial: 1
        },
        {
            id: 4,
            user_id: 1,
            currency: "EUR",
            total_balance: "25000.00",
            last_year_money_in: "8000.00",
            last_quarter_money_in: "3000.00",
            average_monthly_money_in: "500.00",
            ial: 3
        }
    ],
    bank_accounts: [
        {
            id: 1,
            user_id: 1,
            bankId: "09012700047186",
            type: "Personal",
            entity: "Bank A",
            product: "Current Account",
            country: "GB",
            currency: "GBP",
            ial: "3"
        },
        {
            id: 2,
            user_id: 2,
            bankId: "06089900072985",
            type: "Personal",
            entity: "Bank B",
            product: "Current Account",
            country: "GB",
            currency: "GBP",
            ial: "2"
        },
        {
            id: 3,
            user_id: 1,
            bankId: "09012700055123",
            type: "Personal",
            entity: "Bank A",
            product: "Savings Account",
            country: "GB",
            currency: "EUR",
            ial: "3"
        },
    ],
    bank_account_identifiers: [
        {
            id: 1,
            bank_account_id: 1,
            type: "UK.SortCodeAccountNumber",
            identification: "09012700047186"
        },
        {
            id: 2,
            bank_account_id: 1,
            type: "IBAN",
            identification: "UK002209209012700047186"
        },
        {
            id: 3,
            bank_account_id: 2,
            type: "UK.SortCodeAccountNumber",
            identification: "06089900072985"
        },
        {
            id: 4,
            bank_account_id: 3,
            type: "UK.SortCodeAccountNumber",
            identification: "09012700055123"
        }
    ]
}